import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DiabolAI - AI Agents That Scale Your Business Revenue',
  description: 'Get 50% more leads and 80% time savings with custom AI automation. AI agents that work 24/7 to scale your business.',
  keywords: 'AI agents, business automation, lead generation, custom AI, business scaling',
  openGraph: {
    title: 'DiabolAI - AI Agents That Scale Your Business Revenue',
    description: 'Get 50% more leads and 80% time savings with custom AI automation.',
    type: 'website',
    url: 'https://diabolai.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
