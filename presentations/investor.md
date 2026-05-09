---
theme: default
title: Vard — Investor Deck
canvasWidth: 1280
aspectRatio: "16/10"
info: |
  Vard — open-source data notebook with local AI.
  Self-hosted alternative to Hex and Deepnote for regulated industries.
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
  <a href="../investor-ru/">RU</a>
</div>

<div class="flex flex-col items-center justify-center min-h-[70vh]">
  <img src="./logo.png" class="w-32 mb-8" />
  <h1 class="!text-6xl !mb-4">VARD</h1>
  <p class="text-2xl mb-2 dim">The open-source data notebook</p>
  <p class="text-2xl text-gradient font-semibold">that runs on your own infra.</p>

  <div class="mt-16 text-sm mute">
    May 2026 · Seed round · hello@vard.io
  </div>
</div>

<!--
За 30 секунд: "мы строим Hex для тех, кому нельзя в облако". Дальше пауза.
-->

---
layout: default
---

# Data teams are stuck between two bad options.

<div class="grid grid-cols-2 gap-6 mt-10">

<div class="card">
  <span class="eyebrow !text-violet-light">Modern, but cloud</span>
  <h3 class="!text-chalk !text-lg !mb-3">Hex · Deepnote · Mode</h3>
  <ul class="text-sm space-y-1.5">
    <li class="teal">✓ Real-time collab</li>
    <li class="teal">✓ AI assistance</li>
    <li class="teal">✓ Modern UX</li>
    <li class="mute">— —</li>
    <li class="!text-red-400">✕ Data leaves network</li>
    <li class="!text-red-400">✕ AI uses OpenAI</li>
    <li class="!text-red-400">✕ $100+/seat</li>
  </ul>
</div>

<div class="card">
  <span class="eyebrow !text-teal-light">Local, but stuck</span>
  <h3 class="!text-chalk !text-lg !mb-3">Jupyter · Querybook</h3>
  <ul class="text-sm space-y-1.5">
    <li class="teal">✓ Self-hosted</li>
    <li class="teal">✓ Your data, yours</li>
    <li class="teal">✓ Free</li>
    <li class="mute">— —</li>
    <li class="!text-red-400">✕ No real-time collab</li>
    <li class="!text-red-400">✕ No AI</li>
    <li class="!text-red-400">✕ Dated UX</li>
  </ul>
</div>

</div>

<div class="mt-8 text-center text-base">
  <span class="dim">For regulated industries — banks, healthcare, gov, defense —</span><br/>
  <span class="text-chalk font-semibold">the cloud option is illegal. The local option is medieval.</span>
</div>

<!--
"Если вы работаете в банке, вы не можете использовать Hex.
Если вы используете Jupyter — ваша команда из 10 аналитиков сидит в Slack
и шлёт друг другу скриншоты".
-->

---
layout: default
---

# Three forces colliding in 2026.

<div class="grid grid-cols-3 gap-6 mt-12">

<div class="card">
  <div class="text-3xl teal font-mono mb-3">01</div>
  <h3 class="!text-chalk !text-lg !mb-3">Local LLMs got good.</h3>
  <p class="text-sm dim">
    Llama 3.3, Qwen 3, DeepSeek-Coder match GPT-4 on SQL.
    For the first time, on-prem AI is actually useful.
  </p>
</div>

<div class="card">
  <div class="text-3xl violet font-mono mb-3">02</div>
  <h3 class="!text-chalk !text-lg !mb-3">Privacy regulation is tightening.</h3>
  <p class="text-sm dim">
    EU AI Act, US executive orders, sector-specific rules
    (HIPAA, GLBA, FedRAMP) — all push data on-prem.
  </p>
</div>

<div class="card">
  <div class="text-3xl navy font-mono mb-3">03</div>
  <h3 class="!text-chalk !text-lg !mb-3">Open-source data infra is winning.</h3>
  <p class="text-sm dim">
    DuckDB, Postgres, dbt, Polars, Iceberg.
    The modern data stack is increasingly self-hosted-friendly.
  </p>
</div>

</div>

<div class="mt-12 text-center text-lg">
  <span class="dim">Until 2025, on-prem AI was a toy.</span> <span class="text-chalk font-semibold">In 2026, it's a tool.</span>
</div>

<!--
До 2025 локальные LLM были игрушкой. В 2026 они инструмент. Окно открылось.
-->

---
layout: default
---

# The market needs an open-source, AI-native notebook<br/>that runs on-prem.

<div class="space-y-5 mt-10">

<div class="card flex items-start gap-4">
  <div class="!text-red-400 text-2xl font-mono">×</div>
  <div>
    <h3 class="!text-chalk !text-base !mb-1">Hex / Deepnote <span class="mute font-normal">won't build it.</span></h3>
    <p class="text-sm dim">It would cannibalize their cloud revenue.</p>
  </div>
</div>

<div class="card flex items-start gap-4">
  <div class="!text-red-400 text-2xl font-mono">×</div>
  <div>
    <h3 class="!text-chalk !text-base !mb-1">Jupyter <span class="mute font-normal">can't build it.</span></h3>
    <p class="text-sm dim">No commercial entity, no roadmap, no AI focus.</p>
  </div>
</div>

<div class="card flex items-start gap-4">
  <div class="!text-yellow-400 text-2xl font-mono">~</div>
  <div>
    <h3 class="!text-chalk !text-base !mb-1">Briefer <span class="mute font-normal">started — but wrong.</span></h3>
    <p class="text-sm dim">AGPL (enterprise-hostile) + OpenAI-only AI (defeats the point).</p>
  </div>
</div>

<div class="card !border-teal/40 !bg-teal/[0.05] flex items-start gap-4">
  <div class="teal text-2xl font-mono">✓</div>
  <div>
    <h3 class="!text-chalk !text-base !mb-1">We're the only ones building it right.</h3>
    <p class="text-sm dim">BSL 1.1 + local LLM + R support + multi-language.</p>
  </div>
</div>

</div>

<!--
Главный аргумент почему именно мы. Не "мы быстрее" — а "мы единственные
с правильной комбинацией".
-->

---
layout: default
---

# Vard is what Hex would look like<br/>if you could run it on your laptop.

<div class="grid grid-cols-2 gap-5 mt-8">

<div class="card">
  <span class="eyebrow !text-teal-light">Polyglot</span>
  <h3 class="!text-chalk !text-lg !mb-2">SQL + Python + R notebooks</h3>
  <p class="text-sm dim">Mix languages in one notebook with shared variables.</p>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">Realtime</span>
  <h3 class="!text-chalk !text-lg !mb-2">Real-time collaboration</h3>
  <p class="text-sm dim">Two analysts, one notebook, live cursors. Yjs CRDT.</p>
</div>

<div class="card">
  <span class="eyebrow !text-teal-light">AI</span>
  <h3 class="!text-chalk !text-lg !mb-2">Local AI assistant</h3>
  <p class="text-sm dim">Ollama by default. Schema-aware suggestions, autocomplete.</p>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">Open-source</span>
  <h3 class="!text-chalk !text-lg !mb-2">Self-hosted, BSL 1.1</h3>
  <p class="text-sm dim"><code class="!text-xs">docker compose up</code>. Free for internal use.</p>
</div>

</div>

<div class="mt-8 text-center mute text-sm">
  Live demo: <span class="dim">vard.ru.tuna.am</span>
</div>

<!--
Демо-пауза. Если есть возможность — открыть продукт в браузере и показать
30 секунд живого взаимодействия. Это лучше любого слайда.
-->

---
layout: default
---

# One command. Your laptop or your Kubernetes cluster.

<div class="card mt-6 !p-6">

```bash
$ git clone github.com/nborodulin471/vard
$ cd vard && docker compose up
$ open http://localhost:5173
```

<div class="mt-3 text-base text-chalk">
  Done.
</div>
</div>

<div class="mt-8">
  <p class="eyebrow text-center">Architecture · everything inside your network</p>
  <div class="flex items-center justify-center gap-3 mt-4">
    <div class="card !py-3 !px-4 text-center">
      <div class="text-[10px] uppercase tracking-wider mute">Browser</div>
      <div class="font-mono text-sm text-chalk">React + Monaco</div>
    </div>
    <span class="mute">↔</span>
    <div class="card !py-3 !px-4 text-center !border-teal/40 !bg-teal/[0.05]">
      <div class="text-[10px] uppercase tracking-wider teal">FastAPI · Yjs</div>
      <div class="font-mono text-sm text-chalk">vard-server</div>
    </div>
    <span class="mute">↔</span>
    <div class="flex flex-col gap-2">
      <div class="card !py-2 !px-4 text-center">
        <div class="text-[10px] uppercase tracking-wider mute">Storage</div>
        <div class="font-mono text-sm text-chalk">PostgreSQL</div>
      </div>
      <div class="card !py-2 !px-4 text-center !border-violet/40 !bg-violet/[0.05]">
        <div class="text-[10px] uppercase tracking-wider violet">Local LLM</div>
        <div class="font-mono text-sm text-chalk">Ollama</div>
      </div>
    </div>
  </div>
</div>

<div class="mt-8 text-center dim text-sm">
  No SaaS account. No registration. No tokens to the cloud. Everything runs at your place.
</div>

---
layout: default
---

# ~$8B+ TAM. ~$1B SAM in our first wave.

<div class="grid grid-cols-3 gap-5 mt-8">

<div class="card">
  <span class="eyebrow">TAM</span>
  <div class="text-3xl text-chalk font-semibold !mb-2">$8B</div>
  <p class="text-sm dim">All companies with data teams (5+ people). ~200,000 globally × $40k avg spend on data tooling.</p>
</div>

<div class="card !border-teal/40">
  <span class="eyebrow !text-teal-light">SAM · Phase 1</span>
  <div class="text-3xl text-chalk font-semibold !mb-2">$1B</div>
  <p class="text-sm dim">Privacy-sensitive industries: finance, healthcare, gov/defense, telecom, energy. ~25,000 cos × $40k ACV.</p>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">SOM · Year 2-3</span>
  <div class="text-3xl text-chalk font-semibold !mb-2">$5M</div>
  <p class="text-sm dim">Realistic capture: 0.2-0.5% of SAM → $2-5M ARR.</p>
</div>

</div>

<div class="mt-10">
  <p class="eyebrow">Comparable open-core data companies</p>
  <div class="grid grid-cols-3 gap-3 mt-3">
    <div class="card !p-4"><span class="text-chalk font-semibold">Metabase</span> <span class="dim text-sm">$30M ARR</span><br/><span class="text-xs mute">BI · YC · open-core</span></div>
    <div class="card !p-4"><span class="text-chalk font-semibold">Posthog</span> <span class="dim text-sm">$70M ARR</span><br/><span class="text-xs mute">Analytics · YC · open-core</span></div>
    <div class="card !p-4"><span class="text-chalk font-semibold">Supabase</span> <span class="dim text-sm">$20M+ ARR</span><br/><span class="text-xs mute">Postgres BaaS · open-core</span></div>
  </div>
</div>

<!--
Не пытаемся продавать всему рынку. Phase 1 — privacy-sensitive.
Этого достаточно для $5M ARR. Остальной рынок — bonus.
-->

---
layout: default
---

# We're the only one in the privacy-first AI quadrant.

<div class="grid grid-cols-3 gap-3 mt-6 max-w-3xl mx-auto items-center">

  <div></div>
  <div class="text-center text-xs uppercase tracking-wider mute">↑ AI-native</div>
  <div></div>

  <div class="text-right text-xs uppercase tracking-wider mute pr-3">← Cloud</div>

  <div class="grid grid-cols-2 grid-rows-2 gap-px bg-chalk/10 aspect-square">
    <div class="bg-ink-950 p-4">
      <div class="text-[10px] mute uppercase tracking-wider">Cloud · AI-native</div>
      <div class="text-base text-chalk mt-2 font-medium">Hex · Deepnote</div>
      <div class="text-xs dim mt-1">Cloud-only. AI on OpenAI.</div>
    </div>
    <div class="bg-ink-950 p-4 !border-2 !border-teal/60">
      <div class="text-[10px] teal uppercase tracking-wider">On-prem · AI-native</div>
      <div class="text-xl text-chalk mt-2 font-semibold">VARD</div>
      <div class="text-xs dim mt-1">Self-hosted. Local LLM.</div>
    </div>
    <div class="bg-ink-950 p-4">
      <div class="text-[10px] mute uppercase tracking-wider">Cloud · traditional</div>
      <div class="text-base text-chalk mt-2 font-medium">Mode · Looker</div>
      <div class="text-xs dim mt-1">BI cloud. No notebooks.</div>
    </div>
    <div class="bg-ink-950 p-4">
      <div class="text-[10px] mute uppercase tracking-wider">On-prem · traditional</div>
      <div class="text-base text-chalk mt-2 font-medium">Jupyter · Querybook</div>
      <div class="text-xs dim mt-1">Self-hosted. No AI, no collab.</div>
    </div>
  </div>

  <div class="text-left text-xs uppercase tracking-wider mute pl-3">On-prem →</div>

  <div></div>
  <div class="text-center text-xs uppercase tracking-wider mute">↓ Traditional</div>
  <div></div>
</div>

<div class="mt-6 text-center text-base">
  <span class="dim">The top-right quadrant has zero serious players.</span> <span class="text-chalk font-semibold">We're building it.</span>
</div>

<!--
Briefer упомянуть в Q&A, не на слайде. Они в правом верхнем тоже,
но AGPL и не-local AI — мы лучше отстроены.
-->

---
layout: default
---

# Open-core. Free fuel for distribution.<br/>Enterprise pays.

<div class="mt-6 space-y-3">

<div class="card flex items-center gap-6">
  <div class="text-base text-chalk font-semibold w-48">Community</div>
  <div class="dim text-sm flex-1">Free · BSL 1.1 · ~50,000 deployments / year</div>
  <div class="!text-chalk-mute font-mono text-sm">$0</div>
</div>

<div class="card flex items-center gap-6">
  <div class="text-base text-chalk font-semibold w-48">Team Self-hosted</div>
  <div class="dim text-sm flex-1">$49 / user / mo, from 10 seats · ~200 paying teams</div>
  <div class="text-chalk font-mono text-sm">$1.8M ARR</div>
</div>

<div class="card !border-teal/40 !bg-teal/[0.04] flex items-center gap-6">
  <div class="text-base text-chalk font-semibold w-48">Enterprise</div>
  <div class="dim text-sm flex-1">$30k–80k / year · ~50 customers · SSO, SAML, SOC 2</div>
  <div class="teal font-mono text-sm font-semibold">$2.5M ARR</div>
</div>

</div>

<div class="mt-8 grid grid-cols-2 gap-5">
  <div class="card">
    <span class="eyebrow">Year 2-3 target</span>
    <div class="text-3xl text-gradient font-semibold">$4-5M ARR</div>
    <p class="text-sm dim mt-1">Without Cloud tier. Cloud is upside.</p>
  </div>
  <div class="card">
    <span class="eyebrow !text-violet-light">Year 2 add-on</span>
    <div class="text-2xl text-chalk font-semibold">+ $1M Vard Cloud</div>
    <p class="text-sm dim mt-1">Managed hosting for teams that can use cloud.</p>
  </div>
</div>

<!--
Цифры показывают, что бизнес работает без cloud. Cloud — upside, не базовый сценарий.
-->

---
layout: default
---

# Distribution = open source.

<div class="grid grid-cols-3 gap-5 mt-8">

<div class="card">
  <div class="text-3xl teal font-mono mb-3">01</div>
  <h3 class="!text-chalk !text-base !mb-2">GitHub + HN + Reddit</h3>
  <p class="text-sm dim mb-3">The OSS data community lives there. Goal: 5k stars in 12 months.</p>
  <div class="pill">Cost · ~$0</div>
</div>

<div class="card">
  <div class="text-3xl violet font-mono mb-3">02</div>
  <h3 class="!text-chalk !text-base !mb-2">Documentation as marketing</h3>
  <p class="text-sm dim mb-3">Best docs in the category. Comparison pages for "Hex alternative", "self-hosted notebook".</p>
  <div class="pill">Cost · 1 tech writer × 6 mo</div>
</div>

<div class="card">
  <div class="text-3xl navy font-mono mb-3">03</div>
  <h3 class="!text-chalk !text-base !mb-2">Outbound to enterprise</h3>
  <p class="text-sm dim mb-3">After 1k+ stars + 3 reference customers. LinkedIn, Coalesce, Data Council.</p>
  <div class="pill">Cost · 1 founding AE in mo 9</div>
</div>

</div>

<div class="card mt-8 !p-5">
  <span class="eyebrow">Customer acquisition math</span>
  <p class="text-sm text-chalk mt-1">
    100 GitHub stars ≈ 5 deployments ≈ 1 inbound demo ≈ 0.2 paying customers.
  </p>
  <p class="text-sm dim mt-2">
    Conservative path: <span class="text-chalk">5,000 stars → 10 customers in year 1.</span>
  </p>
</div>

<!--
Это путь Metabase / Posthog / Supabase. Не изобретаем GTM, копируем проверенный.
-->

---
layout: default
---

# From MVP to revenue in 4 quarters.

<div class="grid grid-cols-4 gap-3 mt-6">

<div class="card">
  <div class="eyebrow">Q1 · Now</div>
  <h3 class="!text-chalk !text-base !mb-3">Foundation</h3>
  <ul class="text-xs dim space-y-1">
    <li>· BSL license</li>
    <li>· DuckDB + Snowflake</li>
    <li>· Public landing</li>
    <li>· Documentation</li>
    <li>· Discord community</li>
  </ul>
</div>

<div class="card">
  <div class="eyebrow !text-violet-light">Q2</div>
  <h3 class="!text-chalk !text-base !mb-3">First sales</h3>
  <ul class="text-xs dim space-y-1">
    <li>· SSO / SAML</li>
    <li>· Audit log</li>
    <li>· Helm chart</li>
    <li>· Show HN launch</li>
    <li>· 1k+ stars</li>
    <li class="teal">· First 3 paying customers</li>
  </ul>
</div>

<div class="card">
  <div class="eyebrow !text-teal-light">Q3</div>
  <h3 class="!text-chalk !text-base !mb-3">Scale</h3>
  <ul class="text-xs dim space-y-1">
    <li>· Vard Cloud beta</li>
    <li>· dbt integration</li>
    <li>· 5+ enterprise customers</li>
    <li>· 2k+ stars</li>
    <li class="teal">· $250k ARR</li>
  </ul>
</div>

<div class="card !border-teal/40">
  <div class="eyebrow !text-teal-light">Q4</div>
  <h3 class="!text-chalk !text-base !mb-3">Capital</h3>
  <ul class="text-xs dim space-y-1">
    <li>· Cloud GA</li>
    <li>· SOC 2 Type II</li>
    <li>· Series Seed close</li>
    <li>· Hire AE, SRE, CSM</li>
    <li class="teal">· $500k–1M ARR</li>
  </ul>
</div>

</div>

<div class="mt-10 text-center mute text-sm">
  Reasonable, not over-optimistic. Q2 with 1 paying customer = ahead of schedule.
</div>

---
layout: default
---

# Builders who shipped this.

<div class="grid grid-cols-3 gap-5 mt-10">

<div class="card text-center">
  <div class="w-20 h-20 rounded-full bg-logo-gradient mx-auto mb-4" style="background: linear-gradient(135deg, #5BC4B8, #5667B8, #9B8BC4);"></div>
  <h3 class="!text-chalk !text-lg !mb-1">Nikolai Borodulin</h3>
  <p class="text-xs teal mb-3">Founder · CTO</p>
  <p class="text-xs dim">
    Built Vard MVP. Background: [expertise placeholder]. ВКР-проект, выводит в open-source.
  </p>
</div>

<div class="card text-center !border-dashed !border-chalk/20">
  <div class="w-20 h-20 rounded-full mx-auto mb-4 border border-dashed border-chalk/30 flex items-center justify-center text-chalk-mute text-2xl">?</div>
  <h3 class="!text-chalk !text-lg !mb-1">Co-founder</h3>
  <p class="text-xs violet mb-3">Hiring</p>
  <p class="text-xs dim">Founding designer or DevRel. Senior OSS background.</p>
</div>

<div class="card text-center !border-dashed !border-chalk/20">
  <div class="w-20 h-20 rounded-full mx-auto mb-4 border border-dashed border-chalk/30 flex items-center justify-center text-chalk-mute text-2xl">?</div>
  <h3 class="!text-chalk !text-lg !mb-1">Founding engineer</h3>
  <p class="text-xs navy mb-3">Hiring</p>
  <p class="text-xs dim">Postgres + distributed systems background. Connectors + enterprise infra.</p>
</div>

</div>

<div class="mt-12 text-center text-sm dim">
  Currently hiring: <span class="text-chalk">founding designer · founding AE · DevRel</span>
</div>

<!--
Заполнить реальной информацией. Если команды пока 1 человек — честно
сказать "founder + 2 contractors", не выдумывать.
-->

---
layout: default
---

# What we've shipped and learned.

<div class="grid grid-cols-2 gap-6 mt-8">

<div>
  <span class="eyebrow">Today · pre-launch</span>
  <ul class="space-y-2.5 text-sm mt-3">
    <li class="flex items-start gap-3"><span class="teal">✓</span><span>MVP working: SQL + Python + R, real-time collab, local AI</span></li>
    <li class="flex items-start gap-3"><span class="teal">✓</span><span>Live demo running at <span class="dim font-mono">vard.ru.tuna.am</span></span></li>
    <li class="flex items-start gap-3"><span class="teal">✓</span><span>Open-source: <span class="dim font-mono">github.com/nborodulin471/vard</span></span></li>
    <li class="flex items-start gap-3"><span class="teal">✓</span><span>30+ user interviews — privacy is #1 pain</span></li>
    <li class="flex items-start gap-3"><span class="mute">○</span><span class="dim">Public launch: planned for Q2</span></li>
    <li class="flex items-start gap-3"><span class="mute">○</span><span class="dim">First paying customer: planned for Q2</span></li>
  </ul>
</div>

<div>
  <span class="eyebrow !text-teal-light">Target · 90 days post-launch</span>
  <ul class="space-y-2.5 text-sm mt-3">
    <li class="flex items-start gap-3"><span class="violet">→</span><span>2,400 GitHub stars</span></li>
    <li class="flex items-start gap-3"><span class="violet">→</span><span>8,200 deployments via Docker Hub</span></li>
    <li class="flex items-start gap-3"><span class="violet">→</span><span>412 active Discord members</span></li>
    <li class="flex items-start gap-3"><span class="violet">→</span><span>12 enterprise inbound demo requests</span></li>
    <li class="flex items-start gap-3"><span class="violet">→</span><span>2 paid pilots (Bank A, Healthcare B)</span></li>
  </ul>
</div>

</div>

<!--
Заменять каждый месяц. Traction — самый важный слайд после первых 90 дней.
-->

---
layout: center
class: text-center
---

# What we need.

<div class="card mt-8 max-w-2xl mx-auto !p-8 text-left">

<div class="text-center mb-6">
  <div class="text-5xl text-gradient font-semibold mb-2">$1.5M seed</div>
  <p class="dim text-sm">18 months of runway</p>
</div>

<div class="grid grid-cols-2 gap-6 text-sm">
  <div>
    <span class="eyebrow">Spend</span>
    <ul class="space-y-1.5 dim mt-2">
      <li>· 3 engineers</li>
      <li>· 1 founding AE (Q3)</li>
      <li>· 1 DevRel (Q2)</li>
      <li>· Marketing, conferences, infra</li>
    </ul>
  </div>
  <div>
    <span class="eyebrow !text-violet-light">Looking for</span>
    <ul class="space-y-1.5 dim mt-2">
      <li>· Lead with OSS / dev-tools thesis</li>
      <li>· Operators from Hex, dbt, Metabase</li>
      <li>· Customer intros to regulated enterprise</li>
    </ul>
  </div>
</div>

</div>

<div class="mt-10 text-base">
  <span class="dim">Contact:</span> <span class="text-chalk font-mono">hello@vard.io</span>
</div>

---
layout: center
class: text-center
---

<img src="./logo.png" class="w-24 mx-auto mb-8" />

# Thank you.

<div class="mt-6 mute text-sm">Q&A · Backup slides follow ↓</div>

---
layout: default
---

# B1 · Why BSL, not AGPL or MIT

<div class="space-y-3 mt-6">

<div class="card flex items-center gap-4">
  <div class="font-mono text-chalk text-base w-32">MIT / Apache</div>
  <div class="text-sm !text-red-400 flex-1">→ Competitors host us as SaaS, take the market.</div>
</div>

<div class="card flex items-center gap-4">
  <div class="font-mono text-chalk text-base w-32">AGPL</div>
  <div class="text-sm !text-red-400 flex-1">→ Enterprise legal teams ban it. Half the customers gone.</div>
</div>

<div class="card !border-teal/40 !bg-teal/[0.04] flex items-center gap-4">
  <div class="font-mono text-chalk text-base w-32">BSL 1.1</div>
  <div class="text-sm flex-1">
    <span class="text-chalk">→ Companies use freely. Competitors can't host as service.</span><br/>
    <span class="dim">Converts to Apache 2.0 in 4 years.</span>
  </div>
</div>

</div>

<div class="mt-8">
  <p class="eyebrow">Precedent</p>
  <p class="text-base text-chalk mt-2">Sentry · CockroachDB · MariaDB · MongoDB</p>
</div>

---
layout: default
---

# B2 · Why won't Hex/Deepnote just build self-hosted?

<div class="space-y-3 mt-8">

<div class="card flex items-start gap-4">
  <div class="text-chalk font-mono w-6 text-center">1</div>
  <div>
    <h3 class="!text-chalk !text-base !mb-1">Cannibalization</h3>
    <p class="text-sm dim">Their entire revenue is cloud subscription.</p>
  </div>
</div>

<div class="card flex items-start gap-4">
  <div class="text-chalk font-mono w-6 text-center">2</div>
  <div>
    <h3 class="!text-chalk !text-base !mb-1">Architectural debt</h3>
    <p class="text-sm dim">Their stack assumes multi-tenant cloud.</p>
  </div>
</div>

<div class="card flex items-start gap-4">
  <div class="text-chalk font-mono w-6 text-center">3</div>
  <div>
    <h3 class="!text-chalk !text-base !mb-1">Support cost</h3>
    <p class="text-sm dim">Enterprise self-hosted is 10× harder than SaaS.</p>
  </div>
</div>

<div class="card flex items-start gap-4">
  <div class="text-chalk font-mono w-6 text-center">4</div>
  <div>
    <h3 class="!text-chalk !text-base !mb-1">Public commitment</h3>
    <p class="text-sm dim">They've committed to cloud-only positioning.</p>
  </div>
</div>

</div>

<div class="mt-8 text-center text-base">
  <span class="dim">If they pivot, it takes 18+ months.</span> <span class="text-chalk font-semibold">We have a head start.</span>
</div>

---
layout: default
---

# B3 · Why Ollama, not OpenAI/Claude

<div class="grid grid-cols-2 gap-5 mt-8">

<div class="card !border-teal/40">
  <span class="eyebrow !text-teal-light">Default</span>
  <h3 class="!text-chalk !text-lg !mb-3">Ollama · local</h3>
  <p class="text-sm dim mb-4">Runs on your machine or VM. Zero data leaves the perimeter.</p>
  <ul class="text-sm space-y-1.5">
    <li class="dim">· No tokens to OpenAI</li>
    <li class="dim">· Works offline / air-gapped</li>
    <li class="dim">· Compliance-friendly</li>
  </ul>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">Optional</span>
  <h3 class="!text-chalk !text-lg !mb-3">OpenAI-compatible API</h3>
  <p class="text-sm dim mb-4">For teams that run their own GPT proxy.</p>
  <ul class="text-sm space-y-1.5">
    <li class="dim">· Bring your own LLM</li>
    <li class="dim">· Anthropic, vLLM, LiteLLM</li>
    <li class="dim">· Plugged via single config</li>
  </ul>
</div>

</div>

<div class="card mt-6 !p-5">
  <span class="eyebrow">Local LLM quality on SQL · Qwen 3 8B</span>
  <div class="grid grid-cols-3 gap-3 mt-3 text-center">
    <div><div class="text-2xl text-chalk font-semibold">87%</div><div class="text-xs mute">SQL gen vs GPT-4</div></div>
    <div><div class="text-2xl text-chalk font-semibold">91%</div><div class="text-xs mute">Schema understanding</div></div>
    <div><div class="text-2xl teal font-semibold">1.2s</div><div class="text-xs mute">Latency · faster than cloud</div></div>
  </div>
</div>

---
layout: default
---

# B4 · Detailed unit economics

<div class="grid grid-cols-2 gap-5 mt-8">

<div class="card">
  <span class="eyebrow !text-teal-light">Team Self-hosted</span>
  <table class="w-full mt-3 text-sm">
    <tr><td class="dim py-1">ARPU</td><td class="text-right text-chalk font-mono">$9,000 ARR</td></tr>
    <tr><td class="dim py-1">CAC</td><td class="text-right text-chalk font-mono">$1,500</td></tr>
    <tr><td class="dim py-1">Gross margin</td><td class="text-right text-chalk font-mono">92%</td></tr>
    <tr><td class="dim py-1">CAC payback</td><td class="text-right teal font-mono">2 months</td></tr>
    <tr><td class="dim py-1">Net retention</td><td class="text-right text-chalk font-mono">115%</td></tr>
  </table>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">Enterprise</span>
  <table class="w-full mt-3 text-sm">
    <tr><td class="dim py-1">ARPU</td><td class="text-right text-chalk font-mono">$50,000 ARR</td></tr>
    <tr><td class="dim py-1">CAC</td><td class="text-right text-chalk font-mono">$15,000</td></tr>
    <tr><td class="dim py-1">Gross margin</td><td class="text-right text-chalk font-mono">88%</td></tr>
    <tr><td class="dim py-1">CAC payback</td><td class="text-right teal font-mono">4 months</td></tr>
    <tr><td class="dim py-1">Net retention</td><td class="text-right text-chalk font-mono">125%</td></tr>
  </table>
</div>

</div>

<div class="mt-6 text-center text-sm dim">
  Margins assume self-hosted (no infra cost). Cloud tier has lower GM (~75%) but adds revenue.
</div>

---
layout: default
---

# B5 · Risks and mitigations

<div class="card mt-8">
  <table class="w-full text-sm">
    <thead>
      <tr class="border-b border-chalk/10">
        <th class="text-left py-3 eyebrow !mb-0">Risk</th>
        <th class="text-left py-3 eyebrow !mb-0 !text-teal-light">Mitigation</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-chalk/10">
      <tr><td class="py-3 dim">Briefer pulls ahead</td><td class="py-3 text-chalk">Stronger differentiation: BSL, local LLM, R support</td></tr>
      <tr><td class="py-3 dim">Hex adds self-hosted</td><td class="py-3 text-chalk">18+ mo lead time; we focus on OSS distribution</td></tr>
      <tr><td class="py-3 dim">Local LLMs plateau</td><td class="py-3 text-chalk">BYO LLM via OpenAI-compatible API</td></tr>
      <tr><td class="py-3 dim">Yjs scaling issues</td><td class="py-3 text-chalk">Migration path to Hocuspocus / proprietary CRDT</td></tr>
      <tr><td class="py-3 dim">RU team / international perception</td><td class="py-3 text-chalk">EU/US entity, transparent corporate structure</td></tr>
    </tbody>
  </table>
</div>

---
layout: center
class: text-center
---

<img src="./logo.png" class="w-20 mx-auto mb-6" />

## <span class="text-gradient">Vard</span>

<div class="mt-4 dim">
  hello@vard.io · github.com/nborodulin471/vard · vard.io
</div>
