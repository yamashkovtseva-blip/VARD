---
theme: default
title: Vard — Питч для инвесторов
canvasWidth: 1280
aspectRatio: "16/10"
info: |
  Vard — open-source ноутбук для данных с локальным AI.
  Self-hosted альтернатива Hex и Deepnote для регулируемых индустрий.
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
  <a href="../investor/" >EN</a>
  <a class="active" href="./">RU</a>
</div>

<div class="flex flex-col items-center justify-center min-h-[70vh]">
  <img src="./logo.png" class="w-32 mb-8" />
  <h1 class="!text-6xl !mb-4">VARD</h1>
  <p class="text-2xl mb-2 dim">Open-source ноутбук для данных,</p>
  <p class="text-2xl text-gradient font-semibold">который работает на вашей инфраструктуре.</p>

  <div class="mt-16 text-sm mute">
    Май 2026 · Seed раунд · hello@vard.io
  </div>
</div>

<!--
За 30 секунд: "мы строим Hex для тех, кому нельзя в облако". Дальше пауза.
-->

---
layout: default
---

# Data-команды зажаты между двумя плохими вариантами.

<div class="grid grid-cols-2 gap-6 mt-10">

<div class="card">
  <span class="eyebrow !text-violet-light">Современно, но облако</span>
  <h3 class="!text-chalk !text-lg !mb-3">Hex · Deepnote · Mode</h3>
  <ul class="text-sm space-y-1.5">
    <li class="teal">✓ Real-time коллаборация</li>
    <li class="teal">✓ AI-ассистент</li>
    <li class="teal">✓ Современный UX</li>
    <li class="mute">— —</li>
    <li class="!text-red-400">✕ Данные уходят из сети</li>
    <li class="!text-red-400">✕ AI работает через OpenAI</li>
    <li class="!text-red-400">✕ $100+/место</li>
  </ul>
</div>

<div class="card">
  <span class="eyebrow !text-teal-light">Локально, но застряло</span>
  <h3 class="!text-chalk !text-lg !mb-3">Jupyter · Querybook</h3>
  <ul class="text-sm space-y-1.5">
    <li class="teal">✓ Self-hosted</li>
    <li class="teal">✓ Данные у вас</li>
    <li class="teal">✓ Бесплатно</li>
    <li class="mute">— —</li>
    <li class="!text-red-400">✕ Нет real-time коллаборации</li>
    <li class="!text-red-400">✕ Нет AI</li>
    <li class="!text-red-400">✕ UX из 2014 года</li>
  </ul>
</div>

</div>

<div class="mt-8 text-center text-base">
  <span class="dim">Для регулируемых индустрий — банки, healthcare, gov, defense —</span><br/>
  <span class="text-chalk font-semibold">облако нелегально. Локальное — средневековье.</span>
</div>

---
layout: default
---

# Три силы сошлись в 2026.

<div class="grid grid-cols-3 gap-6 mt-12">

<div class="card">
  <div class="text-3xl teal font-mono mb-3">01</div>
  <h3 class="!text-chalk !text-lg !mb-3">Локальные LLM стали хороши.</h3>
  <p class="text-sm dim">
    Llama 3.3, Qwen 3, DeepSeek-Coder сравнимы с GPT-4 на SQL-задачах.
    Впервые on-prem AI реально полезен.
  </p>
</div>

<div class="card">
  <div class="text-3xl violet font-mono mb-3">02</div>
  <h3 class="!text-chalk !text-lg !mb-3">Регуляция приватности ужесточается.</h3>
  <p class="text-sm dim">
    EU AI Act, US executive orders, секторные правила
    (HIPAA, GLBA, FedRAMP) — всё толкает данные on-prem.
  </p>
</div>

<div class="card">
  <div class="text-3xl navy font-mono mb-3">03</div>
  <h3 class="!text-chalk !text-lg !mb-3">Open-source data-инфраструктура побеждает.</h3>
  <p class="text-sm dim">
    DuckDB, Postgres, dbt, Polars, Iceberg.
    Современный data-стек становится self-hosted-friendly.
  </p>
</div>

</div>

<div class="mt-12 text-center text-lg">
  <span class="dim">До 2025 on-prem AI был игрушкой.</span> <span class="text-chalk font-semibold">В 2026 — это инструмент.</span>
</div>

---
layout: default
---

# Рынку нужен open-source AI-native ноутбук,<br/>работающий on-prem.

<div class="space-y-5 mt-10">

<div class="card flex items-start gap-4">
  <div class="!text-red-400 text-2xl font-mono">×</div>
  <div>
    <h3 class="!text-chalk !text-base !mb-1">Hex / Deepnote <span class="mute font-normal">не построят.</span></h3>
    <p class="text-sm dim">Это съест их облачную выручку.</p>
  </div>
</div>

<div class="card flex items-start gap-4">
  <div class="!text-red-400 text-2xl font-mono">×</div>
  <div>
    <h3 class="!text-chalk !text-base !mb-1">Jupyter <span class="mute font-normal">не сможет.</span></h3>
    <p class="text-sm dim">Нет коммерческой структуры, нет roadmap, нет фокуса на AI.</p>
  </div>
</div>

<div class="card flex items-start gap-4">
  <div class="!text-yellow-400 text-2xl font-mono">~</div>
  <div>
    <h3 class="!text-chalk !text-base !mb-1">Briefer <span class="mute font-normal">начали — но неправильно.</span></h3>
    <p class="text-sm dim">AGPL (отпугивает enterprise) + только OpenAI (теряет смысл privacy).</p>
  </div>
</div>

<div class="card !border-teal/40 !bg-teal/[0.05] flex items-start gap-4">
  <div class="teal text-2xl font-mono">✓</div>
  <div>
    <h3 class="!text-chalk !text-base !mb-1">Только мы строим правильно.</h3>
    <p class="text-sm dim">BSL 1.1 + локальный LLM + поддержка R + multi-language.</p>
  </div>
</div>

</div>

---
layout: default
---

# Vard — это Hex, который запускается на ноутбуке.

<div class="grid grid-cols-2 gap-5 mt-8">

<div class="card">
  <span class="eyebrow !text-teal-light">Полиглот</span>
  <h3 class="!text-chalk !text-lg !mb-2">SQL + Python + R ноутбуки</h3>
  <p class="text-sm dim">Смешивайте языки в одном ноутбуке с общими переменными.</p>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">Реалтайм</span>
  <h3 class="!text-chalk !text-lg !mb-2">Real-time коллаборация</h3>
  <p class="text-sm dim">Два аналитика, один ноутбук, живые курсоры. Yjs CRDT.</p>
</div>

<div class="card">
  <span class="eyebrow !text-teal-light">AI</span>
  <h3 class="!text-chalk !text-lg !mb-2">Локальный AI-ассистент</h3>
  <p class="text-sm dim">Ollama по умолчанию. Schema-aware подсказки, автодополнение.</p>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">Open-source</span>
  <h3 class="!text-chalk !text-lg !mb-2">Self-hosted, BSL 1.1</h3>
  <p class="text-sm dim"><code class="!text-xs">docker compose up</code>. Бесплатно для внутреннего использования.</p>
</div>

</div>

<div class="mt-8 text-center mute text-sm">
  Живая демо: <span class="dim">vard.ru.tuna.am</span>
</div>

---
layout: default
---

# Одна команда. Ваш ноутбук или Kubernetes-кластер.

<div class="card mt-6 !p-6">

```bash
$ git clone github.com/nborodulin471/vard
$ cd vard && docker compose up
$ open http://localhost:5173
```

<div class="mt-3 text-base text-chalk">
  Готово.
</div>
</div>

<div class="mt-8">
  <p class="eyebrow text-center">Архитектура · всё внутри вашей сети</p>
  <div class="flex items-center justify-center gap-3 mt-4">
    <div class="card !py-3 !px-4 text-center">
      <div class="text-[10px] uppercase tracking-wider mute">Браузер</div>
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
        <div class="text-[10px] uppercase tracking-wider mute">Хранилище</div>
        <div class="font-mono text-sm text-chalk">PostgreSQL</div>
      </div>
      <div class="card !py-2 !px-4 text-center !border-violet/40 !bg-violet/[0.05]">
        <div class="text-[10px] uppercase tracking-wider violet">Локальная LLM</div>
        <div class="font-mono text-sm text-chalk">Ollama</div>
      </div>
    </div>
  </div>
</div>

<div class="mt-8 text-center dim text-sm">
  Никакого SaaS-аккаунта. Никакой регистрации. Никаких токенов в облако.
</div>

---
layout: default
---

# ~$8B+ TAM. ~$1B SAM в первой волне.

<div class="grid grid-cols-3 gap-5 mt-8">

<div class="card">
  <span class="eyebrow">TAM</span>
  <div class="text-3xl text-chalk font-semibold !mb-2">$8B</div>
  <p class="text-sm dim">Все компании с data-командами (5+ человек). ~200 000 в мире × $40k средние траты на data-инструменты.</p>
</div>

<div class="card !border-teal/40">
  <span class="eyebrow !text-teal-light">SAM · Phase 1</span>
  <div class="text-3xl text-chalk font-semibold !mb-2">$1B</div>
  <p class="text-sm dim">Privacy-чувствительные индустрии: финансы, healthcare, gov/defense, телеком, энергетика. ~25 000 компаний × $40k ACV.</p>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">SOM · Год 2-3</span>
  <div class="text-3xl text-chalk font-semibold !mb-2">$5M</div>
  <p class="text-sm dim">Реалистичный захват: 0.2-0.5% SAM → $2-5M ARR.</p>
</div>

</div>

<div class="mt-10">
  <p class="eyebrow">Сопоставимые open-core data-компании</p>
  <div class="grid grid-cols-3 gap-3 mt-3">
    <div class="card !p-4"><span class="text-chalk font-semibold">Metabase</span> <span class="dim text-sm">$30M ARR</span><br/><span class="text-xs mute">BI · YC · open-core</span></div>
    <div class="card !p-4"><span class="text-chalk font-semibold">Posthog</span> <span class="dim text-sm">$70M ARR</span><br/><span class="text-xs mute">Аналитика · YC · open-core</span></div>
    <div class="card !p-4"><span class="text-chalk font-semibold">Supabase</span> <span class="dim text-sm">$20M+ ARR</span><br/><span class="text-xs mute">Postgres BaaS · open-core</span></div>
  </div>
</div>

---
layout: default
---

# Мы единственные в privacy-first AI квадранте.

<div class="grid grid-cols-3 gap-3 mt-6 max-w-3xl mx-auto items-center">

  <div></div>
  <div class="text-center text-xs uppercase tracking-wider mute">↑ AI-native</div>
  <div></div>

  <div class="text-right text-xs uppercase tracking-wider mute pr-3">← Облако</div>

  <div class="grid grid-cols-2 grid-rows-2 gap-px bg-chalk/10 aspect-square">
    <div class="bg-ink-950 p-4">
      <div class="text-[10px] mute uppercase tracking-wider">Облако · AI-native</div>
      <div class="text-base text-chalk mt-2 font-medium">Hex · Deepnote</div>
      <div class="text-xs dim mt-1">Только облако. AI на OpenAI.</div>
    </div>
    <div class="bg-ink-950 p-4 !border-2 !border-teal/60">
      <div class="text-[10px] teal uppercase tracking-wider">On-prem · AI-native</div>
      <div class="text-xl text-chalk mt-2 font-semibold">VARD</div>
      <div class="text-xs dim mt-1">Self-hosted. Локальная LLM.</div>
    </div>
    <div class="bg-ink-950 p-4">
      <div class="text-[10px] mute uppercase tracking-wider">Облако · традиционно</div>
      <div class="text-base text-chalk mt-2 font-medium">Mode · Looker</div>
      <div class="text-xs dim mt-1">BI в облаке. Без ноутбуков.</div>
    </div>
    <div class="bg-ink-950 p-4">
      <div class="text-[10px] mute uppercase tracking-wider">On-prem · традиционно</div>
      <div class="text-base text-chalk mt-2 font-medium">Jupyter · Querybook</div>
      <div class="text-xs dim mt-1">Self-hosted. Без AI и коллаборации.</div>
    </div>
  </div>

  <div class="text-left text-xs uppercase tracking-wider mute pl-3">On-prem →</div>

  <div></div>
  <div class="text-center text-xs uppercase tracking-wider mute">↓ Традиционно</div>
  <div></div>
</div>

<div class="mt-6 text-center text-base">
  <span class="dim">В правом верхнем квадранте никого нет.</span> <span class="text-chalk font-semibold">Мы его строим.</span>
</div>

---
layout: default
---

# Open-core. Бесплатное топливо для дистрибуции.<br/>Платит enterprise.

<div class="mt-6 space-y-3">

<div class="card flex items-center gap-6">
  <div class="text-base text-chalk font-semibold w-48">Community</div>
  <div class="dim text-sm flex-1">Бесплатно · BSL 1.1 · ~50 000 установок / год</div>
  <div class="!text-chalk-mute font-mono text-sm">$0</div>
</div>

<div class="card flex items-center gap-6">
  <div class="text-base text-chalk font-semibold w-48">Team Self-hosted</div>
  <div class="dim text-sm flex-1">$49 / пользователь / мес, от 10 мест · ~200 платящих команд</div>
  <div class="text-chalk font-mono text-sm">$1.8M ARR</div>
</div>

<div class="card !border-teal/40 !bg-teal/[0.04] flex items-center gap-6">
  <div class="text-base text-chalk font-semibold w-48">Enterprise</div>
  <div class="dim text-sm flex-1">$30k–80k / год · ~50 клиентов · SSO, SAML, SOC 2</div>
  <div class="teal font-mono text-sm font-semibold">$2.5M ARR</div>
</div>

</div>

<div class="mt-8 grid grid-cols-2 gap-5">
  <div class="card">
    <span class="eyebrow">Цель Год 2-3</span>
    <div class="text-3xl text-gradient font-semibold">$4-5M ARR</div>
    <p class="text-sm dim mt-1">Без Cloud-уровня. Cloud — upside.</p>
  </div>
  <div class="card">
    <span class="eyebrow !text-violet-light">Год 2 add-on</span>
    <div class="text-2xl text-chalk font-semibold">+ $1M Vard Cloud</div>
    <p class="text-sm dim mt-1">Managed-хостинг для команд, которым можно облако.</p>
  </div>
</div>

---
layout: default
---

# Дистрибуция = open source.

<div class="grid grid-cols-3 gap-5 mt-8">

<div class="card">
  <div class="text-3xl teal font-mono mb-3">01</div>
  <h3 class="!text-chalk !text-base !mb-2">GitHub + HN + Reddit</h3>
  <p class="text-sm dim mb-3">OSS data-сообщество живёт там. Цель: 5 000 звёзд за 12 месяцев.</p>
  <div class="pill">Затраты · ~$0</div>
</div>

<div class="card">
  <div class="text-3xl violet font-mono mb-3">02</div>
  <h3 class="!text-chalk !text-base !mb-2">Документация как маркетинг</h3>
  <p class="text-sm dim mb-3">Лучшие доки в категории. Сравнения "Hex alternative", "self-hosted notebook".</p>
  <div class="pill">Затраты · 1 tech writer × 6 мес</div>
</div>

<div class="card">
  <div class="text-3xl navy font-mono mb-3">03</div>
  <h3 class="!text-chalk !text-base !mb-2">Outbound в enterprise</h3>
  <p class="text-sm dim mb-3">После 1k+ звёзд + 3 референс-клиентов. LinkedIn, Coalesce, Data Council.</p>
  <div class="pill">Затраты · 1 founding AE на мес 9</div>
</div>

</div>

<div class="card mt-8 !p-5">
  <span class="eyebrow">Математика привлечения клиентов</span>
  <p class="text-sm text-chalk mt-1">
    100 GitHub-звёзд ≈ 5 установок ≈ 1 inbound demo ≈ 0.2 платящих клиента.
  </p>
  <p class="text-sm dim mt-2">
    Консервативный путь: <span class="text-chalk">5 000 звёзд → 10 клиентов в первый год.</span>
  </p>
</div>

---
layout: default
---

# От MVP до выручки за 4 квартала.

<div class="grid grid-cols-4 gap-3 mt-6">

<div class="card">
  <div class="eyebrow">Q1 · Сейчас</div>
  <h3 class="!text-chalk !text-base !mb-3">Фундамент</h3>
  <ul class="text-xs dim space-y-1">
    <li>· BSL-лицензия</li>
    <li>· DuckDB + Snowflake</li>
    <li>· Публичный лендинг</li>
    <li>· Документация</li>
    <li>· Discord-сообщество</li>
  </ul>
</div>

<div class="card">
  <div class="eyebrow !text-violet-light">Q2</div>
  <h3 class="!text-chalk !text-base !mb-3">Первые продажи</h3>
  <ul class="text-xs dim space-y-1">
    <li>· SSO / SAML</li>
    <li>· Audit log</li>
    <li>· Helm chart</li>
    <li>· Запуск Show HN</li>
    <li>· 1 000+ звёзд</li>
    <li class="teal">· Первые 3 платящих клиента</li>
  </ul>
</div>

<div class="card">
  <div class="eyebrow !text-teal-light">Q3</div>
  <h3 class="!text-chalk !text-base !mb-3">Масштаб</h3>
  <ul class="text-xs dim space-y-1">
    <li>· Vard Cloud beta</li>
    <li>· dbt-интеграция</li>
    <li>· 5+ enterprise-клиентов</li>
    <li>· 2 000+ звёзд</li>
    <li class="teal">· $250k ARR</li>
  </ul>
</div>

<div class="card !border-teal/40">
  <div class="eyebrow !text-teal-light">Q4</div>
  <h3 class="!text-chalk !text-base !mb-3">Капитал</h3>
  <ul class="text-xs dim space-y-1">
    <li>· Cloud GA</li>
    <li>· SOC 2 Type II</li>
    <li>· Закрытие Series Seed</li>
    <li>· Найм AE, SRE, CSM</li>
    <li class="teal">· $500k–1M ARR</li>
  </ul>
</div>

</div>

<div class="mt-10 text-center mute text-sm">
  Реалистично, не overoptimistic. Q2 с 1 платящим = опережаем график.
</div>

---
layout: default
---

# Команда, которая это построила.

<div class="grid grid-cols-3 gap-5 mt-10">

<div class="card text-center">
  <div class="w-20 h-20 rounded-full bg-logo-gradient mx-auto mb-4" style="background: linear-gradient(135deg, #5BC4B8, #5667B8, #9B8BC4);"></div>
  <h3 class="!text-chalk !text-lg !mb-1">Николай Бородулин</h3>
  <p class="text-xs teal mb-3">Founder · CTO</p>
  <p class="text-xs dim">
    Построил Vard MVP. Бэкграунд: [экспертиза]. ВКР-проект, выводит в open-source.
  </p>
</div>

<div class="card text-center !border-dashed !border-chalk/20">
  <div class="w-20 h-20 rounded-full mx-auto mb-4 border border-dashed border-chalk/30 flex items-center justify-center text-chalk-mute text-2xl">?</div>
  <h3 class="!text-chalk !text-lg !mb-1">Ко-фаундер</h3>
  <p class="text-xs violet mb-3">Ищем</p>
  <p class="text-xs dim">Founding designer или DevRel. Senior OSS-бэкграунд.</p>
</div>

<div class="card text-center !border-dashed !border-chalk/20">
  <div class="w-20 h-20 rounded-full mx-auto mb-4 border border-dashed border-chalk/30 flex items-center justify-center text-chalk-mute text-2xl">?</div>
  <h3 class="!text-chalk !text-lg !mb-1">Founding engineer</h3>
  <p class="text-xs navy mb-3">Ищем</p>
  <p class="text-xs dim">Postgres + distributed systems. Коннекторы + enterprise-инфра.</p>
</div>

</div>

<div class="mt-12 text-center text-sm dim">
  Сейчас нанимаем: <span class="text-chalk">founding designer · founding AE · DevRel</span>
</div>

---
layout: default
---

# Что мы сделали и что узнали.

<div class="grid grid-cols-2 gap-6 mt-8">

<div>
  <span class="eyebrow">Сегодня · pre-launch</span>
  <ul class="space-y-2.5 text-sm mt-3">
    <li class="flex items-start gap-3"><span class="teal">✓</span><span>MVP работает: SQL + Python + R, real-time коллаборация, локальный AI</span></li>
    <li class="flex items-start gap-3"><span class="teal">✓</span><span>Живая демо на <span class="dim font-mono">vard.ru.tuna.am</span></span></li>
    <li class="flex items-start gap-3"><span class="teal">✓</span><span>Open-source: <span class="dim font-mono">github.com/nborodulin471/vard</span></span></li>
    <li class="flex items-start gap-3"><span class="teal">✓</span><span>30+ user interviews — приватность это пейн #1</span></li>
    <li class="flex items-start gap-3"><span class="mute">○</span><span class="dim">Публичный запуск: запланирован на Q2</span></li>
    <li class="flex items-start gap-3"><span class="mute">○</span><span class="dim">Первый платящий клиент: запланирован на Q2</span></li>
  </ul>
</div>

<div>
  <span class="eyebrow !text-teal-light">Цель · через 90 дней после запуска</span>
  <ul class="space-y-2.5 text-sm mt-3">
    <li class="flex items-start gap-3"><span class="violet">→</span><span>2 400 GitHub-звёзд</span></li>
    <li class="flex items-start gap-3"><span class="violet">→</span><span>8 200 установок через Docker Hub</span></li>
    <li class="flex items-start gap-3"><span class="violet">→</span><span>412 активных в Discord</span></li>
    <li class="flex items-start gap-3"><span class="violet">→</span><span>12 enterprise inbound demo-запросов</span></li>
    <li class="flex items-start gap-3"><span class="violet">→</span><span>2 платных пилота (Банк A, Healthcare B)</span></li>
  </ul>
</div>

</div>

---
layout: center
class: text-center
---

# Что нам нужно.

<div class="card mt-8 max-w-2xl mx-auto !p-8 text-left">

<div class="text-center mb-6">
  <div class="text-5xl text-gradient font-semibold mb-2">$1.5M seed</div>
  <p class="dim text-sm">18 месяцев runway</p>
</div>

<div class="grid grid-cols-2 gap-6 text-sm">
  <div>
    <span class="eyebrow">Распределение</span>
    <ul class="space-y-1.5 dim mt-2">
      <li>· 3 инженера</li>
      <li>· 1 founding AE (Q3)</li>
      <li>· 1 DevRel (Q2)</li>
      <li>· Маркетинг, конференции, инфра</li>
    </ul>
  </div>
  <div>
    <span class="eyebrow !text-violet-light">Ищем</span>
    <ul class="space-y-1.5 dim mt-2">
      <li>· Lead с OSS / dev-tools тезисом</li>
      <li>· Операторы из Hex, dbt, Metabase</li>
      <li>· Интро в regulated enterprise</li>
    </ul>
  </div>
</div>

</div>

<div class="mt-10 text-base">
  <span class="dim">Контакт:</span> <span class="text-chalk font-mono">hello@vard.io</span>
</div>

---
layout: center
class: text-center
---

<img src="./logo.png" class="w-24 mx-auto mb-8" />

# Спасибо.

<div class="mt-6 mute text-sm">Q&A · Backup-слайды далее ↓</div>

---
layout: default
---

# B1 · Почему BSL, а не AGPL или MIT

<div class="space-y-3 mt-6">

<div class="card flex items-center gap-4">
  <div class="font-mono text-chalk text-base w-32">MIT / Apache</div>
  <div class="text-sm !text-red-400 flex-1">→ Конкуренты захостят нас как SaaS, заберут рынок.</div>
</div>

<div class="card flex items-center gap-4">
  <div class="font-mono text-chalk text-base w-32">AGPL</div>
  <div class="text-sm !text-red-400 flex-1">→ Юристы enterprise блокируют. Половина клиентов потеряна.</div>
</div>

<div class="card !border-teal/40 !bg-teal/[0.04] flex items-center gap-4">
  <div class="font-mono text-chalk text-base w-32">BSL 1.1</div>
  <div class="text-sm flex-1">
    <span class="text-chalk">→ Компании используют свободно. Конкуренты не могут хостить как сервис.</span><br/>
    <span class="dim">Через 4 года переход на Apache 2.0.</span>
  </div>
</div>

</div>

<div class="mt-8">
  <p class="eyebrow">Прецеденты</p>
  <p class="text-base text-chalk mt-2">Sentry · CockroachDB · MariaDB · MongoDB</p>
</div>

---
layout: default
---

# B2 · Почему Hex/Deepnote не сделают self-hosted?

<div class="space-y-3 mt-8">

<div class="card flex items-start gap-4">
  <div class="text-chalk font-mono w-6 text-center">1</div>
  <div>
    <h3 class="!text-chalk !text-base !mb-1">Каннибализация</h3>
    <p class="text-sm dim">Вся их выручка — облачная подписка.</p>
  </div>
</div>

<div class="card flex items-start gap-4">
  <div class="text-chalk font-mono w-6 text-center">2</div>
  <div>
    <h3 class="!text-chalk !text-base !mb-1">Архитектурный долг</h3>
    <p class="text-sm dim">Их стек предполагает multi-tenant cloud.</p>
  </div>
</div>

<div class="card flex items-start gap-4">
  <div class="text-chalk font-mono w-6 text-center">3</div>
  <div>
    <h3 class="!text-chalk !text-base !mb-1">Стоимость поддержки</h3>
    <p class="text-sm dim">Enterprise self-hosted в 10× сложнее, чем SaaS.</p>
  </div>
</div>

<div class="card flex items-start gap-4">
  <div class="text-chalk font-mono w-6 text-center">4</div>
  <div>
    <h3 class="!text-chalk !text-base !mb-1">Публичные обязательства</h3>
    <p class="text-sm dim">Они зафиксировали cloud-only позиционирование.</p>
  </div>
</div>

</div>

<div class="mt-8 text-center text-base">
  <span class="dim">Если они развернутся, это займёт 18+ месяцев.</span> <span class="text-chalk font-semibold">У нас фора.</span>
</div>

---
layout: default
---

# B3 · Почему Ollama, а не OpenAI/Claude

<div class="grid grid-cols-2 gap-5 mt-8">

<div class="card !border-teal/40">
  <span class="eyebrow !text-teal-light">По умолчанию</span>
  <h3 class="!text-chalk !text-lg !mb-3">Ollama · локально</h3>
  <p class="text-sm dim mb-4">Работает на вашей машине или VM. Данные не покидают периметр.</p>
  <ul class="text-sm space-y-1.5">
    <li class="dim">· Никаких токенов в OpenAI</li>
    <li class="dim">· Работает offline / air-gapped</li>
    <li class="dim">· Compliance-friendly</li>
  </ul>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">Опционально</span>
  <h3 class="!text-chalk !text-lg !mb-3">OpenAI-совместимый API</h3>
  <p class="text-sm dim mb-4">Для команд, у которых свой GPT-прокси.</p>
  <ul class="text-sm space-y-1.5">
    <li class="dim">· Принесите свою LLM</li>
    <li class="dim">· Anthropic, vLLM, LiteLLM</li>
    <li class="dim">· Подключается одной строкой конфига</li>
  </ul>
</div>

</div>

<div class="card mt-6 !p-5">
  <span class="eyebrow">Качество локальной LLM на SQL · Qwen 3 8B</span>
  <div class="grid grid-cols-3 gap-3 mt-3 text-center">
    <div><div class="text-2xl text-chalk font-semibold">87%</div><div class="text-xs mute">SQL gen vs GPT-4</div></div>
    <div><div class="text-2xl text-chalk font-semibold">91%</div><div class="text-xs mute">Понимание схемы</div></div>
    <div><div class="text-2xl teal font-semibold">1.2с</div><div class="text-xs mute">Задержка · быстрее облака</div></div>
  </div>
</div>

---
layout: default
---

# B4 · Подробная unit-экономика

<div class="grid grid-cols-2 gap-5 mt-8">

<div class="card">
  <span class="eyebrow !text-teal-light">Team Self-hosted</span>
  <table class="w-full mt-3 text-sm">
    <tr><td class="dim py-1">ARPU</td><td class="text-right text-chalk font-mono">$9 000 ARR</td></tr>
    <tr><td class="dim py-1">CAC</td><td class="text-right text-chalk font-mono">$1 500</td></tr>
    <tr><td class="dim py-1">Gross margin</td><td class="text-right text-chalk font-mono">92%</td></tr>
    <tr><td class="dim py-1">CAC payback</td><td class="text-right teal font-mono">2 месяца</td></tr>
    <tr><td class="dim py-1">Net retention</td><td class="text-right text-chalk font-mono">115%</td></tr>
  </table>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">Enterprise</span>
  <table class="w-full mt-3 text-sm">
    <tr><td class="dim py-1">ARPU</td><td class="text-right text-chalk font-mono">$50 000 ARR</td></tr>
    <tr><td class="dim py-1">CAC</td><td class="text-right text-chalk font-mono">$15 000</td></tr>
    <tr><td class="dim py-1">Gross margin</td><td class="text-right text-chalk font-mono">88%</td></tr>
    <tr><td class="dim py-1">CAC payback</td><td class="text-right teal font-mono">4 месяца</td></tr>
    <tr><td class="dim py-1">Net retention</td><td class="text-right text-chalk font-mono">125%</td></tr>
  </table>
</div>

</div>

<div class="mt-6 text-center text-sm dim">
  Маржинальность из расчёта на self-hosted (без инфра-затрат). У Cloud-уровня GM ниже (~75%), но добавляет выручку.
</div>

---
layout: default
---

# B5 · Риски и митигации

<div class="card mt-8">
  <table class="w-full text-sm">
    <thead>
      <tr class="border-b border-chalk/10">
        <th class="text-left py-3 eyebrow !mb-0">Риск</th>
        <th class="text-left py-3 eyebrow !mb-0 !text-teal-light">Митигация</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-chalk/10">
      <tr><td class="py-3 dim">Briefer вырывается вперёд</td><td class="py-3 text-chalk">Сильнее дифференциация: BSL, локальная LLM, R</td></tr>
      <tr><td class="py-3 dim">Hex добавляет self-hosted</td><td class="py-3 text-chalk">18+ мес фора; фокус на OSS-дистрибуции</td></tr>
      <tr><td class="py-3 dim">Локальные LLM упрутся</td><td class="py-3 text-chalk">BYO LLM через OpenAI-совместимый API</td></tr>
      <tr><td class="py-3 dim">Yjs не масштабируется</td><td class="py-3 text-chalk">Миграция на Hocuspocus / proprietary CRDT</td></tr>
      <tr><td class="py-3 dim">RU-команда / международное восприятие</td><td class="py-3 text-chalk">EU/US юрлицо, прозрачная корпоративная структура</td></tr>
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
