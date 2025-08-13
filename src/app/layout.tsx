import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://diabolai.com'),
  title: 'DiabolAI - AI Voice Agents That Transform Business | Book, Qualify & Follow Up Automatically',
  description: 'AI voice agents that book meetings, qualify leads, and follow up automatically. Transform your business with AI phone agents that work 24/7. Enterprise-grade reliability from team that delivered to Spotify, Klarna, PayPal.',
  keywords: 'AI voice agents, AI phone agents, automated booking, lead qualification, AI customer service, voice AI, AI phone calls, automated sales calls, DiabolAI, AI receptionist',
  authors: [{ name: 'DiabolAI' }],
  creator: 'DiabolAI',
  publisher: 'DiabolAI',
  robots: 'index, follow',
  openGraph: {
    title: 'DiabolAI - AI Voice Agents That Transform Business',
    description: 'AI voice agents that book meetings, qualify leads, and follow up automatically. Enterprise-grade reliability from former Spotify, Klarna team.',
    type: 'website',
    url: 'https://diabolai.com',
    siteName: 'DiabolAI',
    locale: 'en_US',
    images: [
      {
        url: '/logos/Diabol_Logo_White-01.png',
        width: 1200,
        height: 630,
        alt: 'DiabolAI - AI Voice Agents That Transform Business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DiabolAI - AI Voice Agents That Transform Business',
    description: 'AI voice agents that book meetings, qualify leads, and follow up automatically.',
    images: ['/logos/Diabol_Logo_White-01.png'],
    creator: '@DiabolAI',
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
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />

        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>

      </body>
    </html>
  )
}
