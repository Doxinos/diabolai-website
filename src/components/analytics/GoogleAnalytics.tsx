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

  useEffect(() => {
    // Initialize gtag function
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }

    // Configure consent mode
    window.gtag('consent', 'default', {
      ad_storage: consent.marketing ? 'granted' : 'denied',
      analytics_storage: consent.analytics ? 'granted' : 'denied',
      functionality_storage: consent.functional ? 'granted' : 'denied',
      personalization_storage: consent.marketing ? 'granted' : 'denied',
      security_storage: 'granted',
    })

    // Initialize GA4
    window.gtag('js', new Date())
    window.gtag('config', GA_MEASUREMENT_ID, {
      anonymize_ip: true,
      allow_google_signals: consent.marketing,
      allow_ad_personalization_signals: consent.marketing,
    })
  }, [consent])

  // Update consent when user changes preferences
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: consent.marketing ? 'granted' : 'denied',
        analytics_storage: consent.analytics ? 'granted' : 'denied',
        functionality_storage: consent.functional ? 'granted' : 'denied',
        personalization_storage: consent.marketing ? 'granted' : 'denied',
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