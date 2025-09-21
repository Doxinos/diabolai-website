// GA4 Analytics utility functions

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

// Conversion Events
export const trackConversion = (conversionType: 'schedule_click' | 'contact_click' | 'pricing_click', source?: string) => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    source: source || 'unknown',
    value: conversionType === 'schedule_click' ? 100 : 50, // Assign values for different conversions
  })
}

export const trackGenerateLead = (leadSource: string, leadType?: string) => {
  trackEvent('generate_lead', {
    lead_source: leadSource,
    lead_type: leadType || 'unknown',
    value: 200, // High value for lead generation
  })
}

export const trackScheduleClick = (source: string) => {
  trackEvent('schedule_click', {
    source,
    event_category: 'engagement',
    event_label: 'calendly_open',
  })
  trackConversion('schedule_click', source)
}

export const trackCTAClick = (ctaType: string, source: string, destination?: string) => {
  trackEvent('cta_click', {
    cta_type: ctaType,
    source,
    destination: destination || 'unknown',
    event_category: 'engagement',
  })
}

export const trackFAQInteraction = (action: 'expand' | 'close', questionId: string, industry?: string) => {
  trackEvent('faq_expand', {
    faq_question: questionId,
    action,
    industry: industry || 'general',
    event_category: 'engagement',
  })
}

export const trackPageView = (pageTitle: string, pagePath: string) => {
  trackEvent('page_view', {
    page_title: pageTitle,
    page_location: window.location.href,
    page_path: pagePath,
  })
}

// Voice Agent Demo Events
export const trackVoiceDemoStart = (demoType: string) => {
  trackEvent('voice_demo_start', {
    demo_type: demoType,
    event_category: 'engagement',
    value: 75,
  })
}

export const trackVoiceDemoComplete = (demoType: string, duration?: number) => {
  trackEvent('voice_demo_complete', {
    demo_type: demoType,
    duration_seconds: duration,
    event_category: 'engagement',
    value: 150,
  })
  trackGenerateLead('voice_demo', demoType)
}