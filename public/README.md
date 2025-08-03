# Public Directory

This directory contains static assets that will be served directly by Next.js.

## Structure

- `favicon.ico` - Website favicon
- `robots.txt` - Search engine crawling instructions
- `sitemap.xml` - Site structure for search engines
- `images/` - Image assets
- `icons/` - Icon assets
- `fonts/` - Custom font files (if any)

## Usage

Files in this directory are accessible at the root URL of your site. For example:
- `public/logo.png` → `https://yoursite.com/logo.png`
- `public/images/hero.jpg` → `https://yoursite.com/images/hero.jpg`

## Best Practices

1. Use descriptive file names
2. Optimize images before adding them
3. Consider using Next.js Image component for better performance
4. Keep file sizes reasonable for fast loading
