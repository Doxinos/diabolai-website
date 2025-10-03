# DiabolAI Website - Project Status & Tasks

## Project Overview
DiabolAI website for AI Voice Agents business - Next.js 14 with TypeScript and Tailwind CSS

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

## Instructions for Claude
- Always read this file at start of new sessions
- Update completed tasks with dates
- Add new issues/requirements as they come up
- Reference this file for project context
- Ask user about priority if unclear on task order

