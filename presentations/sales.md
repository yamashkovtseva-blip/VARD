---
theme: default
title: Vard — for Data Teams That Can't Go Cloud
canvasWidth: 1280
aspectRatio: "16/10"
info: |
  Vard — self-hosted data notebook with local AI (source-available, BSL 1.1).
  For data teams in regulated industries: banks, healthcare, gov, defense.
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: fade
mdc: true
fonts:
  sans: 'Inter'
  mono: 'JetBrains Mono'
colorSchema: dark
favicon: /logo.png
---

<style>
@import url('./style.css');
.lang-toggle { position: fixed; top: 16px; right: 16px; z-index: 50; display: inline-flex; gap: 4px; padding: 4px; border: 1px solid rgba(168,174,203,0.15); background: rgba(15,17,32,0.7); border-radius: 6px; font-size: 11px; backdrop-filter: blur(8px); }
.lang-toggle a { padding: 3px 8px; border-radius: 4px; color: var(--vard-chalk-dim); text-decoration: none; }
.lang-toggle a.active { background: var(--vard-chalk); color: var(--vard-ink-950); font-weight: 500; }
</style>

<div class="lang-toggle">
  <a class="active" href="./">EN</a>
  <a href="../sales-ru/">RU</a>
</div>

<div class="flex flex-col items-center justify-center min-h-[70vh]">
  <img src="./logo.png" class="w-32 mb-8" />
  <h1 class="!text-6xl !mb-4">VARD</h1>
  <p class="text-2xl mb-2 dim">Modern data notebooks</p>
  <p class="text-2xl text-gradient font-semibold">for teams that can't send data to the cloud.</p>

  <div class="mt-16 text-sm mute">
    Live demo · vard.ru.tuna.am
  </div>
</div>

<!--
Открыть так: "У вас в команде аналитики. У вас регуляция, которая запрещает
отправлять данные в облако. Сегодня я покажу, как закрыть этот разрыв за 60 секунд".
-->

---
layout: default
---

# You probably know this pain.

<div class="grid grid-cols-2 gap-6 mt-10">

<div class="card !border-red-500/30">
  <span class="eyebrow !text-red-400">Cloud notebooks</span>
  <h3 class="!text-chalk !text-lg !mb-3">Hex · Deepnote · Mode</h3>
  <p class="text-sm dim mb-3">Modern UX, AI assistance, real-time collab.</p>
  <p class="text-sm !text-red-400 font-medium">→ Compliance team says no.</p>
  <p class="text-xs mute mt-1">Your data crosses the firewall. AI prompts go to OpenAI. Auditors raise eyebrows.</p>
</div>

<div class="card !border-yellow-500/30">
  <span class="eyebrow !text-yellow-400">Local notebooks</span>
  <h3 class="!text-chalk !text-lg !mb-3">Jupyter · Querybook</h3>
  <p class="text-sm dim mb-3">Self-hosted, free, your data stays put.</p>
  <p class="text-sm !text-yellow-400 font-medium">→ Your team hates it.</p>
  <p class="text-xs mute mt-1">No real-time collab. No AI. UX from 2014. Aging stack, friction everywhere.</p>
</div>

</div>

<div class="card !border-teal/40 !bg-teal/[0.04] mt-6">
  <p class="text-base text-chalk text-center">
    The choice today: <span class="dim">break compliance</span> or <span class="dim">demoralize your team.</span>
  </p>
</div>

<!--
Спросить аудиторию: "что вы используете сейчас?" — почти всегда Jupyter
+ Slack-скриншоты ИЛИ нелегальный Hex с одобрения "только для нечувствительных данных".
-->

---
layout: center
class: text-center
---

<span class="eyebrow">There's a third option.</span>

# What if your team got<br/><span class="text-gradient">Hex on their laptop?</span>

<p class="text-lg dim mt-8 max-w-2xl mx-auto">
  Modern AI-native notebook. Real-time collab. SQL + Python + R.<br/>
  All running entirely inside your network. Nothing leaves.
</p>

<div class="mt-10 flex justify-center gap-3">
  <span class="pill teal">✓ Self-hosted</span>
  <span class="pill teal">✓ Local AI</span>
  <span class="pill teal">✓ Source-available</span>
</div>

---
layout: default
---

# What you get out of the box.

<div class="grid grid-cols-2 gap-5 mt-8">

<div class="card">
  <span class="eyebrow !text-teal-light">Polyglot notebooks</span>
  <h3 class="!text-chalk !text-lg !mb-2">SQL + Python + R, one file</h3>
  <p class="text-sm dim mb-3">Query in SQL, transform in pandas, plot in ggplot. Variables shared across cells.</p>
  <pre class="!p-3 !text-[11px]"><code>events <span class="!text-violet-light">←</span> sql("select * from events")
df <span class="!text-violet-light">←</span> events.groupby("country")
chart <span class="!text-violet-light">←</span> ggplot(df, aes(month, mau))</code></pre>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">Real-time collaboration</span>
  <h3 class="!text-chalk !text-lg !mb-2">Two people, one notebook</h3>
  <p class="text-sm dim mb-3">Live cursors. Comments on cells. Like Google Docs — but for queries.</p>
  <div class="flex items-center gap-2 mt-3">
    <span class="pill !text-[10px]"><span class="teal">●</span> Sarah editing</span>
    <span class="pill !text-[10px]"><span class="violet">●</span> Marcus commenting</span>
  </div>
</div>

<div class="card">
  <span class="eyebrow !text-teal-light">Local AI assistant</span>
  <h3 class="!text-chalk !text-lg !mb-2">Schema-aware suggestions</h3>
  <p class="text-sm dim mb-3">AI that knows your tables and columns. Generates queries that actually run.</p>
  <p class="text-xs mute"><span class="teal">›</span> "monthly active users by country, last 90 days"</p>
  <p class="text-xs dim ml-2 mt-1">→ correct SQL, no hallucinated columns</p>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">Connect anything</span>
  <h3 class="!text-chalk !text-lg !mb-2">Postgres, DuckDB, Snowflake, CSV</h3>
  <p class="text-sm dim mb-3">All major databases supported. Drop a CSV directly. Build connectors via SDK.</p>
  <div class="flex flex-wrap gap-1.5">
    <span class="pill !text-[10px]">Postgres</span>
    <span class="pill !text-[10px]">DuckDB</span>
    <span class="pill !text-[10px]">Snowflake</span>
    <span class="pill !text-[10px]">CSV</span>
  </div>
</div>

</div>

<!--
Демо-пауза. Если ноутбук подключён — открыть vard.ru.tuna.am и показать
30 секунд: написать prompt, получить SQL, переключиться на chart.
-->

---
layout: default
---

# Privacy isn't a checkbox. It's the architecture.

<div class="card mt-6 !p-6">

```
   ┌────────────────────────────────────────────────────┐
   │                YOUR NETWORK PERIMETER              │
   │                                                    │
   │   Browser ──▶ FastAPI ──▶ Postgres                 │
   │     │            │                                 │
   │     │            └──▶ Ollama (local LLM)           │
   │     │                                              │
   │     └──▶ Yjs (collaboration)                       │
   │                                                    │
   └────────────────────────────────────────────────────┘
                           │
                           │   ✕  zero outbound traffic
                           ▼
                       (cloud)
```

</div>

<div class="grid grid-cols-3 gap-3 mt-6">
  <div class="card !p-4 !border-teal/30">
    <span class="eyebrow !text-teal-light">Data</span>
    <p class="text-xs dim">Stays in Postgres on your infra. Never crosses your VPC.</p>
  </div>
  <div class="card !p-4 !border-teal/30">
    <span class="eyebrow !text-teal-light">AI</span>
    <p class="text-xs dim">Ollama runs locally. Prompts and queries never leave.</p>
  </div>
  <div class="card !p-4 !border-teal/30">
    <span class="eyebrow !text-teal-light">Collab</span>
    <p class="text-xs dim">Yjs CRDT inside your network. No third-party SaaS.</p>
  </div>
</div>

<div class="mt-6 text-center text-base text-chalk">
  Air-gapped deployments supported. Compliance audit-ready.
</div>

<!--
Это главный слайд для compliance-офицеров. Если они кивают здесь —
дальше pricing уже формальность.
-->

---
layout: default
---

# Local AI that's actually useful.

<div class="grid grid-cols-2 gap-5 mt-8">

<div>
  <span class="eyebrow">What you ask</span>
  <div class="card mt-2 !p-4">
    <p class="font-mono text-sm text-chalk">monthly active users by country, last 90 days</p>
  </div>

  <span class="eyebrow mt-6 !inline-block">What it returns</span>
  <pre class="!p-4 !text-[12px] !mt-2"><code><span class="!text-violet-light">SELECT</span> country,
       <span class="!text-violet-light">date_trunc</span>(<span class="!text-teal-light">'month'</span>, created_at) <span class="!text-violet-light">AS</span> month,
       <span class="!text-violet-light">count</span>(<span class="!text-violet-light">DISTINCT</span> user_id) <span class="!text-violet-light">AS</span> mau
<span class="!text-violet-light">FROM</span> events
<span class="!text-violet-light">WHERE</span> created_at &gt; <span class="!text-violet-light">now</span>() <span class="mute">-</span> <span class="!text-teal-light">interval '90 days'</span>
<span class="!text-violet-light">GROUP BY</span> 1, 2;</code></pre>
</div>

<div>
  <div class="card !border-teal/30">
    <span class="eyebrow !text-teal-light">Quality on SQL · Qwen 3 8B</span>
    <div class="grid grid-cols-3 gap-3 mt-3 text-center">
      <div>
        <div class="text-2xl text-chalk font-semibold">87%</div>
        <div class="text-[10px] mute mt-1">SQL match<br/>vs GPT-4</div>
      </div>
      <div>
        <div class="text-2xl text-chalk font-semibold">91%</div>
        <div class="text-[10px] mute mt-1">Schema<br/>understanding</div>
      </div>
      <div>
        <div class="text-2xl teal font-semibold">1.2s</div>
        <div class="text-[10px] mute mt-1">Latency<br/>(faster than cloud)</div>
      </div>
    </div>
  </div>

  <div class="card mt-4">
    <span class="eyebrow !text-violet-light">Plug your own LLM</span>
    <p class="text-sm dim mt-2">
      Don't want Ollama? Use OpenAI-compatible API. Anthropic, vLLM, Bedrock, your internal GPT proxy — all work via single config.
    </p>
  </div>
</div>

</div>

---
layout: default
---

# Deploy in 60 seconds.

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="card !p-5">
  <div class="eyebrow !text-teal-light">01 · Pull</div>
  <h3 class="!text-chalk !text-base !mb-3">Clone the repo</h3>
  <pre class="!p-3 !text-[11px]"><code>git clone github.com/
  nborodulin471/vard
cd vard</code></pre>
</div>

<div class="card !p-5">
  <div class="eyebrow !text-violet-light">02 · Run</div>
  <h3 class="!text-chalk !text-base !mb-3">Start with Docker</h3>
  <pre class="!p-3 !text-[11px]"><code>docker compose up</code></pre>
  <p class="text-xs mute mt-3">Or use Helm chart for K8s.</p>
</div>

<div class="card !p-5">
  <div class="eyebrow !text-teal-light">03 · Open</div>
  <h3 class="!text-chalk !text-base !mb-3">Browser to localhost</h3>
  <p class="font-mono text-sm text-chalk mt-2">http://localhost:5173</p>
  <p class="text-xs mute mt-3">Connect Postgres, drop a CSV, query.</p>
</div>

</div>

<div class="card mt-8 !p-5 !border-teal/30">
  <p class="eyebrow">Deployment options</p>
  <div class="grid grid-cols-4 gap-3 mt-2 text-center">
    <div class="text-sm"><div class="text-chalk font-medium">Docker Compose</div><div class="text-xs mute">single VM, dev/team</div></div>
    <div class="text-sm"><div class="text-chalk font-medium">Kubernetes (Helm)</div><div class="text-xs mute">production scale</div></div>
    <div class="text-sm"><div class="text-chalk font-medium">Air-gapped</div><div class="text-xs mute">no internet required</div></div>
    <div class="text-sm"><div class="text-chalk font-medium">Vard Cloud</div><div class="text-xs mute">we host (coming Q3)</div></div>
  </div>
</div>

---
layout: default
---

# Built for enterprise from day one.

<div class="grid grid-cols-2 gap-5 mt-8">

<div class="card">
  <span class="eyebrow !text-teal-light">Identity & access</span>
  <ul class="text-sm space-y-2 mt-3">
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>SSO via SAML / OIDC</span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>Project-level RBAC</span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>Active Directory / Okta / Azure AD</span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>SCIM provisioning <span class="mute text-xs">(Q3 2026)</span></span></li>
  </ul>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">Audit & compliance</span>
  <ul class="text-sm space-y-2 mt-3">
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>Full audit log (queries, edits, exports)</span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>Audit log export to SIEM</span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>Notebook versioning</span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>SOC 2 Type II <span class="mute text-xs">(Q3 2026 target)</span></span></li>
  </ul>
</div>

<div class="card">
  <span class="eyebrow !text-teal-light">Data governance</span>
  <ul class="text-sm space-y-2 mt-3">
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>Read-only credentials per project</span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>Query approval flows <span class="mute text-xs">(Q3)</span></span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>PII column masking <span class="mute text-xs">(roadmap)</span></span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>Data lineage <span class="mute text-xs">(roadmap)</span></span></li>
  </ul>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">Operations</span>
  <ul class="text-sm space-y-2 mt-3">
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>Prometheus metrics export</span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>Backup / restore via standard Postgres</span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>99.9% SLA on Enterprise tier</span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>Dedicated CSM</span></li>
  </ul>
</div>

</div>

---
layout: default
---

# How does Vard compare?

<div class="card mt-6 !p-0 overflow-hidden">

<table class="w-full text-sm">
  <thead class="!bg-ink-800/40">
    <tr class="border-b border-chalk/10">
      <th class="text-left p-4 eyebrow !mb-0">Feature</th>
      <th class="text-center p-4 !text-teal-light text-base font-semibold">Vard</th>
      <th class="text-center p-4 dim">Hex</th>
      <th class="text-center p-4 dim">Deepnote</th>
      <th class="text-center p-4 dim">Jupyter</th>
      <th class="text-center p-4 dim">Querybook</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-chalk/10">
    <tr><td class="p-3 dim">Self-hosted</td><td class="p-3 text-center !bg-teal/[0.04] teal">✓</td><td class="p-3 text-center mute">✕</td><td class="p-3 text-center mute">✕</td><td class="p-3 text-center teal">✓</td><td class="p-3 text-center teal">✓</td></tr>
    <tr><td class="p-3 dim">Local AI · no data leaves</td><td class="p-3 text-center !bg-teal/[0.04] teal">✓</td><td class="p-3 text-center mute">✕</td><td class="p-3 text-center mute">✕</td><td class="p-3 text-center mute">✕</td><td class="p-3 text-center mute">✕</td></tr>
    <tr><td class="p-3 dim">Real-time collaboration</td><td class="p-3 text-center !bg-teal/[0.04] teal">✓</td><td class="p-3 text-center teal">✓</td><td class="p-3 text-center teal">✓</td><td class="p-3 text-center mute">✕</td><td class="p-3 text-center mute">✕</td></tr>
    <tr><td class="p-3 dim">Open-source</td><td class="p-3 text-center !bg-teal/[0.04] dim">~ <span class="text-[10px] mute">BSL</span></td><td class="p-3 text-center mute">✕</td><td class="p-3 text-center mute">✕</td><td class="p-3 text-center teal">✓</td><td class="p-3 text-center teal">✓</td></tr>
    <tr><td class="p-3 dim">SQL + Python + R</td><td class="p-3 text-center !bg-teal/[0.04] teal">✓</td><td class="p-3 text-center dim">~</td><td class="p-3 text-center teal">✓</td><td class="p-3 text-center dim">~</td><td class="p-3 text-center dim">~</td></tr>
    <tr><td class="p-3 dim">Modern AI assistant</td><td class="p-3 text-center !bg-teal/[0.04] teal">✓</td><td class="p-3 text-center teal">✓</td><td class="p-3 text-center teal">✓</td><td class="p-3 text-center mute">✕</td><td class="p-3 text-center mute">✕</td></tr>
    <tr><td class="p-3 dim">SSO / SAML</td><td class="p-3 text-center !bg-teal/[0.04] teal">Ent</td><td class="p-3 text-center teal">✓</td><td class="p-3 text-center teal">✓</td><td class="p-3 text-center dim">~</td><td class="p-3 text-center dim">~</td></tr>
    <tr><td class="p-3 dim">Free for internal use</td><td class="p-3 text-center !bg-teal/[0.04] teal">✓</td><td class="p-3 text-center mute">✕</td><td class="p-3 text-center mute">✕</td><td class="p-3 text-center teal">✓</td><td class="p-3 text-center teal">✓</td></tr>
  </tbody>
</table>

</div>

<div class="mt-6 text-center mute text-xs">
  Comparisons as of May 2026. Open an issue if anything looks wrong.
</div>

---
layout: default
---

# Pricing

<div class="grid grid-cols-3 gap-3 mt-8">

<div class="card">
  <h3 class="!text-chalk !text-base !mb-2">Community</h3>
  <div class="text-3xl text-chalk font-semibold">$0</div>
  <div class="text-xs mute">forever</div>
  <p class="text-xs dim mt-3 mb-4">Self-host · up to 5 users · local AI · community support.</p>
  <div class="text-xs teal">Best for · pilot, individual teams</div>
</div>

<div class="card !border-teal/40 !bg-teal/[0.04] relative">
  <h3 class="!text-chalk !text-base !mb-2">Self-hosted Pro</h3>
  <div class="text-3xl text-chalk font-semibold">$49</div>
  <div class="text-xs mute">per user / mo · from 10 seats</div>
  <p class="text-xs dim mt-3 mb-4">RBAC · audit log · versioning · priority email.</p>
  <div class="text-xs teal">Best for · regulated, growing teams</div>
</div>

<div class="card">
  <h3 class="!text-chalk !text-base !mb-2">Enterprise</h3>
  <div class="text-3xl text-chalk font-semibold">Custom</div>
  <div class="text-xs mute">get a quote</div>
  <p class="text-xs dim mt-3 mb-4">SSO · full audit · SOC 2 · CSM · 99.9% SLA.</p>
  <div class="text-xs teal">Best for · banks, healthcare, gov</div>
</div>

</div>

<div class="mt-8 grid grid-cols-3 gap-3 text-center">
  <div class="card !p-3 text-xs"><span class="teal">✓</span> <span class="dim">14-day free trial · Pro & Enterprise</span></div>
  <div class="card !p-3 text-xs"><span class="teal">✓</span> <span class="dim">Annual discount: 2 months free</span></div>
  <div class="card !p-3 text-xs"><span class="teal">✓</span> <span class="dim">Volume pricing: 50+ seats</span></div>
</div>

---
layout: default
---

# What it looks like in 90 days.

<div class="grid grid-cols-2 gap-6 mt-8">

<div>
  <span class="eyebrow">Day 0</span>
  <div class="card mt-2">
    <p class="text-sm dim">
      Compliance bans Hex. Team uses Jupyter + Slack + screenshots. Senior analyst spends 2 hours/day rewriting other people's queries.
    </p>
  </div>

  <span class="eyebrow mt-5 !inline-block">Day 7</span>
  <div class="card mt-2">
    <p class="text-sm dim">
      <code class="!text-xs">docker compose up</code> on a VM. SSO wired to Okta. Pilot with 3 analysts.
    </p>
  </div>

  <span class="eyebrow mt-5 !inline-block">Day 30</span>
  <div class="card mt-2">
    <p class="text-sm dim">
      Whole data team migrated. AI assistant cuts query writing time ~40%. First cross-team notebook published.
    </p>
  </div>

  <span class="eyebrow mt-5 !inline-block">Day 90</span>
  <div class="card mt-2 !border-teal/30">
    <p class="text-sm text-chalk">
      Audit log accepted by InfoSec. Self-hosted Pro contract signed. Team measures impact: less time fighting tools, more time on insights.
    </p>
  </div>
</div>

<div>
  <span class="eyebrow !text-teal-light">Outcomes we measure</span>
  <div class="space-y-3 mt-3">
    <div class="card !p-4">
      <div class="text-2xl text-chalk font-semibold">−40%</div>
      <div class="text-xs mute">time to first working query</div>
    </div>
    <div class="card !p-4">
      <div class="text-2xl text-chalk font-semibold">3×</div>
      <div class="text-xs mute">notebooks shared across team / week</div>
    </div>
    <div class="card !p-4">
      <div class="text-2xl text-chalk font-semibold">0</div>
      <div class="text-xs mute">data leaving network · ever</div>
    </div>
    <div class="card !p-4 !border-teal/30">
      <div class="text-2xl teal font-semibold">12-15 hrs</div>
      <div class="text-xs mute">saved per analyst / week</div>
    </div>
  </div>

  <p class="text-xs mute mt-4">
    * Estimates based on 30+ user interviews. Actual results depend on team size and starting baseline.
  </p>
</div>

</div>

<!--
Когда появятся реальные кейсы — заменить блок справа на конкретные customer logos и quotes.
-->

---
layout: default
---

# Why Vard, in one breath.

<div class="space-y-4 mt-10 max-w-3xl mx-auto">

<div class="card !p-5 flex items-start gap-4">
  <div class="teal text-xl">→</div>
  <div>
    <span class="text-chalk font-medium">Modern UX your team will actually use.</span>
    <span class="dim"> Not Jupyter from 2014.</span>
  </div>
</div>

<div class="card !p-5 flex items-start gap-4">
  <div class="teal text-xl">→</div>
  <div>
    <span class="text-chalk font-medium">Data and AI never leave your network.</span>
    <span class="dim"> Compliance audits become a non-event.</span>
  </div>
</div>

<div class="card !p-5 flex items-start gap-4">
  <div class="teal text-xl">→</div>
  <div>
    <span class="text-chalk font-medium">Source-available under BSL 1.1 (Apache 2.0 in 2030).</span>
    <span class="dim"> No SaaS lock-in. Your team can audit the code.</span>
  </div>
</div>

<div class="card !p-5 flex items-start gap-4">
  <div class="teal text-xl">→</div>
  <div>
    <span class="text-chalk font-medium">60-second deploy.</span>
    <span class="dim"> Your DevOps doesn't lose a week.</span>
  </div>
</div>

<div class="card !p-5 flex items-start gap-4">
  <div class="teal text-xl">→</div>
  <div>
    <span class="text-chalk font-medium">Free for internal use, forever.</span>
    <span class="dim"> Pay only when you need enterprise features.</span>
  </div>
</div>

</div>

---
layout: center
class: text-center
---

# Try it tonight.

<div class="grid grid-cols-3 gap-5 mt-10 max-w-4xl mx-auto">

<div class="card text-left">
  <div class="eyebrow !text-teal-light">In 30 seconds</div>
  <h3 class="!text-chalk !text-base !mb-2">Try the live demo</h3>
  <p class="text-sm dim mb-3">No signup. Browser only. See it for yourself.</p>
  <p class="font-mono text-xs text-chalk">vard.ru.tuna.am</p>
</div>

<div class="card text-left !border-teal/40">
  <div class="eyebrow !text-teal-light">In 60 seconds</div>
  <h3 class="!text-chalk !text-base !mb-2">Self-host on your laptop</h3>
  <p class="text-sm dim mb-3">Docker compose, one command. Connect your Postgres.</p>
  <pre class="!p-2 !text-[10px]"><code>docker compose up</code></pre>
</div>

<div class="card text-left">
  <div class="eyebrow !text-violet-light">When ready</div>
  <h3 class="!text-chalk !text-base !mb-2">Talk to us</h3>
  <p class="text-sm dim mb-3">Pilot, security review, custom connectors.</p>
  <p class="font-mono text-xs text-chalk">hello@vard.io</p>
</div>

</div>

<div class="mt-12 text-base">
  <span class="dim">Star us on GitHub:</span> <span class="text-chalk font-mono">github.com/nborodulin471/vard</span>
</div>

---
layout: center
class: text-center
---

<img src="./logo.png" class="w-24 mx-auto mb-8" />

# Questions?

<p class="dim mt-4">hello@vard.io · vard.ru.tuna.am · github.com/nborodulin471/vard</p>
