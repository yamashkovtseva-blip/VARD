# Vard — Marketing Site & Presentations

Open-source data notebook with local AI assistant. Self-hosted alternative to Hex and Deepnote for regulated industries.

- Product repo: https://github.com/nborodulin471/vard
- Live demo: https://vard.ru.tuna.am/login (creds: `demo@vard.local` / `DemoPass123!`)

This repository contains the **marketing assets**:

| Path | What |
|---|---|
| `landing/` | Astro 4 + Tailwind landing page (EN + RU) |
| `presentations/investor.md` | Slidev investor pitch — 14 slides + 5 backup |
| `presentations/sales.md` | Slidev customer sales deck — 14 slides |
| `presentations/{investor,sales}-ru.md` | Russian variants of the same decks |
| `landing.md` | Landing page copy spec |
| `presentation.md` | Pitch deck content spec |

## Quickstart

### Landing
```bash
cd landing
npm install
npm run dev          # → http://127.0.0.1:4321
npm run build        # → static HTML in dist/
```

Two routes:
- `/` — English (default)
- `/ru/` — Russian

### Presentations
```bash
cd presentations
npm install
npm run investor             # EN investor deck on :3030
npm run sales                # EN sales deck on :3031
./node_modules/.bin/slidev investor-ru.md --port 3032   # RU
./node_modules/.bin/slidev sales-ru.md --port 3033      # RU
```

Build all to static HTML:
```bash
./node_modules/.bin/slidev build investor.md    --base /investor/    --out dist/investor
./node_modules/.bin/slidev build investor-ru.md --base /investor-ru/ --out dist/investor-ru
./node_modules/.bin/slidev build sales.md       --base /sales/       --out dist/sales
./node_modules/.bin/slidev build sales-ru.md    --base /sales-ru/    --out dist/sales-ru
```

Export to PDF:
```bash
npm run investor:export      # → dist/vard-investor-deck.pdf
npm run sales:export         # → dist/vard-sales-deck.pdf
```

## Stack

- **Landing**: Astro 4 + Tailwind 3, statically rendered, dark theme by default
- **Presentations**: Slidev (Vue + Markdown), exports to HTML and PDF
- **Palette**: deep ink background (#0A0B14) with teal / navy / violet accents from the Vard logo
- **Typography**: Inter (sans), JetBrains Mono (code)

## Deploy options

| Option | Setup |
|---|---|
| **Vercel** | Import this repo → autodetects Astro for `landing/`, set output dir, deploy |
| **Cloudflare Pages** | Connect repo → build command `cd landing && npm install && npm run build`, output `landing/dist` |
| **GitHub Pages** | GitHub Actions workflow that runs `npm run build` and deploys `dist/` |

## License

Marketing assets — all rights reserved.
Product (separate repo) is BSL 1.1, transitions to Apache 2.0 in 2030.
