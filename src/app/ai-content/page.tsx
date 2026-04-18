import { Metadata } from 'next'
import AIContentClient from './AIContentClient'

export const metadata: Metadata = {
  title: 'AI Content Engine — Videos, Ads & Posts on Autopilot | Diabol AI',
  description:
    'AI-generated videos, graphics, and ad creatives deployed across every channel automatically. Content that scales without an agency retainer.',
  openGraph: {
    title: 'AI Content Engine — Videos, Ads & Posts on Autopilot | Diabol AI',
    description:
      'AI-generated content deployed across every channel automatically.',
    url: 'https://www.diabolai.com/ai-content',
    type: 'website',
  },
  alternates: { canonical: 'https://www.diabolai.com/ai-content' },
}

export default function AIContentPage() {
  return <AIContentClient />
}
