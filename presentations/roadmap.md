---
theme: default
title: Vard — Roadmap разработки
canvasWidth: 1280
aspectRatio: "16/10"
info: |
  Внутренний dev-roadmap. Источник: VARD PM.md (Q1-Q4 + 90-day plan).
  Для команды разработки и sprint planning.
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
</style>

<div class="flex flex-col items-center justify-center min-h-[70vh]">
  <img src="/logo.png" class="w-32 mb-8" />
  <h1 class="!text-5xl !mb-3">VARD</h1>
  <p class="text-2xl mb-2 dim">Roadmap разработки</p>
  <p class="text-xl text-gradient font-semibold">Q1 → Q4 · 90-day plan · tech deep-dives</p>

  <div class="mt-16 text-sm mute">
    Внутренний документ · для команды разработки · обновлять каждые 2 недели
  </div>
</div>

---
layout: default
---

# Где мы сейчас · MVP status

<div class="grid grid-cols-2 gap-5 mt-8">

<div class="card !border-teal/40">
  <span class="eyebrow !text-teal-light">✓ Работает в MVP</span>
  <ul class="text-sm dim space-y-2 mt-3">
    <li class="flex gap-2"><span class="teal">✓</span><span>Проекты и notebooks с code/markdown ячейками</span></li>
    <li class="flex gap-2"><span class="teal">✓</span><span>SQL / Python / R исполнение</span></li>
    <li class="flex gap-2"><span class="teal">✓</span><span>Real-time коллаборация · Yjs CRDT</span></li>
    <li class="flex gap-2"><span class="teal">✓</span><span>AI-панель + inline autocomplete · Ollama</span></li>
    <li class="flex gap-2"><span class="teal">✓</span><span>Импорт CSV в Postgres со схемой</span></li>
    <li class="flex gap-2"><span class="teal">✓</span><span>Demo-режим, базовый RBAC (owner/editor)</span></li>
  </ul>
</div>

<div class="card !border-red-500/30">
  <span class="eyebrow !text-red-400">✕ Блокирует первую продажу</span>
  <ul class="text-sm dim space-y-2 mt-3">
    <li class="flex gap-2"><span class="!text-red-400">✕</span><span>Только Postgres — нет Snowflake/BQ/ClickHouse</span></li>
    <li class="flex gap-2"><span class="!text-red-400">✕</span><span>Нет SSO / SAML / OIDC</span></li>
    <li class="flex gap-2"><span class="!text-red-400">✕</span><span>Нет audit log</span></li>
    <li class="flex gap-2"><span class="!text-red-400">✕</span><span>Нет notebook versioning</span></li>
    <li class="flex gap-2"><span class="!text-red-400">✕</span><span>Нет Helm chart для K8s</span></li>
    <li class="flex gap-2"><span class="!text-red-400">✕</span><span>Нет dbt-интеграции (US enterprise обязательно)</span></li>
  </ul>
</div>

</div>

<div class="mt-6 text-center text-sm dim">
  Локальное приложение · ставится на компьютер пользователя через <code>docker compose up</code><br/>
  UI · React + Monaco · Backend · FastAPI + SQLAlchemy + WebSocket · Storage · PostgreSQL · AI · Ollama · Realtime · Yjs
</div>

---
layout: default
---

# Q1 · сейчас · Фундамент

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="card">
  <span class="eyebrow !text-teal-light">Лицензия и репо</span>
  <ul class="text-xs dim space-y-1.5 mt-3">
    <li>· LICENSE BSL 1.1</li>
    <li>· CONTRIBUTING.md</li>
    <li>· CODE_OF_CONDUCT.md</li>
    <li>· SECURITY.md</li>
    <li>· Issue / PR templates</li>
    <li>· CI · GitHub Actions (test, lint, build, docker push)</li>
  </ul>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">Коннекторы</span>
  <ul class="text-xs dim space-y-1.5 mt-3">
    <li>· DuckDB · самый дешёвый</li>
    <li>· Snowflake · самый востребованный для US</li>
    <li>· BigQuery · GCP-стек</li>
    <li>· Notebook export · .ipynb совместимость</li>
    <li>· BYO LLM · OpenAI-compatible API</li>
  </ul>
</div>

<div class="card">
  <span class="eyebrow !text-teal-light">Маркетинг</span>
  <ul class="text-xs dim space-y-1.5 mt-3">
    <li class="teal">✓ Лендинг vard.io</li>
    <li>· Документация · Mintlify / Docusaurus</li>
    <li>· Discord</li>
    <li>· Twitter / X</li>
    <li>· GitHub Discussions</li>
  </ul>
</div>

</div>

<div class="mt-8 text-center text-sm">
  <span class="dim">Цель Q1:</span>
  <span class="text-chalk">3 коннектора + базовая гигиена + лендинг готовы к Show HN</span>
</div>

---
layout: default
---

# Q2 · 4-6 мес · Enterprise basics

<div class="grid grid-cols-2 gap-5 mt-6">

<div class="card !border-teal/40">
  <span class="eyebrow !text-teal-light">Технические must-have</span>
  <ul class="text-sm dim space-y-2 mt-3">
    <li class="flex gap-2"><span class="teal">·</span><span><b class="text-chalk">SSO</b> — OIDC + SAML</span></li>
    <li class="flex gap-2"><span class="teal">·</span><span><b class="text-chalk">RBAC</b> расширенный · project-level permissions</span></li>
    <li class="flex gap-2"><span class="teal">·</span><span><b class="text-chalk">Audit log</b> — queries, edits, exports, logins</span></li>
    <li class="flex gap-2"><span class="teal">·</span><span><b class="text-chalk">Notebook versioning</b> · git-based</span></li>
    <li class="flex gap-2"><span class="teal">·</span><span><b class="text-chalk">Helm chart</b> — для production K8s</span></li>
  </ul>
</div>

<div class="card !border-violet/40">
  <span class="eyebrow !text-violet-light">Маркетинг + продажи</span>
  <ul class="text-sm dim space-y-2 mt-3">
    <li class="flex gap-2"><span class="violet">·</span><span>Show HN · Product Hunt запуск</span></li>
    <li class="flex gap-2"><span class="violet">·</span><span>5 dev.to / Medium постов</span></li>
    <li class="flex gap-2"><span class="violet">·</span><span>3 YouTube tutorial видео</span></li>
    <li class="flex gap-2"><span class="violet">·</span><span>30+ user interviews</span></li>
    <li class="flex gap-2"><span class="violet">·</span><span>Pricing page · security page · comparison pages</span></li>
    <li class="flex gap-2"><span class="teal font-semibold">→</span><span class="text-chalk">3-5 платящих enterprise клиентов</span></li>
  </ul>
</div>

</div>

---
layout: default
---

# Q3 · 7-9 мес · Расширение

<div class="grid grid-cols-2 gap-5 mt-8">

<div class="card">
  <span class="eyebrow !text-teal-light">Интеграции</span>
  <ul class="text-sm dim space-y-2 mt-3">
    <li class="flex gap-2"><span class="teal">·</span><span><b class="text-chalk">dbt integration</b> · обязательно для US data community</span></li>
    <li class="flex gap-2"><span class="teal">·</span><span>ClickHouse коннектор</span></li>
    <li class="flex gap-2"><span class="teal">·</span><span>Redshift коннектор</span></li>
    <li class="flex gap-2"><span class="teal">·</span><span>Databricks коннектор</span></li>
  </ul>
</div>

<div class="card !border-violet/40">
  <span class="eyebrow !text-violet-light">Cloud + Security</span>
  <ul class="text-sm dim space-y-2 mt-3">
    <li class="flex gap-2"><span class="violet">·</span><span><b class="text-chalk">Vard Cloud</b> beta · managed-хостинг</span></li>
    <li class="flex gap-2"><span class="violet">·</span><span>SOC 2 Type I · подготовка через Vanta / Drata</span></li>
    <li class="flex gap-2"><span class="violet">·</span><span>Партнёрство с US data consultancies</span></li>
    <li class="flex gap-2"><span class="teal font-semibold">→</span><span class="text-chalk">$250k ARR · 5+ enterprise · 2k+ stars</span></li>
  </ul>
</div>

</div>

<div class="card mt-6 !p-5">
  <span class="eyebrow">Архитектурные решения Q3</span>
  <p class="text-sm dim mt-2">
    К Q3 решить: где Cloud control plane живёт (Delaware DE / Estonia EE / UAE) ·
    как изолировать tenants · какие резервные регионы · backups strategy.
  </p>
</div>

---
layout: default
---

# Q4 · 10-12 мес · Зрелость

<div class="grid grid-cols-2 gap-5 mt-8">

<div class="card !border-teal/40">
  <span class="eyebrow !text-teal-light">Технические</span>
  <ul class="text-sm dim space-y-2 mt-3">
    <li class="flex gap-2"><span class="teal">·</span><span><b class="text-chalk">Vard Cloud GA</b></span></li>
    <li class="flex gap-2"><span class="teal">·</span><span><b class="text-chalk">SOC 2 Type II</b> audit (полноценный)</span></li>
    <li class="flex gap-2"><span class="teal">·</span><span>Air-gapped deploy guide</span></li>
    <li class="flex gap-2"><span class="teal">·</span><span>SCIM provisioning</span></li>
    <li class="flex gap-2"><span class="teal">·</span><span>PII column masking · data lineage (roadmap)</span></li>
  </ul>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">Команда + капитал</span>
  <ul class="text-sm dim space-y-2 mt-3">
    <li class="flex gap-2"><span class="violet">·</span><span>Конференции · Coalesce · Data Council</span></li>
    <li class="flex gap-2"><span class="violet">·</span><span>Найм · AE, SRE, CSM</span></li>
    <li class="flex gap-2"><span class="violet">·</span><span><b class="text-chalk">Series Seed $1.5M</b> · если метрики позволяют</span></li>
    <li class="flex gap-2"><span class="teal font-semibold">→</span><span class="text-chalk">$500k-1M ARR</span></li>
  </ul>
</div>

</div>

---
layout: default
---

# Архитектура · сейчас vs target

<div class="grid grid-cols-2 gap-5 mt-6">

<div class="card">
  <span class="eyebrow">Сейчас · MVP</span>

```
Локальное приложение · машина пользователя
─────────────────────────────────────────
  UI (React + Monaco)
       ↓
  FastAPI · WebSocket
       ↓
  Postgres · Ollama · Yjs

  Docker Compose · ставится одной командой
```

</div>

<div class="card !border-teal/40">
  <span class="eyebrow !text-teal-light">Target · Q4</span>

```
Локальное приложение · машина или K8s
─────────────────────────────────────────
  UI (React + Monaco)
       ↓
  FastAPI · WebSocket · SSO
       ↓
  Postgres + replicas · Ollama / BYO LLM
  Hocuspocus (Yjs scaling)
  Connectors: 6 БД (Snow/BQ/CH/Redshift/...)
  dbt parser · Audit log · git versioning

  Docker · Helm · air-gapped · Vard Cloud
```

</div>

</div>

---
layout: default
---

# Коннекторы · порядок и обоснование

<div class="card mt-6 !p-0 overflow-hidden">

<table class="w-full text-sm">
  <thead class="!bg-ink-800/40">
    <tr class="border-b border-chalk/10">
      <th class="text-left p-3 eyebrow !mb-0">Порядок</th>
      <th class="text-left p-3 eyebrow !mb-0">БД</th>
      <th class="text-left p-3 eyebrow !mb-0">Почему</th>
      <th class="text-left p-3 eyebrow !mb-0">Сложность</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-chalk/10">
    <tr><td class="p-3 teal font-mono">1</td><td class="p-3 text-chalk">DuckDB</td><td class="p-3 dim">Дешевле всего · embedded · даёт wow-фактор для local-only</td><td class="p-3 dim">~1 неделя</td></tr>
    <tr><td class="p-3 teal font-mono">2</td><td class="p-3 text-chalk">Snowflake</td><td class="p-3 dim">Самый запрашиваемый в US enterprise · оплачиваемая аудитория</td><td class="p-3 dim">~2 недели</td></tr>
    <tr><td class="p-3 teal font-mono">3</td><td class="p-3 text-chalk">BigQuery</td><td class="p-3 dim">GCP-стек · европейский enterprise</td><td class="p-3 dim">~2 недели</td></tr>
    <tr><td class="p-3 violet font-mono">Q3-1</td><td class="p-3 text-chalk">ClickHouse</td><td class="p-3 dim">Open-source · быстро растущий, особенно у RU/EU команд</td><td class="p-3 dim">~1 неделя</td></tr>
    <tr><td class="p-3 violet font-mono">Q3-2</td><td class="p-3 text-chalk">Redshift</td><td class="p-3 dim">AWS-стек · отдельные крупные US enterprise</td><td class="p-3 dim">~1 неделя</td></tr>
    <tr><td class="p-3 violet font-mono">Q3-3</td><td class="p-3 text-chalk">Databricks</td><td class="p-3 dim">Lakehouse-стек · крупные DS-команды</td><td class="p-3 dim">~3 недели</td></tr>
  </tbody>
</table>

</div>

<div class="mt-6 text-center text-sm dim">
  Архитектура · pluggable connectors через единый interface (DSN + dialect adapter). 6 коннекторов = ~10 человеко-недель.
</div>

---
layout: default
---

# SSO / SAML · технический план

<div class="grid grid-cols-2 gap-5 mt-6">

<div class="card">
  <span class="eyebrow !text-teal-light">Что покрыть</span>
  <ul class="text-sm dim space-y-1.5 mt-3">
    <li class="flex gap-2"><span class="teal">·</span><span><b class="text-chalk">OIDC</b> · Okta, Auth0, Azure AD, Google Workspace</span></li>
    <li class="flex gap-2"><span class="teal">·</span><span><b class="text-chalk">SAML 2.0</b> · enterprise legacy IdPs</span></li>
    <li class="flex gap-2"><span class="teal">·</span><span>Just-in-time provisioning</span></li>
    <li class="flex gap-2"><span class="teal">·</span><span>Group → role mapping</span></li>
    <li class="flex gap-2"><span class="teal">·</span><span>Multi-org / multi-tenant config</span></li>
    <li class="flex gap-2"><span class="violet">·</span><span>SCIM (Q4)</span></li>
  </ul>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">Реализация</span>
  <ul class="text-sm dim space-y-1.5 mt-3">
    <li class="flex gap-2"><span class="violet">·</span><span>Библиотека · <code class="!text-xs">authlib</code> (Python · OIDC + SAML)</span></li>
    <li class="flex gap-2"><span class="violet">·</span><span>Хранение · <code class="!text-xs">sso_config</code> table в Postgres</span></li>
    <li class="flex gap-2"><span class="violet">·</span><span>Front · отдельный <code class="!text-xs">/sso/&lt;org-slug&gt;</code> route</span></li>
    <li class="flex gap-2"><span class="violet">·</span><span>Test IdPs · samltest.id · oidcdebugger.com</span></li>
    <li class="flex gap-2"><span class="violet">·</span><span>Срок · 2-3 недели</span></li>
  </ul>
</div>

</div>

<div class="card mt-5 !p-5 !border-teal/30">
  <span class="eyebrow">Открытые вопросы</span>
  <p class="text-sm dim mt-2">
    Self-hosted: SSO config редактирует кто? Только super-admin · admin per-org · файл ENV?
    Cloud: тенанты конфигурят в UI · multi-region IdP · MFA enforcement · session timeout policies.
  </p>
</div>

---
layout: default
---

# Audit log · что и как логировать

<div class="grid grid-cols-2 gap-5 mt-6">

<div class="card !border-teal/40">
  <span class="eyebrow !text-teal-light">События для логирования</span>
  <ul class="text-xs dim space-y-1.5 mt-3">
    <li>· <b class="text-chalk">Auth</b> · login, logout, fail, MFA, session expire</li>
    <li>· <b class="text-chalk">Notebook</b> · create, edit, delete, share, fork</li>
    <li>· <b class="text-chalk">Cell</b> · execute SQL, execute Python/R, comment</li>
    <li>· <b class="text-chalk">Data</b> · query rows, export, schema view, connection add</li>
    <li>· <b class="text-chalk">Admin</b> · user create/delete, role change, SSO config edit</li>
    <li>· <b class="text-chalk">AI</b> · prompt sent, model used, response logged (опц.)</li>
  </ul>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">Формат и хранение</span>
  <pre class="!text-[10px] !p-3 mt-3"><code>{
  "event_id": "uuid",
  "timestamp": "ISO-8601",
  "actor": { "user_id", "email", "ip" },
  "action": "notebook.cell.sql_execute",
  "resource": { "type", "id" },
  "metadata": { ... },
  "request_id": "trace-id"
}</code></pre>
  <p class="text-xs dim mt-3">
    Хранение · отдельная Postgres-таблица + опционально JSONL файлы.<br/>
    Экспорт · <b class="text-chalk">JSONL</b> stream → SIEM (Splunk, Datadog, Elastic).
  </p>
</div>

</div>

---
layout: default
---

# Notebook versioning · git-based

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="card">
  <span class="eyebrow !text-teal-light">Модель данных</span>
  <ul class="text-xs dim space-y-1.5 mt-3">
    <li>· Каждый notebook = git-репо</li>
    <li>· Хранение · libgit2 / pygit2</li>
    <li>· Auto-commit на edit с throttle</li>
    <li>· Branches per notebook</li>
    <li>· Tags = published versions</li>
  </ul>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">UX</span>
  <ul class="text-xs dim space-y-1.5 mt-3">
    <li>· Sidebar · history timeline</li>
    <li>· Diff between versions</li>
    <li>· Restore старой версии</li>
    <li>· Compare branches (review)</li>
    <li>· Export к user git как remote</li>
  </ul>
</div>

<div class="card">
  <span class="eyebrow !text-teal-light">Технические</span>
  <ul class="text-xs dim space-y-1.5 mt-3">
    <li>· Yjs CRDT → JSON snapshot</li>
    <li>· Snapshot → git commit</li>
    <li>· Throttle · 30 сек между autocommit</li>
    <li>· Manual commit с message</li>
    <li>· Storage budget · max N коммитов</li>
  </ul>
</div>

</div>

<div class="card mt-6 !p-5 !border-teal/30">
  <span class="eyebrow">Альтернатива</span>
  <p class="text-sm dim mt-2">
    Если git слишком тяжёлый · хранить сериализованные snapshots в Postgres с timeline UI.
    Решить после 5 customer-интервью · какой workflow ожидают (git mental model или просто timeline).
  </p>
</div>

---
layout: default
---

# Helm chart · что покрывает

<div class="grid grid-cols-2 gap-5 mt-6">

<div class="card">
  <span class="eyebrow !text-teal-light">Компоненты</span>
  <ul class="text-sm dim space-y-1.5 mt-3">
    <li class="flex gap-2"><span class="teal">·</span><span>UI bundle (Nginx + static · React build)</span></li>
    <li class="flex gap-2"><span class="teal">·</span><span>Backend (FastAPI · several replicas)</span></li>
    <li class="flex gap-2"><span class="teal">·</span><span>Realtime layer (sticky sessions для WebSocket)</span></li>
    <li class="flex gap-2"><span class="teal">·</span><span>Postgres (StatefulSet или external)</span></li>
    <li class="flex gap-2"><span class="teal">·</span><span>Ollama (GPU optional, separate pool)</span></li>
    <li class="flex gap-2"><span class="teal">·</span><span>Yjs / Hocuspocus collab layer</span></li>
    <li class="flex gap-2"><span class="teal">·</span><span>Optional · Redis для очередей</span></li>
  </ul>
</div>

<div class="card">
  <span class="eyebrow !text-violet-light">Конфигурируемое</span>
  <ul class="text-sm dim space-y-1.5 mt-3">
    <li class="flex gap-2"><span class="violet">·</span><span>External Postgres / Bring-Your-Own DB</span></li>
    <li class="flex gap-2"><span class="violet">·</span><span>External LLM endpoint (OpenAI-compatible)</span></li>
    <li class="flex gap-2"><span class="violet">·</span><span>Storage class · backup policy</span></li>
    <li class="flex gap-2"><span class="violet">·</span><span>Ingress · TLS · cert-manager</span></li>
    <li class="flex gap-2"><span class="violet">·</span><span>SSO secrets via External Secrets Operator</span></li>
    <li class="flex gap-2"><span class="violet">·</span><span>Resource limits · HPA</span></li>
    <li class="flex gap-2"><span class="violet">·</span><span>Air-gapped: image registry override</span></li>
  </ul>
</div>

</div>

---
layout: default
---

# Vard Cloud · архитектурный набросок

<div class="card mt-8 !p-5">

```
                    User browser
                         │
                  app.vard.cloud
                         ▼
                  ┌──────────────┐
                  │  Cloudflare  │ DDoS, edge cache, geo-routing
                  └──────┬───────┘
                         ▼
              ┌──────────────────┐
              │  Control plane   │ tenant management, billing, SSO
              │  (multi-region)  │
              └──────┬───────┬───┘
                     │       │
             ┌───────▼─┐   ┌─▼──────────┐
             │  US     │   │  EU        │  data plane regions
             │  region │   │  region    │  isolated per tenant
             │  K8s    │   │  K8s       │  Postgres + Ollama + apps
             └─────────┘   └────────────┘
```

</div>

<div class="grid grid-cols-3 gap-3 mt-4">
  <div class="card !p-4">
    <div class="eyebrow !text-teal-light">Tenant isolation</div>
    <p class="text-xs dim">Namespace per tenant · network policies · separate Postgres schema</p>
  </div>
  <div class="card !p-4">
    <div class="eyebrow !text-violet-light">Billing</div>
    <p class="text-xs dim">Stripe · usage metering · seat counter · monthly + annual</p>
  </div>
  <div class="card !p-4">
    <div class="eyebrow !text-teal-light">Compliance</div>
    <p class="text-xs dim">SOC 2 Type II · data residency · audit + DPA shipped</p>
  </div>
</div>

---
layout: default
---

# Технические риски и митигации

<div class="card mt-6">
  <table class="w-full text-sm">
    <thead>
      <tr class="border-b border-chalk/10">
        <th class="text-left py-3 eyebrow !mb-0">Риск</th>
        <th class="text-left py-3 eyebrow !mb-0 !text-teal-light">Митигация</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-chalk/10">
      <tr>
        <td class="py-3 dim">Yjs не масштабируется на 100+ одновременных пользователей</td>
        <td class="py-3 text-chalk">Миграция на <b>Hocuspocus</b> (managed Yjs server) · spike тестирование на Q3</td>
      </tr>
      <tr>
        <td class="py-3 dim">Postgres упрётся в потолок на Cloud</td>
        <td class="py-3 text-chalk">Read replicas + connection pooler (PgBouncer) · возможно Citus для шардирования</td>
      </tr>
      <tr>
        <td class="py-3 dim">Ollama · средние модели слабее GPT-4 на сложном SQL</td>
        <td class="py-3 text-chalk">BYO LLM через OpenAI-совместимый API (Anthropic, Bedrock, vLLM) · default fallback</td>
      </tr>
      <tr>
        <td class="py-3 dim">Connector implementation overhead · 6 коннекторов</td>
        <td class="py-3 text-chalk">Единый interface (SQLAlchemy dialect-based) · код-генерация из существующих spec'ов</td>
      </tr>
      <tr>
        <td class="py-3 dim">SSO bugs · конфигурация раз ломается с обновлением IdP</td>
        <td class="py-3 text-chalk">Integration-тесты через samltest.id и Auth0 sandbox в CI</td>
      </tr>
    </tbody>
  </table>
</div>

---
layout: default
---

# Открытые технические вопросы

<div class="card mt-6 !p-6">
<ul class="text-sm space-y-3">
  <li class="flex items-start gap-3"><span class="text-chalk-mute font-mono mt-0.5">☐</span><span><b class="text-chalk">Notebook versioning · git или JSON-snapshots?</b> Решить после 5 customer-интервью.</span></li>
  <li class="flex items-start gap-3"><span class="text-chalk-mute font-mono mt-0.5">☐</span><span><b class="text-chalk">Cloud регионы:</b> US + EU достаточно для Q3 GA, или сразу 4 региона (+APAC, +middle East)?</span></li>
  <li class="flex items-start gap-3"><span class="text-chalk-mute font-mono mt-0.5">☐</span><span><b class="text-chalk">AI prompt logging</b> — opt-in или opt-out? Как соответствует GDPR/HIPAA?</span></li>
  <li class="flex items-start gap-3"><span class="text-chalk-mute font-mono mt-0.5">☐</span><span><b class="text-chalk">Yjs scaling</b> — Hocuspocus self-hosted или payment service?</span></li>
  <li class="flex items-start gap-3"><span class="text-chalk-mute font-mono mt-0.5">☐</span><span><b class="text-chalk">Fingerprint deduplication</b> — нужна ли для коннекторов (multi-team Snowflake)?</span></li>
  <li class="flex items-start gap-3"><span class="text-chalk-mute font-mono mt-0.5">☐</span><span><b class="text-chalk">PII masking</b> — статический regex / column-level metadata / DLP service?</span></li>
  <li class="flex items-start gap-3"><span class="text-chalk-mute font-mono mt-0.5">☐</span><span><b class="text-chalk">Data lineage</b> — собственный или интеграция с DataHub / OpenLineage?</span></li>
</ul>
</div>

---
layout: default
---

# Sprint-1 · ближайшие 2 недели

<div class="grid grid-cols-2 gap-5 mt-8">

<div class="card !border-teal/40">
  <span class="eyebrow !text-teal-light">Кодовая часть</span>
  <ul class="text-sm dim space-y-2 mt-3">
    <li class="flex gap-2"><span class="teal">→</span><span>Добавить LICENSE BSL 1.1 + конверсия дата</span></li>
    <li class="flex gap-2"><span class="teal">→</span><span>CONTRIBUTING.md · CODE_OF_CONDUCT · SECURITY</span></li>
    <li class="flex gap-2"><span class="teal">→</span><span>GitHub Actions · CI (lint, test, build, push docker)</span></li>
    <li class="flex gap-2"><span class="teal">→</span><span>DuckDB-коннектор · реализация + тесты</span></li>
    <li class="flex gap-2"><span class="teal">→</span><span>README в продуктовом репо · sales-focused</span></li>
  </ul>
</div>

<div class="card !border-violet/40">
  <span class="eyebrow !text-violet-light">Инфраструктура</span>
  <ul class="text-sm dim space-y-2 mt-3">
    <li class="flex gap-2"><span class="violet">→</span><span>Регистрация .io домена</span></li>
    <li class="flex gap-2"><span class="violet">→</span><span>Discord сервер</span></li>
    <li class="flex gap-2"><span class="violet">→</span><span>Twitter / X аккаунт · @vardhq</span></li>
    <li class="flex gap-2"><span class="violet">→</span><span>Plausible analytics на лендинге</span></li>
    <li class="flex gap-2"><span class="violet">→</span><span>Customer development · 5 интервью забукать</span></li>
  </ul>
</div>

</div>

---
layout: center
class: text-center
---

<img src="/logo.png" class="w-20 mx-auto mb-6" />

# Roadmap · к sprint planning

<div class="dim text-sm mt-4 max-w-2xl mx-auto">
  Документ для команды разработки · обновлять каждые 2 недели после ретро.<br/>
  Источник истины · VARD PM.md (внутренний).
</div>

<div class="card mt-12 !p-5 max-w-2xl mx-auto text-left">
  <span class="eyebrow">Контакт по техническим вопросам</span>
  <div class="text-sm dim mt-2 space-y-1.5">
    <div>Tech lead · <span class="text-chalk">Николай Бородулин</span></div>
    <div>Repo · <span class="text-chalk font-mono">github.com/nborodulin471/vard</span></div>
    <div>Discord · <span class="text-chalk font-mono">discord.gg/vard</span></div>
  </div>
</div>
