import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ConsentProvider } from '@/components/consent/ConsentProvider'
import CookieBanner from '@/components/consent/CookieBanner'
import CookieSettingsModal from '@/components/consent/CookieSettingsModal'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import Footer from '@/components/redesign/Footer'
import NoiseOverlay from '@/components/redesign/NoiseOverlay'
import CalendlyLoader from '@/components/CalendlyLoader'
import VoiceAgentWidget from '@/components/voice/VoiceAgentWidget'
import ExternalResources from '@/components/ExternalResources'
import CriticalCSS from '@/components/CriticalCSS'
import DeferredCSS from '@/components/DeferredCSS'
import LazyMotionProvider from '@/components/LazyMotion'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({
  weight: ['300', '400', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-mono',
})


export const metadata: Metadata = {
  metadataBase: new URL('https://www.diabolai.com'),
  title: 'Diabol AI | AI Voice + AI Video for Builders',
  description: 'AI voice agents that answer every call 24/7, AI video and UGC ads that show up without a camera crew, AI avatars of you on camera in any language. For founders scaling presence and operations without scaling headcount. Based in Stockholm.',
  keywords: 'AI voice agents, AI receptionist, AI video, AI content creation, AI UGC, AI UGC ads, AI avatars, AI avatar for business, AI video agency, AI agency, Diabol AI, AI agency Stockholm',
  authors: [{ name: 'Peter Ferm' }],
  creator: 'Diabol AI',
  publisher: 'Diabol AI',
  robots: 'index, follow',
  openGraph: {
    title: 'Diabol AI | AI Voice + AI Video for Builders',
    description: 'AI voice agents that answer every call 24/7, AI video and UGC ads that show up without a camera crew, AI avatars of you on camera in any language. For founders scaling presence without scaling headcount.',
    type: 'website',
    url: 'https://www.diabolai.com',
    siteName: 'Diabol AI',
    locale: 'en_US',
    images: [
      {
        url: '/logos/Diabol_Logo_White-01.png',
        width: 1200,
        height: 630,
        alt: 'Diabol AI — AI Voice + AI Video for Builders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diabol AI | AI Voice + AI Video for Builders',
    description: 'AI voice agents and AI video for founders who want to show up everywhere without cloning themselves. Based in Stockholm.',
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
              "url": "https://www.diabolai.com/",
              "logo": "https://www.diabolai.com/logos/diabol-logo-black.png",
              "description": "AI voice agents and AI video for Builders — founders and operators running their businesses on AI instead of adding headcount. We build phone agents that answer every call 24/7, AI video and UGC ads that show up everywhere, and AI avatars that put founders on camera in any language. Based in Stockholm, serving Nordics, North America, and Europe.",
              "founder": {
                "@type": "Person",
                "name": "Peter Ferm",
                "jobTitle": "Founder & CEO"
              },
              "knowsAbout": [
                "AI voice agents",
                "AI receptionist",
                "AI video",
                "AI content creation",
                "AI UGC",
                "AI UGC ads",
                "AI avatars",
                "AI avatar for business",
                "AI video agency",
                "AI agency",
                "AI automation"
              ],
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Voice Agents",
                    "serviceType": "Technology Solution"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Receptionist",
                    "serviceType": "Technology Solution"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Video",
                    "serviceType": "Technology Solution"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI UGC Ads",
                    "serviceType": "Technology Solution"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Avatars",
                    "serviceType": "Technology Solution"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Automation",
                    "serviceType": "Technology Consulting"
                  }
                }
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
                "streetAddress": "Jungfrugatan 5",
                "addressLocality": "Stockholm",
                "postalCode": "114 44",
                "addressCountry": "SE"
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
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${inter.className}`}>
        <NoiseOverlay />
        <LanguageProvider>
          <LazyMotionProvider>
            <ConsentProvider>
              <DeferredCSS />
              <GoogleAnalytics />
              <CalendlyLoader />
              <VoiceAgentWidget />
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
