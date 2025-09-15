import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { ConsentProvider } from '@/components/consent/ConsentProvider'
import CookieBanner from '@/components/consent/CookieBanner'
import CookieSettingsModal from '@/components/consent/CookieSettingsModal'
import Footer from '@/components/Footer'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  metadataBase: new URL('https://diabolai.com'),
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
    canonical: 'https://diabolai.com',
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
        {/* Calendly CSS loaded only when widget script is allowed */}
      </head>
      <body className={roboto.className}>
        <ConsentProvider>
          {children}
          <Footer />
          <CookieBanner />
          <CookieSettingsModal />
        </ConsentProvider>
        <SpeedInsights />

      </body>
    </html>
  )
}
