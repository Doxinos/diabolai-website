import { Metadata } from 'next'
import AIContentClient from './AIContentClient'

export const metadata: Metadata = {
  title: 'AI Content Creation — Scale Content in Your Brand Voice | Diabol AI',
  description:
    'AI content creation for growing businesses — blog posts, videos, ads, and social in your brand voice, across every channel. No generic AI output, no agency retainer.',
  keywords: 'AI content creation, AI content generator, AI content for business, AI blog posts, AI video scripts, AI marketing content, AI content agency, brand voice AI',
  openGraph: {
    title: 'AI Content Creation — Scale Content in Your Brand Voice | Diabol AI',
    description:
      'AI content creation in your brand voice, across every channel. No generic AI output, no agency retainer.',
    url: 'https://www.diabolai.com/ai-content',
    type: 'website',
  },
  alternates: { canonical: 'https://www.diabolai.com/ai-content' },
}

export default function AIContentPage() {
  return <AIContentClient />
}
