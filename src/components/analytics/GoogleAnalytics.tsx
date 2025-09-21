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

  // Initialize gtag and set default consent (runs once)
  useEffect(() => {
    // Initialize gtag function
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }

    // Set default consent to 'denied' as per Google best practices
    // This applies globally, but can be region-specific if needed
    window.gtag('consent', 'default', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      functionality_storage: 'denied',
      personalization_storage: 'denied',
      security_storage: 'granted',
      // Optional: Add region-specific settings
      // region: ['US-CA', 'US-CO', 'US-CT'] // Example for US state privacy laws
    })

    // Initialize GA4
    window.gtag('js', new Date())
    window.gtag('config', GA_MEASUREMENT_ID, {
      anonymize_ip: true,
      allow_google_signals: false, // Will be updated based on consent
      allow_ad_personalization_signals: false,
    })
  }, []) // Empty dependency array - runs once

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

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
    </>
  )
}