# Domain Migration Guide: DiabolAI.com

## Overview
This guide covers migrating the DiabolAI website from the temporary Vercel domain to the production domain `diabolai.com`.

## Pre-Migration Checklist ✅

### Technical Readiness
- [x] **Production build tested** - `npm run build` successful
- [x] **URLs verified** - All hardcoded URLs already point to diabolai.com
- [x] **Robots.txt ready** - Configured for diabolai.com with sitemap reference
- [x] **Sitemap configured** - Points to diabolai.com URLs

### Domain Requirements
- [ ] **Domain ownership** - Ensure diabolai.com is owned/controlled
- [ ] **DNS access** - Admin access to domain DNS settings
- [ ] **SSL certificate** - Vercel will provide free SSL automatically

## Migration Steps

### 1. Domain Setup in Vercel
1. **Go to Vercel Dashboard** → Your Project → Settings → Domains
2. **Add diabolai.com** as custom domain
3. **Add www.diabolai.com** (optional, recommended for SEO)
4. **Configure DNS** according to Vercel's instructions:
   - For apex domain (diabolai.com): A record to Vercel's IP
   - For www: CNAME to Vercel's proxy
   - Or use CNAME flattening if your DNS provider supports it

### 2. DNS Configuration
**Option A: A Record (Apex Domain)**
```
Type: A
Name: @
Value: 76.76.19.61 (check Vercel for current IP)
```

**Option B: CNAME (Recommended)**
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

**WWW Subdomain**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3. SSL Certificate
- **Automatic**: Vercel will issue free SSL certificate
- **Verification**: Can take 24-48 hours
- **Check**: Visit https://diabolai.com to verify SSL

### 4. Domain Verification
```bash
# Check DNS propagation
dig diabolai.com
dig www.diabolai.com

# Check SSL certificate
curl -I https://diabolai.com
```

## SEO Migration Steps

### 1. Google Analytics Setup
- Create new GA4 property for diabolai.com
- Update tracking code in site
- Set up conversion goals
- Configure enhanced ecommerce tracking

### 2. Google Search Console
- Add diabolai.com property
- Verify domain ownership
- Submit sitemap: https://diabolai.com/sitemap.xml
- Monitor indexing status

### 3. Legacy Domain Redirects (diabol.se)
- **Configure 301 redirects** from diabol.se to diabolai.com
- **Use redirect-map.csv** for specific page mappings
- **Monitor traffic transfer** for 3-6 months

## Post-Migration Checklist

### Immediate (Day 1)
- [ ] **All pages load** on diabolai.com
- [ ] **SSL certificate active** (https works)
- [ ] **Contact forms functional** (test contact form)
- [ ] **Analytics tracking** (check GA4/GTM)
- [ ] **Calendly integration** working

### Week 1
- [ ] **Submit sitemap** to GSC
- [ ] **Check indexing** status
- [ ] **Monitor Core Web Vitals**
- [ ] **Test from multiple locations**
- [ ] **Email notifications** working

### Month 1
- [ ] **SEO rankings** maintained/improved
- [ ] **Traffic patterns** normal
- [ ] **Conversion tracking** accurate
- [ ] **Legacy redirect traffic** monitored

## Troubleshooting

### Common Issues
1. **DNS propagation delays** - Can take 24-48 hours globally
2. **SSL certificate pending** - Wait for Vercel's automatic issuance
3. **Mixed content errors** - Ensure all resources use HTTPS
4. **Email delivery issues** - Check SPF/DKIM records

### Contact Information
- **Domain Issues**: Contact domain registrar support
- **Vercel Issues**: Check Vercel documentation or support
- **DNS Issues**: Use DNS propagation checkers online

## Important Files
- `/public/robots.txt` - Already configured for diabolai.com
- `/src/app/sitemap.ts` - Generates sitemap with diabolai.com URLs
- `/src/app/layout.tsx` - Contains metadata with diabolai.com references
- `redirect-map.csv` - Legacy domain redirect mappings

## Environment Variables
No environment variables need updating for domain change. All URLs are hardcoded to diabolai.com.

## Rollback Plan
If issues occur:
1. **Remove custom domain** from Vercel
2. **Revert DNS changes** 
3. **Use temporary Vercel domain** until issues resolved
4. **Debug and retry** migration

---
**Next Steps**: Once domain is live, proceed with GA4 setup and industry landing page creation.