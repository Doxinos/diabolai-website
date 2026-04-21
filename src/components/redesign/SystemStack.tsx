'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Linkedin, Youtube, Instagram, Twitter, Mail } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/* ------------------------------------------------------------------ */
/* Sub-components: Waveform, ContentGrid, AvatarOrbit                  */
/* ------------------------------------------------------------------ */

function Waveform() {
  return (
    <div className="h-48 w-full overflow-hidden rounded-xl">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
        src="/waveform-bw.mp4"
      />
    </div>
  )
}

function ContentGrid() {
  const labels = ['VIDEO', 'REEL', 'AD', 'POST', 'REEL', 'VIDEO', 'AD', 'POST', 'VIDEO', 'REEL', 'POST', 'AD']
  return (
    <div className="grid h-48 w-full grid-cols-4 gap-3">
      {labels.map((label, i) => (
        <div
          key={i}
          className="group/tile flex items-end rounded-xl border p-3 transition-all duration-300 hover:bg-[#DCDBD3]/25 hover:border-white/25 cursor-default"
          style={{
            animation: 'tile-glow 6s ease-in-out infinite',
            animationDelay: `${i * 0.4}s`,
          }}
        >
          <span className="font-mono text-[10px] tracking-[0.1em] text-[rgba(255,255,255,0.50)] transition-colors duration-300 group-hover/tile:text-[rgba(255,255,255,0.90)]">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}

function AvatarOrbit() {
  const platforms = [
    { icon: <Linkedin size={14} />, label: 'LinkedIn' },
    { icon: <Youtube size={14} />, label: 'YouTube' },
    { icon: <Instagram size={14} />, label: 'Instagram' },
    { icon: <Mail size={14} />, label: 'Email' },
    { icon: <Twitter size={14} />, label: 'X' },
  ]

  return (
    <div className="relative flex h-48 w-full items-center justify-center">
      <div className="absolute h-[240px] w-[240px] rounded-full border border-[rgba(17,17,17,0.08)]" />
      <div className="absolute h-[180px] w-[180px] rounded-full border border-[rgba(17,17,17,0.06)]" />
      <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full border-2 border-[rgba(17,17,17,0.12)] bg-[#DCDBD3]">
        <span className="font-mono text-[11px] tracking-[0.14em] text-[rgba(17,17,17,0.40)]">AVATAR</span>
      </div>
      {/* Pulsing dot */}
      <div className="absolute top-1/2 right-[calc(50%-42px)] h-2 w-2 -translate-y-1/2 rounded-full bg-[#FF4F30] animate-pulse" />
      {/* Orbiting badges */}
      {platforms.map((p, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 -ml-4 -mt-4"
          style={{ animation: 'orbit 12s linear infinite', animationDelay: `${i * -2.4}s` }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[rgba(17,17,17,0.10)] bg-white/80 text-[rgba(17,17,17,0.45)]">
            {p.icon}
          </div>
        </div>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Card data                                                           */
/* ------------------------------------------------------------------ */

const cards = [
  {
    bg: 'bg-[#DCDBD3]',
    textColor: 'text-[#111111]',
    subColor: 'text-[rgba(17,17,17,0.55)]',
    labelColor: 'text-[rgba(17,17,17,0.40)]',
    label: '01 / VOICE AGENTS',
    title: 'Every call answered.',
    subtitle: 'Every lead captured.',
    body: '24/7 AI-powered call handling that qualifies leads, books appointments, and never puts a customer on hold.',
    pill: '3-week delivery \u00B7 Book a call',
    pillBg: 'bg-white/60 text-[rgba(17,17,17,0.60)]',
    visual: 'waveform' as const,
  },
  {
    bg: 'bg-[#0A2843]',
    textColor: 'text-white',
    subColor: 'text-[rgba(255,255,255,0.60)]',
    labelColor: 'text-[#FF4F30]',
    label: '02 / AI CONTENT',
    title: 'Content that scales.',
    subtitle: 'Without an agency retainer.',
    body: 'AI-generated videos, graphics, and ad creatives deployed across every channel — automatically.',
    pill: 'Ongoing partnership \u00B7 Book a call',
    pillBg: 'bg-white/10 text-[rgba(255,255,255,0.60)]',
    visual: 'content' as const,
  },
  {
    bg: 'bg-[#F5F4EE]',
    textColor: 'text-[#111111]',
    subColor: 'text-[rgba(17,17,17,0.55)]',
    labelColor: 'text-[rgba(17,17,17,0.40)]',
    label: '03 / AI AVATARS',
    title: 'Your face.',
    subtitle: 'Everywhere.',
    body: 'Digital twins that present, post, and publish — maintaining your presence across every platform, 24/7.',
    pill: 'Custom build \u00B7 Book a call',
    pillBg: 'bg-white/60 text-[rgba(17,17,17,0.60)]',
    visual: 'avatars' as const,
  },
]

function CardVisual({ type }: { type: 'waveform' | 'content' | 'avatars' }) {
  switch (type) {
    case 'waveform':
      return <Waveform />
    case 'content':
      return <ContentGrid />
    case 'avatars':
      return <AvatarOrbit />
  }
}

/* ------------------------------------------------------------------ */
/* SystemStack component                                               */
/* ------------------------------------------------------------------ */

export default function SystemStack() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1024px)')
    if (!mql.matches) return

    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray('.sys-card') as HTMLElement[]
      gsap.set(cardEls, { position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh' })
      gsap.set(cardEls[1], { y: window.innerHeight })
      gsap.set(cardEls[2], { y: window.innerHeight })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: `+=${cardEls.length * 100}%`,
          pin: true,
          scrub: 0.6,
        },
      })

      // Card 2 slides up, Card 1 blurs out
      tl.to(cardEls[1], { y: 0, duration: 1, ease: 'none' }).to(
        cardEls[0],
        { scale: 0.94, filter: 'blur(12px)', opacity: 0.5, duration: 1, ease: 'none' },
        '<'
      )

      // Card 3 slides up, Card 2 blurs out
      tl.to(cardEls[2], { y: 0, duration: 1, ease: 'none' }).to(
        cardEls[1],
        { scale: 0.94, filter: 'blur(12px)', opacity: 0.5, duration: 1, ease: 'none' },
        '<'
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="methodology" className="relative h-auto lg:h-screen w-full overflow-hidden">
      {cards.map((c, i) => (
        <div
          key={i}
          className={`sys-card flex h-screen w-full items-center justify-center ${c.bg}`}
          style={{ transformOrigin: 'center top' }}
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-16">
            <div className="flex w-full lg:w-1/2 flex-col gap-4">
              <div className={`font-mono text-[12px] uppercase tracking-[0.14em] ${c.labelColor}`}>
                {c.label}
              </div>
              <h2
                className={`text-[clamp(48px,6vw,72px)] font-black leading-[0.95] tracking-[-0.04em] ${c.textColor}`}
              >
                {c.title}
                <br />
                {c.subtitle}
              </h2>
              <p className={`mt-4 max-w-md text-[clamp(16px,1.3vw,18px)] leading-[1.65] ${c.subColor}`}>
                {c.body}
              </p>
              <div
                className={`mt-4 inline-flex w-fit rounded-2xl px-4 py-2 font-mono text-[11px] tracking-[0.1em] ${c.pillBg}`}
              >
                {c.pill}
              </div>
            </div>
            <div className="flex w-full lg:w-1/2 items-center justify-center rounded-[24px] border border-[rgba(17,17,17,0.08)] bg-white/30 p-12 backdrop-blur-sm">
              <CardVisual type={c.visual} />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
