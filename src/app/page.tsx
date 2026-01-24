'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Zap, Video, CheckCircle2 } from 'lucide-react'
import Navigation from '@/components/Navigation'
import ScriptGates from '@/components/ScriptGates'

export default function Home() {
  const handleBookDemo = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/peter-diabol/30min'
      })
    }
  }

  return (
    <main className="min-h-screen bg-black">
      <ScriptGates />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="container-max px-6 md:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50 mb-6">
              AI Strategy & Implementation
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-8">
              Think Before You Build
            </h1>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-12">
              Most AI projects fail because they start with technology, not strategy.
              We help growth-focused businesses implement AI that actually works—voice agents,
              automation, and content systems built on 20 years of enterprise experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBookDemo}
                className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
              >
                Book a Strategy Call
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                href="/services"
                className="btn-secondary inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
      </section>

      {/* What We Build Section */}
      <section className="py-24 md:py-32 bg-black border-t border-white/10">
        <div className="container-max px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What We Build
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Three services, one goal: expand your capacity without burning out your team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Voice Agents */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl hover-lift"
            >
              <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6">
                <Phone className="w-7 h-7 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Voice Agents</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Answer every call, 24/7. Qualify leads, book appointments, and handle inquiries—
                while your team focuses on high-value work.
              </p>
              <Link
                href="/ai-voice"
                className="text-brand-orange hover:text-white transition-colors inline-flex items-center gap-2"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* AI Automation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl hover-lift"
            >
              <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Automation</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Connect your tools, automate repetitive workflows, and build systems that
                run without constant oversight.
              </p>
              <Link
                href="/services#automation"
                className="text-brand-orange hover:text-white transition-colors inline-flex items-center gap-2"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* AI Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl hover-lift"
            >
              <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6">
                <Video className="w-7 h-7 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Content</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Scale your content without scaling your time. AI avatars, video production,
                and founder-led content—automated.
              </p>
              <Link
                href="/services#content"
                className="text-brand-orange hover:text-white transition-colors inline-flex items-center gap-2"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-24 md:py-32 bg-brand-oxford-blue">
        <div className="container-max px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                20 Years of Enterprise Experience. 2 Years Deep in AI.
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                We're not a startup chasing trends. We've spent two decades building systems for
                global brands—and the last two years applying that experience to AI that actually
                delivers results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                  <p className="text-white/80">
                    Built systems for Fortune 500 companies and fast-growing startups
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                  <p className="text-white/80">
                    Early adopter—deploying voice AI and automation since 2022
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                  <p className="text-white/80">
                    Focus on ROI, not hype—every project built for measurable results
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="glass-effect p-6 rounded-xl text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">20+</p>
                <p className="text-white/60 text-sm">Years in Tech</p>
              </div>
              <div className="glass-effect p-6 rounded-xl text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">2+</p>
                <p className="text-white/60 text-sm">Years in AI</p>
              </div>
              <div className="glass-effect p-6 rounded-xl text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">50+</p>
                <p className="text-white/60 text-sm">Enterprise Projects</p>
              </div>
              <div className="glass-effect p-6 rounded-xl text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</p>
                <p className="text-white/60 text-sm">AI Coverage</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Voice Demo Section */}
      <section className="py-24 md:py-32 bg-black border-t border-white/10">
        <div className="container-max px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hear It In Action
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              This is what your callers experience. Natural conversation,
              intelligent responses, 24/7 availability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            {/* ElevenLabs Widget placeholder - the actual widget is loaded via ScriptGates */}
            <div className="glass-effect rounded-2xl p-8 text-center">
              <div id="elevenlabs-widget" className="min-h-[200px] flex items-center justify-center">
                <elevenlabs-convai agent-id="cskCMwJ6lJB5ykwzzqzJ"></elevenlabs-convai>
              </div>
              <p className="text-white/50 text-sm mt-4">
                Click to start a conversation with our demo AI voice agent
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-brand-oxford-blue to-black">
        <div className="container-max px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build AI That Works?
            </h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Stop experimenting with tools. Start building systems.
              Let's talk about what AI can actually do for your business.
            </p>
            <button
              onClick={handleBookDemo}
              className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-10 py-5"
            >
              Book Your Strategy Call
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-white/40 text-sm mt-6">
              30-minute call. No pitch. Just strategy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="container-max px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logos/Diabol_Logo_White-01.png" alt="Diabol AI" width={100} height={33} />
            </Link>
            <div className="flex items-center gap-8 text-white/50 text-sm">
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
              <Link href="https://blog.diabolai.com" className="hover:text-white transition-colors">Blog</Link>
            </div>
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} Diabol AI
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
