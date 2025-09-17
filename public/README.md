# Public Assets for DiabolAI Website

This folder contains all public assets for the DiabolAI website.

## Folder Structure

```
public/
├── images/     # General images, screenshots, backgrounds
├── logos/      # Company logos, brand assets
├── icons/      # UI icons, favicons, small graphics
└── README.md   # This file
```

## Usage

### In Next.js Components
```jsx
// Images
<img src="/images/hero-bg.jpg" alt="Hero Background" />

// Logos
<img src="/logos/diabolai-logo.png" alt="DiabolAI Logo" />

// Icons
<img src="/icons/arrow-right.svg" alt="Arrow Right" />
```

### In CSS/Tailwind
```css
/* Background images */
.hero-section {
  background-image: url('/images/hero-bg.jpg');
}
```

## Asset Guidelines

### Images
- **Formats**: JPG, PNG, WebP, AVIF
- **Optimization**: Compress images before adding
- **Naming**: Use kebab-case (e.g., `hero-background.jpg`)

### Logos
- **Formats**: SVG (preferred), PNG
- **Versions**: Include different sizes and color variants
- **Naming**: Include size/color info (e.g., `logo-white-32px.svg`)

### Icons
- **Formats**: SVG (preferred), PNG
- **Style**: Consistent design system
- **Naming**: Descriptive names (e.g., `arrow-right.svg`)

## Firecrawl Integration

This folder structure works with Firecrawl MCP for:
- **Asset crawling** and optimization
- **SEO image optimization**
- **Automatic image processing**
- **CDN integration** (when deployed)

## Deployment

Assets in this folder will be:
- **Automatically optimized** by Next.js
- **Served from CDN** in production
- **Cached efficiently** for performance

---

*Last updated: January 2025*
