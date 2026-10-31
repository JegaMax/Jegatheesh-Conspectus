# Jegatheesh C — Portfolio

Editorial, single-page developer portfolio built with **Next.js (static export), React, TypeScript and Framer Motion**, styled with CSS Modules and a small set of CSS-variable design tokens.

Signature feature: a vintage bedside lamp with a **pull-chain theme switch** (light/dark). Pull, click, tap or press Enter/Space on the chain. Sound is off by default and can be enabled under the hero lamp.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # static site in ./out
```

## Structure

```
src/
├── app/            layout (metadata, JSON-LD, theme init script), page, globals.css (tokens + base)
├── components/
│   ├── lamp/       PullChainLamp (SVG lamp + chain physics)
│   ├── ui/         Reveal, RevealText, SectionMarker, MotionRoot
│   └── Nav, Hero, About, Skills, Projects, Experience, Contact, Footer (+ *.module.css)
├── data/portfolio.ts   all content (edit here)
└── lib/            site (URL/base path), theme (no-flash script), click (optional sound)
public/assets/img/opt/  WebP/AVIF derivatives used by the site
```

## Content you may want to complete (`src/data/portfolio.ts`)

- `personalInfo.resume`: points to `public/resume/Jegatheesh-C-Resume.pdf`; replace that file to update the download.
- Per project: `github`, `demo`, and, when you want them shown, `contribution`/`challenges` fields are not rendered until added to the data and component.

## Deployment

The site is a static export (`output: 'export'`). Environment variables at build time:

| Variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://jegamax.github.io/Jegatheesh-Conspectus` | canonical, Open Graph, JSON-LD |
| `NEXT_PUBLIC_BASE_PATH` | *(empty)* | set to `/Jegatheesh-Conspectus` for GitHub Pages project sites |

GitHub Pages example: `NEXT_PUBLIC_BASE_PATH=/Jegatheesh-Conspectus npm run build`, then publish `./out`.
If you move to a custom domain, set `NEXT_PUBLIC_SITE_URL` and update `public/sitemap.xml` and `public/robots.txt`.

See `DEPLOYMENT.md` for other hosts.
