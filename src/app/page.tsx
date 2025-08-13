import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ProblemStatement from '@/components/ProblemStatement'
import SolutionOverview from '@/components/SolutionOverview'
import SocialProof from '@/components/SocialProof'
import HowItWorks from '@/components/HowItWorks'
import AllServices from '@/components/AllServices'
import TechStack from '@/components/TechStack'
import ClientLogos from '@/components/ClientLogos'
import FinalCTA from '@/components/FinalCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProblemStatement />
      <SolutionOverview />
      <SocialProof />
      <HowItWorks />
      <AllServices />
      <TechStack />
      <ClientLogos />
      <FinalCTA />
    </main>
  )
}
