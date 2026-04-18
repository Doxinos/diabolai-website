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
  title: 'Diabol AI - Strategic AI Consulting for SMBs | Nordics, North America & Europe',
  description: 'Transform your business with strategic AI. From voice automation to full process transformation—we help SMBs diagnose opportunities, redesign workflows, and implement AI that drives real results.',
  keywords: 'AI consulting, AI transformation, business automation, AI voice agents, AI strategy, AI implementation, SMB automation, process automation, AI consulting Sweden, AI consulting Nordics, Diabol AI',
  authors: [{ name: 'Peter Ferm' }],
  creator: 'Diabol AI',
  publisher: 'Diabol AI',
  robots: 'index, follow',
  openGraph: {
    title: 'Diabol AI - Strategic AI Consulting for SMBs',
    description: 'Transform your business with strategic AI. From voice automation to full process transformation—we help SMBs diagnose opportunities, redesign workflows, and implement AI that drives real results.',
    type: 'website',
    url: 'https://www.diabolai.com',
    siteName: 'Diabol AI',
    locale: 'en_US',
    images: [
      {
        url: '/logos/Diabol_Logo_White-01.png',
        width: 1200,
        height: 630,
        alt: 'Diabol AI - Strategic AI Consulting for SMBs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diabol AI - Strategic AI Consulting for SMBs',
    description: 'Transform your business with strategic AI. From voice automation to full process transformation. Serving Nordics, North America & Europe.',
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
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Consulting",
                    "serviceType": "Business Consulting"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Transformation",
                    "serviceType": "Business Consulting"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Business Automation",
                    "serviceType": "Technology Consulting"
                  }
                },
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
                    "name": "AI Implementation",
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
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${inter.className}`}>
        <NoiseOverlay />
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
