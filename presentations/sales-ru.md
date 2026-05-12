---
theme: default
title: Vard — для data-команд, которым нельзя в облако
canvasWidth: 1280
aspectRatio: "16/10"
info: |
  Vard — self-hosted ноутбук для данных с локальным AI (source-available, BSL 1.1).
  Для data-команд в регулируемых индустриях: банки, healthcare, gov, defense.
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
  <a href="../sales/" >EN</a>
  <a class="active" href="./">RU</a>
</div>

<div class="flex flex-col items-center justify-center min-h-[70vh]">
  <img src="/logo.png" class="w-32 mb-8" />
  <h1 class="!text-6xl !mb-4">VARD</h1>
  <p class="text-2xl mb-2 dim">Современные ноутбуки для данных</p>
  <p class="text-2xl text-gradient font-semibold">для команд, которым нельзя в облако.</p>

  <div class="mt-16 text-sm mute">
    Живая демо · vard.ru.tuna.am
  </div>
</div>

---
layout: default
---

# Вы знаете эту боль.

<div class="grid grid-cols-2 gap-6 mt-10">

<div class="card !border-red-500/30">
  <span class="eyebrow !text-red-400">Облачные ноутбуки</span>
  <h3 class="!text-chalk !text-lg !mb-3">Hex · Deepnote · Mode</h3>
  <p class="text-sm dim mb-3">Современный UX, AI-ассистент, real-time коллаборация.</p>
  <p class="text-sm !text-red-400 font-medium">→ Compliance не пропускает.</p>
  <p class="text-xs mute mt-1">Ваши данные пересекают периметр. AI-промпты уходят в OpenAI. Аудиторы хмурятся.</p>
</div>

<div class="card !border-yellow-500/30">
  <span class="eyebrow !text-yellow-400">Локальные ноутбуки</span>
  <h3 class="!text-chalk !text-lg !mb-3">Jupyter · Querybook</h3>
  <p class="text-sm dim mb-3">Self-hosted, бесплатно, данные у вас.</p>
  <p class="text-sm !text-yellow-400 font-medium">→ Команда ненавидит.</p>
  <p class="text-xs mute mt-1">Нет real-time коллаборации. Нет AI. UX из 2014. Старый стек, фрикшен везде.</p>
</div>

</div>

<div class="card !border-teal/40 !bg-teal/[0.04] mt-6">
  <p class="text-base text-chalk text-center">
    Сегодняшний выбор: <span class="dim">нарушить compliance</span> или <span class="dim">демотивировать команду.</span>
  </p>
</div>

---
layout: center
class: text-center
---

<span class="eyebrow">Есть третий вариант.</span>

# Что если у команды будет<br/><span class="text-gradient">Hex на их ноутбуке?</span>

<p class="text-lg dim mt-8 max-w-2xl mx-auto">
  Современный AI-native ноутбук. Real-time коллаборация. SQL + Python + R.<br/>
  Всё работает целиком внутри вашей сети. Ничего не уходит.
</p>

<div class="mt-10 flex justify-center gap-3">
  <span class="pill teal">✓ Self-hosted</span>
  <span class="pill teal">✓ Локальный AI</span>
  <span class="pill teal">✓ Source-available</span>
</div>

---
layout: default
---

# Что вы получаете из коробки.

<div class="grid grid-cols-2 gap-5 mt-8">

<div class="card">
  <span class="eyebrow !text-teal-light">Полиглотные ноутбуки</span>
  <h3 class="!text-chalk !text-lg !mb-2">SQL + Python + R, один файл</h3>
  <p class="text-sm dim mb-3">Запрос в SQL, трансформация в pandas, график в ggplot. Переменные передаются между ячейками.</p>
  <pre class="!p-3 !text-[11px]"><code>events <span class="!text-violet-light">←</span> sql("select * from events")
df <span class="!text-violet-light">←</span> events.groupby("country")
chart <span class="!text-violet-light">←</span> ggplot(df, aes(month, mau))</code></pre>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">Real-time коллаборация</span>
  <h3 class="!text-chalk !text-lg !mb-2">Двое в одном ноутбуке</h3>
  <p class="text-sm dim mb-3">Живые курсоры. Комментарии на ячейках. Как Google Docs — но для запросов.</p>
  <div class="flex items-center gap-2 mt-3">
    <span class="pill !text-[10px]"><span class="teal">●</span> Сара редактирует</span>
    <span class="pill !text-[10px]"><span class="violet">●</span> Маркус комментирует</span>
  </div>
</div>

<div class="card">
  <span class="eyebrow !text-teal-light">Локальный AI</span>
  <h3 class="!text-chalk !text-lg !mb-2">Schema-aware подсказки</h3>
  <p class="text-sm dim mb-3">AI знает ваши таблицы и колонки. Генерирует запросы, которые реально работают.</p>
  <p class="text-xs mute"><span class="teal">›</span> "активные пользователи по странам, последние 90 дней"</p>
  <p class="text-xs dim ml-2 mt-1">→ корректный SQL, без выдуманных колонок</p>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">Подключайте всё</span>
  <h3 class="!text-chalk !text-lg !mb-2">Postgres, DuckDB, Snowflake, CSV</h3>
  <p class="text-sm dim mb-3">Все основные БД поддерживаются. Перетащите CSV. Стройте коннекторы через SDK.</p>
  <div class="flex flex-wrap gap-1.5">
    <span class="pill !text-[10px]">Postgres</span>
    <span class="pill !text-[10px]">DuckDB</span>
    <span class="pill !text-[10px]">Snowflake</span>
    <span class="pill !text-[10px]">CSV</span>
  </div>
</div>

</div>

---
layout: default
---

# Приватность — это не чекбокс. Это архитектура.

<div class="card mt-6 !p-6">

```
   ┌────────────────────────────────────────────────────┐
   │                ПЕРИМЕТР ВАШЕЙ СЕТИ                 │
   │                                                    │
   │   Браузер ──▶ FastAPI ──▶ Postgres                 │
   │     │            │                                 │
   │     │            └──▶ Ollama (локальная LLM)       │
   │     │                                              │
   │     └──▶ Yjs (коллаборация)                        │
   │                                                    │
   └────────────────────────────────────────────────────┘
                           │
                           │   ✕  ноль исходящего трафика
                           ▼
                       (облако)
```

</div>

<div class="grid grid-cols-3 gap-3 mt-6">
  <div class="card !p-4 !border-teal/30">
    <span class="eyebrow !text-teal-light">Данные</span>
    <p class="text-xs dim">Лежат в Postgres на вашей инфре. Не пересекают VPC.</p>
  </div>
  <div class="card !p-4 !border-teal/30">
    <span class="eyebrow !text-teal-light">AI</span>
    <p class="text-xs dim">Ollama работает локально. Промпты и запросы не уходят.</p>
  </div>
  <div class="card !p-4 !border-teal/30">
    <span class="eyebrow !text-teal-light">Коллаборация</span>
    <p class="text-xs dim">Yjs CRDT внутри вашей сети. Никаких сторонних SaaS.</p>
  </div>
</div>

<div class="mt-6 text-center text-base text-chalk">
  Air-gapped развёртывания поддерживаются. Готово к compliance-аудиту.
</div>

---
layout: default
---

# Локальный AI, который реально работает.

<div class="grid grid-cols-2 gap-5 mt-8">

<div>
  <span class="eyebrow">Что вы пишете</span>
  <div class="card mt-2 !p-4">
    <p class="font-mono text-sm text-chalk">активные пользователи по странам, последние 90 дней</p>
  </div>

  <span class="eyebrow mt-6 !inline-block">Что возвращает</span>
  <pre class="!p-4 !text-[12px] !mt-2"><code><span class="!text-violet-light">SELECT</span> country,
       <span class="!text-violet-light">date_trunc</span>(<span class="!text-teal-light">'month'</span>, created_at) <span class="!text-violet-light">AS</span> month,
       <span class="!text-violet-light">count</span>(<span class="!text-violet-light">DISTINCT</span> user_id) <span class="!text-violet-light">AS</span> mau
<span class="!text-violet-light">FROM</span> events
<span class="!text-violet-light">WHERE</span> created_at &gt; <span class="!text-violet-light">now</span>() <span class="mute">-</span> <span class="!text-teal-light">interval '90 days'</span>
<span class="!text-violet-light">GROUP BY</span> 1, 2;</code></pre>
</div>

<div>
  <div class="card !border-teal/30">
    <span class="eyebrow !text-teal-light">Качество на SQL · Qwen 3 8B</span>
    <div class="grid grid-cols-3 gap-3 mt-3 text-center">
      <div>
        <div class="text-2xl text-chalk font-semibold">87%</div>
        <div class="text-[10px] mute mt-1">SQL match<br/>vs GPT-4</div>
      </div>
      <div>
        <div class="text-2xl text-chalk font-semibold">91%</div>
        <div class="text-[10px] mute mt-1">Понимание<br/>схемы</div>
      </div>
      <div>
        <div class="text-2xl teal font-semibold">1.2с</div>
        <div class="text-[10px] mute mt-1">Задержка<br/>(быстрее облака)</div>
      </div>
    </div>
  </div>

  <div class="card mt-4">
    <span class="eyebrow !text-violet-light">Подключите свою LLM</span>
    <p class="text-sm dim mt-2">
      Не нравится Ollama? Используйте OpenAI-совместимый API. Anthropic, vLLM, Bedrock, ваш внутренний GPT-прокси — всё работает через один конфиг.
    </p>
  </div>
</div>

</div>

---
layout: default
---

# Развернётся за 60 секунд.

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="card !p-5">
  <div class="eyebrow !text-teal-light">01 · Pull</div>
  <h3 class="!text-chalk !text-base !mb-3">Клонируйте репо</h3>
  <pre class="!p-3 !text-[11px]"><code>git clone github.com/
  nborodulin471/vard
cd vard</code></pre>
</div>

<div class="card !p-5">
  <div class="eyebrow !text-violet-light">02 · Run</div>
  <h3 class="!text-chalk !text-base !mb-3">Запуск через Docker</h3>
  <pre class="!p-3 !text-[11px]"><code>docker compose up</code></pre>
  <p class="text-xs mute mt-3">Или Helm chart для K8s.</p>
</div>

<div class="card !p-5">
  <div class="eyebrow !text-teal-light">03 · Open</div>
  <h3 class="!text-chalk !text-base !mb-3">Браузер на localhost</h3>
  <p class="font-mono text-sm text-chalk mt-2">http://localhost:5173</p>
  <p class="text-xs mute mt-3">Подключите Postgres, перетащите CSV.</p>
</div>

</div>

<div class="card mt-8 !p-5 !border-teal/30">
  <p class="eyebrow">Варианты развёртывания</p>
  <div class="grid grid-cols-3 gap-3 mt-2 text-center">
    <div class="text-sm"><div class="text-chalk font-medium">Docker Compose</div><div class="text-xs mute">одна VM, dev/team</div></div>
    <div class="text-sm"><div class="text-chalk font-medium">Kubernetes (Helm)</div><div class="text-xs mute">production-масштаб</div></div>
    <div class="text-sm"><div class="text-chalk font-medium">Air-gapped</div><div class="text-xs mute">без интернета</div></div>
  </div>
</div>

---
layout: default
---

# Готов к enterprise с первого дня.

<div class="grid grid-cols-2 gap-5 mt-8">

<div class="card">
  <span class="eyebrow !text-teal-light">Identity & access</span>
  <ul class="text-sm space-y-2 mt-3">
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>SSO через SAML / OIDC</span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>RBAC уровня проекта</span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>Active Directory / Okta / Azure AD</span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>SCIM provisioning <span class="mute text-xs">(Q3 2026)</span></span></li>
  </ul>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">Аудит и compliance</span>
  <ul class="text-sm space-y-2 mt-3">
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>Полный audit log (запросы, правки, экспорты)</span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>Экспорт audit log в SIEM</span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>Версионирование ноутбуков</span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>SOC 2 Type II <span class="mute text-xs">(цель Q3 2026)</span></span></li>
  </ul>
</div>

<div class="card">
  <span class="eyebrow !text-teal-light">Управление данными</span>
  <ul class="text-sm space-y-2 mt-3">
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>Read-only креды на проект</span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>Аппрув запросов <span class="mute text-xs">(Q3)</span></span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>Маскирование PII <span class="mute text-xs">(roadmap)</span></span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>Lineage данных <span class="mute text-xs">(roadmap)</span></span></li>
  </ul>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">Эксплуатация</span>
  <ul class="text-sm space-y-2 mt-3">
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>Экспорт метрик в Prometheus</span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>Backup / restore через стандартный Postgres</span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>99.9% SLA на Enterprise</span></li>
    <li class="flex items-center gap-2"><span class="teal">✓</span><span>Выделенный CSM</span></li>
  </ul>
</div>

</div>

---
layout: default
---

# Как Vard выглядит на фоне других?

<div class="card mt-6 !p-0 overflow-hidden">

<table class="w-full text-sm">
  <thead class="!bg-ink-800/40">
    <tr class="border-b border-chalk/10">
      <th class="text-left p-4 eyebrow !mb-0">Функция</th>
      <th class="text-center p-4 !text-teal-light text-base font-semibold">Vard</th>
      <th class="text-center p-4 dim">Hex</th>
      <th class="text-center p-4 dim">Deepnote</th>
      <th class="text-center p-4 dim">Jupyter</th>
      <th class="text-center p-4 dim">Querybook</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-chalk/10">
    <tr><td class="p-3 dim">Self-hosted</td><td class="p-3 text-center !bg-teal/[0.04] teal">✓</td><td class="p-3 text-center mute">✕</td><td class="p-3 text-center mute">✕</td><td class="p-3 text-center teal">✓</td><td class="p-3 text-center teal">✓</td></tr>
    <tr><td class="p-3 dim">Локальный AI · данные не уходят</td><td class="p-3 text-center !bg-teal/[0.04] teal">✓</td><td class="p-3 text-center mute">✕</td><td class="p-3 text-center mute">✕</td><td class="p-3 text-center mute">✕</td><td class="p-3 text-center mute">✕</td></tr>
    <tr><td class="p-3 dim">Real-time коллаборация</td><td class="p-3 text-center !bg-teal/[0.04] teal">✓</td><td class="p-3 text-center teal">✓</td><td class="p-3 text-center teal">✓</td><td class="p-3 text-center mute">✕</td><td class="p-3 text-center mute">✕</td></tr>
    <tr><td class="p-3 dim">Open-source</td><td class="p-3 text-center !bg-teal/[0.04] dim">~ <span class="text-[10px] mute">BSL</span></td><td class="p-3 text-center mute">✕</td><td class="p-3 text-center mute">✕</td><td class="p-3 text-center teal">✓</td><td class="p-3 text-center teal">✓</td></tr>
    <tr><td class="p-3 dim">SQL + Python + R</td><td class="p-3 text-center !bg-teal/[0.04] teal">✓</td><td class="p-3 text-center dim">~</td><td class="p-3 text-center teal">✓</td><td class="p-3 text-center dim">~</td><td class="p-3 text-center dim">~</td></tr>
    <tr><td class="p-3 dim">Современный AI-ассистент</td><td class="p-3 text-center !bg-teal/[0.04] teal">✓</td><td class="p-3 text-center teal">✓</td><td class="p-3 text-center teal">✓</td><td class="p-3 text-center mute">✕</td><td class="p-3 text-center mute">✕</td></tr>
    <tr><td class="p-3 dim">SSO / SAML</td><td class="p-3 text-center !bg-teal/[0.04] teal">Ent</td><td class="p-3 text-center teal">✓</td><td class="p-3 text-center teal">✓</td><td class="p-3 text-center dim">~</td><td class="p-3 text-center dim">~</td></tr>
    <tr><td class="p-3 dim">Бесплатно для внутреннего использования</td><td class="p-3 text-center !bg-teal/[0.04] teal">✓</td><td class="p-3 text-center mute">✕</td><td class="p-3 text-center mute">✕</td><td class="p-3 text-center teal">✓</td><td class="p-3 text-center teal">✓</td></tr>
  </tbody>
</table>

</div>

<div class="mt-6 text-center mute text-xs">
  Сравнение актуально на май 2026. Откройте issue, если что-то не так.
</div>

---
layout: default
---

# Тарифы

<div class="grid grid-cols-3 gap-3 mt-8">

<div class="card">
  <h3 class="!text-chalk !text-base !mb-2">Community</h3>
  <div class="text-3xl text-chalk font-semibold">$0</div>
  <div class="text-xs mute">навсегда</div>
  <p class="text-xs dim mt-3 mb-4">Запуск локально · до 5 пользователей · локальный AI · поддержка сообществом.</p>
  <div class="text-xs teal">Для · пилот, отдельные команды</div>
</div>

<div class="card !border-teal/40 !bg-teal/[0.04] relative">
  <h3 class="!text-chalk !text-base !mb-2">Self-hosted Pro</h3>
  <div class="text-3xl text-chalk font-semibold">$49</div>
  <div class="text-xs mute">за пользователя / мес · от 5 мест</div>
  <p class="text-xs dim mt-3 mb-4">RBAC · audit log · версионирование · приоритет email.</p>
  <div class="text-xs teal">Для · регулируемых, растущих команд</div>
</div>

<div class="card">
  <h3 class="!text-chalk !text-base !mb-2">Enterprise</h3>
  <div class="text-3xl text-chalk font-semibold">По запросу</div>
  <div class="text-xs mute">запросить расчёт</div>
  <p class="text-xs dim mt-3 mb-4">SSO · полный audit · SOC 2 · CSM · 99.9% SLA.</p>
  <div class="text-xs teal">Для · банков, healthcare, gov</div>
</div>

</div>

<div class="mt-8 grid grid-cols-3 gap-3 text-center">
  <div class="card !p-3 text-xs"><span class="teal">✓</span> <span class="dim">Триал 14 дней · Pro и Enterprise</span></div>
  <div class="card !p-3 text-xs"><span class="teal">✓</span> <span class="dim">Годовая скидка: 2 месяца бесплатно</span></div>
  <div class="card !p-3 text-xs"><span class="teal">✓</span> <span class="dim">Volume-цена: 50+ мест</span></div>
</div>

---
layout: default
---

# Как это выглядит за 90 дней.

<div class="grid grid-cols-2 gap-6 mt-8">

<div>
  <span class="eyebrow">День 0</span>
  <div class="card mt-2">
    <p class="text-sm dim">
      Compliance запрещает Hex. Команда живёт в Jupyter + Slack + скриншотах. Senior-аналитик 2 часа/день переписывает чужие запросы.
    </p>
  </div>

  <span class="eyebrow mt-5 !inline-block">День 7</span>
  <div class="card mt-2">
    <p class="text-sm dim">
      <code class="!text-xs">docker compose up</code> на VM. SSO подключён к Okta. Пилот с 3 аналитиками.
    </p>
  </div>

  <span class="eyebrow mt-5 !inline-block">День 30</span>
  <div class="card mt-2">
    <p class="text-sm dim">
      Вся data-команда мигрировала. AI-ассистент сократил время написания запросов на ~40%. Опубликован первый кросс-командный ноутбук.
    </p>
  </div>

  <span class="eyebrow mt-5 !inline-block">День 90</span>
  <div class="card mt-2 !border-teal/30">
    <p class="text-sm text-chalk">
      Audit log принят InfoSec. Подписан Self-hosted Pro контракт. Команда измеряет результат: меньше борьбы с инструментами, больше работы с инсайтами.
    </p>
  </div>
</div>

<div>
  <span class="eyebrow !text-teal-light">Метрики, которые меряем</span>
  <div class="space-y-3 mt-3">
    <div class="card !p-4">
      <div class="text-2xl text-chalk font-semibold">−40%</div>
      <div class="text-xs mute">время до первого работающего запроса</div>
    </div>
    <div class="card !p-4">
      <div class="text-2xl text-chalk font-semibold">3×</div>
      <div class="text-xs mute">ноутбуков в неделю на команду</div>
    </div>
    <div class="card !p-4">
      <div class="text-2xl text-chalk font-semibold">0</div>
      <div class="text-xs mute">данных, ушедших из сети · никогда</div>
    </div>
    <div class="card !p-4 !border-teal/30">
      <div class="text-2xl teal font-semibold">12-15 ч</div>
      <div class="text-xs mute">сэкономлено на аналитика в неделю</div>
    </div>
  </div>

  <p class="text-xs mute mt-4">
    * Оценки по 30+ user interviews. Реальные результаты зависят от размера команды и стартовой точки.
  </p>
</div>

</div>

---
layout: default
---

# Почему Vard, в одно дыхание.

<div class="space-y-4 mt-10 max-w-3xl mx-auto">

<div class="card !p-5 flex items-start gap-4">
  <div class="teal text-xl">→</div>
  <div>
    <span class="text-chalk font-medium">Современный UX, который команда реально использует.</span>
    <span class="dim"> Не Jupyter из 2014.</span>
  </div>
</div>

<div class="card !p-5 flex items-start gap-4">
  <div class="teal text-xl">→</div>
  <div>
    <span class="text-chalk font-medium">Данные и AI не покидают вашу сеть.</span>
    <span class="dim"> Compliance-аудит становится формальностью.</span>
  </div>
</div>

<div class="card !p-5 flex items-start gap-4">
  <div class="teal text-xl">→</div>
  <div>
    <span class="text-chalk font-medium">Source-available, лицензия BSL 1.1 (Apache 2.0 в 2030).</span>
    <span class="dim"> Никакого SaaS lock-in. Команда может проверить код.</span>
  </div>
</div>

<div class="card !p-5 flex items-start gap-4">
  <div class="teal text-xl">→</div>
  <div>
    <span class="text-chalk font-medium">Развёртывание за 60 секунд.</span>
    <span class="dim"> DevOps не теряет неделю.</span>
  </div>
</div>

<div class="card !p-5 flex items-start gap-4">
  <div class="teal text-xl">→</div>
  <div>
    <span class="text-chalk font-medium">Бесплатно для внутреннего использования, навсегда.</span>
    <span class="dim"> Платите только за enterprise-фичи.</span>
  </div>
</div>

</div>

---
layout: center
class: text-center
---

# Попробуйте сегодня вечером.

<div class="grid grid-cols-3 gap-5 mt-10 max-w-4xl mx-auto">

<div class="card text-left">
  <div class="eyebrow !text-teal-light">За 30 секунд</div>
  <h3 class="!text-chalk !text-base !mb-2">Откройте живую демо</h3>
  <p class="text-sm dim mb-3">Без регистрации. Только браузер. Посмотрите сами.</p>
  <p class="font-mono text-xs text-chalk">vard.ru.tuna.am</p>
</div>

<div class="card text-left !border-teal/40">
  <div class="eyebrow !text-teal-light">За 60 секунд</div>
  <h3 class="!text-chalk !text-base !mb-2">Запустите на ноутбуке</h3>
  <p class="text-sm dim mb-3">Docker Compose, одна команда. Подключите Postgres.</p>
  <pre class="!p-2 !text-[10px]"><code>docker compose up</code></pre>
</div>

<div class="card text-left">
  <div class="eyebrow !text-violet-light">Когда готовы</div>
  <h3 class="!text-chalk !text-base !mb-2">Свяжитесь с нами</h3>
  <p class="text-sm dim mb-3">Пилот, security-ревью, кастомные коннекторы.</p>
  <p class="font-mono text-xs text-chalk">hello@vard.io</p>
</div>

</div>

<div class="mt-12 text-base">
  <span class="dim">Звезду на GitHub:</span> <span class="text-chalk font-mono">github.com/nborodulin471/vard</span>
</div>

---
layout: center
class: text-center
---

<img src="/logo.png" class="w-24 mx-auto mb-8" />

# Вопросы?

<p class="dim mt-4">hello@vard.io · vard.ru.tuna.am · github.com/nborodulin471/vard</p>
