import { Metadata } from 'next'
import AIAvatarsClient from './AIAvatarsClient'

export const metadata: Metadata = {
  title: 'AI Avatars — Your Digital Twin, Everywhere | Diabol AI',
  description:
    'Digital twins that present, post, and publish for you. Maintain your presence across every platform 24/7 without the hours.',
  openGraph: {
    title: 'AI Avatars — Your Digital Twin, Everywhere | Diabol AI',
    description: 'Digital twins that maintain your presence across every platform.',
    url: 'https://www.diabolai.com/ai-avatars',
    type: 'website',
  },
  alternates: { canonical: 'https://www.diabolai.com/ai-avatars' },
}

export default function AIAvatarsPage() {
  return <AIAvatarsClient />
}
