# Vard — Vision Presentation

> Pitch-дек на 14 слайдов. Формат для Keynote / Pitch / Slidev / reveal.js.
> Версия для русскоязычных стейкхолдеров (команда, локальные инвесторы, эдвайзеры).
> Для US/EU инвесторов — перевести на английский, цифры в долларах оставить.
>
> Каждый слайд: один тезис, не больше.

---

## Slide 1 — Title

```
                    VARD

         The open-source data notebook
         that runs on your own infra.

                                            May 2026
                                            [Founder name]
                                            hello@vard.io
```

**Speaker note:** За 30 секунд на этом слайде сказать "мы строим Hex для тех, кому нельзя в облако". Дальше пауза.

---

## Slide 2 — The problem

**Заголовок:** Data teams are stuck between two bad options.

**Тело (две колонки):**

```
┌──────────────────────────┬──────────────────────────┐
│     Modern, but cloud    │     Local, but stuck     │
│                          │                          │
│  Hex, Deepnote, Mode     │  Jupyter, Querybook      │
│                          │                          │
│  ✅ Real-time collab     │  ❌ No real-time collab  │
│  ✅ AI assistance        │  ❌ No AI                │
│  ✅ Modern UX            │  ❌ Dated UX             │
│                          │                          │
│  ❌ Data leaves network  │  ✅ Self-hosted          │
│  ❌ AI uses OpenAI       │  ✅ Your data, yours     │
│  ❌ $100+/seat           │  ✅ Free                 │
└──────────────────────────┴──────────────────────────┘

For regulated industries — banks, healthcare, gov, defense —
the cloud option is illegal. The local option is medieval.
```

**Speaker note:** Усилить болью: "если вы работаете в банке, вы не можете использовать Hex. Если вы используете Jupyter — ваша команда из 10 аналитиков сидит в Slack и шлёт друг другу скриншоты".

---

## Slide 3 — Why now

**Заголовок:** Three forces colliding in 2026.

```
1.  Local LLMs got good.
    Llama 3.3, Qwen 3, DeepSeek-Coder match GPT-4 on SQL.
    For the first time, on-prem AI is actually useful.

2.  Privacy regulation is tightening.
    EU AI Act, US executive orders, sector-specific rules
    (HIPAA, GLBA, FedRAMP) — all push data on-prem.

3.  Open-source data infra is winning.
    DuckDB, Postgres, dbt, Polars, Iceberg.
    The modern data stack is increasingly self-hosted-friendly.
```

**Speaker note:** Этот слайд продаёт момент. До 2025 локальные LLM были игрушкой. В 2026 они инструмент. Окно открылось.

---

## Slide 4 — Our insight

**Заголовок:** The market needs an open-source, AI-native notebook that runs on-prem.

**Body:**
> Hex/Deepnote *won't* build it — it would cannibalize their cloud revenue.
>
> Jupyter *can't* build it — no commercial entity, no roadmap, no AI focus.
>
> Briefer *started* — but with AGPL (enterprise-hostile) and OpenAI-only AI (defeats the point).
>
> **We're the only ones building it right.**

**Speaker note:** Здесь главный аргумент почему именно мы. Не "мы быстрее" — а "мы единственные с правильной комбинацией: BSL + local LLM + R support + multi-language".

---

## Slide 5 — The product

**Заголовок:** Vard is what Hex would look like if you could run it on your laptop.

**4 ключевые фичи (2x2 grid с иконками + 1 строка описания):**

```
┌──────────────────────────────┬──────────────────────────────┐
│ SQL + Python + R notebooks    │ Real-time collaboration       │
│ Mix languages in one notebook │ Two analysts, one notebook,   │
│ with shared variables.        │ live cursors. Yjs CRDT.       │
├──────────────────────────────┼──────────────────────────────┤
│ Local AI assistant             │ Self-hosted, open-source       │
│ Ollama by default. Schema-     │ docker compose up. BSL 1.1.   │
│ aware suggestions, autocomplete│ Free for internal use.         │
└──────────────────────────────┴──────────────────────────────┘
```

**Visual внизу слайда:** скриншот продукта в реальном использовании.

**Speaker note:** Здесь демо-пауза. Если есть возможность — открыть продукт в браузере и показать 30 секунд живого взаимодействия. Это лучше любого слайда.

---

## Slide 6 — How it works

**Заголовок:** One command. Your laptop or your Kubernetes cluster.

```
$ git clone github.com/smarianna24/VARD
$ cd vard && docker compose up
$ open http://localhost:5173

Done.
```

Под кодом — архитектурная диаграмма:

```
       Browser (React + Monaco)
              │
              ▼
       FastAPI backend
       ─────┬──────┬──────┐
            ▼      ▼      ▼
        Postgres Ollama  Yjs
         (data)   (AI)  (collab)
```

**Speaker note:** "Никакого SaaS-аккаунта. Никакой регистрации. Никаких токенов в облако. Всё работает у вас".

---

## Slide 7 — Market

**Заголовок:** ~$8B+ TAM. ~$1B SAM in our first wave.

```
Total Addressable Market

  All companies with data teams (>5 people)
  ~ 200,000 companies globally
  Average $40k/year on data tooling
  ≈ $8B TAM


Serviceable Available Market (Phase 1)

  Privacy-sensitive industries:
  Finance, healthcare, gov/defense, telecom, energy, large enterprise
  ~ 25,000 companies, ~$40k average ACV
  ≈ $1B SAM


Serviceable Obtainable Market (Year 2–3)

  Realistic capture: 0.2–0.5% of SAM
  ≈ $2M–$5M ARR
```

**Comparable companies:**
- Metabase: $30M ARR (BI, open-core, Y Combinator)
- Posthog: $70M ARR (analytics, open-core, Y Combinator)
- Supabase: $20M+ ARR (Postgres BaaS, open-core)

**Speaker note:** Не пытаемся продавать всему рынку. Phase 1 — privacy-sensitive. Этого достаточно для $5M ARR. Остальной рынок — bonus.

---

## Slide 8 — Competition

**Заголовок:** We're the only one in the privacy-first AI notebook quadrant.

**2x2 матрица:**

```
                       AI-native
                          ▲
                          │
        Hex, Deepnote     │     ← VARD
        (cloud only)      │      (self-hosted +
                          │       local AI)
                          │
   Cloud ◄────────────────┼────────────────► On-prem
                          │
        Mode, Looker      │     Jupyter,
        (BI cloud)        │     Querybook
                          │
                          ▼
                    Traditional / no AI
```

**Под матрицей одна строка:**
> The top-right quadrant has zero serious players. We're building it.

**Speaker note:** Briefer упомянуть в Q&A, не на слайде. Они в правом верхнем тоже, но AGPL и не-local AI — мы лучше отстроены.

---

## Slide 9 — Business model

**Заголовок:** Open-core. Free fuel for distribution. Enterprise pays.

**Воронка с конкретными цифрами:**

```
Community (free, BSL)
   │
   │ ~ 50,000 deployments / year
   │
   ▼
Team Self-hosted ($49/user/mo, from 10 seats)
   │ ~ 200 paying teams
   │ ARPU ≈ $9k ARR → $1.8M
   │
   ▼
Enterprise ($30k–80k/year)
   ~ 50 paying enterprise customers
   ARPU ≈ $50k ARR → $2.5M

Total Year 2–3 target: $4–5M ARR
```

**Sub-bullet:** Vard Cloud (managed) запускаем на Year 2 — добавит ещё ~$1M ARR.

**Speaker note:** Цифры показывают, что бизнес работает без cloud. Cloud — upside, не базовый сценарий.

---

## Slide 10 — Go-to-market

**Заголовок:** Distribution = open source.

**3 главных канала:**

```
1. GitHub + Hacker News + Reddit
   The OSS data community lives there.
   Goal: 5k stars in 12 months.
   Cost: ~ $0 (content + community).

2. Documentation as marketing
   Best docs in the category. Comparison pages
   for "Hex alternative", "self-hosted notebook".
   Cost: 1 technical writer, 6 months.

3. Outbound to regulated enterprise
   Once we have 1k stars + 3 reference customers.
   LinkedIn, conferences (Coalesce, Data Council).
   Cost: 1 founding AE in month 9.
```

**Один customer acquisition метрик:**
> Each 100 GitHub stars ≈ 5 deployments ≈ 1 inbound demo request ≈ 0.2 paying customers.
> Conservative path: 5,000 stars → 10 customers in year 1.

**Speaker note:** Это путь Metabase / Posthog / Supabase. Не изобретаем GTM, копируем проверенный.

---

## Slide 11 — Roadmap (next 12 months)

**Заголовок:** From MVP to revenue in 4 quarters.

```
Q1 (now)              Q2                    Q3                    Q4
──────                ──                    ──                    ──
Foundation            First sales           Scale                 Capital

· BSL license          · SSO / SAML          · Vard Cloud beta     · Cloud GA
· DuckDB + Snowflake   · Audit log           · dbt integration     · SOC 2 Type II
· Public landing       · Helm chart          · 5+ enterprise       · Series Seed
· Documentation        · Show HN launch        customers            · Hire AE,
· Discord community    · 1k+ GitHub stars    · 2k+ stars             SRE, CSM
                       · First 3 paying       · $250k ARR           · $500k–1M ARR
                         customers
```

**Speaker note:** Reasonable, не overoptimistic. Если Q2 даст 1 paying customer — мы сильно опережаем график.

---

## Slide 12 — Team

**Заголовок:** Builders who shipped this.

```
[Photo]                     [Photo]                     [Photo]

Nikolai Borodulin            [Co-founder]                 [Co-founder]
Founder, CTO                 Role                         Role

Built Vard MVP.              Background.                  Background.
Background:                  Why this matters here.       Why this matters here.
[expertise].
```

**Сноска:** *Hiring: founding designer, founding AE, DevRel.*

**Speaker note:** Заполнить реальной информацией. Если команды пока 1 человек — честно сказать "founder + 2 contractors", не выдумывать.

---

## Slide 13 — Traction (по мере накопления)

**Заголовок:** What we've shipped and learned.

**Версия для текущего момента (pre-launch):**
```
✓ MVP working: SQL + Python + R, real-time collab, local AI
✓ Live demo running at vard.ru.tuna.am
✓ Open-source codebase: github.com/smarianna24/VARD
✓ 30+ user interviews completed (key insight: privacy is #1 pain)
○ Public launch: planned for [DATE]
○ First paying customer: planned for Q2
```

**Версия через 3 месяца после Show HN (реалистичные стартовые цели без paid-маркетинга):**
```
✓ ~500 GitHub stars
✓ ~1,500 Docker pulls
✓ ~80 active Discord members
✓ 5 enterprise inbound demo requests
✓ 1 paid pilot in progress
```

**Speaker note:** Заменять каждый месяц по факту. Traction — самый важный слайд после первых 90 дней. Числа выше — стартовая модель для seed-стадии без paid-acquisition; не использовать как факт до момента, пока цифра реально не достигнута.

---

## Slide 14 — Ask

**Заголовок:** What we need.

**Версия для первого raise (seed):**
```
Raising $1.5M seed.

Purpose:
  · 18 months of runway
  · 3 engineers (connectors, enterprise features, infra)
  · 1 founding AE (Q3)
  · 1 DevRel (Q2)
  · Marketing, conferences, infra costs

Looking for:
  · Lead investor with open-source / dev-tools thesis
  · Operators from Hex, dbt, Metabase, Posthog (advisors)
  · Customer intros to regulated enterprises

Contact: hello@vard.io
```

**Версия для команды (без инвестиций):**
```
What we need from you.

  · Your honest feedback after trying the product
  · Intros to data teams in regulated industries
  · Help spreading the word — star, share, deploy

Try it: vard.ru.tuna.am
Star it: github.com/smarianna24/VARD
Talk to us: hello@vard.io
```

**Speaker note:** Подобрать версию под аудиторию.

---

# Backup slides (только если спросят)

## B1 — Why BSL, not AGPL or MIT

```
MIT/Apache → competitors can host us as SaaS, take the market.
AGPL       → enterprise legal teams ban it. Half the customers gone.
BSL 1.1    → companies use freely; competitors can't host as service.
              Converts to Apache 2.0 in 4 years.

Precedent: Sentry, CockroachDB, MariaDB, MongoDB.
```

## B2 — Why won't Hex/Deepnote just build self-hosted?

```
1. Cannibalization: their entire revenue is cloud subscription.
2. Architectural debt: their stack assumes multi-tenant cloud.
3. Support cost: enterprise self-hosted is 10x harder than SaaS.
4. They've publicly committed to cloud-only positioning.

If they pivot, it takes 18+ months. We have a head start.
```

## B3 — Why Ollama, not OpenAI/Claude

```
Default: Ollama (local, no data leaves).
Optional: OpenAI-compatible API (for those who run their own GPT proxy).

Local LLM quality on SQL tasks (Qwen 3 8B):
· SQL generation: 87% match vs GPT-4 (per [internal benchmark])
· Schema understanding: 91% match
· Latency: 1.2s vs 2.4s (faster than cloud!)

Good enough for SQL. Privacy benefit overwhelming.
```

## B4 — Detailed unit economics

```
Team Self-hosted tier:
  ARPU            $9,000 ARR (15 seats × $50/mo)
  CAC             $1,500 (mostly inbound + minimal sales touch)
  Gross margin    92% (we don't host)
  CAC payback     2 months
  Net retention   115% (seat expansion)

Enterprise tier:
  ARPU            $50,000 ARR
  CAC             $15,000 (1 AE, 4 mo cycle)
  Gross margin    88%
  CAC payback     4 months
  Net retention   125%
```

## B5 — Risks and mitigations

```
Risk                           Mitigation
────                           ──────────
Briefer pulls ahead             Stronger differentiation: BSL, local LLM, R
Hex adds self-hosted            18+ mo lead time; we focus on OSS distribution
Local LLMs plateau              Plug-in BYO LLM (OpenAI compatible)
Yjs scaling issues              Migrate to Hocuspocus / proprietary CRDT
Russian team / international     EU/US entity, transparent structure
```

---

# Заметки по презентации

- **Длительность:** 10 минут на основные 14 слайдов, 5 минут Q&A с backup-слайдами.
- **Не читать слайды вслух.** На каждом слайде один заголовок + минимум текста. Говорить — расширение, не повторение.
- **Демо живьём** на слайде 5 или 6, если есть возможность. Это сильнее любого слайда.
- **Цифры в speaker notes** — знать наизусть. Если инвестор спросит "сколько Postgres-инсталляций в мире" или "какой средний ACV у Metabase" — ответить за 2 секунды.
- **Customer quotes** добавить, как только появятся 3+ интервью с цитатами.
