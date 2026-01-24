import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import ScriptGates from '@/components/ScriptGates'

// Dynamically import below-the-fold components
const TryItNow = dynamic(() => import('@/components/TryItNow'), {
  loading: () => <div className="h-96 bg-transparent" />
})

const ControlAndTrust = dynamic(() => import('@/components/ControlAndTrust'), {
  loading: () => <div className="h-96 bg-transparent" />
})

const Explanation = dynamic(() => import('@/components/Explanation'), {
  loading: () => <div className="h-96 bg-transparent" />
})

const QuickFAQ = dynamic(() => import('@/components/QuickFAQ'), {
  loading: () => <div className="h-96 bg-transparent" />
})

const SocialProof = dynamic(() => import('@/components/SocialProof'), {
  loading: () => <div className="h-32 bg-transparent" />
})

const ClientLogos = dynamic(() => import('@/components/ClientLogos'), {
  loading: () => <div className="h-32 bg-transparent" />
})

export const metadata = {
  title: 'AI Voice Agents | Diabol AI',
  description: 'Custom AI voice agents that answer calls, book appointments, and handle customer inquiries 24/7. Sound like your brand, follow your rules.',
}

export default function AIVoicePage() {
  return (
    <main className="min-h-screen">
      <ScriptGates />
      <Navigation />
      <Hero />
      <Benefits />
      <TryItNow />
      <ControlAndTrust />
      <Explanation />
      <QuickFAQ />
      <SocialProof />
      <ClientLogos />
    </main>
  )
}
