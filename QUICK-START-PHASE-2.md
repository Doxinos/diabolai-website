# Quick Start: Phase 2 Preparation

**Status:** Phase 1 Complete ✅
**Next:** Setup tasks, then Phase 2 (Services pages)
**Timeline:** 1 week setup + 4-6 weeks Phase 2

---

## ⚡ Critical Setup (Do This Week)

### 1️⃣ IndexNow (30 minutes)
```bash
# 1. Get key from Bing Webmaster Tools
open https://www.bing.com/webmasters

# 2. Add to .env.local
echo "INDEXNOW_KEY=your-key-here" >> .env.local

# 3. Create public key file
echo "your-key-here" > public/your-key-here.txt

# 4. Deploy
vercel env add INDEXNOW_KEY
vercel --prod
```

### 2️⃣ Calendly (20 minutes)
```bash
# 1. Create event at calendly.com (90 min, "AI Diagnosis")
# 2. Copy event URL
# 3. Add to .env.local
echo "NEXT_PUBLIC_CALENDLY_DIAGNOSIS_URL=https://calendly.com/your-link" >> .env.local

# 4. Deploy
vercel --prod
```

**Then:** Create CalendlyButton component (code in IMMEDIATE-SETUP-TASKS.md)

---

## 📊 Verify What We Deployed Today

### Check Homepage
Visit: https://diabolai.com

**Look for:**
- ✅ New hero: "Transform Your Business with Strategic AI"
- ✅ Regional focus: "Serving Nordics, North America, and Europe"
- ✅ No false "4.9/5 reviews" claim

### Check FAQ
Visit: https://diabolai.com/faq

**Look for:**
- ✅ New category: "AI Consulting & Strategy" (5 questions)
- ✅ First question: "What is AI transformation consulting..."
- ✅ Total: 25 questions (was 20)

### Check Schema.org
Visit: https://validator.schema.org
Enter: `https://diabolai.com`

**Look for:**
- ✅ Organization type validated
- ✅ makesOffer array (5 services)
- ✅ No errors

### Check GA4 (in 24-48 hours)
Visit: https://analytics.google.com

**Look for:**
- ✅ Event: `ai_referral` (after testing from ChatGPT/Perplexity)

---

## 🎯 Phase 2 Preview (4-6 Weeks)

### Pages to Build (in order)
1. **Services Hub** (`/services`) - 4 hours
   - Overview of all service offerings
   - Links to 5 service detail pages

2. **AI Strategy Consulting** (`/services/ai-strategy-consulting`) - 6 hours
   - Roadmap Sprint details
   - $10K-$25K pricing
   - "Request Proposal" CTA

3. **AI Implementation** (`/services/ai-implementation`) - 6 hours
   - 4-8 week implementation process
   - $25K-$75K pricing
   - "See Implementation Process" CTA

4. **AI Voice Agents** (`/services/ai-voice-agents`) - 8 hours
   - **MIGRATE** existing voice content here
   - Keep 20+ voice FAQ questions
   - From $297/month pricing
   - "Try Live Demo" CTA

5. **AI Diagnosis** (`/services/ai-diagnosis`) - 4 hours
   - 90-minute session details
   - $3K-$5K pilot pricing
   - "Book Your Diagnosis" CTA (Calendly)

6. **Enablement** (`/services/enablement`) - 4 hours
   - Training and change management
   - $5K-$15K pricing
   - "Learn About Enablement" CTA

### Navigation Update
Add dropdown to header:

```
Services ▼
  ├─ AI Strategy Consulting
  ├─ AI Implementation
  ├─ AI Voice Agents
  ├─ AI Diagnosis
  └─ Enablement
```

### Homepage Addition
Add "Services Overview" section (3 columns):
- AI Strategy
- Implementation
- Voice Agents

---

## 📁 Key Documents Reference

### Strategy & Planning
- **WEBSITE-IMPLEMENTATION-PLAN.md** - Master plan (975 lines)
- **diabolai_website_structure.md** - Original Swedish structure
- **REDESIGN-PLAN.md** - 5-phase approach
- **SESSION-SUMMARY-NOV-18-2025.md** - What we did today

### SEO & Keywords
- **diabol-ai-keyword-research.md** - Tier 1/2/3 keywords
- **seed-keywords.csv** - Voice agent keywords
- **AI-SEO-IMPLEMENTATION.md** - 10-point checklist
- **FAQ-EXPANSION-PLAN.md** - Path to 55-60 questions

### Setup & Technical
- **IMMEDIATE-SETUP-TASKS.md** - Setup guide (this week)
- **QUICK-START-PHASE-2.md** - This file

---

## 🎨 Design Patterns to Reuse

### Service Page Layout (Standard Template)
```
Hero Section
  ├─ H1: Service name
  ├─ Subtitle: Who it's for
  └─ CTA: Primary action

What You Get (3-4 bullet points)

Process/Timeline (Visual steps)

Pricing & Deliverables

Case Study Example

Related Services (Cross-links)

Final CTA
```

### Components to Create
1. `ServicePageLayout.tsx` - Reusable template
2. `ServiceCard.tsx` - For Services hub grid
3. `ProcessSteps.tsx` - Visual timeline
4. `PricingBox.tsx` - Service tier display
5. `CalendlyButton.tsx` - CTA integration

---

## 📈 Success Metrics (Track Weekly)

### SEO (Google Search Console)
- **Voice agent keywords:** Monitor for drops (preserve during transition)
- **New keywords:** ai transformation consulting, strategic ai implementation, ai consulting for small business
- **Impressions:** Track growth for consulting terms
- **Featured snippets:** Target 5+ within 60 days

### Traffic (Google Analytics 4)
- **AI referrals:** Custom `ai_referral` event
- **Organic growth:** Target +50% in 90 days
- **Bounce rate:** <60% target
- **Session duration:** >2 min target

### Conversions
- **AI Diagnosis bookings:** Target 5-10/month
- **Proposal requests:** Target 3-5/month
- **Voice demo tries:** Track separately

### AI Visibility
- **Baseline:** 2.8/10 (Nov 16, 2025)
- **30-day target:** 4.5/10
- **60-day target:** 6.0/10
- **90-day target:** 7.0/10

**Tool:** Run monthly audits with ai-citation-agent

---

## 💡 Quick Wins Already Deployed

✅ **Hero repositioned** - Strategic AI focus
✅ **FAQ expanded** - AI consulting questions
✅ **AI SEO foundation** - Tracking, crawlers, IndexNow
✅ **Schema.org fixed** - makesOffer structure
✅ **False proof removed** - Honest messaging
✅ **Bilingual maintained** - EN/SV support

---

## 🚀 How to Kick Off Phase 2

### Option A: Start Immediately
1. Complete setup tasks (IndexNow + Calendly)
2. Create ServicePageLayout component
3. Build Services hub page
4. Build first service page (AI Strategy)
5. Deploy and iterate

**Timeline:** 4 weeks aggressive

### Option B: Plan First
1. Complete setup tasks
2. Create design mockups
3. Draft all content
4. Review and refine
5. Build all pages
6. Deploy at once

**Timeline:** 6 weeks conservative

**Recommendation:** Option A (agile approach, learn as you go)

---

## 📞 Support Contacts

**Technical Issues:**
- Vercel deployment: Check dashboard
- Next.js docs: https://nextjs.org/docs
- Schema.org validator: https://validator.schema.org

**SEO Tools:**
- Google Search Console: https://search.google.com/search-console
- Bing Webmaster Tools: https://www.bing.com/webmasters
- GA4: https://analytics.google.com

**AI Visibility:**
- ai-citation-agent: (if installed)
- Manual checks: Ask ChatGPT "What is Diabol AI?"

---

## ✅ Pre-Phase 2 Checklist

**Setup (This Week):**
- [ ] IndexNow key generated
- [ ] IndexNow env var added to Vercel
- [ ] IndexNow key file in public/
- [ ] Calendly event created (90 min)
- [ ] Calendly URL in env vars
- [ ] CalendlyButton component created
- [ ] Hero updated with Calendly button
- [ ] Deployed and tested

**Verification:**
- [ ] Homepage hero shows new messaging
- [ ] FAQ shows 25 questions (5 new consulting)
- [ ] Schema.org validates with no errors
- [ ] No false claims on site
- [ ] GA4 tracking code present
- [ ] Sitemap submitted to Search Console

**Content Prep:**
- [ ] Draft AI Strategy Consulting page copy
- [ ] Draft AI Implementation page copy
- [ ] Gather 2-3 case study examples
- [ ] Collect Peter Ferm bio and headshot
- [ ] Define exact pricing tiers

**Technical Prep:**
- [ ] Design ServicePageLayout component
- [ ] Plan navigation dropdown structure
- [ ] Decide on deployment strategy (incremental vs all-at-once)

---

**Ready to start Phase 2?** ✅
Review WEBSITE-IMPLEMENTATION-PLAN.md for full details.

**Questions?**
Reference IMMEDIATE-SETUP-TASKS.md for technical setup.

**Last Updated:** November 18, 2025
**Next Review:** After setup tasks complete
