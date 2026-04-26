import { Metadata } from 'next'
import AIUgcClient from './AIUgcClient'

export const metadata: Metadata = {
  title: 'AI UGC Ads — Generate 30 Variants in the Time to Brief One Creator | Diabol',
  description:
    'AI UGC ads for TikTok, Reels, and Meta — generated from a single brief, ready to test the same day. The volume paid social actually needs to find a winner, without hiring creators or scheduling shoots.',
  keywords: 'AI UGC, AI UGC ads, AI UGC video, UGC ads for TikTok, UGC ads for Reels, UGC ads for Meta, AI ad creative, AI video ads, UGC at scale, AI creator persona',
  openGraph: {
    title: 'AI UGC Ads — Generate 30 Variants in the Time to Brief One Creator | Diabol',
    description:
      'AI UGC ads for TikTok, Reels, and Meta — generated from a single brief, ready to test the same day.',
    url: 'https://www.diabolai.com/ai-ugc',
    type: 'website',
  },
  alternates: { canonical: 'https://www.diabolai.com/ai-ugc' },
}

export default function AIUgcPage() {
  return <AIUgcClient />
}
