# Immediate Setup Tasks

**Status:** Phase 1 Complete - These tasks needed before Phase 2
**Date:** November 18, 2025

---

## 1. IndexNow API Setup ⚠️ REQUIRED

IndexNow is implemented but needs configuration to work.

### Step 1: Generate API Key
1. Visit [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add/verify your site: `diabolai.com`
3. Go to "Settings" → "IndexNow"
4. Generate an API key (will be a long alphanumeric string)

### Step 2: Add to Environment Variables
Create `/Users/peterferm/Development 2/diabolai/website/.env.local` (or add to existing):

```bash
INDEXNOW_KEY=your-generated-key-here
```

### Step 3: Create Public Key File
Create a text file at `/Users/peterferm/Development 2/diabolai/website/public/[YOUR-KEY].txt`

**Example:** If your key is `abc123xyz`, create `public/abc123xyz.txt`

**File content:** Just the key itself:
```
abc123xyz
```

### Step 4: Update IndexNow Route
Edit `src/app/api/indexnow/route.ts` line 3:

**Current:**
```typescript
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'your-indexnow-key-here'
```

**After you have the key, this will automatically use it from .env.local**

### Step 5: Deploy to Vercel
```bash
cd /Users/peterferm/Development\ 2/diabolai/website
vercel env add INDEXNOW_KEY
# Paste your key when prompted
# Select Production + Preview + Development
vercel --prod
```

### Step 6: Test IndexNow
After deployment, test with:

```bash
curl -X POST https://diabolai.com/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"urls": ["https://diabolai.com", "https://diabolai.com/faq"]}'
```

Expected response:
```json
{
  "success": true,
  "message": "Submitted 2 URLs to IndexNow",
  "results": {"successful": 3, "failed": 0, "total": 3}
}
```

---

## 2. Calendly Integration 📅 REQUIRED

The website needs TWO different booking paths:

### A. Discovery Call (30 min) - Free
For initial qualification and fit assessment.

### B. AI Audit Application - Form-Based
For qualified prospects to apply for the paid AI audit.

---

### Step 1: Create Calendly Discovery Call Event
1. Log into [Calendly](https://calendly.com)
2. Create new event type: **"Discovery Call (30 min)"**
3. Settings:
   - Duration: **30 minutes**
   - Location: Google Meet or Zoom
   - Questions to ask:
     - Company name
     - Website URL
     - Number of employees (10-50 ideal)
     - Current biggest operational challenge
     - What interested you in working with Diabol AI?
     - Have you explored AI solutions before?

### Step 2: Get Discovery Call Link
Copy the event link (e.g., `https://calendly.com/diabol-ai/discovery-call`)

### Step 3: Create AI Audit Application Form

Use Tally.so, Typeform, or Google Forms to create a qualification form.

**Form fields:**
1. **Contact Information**
   - Full Name
   - Email
   - Phone (optional)
   - LinkedIn Profile URL

2. **Company Information**
   - Company Name
   - Website URL
   - Industry
   - Number of Employees
   - Annual Revenue Range

3. **Audit Goals**
   - What are your top 3 operational challenges? (open text)
   - What do you hope to achieve with an AI audit? (open text)
   - Which areas interest you most? (checkboxes: Customer Service, Sales, Operations, Marketing, Data Management, Other)
   - Timeline for implementation? (dropdown: 0-3 months, 3-6 months, 6-12 months, Exploring)

4. **Current State**
   - Are you currently using any AI tools? (Yes/No + describe)
   - Do you have technical resources in-house? (Yes/No/Planning to hire)
   - Budget allocated for AI implementation? (dropdown: <$10K, $10K-$50K, $50K-$100K, >$100K, Not sure yet)

5. **Qualifying Questions**
   - How did you hear about Diabol AI? (dropdown + Other)
   - Why now? What's driving this decision? (open text)

**Form submission:**
- Triggers email to you with application details
- Sends confirmation email to applicant
- Optional: Webhooks to Airtable/CRM

**Form URL example:** `https://tally.so/r/diabol-ai-audit-application`

### Step 4: Add to Environment Variables
Add to `.env.local`:

```bash
# Discovery call (30 min - free)
NEXT_PUBLIC_CALENDLY_DISCOVERY_URL=https://calendly.com/diabol-ai/discovery-call

# AI Audit application form
NEXT_PUBLIC_AUDIT_APPLICATION_URL=https://tally.so/r/diabol-ai-audit-application
```

### Step 5: Create Dual CTA Components

Create `src/components/BookingButtons.tsx`:

```typescript
'use client'

import { Calendar, FileText } from 'lucide-react'

interface BookingButtonsProps {
  layout?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md' | 'lg'
  showBoth?: boolean // If false, only show discovery call
}

export default function BookingButtons({
  layout = 'horizontal',
  size = 'md',
  showBoth = true
}: BookingButtonsProps) {
  const discoveryUrl = process.env.NEXT_PUBLIC_CALENDLY_DISCOVERY_URL
  const auditUrl = process.env.NEXT_PUBLIC_AUDIT_APPLICATION_URL

  const handleDiscovery = () => {
    if (discoveryUrl) window.open(discoveryUrl, '_blank')
  }

  const handleAudit = () => {
    if (auditUrl) window.open(auditUrl, '_blank')
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const containerClass = layout === 'horizontal'
    ? 'flex gap-4 items-center'
    : 'flex flex-col gap-4'

  return (
    <div className={containerClass}>
      {/* Primary: Discovery Call */}
      <button
        onClick={handleDiscovery}
        className={`
          ${sizeClasses[size]}
          bg-blue-600 hover:bg-blue-700 text-white
          rounded-lg font-semibold
          transition-all duration-200
          inline-flex items-center gap-2
          shadow-lg hover:shadow-xl
          transform hover:-translate-y-0.5
        `}
      >
        <Calendar className="w-5 h-5" />
        Book Discovery Call (30 min)
      </button>

      {/* Secondary: AI Audit Application */}
      {showBoth && (
        <button
          onClick={handleAudit}
          className={`
            ${sizeClasses[size]}
            bg-white hover:bg-gray-100 text-blue-600
            border-2 border-blue-600
            rounded-lg font-semibold
            transition-all duration-200
            inline-flex items-center gap-2
            shadow-lg hover:shadow-xl
            transform hover:-translate-y-0.5
          `}
        >
          <FileText className="w-5 h-5" />
          Apply for AI Audit
        </button>
      )}
    </div>
  )
}
```

### Step 6: Add to Hero Section
Edit `src/components/Hero.tsx`:

```typescript
// At the top
import BookingButtons from './BookingButtons'

// Replace the CTA buttons with:
<BookingButtons layout="horizontal" size="lg" showBoth={true} />
```

### Step 7: LinkedIn Profile Integration
Add the AI Audit application form link to your LinkedIn profile:

1. Go to LinkedIn profile
2. Edit "Featured" section
3. Add link: "Apply for AI Audit" → https://tally.so/r/diabol-ai-audit-application
4. Or add to "Contact Info" → Website → "AI Audit Application"

### Step 6: Deploy
```bash
vercel --prod
```

---

## 3. Google Analytics 4 Verification ✅ DEPLOYED

Already implemented, but verify it's working:

### Check AI Referrer Tracking
1. Visit [Google Analytics 4](https://analytics.google.com)
2. Go to Reports → Engagement → Events
3. Look for event name: `ai_referral`

**To test manually:**
1. Visit ChatGPT, Claude, or Perplexity
2. Ask: "What is Diabol AI?"
3. Click a link to diabolai.com
4. Check GA4 Events in 24-48 hours

---

## 4. Schema.org Validation ✅ COMPLETE

Already fixed, but verify:

1. Visit [Schema Markup Validator](https://validator.schema.org)
2. Enter: `https://diabolai.com`
3. Verify no errors for Organization and makesOffer structure

Expected result: ✅ No errors

---

## 5. Search Console Setup 🔍 RECOMMENDED

Ensure Google Search Console is configured:

### Add Property (if not already added)
1. Visit [Google Search Console](https://search.google.com/search-console)
2. Add property: `diabolai.com`
3. Verify ownership (DNS or meta tag)

### Submit Updated Sitemap
```
https://diabolai.com/sitemap.xml
```

### Monitor New Keywords
Set up alerts for these new keywords (from Phase 1 changes):
- ai transformation consulting
- strategic ai implementation
- ai consulting for small business
- ai business transformation
- ai strategy consulting

Track weekly in "Performance" report.

---

## 6. AI Visibility Baseline Measurement 📊 RECOMMENDED

Run initial audit to confirm baseline:

```bash
cd /Users/peterferm/Development\ 2/diabolai/website
# If you have ai-citation-agent installed:
ai-citation-agent audit diabolai.com
```

Expected baseline (from Nov 16):
- **AI Visibility Score:** 2.8/10
- **Trust Node Coverage:** 28%
- **Citations Found:** 0

Track monthly to measure improvement toward 7.0/10 target.

---

## 7. Bing Webmaster Tools 🔍 RECOMMENDED

Similar to Google Search Console, for Bing/Copilot visibility:

1. Visit [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add site: `diabolai.com`
3. Verify ownership
4. Submit sitemap: `https://diabolai.com/sitemap.xml`

This is especially important because:
- Bing powers Copilot (Microsoft's AI)
- IndexNow works best with Bing integration
- Nordic market often uses Bing

---

## Checklist Summary

**Critical (Before Phase 2):**
- [ ] IndexNow API key setup
- [ ] Calendly integration
- [ ] CalendlyButton component created
- [ ] Hero section updated with Calendly button

**Important (This Week):**
- [ ] Google Search Console sitemap submitted
- [ ] Bing Webmaster Tools configured
- [ ] Verify GA4 AI referral tracking

**Recommended (This Month):**
- [ ] AI visibility baseline audit
- [ ] Set up Search Console keyword alerts
- [ ] Test IndexNow submission
- [ ] Monitor rankings for voice agent keywords (ensure no drops)

---

## Quick Commands Reference

### Deploy to Production
```bash
cd /Users/peterferm/Development\ 2/diabolai/website
git add .
git commit -m "Setup: IndexNow and Calendly integration"
git push
vercel --prod
```

### Test IndexNow Locally
```bash
# Start dev server
npm run dev

# In another terminal:
curl -X POST http://localhost:3000/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"urls": ["/", "/faq"]}'
```

### Check Environment Variables in Vercel
```bash
vercel env ls
```

---

**Status:** 2/7 tasks complete (Schema.org ✅, GA4 ✅)
**Next:** Complete IndexNow and Calendly (critical for CTAs)
**Timeline:** Complete all tasks before starting Phase 2
