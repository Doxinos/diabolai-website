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

The "Book AI Diagnosis" CTA needs a Calendly link.

### Step 1: Create Calendly Event
1. Log into [Calendly](https://calendly.com)
2. Create new event type: "AI Diagnosis (90 min)"
3. Settings:
   - Duration: 90 minutes
   - Location: Google Meet or Zoom
   - Questions to ask:
     - Company name
     - Website URL
     - Number of employees
     - Current biggest operational challenge
     - What interested you in AI transformation?

### Step 2: Get Event Link
Copy the event link (e.g., `https://calendly.com/diabol-ai/ai-diagnosis`)

### Step 3: Add to Environment Variables
Add to `.env.local`:

```bash
NEXT_PUBLIC_CALENDLY_DIAGNOSIS_URL=https://calendly.com/your-link/ai-diagnosis
```

### Step 4: Create Calendly Component
Create `src/components/CalendlyButton.tsx`:

```typescript
'use client'

import { Calendar } from 'lucide-react'

interface CalendlyButtonProps {
  text?: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export default function CalendlyButton({
  text = 'Book AI Diagnosis',
  variant = 'primary',
  size = 'md'
}: CalendlyButtonProps) {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_DIAGNOSIS_URL

  const handleClick = () => {
    if (calendlyUrl) {
      window.open(calendlyUrl, '_blank')
    }
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-white hover:bg-gray-100 text-blue-600 border-2 border-blue-600'
  }

  return (
    <button
      onClick={handleClick}
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        rounded-lg font-semibold
        transition-all duration-200
        inline-flex items-center gap-2
        shadow-lg hover:shadow-xl
        transform hover:-translate-y-0.5
      `}
    >
      <Calendar className="w-5 h-5" />
      {text}
    </button>
  )
}
```

### Step 5: Add to Hero Section
Edit `src/components/Hero.tsx`:

```typescript
// At the top
import CalendlyButton from './CalendlyButton'

// Replace the primary CTA button with:
<CalendlyButton text="Book AI Diagnosis (90 min)" size="lg" />
```

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
