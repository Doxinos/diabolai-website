# Technical Specification: Diabolai.com Landing Page

## Project Overview

### Technology Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Analytics**: Google Analytics 4
- **Forms**: React Hook Form + EmailJS
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Performance Requirements
- **Page Load Speed**: <3 seconds
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Mobile-First**: Responsive design
- **SEO Optimized**: Meta tags, structured data

## Page Structure

### 1. Hero Section
```jsx
// Components/Hero.jsx
- Headline: "AI Agents That Scale Your Business Revenue"
- Subheadline: "Get 50% more leads and 80% time savings with custom AI automation"
- Primary CTA: "Book Free Demo" (button)
- Background: Gradient or hero image
- Animation: Fade-in on load
```

### 2. Problem Statement Section
```jsx
// Components/ProblemStatement.jsx
- Headline: "Are You Spending Too Much Time on Repetitive Tasks?"
- 4 pain points with icons:
  - Manual lead generation
  - Slow response times
  - Scaling challenges
  - Inconsistent follow-up
- Layout: Grid or cards
```

### 3. Solution Overview Section
```jsx
// Components/SolutionOverview.jsx
- Headline: "Custom AI Agents That Work 24/7"
- 4 key benefits with icons:
  - Automated lead generation
  - Instant response
  - Seamless integration
  - Scalable without hiring
- Layout: Feature cards
```

### 4. Social Proof Section
```jsx
// Components/SocialProof.jsx
- Headline: "Trusted by Growing Businesses"
- Customer logos grid (6-8 logos)
- 2-3 testimonials with photos
- Metrics: "500+ leads generated", "80% time savings"
- Layout: Logo grid + testimonial cards
```

### 5. How It Works Section
```jsx
// Components/HowItWorks.jsx
- Headline: "Get Started in 3 Simple Steps"
- Step 1: "We analyze your needs" (30-minute consultation)
- Step 2: "Build custom AI agents" (7-day development)
- Step 3: "Launch and scale" (Ongoing optimization)
- Layout: Timeline or process flow
```

### 6. Final CTA Section
```jsx
// Components/FinalCTA.jsx
- Headline: "Ready to Scale Your Business with AI?"
- Subheadline: "Join 50+ businesses already using our AI agents"
- Primary CTA: "Start Your Free Demo"
- Secondary CTA: "Download Case Study"
- Layout: Centered with urgency elements
```

## Technical Implementation

### File Structure
```
src/
├── app/
│   ├── layout.jsx
│   ├── page.jsx
│   └── globals.css
├── components/
│   ├── Hero.jsx
│   ├── ProblemStatement.jsx
│   ├── SolutionOverview.jsx
│   ├── SocialProof.jsx
│   ├── HowItWorks.jsx
│   ├── FinalCTA.jsx
│   ├── ContactForm.jsx
│   └── Navigation.jsx
├── lib/
│   ├── analytics.js
│   └── email.js
└── styles/
    └── tailwind.css
```

### Styling Guidelines (Inly.se Inspired)
```css
/* Color Palette - Minimalist Professional */
--primary: #000000 (black)
--secondary: #ffffff (white)
--accent: #000000 (black for CTAs)
--text-primary: #1a1a1a (dark gray)
--text-secondary: #666666 (medium gray)
--background: #ffffff (pure white)

/* Typography - Clean and Professional */
--font-primary: Inter, system-ui, sans-serif
--font-heading: Inter, system-ui, sans-serif
--font-weight-regular: 400
--font-weight-semibold: 600
--font-weight-bold: 700

/* Spacing - Generous and Clean */
--section-padding: 80px (desktop), 40px (mobile)
--container-max-width: 1200px
--grid-gap: 32px
--text-spacing: 1.5 (line-height)
```

### Component Examples

#### Hero Component (Inly.se Inspired)
```jsx
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight"
        >
          AI Agents That Scale Your Business Revenue
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Get 50% more leads and 80% time savings with custom AI automation
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-black hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors"
        >
          Book Free Demo
        </motion.button>
      </div>
    </section>
  );
}
```

#### Contact Form Component
```jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // EmailJS or form submission logic
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <div className="mb-4">
        <input
          {...register("name", { required: true })}
          placeholder="Your Name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
      </div>

      <div className="mb-4">
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Your Email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
      </div>

      <div className="mb-6">
        <input
          {...register("company")}
          placeholder="Company Name (Optional)"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Book Free Demo'}
      </button>
    </form>
  );
}
```

## SEO Implementation

### Meta Tags
```jsx
// app/layout.jsx
export const metadata = {
  title: 'Diabolai.com - AI Agents That Scale Your Business Revenue',
  description: 'Get 50% more leads and 80% time savings with custom AI automation. Book your free demo today.',
  keywords: 'AI agents, business automation, lead generation, automation services, AI automation, lead generation automation',
  openGraph: {
    title: 'Diabolai.com - AI Agents That Scale Your Business Revenue',
    description: 'Get 50% more leads and 80% time savings with custom AI automation.',
    type: 'website',
    locale: 'en_US',
  },
};
```

### Structured Data
```jsx
// components/StructuredData.jsx
export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Diabolai.com",
    "description": "AI automation services for global business growth",
    "url": "https://diabolai.com",
    "logo": "https://diabolai.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
```

## Analytics Setup

### Google Analytics
```jsx
// lib/analytics.js
export const GA_TRACKING_ID = 'G-XXXXXXXXXX';

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
```

### Conversion Tracking
```jsx
// Track form submissions
const trackFormSubmission = () => {
  event({
    action: 'form_submit',
    category: 'engagement',
    label: 'demo_booking',
  });
};
```

## Performance Optimization

### Image Optimization
```jsx
import Image from 'next/image';

// Use Next.js Image component for optimization
<Image
  src="/hero-image.jpg"
  alt="AI automation interface"
  width={800}
  height={600}
  priority
  className="rounded-lg"
/>
```

### Code Splitting
```jsx
// Lazy load non-critical components
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('../components/ContactForm'), {
  loading: () => <div>Loading...</div>,
  ssr: false
});
```

## Deployment Configuration

### Vercel Configuration
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "env": {
    "NEXT_PUBLIC_GA_ID": "G-XXXXXXXXXX",
    "EMAILJS_PUBLIC_KEY": "your-emailjs-key"
  }
}
```

### Environment Variables
```env
# .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
EMAILJS_PUBLIC_KEY=your-emailjs-key
EMAILJS_SERVICE_ID=your-service-id
EMAILJS_TEMPLATE_ID=your-template-id
```

## Testing Checklist

### Performance Testing
- [ ] Lighthouse score 90+
- [ ] Page load time <3 seconds
- [ ] Mobile responsiveness
- [ ] Core Web Vitals optimization

### Functionality Testing
- [ ] Contact form submission
- [ ] Email integration
- [ ] Analytics tracking
- [ ] Mobile navigation
- [ ] Cross-browser compatibility

### SEO Testing
- [ ] Meta tags implementation
- [ ] Structured data validation
- [ ] Sitemap generation
- [ ] Robots.txt configuration

## Assets Required

### Images
- Logo (SVG preferred)
- Hero background image
- Team photos (if available)
- Client logos (if available)
- Icons for features and benefits

### Content
- English copy for global market
- Real testimonials from international clients
- Case study content with global examples
- Contact information with international support

### Technical
- Google Analytics ID
- Email service credentials
- Domain and hosting setup

## Next Steps

1. **Setup Project**: Initialize Next.js with Tailwind CSS
2. **Create Components**: Build all sections as reusable components
3. **Add Content**: Implement Swedish market copy and assets
4. **Integrate Analytics**: Setup Google Analytics and conversion tracking
5. **Deploy**: Deploy to Vercel and configure domain
6. **Test**: Performance and functionality testing
7. **Optimize**: A/B testing and conversion optimization

---

**Document Version**: 1.0
**Last Updated**: [Current Date]
**Next Review**: [Date + 1 week]
