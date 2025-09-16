# SEO Guidelines - DiabolAI Website

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
- ✅ `diabol-soundwave.svg`
- ✅ `diabol-logo.png`
- **When to use:** Include "diabol" in lowercase when it clarifies ownership or brand context

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

**✅ Describe content/purpose:**
```html
<img src="diabol-voice-agent-demo.webp" alt="AI voice agent booking meeting automatically via phone call" />
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

## Current Asset Audit

### Files That Need Renaming:
1. `soundwave_ai_voic_Cerise_blue.mp4` → `diabol-soundwave-animation.webm`
2. `King_logo_v1.png` → `client-logo-king.svg`
3. `lansforsakringar-logotyp.png` → `client-logo-lansforsakringar.svg`
4. `Tele2_logo-no-margin.png` → `client-logo-tele2.svg`

### Optimization Recommendations:
1. **Convert large images to WebP/AVIF**
2. **Optimize video file sizes** (current soundwave video is 11MB)
3. **Add descriptive alt text** to all images
4. **Use SVG for logos** where possible

## Implementation Checklist

- [ ] Rename existing assets following guidelines
- [ ] Convert images to modern formats (WebP/AVIF)
- [ ] Add comprehensive alt text
- [ ] Optimize video file sizes
- [ ] Update all file references in components
- [ ] Test loading performance
- [ ] Validate SEO improvements

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