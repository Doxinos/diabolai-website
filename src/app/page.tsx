import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import TryItNow from '@/components/TryItNow'
import ControlAndTrust from '@/components/ControlAndTrust'
import Explanation from '@/components/Explanation'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Benefits />
      <TryItNow />
      <ControlAndTrust />
      <Explanation />
    </main>
  )
}
