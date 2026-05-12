// Supabase Edge Function: notify-new-lead
//
// Triggered by a Database Webhook on `public.leads` INSERT.
// Sends a formatted email to the admin via Resend.
//
// Required Edge Function secrets (Dashboard → Edge Functions → Secrets):
//   RESEND_API_KEY  — from resend.com/api-keys
//   ADMIN_EMAIL     — destination inbox (e.g. ya.mashkovtseva@gmail.com)
//   FROM_EMAIL      — optional, defaults to onboarding@resend.dev

interface LeadRow {
  id: string;
  email: string;
  name: string | null;
  company: string | null;
  team_size: number | null;
  source: string;
  features: string[] | null;
  message: string | null;
  status: string;
  lang: string | null;
  user_agent: string | null;
  created_at: string;
}

interface WebhookPayload {
  type: 'INSERT' | 'UPDATE' | 'DELETE';
  table: string;
  schema: string;
  record: LeadRow;
  old_record?: LeadRow | null;
}

function esc(s: unknown): string {
  if (s == null) return '—';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

Deno.serve(async (req) => {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });

  let payload: WebhookPayload;
  try {
    payload = await req.json();
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  if (payload.type !== 'INSERT' || !payload.record?.email) {
    return new Response('Ignored', { status: 200 });
  }

  const apiKey = Deno.env.get('RESEND_API_KEY');
  const adminEmail = Deno.env.get('ADMIN_EMAIL') ?? 'ya.mashkovtseva@gmail.com';
  const fromEmail = Deno.env.get('FROM_EMAIL') ?? 'Vard CRM <onboarding@resend.dev>';
  if (!apiKey) return new Response('RESEND_API_KEY missing', { status: 500 });

  const l = payload.record;
  const features = Array.isArray(l.features) ? l.features.join(', ') : '';
  const created = new Date(l.created_at).toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' });
  const adminUrl = 'https://yamashkovtseva-blip.github.io/VARD/admin/';

  const html = `
    <div style="font-family:system-ui,-apple-system,sans-serif;color:#0A0B14;max-width:560px;margin:0 auto;padding:24px;">
      <p style="font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:#3DA89E;margin:0 0 8px;">Vard CRM · new lead</p>
      <h2 style="margin:0 0 4px;font-size:20px;">${esc(l.email)}</h2>
      <p style="margin:0 0 20px;color:#6B7290;font-size:13px;">${esc(l.source)} · ${esc(created)} MSK</p>

      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:6px 0;color:#6B7290;width:120px;">Name</td><td>${esc(l.name)}</td></tr>
        <tr><td style="padding:6px 0;color:#6B7290;">Company</td><td>${esc(l.company)}</td></tr>
        <tr><td style="padding:6px 0;color:#6B7290;">Team size</td><td>${esc(l.team_size)}</td></tr>
        <tr><td style="padding:6px 0;color:#6B7290;">Source</td><td>${esc(l.source)}</td></tr>
        <tr><td style="padding:6px 0;color:#6B7290;">Features</td><td>${esc(features || '—')}</td></tr>
        <tr><td style="padding:6px 0;color:#6B7290;">Lang</td><td>${esc(l.lang)}</td></tr>
        <tr><td style="padding:6px 0;vertical-align:top;color:#6B7290;">Message</td><td style="white-space:pre-wrap;">${esc(l.message)}</td></tr>
      </table>

      <div style="margin-top:24px;">
        <a href="${adminUrl}" style="display:inline-block;background:#0A0B14;color:#E8EAF2;text-decoration:none;padding:10px 18px;border-radius:6px;font-size:13px;font-weight:500;">Open in admin →</a>
        <a href="mailto:${esc(l.email)}?subject=Vard%20-%20${encodeURIComponent(l.source)}%20follow-up" style="display:inline-block;margin-left:8px;color:#3D4D9E;text-decoration:none;font-size:13px;padding:10px 0;">Reply directly</a>
      </div>
    </div>
  `;

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [adminEmail],
      reply_to: l.email,
      subject: `New lead: ${l.email} (${l.source})`,
      html,
    }),
  });

  if (!r.ok) {
    const err = await r.text();
    console.error('Resend failed', r.status, err);
    return new Response(`Resend: ${r.status} ${err}`, { status: 502 });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
});
