import { Metadata } from 'next'
import AIVoiceClient from './AIVoiceClient'

export const metadata: Metadata = {
  title: 'AI Voice Agents & AI Receptionist — Never Miss a Call | Diabol AI',
  description:
    'AI voice agents and AI receptionist services that answer every call, qualify leads, and book appointments 24/7. Deploy in weeks, scale without payroll. Book a free audit.',
  keywords: 'AI voice agents, AI receptionist, AI phone agents, AI call center, AI voice agent for small business, 24/7 call answering, AI appointment booking',
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
