import { Metadata } from 'next'
import AIAvatarsClient from './AIAvatarsClient'

export const metadata: Metadata = {
  title: 'AI Avatars for Business — Your Digital Twin on Camera | Diabol AI',
  description:
    'AI avatars for business — create a digital twin of yourself that presents, posts, and publishes in any language. Show up on camera daily without being on camera.',
  keywords: 'AI avatars, AI avatar for business, AI avatar generator, AI video avatar, AI digital twin, AI presenter, AI avatar marketing, AI talking head video',
  openGraph: {
    title: 'AI Avatars for Business — Your Digital Twin on Camera | Diabol AI',
    description: 'AI avatars that present, post, and publish in any language — your digital twin on camera, 24/7.',
    url: 'https://www.diabolai.com/ai-avatars',
    type: 'website',
  },
  alternates: { canonical: 'https://www.diabolai.com/ai-avatars' },
}

export default function AIAvatarsPage() {
  return <AIAvatarsClient />
}
