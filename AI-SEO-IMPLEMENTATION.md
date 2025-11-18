# AI SEO Implementation Guide - Diabol AI

**Date:** November 2025
**Baseline Score:** 2.8/10 (from AI Citation Audit - Nov 16, 2025)
**Goal:** Achieve 7.0/10+ within 90 days

---

## Implementation Status

### ✅ Completed (Week 1)

1. **Schema.org Optimization**
   - Updated Organization markup with "Diabol AI" branding
   - Added `makesOffer` with 5 service offerings
   - Included founder info, countries served, `knowsAbout` fields
   - Fixed validator errors (was using invalid `serviceType`)
   - Location: `src/app/layout.tsx` lines 74-169

2. **Robots.txt Enhancement**
   - Explicitly allowed all major AI crawlers (GPTBot, PerplexityBot, Claude-Web, etc.)
   - Location: `public/robots.txt`

3. **GA4 AI-Referrer Tracking**
   - Automatic detection of AI platform referrals
   - Tracks: ChatGPT, Perplexity, Claude, Gemini, Bing Chat, You.com, Phind
   - Custom event: `ai_referral` with platform and page path
   - Location: `src/components/analytics/GoogleAnalytics.tsx` lines 52-81

4. **IndexNow Integration**
   - API route for submitting URLs to Bing/Yandex/IndexNow
   - Utility functions for automatic page submission
   - Location: `src/app/api/indexnow/route.ts`, `src/lib/indexnow.ts`

5. **Segmented Sitemap**
   - Organized by content type (core, money, service, comparison, legal)
   - Priority and frequency optimized for AI discovery
   - Location: `src/app/sitemap.ts`

6. **Domain Strategy**
   - Redirect: diabol.se → diabolai.com (301)
   - Kept /webmail redirect for email access
   - Unified brand under diabolai.com

7. **i18n Support**
   - English/Swedish language switching
   - Browser auto-detection
   - localStorage persistence
   - Location: `src/lib/translations.ts`, `src/contexts/LanguageContext.tsx`

---

## 10-Point AI SEO Checklist Progress

### ✅ 1. GA4 AI-Referrer Tracking
**Status:** DONE
**Implementation:** Automatic tracking via GoogleAnalytics component
**How to verify:**
- In GA4, go to Reports → Engagement → Events
- Look for `ai_referral` events
- Check event parameters: `ai_platform`, `referrer_url`, `page_path`

### ✅ 2. Build Prompt Clusters
**Status:** PARTIALLY DONE
**Current:** FAQ page with conversational questions
**Next steps:**
- Add more "how to" and "what is" content
- Create industry-specific prompt clusters (real estate, healthcare, home services)
- Target: 20+ prompt-optimized pages by Week 4

### ✅ 3. Answer-First Content
**Status:** DONE (FAQ page)
**Format:** Lists, definitions, clear answers
**Next steps:**
- Add comparison tables to service pages
- Create "Best AI Voice Agents for X" listicles
- Add FAQ schema markup to FAQ page

### ✅ 4. AI Crawler Access
**Status:** DONE
**Verification:**
- Check `public/robots.txt` - all AI bots explicitly allowed
- No blocking in Next.js middleware or .htaccess

### ✅ 5. Server-Side Rendering
**Status:** DONE (Next.js SSR by default)
**Verification:**
- View page source → should see full HTML content
- No client-only hydration for main content
- LanguageProvider uses SSR-safe pattern

### ✅ 6. Internal Architecture
**Status:** PARTIALLY DONE
**Current:**
- Clear folder structure in sitemap
- Industry pages linked from homepage
**Next steps:**
- Add breadcrumbs to service pages
- Internal linking from blog posts to money pages (pricing)
- Create hub-and-spoke model: FAQ hub → industry spokes

### ⏳ 7. Build Authority Profiles
**Status:** PRIORITY 1 - NOT STARTED
**Action items:**
- [ ] Claim G2 profile for Diabol AI
- [ ] Claim Trustpilot profile
- [ ] Submit to LeewayHertz AI consulting directory
- [ ] Submit to The Consulting Report
- [ ] Submit to Clutch (AI consulting category)
- [ ] Request 3-5 client reviews on each platform
- [ ] Target: 10+ reviews across platforms within 30 days

### ✅ 8. XML Sitemap + IndexNow
**Status:** DONE
**Sitemap:** Auto-generated at /sitemap.xml (Next.js)
**IndexNow:** API route ready at `/api/indexnow`
**Setup required:**
1. Generate IndexNow API key: https://www.bing.com/indexnow
2. Add to `.env.local`: `INDEXNOW_KEY=your-key-here`
3. Create key file: `public/your-key-here.txt` (contains just the key)
4. Deploy to production
5. Test: `curl https://diabolai.com/api/indexnow?url=/`

### ⏳ 9. Content Refresh Schedule
**Status:** DOCUMENTED BELOW
**Weekly:** Homepage hero, FAQ updates, industry page stats
**Monthly:** Pricing, comparison pages, blog posts
**After refresh:** Call `submitToIndexNow(['/updated-page'])`

### ⏳ 10. Track AI Citations
**Status:** MANUAL TRACKING
**Current:** Baseline audit completed (Nov 16, 2025)
**Next audit:** January 15, 2026 (60 days)
**Tracking:**
- Monthly: Check Perplexity, ChatGPT, Gemini for "AI consulting Sweden"
- Monthly: Check for brand mentions using Google Alerts
- Consider: AIclicks or similar AI citation tracking tool (evaluate cost)

---

## Next Steps (Prioritized)

### Week 2 (Nov 18-24, 2025)

**Priority 1: Authority Building**
- [ ] Claim G2 profile
- [ ] Claim Trustpilot profile
- [ ] Submit to 3 AI consulting directories
- [ ] Contact 3 existing clients for reviews

**Priority 2: IndexNow Setup**
- [ ] Generate IndexNow API key from Bing
- [ ] Add INDEXNOW_KEY to Vercel environment variables
- [ ] Create public key file
- [ ] Test submission with homepage
- [ ] Document in README

**Priority 3: Content Enhancement**
- [ ] Add FAQ schema markup to FAQ page
- [ ] Create comparison table for pricing page
- [ ] Write "Best AI Voice Agents for Real Estate" blog post

### Week 3-4 (Nov 25 - Dec 8, 2025)

**Priority 1: More Authority Profiles**
- [ ] Submit to Clutch, GoodFirms, DesignRush
- [ ] Get to 10+ total reviews across platforms
- [ ] Add review badges to homepage

**Priority 2: Prompt Cluster Content**
- [ ] "How to automate appointment booking" (targets real estate)
- [ ] "What is an AI receptionist" (definition content)
- [ ] "AI voice agents vs traditional answering service" (comparison)
- [ ] "Best AI automation for healthcare practices" (industry specific)

**Priority 3: Internal Linking**
- [ ] Add breadcrumbs to all pages
- [ ] Create resource hub page
- [ ] Link all industry pages to pricing
- [ ] Add related content sections

### Month 2 (Dec 9 - Jan 8, 2026)

**Content Refresh:**
- Update homepage stats weekly
- Publish 2-3 blog posts per week
- Add case studies (if available)
- Create downloadable resources (lead magnets)

**Authority Building:**
- Target 20+ total reviews
- Get featured in 1-2 "Best of" listicles
- Guest post on AI/consulting blogs

**Monitoring:**
- Track GA4 ai_referral events weekly
- Check search console for AI crawler activity
- Monitor brand mentions

### Month 3 (Jan 9 - Feb 8, 2026)

**60-Day Audit:**
- Run full AI citation audit again (Jan 15, 2026)
- Compare to baseline (2.8/10)
- Target: 6.0/10+ (2x improvement)
- Document wins and gaps

---

## Technical Reference

### File Locations

**AI SEO Core Files:**
- `src/app/layout.tsx` - Schema.org markup
- `src/components/analytics/GoogleAnalytics.tsx` - AI referrer tracking
- `src/app/api/indexnow/route.ts` - IndexNow API
- `src/lib/indexnow.ts` - IndexNow utilities
- `src/app/sitemap.ts` - Segmented sitemap
- `public/robots.txt` - AI crawler permissions

**Configuration:**
- `.env.local` - INDEXNOW_KEY (add this)
- `public/[key].txt` - IndexNow key file (create this)

### How to Submit Content to IndexNow

**Option 1: API Route (Manual)**
```bash
# Single URL
curl https://diabolai.com/api/indexnow?url=/new-page

# Multiple URLs (POST)
curl -X POST https://diabolai.com/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"urls": ["/page1", "/page2", "/page3"]}'
```

**Option 2: Client-side (After Content Update)**
```typescript
import { submitToIndexNow } from '@/lib/indexnow'

// After publishing new content
await submitToIndexNow(['/new-blog-post'])
```

**Option 3: Submit All Pages**
```typescript
import { submitAllPages } from '@/lib/indexnow'

// One-time bulk submission
await submitAllPages()
```

### How to Check AI Referrals in GA4

1. Go to GA4 → Reports → Engagement → Events
2. Search for event name: `ai_referral`
3. Click to see details
4. Check parameters:
   - `ai_platform` - which AI sent traffic
   - `referrer_url` - full referrer URL
   - `page_path` - which page they landed on

### How to Verify Schema.org

1. Visit: https://validator.schema.org/
2. Enter: `https://diabolai.com`
3. Verify:
   - Organization name: "Diabol AI"
   - makesOffer: 5 services listed
   - founder: Peter Ferm
   - No errors or warnings

---

## Success Metrics

### Primary KPIs (Track Monthly)

1. **AI Citation Score** (from audit)
   - Baseline: 2.8/10
   - Month 1 target: 4.0/10
   - Month 2 target: 6.0/10
   - Month 3 target: 7.0/10

2. **Trust Node Coverage**
   - Baseline: 8/29 (28%)
   - Month 1 target: 12/29 (41%)
   - Month 3 target: 18/29 (62%)

3. **AI Referral Traffic** (GA4)
   - Baseline: 0 (not tracked before)
   - Month 1 target: 50+ visits from AI platforms
   - Month 3 target: 200+ visits from AI platforms

4. **Review Count**
   - Baseline: Unknown (likely 0-2)
   - Month 1 target: 10+
   - Month 3 target: 25+

### Secondary KPIs

- Brand mentions in AI responses (manual check)
- ChatGPT/Perplexity citation rate for "AI consulting Sweden"
- Organic traffic from prompt-optimized pages
- Time on site from AI referrals vs other sources

---

## Notes

- **Next.js SSR:** Already optimized for LLM parsing - no action needed
- **Prompt clusters:** Focus on "how to", "what is", "best X for Y" formats
- **Weekly refresh:** Update at least 1 page per week to signal freshness
- **IndexNow:** Requires Bing Webmaster Tools account and API key generation

---

**Last Updated:** 2025-11-18
**Next Review:** 2025-12-01 (track Month 1 progress)
**Next Audit:** 2026-01-15 (60-day checkpoint)
