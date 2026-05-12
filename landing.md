# Vard.io — Landing Page

> Структура и копи лендинга. Копи на английском (международный рынок), пояснения по структуре на русском.

---

## Дизайн-направление

- Минималистичный, технический. Близко к: Linear, Posthog, Supabase, Modal.com, Resend.
- Тёмная тема как дефолт, light как опция (toggler в навигации).
- Шрифт: Inter / Geist / IBM Plex.
- **Палитра — из логотипа** (зафиксировано 2026-05-09):
  - Фон: ink-950 `#0A0B14` (почти чёрный с навигейт-оттенком)
  - Акценты: teal `#3DA89E` (свежесть, AI), navy `#3D4D9E` (надёжность), violet `#7C6BAE` (премиум)
  - Текст: chalk `#E8EAF2` / chalk-dim `#A8AECB` / chalk-mute `#6B7290`
  - Логотип задаёт градиент `teal → navy → violet`, используется в `text-gradient` и hero-glow
  - Отстройка от синего Hex/Deepnote — за счёт teal+violet, а не оранжевого (как было ранее)
- Реальные скриншоты продукта, никаких стоковых иллюстраций.

---

## Структура страницы (сверху вниз)

### 0. Top bar (announcement, опционально)

```
🎉 Vard is now on Product Hunt — support us today →
```

Тонкая полоса сверху на дни запусков. После — убрать.

---

### 1. Navigation

```
[VARD logo]    Product   Docs   Pricing   Blog          GitHub ⭐ 1.2k   Sign in   [Get started]
```

- "Product" — dropdown: Notebooks, Collaboration, Local AI, Connectors, Security
- "Get started" — ведёт на /docs/quickstart
- GitHub stars — динамический шилд

---

### 2. Hero

**Заголовок (H1):**
> The open-source data notebook
> that runs on your own infra.

**Подзаголовок:**
> Collaborative SQL, Python and R notebooks with a local AI assistant.
> Your data and your AI never leave your network.

**CTA-блок:**
- Primary: `[▶ Try the live demo]` → demo.vard.io с гостевым доступом
- Secondary: `[📦 docker compose up]` → копирует команду + ведёт на quickstart docs
- Tertiary: `[⭐ Star on GitHub]`

**Визуал:**
Анимированный screenshot/видео-петля 8–10 сек:
- Два курсора в одном notebook (collab)
- AI suggestion появляется в SQL ячейке
- Результат → переключение table ↔ chart

---

### 3. Trust bar / Social proof

**На этапе запуска (pre-launch, нет цифр):**
```
        ● Pre-launch · v0.1
        
   We just shipped Vard. Self-host the MVP, kick the tires,
   file the issues — help shape what gets built next.
   
        ⭐ Star us on GitHub →
```

**Через 3–6 мес (когда появятся клиенты):**
```
   Trusted by data teams at:
   [Logo] [Logo] [Logo] [Logo] [Logo]
```

---

### 4. Three pillars (главные дифференциаторы)

Три колонки с иконками. Каждая — 1 заголовок + 2–3 строки:

```
┌─────────────────────┬─────────────────────┬─────────────────────┐
│   🔒                │   🤖                │   👥                │
│ Your data,          │ AI without           │ Built for           │
│ your network.       │ sending data         │ teams.              │
│                     │ anywhere.            │                     │
│ Self-host with      │                      │ Real-time multi-    │
│ Docker or K8s.      │ Bundled local LLM    │ cursor editing.     │
│ No SaaS. No vendor  │ via Ollama. Or       │ RBAC, sharing,      │
│ lock-in. SOC 2-     │ bring your own.      │ comments. Yjs CRDT  │
│ friendly.           │ Zero data leaves.    │ under the hood.     │
└─────────────────────┴─────────────────────┴─────────────────────┘
```

---

### 5. Product showcase

Чередующиеся блоки текст слева / визуал справа (и наоборот).

**Block 5.1**
- H2: **Write SQL with AI that knows your schema**
- Body: Vard's local LLM understands your tables, columns, and types. It writes queries that actually run — no hallucinated column names, no data leaking to OpenAI.
- Visual: GIF — пользователь печатает "monthly active users by country", AI генерирует SQL с правильными именами таблиц/колонок

**Block 5.2**
- H2: **Mix SQL, Python and R in one notebook**
- Body: Query in SQL, transform in pandas, visualize in ggplot. All in the same notebook, all on your hardware.
- Visual: Скриншот — SQL → результат → Python ячейка с pandas → R ячейка с ggplot

**Block 5.3**
- H2: **Collaborate like in Google Docs, but for data**
- Body: See your teammates' cursors. Edit the same notebook simultaneously. Comment on cells. Share with a link — or keep it inside your VPC.
- Visual: GIF — два курсора + комментарии в реальном времени

**Block 5.4**
- H2: **Connect to your data, wherever it lives**
- Body: PostgreSQL, DuckDB, Snowflake, BigQuery, Redshift, ClickHouse. Or import a CSV in one drag.
- Visual: Сетка логотипов поддерживаемых БД

---

### 6. The privacy section (главное конкурентное преимущество)

Полноширинный блок с тёмным фоном и одним заголовком:

> **Your data is yours. Your AI is yours.**
>
> Hex sends your queries to their servers. Deepnote runs your AI on OpenAI.
> Vard runs entirely inside your network — including the LLM.
>
> No data leaves. Ever.

Внизу — три badge-блока:
- ✓ Self-hosted via Docker or Kubernetes
- ✓ Local LLM via Ollama (or bring your own)
- ✓ Open-source under BSL 1.1

---

### 7. Comparison table

H2: **How does Vard compare?**

```
                              Vard      Hex      Deepnote   Jupyter   Querybook
Self-hosted                    ✅       ❌        ❌          ✅          ✅
Local AI (no data leaves)      ✅       ❌        ❌          ❌          ❌
Real-time collaboration        ✅       ✅        ✅          ❌          ❌
Open-source                    ✅       ❌        ❌          ✅          ✅
SQL + Python + R               ✅       ⚠️ no R   ✅          ⚠️         ⚠️ SQL only
Modern AI assistant            ✅       ✅        ✅          ❌          ❌
SSO / SAML                     ✅ Ent   ✅        ✅          ⚠️         ⚠️
Free for internal use          ✅       ❌        ❌          ✅          ✅
```

Под таблицей — мелким шрифтом: *Comparisons as of [DATE]. We try to keep this honest — open an issue if anything looks wrong.*

---

### 8. How it works (для технарей)

H2: **Deploy in 60 seconds**

3 step block:

```
1. Clone & deploy
   ┌─────────────────────────────────────────┐
   │ $ git clone github.com/smarianna24/VARD│
   │ $ cd vard && docker compose up           │
   └─────────────────────────────────────────┘

2. Open http://localhost:5173

3. Start querying
   Connect Postgres, drop a CSV, or query DuckDB.
   AI assistant works out of the box.
```

Ниже — архитектурная диаграмма (browser ↔ FastAPI ↔ Postgres / Ollama / Yjs).

---

### 9. Pricing

H2: **Pricing**
H3-sub: **Free forever for internal use. Pay when you need more.**

4 колонки:

```
Community            Team Cloud           Self-hosted Pro       Enterprise
$0                   $39 / user / mo       $49 / user / mo        Custom
Forever              Coming soon           From 10 seats          Get a quote

Self-host.           We host for you.      Self-host with Pro     Everything in Pro plus:
Up to 5 users.       Unlimited.            features:              · SSO / SAML / OIDC
Unlimited            Email support.        · Project RBAC          · Full audit log export
notebooks.                                  · Audit log lite        · Custom connectors
Local AI.                                  · Notebook versioning   · Dedicated CSM
Community support.                          · Priority email        · 99.9% SLA
                                                                    · SOC 2 review help

[Deploy free]        [Join waitlist]       [Start 14-day trial]    [Talk to sales]
```

Под прайсингом FAQ-аккордеон (5–7 вопросов):
- *Is Vard really free?* Yes. BSL 1.1 → Apache 2.0 in 4 years. Free for internal use forever.
- *Can I use my own LLM (OpenAI, Claude, local)?* Yes. Ollama by default; OpenAI-compatible API supported.
- *What databases do you support?* Postgres today. DuckDB, Snowflake, BigQuery, Redshift, ClickHouse on the roadmap (open in [GitHub Discussions]).
- *Is my data sent anywhere?* No. Vard is fully self-hosted. Even AI runs locally.
- *Do you have SOC 2?* In progress. Target Q3 2026. We help Enterprise customers with their own audits.
- *How is Vard different from Briefer / Hex / Jupyter?* See [comparison →]

---

### 10. Final CTA

Полноширинный блок:

> **Ready to give your data team a notebook**
> **they can actually run on prem?**
>
> [📦 Deploy with Docker]    [💬 Talk to us]

---

### 11. Footer

```
Product            Resources         Company           Connect
─────────          ─────────         ─────────         ─────────
Notebooks          Docs              About             GitHub
Collaboration      Quickstart        Blog              Twitter / X
Local AI           Examples          Careers           Discord
Connectors         API reference     Press kit         LinkedIn
Security           Changelog
Pricing            Status

Legal              
─────────
Terms
Privacy
DPA
Security
License (BSL 1.1)
```

Внизу: `© 2026 Vard, Inc. · Built for data teams who can't go cloud.`

---

## Технические заметки по реализации

### Стек

**Реализовано (v0, 2026-05-09):** Astro 4 + Tailwind 3 в `VARD/landing/`. Все 11 секций собраны, dev-сервер на `http://127.0.0.1:4321`, билд проходит чисто.

Структура:
```
VARD/landing/
├── src/components/    # Logo, Nav, Hero, TrustBar, Pillars, Showcase,
│                      # Privacy, Comparison, HowItWorks, Pricing,
│                      # FinalCTA, Footer, Announcement
├── src/layouts/Layout.astro
├── src/pages/index.astro
├── src/styles/global.css
├── public/{logo,favicon}.svg
├── tailwind.config.mjs   # палитра из лого: ink/teal/navy/violet/chalk
└── astro.config.mjs
```

Команды: `npm run dev` (локально), `npm run build` → `dist/` (статика на Vercel/Cloudflare Pages).

**Будущее:**
- Хостинг на Vercel или Cloudflare Pages
- Документация на Mintlify (docs.vard.io) или Docusaurus
- Аналитика: Plausible (privacy-friendly) + PostHog для product analytics
- Live demo: demo.vard.io с автообновлением каждые 24 часа
- Если понадобится сложная интерактивность — миграция на Next.js 14 + shadcn/ui (Astro поддерживает React-компоненты в islands, можно гибридно)

### SEO-приоритеты (страницы для построения)
- `/vs/hex` — landing для запросов "Hex alternative"
- `/vs/deepnote` — то же
- `/vs/jupyter`
- `/local-llm-for-sql` — органический трафик
- `/self-hosted-data-notebook` — органический трафик
- `/blog` — 2–4 статьи в месяц от founders/team

### Метрики лендинга для отслеживания
- Conversion на `Try demo`: цель 8–12%
- Conversion на `docker compose up` копирование: 4–6%
- GitHub click-through: 15–20% (это OSS, нормально что много кликают на гитхаб)
- Time on page: >90 сек = хорошо
- Bounce rate: <55% = хорошо для dev-tool лендинга

---

## Что писать в `<title>` и `<meta>`

**Главная:**
- Title: `Vard — Open-source data notebook with local AI`
- Description: `Self-hosted alternative to Hex and Deepnote. Collaborative SQL, Python and R notebooks with a local LLM. Deploy in 60 seconds.`

**Pricing:**
- Title: `Pricing — Vard`
- Description: `Free for internal use. Team and Enterprise plans for growing data teams who need privacy, SSO, and audit.`

---

## Что НЕ делать

- ❌ Никаких "AI-powered" в заголовке — все так пишут, не отстраивает
- ❌ Никаких заявлений типа "10x faster" без подтверждающих бенчмарков
- ❌ Никаких stock иллюстраций с улыбающимися людьми
- ❌ Никакого живого чата (Intercom) на dev-tool лендинге — это для ритейла
- ❌ Никаких форм "Get a demo" в hero — слишком высокое трение, лучше "Try live demo"
- ❌ Никаких "Trusted by 1000+ companies" пока их нет
