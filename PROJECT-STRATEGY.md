# Diabol AI Website - Project Strategy & TODO

**Last Updated:** November 18, 2025
**Project:** diabolai.com Website Transformation
**Timeline:** 3 months (Nov 2025 - Feb 2026)
**Status:** Phase 1 Complete ✅

---

## Strategic Context

### Business Goal
Transform diabolai.com from "AI Voice Agent vendor" to "Strategic AI Consulting partner" positioning, expanding service offerings while maintaining voice agents as a powerful hook/entry point.

### Target Audience
**Primary:** Overwhelmed Scale-Up Owners
- Revenue: $1M-$10M
- Team Size: 10-50 employees
- Pain: Drowning in daily operations
- Need: Scale without operational overwhelm

**Secondary:** SMB Leaders seeking AI transformation guidance

### Value Proposition
"From automation to advantage - I help SMB leaders diagnose opportunities, redesign processes, and implement AI strategically to create lasting competitive advantage."

### Core Positioning
- **Strategic AI Consulting** (not just voice agents)
- **Diagnose → Redesign → Automate** framework
- **ROI-focused transformation** with measurable results
- **Entrepreneur helping entrepreneur** tone (peer-to-peer, not vendor-to-customer)

---

## Current Status

### What's Live (diabolai.com)
- ✅ Homepage repositioned to AI consulting partner
- ✅ Meta tags updated for broader SEO (consulting, strategy, transformation keywords)
- ✅ 25 FAQ questions (5 new AI consulting questions)
- ✅ AI SEO foundation (6 of 10 points):
  - GA4 AI-referrer tracking
  - Enhanced robots.txt for AI crawlers
  - IndexNow API endpoint (needs key)
  - Optimized sitemap
  - Answer-first content format
- ✅ Schema.org validated (no errors)
- ✅ Honest messaging (removed fake social proof)
- ✅ Bilingual support (EN/SV)

### What's in Airtable
- ✅ Diabol AI audit (Nov 16, 2025)
- ✅ 19 trust nodes tracked
- ✅ Overall Score: 2.8/10
- ✅ Trust Node Coverage: 28%
- ✅ AI Citation Rate: 0%
- ✅ Next Audit: January 15, 2026

### Baseline Metrics (Nov 16, 2025)
- **AI Visibility Score:** 2.8/10
- **Trust Node Coverage:** 28% (5 found/partial out of 19)
- **AI Citation Rate:** 0% (not cited by Perplexity, ChatGPT, or Gemini)
- **Top Priorities:**
  1. Get listed on AI consulting aggregators (Clutch, G2, LeewayHertz)
  2. Build review presence (target 25+ reviews)
  3. Create SMB-specific content (guides, case studies)

---

## Active Projects & Priorities

### 🔴 IMMEDIATE (This Week - Nov 18-24)
**Setup Requirements Before Phase 2:**

1. **IndexNow API Setup** (30 min)
   - Get key from Bing Webmaster Tools
   - Add to `.env.local` as `INDEXNOW_KEY`
   - Add to Vercel env vars
   - Create public key file
   - Test with homepage URL

2. **Calendly Discovery Call** (20 min)
   - Create 30-minute event type
   - Add qualification questions:
     - Company name
     - Team size
     - Primary challenge
     - AI interest area
   - Copy URL for env vars

3. **Audit Application Form** (40 min)
   - Create on Tally.so or Typeform
   - Required fields:
     - Company name & industry
     - Current revenue/team size
     - Operational challenges (open text)
     - AI transformation goals (open text)
     - Budget range (dropdown: <$3K, $3K-$5K, $5K-$10K, $10K+)
     - Timeline (dropdown: ASAP, 1-3 months, 3-6 months, exploring)
   - Configure email notifications
   - Optional: Webhook to Airtable
   - Copy form URL

4. **Environment Variables** (10 min)
   - Add to `.env.local`:
     - `INDEXNOW_KEY`
     - `NEXT_PUBLIC_CALENDLY_DISCOVERY_URL`
     - `NEXT_PUBLIC_AUDIT_APPLICATION_URL`
   - Add same to Vercel production env vars
   - Redeploy

5. **BookingButtons Component** (30 min)
   - Create `src/components/BookingButtons.tsx` (code in IMMEDIATE-SETUP-TASKS.md)
   - Update `Hero.tsx` to use component
   - Test both CTAs
   - Deploy

6. **LinkedIn Integration** (15 min)
   - Add audit application form to LinkedIn profile
   - Location: Featured section or Contact Info
   - Link text: "Apply for AI Audit"

### 🟡 PHASE 2 (Next 4-6 Weeks - Dec 2-Jan 10)
**Service Page Architecture:**

1. **Services Hub** (`/services`)
   - Overview of all services
   - Navigation dropdown integration
   - Clear CTAs to individual service pages

2. **AI Strategy Consulting** (`/services/ai-strategy-consulting`)
   - For C-suite/leadership
   - Strategic planning focus
   - Deliverable: AI Roadmap

3. **AI Implementation** (`/services/ai-implementation`)
   - Hands-on execution
   - Process automation
   - Deliverable: Live AI systems

4. **AI Voice Agents** (`/services/ai-voice-agents`)
   - Migrate existing homepage content
   - Preserve SEO with 301 redirects
   - Keep as LinkedIn hook

5. **AI Diagnosis** (`/services/ai-diagnosis`)
   - 90-min remote audit
   - Application-based (not direct booking)
   - Deliverable: Opportunity report

6. **Enablement** (`/services/enablement`)
   - Team training
   - Change management
   - Deliverable: Internal capability

**Also:**
- Navigation dropdown for Services
- Services Overview section on homepage
- Individual service Schema.org markup
- Internal linking strategy

### 🟢 PHASE 3 (Weeks 7-9 - Jan 13-31)
**Authority & Trust Building:**

1. **Case Studies** (2-3 examples)
   - Real client names (with permission) or anonymized
   - Problem → Solution → Results format
   - Measurable ROI metrics

2. **Process Pages**
   - "How We Work" page
   - Diagnose → Redesign → Automate explained
   - Typical engagement timeline

3. **About Page Enhancement**
   - Founder story (scaling to 30 consultants)
   - Why AI consulting (personal burnout → solution)
   - Credentials & expertise

### 🔵 PHASE 4 (Weeks 10-12 - Feb 3-21)
**SEO & Conversion Optimization:**

1. **FAQ Expansion** (55-60 questions total)
   - Industry-specific questions
   - Use case questions
   - Pricing/ROI questions
   - Process questions

2. **Blog Integration**
   - "Latest Insights" widget on homepage
   - 3-5 pillar posts
   - Internal linking to services

3. **Conversion Rate Optimization**
   - A/B test CTAs
   - Optimize form fields
   - Heat mapping analysis

---

## Active TODO List

### Week of Nov 18, 2025
- [ ] **IndexNow API setup** - Get key from Bing, add to env vars, test (30 min) - DUE: Nov 20
- [ ] **Create Calendly discovery call** - 30-min event with qualification questions (20 min) - DUE: Nov 20
- [ ] **Create audit application form** - Tally.so/Typeform with all fields (40 min) - DUE: Nov 21
- [ ] **Add environment variables** - Local + Vercel (10 min) - DUE: Nov 21
- [ ] **Create BookingButtons component** - Dual CTA implementation (30 min) - DUE: Nov 22
- [ ] **Update Hero.tsx** - Use BookingButtons component (15 min) - DUE: Nov 22
- [ ] **Add audit form to LinkedIn** - Featured or Contact Info section (15 min) - DUE: Nov 22
- [ ] **Deploy and test** - Verify all CTAs work correctly (20 min) - DUE: Nov 22

### Next Week (Nov 25-29)
- [ ] **Services hub wireframe** - Layout and content structure (2 hours) - DUE: Nov 26
- [ ] **AI Strategy Consulting page** - Write copy, create components (4 hours) - DUE: Nov 27
- [ ] **AI Implementation page** - Write copy, create components (4 hours) - DUE: Nov 28
- [ ] **Start navigation dropdown** - Design and implement Services menu (3 hours) - DUE: Nov 29

### Month 1 Targets (By Dec 18, 2025)
- [ ] 3 service pages live (Strategy, Implementation, Voice Agents)
- [ ] Updated navigation with Services dropdown
- [ ] "Book Discovery Call" CTA prominent sitewide
- [ ] 10+ new AI consulting keyword rankings
- [ ] First AI referral traffic detected in GA4
- [ ] 3+ aggregator listings submitted (Clutch, G2, LeewayHertz)
- [ ] 5+ client reviews collected

### Month 2 Targets (By Jan 18, 2026)
- [ ] Complete service architecture (all 6 pages live)
- [ ] 2+ case studies published
- [ ] 25+ keyword rankings for AI consulting terms
- [ ] 3-5 discovery call bookings
- [ ] Featured snippets appearing in Google
- [ ] 10+ aggregator listings complete
- [ ] 15+ reviews across platforms
- [ ] Monthly AI visibility audit (target: 4.5/10)

### Month 3 Targets (By Feb 18, 2026)
- [ ] AI visibility score: 6.0/10+ (from 2.8/10 baseline)
- [ ] 40+ questions in FAQ
- [ ] Organic traffic +50% vs baseline
- [ ] 5+ featured snippets
- [ ] Trust node coverage: 50%+ (from 28%)
- [ ] First implementation deal closed
- [ ] Blog integration complete
- [ ] "Latest Insights" widget on homepage

---

## Success Metrics & Targets

### SEO Metrics (Track Weekly)
- Voice agent keyword rankings (monitor for drops during transition)
- New keyword impressions for consulting terms
- AI referral events in GA4 (custom event: `ai_referral`)
- Featured snippets count
- Organic traffic growth

**Targets:**
- Month 1: 10+ new rankings
- Month 2: 25+ new rankings
- Month 3: 40+ new rankings

### Traffic Metrics (GA4)
- Organic growth (target +50% in 90 days)
- AI referral traffic (separate tracking)
- Bounce rate (<60% target)
- Session duration (>2 min target)

**Baseline:** TBD (need to check GA4)

### Conversion Metrics
- Discovery call bookings (target: 3-5/month by Month 2)
- Audit applications (target: 2-3/month by Month 2)
- Voice demo tries (maintain current levels)

### AI Visibility (Monthly Audits)
- **Baseline:** 2.8/10 (Nov 16, 2025)
- **30-day target:** 4.5/10 (Dec 16, 2025)
- **60-day target:** 6.0/10 (Jan 15, 2026)
- **90-day target:** 7.0/10 (Feb 15, 2026)

**Tool:** Run monthly audits with ai-citation-agent

**Trust Node Coverage:**
- **Baseline:** 28% (5/19 found/partial)
- **30-day:** 40% (link building execution)
- **60-day:** 50% (reviews + aggregators)
- **90-day:** 60%+ (seed sites + partnerships)

---

## Key Documents & Resources

### Master Planning
- [WEBSITE-IMPLEMENTATION-PLAN.md](WEBSITE-IMPLEMENTATION-PLAN.md) - Complete 3-month plan (975 lines)
- [REDESIGN-PLAN.md](REDESIGN-PLAN.md) - 5-phase redesign approach
- [SESSION-HANDOFF-NOV-18.md](SESSION-HANDOFF-NOV-18.md) - Latest session context

### Technical Setup
- [IMMEDIATE-SETUP-TASKS.md](IMMEDIATE-SETUP-TASKS.md) - IndexNow, Calendly, forms, components
- [AI-SEO-IMPLEMENTATION.md](AI-SEO-IMPLEMENTATION.md) - 10-point SEO checklist (6/10 done)

### Content Strategy
- [FAQ-EXPANSION-PLAN.md](FAQ-EXPANSION-PLAN.md) - Path to 55-60 questions
- [README-PHASE-1-COMPLETE.md](README-PHASE-1-COMPLETE.md) - What's completed so far

### SEO Strategy (Separate Repo)
- [../seo/link-building-strategy.md](../seo/link-building-strategy.md) - Systematic link building to grow trust nodes
- [../seo/keyword-research/](../seo/keyword-research/) - Keyword analysis

### Session Records
- [SESSION-SUMMARY-NOV-18-2025.md](SESSION-SUMMARY-NOV-18-2025.md) - Detailed work log
- [UPDATES-NOV-18-EVENING.md](UPDATES-NOV-18-EVENING.md) - Airtable + booking fixes

---

## Important Decisions Log

### 1. Booking Process Structure (Nov 18, 2025)
**Decision:** Two-path approach
- **Free:** 30-min discovery call (Calendly) for qualification
- **Paid:** Application form → Review → Approval → 90-min audit ($3K-$5K)

**Rationale:** Protects time, filters for serious prospects, demonstrates demand/expertise

### 2. Voice Agent Content Placement (Nov 18, 2025)
**Decision:** Keep on homepage for now, move to `/services/ai-voice-agents` in Phase 2

**Rationale:** Strong LinkedIn hook, drives engagement, preserves SEO during transition with 301 redirects

### 3. Brand Name Usage (Nov 18, 2025)
**Decision:** Use "Diabol AI" not just "Diabol"

**Rationale:** Clarity for new visitors, SEO benefit, avoids confusion with Diabol AB (DevOps firm)

### 4. Phased Redesign Approach (Nov 18, 2025)
**Decision:** 5 phases over 3 months instead of full redesign

**Rationale:** Preserves SEO, reduces risk, allows learning/iteration, maintains functionality

### 5. AI Audit - Manual Import (Nov 18, 2025)
**Decision:** Keep manual Airtable import process (not fully automated)

**Rationale:** Control over what's imported, can review before adding, takes only 30 seconds, working perfectly

### 6. Services Architecture (Nov 18, 2025)
**Decision:** 6 service pages with hub structure

**Services:**
1. AI Strategy Consulting (C-suite/leadership)
2. AI Implementation (hands-on execution)
3. AI Voice Agents (migrated from homepage)
4. AI Diagnosis (90-min audit, application-based)
5. Enablement (training + change management)
6. Services Hub (navigation + overview)

**Rationale:** Clear service differentiation, SEO benefit, matches consulting market expectations

---

## Open Questions & Decisions Needed

### Phase 2 Timeline
**Question:** Aggressive (4 weeks) or conservative (6 weeks)?

**Impact:** Resource allocation, quality vs speed tradeoff

**Decision by:** Nov 22, 2025

### Content Approach
**Question:** Write in-house or hire copywriter for service pages?

**Impact:** Cost ($1K-$2K for copywriter), timeline, voice consistency

**Decision by:** Nov 25, 2025

### Design Approach
**Question:** Use existing component patterns or create custom designs for service pages?

**Impact:** Development time, visual consistency, user experience

**Decision by:** Nov 25, 2025

### Case Studies
**Question:** Real client names (with permission) or anonymized examples?

**Impact:** Credibility, client relationships, privacy concerns

**Decision by:** Dec 1, 2025

### Blog Integration
**Question:** Add "Latest Insights" widget to homepage now, or wait for Phase 4?

**Impact:** Development effort, content requirements, SEO benefit timing

**Decision by:** Dec 15, 2025

---

## Risks & Mitigation

### Risk 1: SEO Drop During Transition
**Likelihood:** Medium
**Impact:** High

**Mitigation:**
- Preserve voice agent content on homepage until Phase 2
- Use 301 redirects when moving content
- Monitor rankings weekly
- Keep meta tags optimized throughout

**Status:** Monitoring weekly

### Risk 2: Booking Form Friction
**Likelihood:** Low
**Impact:** Medium

**Mitigation:**
- A/B test form fields
- Make discovery call easy (30 min, no application)
- Audit application form optional (not required)
- Track conversion rates

**Status:** Will test after launch

### Risk 3: Timeline Slippage
**Likelihood:** Medium
**Impact:** Medium

**Mitigation:**
- Phased approach allows flexibility
- Can delay Phase 4 if needed
- Monthly milestones for accountability
- Clear TODO list with dates

**Status:** On track for Phase 1 complete

### Risk 4: Low AI Visibility Growth
**Likelihood:** Medium
**Impact:** High

**Mitigation:**
- Systematic link building strategy (6 tracks)
- Monthly audits to track progress
- Email templates for outreach
- 12-month roadmap with realistic targets

**Status:** Link building strategy created, ready to execute

---

## Quick Commands Reference

### Development
```bash
cd /Users/peterferm/Development\ 2/diabolai/website
npm run dev  # Local development
npm run build  # Test build
npm run lint  # Check for errors
```

### Deployment
```bash
git add .
git commit -m "Your message"
git push
vercel --prod  # Deploy to production
```

### Environment Variables
```bash
vercel env ls  # List env vars
vercel env add VARIABLE_NAME  # Add new env var
vercel env rm VARIABLE_NAME  # Remove env var
```

### IndexNow Testing
```bash
curl -X POST https://diabolai.com/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"urls": ["https://diabolai.com", "https://diabolai.com/faq"]}'
```

### AI Citation Audit (Monthly)
```bash
cd /Users/peterferm/Development\ 2/MyAICoPilot/ai-citation-agent
# Run audit first, then:
node scripts/add-diabol-audit-to-airtable.cjs
```

---

## Agent Instructions

**When starting work on this project:**

1. **Read this file FIRST** to understand current status and priorities
2. **Check the Active TODO List** for dated tasks
3. **Review Recent Decisions** to avoid re-discussing settled issues
4. **Update this file** when:
   - Completing TODO items
   - Making important decisions
   - Discovering new risks
   - Adding new projects/priorities
5. **Commit this file** along with code changes

**Priority Order:**
1. Active TODO items with nearest due dates
2. IMMEDIATE tasks (red 🔴)
3. Current phase tasks (Phase 2 = yellow 🟡)
4. Future phase tasks (Phases 3-4 = green/blue)

**Communication Style:**
- Read CLAUDE.md for brand voice guidelines
- Peer-to-peer (entrepreneur helping entrepreneur)
- Direct and authentic (no corporate speak)
- Focus on ROI and measurable results

**Git Workflow:**
- All changes committed before handoff
- Use descriptive commit messages
- Push to GitHub after each session
- Update SESSION-HANDOFF if major work completed

---

**Status:** ✅ Ready for continued work
**Next Session:** Start with Active TODO List (Week of Nov 18)
**Agent Handoff:** Read this file + SESSION-HANDOFF-NOV-18.md for complete context
