import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import TryItNow from '@/components/TryItNow'
import ControlAndTrust from '@/components/ControlAndTrust'
import Explanation from '@/components/Explanation'
import SocialProof from '@/components/SocialProof'
import ClientLogos from '@/components/ClientLogos'
import ScriptGates from '@/components/ScriptGates'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScriptGates />
      <Navigation />
      <Hero />
      <Benefits />
      <TryItNow />
      <ControlAndTrust />
      <Explanation />
      <SocialProof />
      <ClientLogos />
    </main>
  )
}
