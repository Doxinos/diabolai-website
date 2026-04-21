import type { Metadata } from 'next'
import FAQClient from './FAQClient'

export const metadata: Metadata = {
  title: 'AI Voice Agents, Content & Avatars — FAQ | Diabol AI',
  description:
    'Answers to 25+ common questions about AI voice agents, AI content automation, AI avatars, and implementation for growing businesses. Straight answers, no fluff.',
  openGraph: {
    title: 'AI Voice Agents, Content & Avatars — FAQ | Diabol AI',
    description:
      'Answers to 25+ common questions about AI voice agents, AI content automation, AI avatars, and what happens after you book a call.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.diabolai.com/faq',
  },
}

export default function FAQPage() {
  return <FAQClient />
}
