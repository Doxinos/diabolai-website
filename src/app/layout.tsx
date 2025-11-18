import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { ConsentProvider } from '@/components/consent/ConsentProvider'
import CookieBanner from '@/components/consent/CookieBanner'
import CookieSettingsModal from '@/components/consent/CookieSettingsModal'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import Footer from '@/components/Footer'
import CalendlyLoader from '@/components/CalendlyLoader'
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration'
import ExternalResources from '@/components/ExternalResources'
import CriticalCSS from '@/components/CriticalCSS'
import DeferredCSS from '@/components/DeferredCSS'
import LazyMotionProvider from '@/components/LazyMotion'
import { LanguageProvider } from '@/contexts/LanguageContext'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})


export const metadata: Metadata = {
  metadataBase: new URL('https://www.diabolai.com'),
  title: 'diabol - AI Voice Agents That Transform Business | 24/7 Automated Booking & Lead Qualification',
  description: 'AI voice agents that work 24/7 to book meetings, qualify leads, and follow up automatically. Perfect consistency, instant responses, and significant cost reduction. Try our live demo now and hear the difference.',
  keywords: 'AI voice agents, AI phone agents, automated booking, lead qualification, 24/7 AI customer service, voice AI, AI phone calls, automated sales calls, diabol, AI receptionist, AI automation, voice chatbot, conversational AI, AI call center',
  authors: [{ name: 'diabol' }],
  creator: 'diabol',
  publisher: 'diabol',
  robots: 'index, follow',
  openGraph: {
    title: 'diabol - AI Voice Agents That Transform Business',
    description: 'AI voice agents that work 24/7 to book meetings, qualify leads, and follow up automatically. Perfect consistency, instant responses, and significant cost reduction.',
    type: 'website',
    url: 'https://diabolai.com',
    siteName: 'diabol',
    locale: 'en_US',
    images: [
      {
        url: '/logos/Diabol_Logo_White-01.png',
        width: 1200,
        height: 630,
        alt: 'diabol - AI Voice Agents That Transform Business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'diabol - AI Voice Agents That Transform Business',
    description: 'AI voice agents that work 24/7 to book meetings, qualify leads, and follow up automatically. Try our live demo now.',
    images: ['/logos/Diabol_Logo_White-01.png'],
    creator: '@diabol',
  },
  alternates: {
    canonical: 'https://www.diabolai.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <CriticalCSS />
        <ExternalResources />
        
        {/* Organization Structured Data - Updated for AI Visibility */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "legalName": "Diabol AB",
              "name": "Diabol AI",
              "alternateName": ["DiabolAI", "diabol"],
              "url": "https://diabolai.com/",
              "logo": "https://diabolai.com/logos/diabol-logo-black.png",
              "description": "AI consulting and transformation for SMBs. We help overwhelmed business owners diagnose opportunities, redesign processes, and implement AI strategically - from voice agents to full automation. Serving Nordics, North America, and Europe.",
              "founder": {
                "@type": "Person",
                "name": "Peter Ferm",
                "jobTitle": "Founder & CEO"
              },
              "knowsAbout": [
                "AI consulting",
                "AI transformation",
                "SMB automation",
                "AI voice agents",
                "Business process automation",
                "AI strategy",
                "AI implementation"
              ],
              "serviceType": [
                "AI Consulting",
                "AI Transformation",
                "Business Automation",
                "AI Voice Agents",
                "AI Implementation"
              ],
              "areaServed": [
                { "@type": "Country", "name": "SE" },
                { "@type": "Country", "name": "US" },
                { "@type": "Country", "name": "NO" },
                { "@type": "Country", "name": "DK" },
                { "@type": "Country", "name": "FI" }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": {
                  "@type": "Country",
                  "name": "SE"
                }
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "contact@diabolai.com",
                "contactType": "customer service",
                "availableLanguage": ["English", "Swedish"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/diabol-ab",
                "https://blog.diabolai.com"
              ]
            })
          }}
        />
      </head>
      <body className={roboto.className}>
        <LanguageProvider>
          <LazyMotionProvider>
            <ConsentProvider>
              <DeferredCSS />
              <GoogleAnalytics />
              <CalendlyLoader />
              {children}
              <Footer />
              <CookieBanner />
              <CookieSettingsModal />
            </ConsentProvider>
          </LazyMotionProvider>
        </LanguageProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
