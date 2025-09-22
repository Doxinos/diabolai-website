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