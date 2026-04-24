import type { Metadata } from 'next'
import FAQClient from './FAQClient'

export const metadata: Metadata = {
  title: 'AI Voice + AI Video — FAQ for Builders | Diabol AI',
  description:
    'Answers about AI voice agents, AI receptionist, AI video and UGC, AI avatars, and what happens after you book an audit. Straight answers for founders who run their business on AI.',
  openGraph: {
    title: 'AI Voice + AI Video — FAQ for Builders | Diabol AI',
    description:
      'Answers about AI voice agents, AI receptionist, AI video, AI UGC, AI avatars, and what happens after you book a call.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.diabolai.com/faq',
  },
}

export default function FAQPage() {
  return <FAQClient />
}
