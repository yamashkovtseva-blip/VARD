# Setup своей копии Vard CRM

Это инструкция Марианне как поднять свою независимую копию Vard-лендинга с CRM. После выполнения у тебя будет:

- Свой Supabase-проект (отдельная база лидов)
- Свой admin на `https://smarianna24.github.io/VARD/admin/`
- Свои email-уведомления через Resend
- Полная независимость от репо Татьяны

Время: ~30 минут.

---

## 0. Что должно быть установлено

- **Git** (`git --version` → ≥ 2.x)
- **Node.js 20+** (`node -v` → v20.x или выше) — поставить с [nodejs.org](https://nodejs.org/) или через `nvm install 20`
- Любой текстовый редактор (VS Code, Cursor, etc.)

---

## 1. Клонировать репо локально

```bash
cd ~/Documents
git clone https://github.com/smarianna24/VARD.git
cd VARD/landing
npm install
cd ..
```

После `npm install` появится папка `node_modules/` (она в gitignore — норм).

---

## 2. Создать свой Supabase-проект

1. Регистрация на [supabase.com](https://supabase.com) (можно через GitHub)
2. **New project**:
   - Name: `vard-crm-marianna`
   - Database password: придумай и сохрани (понадобится редко)
   - Region: **Frankfurt** (EU)
   - Plan: **Free**
3. Подожди 2 минуты пока проект инициализируется

### 2.1. Создать таблицу `leads`

- В Dashboard → **SQL Editor** → New query
- Открой файл `db/schema.sql` в репо, скопируй весь его контент → paste в редактор Supabase
- Нажми **Run** → должно вывести «Success. No rows returned»

### 2.2. Настроить Auth

- Dashboard → **Authentication** → **Providers** → **Email** должен быть включён (зелёный тоггл)
- Dashboard → **Authentication** → **URL Configuration**:
  - **Site URL**: `https://smarianna24.github.io/VARD/admin/`
  - **Redirect URLs** — добавить (по одной):
    - `https://smarianna24.github.io/VARD/admin/`
    - `https://smarianna24.github.io/VARD/admin`
    - `http://localhost:4322/VARD/admin/` (для локальной разработки)
  - Save changes

### 2.3. Создать себя как пользователя

- Authentication → **Users** → **Add user** → **Create new user**:
  - Email: твой email
  - Auto-confirm user: ✓ (поставь галку)
  - Create user
- Authentication → **Sign In / Providers** → найти **Allow new users to sign up** → **выключить** (только pre-created users могут логиниться)

### 2.4. Забрать ключи

- Dashboard → **Project Settings** ⚙ → **API**
- Скопируй:
  - **Project URL** — вид `https://xxxxxxxxxx.supabase.co`
  - **anon / public key** (или Publishable key) — длинная JWT-строка, начинается с `eyJhbGc...`

---

## 3. Создать `.env` локально

В папке `landing/` создай файл `.env` (не коммитится — в gitignore):

```
PUBLIC_SUPABASE_URL=https://YOUR-PROJECT-ID.supabase.co
PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...твой_anon_ключ...
```

Подставь свои значения из шага 2.4.

---

## 4. Email-уведомления (Resend + Edge Function)

Опционально, но рекомендую — без этого лид залетит в `/admin/`, но письма ты не получишь.

### 4.1. Resend

- Регистрация на [resend.com](https://resend.com)
- **API Keys** → **Create API Key**:
  - Name: `vard-crm`
  - Permission: **Sending access**
- Скопируй ключ `re_xxxxxxx` (показывается **один раз**!)

### 4.2. Edge Function в Supabase

- Supabase Dashboard → **Edge Functions** (иконка ⚡)
- **Deploy a new function** → name: `notify-new-lead`
- **Verify JWT with legacy secret** → **выключить**
- Открой файл `supabase/functions/notify-new-lead/index.ts` в репо → скопируй весь контент → paste в редактор
- **Deploy function**

### 4.3. Секреты для функции

В Edge Functions → клик на `notify-new-lead` → **Secrets**:

- `RESEND_API_KEY` = `re_xxxxxxx` (из 4.1)
- `ADMIN_EMAIL` = твой email
- `FROM_EMAIL` = `Vard CRM <onboarding@resend.dev>` (опционально)

### 4.4. Database Webhook

- Supabase Dashboard → **Database** → **Webhooks** → **Create a new webhook**
- Settings:
  - **Name**: `new-lead-email`
  - **Table**: `leads` (schema `public`)
  - **Events**: ☑ Insert (только Insert)
  - **Type**: **Supabase Edge Functions**
  - **Edge Function**: `notify-new-lead`
- **Create webhook**

---

## 5. Билд и деплой

В корне репо:

```bash
cd landing
rm -rf dist
npx astro build
cp -r dist/* ../docs/
cd ..
git add -A
git commit -m "deploy: build with my supabase config"
git push origin main
```

---

## 6. Включить GitHub Pages

- На [github.com/smarianna24/VARD/settings/pages](https://github.com/smarianna24/VARD/settings/pages):
  - **Source**: Deploy from a branch
  - **Branch**: `main` / Folder: `/docs`
  - Save
- Подожди 1–2 минуты — GH Pages выкатит сайт

---

## 7. Проверка

1. Открой `https://smarianna24.github.io/VARD/` (с хард-рефрешем `Cmd+Shift+R`)
2. Pricing → **Start 14-day trial** → откроется модалка → заполни email → Submit
3. Открой `https://smarianna24.github.io/VARD/admin/`
4. Введи свой email → **Send magic link** → проверь почту → click ссылку → должна открыться таблица с тестовым лидом
5. Email-уведомление должно прилететь через 10–30 сек

---

## Если что-то не работает

| Симптом | Что проверить |
|---|---|
| Submit формы → ошибка в консоли | DevTools → Console → читай Supabase error. Скорее всего `.env` не подхватился — пересобрать |
| Magic link редиректит на localhost:3000 | URL Configuration → Site URL не обновлён |
| Magic link приходит, но клик ведёт в никуда | Redirect URLs не добавлены в Supabase |
| Magic link не приходит | Auth → Email Templates включены; спам проверь |
| Admin показывает «Supabase is not configured» | Build не подхватил env — пересобрать с правильным `.env` |
| Письмо о новом лиде не приходит | Edge Functions → `notify-new-lead` → Logs — смотри что Resend вернул |

---

## Поддержка кода

После setup, репо живёт независимо. Если хочешь подтягивать обновления от Татьяны (yamashkovtseva-blip/VARD):

```bash
git remote add upstream https://github.com/yamashkovtseva-blip/VARD.git
git fetch upstream
git merge upstream/main
# разрешить конфликты в /docs/ (билд-артефакты) — обычно проще пересобрать с нуля
cd landing && rm -rf dist && npx astro build && cp -r dist/* ../docs/
git add -A && git commit && git push
```

---

Готово. Если застряла — пиши Татьяне или открой issue в репо.
