# Website Redesign Plan - Diabol AI
**From:** AI Voice Agent Focus → **To:** Strategic AI Consulting

**Date:** November 2025
**Approach:** Incremental, SEO-safe, measurable

---

## Current State Analysis

### Current Structure
```
Homepage (/)
├── Hero: "AI Voice Agents That Transform Business"
├── Benefits (voice agent specific)
├── Try It Now (voice demo)
├── Control & Trust
├── Explanation (how voice agents work)
├── Quick FAQ
└── Social Proof

Industry Pages
├── /real-estate (voice agents for real estate)
├── /healthcare (voice agents for healthcare)
└── /home-services (voice agents for home services)

Other Pages
├── /pricing (voice agent pricing)
├── /faq (voice agent FAQ)
└── /comparison/ai-receptionist-vs-answering-service
```

### Problem
- **Too narrow:** Positioned as voice agent vendor, not AI consulting partner
- **Limits growth:** Can't showcase broader AI capabilities
- **SEO risk:** Voice agents are just one use case, missing broader search intent
- **Positioning mismatch:** Your audit baseline (2.8/10) shows you're seen as niche, not strategic

### Opportunity
- **Broader appeal:** "AI Consulting" gets 10x search volume vs "AI Voice Agents"
- **Higher value:** Consulting/strategy commands premium pricing vs point solutions
- **AI SEO alignment:** Matches your Schema.org positioning (AI consulting, transformation, automation)
- **Differentiation:** Most competitors sell tools; you sell transformation

---

## New Information Architecture

### Proposed Structure
```
Homepage (/)
├── Hero: "AI That Transforms How You Work" (broader promise)
├── Value Props: Diagnose → Redesign → Automate framework
├── Services Overview: 3 pillars (Strategy, Implementation, Voice Agents)
├── Industry Showcase: Real results across sectors
├── How It Works: Your methodology
├── Social Proof: Reviews + case studies
└── CTA: Book Strategy Call (not just voice demo)

Services Hub (/services)
├── /services/ai-strategy-consulting
│   └── Discovery, process mapping, ROI roadmap
├── /services/ai-implementation
│   └── Custom automation, integration, training
└── /services/ai-voice-agents
    └── Existing voice agent content (preserves SEO)

Industry Solutions (expand from use case to full transformation)
├── /solutions/real-estate
│   ├── Voice agents + broader automation
│   └── Lead nurturing, transaction coordination, market analysis
├── /solutions/healthcare
│   ├── Voice agents + compliance automation
│   └── Patient intake, scheduling, HIPAA-compliant workflows
└── /solutions/professional-services
    ├── Voice agents + knowledge management
    └── Client onboarding, project automation, billing

Resources (new)
├── /resources (hub page)
├── /case-studies (proof of broader capabilities)
├── /blog (move from blog.diabolai.com subdomain eventually)
└── /guides (downloadable lead magnets)

Existing Pages (preserve for SEO)
├── /faq (update to broader AI focus, keep voice content)
├── /pricing (evolve to service tiers, not just voice)
└── /comparison/* (keep, add more comparison content)
```

---

## Phased Redesign Approach

### Phase 1: Foundation (Week 1-2) - LOW RISK
**Goal:** Shift messaging without breaking existing pages

**Changes:**
1. **Homepage Hero**
   - Current: "AI Voice Agents That Transform Business"
   - New: "Transform Your Business with Strategic AI"
   - Subtext: "From voice automation to full process transformation"
   - Why: Broader appeal, keeps voice as hook

2. **Add Services Section to Homepage**
   - 3-column layout: Strategy | Implementation | Voice Agents
   - Each with icon, description, CTA
   - Links to new service pages (create in Phase 2)
   - Why: Shows breadth immediately

3. **Update Navigation**
   - Current: [Home, FAQ, Pricing, Real Estate, Healthcare, etc.]
   - New: [Home, Services ▼, Solutions ▼, Resources ▼, Pricing]
   - Services dropdown: Strategy, Implementation, Voice Agents
   - Solutions dropdown: Real Estate, Healthcare, Professional Services
   - Why: Professional structure, room to grow

4. **Homepage Benefits Section**
   - Reframe from "Why Voice Agents" to "Why Strategic AI"
   - Keep 3-4 benefits, make them broader
   - Voice agents become one example, not the only one
   - Why: Expands value prop without losing voice content

**Risk:** Very low - mainly copy changes
**SEO Impact:** Positive - broader keywords
**Effort:** 4-8 hours
**Files to modify:**
- `src/components/Hero.tsx` (hero copy)
- `src/components/Navigation.tsx` (nav structure)
- `src/components/Benefits.tsx` (benefit messaging)
- `src/app/page.tsx` (add new Services section component)

---

### Phase 2: Service Pages (Week 3-4) - MEDIUM RISK
**Goal:** Create 3 service pages to support new positioning

**New Pages:**
1. **`/services/ai-strategy-consulting`**
   - Target: "AI consulting Sweden", "AI strategy for SMBs"
   - Content: Discovery process, ROI modeling, process mapping
   - CTA: Book Strategy Call
   - Schema: Service offering with provider info

2. **`/services/ai-implementation`**
   - Target: "AI implementation services", "business automation"
   - Content: Custom solutions, integration, change management
   - CTA: View Case Studies
   - Schema: Service offering

3. **`/services/ai-voice-agents`**
   - **IMPORTANT:** This is where ALL current homepage voice content moves
   - Target: "AI voice agents", "AI receptionist", "automated booking"
   - Content: Existing TryItNow, Explanation, voice-specific FAQ
   - CTA: Try Live Demo
   - Why: Preserves SEO for voice keywords, becomes sub-service

**Risk:** Medium - new pages, navigation changes
**SEO Impact:** Very positive - 3 new SEO targets, broader reach
**Effort:** 12-16 hours
**Files to create:**
- `src/app/services/ai-strategy-consulting/page.tsx`
- `src/app/services/ai-implementation/page.tsx`
- `src/app/services/ai-voice-agents/page.tsx`
- Reusable components for service pages

---

### Phase 3: Industry Evolution (Week 5-6) - LOW RISK
**Goal:** Expand industry pages from voice-only to full AI transformation

**Updates:**
1. **`/solutions/real-estate`** (rename from `/real-estate`)
   - Keep voice agent section (top of page for SEO)
   - Add: Transaction automation, lead scoring, market analysis
   - Add: "Beyond Voice Agents" section
   - 301 redirect: `/real-estate` → `/solutions/real-estate`

2. **`/solutions/healthcare`**
   - Keep voice agent section
   - Add: Patient data automation, compliance workflows, HIPAA tools
   - Add case study if available

3. **`/solutions/professional-services`** (NEW)
   - Law firms, consulting, accounting
   - Voice + knowledge management + billing automation
   - Target: "AI for professional services"

**Risk:** Low - preserving URLs with redirects
**SEO Impact:** Positive - broader content on same URLs
**Effort:** 10-12 hours
**Files to modify:**
- Move `/real-estate` to `/solutions/real-estate`
- Move `/healthcare` to `/solutions/healthcare`
- Move `/home-services` to `/solutions/home-services`
- Create `/solutions/professional-services`
- Add redirects in `next.config.js`

---

### Phase 4: Resources & Proof (Week 7-8) - LOW RISK
**Goal:** Add depth and authority content

**New Pages:**
1. **`/resources`** (hub page)
   - Links to case studies, guides, blog
   - Filterable by industry/topic
   - Lead magnet downloads

2. **`/case-studies`** or individual case study pages
   - Real client results (anonymized if needed)
   - Before/after, ROI metrics
   - Voice agents + broader automation wins

3. **`/guides`** or individual guide pages
   - "AI Readiness Assessment for SMBs"
   - "How to Choose AI Consulting Partners"
   - Gated PDF downloads (email capture)

**Risk:** Very low - all new pages
**SEO Impact:** Very positive - authority building
**Effort:** 16-20 hours (content creation is the bulk)
**Files to create:**
- `src/app/resources/page.tsx`
- `src/app/case-studies/page.tsx`
- `src/app/guides/page.tsx`
- Individual case study/guide pages

---

### Phase 5: Pricing Evolution (Week 9-10) - MEDIUM RISK
**Goal:** Evolve from voice agent pricing to service tiers

**New Pricing Structure:**
```
Strategy Tier
├── AI Readiness Assessment
├── Process Discovery Workshop
├── Custom AI Roadmap
└── CTA: Book Discovery Call

Implementation Tier
├── Strategy + Implementation
├── Custom automation build
├── Integration & training
└── CTA: Request Proposal

Voice Agent Tier (keep current pricing)
├── Voice agent setup
├── Per-minute pricing
├── Industry templates
└── CTA: Try Live Demo
```

**Risk:** Medium - pricing changes affect conversion
**SEO Impact:** Neutral - same URL, better targeting
**Effort:** 6-8 hours
**Files to modify:**
- `src/app/pricing/page.tsx` (restructure tiers)
- Update pricing Schema.org markup

---

## Content Migration Strategy

### Voice Agent Content - WHERE DOES IT GO?

**Current homepage sections → New locations:**

| Current Section | New Primary Home | Keep on Homepage? |
|----------------|------------------|-------------------|
| Hero (voice focused) | `/services/ai-voice-agents` | No - broader hero |
| Benefits (voice) | `/services/ai-voice-agents` | No - broader benefits |
| TryItNow demo | `/services/ai-voice-agents` | Yes - showcase example |
| ControlAndTrust | All service pages | Yes - applies to all |
| Explanation (how voice works) | `/services/ai-voice-agents` | No - too detailed for homepage |
| QuickFAQ (voice focused) | `/services/ai-voice-agents` | Partially - keep 3-4, link to full FAQ |
| SocialProof | All pages | Yes - universal |
| ClientLogos | All pages | Yes - universal |

**SEO Safety:**
- Keep voice keywords in page titles, H1s, Schema.org
- Add canonical tags to prevent duplicate content issues
- Update internal links to point to new service page
- Submit updated sitemap to IndexNow

---

## Component Refactoring Plan

### New Components Needed

1. **`ServicesOverview.tsx`** (Phase 1)
   - 3-column grid: Strategy | Implementation | Voice
   - Reusable for homepage and `/services` hub

2. **`ServicePageLayout.tsx`** (Phase 2)
   - Template for all service pages
   - Hero, Features, Process, Pricing, CTA, FAQ
   - Reduces duplication

3. **`IndustrySolutionLayout.tsx`** (Phase 3)
   - Template for industry pages
   - Challenge, Solutions, Results, CTA
   - Voice section + broader automation sections

4. **`ResourceCard.tsx`** (Phase 4)
   - Case studies, guides, blog posts
   - Thumbnail, title, excerpt, CTA

5. **`PricingTier.tsx`** (Phase 5)
   - Reusable pricing card
   - Features list, CTA, badge ("Most Popular")

### Components to Modify

- **`Navigation.tsx`**: Add dropdowns for Services, Solutions, Resources
- **`Hero.tsx`**: Make copy configurable, add broader messaging
- **`Benefits.tsx`**: Parameterize benefits for different contexts
- **`Footer.tsx`**: Update links to new structure

---

## SEO Preservation Checklist

**Before making changes:**
- [ ] Export current sitemap URLs
- [ ] Document all current H1s and title tags
- [ ] Note current keyword targets per page
- [ ] Check Google Search Console for top-performing pages

**During changes:**
- [ ] Maintain voice agent keywords on `/services/ai-voice-agents`
- [ ] Use 301 redirects for any URL changes
- [ ] Update Schema.org on modified pages
- [ ] Keep meta descriptions under 160 characters
- [ ] Preserve alt text on images

**After changes:**
- [ ] Submit updated sitemap via IndexNow
- [ ] Verify 301 redirects working
- [ ] Check Schema.org with validator
- [ ] Monitor Search Console for errors
- [ ] Track rankings for target keywords

---

## Success Metrics

### Phase 1 (Messaging)
- [ ] Broader keyword rankings appear (track "AI consulting Sweden")
- [ ] Bounce rate stable or improved
- [ ] Time on site increases (broader content = more exploration)

### Phase 2 (Service Pages)
- [ ] Each service page ranks for target keywords within 30 days
- [ ] Strategy call bookings increase (broader appeal)
- [ ] Voice demo usage stable (preserved on dedicated page)

### Phase 3 (Industry Pages)
- [ ] Industry pages rank for broader terms (not just "voice agents for X")
- [ ] Lead quality improves (attracting strategic buyers)
- [ ] More inquiries for full transformation vs point solutions

### Phase 4 (Resources)
- [ ] Case studies get traffic and social shares
- [ ] Guide downloads generate qualified leads
- [ ] Average session duration increases

### Phase 5 (Pricing)
- [ ] Higher-tier inquiries increase
- [ ] Average deal size grows
- [ ] Voice agent tier still converts (preserved content)

---

## Timeline Summary

| Phase | Duration | Risk | Effort | SEO Impact | Business Impact |
|-------|----------|------|--------|-----------|-----------------|
| 1: Foundation | Week 1-2 | Low | 4-8h | Positive | Medium |
| 2: Service Pages | Week 3-4 | Medium | 12-16h | Very Positive | High |
| 3: Industry Evolution | Week 5-6 | Low | 10-12h | Positive | Medium |
| 4: Resources | Week 7-8 | Low | 16-20h | Very Positive | High |
| 5: Pricing Evolution | Week 9-10 | Medium | 6-8h | Neutral | High |

**Total timeline:** 10 weeks (2.5 months)
**Total effort:** 48-64 hours
**Can be accelerated:** Yes - phases can overlap or be shortened

---

## Quick Wins (Do First)

If you want to start immediately with minimal risk:

1. **Homepage Hero Update** (30 minutes)
   - Change H1 to broader positioning
   - Keep voice agents as supporting text
   - Immediate positioning shift

2. **Add "Our Services" Section to Homepage** (2 hours)
   - Create simple 3-column grid below hero
   - Strategy | Implementation | Voice Agents
   - Links can go to pricing/contact for now
   - Shows breadth immediately

3. **Update Meta Title/Description** (15 minutes)
   - Homepage title: "Diabol AI - Strategic AI Consulting for SMBs"
   - Desc: "Transform your business with AI strategy, implementation, and voice automation. Serving Nordics, North America, and Europe."
   - Immediate SEO impact

**These 3 changes take ~3 hours and shift positioning without risk.**

---

## Next Steps

**Decision Point:** Which approach do you prefer?

**Option A: Quick Wins Only** (3 hours, this week)
- Homepage messaging shift
- Add services overview
- Update meta tags
- **Pro:** Immediate impact, very low risk
- **Con:** Still largely voice-focused pages

**Option B: Phase 1 + Phase 2** (16-24 hours, 4 weeks)
- Quick wins + full service page buildout
- Proper foundation for growth
- **Pro:** Complete positioning shift, strong SEO foundation
- **Con:** Requires more upfront work

**Option C: Full Redesign** (48-64 hours, 10 weeks)
- All 5 phases, complete transformation
- **Pro:** Best long-term outcome
- **Con:** Longest timeline

**My Recommendation:**
Start with **Option A** (Quick Wins) this week to test messaging, then commit to **Option B** (Phases 1-2) based on results. This gives you:
- Immediate positioning shift
- Data to validate approach
- Foundation to build on
- Flexibility to pause or accelerate

What do you think? Which option aligns with your timeline and goals?

---

**Last Updated:** 2025-11-18
**Next Review:** After Phase 1 completion
