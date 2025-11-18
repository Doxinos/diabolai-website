'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { useConsent } from '../consent/ConsentProvider'

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

const GA_MEASUREMENT_ID = 'G-W971B3WD3H'

export default function GoogleAnalytics() {
  const { consent } = useConsent()

  // Initialize gtag function only (don't set config until script loads)
  useEffect(() => {
    // Initialize gtag function
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }

    // Set region-specific default consent
    // Strict privacy for EEA, GDPR regions
    window.gtag('consent', 'default', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      functionality_storage: 'denied',
      personalization_storage: 'denied',
      security_storage: 'granted',
      region: ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IS', 'IE', 'IT', 'LV', 'LI', 'LT', 'LU', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB', 'US-CA', 'US-CO', 'US-CT', 'US-UT', 'US-VA']
    })

    // Less restrictive for other regions (still respects user consent banner)
    window.gtag('consent', 'default', {
      ad_storage: 'granted',
      analytics_storage: 'granted', 
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      functionality_storage: 'granted',
      personalization_storage: 'granted',
      security_storage: 'granted'
    })
  }, []) // Empty dependency array - runs once

  // Track AI referrers
  useEffect(() => {
    if (typeof window !== 'undefined' && consent.analytics) {
      const referrer = document.referrer.toLowerCase()
      const aiReferrers = {
        'chatgpt.com': 'ChatGPT',
        'chat.openai.com': 'ChatGPT',
        'perplexity.ai': 'Perplexity',
        'claude.ai': 'Claude',
        'gemini.google.com': 'Gemini',
        'bard.google.com': 'Gemini',
        'bing.com/chat': 'Bing Chat',
        'you.com': 'You.com',
        'phind.com': 'Phind'
      }

      // Check if referrer matches any AI platform
      const aiSource = Object.entries(aiReferrers).find(([domain]) =>
        referrer.includes(domain)
      )?.[1]

      if (aiSource && typeof window.gtag === 'function') {
        window.gtag('event', 'ai_referral', {
          ai_platform: aiSource,
          referrer_url: document.referrer,
          page_path: window.location.pathname
        })
      }
    }
  }, [consent.analytics])

  // Update consent when user changes preferences
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: consent.marketing ? 'granted' : 'denied',
        analytics_storage: consent.analytics ? 'granted' : 'denied',
        ad_user_data: consent.marketing ? 'granted' : 'denied',
        ad_personalization: consent.marketing ? 'granted' : 'denied',
        functionality_storage: consent.functional ? 'granted' : 'denied',
        personalization_storage: consent.marketing ? 'granted' : 'denied',
      })

      // Update GA4 config based on consent
      window.gtag('config', GA_MEASUREMENT_ID, {
        anonymize_ip: true,
        allow_google_signals: consent.marketing,
        allow_ad_personalization_signals: consent.marketing,
      })
    }
  }, [consent])

  // Only load GTM script if analytics consent is given
  if (!consent.analytics) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
        onLoad={() => {
          // Initialize after script loads
          window.gtag('js', new Date())
          window.gtag('config', GA_MEASUREMENT_ID, {
            anonymize_ip: true,
            allow_google_signals: consent.marketing,
            allow_ad_personalization_signals: consent.marketing,
            send_page_view: true,
          })
        }}
      />
    </>
  )
}