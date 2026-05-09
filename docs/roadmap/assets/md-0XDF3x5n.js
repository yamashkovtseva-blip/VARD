import{L as e,T as t,Y as n,_ as r,b as i,g as a,gt as o,mt as s,x as c}from"./modules/shiki-BiiZU2CK.js";import{n as l,t as u}from"./slidev/context-CMhqCnrz.js";import{t as d}from"./slidev/default-BjsITUiY.js";import{t as f}from"./slidev/CodeBlockWrapper-CCtYc1hp.js";var p={class:`card mt-8 !p-5`},m={__name:`roadmap.md__slidev_13`,setup(m){let{$slidev:h,$nav:g,$clicksContext:_,$clicks:v,$page:y,$renderContext:b,$frontmatter:x}=l();return _.setup(),(l,m)=>{let h=f;return e(),r(d,o(t(s(u)(s(x),12))),{default:n(()=>[m[1]||=a(`h1`,null,`Vard Cloud · архитектурный набросок`,-1),a(`div`,p,[c(h,{title:``,ranges:[]},{default:n(()=>[...m[0]||=[a(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light slidev-code`,style:{"--shiki-dark":`#dbd7caee`,"--shiki-light":`#393a34`,"--shiki-dark-bg":`#121212`,"--shiki-light-bg":`#ffffff`}},[a(`code`,{class:`language-text`},[a(`span`,{class:`line`},[a(`span`,null,`                    User browser`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`                         │`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`                  app.vard.cloud`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`                         ▼`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`                  ┌──────────────┐`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`                  │  Cloudflare  │ DDoS, edge cache, geo-routing`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`                  └──────┬───────┘`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`                         ▼`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`              ┌──────────────────┐`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`              │  Control plane   │ tenant management, billing, SSO`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`              │  (multi-region)  │`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`              └──────┬───────┬───┘`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`                     │       │`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`             ┌───────▼─┐   ┌─▼──────────┐`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`             │  US     │   │  EU        │  data plane regions`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`             │  region │   │  region    │  isolated per tenant`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`             │  K8s    │   │  K8s       │  Postgres + Ollama + apps`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`             └─────────┘   └────────────┘`)])])],-1)]]),_:1})]),m[2]||=a(`div`,{class:`grid grid-cols-3 gap-3 mt-4`},[a(`div`,{class:`card !p-4`},[a(`div`,{class:`eyebrow !text-teal-light`},`Tenant isolation`),a(`p`,{class:`text-xs dim`},`Namespace per tenant · network policies · separate Postgres schema`)]),a(`div`,{class:`card !p-4`},[a(`div`,{class:`eyebrow !text-violet-light`},`Billing`),a(`p`,{class:`text-xs dim`},`Stripe · usage metering · seat counter · monthly + annual`)]),a(`div`,{class:`card !p-4`},[a(`div`,{class:`eyebrow !text-teal-light`},`Compliance`),a(`p`,{class:`text-xs dim`},`SOC 2 Type II · data residency · audit + DPA shipped`)])],-1)]),_:1},16)}}};export{m as default};