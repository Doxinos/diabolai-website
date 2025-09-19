# DiabolAI Website - Project Status & Tasks

## Project Overview
DiabolAI website for AI Voice Agents business - Next.js 14 with TypeScript and Tailwind CSS

## Completed Tasks ✅
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

## Current Issues/Improvements Needed 🔧
- **FAQ Page Design** - Needs visual improvements and better styling
- **URL Naming Strategy** - Consider SEO analysis feedback for optimal URL structure

## SEO Implementation Notes
- **Staging Environment**: Must block from indexing (HTTP auth or X-Robots-Tag: noindex)
- **Future Sitemap Structure**: Switch to sectioned sitemaps when blog launches (>100-200 URLs)
- **Robots.txt**: Added with sitemap reference for production only

## Planned Tasks 📋
### High Priority
1. **Blog Integration with Sanity.io**
   - Integrate Sanity CMS into current DiabolAI site
   - Create `/blog` routes for lead-focused content
   - Use SanityPress template as foundation
   - Focus on AI voice agent thought leadership content

2. **Additional Informational Pages**
   - `/how-it-works` - Deep dive into voice agent technology
   - `/use-cases` - Industry-specific applications  
   - `/pricing` - Transparent pricing information
   - `/resources` - Guides, whitepapers, case studies

3. **SEO Architecture Implementation**
   - Create sitemap.xml for better crawling
   - Implement internal linking strategy
   - Add breadcrumb navigation
   - Optimize for topical authority on voice agents

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