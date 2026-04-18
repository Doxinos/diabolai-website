import { Metadata } from 'next'
import AIVoiceClient from './AIVoiceClient'

export const metadata: Metadata = {
  title: 'AI Voice Agents — Never Miss a Call Again | Diabol AI',
  description:
    'AI-powered voice agents that answer every call, qualify leads, and book appointments 24/7. Live in 3 weeks. Book a free consultation.',
  openGraph: {
    title: 'AI Voice Agents — Never Miss a Call Again | Diabol AI',
    description: 'AI-powered voice agents that answer every call 24/7.',
    url: 'https://www.diabolai.com/ai-voice',
    type: 'website',
  },
  alternates: { canonical: 'https://www.diabolai.com/ai-voice' },
}

export default function AIVoicePage() {
  return <AIVoiceClient />
}
