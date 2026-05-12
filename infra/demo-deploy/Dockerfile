# Production-grade frontend image for the Vard demo.
# Replaces the `vite` dev-server currently exposed at vard.ru.tuna.am.
#
# Build context: the product repo (github.com/smarianna24/VARD).
# Build:  docker build -f infra/demo-deploy/Dockerfile -t vard-frontend:prod .

# ──────────────────────────────────────────────────────────────────
# Stage 1 — compile the SPA with Vite
# ──────────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund

COPY . .

# Override at build time if your compose places API/WS elsewhere
ARG VITE_API_BASE=/api
ARG VITE_WS_BASE=/ws
ENV VITE_API_BASE=$VITE_API_BASE
ENV VITE_WS_BASE=$VITE_WS_BASE

RUN npm run build

# ──────────────────────────────────────────────────────────────────
# Stage 2 — serve via nginx (non-root, port 8080)
# ──────────────────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS runtime

RUN rm /etc/nginx/conf.d/default.conf
COPY infra/demo-deploy/nginx.conf /etc/nginx/conf.d/vard.conf

COPY --from=builder /app/dist /usr/share/nginx/html

# Run as non-root; needs writable temp dirs and a non-privileged port
RUN chown -R nginx:nginx /usr/share/nginx/html /var/cache/nginx /var/log/nginx \
 && touch /var/run/nginx.pid \
 && chown nginx:nginx /var/run/nginx.pid

USER nginx
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:8080/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
