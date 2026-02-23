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

## Architecture

```
src/
  app/                    # Next.js App Router pages
    page.tsx              # Homepage
    layout.tsx            # Root layout
    services/page.tsx     # Services overview
    ai-voice/page.tsx     # Voice agents deep-dive
    pricing/page.tsx      # Pricing (noindex until content added)
    faq/page.tsx          # FAQ with structured data
    real-estate/page.tsx  # Industry: real estate
    healthcare/page.tsx   # Industry: healthcare (noindex)
    home-services/page.tsx # Industry: home services (noindex)
    comparison/           # Comparison pages (noindex)
    (legal)/              # Legal pages group
    sitemap.ts            # Dynamic sitemap
  components/             # 35+ components
    Navigation.tsx        # Main nav with mobile hamburger
    Hero.tsx              # Homepage hero
    CalendlyLoader.tsx    # Calendly popup script loader
    EmbeddedFAQ.tsx       # Reusable FAQ component
    QuickFAQ.tsx          # Homepage FAQ variant
    ExternalResources.tsx # Font preloading, external scripts
    LazyVideo.tsx         # Lazy-loaded video component
    analytics/            # GA4 tracking components
    consent/              # Cookie consent management
    motion/               # Framer Motion lazy wrappers
    ui/                   # Radix-based primitives (button, card, badge)
  data/                   # FAQ data per industry vertical
  contexts/               # LanguageContext (i18n)
  utils/                  # Analytics, Calendly helpers
  lib/                    # Translations, IndexNow, utilities
seo/                      # SEO strategy docs (CURRENT_STRATEGY.md)
```

## Key Config Files

- `tailwind.config.js` — Brand colors under `brand.*` (Portland Orange `#FF4F30`, Oxford Blue `#0A2843`, Westar `#DCDBD3`). Always use `brand-*` classes, never default Tailwind palette.
- `vercel.json` — Deployment config with security headers. Font pattern MUST be `"/:path*.(woff|woff2|eot|ttf|otf)"`.
- `components.json` — shadcn/ui config

## Current Work: Website Redesign

**Branch:** `redesign` (NOT deployed — live site is `main`)

Restructuring from voice-agent-focused to broader AI solutions positioning.

| Remaining | Status |
|-----------|--------|
| About page | Pending — founder story |
| Design review | Pending — review inspiration sites |
| Merge to main | After review |

Key redesign files: `src/app/page.tsx`, `src/app/services/page.tsx`, `src/app/ai-voice/page.tsx`

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

## Frontend Design Workflow

### Before Writing UI Code
- Invoke the `frontend-design` skill each session
- Load `web-design-guidelines` and `vercel-react-best-practices` for reviews

### Reference Image Matching
- If reference provided: match layout, spacing, typography, and color exactly
- If no reference: use `frontend-design` skill guidelines + brand colors from `tailwind.config.js`

### Screenshot Comparison
- Use Playwright MCP for screenshots — never `file:///` URLs
- After building a section: screenshot → compare → fix → re-screenshot (minimum 2 rounds)

### Hard Rules
- No `transition-all` — only animate `transform` and `opacity`
- Every clickable element needs `hover`, `focus-visible`, and `active` states
- Use brand colors from `tailwind.config.js` — never default Tailwind palette
- Consistent spacing tokens — not random Tailwind steps

## Contact
- **Email:** hello@diabolai.com
- **Calendly:** https://calendly.com/peter-diabol/30min
