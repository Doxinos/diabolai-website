# DiabolAI Website - Project Status & Tasks

## Project Overview
DiabolAI website - AI implementation consultancy. Next.js 14 with TypeScript and Tailwind CSS.

**Services:**
- **AI Voice Agents** - 24/7 call handling, lead qualification, appointment booking
- **AI Automation** - Workflow automation, CRM integration, process optimization
- **AI Content** - AI avatars, video production, founder-led content at scale

**Positioning:** "Think before you build" - Strategy-first AI implementation, not just tools.

---

## 🚧 CURRENT PROJECT: Website Redesign (January 2025)

### Status: In Progress on `redesign` branch

Restructuring from voice-agent-focused homepage to broader AI solutions positioning.

### Progress

| Task | Status | Notes |
|------|--------|-------|
| Brand colors updated | ✅ Done | Portland Orange (#FF4F30) replaces Cerise |
| Navigation updated | ✅ Done | Added Services, About links (desktop + mobile) |
| New Homepage | ✅ Done | Strategic positioning, services intro |
| Services page | ✅ Done | Voice, Automation, Content sections |
| AI Voice page | ✅ Done | Original homepage content moved here |
| About page | ⏳ Pending | Founder story |
| Design review | ⏳ Pending | Review inspiration sites before finalizing |

### NOT Deployed Yet
All changes are local on `redesign` branch. Live site (main branch) unchanged.

### New Site Structure
```
/ (homepage) - Strategic positioning, all services
/services - Detailed service pages (Voice, Automation, Content)
/ai-voice - Deep dive on voice agents (old homepage content)
/about - Founder story (pending)
/real-estate, /faq, /pricing - Keep existing
```

### Brand Colors (Updated Jan 2025)

| Color | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Black | #000000 | `bg-black` | Primary background |
| White | #FFFFFF | `text-white` | Primary text |
| Portland Orange | #FF4F30 | `bg-brand-orange` | CTAs (use sparingly) |
| Oxford Blue | #0A2843 | `bg-brand-oxford-blue` | Dark sections |
| Westar | #DCDBD3 | `bg-brand-westar` | Soft backgrounds |

### Key Files for Redesign
- `src/app/page.tsx` - New homepage
- `src/app/services/page.tsx` - Services page
- `src/app/ai-voice/page.tsx` - AI Voice deep-dive
- `tailwind.config.js` - Brand colors

### Related Resources
- Brand design: `/Users/pete/.claude/skills/diabol-brand-design.md`
- Brand voice: `/Users/pete/.claude/skills/diabol-brand-voice.md`
- GEO strategy: `/Users/pete/Workspace/personal-projects/diabolai/strategy/geo-action-plan.md`

### Next Steps
1. Review design inspiration sites together
2. Finalize design direction
3. Complete About page
4. Review all pages
5. Merge to main and deploy

---

## Completed Tasks ✅
- **Customer Testimonials & FAQ Updates** (2025-10-01)
  - Fixed FAQ page contact section to properly use Calendly integration
  - Updated Matilda Ringstrom testimonial with detailed review
  - Enhanced customer testimonials section
  - Fixed navigation menu and updated sitemap structure

- **Google Analytics 4 Implementation** (2025-01-21)
  - GA4 tracking integrated with consent management system (G-W971B3WD3H)
  - Comprehensive event tracking: schedule_click, generate_lead, cta_click, faq_expand
  - Enhanced FAQ components with improved analytics
  - Conversion tracking utility functions created
  - Consent-aware analytics (only tracks when users consent to analytics)
  - Conversion setup guide created for GA4 configuration

- **Domain Migration Preparation** (2025-01-21)
  - Production build tested and verified
  - All URLs already correctly point to diabolai.com
  - robots.txt configured for production domain
  - Comprehensive migration documentation created
  - Redirect configuration prepared for diabol.se → diabolai.com
  - Vercel configuration file with security headers added

- **FAQ Page Implementation** (2025-01-19)
  - Created comprehensive FAQ page with 25+ questions
  - Added structured data (FAQ schema) for LLM optimization
  - Organized into 6 categories: Getting Started, Implementation, Capabilities, Costs, Security, Industry-specific
  - Added FAQ link to main navigation
  - Deployed to production

- **Sitemap Implementation** (2025-01-19)
  - Created XML sitemap at /sitemap.xml
  - Added all current pages with priorities and update frequencies
  - Helps SEO analysis understand site structure and content hierarchy
  - Added robots.txt with sitemap reference
  - Documented SEO sitemap strategy in seo/config/sitemaps.txt
  - Implemented SEO team recommendations for single sitemap approach

- **Calendly Integration** (2025-09-23)
  - Implemented working Calendly popup integration
  - Fixed scroll lock issues with CSS overrides
  - Navigation and page CTA buttons now properly open Calendly
  - Script loading handled via CalendlyLoader component
  - Maintains existing button designs with functional booking

- **SEO Protection Implementation** (2025-09-23)
  - ✅ **Step 1**: Added noindex meta tags to all placeholder pages
  - ✅ **Step 2**: Created user-friendly placeholder content for empty pages
  - ✅ **Initial SEO Audit Complete**: Site ready for strategic content rollout
  - Protected site quality score during development phase
  - Prevents Google indexing of thin content pages

- **Performance Optimizations** (2025-10-03 → 2025-10-04)
  - ✅ **Legacy JavaScript removal**: Eliminated 12KB of unnecessary polyfills
  - ✅ **Code splitting**: Dynamic imports reduced unused JavaScript by ~20KB
  - ✅ **Video optimization**: Lazy loading reduced network payload by 1.8MB
  - ✅ **Modern browser targeting**: .browserslistrc for ES2020+ support
  - ✅ **Critical CSS**: Inlined above-the-fold styles, deferred non-critical CSS
  - ✅ **LazyMotion**: Optimized Framer Motion bundle size
  - ✅ **Font preloading**: Added preload hints for critical fonts
  - **Final Score**: 93/96/100/100 (Performance/Accessibility/Best Practices/SEO)
  - Fixed all major PageSpeed Insights issues

## SEO Protection Process ✅ COMPLETE
Our initial SEO audit and setup are now complete. The site is protected and ready for strategic content rollout.

### **Implemented Pages with NoIndex Protection:**
- `/pricing` - Transparent pricing coming soon
- `/comparison/ai-receptionist-vs-answering-service` - Detailed comparison
- `/home-services` - AI for contractors & home service businesses
- `/healthcare` - HIPAA-compliant AI for medical practices

### **Next Steps - Content Rollout Priority:**
1. **Pricing Page** (Copy available in seo/reports/copy/)
2. **Comparison Page** (Copy available in seo/reports/copy/)
3. **First Industry Page (Real Estate)** (Already complete - remove noindex)

### **Critical Process:**
⚠️ **IMPORTANT**: As each page is filled with content, **REMOVE** the `robots: 'noindex, nofollow'` meta tag from that page to allow Google indexing.

### **"Seed" Citations:**
Start updating professional profiles (LinkedIn, etc.) to link to www.diabolai.com for early domain authority building.

## Performance Optimization Lessons ⚠️ CRITICAL
**Current Score**: 93/96/100/100 (Performance/Accessibility/Best Practices/SEO)

### ✅ Safe Optimizations That Work:
- **Font preloading**: Preload critical font files via ExternalResources.tsx
- **LazyMotion**: Use domAnimation instead of full Framer Motion bundle
- **Video lazy loading**: Reduces initial network payload significantly
- **Modern browser targeting**: ES2020+ via .browserslistrc
- **Standard code splitting**: Dynamic imports for non-critical components

### ❌ Optimizations That CAUSE REGRESSIONS (DO NOT USE):
- **Aggressive critical CSS expansion**: Caused scores to drop from 95 to 75
- **Service worker implementation**: Added overhead without meaningful benefit  
- **Legacy polyfill removal**: Caused build errors and compatibility issues
- **Inline script tags in components**: Causes TypeScript and build errors
- **Excessive preconnect/dns-prefetch**: Minimal impact, potential overhead

### 🟡 Known Acceptable Issues:
- **Render-blocking CSS** (~300ms): Core styling cannot be deferred safely
- **Legacy JavaScript** (~12KB): Required polyfills for compatibility
- **Cache efficiency** (~6KB): Acceptable trade-off for current setup

### 🔧 Deployment Notes:
- **vercel.json font pattern**: Must use `"/:path*.(woff|woff2|eot|ttf|otf)"` format
- **Build process**: Any optimization that breaks the build is automatically rejected
- **Testing methodology**: Always measure before/after scores with PageSpeed Insights

## Current Issues/Improvements Needed 🔧
- **FAQ Page Design** - Needs visual improvements and better styling

## SEO Analysis Reports Received ✅
- **Healthcare/Clinics** - AI receptionist, appointment booking, HIPAA compliance
- **Home Services** - Emergency triage, after-hours coverage, CRM integration
- **Real Estate** - Lead qualification, showing scheduling, multi-channel support
- **Redirect Plan** - CSV mapping for diabol.se → diabolai.com migration
- **FAQ Strategy** - Simplified 8-question FAQ with clear answers
- **Internal Linking Plan** - Strategic connections between all pages
- **Tracking Plan** - GA4, GSC, and conversion tracking setup

### Key SEO Insights from Reports:
- **Industry-Specific Landing Pages** needed for targeted keywords
- **Vertical-Specific Use Cases** drive higher conversion than generic messaging
- **Integration Stories** (CRM, EHR, calendars) are crucial selling points
- **Compliance Messaging** varies by industry (HIPAA vs general business)
- **Domain Migration** - Need 301 redirects from diabol.se legacy content
- **Internal Linking** - Strategic 2-4 contextual links per 1000 words
- **Analytics Setup** - Focus on lead generation and pricing page conversion

## EmbeddedFAQ Implementation Notes
- **Pricing Page**: Place EmbeddedFAQ directly under ROI calculator using pricingFaqData
- **Industry Pages**: Place after "How It Works," before final CTA using respective industry FAQ data
- **Components Available**: EmbeddedFAQ.tsx, QuickFAQ.tsx (homepage), and industry-specific data files

## SEO Implementation Notes
- **Staging Environment**: Must block from indexing (HTTP auth or X-Robots-Tag: noindex)
- **Future Sitemap Structure**: Switch to sectioned sitemaps when blog launches (>100-200 URLs)
- **Robots.txt**: Added with sitemap reference for production only

## Planned Tasks 📋
### High Priority - Content Rollout (SEO Protected)
1. **Build Out Priority Pages with Full Content** (Copy available in seo/reports/copy/)
   - ✅ `/pricing` - Created with noindex protection (REMOVE noindex when content added)
   - ✅ `/comparison/ai-receptionist-vs-answering-service` - Created with noindex protection
   - ✅ `/healthcare` - Created with noindex protection
   - ✅ `/home-services` - Created with noindex protection
   - `/real-estate` - **Already complete** (REMOVE noindex to allow indexing)

2. **Blog Integration with Sanity.io**
   - Integrate Sanity CMS into current DiabolAI site
   - Create `/blog` routes for lead-focused content
   - Use SanityPress template as foundation
   - Focus on AI voice agent thought leadership content

3. **Additional Informational Pages**
   - `/how-it-works` - Deep dive into voice agent technology
   - `/use-cases` - Industry-specific applications expanded
   - `/pricing` - Transparent pricing information
   - `/integrations` - CRM, EHR, calendar connections

4. **SEO Architecture Implementation**
   - Industry-specific keyword targeting
   - Internal linking between verticals and main pages
   - Compliance-focused content for each industry
   - Integration stories and case studies

5. **Domain Migration & Redirects**
   - Implement 301 redirects from diabol.se to diabolai.com
   - Update redirect-map.csv with actual legacy URLs
   - Configure redirects in Vercel or DNS level
   - Monitor traffic transfer and SEO value preservation

6. **Analytics & Tracking Implementation**
   - Set up GA4 property with web data stream
   - Configure conversion tracking (lead generation, pricing clicks)
   - Set up Google Search Console with sitemap submission
   - Implement UTM parameter strategy for campaigns

7. **Internal Linking Strategy**
   - Add contextual links throughout existing pages
   - Link industry pages to pricing and contact
   - Create comparison page: /comparison/ai-receptionist-vs-answering-service
   - Ensure no orphan pages in site architecture

### Medium Priority
4. **Content Strategy**
   - Separate programmatic SEO site (my-ai-tools-blog) for broader AI tools content
   - DiabolAI blog for qualified lead generation
   - FAQ expansion based on SEO analysis

### Future Considerations
- Mobile navigation improvements
- Performance optimization
- A/B testing for conversion optimization

## Technical Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel
- **Future CMS**: Sanity.io for blog content

---

## brain/ Knowledge OS Sync

Project docs for this website live in `~/brain/projects/website/README.md`.

**When to update brain/:**
- Architectural decisions → update `~/brain/projects/website/README.md`
- Infrastructure changes (new MCP, new integration) → flag for orchestrator update
- Completed milestones → add to build log in project README
- New operational patterns → add to relevant `~/brain/ops/` file

**brain/ is the knowledge layer. This repo is the code layer.**

## Orchestrator Reference

**For cross-project decisions, workflow optimization, or tool selection:**
→ Read `~/.claude/CLAUDE.md` (Global Orchestrator)

The orchestrator knows:
- All available MCPs and when to use them
- When to use CLI vs MCP vs Cowork
- How this site connects to other projects (blog, brand assets)
- Skill loading patterns for content/design tasks

**Ask the orchestrator when:**
- Unsure which tool is best for a task
- Need to coordinate with blog or other projects
- Want to optimize deployment workflow

---

## Deployment Configuration ⚠️ CRITICAL
- **Production Branch**: `main` (standard deployment)
- **Vercel Config**: Configured to deploy from `main` branch
- **Important**: Always push changes to `main` for deployment
- **Development**: Use feature branches, then merge to `main`
- **Status**: Optimized and stable (2025-01-03)
- **Webhook**: Created manual webhook between GitHub and Vercel for main branch
- **Critical Fix**: vercel.json font pattern must be `"/:path*.(woff|woff2|eot|ttf|otf)"` for deployments to work

## SEO Strategy Notes
- **Two-site approach**:
  - DiabolAI.com/blog = qualified lead content
  - Separate programmatic site = broader SEO reach
- **LLM Optimization**: FAQ structured data, natural language content
- **Topical Authority**: Comprehensive voice agent coverage

## Commands to Remember
- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run lint` - Run linting

## Contact Information
- **Email**: hello@diabolai.com
- **Calendly**: https://calendly.com/peter-diabol/30min

---

## Frontend Design Workflow

### Before Writing Any Frontend Code
- **Invoke the `frontend-design` skill** before writing UI code each session — it sets the aesthetic direction and prevents generic output.
- Also load `web-design-guidelines` and `vercel-react-best-practices` when doing reviews or performance work.

### Reference Image Matching
- If a reference image or design is provided: **match layout, spacing, typography, and color exactly**. Do not improve or add to the design.
- If no reference: design from scratch using the `frontend-design` skill's creative guidelines + brand colors from `tailwind.config.js`.

### Screenshot Comparison Workflow
- Use **Playwright MCP** (`mcp__playwright__*`) for all screenshots — never screenshot from `file:///` URLs.
- Dev server: `npm run dev` (serves at `http://localhost:3000`)
- After building a section: take a screenshot, compare against reference, fix mismatches, re-screenshot. **Do at least 2 comparison rounds.**
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

### Hard Rules
- Do not use `transition-all` — only animate `transform` and `opacity`
- Every clickable element needs `hover`, `focus-visible`, and `active` states
- Do not add sections, features, or content not in the reference
- Use brand colors from `tailwind.config.js` — never default Tailwind palette
- Use intentional, consistent spacing tokens — not random Tailwind steps

---

## Instructions for Claude
- Always read this file at start of new sessions
- Update completed tasks with dates
- Add new issues/requirements as they come up
- Reference this file for project context
- Ask user about priority if unclear on task order
- **CRITICAL**: Always deploy to `main` branch for production
- Use standard Git workflow: feature branches → main

