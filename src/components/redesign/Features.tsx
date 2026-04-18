'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  CheckCircle2,
  MousePointer2,
  Linkedin,
  Youtube,
  Instagram,
  Twitter,
  Mail,
} from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/* ------------------------------------------------------------------ */
/* Card 1: Live Metrics                                                */
/* ------------------------------------------------------------------ */
const LiveMetrics = () => {
  const [metrics, setMetrics] = useState({ calls: 0, leads: 0, appts: 0 })
  const metricsRef = useRef({ calls: 0, leads: 0, appts: 0 })

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cycle = () => {
        metricsRef.current = { calls: 0, leads: 0, appts: 0 }
        setMetrics({ ...metricsRef.current })
        gsap.to(metricsRef.current, {
          calls: 247,
          leads: 89,
          appts: 34,
          duration: 1.5,
          ease: 'expo.out',
          onUpdate: () =>
            setMetrics({
              calls: Math.floor(metricsRef.current.calls),
              leads: Math.floor(metricsRef.current.leads),
              appts: Math.floor(metricsRef.current.appts),
            }),
        })
      }
      cycle()
      const id = setInterval(cycle, 4000)
      return () => clearInterval(id)
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="relative rounded-xl bg-[#111111] p-6">
      <div className="absolute right-4 top-4 flex items-center gap-2">
        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF4F30]" />
        <span className="font-mono text-[11px] tracking-[0.14em] text-[#FF4F30]">LIVE</span>
      </div>
      <div className="flex flex-col gap-5 pt-4">
        {[
          { label: 'CALLS ANSWERED', val: metrics.calls },
          { label: 'LEADS QUALIFIED', val: metrics.leads },
          { label: 'BOOKINGS', val: metrics.appts },
        ].map((m, i) => (
          <div key={i} className="flex items-end justify-between border-b border-white/5 pb-2">
            <span className="font-mono text-[11px] tracking-[0.12em] text-[rgba(255,255,255,0.45)]">
              {m.label}
            </span>
            <span className="font-mono text-[28px] font-bold leading-none text-[rgba(255,255,255,0.95)]">
              {m.val.toString().padStart(3, '0')}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Card 2: Generation Typewriter                                       */
/* ------------------------------------------------------------------ */
const GenTypewriter = () => {
  const [text, setText] = useState('')
  const msgs = useRef([
    '> Generating product video for reel...',
    '> Publishing to Instagram \u00b7 TikTok \u00b7 Meta',
    '> 3 UGC variants queued for A/B test',
    '> Hero commercial: render complete (4K)',
    '> 14 posts scheduled this week',
  ])

  useEffect(() => {
    let mi = 0
    let ci = 0
    let del = false
    let t: ReturnType<typeof setTimeout>

    const type = () => {
      const s = msgs.current[mi]
      if (!del && ci < s.length) {
        setText(s.slice(0, ++ci))
        t = setTimeout(type, 30)
      } else if (del && ci > 0) {
        setText(s.slice(0, --ci))
        t = setTimeout(type, 15)
      } else if (!del) {
        del = true
        t = setTimeout(type, 2000)
      } else {
        del = false
        mi = (mi + 1) % msgs.current.length
        t = setTimeout(type, 300)
      }
    }

    t = setTimeout(type, 500)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="rounded-xl bg-[#111111] p-6 font-mono text-[13px]">
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
        <span className="text-[rgba(255,255,255,0.45)]">content_engine</span>
        <span className="rounded-full border border-[#FF4F30]/30 bg-[#FF4F30]/10 px-2 py-0.5 text-[10px] text-[#FF4F30]">
          ACTIVE
        </span>
      </div>
      <div className="min-h-[60px] text-[rgba(255,255,255,0.80)]">
        {text}
        <span className="animate-pulse text-[#FF4F30]">|</span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Card 3: Phantom Publisher                                           */
/* ------------------------------------------------------------------ */
const PhantomPub = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 })
      const icons = gsap.utils.toArray('.ph-icon') as HTMLElement[]

      tl.call(() => setActive([]))

      icons.forEach((icon) => {
        tl.to('.ph-cursor', {
          x: () => icon.offsetLeft - 8,
          y: () => icon.offsetTop + 8,
          duration: 0.5,
          ease: 'power2.inOut',
        })
          .to('.ph-cursor', { scale: 0.8, duration: 0.08, yoyo: true, repeat: 1 })
          .call(() => setActive((p) => [...p, icons.indexOf(icon)]))
      })

      tl.to('.ph-cursor', { x: 140, y: 130, duration: 0.6, ease: 'power2.inOut' }).to(
        '.ph-cursor',
        { scale: 0.8, duration: 0.08, yoyo: true, repeat: 1 },
      )
    }, ref)

    return () => ctx.revert()
  }, [])

  const icons = [Linkedin, Youtube, Instagram, Twitter, Mail]

  return (
    <div ref={ref} className="relative overflow-hidden rounded-xl bg-[#111111] p-6">
      <div className="grid grid-cols-5 gap-3">
        {icons.map((Icon, i) => (
          <div
            key={i}
            className={`ph-icon flex h-11 w-11 items-center justify-center rounded-lg border transition-all duration-300 ${
              active.includes(i)
                ? 'border-[#22c55e]/40 bg-[#22c55e]/10 text-[#22c55e]'
                : 'border-white/10 bg-white/5 text-[rgba(255,255,255,0.45)]'
            }`}
          >
            {active.includes(i) ? <CheckCircle2 size={18} /> : <Icon size={18} />}
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <button className="rounded-full border border-white/15 bg-white/5 px-5 py-1.5 font-mono text-[10px] tracking-[0.12em] text-[rgba(255,255,255,0.60)]">
          PUBLISH ALL
        </button>
      </div>
      <div className="mt-4 text-center font-mono text-[10px] tracking-[0.12em] text-[rgba(255,255,255,0.35)]">
        AVATAR ACTIVE &middot; 14 VIDEOS SCHED &middot; NEXT: TUE 09:00
      </div>
      <div className="ph-cursor absolute left-0 top-0 z-50">
        <MousePointer2 size={20} className="fill-white stroke-[#111111] stroke-2" />
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Features Section                                                    */
/* ------------------------------------------------------------------ */
export default function Features() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.feature-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 70%' },
        },
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="platform" className="w-full bg-white px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <div className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">
            The System
          </div>
          <h2 className="mt-4 text-[clamp(52px,7vw,88px)] font-black leading-[0.95] tracking-[-0.04em] text-[#111111]">
            Three tools.
            <br />
            <span className="text-[rgba(17,17,17,0.35)]">One unfair advantage.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Voice */}
          <div className="feature-card card-lift flex flex-col rounded-2xl border border-[rgba(17,17,17,0.08)] bg-[#DCDBD3] p-8">
            <LiveMetrics />
            <h3 className="mt-6 text-xl font-bold text-[rgba(17,17,17,0.90)]">
              Answer every call. Chase every lead.
            </h3>
            <p className="mt-2 text-sm leading-[1.65] text-[rgba(17,17,17,0.55)]">
              Inbound handled 24/7. Outbound follow-up automated. Qualification and booking, in
              your voice.
            </p>
          </div>

          {/* Content */}
          <div className="feature-card card-lift flex flex-col rounded-2xl border border-[rgba(17,17,17,0.08)] bg-[#DCDBD3] p-8">
            <GenTypewriter />
            <h3 className="mt-6 text-xl font-bold text-[rgba(17,17,17,0.90)]">
              Content that never sleeps.
            </h3>
            <p className="mt-2 text-sm leading-[1.65] text-[rgba(17,17,17,0.55)]">
              AI-generated videos, graphics, and ad creatives — delivered at a pace no human team
              can match.
            </p>
          </div>

          {/* Avatars */}
          <div className="feature-card card-lift flex flex-col rounded-2xl border border-[rgba(17,17,17,0.08)] bg-[#DCDBD3] p-8">
            <PhantomPub />
            <h3 className="mt-6 text-xl font-bold text-[rgba(17,17,17,0.90)]">
              Be everywhere without being everywhere.
            </h3>
            <p className="mt-2 text-sm leading-[1.65] text-[rgba(17,17,17,0.55)]">
              Your likeness and voice, showing up consistently — while you focus on the work that
              matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
