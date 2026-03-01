# DiabolAI Website

AI implementation consultancy. Strategy-first AI implementation for Voice Agents, Automation, and Content.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server at localhost:3000 |
| `npm run build` | Production build |
| `npm run start` | Serve production build locally |
| `npm run lint` | ESLint check |

No test suite configured yet.

## Key Config Files

- `tailwind.config.js` — Brand colors under `brand.*` (Portland Orange `#FF4F30`, Oxford Blue `#0A2843`, Westar `#DCDBD3`). Always use `brand-*` classes, never default Tailwind palette.
- `vercel.json` — Deployment config with security headers. Font pattern MUST be `"/:path*.(woff|woff2|eot|ttf|otf)"`.
- `components.json` — shadcn/ui config

## Current Work: Website Redesign

**Branch:** `redesign` (NOT deployed. Live site is `main`)

Redesign is mostly done. Blocked on final images. Key files: `src/app/page.tsx`, `src/app/services/page.tsx`, `src/app/ai-voice/page.tsx`.

## Deployment

- **Production branch:** `main` — Vercel auto-deploys via GitHub webhook
- **Development:** Feature branches → merge to `main`
- Always deploy to `main` for production. Never push directly to `main` without review.

## Gotchas

### Performance (Current score: 93/96/100/100)
- **DO:** Font preloading via ExternalResources.tsx, LazyMotion (`domAnimation`), video lazy loading, code splitting, ES2020+ targeting
- **DO NOT:** Aggressive critical CSS (drops score from 95→75), service workers, inline script tags in components, excessive preconnect/dns-prefetch
- Render-blocking CSS (~300ms) is a known acceptable trade-off

### SEO Protection
- Pages with placeholder content have `robots: 'noindex, nofollow'` — **REMOVE** the tag when real content is added
- Protected pages: `/pricing`, `/comparison/*`, `/healthcare`, `/home-services`
- SEO strategy docs: `seo/CURRENT_STRATEGY.md`

### Calendly
- Popup integration via `CalendlyLoader` component
- CSS overrides needed to prevent scroll lock

## Contact
- **Email:** hello@diabolai.com
- **Calendly:** https://calendly.com/peter-diabol/30min
