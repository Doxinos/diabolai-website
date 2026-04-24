import { Metadata } from 'next'
import AIVoiceClient from './AIVoiceClient'

export const metadata: Metadata = {
  title: 'AI Voice Agents & AI Receptionist — Never Miss a Call | Diabol AI',
  description:
    'AI voice agents and AI receptionist that answer every call in your voice, qualify leads, and book appointments 24/7 — so you capture every caller without adding headcount. Live in weeks. Book a free audit.',
  keywords: 'AI voice agents, AI receptionist, AI phone agents, AI receptionist for small business, AI voice agent for founders, 24/7 call answering, AI appointment booking, AI voice agent agency',
  openGraph: {
    title: 'AI Voice Agents & AI Receptionist — Never Miss a Call | Diabol AI',
    description: 'AI voice agents and AI receptionist services that answer every call 24/7.',
    url: 'https://www.diabolai.com/ai-voice',
    type: 'website',
  },
  alternates: { canonical: 'https://www.diabolai.com/ai-voice' },
}

export default function AIVoicePage() {
  return <AIVoiceClient />
}
