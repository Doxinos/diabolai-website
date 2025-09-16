# SEO Guidelines - DiabolAI Website

## Brand Consistency Rules

### **Brand Name Usage:**
- **Use "diabol" as the brand everywhere** (lowercase in copy, headings, alt text, metadata)
- **Use "diabolai.com" as the primary domain** (don't put "diabolai" in filenames/text)
- **Reserve "diabolai" for URLs, email, or explicit domain references**

**✅ Correct Brand Usage:**
- Copy: "diabol provides AI voice agents..."
- Headings: "diabol – AI Voice Agents"
- Meta titles: "diabol – AI voice agents for Nordic businesses"
- Alt text: "diabol logo in black on white background"

**❌ Incorrect Usage:**
- Copy: "DiabolAI provides..." or "Diabol provides..."
- Filenames: `diabolai-logo.png` (use `diabol-logo.png`)
- Meta titles: "DiabolAI – AI voice agents..." (use "diabol")

### **Domain Usage:**
- **Primary domain:** diabolai.com
- **Canonical URLs:** Always point to https://diabolai.com
- **Email references:** contact@diabolai.com
- **Explicit domain mentions:** "Visit diabolai.com for more info"

## Asset Naming Best Practices

### File Naming Rules

**✅ Use hyphens, not underscores:**
- ✅ `soundwave-ai.png`
- ❌ `soundwave_ai.png`
- **Why:** Search engines treat hyphens as word separators; underscores act like joiners

**✅ Keep lowercase, concise, and descriptive:**
- ✅ `voice-agent-demo.webm`
- ✅ `booking-widget-screenshot.png`
- ❌ `VoiceAgentDemo.webm`
- ❌ `Screenshot_2024_01_15_booking_widget_v2_final.png`

**✅ Include key terms only when relevant:**
- ✅ `ai-voice-agent-booking.jpg`
- ❌ `ai-voice-agent-booking-diabol-seo-keywords.jpg` (keyword stuffing)

**✅ Brand-specific assets:**
- ✅ `diabol-logo-black.png`
- ✅ `diabol-soundwave.svg`
- **When to use:** Include "diabol" only for brand assets (logos, brand materials)
- **Don't use:** `diabol-` for generic images like `voice-agent-demo.webp`

### Modern File Formats (Preferred)

**Images:**
- ✅ `.webp` - Modern, smaller file sizes
- ✅ `.avif` - Next-gen format, excellent compression
- ✅ `.jpg` - Fallback for compatibility
- ❌ `.png` - Only for transparency needs

**Vectors:**
- ✅ `.svg` - Scalable, SEO-friendly
- ❌ `.ai`, `.eps` - Not web-optimized

**Videos:**
- ✅ `.webm` - Modern, efficient
- ✅ `.mp4` - Universal compatibility
- ❌ `.avi`, `.mov` - Too large for web

### Alt Text Best Practices

**✅ Describe image and primary keyword intent:**
```html
<img src="voice-agent-demo.webp" alt="AI voice agent automatically booking meeting via phone call demonstration" />
```

**✅ Include "diabol" only for brand/logo images:**
```html
<img src="diabol-logo-black.png" alt="diabol logo in black lettering" />
<img src="diabol-team-photo.webp" alt="diabol team working on AI automation solutions" />
```

**✅ Generic images without "diabol":**
```html
<img src="soundwave-animation.webp" alt="Voice waveform visualization during AI phone call" />
<img src="booking-interface.webp" alt="Calendar booking interface showing available time slots" />
```

**✅ Use empty alt for decorative images:**
```html
<img src="decorative-pattern.svg" alt="" />
```

**❌ Avoid keyword stuffing:**
```html
<!-- Don't do this -->
<img src="ai-voice.jpg" alt="AI voice agent AI automation AI booking AI voice AI diabol" />
```

### Naming Convention Examples

**Hero Section:**
- `hero-ai-voice-agent.webp`
- `diabol-hero-video.webm`

**Features:**
- `feature-automated-booking.webp`
- `feature-voice-analytics.jpg`

**Testimonials:**
- `testimonial-stefan-berg.webp`
- `client-logo-spotify.svg`

**Technical Assets:**
- `soundwave-animation.webm`
- `voice-widget-interface.png`

### Character Restrictions

**❌ Avoid these characters:**
- Spaces: `voice agent.jpg` → `voice-agent.jpg`
- Special chars: `voice@agent!.jpg` → `voice-agent.jpg`
- Very long names: `extremely-long-descriptive-filename-with-too-many-words.jpg` → `voice-agent-demo.jpg`

**✅ Allowed characters:**
- Lowercase letters: a-z
- Numbers: 0-9
- Hyphens: -
- Dots: . (for file extensions only)

## Technical SEO Requirements

### **Meta Titles & Descriptions:**
```html
<!-- ✅ Correct -->
<title>diabol – AI voice agents for Nordic businesses</title>
<meta name="description" content="diabol provides 24/7 AI voice agents that book meetings, qualify leads, and follow up automatically. Transform your Nordic business with intelligent automation." />

<!-- ❌ Incorrect -->
<title>DiabolAI – AI voice agents for Nordic businesses</title>
<title>diabolai – AI voice agents for Nordic businesses</title>
```

### **Canonical URLs:**
```html
<!-- Always point to diabolai.com -->
<link rel="canonical" href="https://diabolai.com/" />
<link rel="canonical" href="https://diabolai.com/about" />
```

### **Structured Data (Organization Schema):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "legalName": "Diabol AB",
  "name": "diabol",
  "url": "https://diabolai.com",
  "logo": "https://diabolai.com/logos/diabol-logo-black.png",
  "description": "AI voice agents for Nordic businesses - automated booking, lead qualification, and follow-up",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "SE"
  },
  "sameAs": [
    "https://linkedin.com/company/diabol",
    "https://twitter.com/diabol"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contact@diabolai.com",
    "contactType": "customer service"
  }
}
```

### **OpenGraph Meta Tags:**
```html
<meta property="og:site_name" content="diabol" />
<meta property="og:title" content="diabol – AI voice agents for Nordic businesses" />
<meta property="og:url" content="https://diabolai.com/" />
<meta property="og:image" content="https://diabolai.com/images/diabol-og-image.webp" />
```

## Current Asset Audit

### Files That Need Renaming:
1. `soundwave_ai_voic_Cerise_blue.mp4` → `soundwave-animation.webm` (generic, not brand)
2. `King_logo_v1.png` → `client-logo-king.svg`
3. `lansforsakringar-logotyp.png` → `client-logo-lansforsakringar.svg`
4. `Tele2_logo-no-margin.png` → `client-logo-tele2.svg`
5. Any brand logos → `diabol-logo-[variant].png` (e.g., `diabol-logo-white.png`)

### Optimization Recommendations:
1. **Convert large images to WebP/AVIF**
2. **Optimize video file sizes** (current soundwave video is 11MB)
3. **Add descriptive alt text** to all images
4. **Use SVG for logos** where possible

## Implementation Checklist

### **Brand Consistency:**
- [ ] Update all copy to use "diabol" (lowercase)
- [ ] Update meta titles to use "diabol" not "DiabolAI"
- [ ] Review headings for consistent "diabol" usage
- [ ] Update alt text to use "diabol" only for brand images

### **Technical SEO:**
- [ ] Set canonical URLs to diabolai.com
- [ ] Implement Organization structured data
- [ ] Add proper OpenGraph meta tags
- [ ] Update meta descriptions with "diabol" branding

### **Asset Optimization:**
- [ ] Rename existing assets following guidelines
- [ ] Convert images to modern formats (WebP/AVIF)
- [ ] Add comprehensive alt text with proper "diabol" usage
- [ ] Optimize video file sizes
- [ ] Update all file references in components

### **Validation:**
- [ ] Test structured data with Google's Rich Results Test
- [ ] Verify canonical URLs are working
- [ ] Check meta tags with social media debuggers
- [ ] Test loading performance
- [ ] Validate brand consistency across all pages

## SEO Impact

**Benefits of proper asset naming:**
- Improved image search ranking
- Better accessibility scores
- Faster page loading (modern formats)
- Enhanced user experience
- Better crawlability by search engines

**Expected improvements:**
- 20-30% better image search visibility
- 15-25% faster page load times
- Improved Google PageSpeed scores
- Better accessibility compliance