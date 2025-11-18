# Updates - November 18, 2025 (Evening)

## Two Important Fixes

### 1. ✅ Diabol AI Audit Data - Airtable Import Guide Created

**Issue:** The November 16th AI citation audit data was never added to your Airtable tracking database.

**Solution:** Created comprehensive import guide with all audit data:

📄 **File:** `/Users/peterferm/Development 2/MyAICoPilot/ai-citation-agent/DIABOL-AI-AIRTABLE-IMPORT.md`

**What's included:**
- Complete audit run record (Overall Score: 2.8/10)
- All 29 trust nodes with status (8 found, 21 missing)
- Key findings and priorities
- 30/60/180-day targets
- Manual entry instructions (tables ready to copy-paste)
- Automated import script (when .env is configured)

**Key Metrics from Audit:**
- **AI Visibility Score:** 2.8/10
- **Trust Node Coverage:** 28% (8/29 nodes)
- **Citation Quality:** 5.8/10
- **AI Citation Rate:** 0% (not cited by any AI platforms)
- **LLM Visibility:** Zero - confused with Diabol AB (DevOps firm)

**Top 3 Priorities:**
1. Get listed on AI consulting aggregator sites (LeewayHertz, Clutch, The Consulting Report)
2. Establish review platform presence (G2, Capterra, Trustpilot) - target 10+ reviews
3. Create SMB-specific content (/ai-consulting-for-small-business landing page)

**Next Audit:** January 15, 2026

**Action needed:**
- Open the import guide and manually add data to Airtable, OR
- Configure `.env` file and run automated script

---

### 2. ✅ Audit Booking Process - Corrected from 90min to 30min + Form

**Issue:** Documentation incorrectly suggested giving away 90-minute AI audits via direct Calendly booking.

**Your correct approach:**
- **30-minute Discovery Call** (Calendly) - Free consultation to assess fit
- **AI Audit Application** (Form) - Qualification form for paid audit

**Solution:** Updated all documentation to reflect correct two-path approach.

**Files updated:**
1. ✅ `/Users/peterferm/Development 2/diabolai/website/IMMEDIATE-SETUP-TASKS.md`
2. ✅ `/Users/peterferm/Development 2/diabolai/website/WEBSITE-IMPLEMENTATION-PLAN.md`

---

## Updated Booking Flow

### Path A: Discovery Call (Free)
**Purpose:** Initial qualification and fit assessment

**Duration:** 30 minutes
**Platform:** Calendly
**Questions asked:**
- Company name, website, size
- Number of employees (10-50 ideal)
- Current biggest operational challenge
- Interest in working with Diabol AI
- Previous AI exploration

**CTA:** "Book Discovery Call (30 min)"

### Path B: AI Audit Application (Paid)
**Purpose:** Qualification for $3K-$5K paid audit

**Platform:** Tally.so / Typeform / Google Forms
**Required information:**
1. **Contact Info:** Name, email, phone, LinkedIn
2. **Company Info:** Name, website, industry, size, revenue
3. **Audit Goals:**
   - Top 3 operational challenges
   - What they hope to achieve
   - Areas of interest (customer service, sales, operations, marketing, etc.)
   - Implementation timeline
4. **Current State:**
   - Existing AI tools
   - Technical resources in-house
   - Budget allocation
5. **Qualifying Questions:**
   - How they heard about you
   - Why now? (urgency assessment)

**Form submission:**
- Sends you email with application
- Sends confirmation to applicant
- Optional: Webhook to Airtable/CRM for tracking

**CTA:** "Apply for AI Audit"

**After approval:** You manually schedule the 90-minute paid audit session

---

## New Component: BookingButtons.tsx

Created dual-CTA component for homepage and service pages:

```typescript
<BookingButtons
  layout="horizontal"  // or "vertical"
  size="lg"           // sm, md, lg
  showBoth={true}     // false = only show discovery call
/>
```

**Features:**
- Primary button: Discovery Call (blue, prominent)
- Secondary button: Apply for AI Audit (outlined)
- Responsive layout options
- Environment variable-based URLs

---

## LinkedIn Profile Integration

**Recommendation:** Add AI Audit application form to your LinkedIn profile:

**Option 1: Featured Section**
1. Edit "Featured" section
2. Add link: "Apply for AI Audit"
3. URL: https://tally.so/r/diabol-ai-audit-application (or your actual form URL)

**Option 2: Contact Info**
1. Edit "Contact Info"
2. Add Website: "AI Audit Application"
3. URL: Your form URL

**Why:** Makes it easy for LinkedIn prospects to apply directly from your profile

---

## Environment Variables Needed

Add to `/Users/peterferm/Development 2/diabolai/website/.env.local`:

```bash
# Discovery call (30 min - free)
NEXT_PUBLIC_CALENDLY_DISCOVERY_URL=https://calendly.com/diabol-ai/discovery-call

# AI Audit application form
NEXT_PUBLIC_AUDIT_APPLICATION_URL=https://tally.so/r/diabol-ai-audit-application
```

Also add to Vercel:
```bash
cd /Users/peterferm/Development\ 2/diabolai/website
vercel env add NEXT_PUBLIC_CALENDLY_DISCOVERY_URL
vercel env add NEXT_PUBLIC_AUDIT_APPLICATION_URL
```

---

## Setup Checklist

### Discovery Call (Calendly)
- [ ] Create 30-minute event in Calendly
- [ ] Configure questions (company, size, challenge, interest)
- [ ] Set location (Google Meet/Zoom)
- [ ] Copy booking URL
- [ ] Add to .env.local as `NEXT_PUBLIC_CALENDLY_DISCOVERY_URL`
- [ ] Add to Vercel environment variables

### AI Audit Application (Form)
- [ ] Create form on Tally.so / Typeform / Google Forms
- [ ] Add all required fields (contact, company, goals, current state, qualifiers)
- [ ] Configure email notifications (to you + confirmation to applicant)
- [ ] Optional: Set up webhook to Airtable/CRM
- [ ] Copy form URL
- [ ] Add to .env.local as `NEXT_PUBLIC_AUDIT_APPLICATION_URL`
- [ ] Add to Vercel environment variables
- [ ] Add to LinkedIn profile (Featured or Contact Info)

### Website Updates
- [ ] Create `src/components/BookingButtons.tsx` component
- [ ] Update `src/components/Hero.tsx` to use BookingButtons
- [ ] Update other pages with appropriate CTAs
- [ ] Deploy to Vercel

---

## Pricing & Positioning

### Discovery Call (30 min)
- **Price:** Free
- **Purpose:** Qualification and fit assessment
- **Outcome:** Determines if audit is appropriate

### AI Audit (90 min)
- **Price:** $3K-$5K (pilot pricing for first 10 qualified clients)
- **Process:** Application → Review → Approval → Scheduling
- **Deliverables:**
  - 3-5 prioritized use cases
  - Rough ROI calculation
  - 30-90 day recommendation
  - Detailed opportunity assessment

**Value proposition:** Not everyone gets the audit - it's for qualified, serious prospects only. The application form acts as a filter and demonstrates your expertise/demand.

---

## Next Steps

1. **Set up Airtable data** (use import guide)
2. **Create Calendly 30-min event** (discovery call)
3. **Create Tally/Typeform audit application** (qualification form)
4. **Add environment variables** (.env.local + Vercel)
5. **Create BookingButtons component** (code in IMMEDIATE-SETUP-TASKS.md)
6. **Update Hero component** (replace CTAs)
7. **Add to LinkedIn profile** (audit application link)
8. **Deploy and test**

---

## Documentation Reference

**Airtable Import Guide:**
- File: `/Users/peterferm/Development 2/MyAICoPilot/ai-citation-agent/DIABOL-AI-AIRTABLE-IMPORT.md`
- Includes: Complete Nov 16 audit data, manual entry tables, automated script

**Setup Tasks:**
- File: `/Users/peterferm/Development 2/diabolai/website/IMMEDIATE-SETUP-TASKS.md`
- Updated: Section 2 now shows correct dual-path booking process
- Includes: Complete component code, step-by-step setup

**Implementation Plan:**
- File: `/Users/peterferm/Development 2/diabolai/website/WEBSITE-IMPLEMENTATION-PLAN.md`
- Updated: Section 2.1 (AI Diagnosis) now reflects form-based qualification

---

**Last Updated:** November 18, 2025 (Evening)
**Status:** Documentation corrected, ready for implementation
