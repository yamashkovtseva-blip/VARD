export type Lang = 'en' | 'ru';

export const translations = {
  en: {
    meta: {
      title: 'Vard — Self-hosted data notebook with local AI',
      description:
        'Self-hosted alternative to Hex and Deepnote. Collaborative SQL, Python and R notebooks with a local LLM. Deploy in 60 seconds.',
    },
    announcement: {
      pre: 'Vard is now on Product Hunt —',
      cta: 'support us today →',
    },
    nav: {
      product: 'Product',
      docs: 'Docs',
      pricing: 'Pricing',
      signin: 'Sign in',
      cta: 'Get started',
    },
    hero: {
      pill: 'v0.1 — source-available · BSL 1.1',
      titleA: 'The self-hosted data notebook',
      titleB: 'that runs on your own infra.',
      subtitle:
        'Collaborative SQL, Python and R notebooks with a local AI assistant. Your data and your AI never leave your network.',
      ctaPrimary: 'Try the live demo',
      ctaCopyHint: '',
      starPrefix: 'or',
      starCta: '⭐ star us on GitHub',
      mockup: {
        file: 'monthly_active_users.notebook',
        connections: 'Connections',
        schema: 'Schema · public',
        prompt: 'monthly active users by country, last 90 days',
        sqlBadge: 'SQL · postgres-prod',
        runHint: '▶ run · 0.42s',
        rows: '12 rows · 3 cols',
        cols: { country: 'country', month: 'month', mau: 'mau' },
        tabs: { table: 'Table', chart: 'Chart', map: 'Map' },
        aiLabel: 'AI · ollama / llama3',
      },
    },
    trustBar: {
      eyebrow: 'Pre-launch · v0.1',
      message:
        'We just shipped Vard. Self-host the MVP, kick the tires, file the issues — help shape what gets built next.',
      github: 'Star us on GitHub',
    },
    pillars: {
      eyebrow: 'Why Vard',
      title: 'Three things every other notebook gets wrong.',
      items: [
        {
          title: 'Your data, your network.',
          body: 'Self-host with Docker or Kubernetes. No SaaS, no vendor lock-in. Architecture built for SOC 2 (certification in progress, target Q3 2026).',
        },
        {
          title: 'AI without sending data anywhere.',
          body: 'Bundled local LLM via Ollama — or bring your own. Zero data leaves your perimeter, ever.',
        },
        {
          title: 'Built for teams.',
          body:
            "Real-time multi-cursor editing. RBAC, sharing, comments. Yjs CRDTs under the hood — like Google Docs, but for data.",
        },
      ],
    },
    showcase: [
      {
        eyebrow: 'AI assistant',
        title: 'Write SQL with AI that knows your schema.',
        body:
          "Vard's local LLM understands your tables, columns, and types. It writes queries that actually run — no hallucinated column names, no data leaking to OpenAI.",
        promptLabel: 'AI prompt',
        promptText: 'monthly active users by country, last 90 days',
        sqlLabel: 'SQL · generated',
      },
      {
        eyebrow: 'Polyglot',
        title: 'Mix SQL, Python and R in one notebook.',
        body:
          'Query in SQL, transform in pandas, visualize in ggplot. All in the same notebook, all on your hardware.',
        outputLabel: 'Output · chart',
      },
      {
        eyebrow: 'Realtime',
        title: 'Collaborate like in Google Docs, but for data.',
        body:
          "See your teammates' cursors. Edit the same notebook simultaneously. Comment on cells. Share with a link — or keep it inside your VPC.",
        editingTag: 'Sarah editing',
        commentTag: 'Marcus commented',
        comment: 'Should we filter out internal traffic here?',
        commentMeta: '— Marcus, 2m ago',
      },
      {
        eyebrow: 'Connectors',
        title: 'Connect to your data, wherever it lives.',
        body:
          'PostgreSQL, DuckDB, Snowflake, BigQuery, Redshift, ClickHouse. Or import a CSV in one drag.',
      },
    ],
    privacy: {
      eyebrow: 'Privacy by architecture',
      titleA: 'Your data is yours.',
      titleB: 'Your AI is yours.',
      bodyA: 'Hex sends your queries to their servers. Deepnote runs your AI on OpenAI.',
      bodyB: 'Vard runs entirely inside your network — including the LLM.',
      kicker: 'No data leaves. Ever.',
      badges: [
        'Self-hosted via Docker or Kubernetes',
        'Local LLM via Ollama (or bring your own)',
        'Source-available under BSL 1.1',
      ],
    },
    comparison: {
      eyebrow: 'Honest comparison',
      title: 'How does Vard compare?',
      featureCol: 'Feature',
      footnote: 'Comparisons as of May 2026. We try to keep this honest —',
      footnoteLink: 'open an issue',
      footnoteAfter: 'if anything looks wrong.',
      rows: [
        'Self-hosted',
        'Local AI (no data leaves)',
        'Real-time collaboration',
        'Open-source',
        'SQL + Python + R',
        'Modern AI assistant',
        'SSO / SAML',
        'Free for internal use',
      ],
    },
    howItWorks: {
      eyebrow: 'Quickstart',
      title: 'Deploy in 60 seconds.',
      steps: [
        { title: 'Clone & deploy', body: 'One-line install with Docker Compose.' },
        { title: 'Open the editor', body: 'Vard runs locally on your machine or VM.' },
        { title: 'Start querying', body: 'Connect Postgres, drop a CSV, or query DuckDB. AI assistant works out of the box.' },
      ],
      arch: {
        eyebrow: 'Architecture · everything runs inside your network',
        browser: 'Browser',
        backend: 'FastAPI · Yjs',
        storage: 'Storage',
        llm: 'Local LLM',
      },
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Free forever for internal use. Pay when you need more.',
      callout:
        'You self-host the software. We charge for the license and Pro features — never for your data or your hardware.',
      tiers: [
        {
          name: 'Community',
          price: '$0',
          period: 'forever',
          pitch: 'Self-host. Up to 5 users. Unlimited notebooks. Local AI. Community support.',
          cta: 'Deploy free',
          features: ['Self-hosted', 'Up to 5 users', 'Unlimited notebooks', 'Local AI (Ollama)', 'Community support'],
        },
        {
          name: 'Self-hosted Pro',
          price: '$49',
          period: 'per user / month · from 10 seats',
          pitch: 'Self-host with Pro features.',
          cta: 'Start 14-day trial',
          features: ['Project RBAC', 'Audit log lite', 'Notebook versioning', 'Priority email', 'All Community features'],
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          period: 'get a quote',
          pitch: 'Everything in Pro, plus enterprise controls.',
          cta: 'Talk to sales',
          features: ['SSO / SAML / OIDC', 'Full audit log export', 'Custom connectors', 'Dedicated CSM', '99.9% SLA · SOC 2 review help'],
        },
      ],
      faqTitle: 'Frequently asked',
      faqs: [
        {
          q: 'Is Vard really free?',
          a: 'Yes. Source-available under Business Source License 1.1; converts to Apache 2.0 on 2030-01-01. Free for internal use, forever.',
        },
        {
          q: 'What am I paying for if I self-host it myself?',
          a: 'The commercial license and the closed-source Pro / Enterprise features — project RBAC, audit log, SSO, custom connectors, priority support. Same open-core model as Sentry, GitLab, CockroachDB. Your data, your AI, and your hardware stay yours; you never pay us for hosting.',
        },
        {
          q: 'How does Community differ from Self-hosted Pro?',
          a: 'Community is free under BSL for internal use, up to 5 users, with community support. Pro adds project-level RBAC, audit log, notebook versioning, priority email support, and removes the seat limit (sold from 10 seats up). Both run entirely on your infrastructure.',
        },
        {
          q: 'Can I use my own LLM (OpenAI, Claude, local)?',
          a: 'Yes. Ollama by default; OpenAI-compatible API supported.',
        },
        {
          q: 'What databases do you support?',
          a: 'Postgres today. DuckDB, Snowflake, BigQuery, Redshift, ClickHouse on the roadmap (open in GitHub Discussions).',
        },
        {
          q: 'Is my data sent anywhere?',
          a: 'No. Vard is fully self-hosted. Even AI runs locally.',
        },
        {
          q: 'Do you have SOC 2?',
          a: 'In progress. Target Q3 2026. We help Enterprise customers with their own audits.',
        },
        {
          q: 'How is Vard different from Briefer / Hex / Jupyter?',
          a: 'See the comparison table above. Short version: only Vard combines self-hosting, local AI, and real-time collab in one product.',
        },
      ],
    },
    finalCta: {
      titleA: 'Ready to give your data team a notebook',
      titleB: 'they can actually run on prem?',
      ctaPrimary: 'Deploy with Docker',
      ctaSecondary: 'Talk to us',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Talk to the team.',
      body: 'Pilots, security reviews, custom connectors, partnership questions — we read every email.',
      emailLabel: 'Email',
      email: 'hello@vard.io',
      emailHint: 'Best for pilots, security reviews, partnerships',
      githubLabel: 'GitHub',
      githubHref: 'github.com/nborodulin471/vard',
      githubHint: 'Issues, discussions, code',
      demoLabel: 'Live demo',
      demoHref: 'vard.ru.tuna.am',
      demoHint: 'Try it without installing anything',
      note: 'We typically reply within 1 business day. No marketing emails — ever.',
    },
    footer: {
      tagline: 'The data notebook with local AI. Source-available, self-hosted by design.',
      copyright: "© 2026 Vard · Built for data teams who can't go cloud.",
      madeWith: 'Made with ☕ and a healthy distrust of the cloud.',
      linksTitle: 'Links',
      legalTitle: 'Legal',
      links: {
        pricing: 'Pricing',
        github: 'GitHub',
        demo: 'Live demo',
        email: 'hello@vard.io',
      },
      legal: {
        license: 'License (BSL 1.1)',
      },
    },
  },
  ru: {
    meta: {
      title: 'Vard — Self-hosted ноутбук для данных с локальным AI',
      description:
        'Self-hosted альтернатива Hex и Deepnote. Совместная работа в SQL, Python и R с локальной LLM. Развёртывание за 60 секунд.',
    },
    announcement: {
      pre: 'Vard на Product Hunt —',
      cta: 'поддержите нас сегодня →',
    },
    nav: {
      product: 'Продукт',
      docs: 'Документация',
      pricing: 'Тарифы',
      signin: 'Войти',
      cta: 'Начать',
    },
    hero: {
      pill: 'v0.1 — source-available · BSL 1.1',
      titleA: 'Self-hosted ноутбук для данных,',
      titleB: 'который работает на вашей инфраструктуре.',
      subtitle:
        'Совместные SQL, Python и R ноутбуки с локальным AI-ассистентом. Ваши данные и ваш AI не покидают вашу сеть.',
      ctaPrimary: 'Открыть демо',
      ctaCopyHint: '',
      starPrefix: 'или',
      starCta: '⭐ поставьте звезду на GitHub',
      mockup: {
        file: 'monthly_active_users.notebook',
        connections: 'Подключения',
        schema: 'Схема · public',
        prompt: 'активные пользователи по странам, за последние 90 дней',
        sqlBadge: 'SQL · postgres-prod',
        runHint: '▶ запуск · 0.42с',
        rows: '12 строк · 3 столбца',
        cols: { country: 'страна', month: 'месяц', mau: 'mau' },
        tabs: { table: 'Таблица', chart: 'График', map: 'Карта' },
        aiLabel: 'AI · ollama / llama3',
      },
    },
    trustBar: {
      eyebrow: 'Pre-launch · v0.1',
      message:
        'Мы только запустили Vard. Разверните MVP, попробуйте на реальных задачах, заведите issue — помогите задать roadmap.',
      github: 'Поставить звезду на GitHub',
    },
    pillars: {
      eyebrow: 'Почему Vard',
      title: 'Три проблемы, которые есть во всех остальных ноутбуках.',
      items: [
        {
          title: 'Ваши данные — в вашей сети.',
          body: 'Self-hosted через Docker или Kubernetes. Никакого SaaS, никакого vendor lock-in. Архитектура построена под SOC 2 (сертификация в процессе, цель Q3 2026).',
        },
        {
          title: 'AI без отправки данных наружу.',
          body: 'Встроенная локальная LLM через Ollama — или подключите свою. Ваши данные не покидают периметр, никогда.',
        },
        {
          title: 'Сделан для команд.',
          body: 'Real-time редактирование с курсорами. RBAC, шеринг, комментарии. Yjs CRDT под капотом — как Google Docs, но для данных.',
        },
      ],
    },
    showcase: [
      {
        eyebrow: 'AI-ассистент',
        title: 'Пишите SQL с AI, который знает вашу схему.',
        body:
          'Локальная LLM Vard понимает ваши таблицы, столбцы и типы. Пишет рабочие запросы — никаких выдуманных колонок, никаких утечек в OpenAI.',
        promptLabel: 'AI-запрос',
        promptText: 'активные пользователи по странам, за последние 90 дней',
        sqlLabel: 'SQL · сгенерировано',
      },
      {
        eyebrow: 'Полиглот',
        title: 'SQL, Python и R в одном ноутбуке.',
        body:
          'Запрос в SQL, трансформация в pandas, визуализация в ggplot. Всё в одном ноутбуке, всё на вашем железе.',
        outputLabel: 'Результат · график',
      },
      {
        eyebrow: 'Реалтайм',
        title: 'Совместная работа как в Google Docs — но для данных.',
        body:
          'Видите курсоры коллег. Редактируете одну тетрадь одновременно. Комментируете ячейки. Делитесь по ссылке — или держите внутри VPC.',
        editingTag: 'Сара редактирует',
        commentTag: 'Маркус прокомментировал',
        comment: 'Может, отфильтруем внутренний трафик здесь?',
        commentMeta: '— Маркус, 2 мин назад',
      },
      {
        eyebrow: 'Коннекторы',
        title: 'Подключайтесь к данным, где бы они ни лежали.',
        body:
          'PostgreSQL, DuckDB, Snowflake, BigQuery, Redshift, ClickHouse. Или просто перетащите CSV.',
      },
    ],
    privacy: {
      eyebrow: 'Приватность в архитектуре',
      titleA: 'Ваши данные — ваши.',
      titleB: 'Ваш AI — ваш.',
      bodyA: 'Hex отправляет ваши запросы на свои серверы. Deepnote использует AI от OpenAI.',
      bodyB: 'Vard работает целиком внутри вашей сети — включая LLM.',
      kicker: 'Данные не уходят. Никогда.',
      badges: [
        'Self-hosted через Docker или Kubernetes',
        'Локальная LLM через Ollama (или своя)',
        'Source-available под BSL 1.1',
      ],
    },
    comparison: {
      eyebrow: 'Честное сравнение',
      title: 'Как Vard выглядит на фоне других?',
      featureCol: 'Функция',
      footnote: 'Сравнение актуально на май 2026. Стараемся быть честными —',
      footnoteLink: 'откройте issue',
      footnoteAfter: 'если что-то не так.',
      rows: [
        'Self-hosted',
        'Локальный AI (данные не уходят)',
        'Real-time коллаборация',
        'Open-source',
        'SQL + Python + R',
        'Современный AI-ассистент',
        'SSO / SAML',
        'Бесплатно для внутреннего использования',
      ],
    },
    howItWorks: {
      eyebrow: 'Быстрый старт',
      title: 'Развёртывание за 60 секунд.',
      steps: [
        { title: 'Клонируйте и запустите', body: 'Установка одной командой через Docker Compose.' },
        { title: 'Откройте редактор', body: 'Vard работает локально на вашей машине или VM.' },
        { title: 'Начните анализ', body: 'Подключите Postgres, перетащите CSV или используйте DuckDB. AI-ассистент работает из коробки.' },
      ],
      arch: {
        eyebrow: 'Архитектура · всё внутри вашей сети',
        browser: 'Браузер',
        backend: 'FastAPI · Yjs',
        storage: 'Хранилище',
        llm: 'Локальная LLM',
      },
    },
    pricing: {
      title: 'Тарифы',
      subtitle: 'Бесплатно навсегда для внутреннего использования. Платите, когда нужно больше.',
      callout:
        'Вы хостите сами. Мы берём деньги за лицензию и Pro-фичи — никогда за ваши данные и не за ваше железо.',
      tiers: [
        {
          name: 'Community',
          price: '$0',
          period: 'навсегда',
          pitch: 'Self-host. До 5 пользователей. Безлимит ноутбуков. Локальный AI. Поддержка сообществом.',
          cta: 'Развернуть бесплатно',
          features: ['Self-hosted', 'До 5 пользователей', 'Безлимит ноутбуков', 'Локальный AI (Ollama)', 'Поддержка сообществом'],
        },
        {
          name: 'Self-hosted Pro',
          price: '$49',
          period: 'за пользователя / мес · от 10 мест',
          pitch: 'Self-host с Pro-функциями.',
          cta: 'Триал 14 дней',
          features: ['Проектный RBAC', 'Audit log lite', 'Версионирование ноутбуков', 'Приоритетная email-поддержка', 'Всё из Community'],
        },
        {
          name: 'Enterprise',
          price: 'По запросу',
          period: 'запросить расчёт',
          pitch: 'Всё из Pro, плюс enterprise-контроль.',
          cta: 'Связаться с продажами',
          features: ['SSO / SAML / OIDC', 'Полный экспорт audit log', 'Кастомные коннекторы', 'Выделенный CSM', '99.9% SLA · помощь с SOC 2'],
        },
      ],
      faqTitle: 'Частые вопросы',
      faqs: [
        {
          q: 'Vard правда бесплатный?',
          a: 'Да. Source-available под Business Source License 1.1; 1 января 2030 лицензия автоматически переходит в Apache 2.0. Бесплатно для внутреннего использования, навсегда.',
        },
        {
          q: 'За что я плачу, если хостю всё сам?',
          a: 'За коммерческую лицензию и закрытые Pro / Enterprise-фичи — проектный RBAC, audit log, SSO, кастомные коннекторы, приоритетную поддержку. Та же open-core модель, что у Sentry, GitLab, CockroachDB. Ваши данные, ваш AI и ваше железо остаются у вас; за хостинг вы нам не платите никогда.',
        },
        {
          q: 'Чем Community отличается от Self-hosted Pro?',
          a: 'Community бесплатен по BSL для внутреннего использования, до 5 пользователей, поддержка через сообщество. Pro добавляет проектный RBAC, audit log, версионирование ноутбуков, приоритетную email-поддержку и снимает лимит на пользователей (продаётся от 10 мест). Оба варианта работают полностью на вашей инфраструктуре.',
        },
        {
          q: 'Можно использовать свою LLM (OpenAI, Claude, локальную)?',
          a: 'Да. Ollama по умолчанию; поддерживается любой OpenAI-совместимый API.',
        },
        {
          q: 'Какие БД поддерживаются?',
          a: 'Postgres сегодня. DuckDB, Snowflake, BigQuery, Redshift, ClickHouse — в roadmap (обсуждаем в GitHub Discussions).',
        },
        {
          q: 'Куда уходят мои данные?',
          a: 'Никуда. Vard полностью self-hosted. Даже AI работает локально.',
        },
        {
          q: 'Есть ли SOC 2?',
          a: 'В процессе. Цель — Q3 2026. Помогаем enterprise-клиентам с их собственными аудитами.',
        },
        {
          q: 'Чем Vard отличается от Briefer / Hex / Jupyter?',
          a: 'Смотрите таблицу сравнения выше. Коротко: только Vard объединяет self-hosting, локальный AI и real-time коллаборацию в одном продукте.',
        },
      ],
    },
    finalCta: {
      titleA: 'Готовы дать вашей data-команде ноутбук,',
      titleB: 'который реально можно запустить on-prem?',
      ctaPrimary: 'Развернуть через Docker',
      ctaSecondary: 'Связаться с нами',
    },
    contact: {
      eyebrow: 'Контакты',
      title: 'Напишите команде.',
      body: 'Пилоты, security-ревью, кастомные коннекторы, партнёрство — отвечаем на каждое письмо.',
      emailLabel: 'Email',
      email: 'hello@vard.io',
      emailHint: 'Для пилотов, security-ревью и партнёрств',
      githubLabel: 'GitHub',
      githubHref: 'github.com/nborodulin471/vard',
      githubHint: 'Issues, discussions, исходный код',
      demoLabel: 'Живая демо',
      demoHref: 'vard.ru.tuna.am',
      demoHint: 'Посмотрите без установки',
      note: 'Обычно отвечаем в течение рабочего дня. Никаких маркетинговых рассылок.',
    },
    footer: {
      tagline: 'Ноутбук для данных с локальным AI. Source-available, self-hosted by design.',
      copyright: '© 2026 Vard · Сделано для data-команд, которым нельзя в облако.',
      madeWith: 'Сделано на ☕ и здоровом недоверии к облаку.',
      linksTitle: 'Ссылки',
      legalTitle: 'Юридическое',
      links: {
        pricing: 'Тарифы',
        github: 'GitHub',
        demo: 'Живая демо',
        email: 'hello@vard.io',
      },
      legal: {
        license: 'Лицензия (BSL 1.1)',
      },
    },
  },
} as const;

export type Translations = typeof translations.en;

export function useTranslations(lang: Lang): Translations {
  return (translations[lang] ?? translations.en) as Translations;
}

export const altLang = (lang: Lang): Lang => (lang === 'ru' ? 'en' : 'ru');

const BASE = (import.meta.env?.BASE_URL ?? '/').replace(/\/$/, '');

export const langPath = (lang: Lang, path = ''): string => {
  const suffix = lang === 'en' ? (path || '/') : `/ru${path === '/' || !path ? '/' : path}`;
  return `${BASE}${suffix}`.replace(/\/+/g, '/');
};
