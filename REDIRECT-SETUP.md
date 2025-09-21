# Redirect Setup Guide: diabol.se → diabolai.com

## Overview
This guide covers setting up 301 redirects from the legacy diabol.se domain to the new diabolai.com domain.

## Redirect Strategy

### 1. Domain-Level Redirects
All diabol.se traffic should redirect to diabolai.com with appropriate page mappings.

### 2. Redirect Mapping
See `redirect-map.csv` for complete redirect mappings:
- Root domain: diabol.se → diabolai.com
- WWW: www.diabol.se → diabolai.com  
- Blog content: diabol.se/blog → diabolai.com/faq
- Contact: diabol.se/contact → diabolai.com/contact
- Other pages: → diabolai.com (homepage)

## Implementation Options

### Option 1: DNS-Level Redirects (Recommended)
Configure at your DNS provider (CloudFlare, Namecheap, etc.):

1. **Add CNAME record** for diabol.se pointing to a redirect service
2. **Configure HTTP 301 redirects** at DNS provider level
3. **Test all redirect paths** from redirect-map.csv

### Option 2: Server-Level Redirects
If you control diabol.se hosting:

**Apache (.htaccess)**
```apache
RewriteEngine On
RewriteCond %{HTTP_HOST} ^(www\.)?diabol\.se$ [NC]
RewriteRule ^(.*)$ https://diabolai.com/$1 [R=301,L]

# Specific page redirects
RewriteRule ^devops/?$ https://diabolai.com/ [R=301,L]
RewriteRule ^blog/?$ https://diabolai.com/faq [R=301,L]
RewriteRule ^contact/?$ https://diabolai.com/contact [R=301,L]
RewriteRule ^about/?$ https://diabolai.com/ [R=301,L]
RewriteRule ^services/?$ https://diabolai.com/ [R=301,L]
RewriteRule ^ai-automation/?$ https://diabolai.com/ [R=301,L]
```

**Nginx**
```nginx
server {
    listen 80;
    listen 443 ssl;
    server_name diabol.se www.diabol.se;
    
    # Specific redirects
    location /blog { return 301 https://diabolai.com/faq; }
    location /contact { return 301 https://diabolai.com/contact; }
    location /devops { return 301 https://diabolai.com/; }
    location /about { return 301 https://diabolai.com/; }
    location /services { return 301 https://diabolai.com/; }
    location /ai-automation { return 301 https://diabolai.com/; }
    
    # Catch-all redirect
    location / { return 301 https://diabolai.com$request_uri; }
}
```

### Option 3: CloudFlare Page Rules
If using CloudFlare:

1. **Page Rule 1**: `diabol.se/blog*` → `https://diabolai.com/faq` (301)
2. **Page Rule 2**: `diabol.se/contact*` → `https://diabolai.com/contact` (301)
3. **Page Rule 3**: `diabol.se/*` → `https://diabolai.com/$1` (301)

## Verification Steps

### 1. Test Redirects
```bash
# Test root domain
curl -I http://diabol.se
# Should return: Location: https://diabolai.com/

# Test specific pages
curl -I http://diabol.se/blog
# Should return: Location: https://diabolai.com/faq

curl -I http://diabol.se/contact  
# Should return: Location: https://diabolai.com/contact
```

### 2. SEO Validation
- **Google Search Console**: Add both domains, monitor redirect coverage
- **Screaming Frog**: Crawl diabol.se to verify all 301s
- **Redirect Checker Tools**: Use online tools to verify redirect chains

### 3. Analytics Setup
- **Google Analytics**: Set up filters to track redirect traffic
- **Monitor 404s**: Watch for broken redirect paths
- **Traffic Analysis**: Monitor referral traffic from diabol.se

## Monitoring & Maintenance

### Week 1-4
- **Daily checks** of redirect functionality
- **Monitor GSC** for crawl errors
- **Check analytics** for traffic patterns
- **Fix any broken redirects** immediately

### Month 1-6  
- **Weekly monitoring** of redirect traffic
- **SEO ranking tracking** for both domains
- **Update redirects** as needed based on 404 reports
- **Document traffic migration** success

### After 6 Months
- **Consider retiring** diabol.se domain (optional)
- **Maintain redirects** for at least 12 months minimum
- **Archive redirect documentation** for future reference

## Important Notes
- **Keep redirects active** for minimum 12 months
- **Monitor Core Web Vitals** - redirects can impact performance
- **Update external links** pointing to diabol.se when possible
- **Maintain SSL certificates** on diabol.se during redirect period

## Rollback Plan
If redirects cause issues:
1. **Disable redirects** immediately
2. **Restore diabol.se** to previous state  
3. **Investigate issues** before re-implementing
4. **Test thoroughly** before re-enabling

---
**Status**: Ready for implementation once diabolai.com domain is live