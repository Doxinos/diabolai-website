import { Metadata } from 'next'
import AIContentClient from './AIContentClient'

export const metadata: Metadata = {
  title: 'AI Video for Builders — Content that sounds like you, video that shows up without you. | Diabol',
  description:
    'AI video that puts you in front of your market every day — without a camera crew. Volume video and UGC ads, AI avatars of you on camera, and hero commercials. For founders scaling presence without scaling headcount.',
  keywords: 'AI content creation, AI video, AI UGC, AI UGC ads, AI video agency, AI avatars, AI avatar for business, AI content for founders, AI marketing video, AI content agency',
  openGraph: {
    title: 'AI Video for Builders — Content that sounds like you, video that shows up without you. | Diabol',
    description:
      'AI video that puts you in front of your market every day — without a camera crew. Volume video, UGC ads, AI avatars, and hero commercials.',
    url: 'https://www.diabolai.com/ai-content',
    type: 'website',
  },
  alternates: { canonical: 'https://www.diabolai.com/ai-content' },
}

export default function AIContentPage() {
  return <AIContentClient />
}
