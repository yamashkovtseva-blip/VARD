# Demo deployment — production frontend

Files in this directory replace the **`vite` dev-server** that's currently
exposed at `vard.ru.tuna.am`. They wrap the Vard SPA in a hardened nginx
container suitable for a public demo.

## Why this matters

Right now the public demo serves `/@react-refresh`, `/@vite/client`,
unminified `/src/main.tsx` directly. That is:

- A **dev server**, not a production server (no rate limits, debug-friendly).
- Source-mapped — internal code is browsable.
- An automatic disqualifier in any enterprise security review.

Switching to the artifacts here gives you:

- A real `vite build` (minified, no source maps, no HMR socket).
- nginx with security headers (CSP, HSTS, `X-Frame-Options`, etc.).
- Proper SPA fallback (`/login`, `/notebook/:id`, ...) and Yjs websocket proxy.
- A non-root container with read-only FS and dropped Linux capabilities.

## Files

| File | What it does |
|---|---|
| `Dockerfile` | Multi-stage: `node:20-alpine` builds, `nginx:1.27-alpine` serves. Listens on **8080** as user `nginx`. |
| `nginx.conf` | Server block: SPA fallback, `/api/` and `/ws` proxy to `backend:8000`, security headers, asset caching. |
| `docker-compose.snippet.yml` | Drop-in `frontend` service definition with hardened defaults. |

## Usage

These files belong **in the product repo**
(`github.com/smarianna24/VARD`), not in this marketing repo. Either
copy them in, or reference this directory from there. From the product
repo root:

```bash
# 1. Copy the templates (one time)
cp -r ../vard-marketing/infra/demo-deploy infra/

# 2. Build & run with the snippet wired into your compose
docker compose -f docker-compose.yml -f infra/demo-deploy/docker-compose.snippet.yml up -d --build

# 3. Sanity-check
curl -I http://localhost:8080/        # → 200, security headers present
curl    http://localhost:8080/login   # → SPA shell (HTML, no /src/main.tsx)
```

If your backend service is not named `backend` or doesn't listen on
`8000`, edit the two `proxy_pass` lines in `nginx.conf`.

## TLS

The container speaks plain HTTP on 8080 by design. Terminate TLS in front
with Caddy / Traefik / a cloud LB. Bare-minimum Caddy:

```caddy
demo.vard.io {
    reverse_proxy frontend:8080
}
```

## What this is **not**

- **Not air-gapped.** For regulated customers behind a firewall you'll
  also need: image registry mirror, Ollama models pre-downloaded, CSP
  tightened to drop `unsafe-eval` (requires Monaco config tweak), and
  removal of any external font/CDN references in the build.
- **Not the production deployment guide for self-hosted Pro/Enterprise
  customers.** It's specifically what should be running at
  `vard.ru.tuna.am` (or, better, `demo.vard.io`).

## Domain note

Moving off `*.tuna.am` is recommended before the first enterprise demo —
that hostname reads as "tunneled from a laptop" in a security review.
Pointing a CNAME `demo.vard.io → <your host>` and dropping the tunnel
costs nothing once the image above is running.

## CSP follow-ups

The current CSP allows `'unsafe-eval'` because Monaco's worker loader
requires it. Two harder-but-cleaner paths:

1. Configure Monaco to load workers from same-origin URLs (drops
   `'unsafe-eval'` and `blob:`).
2. Add per-route nonces if/when you move to Astro SSR or a similar
   server-rendered shell.
