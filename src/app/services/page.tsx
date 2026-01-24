'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Zap, Video, CheckCircle2, Calendar, MessageSquare, Users, Workflow, Mail, FileText, Mic, Play } from 'lucide-react'
import Navigation from '@/components/Navigation'
import ScriptGates from '@/components/ScriptGates'

export default function ServicesPage() {
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
      <section className="pt-32 pb-20 px-6 md:px-8">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50 mb-6">
              Our Services
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-8">
              AI That Actually Works
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              Three services built on real-world experience. No experiments—proven systems
              that expand your capacity and capture opportunities you're currently missing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Voice Agents Section */}
      <section id="voice" className="py-24 md:py-32 bg-black border-t border-white/10">
        <div className="container-max px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-8">
                <Phone className="w-8 h-8 text-brand-orange" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Voice Agents
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Every missed call is a customer calling your competitor. Our AI voice agents
                answer 24/7, qualify leads, book appointments, and handle inquiries—exactly
                how you would.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Answer every call, 24/7</p>
                    <p className="text-white/60 text-sm">Never miss a lead—even at 3am or during your busiest hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Qualify leads automatically</p>
                    <p className="text-white/60 text-sm">Ask the right questions, gather info, and route hot leads instantly</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Book directly to your calendar</p>
                    <p className="text-white/60 text-sm">Integrates with your scheduling system—no manual follow-up needed</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Your voice, your brand</p>
                    <p className="text-white/60 text-sm">Custom personality and tone that sounds like your team</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/ai-voice"
                  className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={handleBookDemo}
                  className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3"
                >
                  Book a Demo
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">Perfect For:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                  <Calendar className="w-5 h-5 text-brand-orange" />
                  <span className="text-white/80">Service Businesses</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                  <Users className="w-5 h-5 text-brand-orange" />
                  <span className="text-white/80">Real Estate</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                  <MessageSquare className="w-5 h-5 text-brand-orange" />
                  <span className="text-white/80">Healthcare</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                  <Phone className="w-5 h-5 text-brand-orange" />
                  <span className="text-white/80">Professional Services</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-brand-orange/10 rounded-xl border border-brand-orange/20">
                <p className="text-white/90 text-lg font-medium mb-2">
                  "Most service businesses lose $50K+ per year to missed calls."
                </p>
                <p className="text-white/60 text-sm">
                  That's revenue going straight to your competitors. We fix that.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Automation Section */}
      <section id="automation" className="py-24 md:py-32 bg-brand-oxford-blue">
        <div className="container-max px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 glass-effect rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">What We Automate:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                  <Workflow className="w-6 h-6 text-brand-orange flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Lead Management</p>
                    <p className="text-white/60 text-sm">Capture, qualify, and route leads to the right person automatically</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                  <Mail className="w-6 h-6 text-brand-orange flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Follow-Up Sequences</p>
                    <p className="text-white/60 text-sm">Automated emails and SMS that keep prospects warm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                  <FileText className="w-6 h-6 text-brand-orange flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Data Entry & Sync</p>
                    <p className="text-white/60 text-sm">Keep your CRM, calendar, and tools in perfect sync</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                  <MessageSquare className="w-6 h-6 text-brand-orange flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Client Communication</p>
                    <p className="text-white/60 text-sm">Appointment reminders, status updates, and check-ins</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-8">
                <Zap className="w-8 h-8 text-brand-orange" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Automation
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Stop doing the same tasks over and over. We build intelligent workflows
                that connect your tools, automate repetitive work, and free your team
                to focus on what actually grows the business.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Connect all your tools</p>
                    <p className="text-white/60 text-sm">CRM, calendar, email, forms—everything talking to each other</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Eliminate manual data entry</p>
                    <p className="text-white/60 text-sm">Information flows automatically where it needs to go</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">AI-powered decision making</p>
                    <p className="text-white/60 text-sm">Smart routing, prioritization, and responses based on context</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleBookDemo}
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3"
              >
                Discuss Your Workflows <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Content Section */}
      <section id="content" className="py-24 md:py-32 bg-black border-t border-white/10">
        <div className="container-max px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-8">
                <Video className="w-8 h-8 text-brand-orange" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Content
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Your audience wants to hear from you—but you don't have time to create
                content constantly. AI avatars and automated production let you be
                everywhere without being anywhere.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">AI avatars that look like you</p>
                    <p className="text-white/60 text-sm">Create video content without being on camera every time</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Founder-led content at scale</p>
                    <p className="text-white/60 text-sm">Your voice, your expertise—without your constant time</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Multi-platform distribution</p>
                    <p className="text-white/60 text-sm">One recording becomes content for every channel</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleBookDemo}
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3"
              >
                Explore AI Content <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">Content Types:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                  <Play className="w-6 h-6 text-brand-orange flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Video Content</p>
                    <p className="text-white/60 text-sm">LinkedIn videos, YouTube shorts, social clips</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                  <Mic className="w-6 h-6 text-brand-orange flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Audio Content</p>
                    <p className="text-white/60 text-sm">Podcast clips, voice messages, audio guides</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                  <Users className="w-6 h-6 text-brand-orange flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">AI Avatars</p>
                    <p className="text-white/60 text-sm">Digital twins for training, onboarding, and communication</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                  <FileText className="w-6 h-6 text-brand-orange flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Written Content</p>
                    <p className="text-white/60 text-sm">Blog posts, newsletters, social copy in your voice</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-brand-oxford-blue to-black">
        <div className="container-max px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We Work
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Strategy first, technology second. Here's our proven process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understand your business, challenges, and goals' },
              { step: '02', title: 'Strategy', desc: 'Design the right AI solution for your specific needs' },
              { step: '03', title: 'Build', desc: 'Implement and integrate with your existing systems' },
              { step: '04', title: 'Optimize', desc: 'Monitor, learn, and continuously improve' }
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-brand-orange/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-black border-t border-white/10">
        <div className="container-max px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Talk About What You Need
            </h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Not sure which service fits? That's exactly what the strategy call is for.
              We'll explore your challenges and recommend the right approach.
            </p>
            <button
              onClick={handleBookDemo}
              className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-10 py-5"
            >
              Book Your Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-white/40 text-sm mt-6">
              30-minute call. No pitch. Just strategy.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
