import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Cred from '@/components/Cred'
import WhatWeDo from '@/components/WhatWeDo'
import HowItWorks from '@/components/HowItWorks'
import WhyUs from '@/components/WhyUs'
import TechStack from '@/components/TechStack'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Cred />
      <WhatWeDo />
      <HowItWorks />
      <WhyUs />
      <TechStack />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
