'use client'

import Navbar from '@/components/redesign/Navbar'
import Hero from '@/components/redesign/Hero'
import Features from '@/components/redesign/Features'
import FlipStrip from '@/components/redesign/FlipStrip'
import Philosophy from '@/components/redesign/Philosophy'
import SystemStack from '@/components/redesign/SystemStack'
import Pricing from '@/components/redesign/Pricing'
import Testimonials from '@/components/redesign/Testimonials'
import ClientLogos from '@/components/redesign/ClientLogos'
import HomeFAQ from '@/components/redesign/HomeFAQ'
import FinalCTA from '@/components/redesign/FinalCTA'

export default function HomeClient() {
  return (
    <main className="relative w-full selection:bg-[#FF4F30] selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <FlipStrip />
      <Philosophy />
      <SystemStack />
      <Pricing />
      <Testimonials />
      <ClientLogos />
      <HomeFAQ />
      <FinalCTA />
    </main>
  )
}
