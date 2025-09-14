import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'


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
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body>
        {children}
        <SpeedInsights />

        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>

        {/* ElevenLabs Floating Voice Agent Widget */}
        <div dangerouslySetInnerHTML={{
          __html: '<elevenlabs-convai agent-id="agent_1201k4ydfevsfbmavzyz4j73mcdx"></elevenlabs-convai>'
        }} />

        <script
          src="https://unpkg.com/@elevenlabs/convai-widget-embed"
          type="text/javascript"
          async
        ></script>

      </body>
    </html>
  )
}
