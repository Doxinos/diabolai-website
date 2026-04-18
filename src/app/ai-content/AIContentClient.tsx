'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Navbar from '@/components/redesign/Navbar'
import Testimonials from '@/components/redesign/Testimonials'
import ClientLogos from '@/components/redesign/ClientLogos'
import HomeFAQ from '@/components/redesign/HomeFAQ'
import { trackScheduleClick } from '@/utils/analytics'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/* ------------------------------------------------------------------ */
/* Calendly helper                                                     */
/* ------------------------------------------------------------------ */
const openCalendly = (source: string) => {
  trackScheduleClick(source)
  if (typeof window !== 'undefined' && (window as any).Calendly) {
    ;(window as any).Calendly.initPopupWidget({
      url: 'https://calendly.com/peter-diabol/30min',
    })
  }
}

/* ------------------------------------------------------------------ */
/* SECTION 1 — HERO (3x3 fallback grid + overlay copy)                 */
/* ------------------------------------------------------------------ */
const ContentHero = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [showArrow, setShowArrow] = useState(true)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.ch-label', { y: 12, opacity: 0, duration: 0.6 })
        .from('.ch-line1', { y: 30, opacity: 0, duration: 0.7 }, 0.2)
        .from('.ch-line2', { y: 30, opacity: 0, duration: 0.7 }, 0.35)
        .from('.ch-body', { y: 16, opacity: 0, duration: 0.5 }, 0.6)
        .from('.ch-ctas', { y: 16, opacity: 0, duration: 0.5 }, 0.8)
    }, ref)

    const handleScroll = () => {
      if (window.scrollY > 50) setShowArrow(false)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      ctx.revert()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const heroGrid = [
    { id: 'IMG_HERO_01', gradient: 'from-[#0A2843] to-[#111111]' },
    { id: 'IMG_HERO_02', gradient: 'from-[#FF4F30]/30 to-[#111111]' },
    { id: 'IMG_HERO_03', gradient: 'from-[#0A2843] to-[#1a0a00]' },
    { id: 'IMG_HERO_04', gradient: 'from-[#0A2843] to-[#111111]' },
    { id: 'IMG_HERO_05', gradient: 'from-[#FF4F30]/30 to-[#111111]' },
    { id: 'IMG_HERO_06', gradient: 'from-[#0A2843] to-[#1a0a00]' },
    { id: 'IMG_HERO_07', gradient: 'from-[#0A2843] to-[#111111]' },
    { id: 'IMG_HERO_08', gradient: 'from-[#FF4F30]/30 to-[#111111]' },
    { id: 'IMG_HERO_09', gradient: 'from-[#0A2843] to-[#1a0a00]' },
  ]

  return (
    <section
      ref={ref}
      data-theme="dark"
      className="diag-right relative min-h-screen bg-[#111111] flex items-center justify-center overflow-hidden"
      style={{ paddingBottom: '80px' }}
    >
      {/* 3x3 fallback grid */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-0">
        {heroGrid.map((cell) => (
          <div
            key={cell.id}
            className={`relative bg-gradient-to-br ${cell.gradient} flex items-center justify-center`}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.20)]">
              In Production
            </span>
          </div>
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.45)]" />

      {/* Content overlay */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="ch-label font-mono text-[11px] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.50)] mb-8">
          — AI Content
        </p>

        <h1 className="font-black leading-[0.92] tracking-[-0.04em] text-[clamp(48px,8vw,100px)] mb-8">
          <span className="ch-line1 block text-white">
            Content that scales with you.
          </span>
          <span className="ch-line2 block text-[rgba(255,255,255,0.40)]">
            Not a team of 10.
          </span>
        </h1>

        <p className="ch-body max-w-[520px] mx-auto text-[clamp(16px,1.3vw,20px)] leading-[1.65] text-[rgba(255,255,255,0.65)] mb-10">
          AI-generated videos, UGC-style ads, and cinematic hero commercials —
          produced faster and at a fraction of traditional costs.
        </p>

        <div className="ch-ctas flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => openCalendly('ai_content_hero_see_work')}
            className="flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#111111] hover:bg-[rgba(255,255,255,0.90)] transition-colors duration-200"
          >
            See the work <ArrowRight size={16} />
          </button>
          <button
            onClick={() => openCalendly('ai_content_hero_talk')}
            className="rounded-full border border-[rgba(255,255,255,0.30)] bg-transparent px-8 py-4 text-sm font-bold text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors duration-200"
          >
            Talk to us
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      {showArrow && (
        <div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-500"
          style={{ animation: 'bounce-arrow 2s ease-in-out infinite' }}
        >
          <ChevronDown
            size={20}
            className="text-[rgba(255,255,255,0.40)]"
          />
        </div>
      )}
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* SECTION 2 — TWO TRACKS (Audience Splitter)                          */
/* ------------------------------------------------------------------ */
const TwoTracks = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.track-card', {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      className="diag-left w-full bg-[#DCDBD3] px-6 py-32 md:px-12"
      style={{ paddingBottom: '8rem' }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">
            Choose Your Track
          </p>
          <h2 className="mt-4 text-[clamp(42px,6vw,72px)] font-black leading-[0.95] tracking-[-0.03em] text-[#111111]">
            Which describes you?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Volume Track */}
          <div className="track-card rounded-2xl bg-white p-10 border border-[rgba(17,17,17,0.08)]">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#FF4F30] mb-4">
              Volume Track
            </p>
            <h3 className="text-[24px] font-extrabold text-[#111111] mb-3">
              E-commerce, creators, solopreneurs
            </h3>
            <p className="text-[15px] leading-[1.65] text-[rgba(17,17,17,0.60)] mb-6">
              You need a constant stream of product videos, UGC-style ads, and
              social content. You can&apos;t afford a production team but you
              can&apos;t afford to go dark either.
            </p>
            <div className="space-y-2 mb-6">
              {[
                'Product videos',
                'UGC-style ad creatives (Meta, TikTok)',
                'Social graphics + reels',
                'Monthly content packages',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="font-mono text-[12px] text-[#FF4F30] mt-0.5 shrink-0">
                    →
                  </span>
                  <span className="font-mono text-[12px] leading-[1.6] text-[rgba(17,17,17,0.70)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <span className="inline-block rounded-full bg-[#DCDBD3] px-4 py-2 font-mono text-[12px] text-[rgba(17,17,17,0.60)] mb-6">
              CUSTOM QUOTE
            </span>
            <button
              onClick={() => openCalendly('ai_content_volume_starter')}
              className="w-full rounded-full bg-[#111111] px-8 py-3.5 text-sm font-semibold text-[#DCDBD3] hover:bg-[#222222] transition-colors duration-200"
            >
              Book a Call
            </button>
          </div>

          {/* Hero Track */}
          <div className="track-card rounded-2xl bg-[#0A2843] p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#FF4F30] mb-4">
              Hero Track
            </p>
            <h3 className="text-[24px] font-extrabold text-white mb-3">
              VC-backed startups &amp; ambitious brands
            </h3>
            <p className="text-[15px] leading-[1.65] text-[rgba(255,255,255,0.65)] mb-6">
              You need a brand film that makes investors brag and competitors
              nervous. Cinematic concepts that couldn&apos;t exist any other
              way. 4&ndash;6 weeks, not 6 months.
            </p>
            <div className="space-y-2 mb-6">
              {[
                'AI Hero Commercials',
                'Campaign packages (3\u20135 connected films)',
                "Concepts that couldn\u2019t be filmed traditionally",
                'DaVinci Resolve color grade + sound design',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="font-mono text-[12px] text-[#FF4F30] mt-0.5 shrink-0">
                    →
                  </span>
                  <span className="font-mono text-[12px] leading-[1.6] text-[rgba(255,255,255,0.70)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <span className="inline-block rounded-full bg-[rgba(255,255,255,0.10)] px-4 py-2 font-mono text-[12px] text-[rgba(255,255,255,0.60)] mb-6">
              FROM $20,000
            </span>
            <button
              onClick={() => openCalendly('ai_content_hero_discuss')}
              className="w-full rounded-full bg-[#FF4F30] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#E64528] transition-colors duration-200"
            >
              Discuss a project
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* SECTION 2B — FULL-BLEED VISUAL BREAK (IMG_BREAK_2B)                 */
/* ------------------------------------------------------------------ */
const VisualBreak2B = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.vb2b-img',
        { scale: 1.04 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      className="diag-right relative w-full overflow-hidden"
      style={{ height: 'clamp(320px, 70vh, 800px)' }}
    >
      <div
        className="vb2b-img absolute inset-0"
        style={{
          backgroundImage: 'url(/img-content-studio.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.20)' }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-black text-white select-none pointer-events-none"
          style={{
            fontSize: 'clamp(80px,12vw,160px)',
            opacity: 0.08,
            letterSpacing: '-0.04em',
          }}
        >
          PROOF
        </span>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* SECTION 3 — PORTFOLIO (Masonry grid + filter tabs)                  */
/* ------------------------------------------------------------------ */
const Portfolio = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = [
    'All',
    'Product Videos',
    'UGC Ads',
    'Social',
    'Hero Commercials',
  ]

  const tiles = [
    {
      id: 'IMG_PORT_01',
      category: 'Product Videos',
      aspect: '16/9',
      gradient: 'from-[#0A2843] to-[#111111]',
      label: 'PRODUCT VIDEO',
    },
    {
      id: 'IMG_PORT_02',
      category: 'UGC Ads',
      aspect: '9/16',
      gradient: 'from-[#1a0800] to-[#111111]',
      label: 'UGC AD \u00B7 META',
    },
    {
      id: 'IMG_PORT_03',
      category: 'Hero Commercials',
      aspect: '16/9',
      gradient: 'from-[#0A2843] to-[#060e1a]',
      label: 'HERO COMMERCIAL',
    },
    {
      id: 'IMG_PORT_04',
      category: 'Social',
      aspect: '1/1',
      gradient: 'from-[#DCDBD3] to-[#aaa9a2]',
      label: 'SOCIAL REEL',
      darkLabel: true,
    },
    {
      id: 'IMG_PORT_05',
      category: 'Product Videos',
      aspect: '4/3',
      gradient: 'from-[#0A2843] to-[#111111]',
      label: 'PRODUCT VIDEO',
    },
    {
      id: 'IMG_PORT_06',
      category: 'UGC Ads',
      aspect: '16/9',
      gradient: 'from-[#2a0800] to-[#111111]',
      label: 'UGC AD \u00B7 TIKTOK',
    },
    {
      id: 'IMG_PORT_07',
      category: 'Social',
      aspect: '9/16',
      gradient: 'from-[#0A2843] to-[#111111]',
      label: 'SOCIAL \u00B7 REEL',
    },
    {
      id: 'IMG_PORT_08',
      category: 'Hero Commercials',
      aspect: '16/9',
      gradient: 'from-[#111111] to-[#0A2843]',
      label: 'HERO COMMERCIAL',
    },
    {
      id: 'IMG_PORT_09',
      category: 'Product Videos',
      aspect: '1/1',
      gradient: 'from-[#0A2843] to-[#111111]',
      label: 'PRODUCT VIDEO',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.port-tile', {
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const filteredTiles =
    activeFilter === 'All'
      ? tiles
      : tiles.filter((t) => t.category === activeFilter)

  return (
    <section
      ref={ref}
      className="diag-right w-full bg-white px-6 py-32 md:px-12"
      style={{ paddingBottom: '8rem' }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">
            The Work
          </p>
          <h2 className="mt-4 text-[clamp(42px,6vw,72px)] font-black leading-[0.95] tracking-[-0.03em] text-[#111111]">
            See it. Then decide.
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`rounded-full px-5 py-2 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors duration-200 ${
                activeFilter === f
                  ? 'bg-[#111111] text-[#DCDBD3]'
                  : 'border border-[rgba(17,17,17,0.15)] text-[rgba(17,17,17,0.50)] hover:border-[rgba(17,17,17,0.30)]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry grid -- CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
          {filteredTiles.map((tile) => (
            <div
              key={tile.id}
              className="port-tile break-inside-avoid rounded-2xl overflow-hidden relative group"
              style={{ aspectRatio: tile.aspect }}
            >
              {/* Placeholder gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tile.gradient}`}
              />

              {/* Placeholder label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className={`font-mono text-[11px] uppercase tracking-[0.14em] ${
                    tile.darkLabel
                      ? 'text-[rgba(17,17,17,0.25)]'
                      : 'text-[rgba(255,255,255,0.25)]'
                  }`}
                >
                  {tile.label}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[rgba(17,17,17,0.75)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-5">
                <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-white">
                  {tile.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Full portfolio link */}
        <div className="mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-[rgba(17,17,17,0.70)] hover:text-[#111111] transition-colors duration-200"
          >
            See the full portfolio <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* SECTION 4 — THE PIPELINE (5-stage production process)               */
/* ------------------------------------------------------------------ */
const ThePipeline = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pipe-node', {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
      gsap.from('.pipe-callout', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.pipe-callout', start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const stages = [
    { num: '01', title: 'Concept', line1: 'Brief \u2192 visual', line2: 'language' },
    {
      num: '02',
      title: 'Image Gen',
      line1: 'Midjourney',
      line2: 'prompt dev + approval',
    },
    {
      num: '03',
      title: 'Animate',
      line1: 'Kling + Veo3',
      line2: 'frame-by-frame motion',
    },
    {
      num: '04',
      title: 'Grade',
      line1: 'DaVinci',
      line2: 'Resolve color grade',
    },
    {
      num: '05',
      title: 'Deliver',
      line1: 'Files + MP4',
      line2: 'source assets',
    },
  ]

  return (
    <section
      ref={ref}
      className="diag-left w-full bg-[#DCDBD3] px-6 py-32 md:px-12"
      style={{ paddingBottom: '8rem' }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">
            The Process
          </p>
          <h2 className="mt-4 text-[clamp(36px,5vw,60px)] font-black leading-[0.95] tracking-[-0.03em] text-[#111111]">
            Not text-to-video shortcuts.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.65] text-[rgba(17,17,17,0.65)] max-w-[560px]">
            A professional production pipeline that happens to use AI. The
            difference shows.
          </p>
        </div>

        {/* Pipeline stages */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-4 mb-16">
          {stages.map((stage, i) => (
            <div
              key={stage.num}
              className="pipe-node flex flex-col items-center text-center relative"
            >
              {/* Connecting dashed line -- desktop only */}
              {i < stages.length - 1 && (
                <div className="hidden md:block absolute top-4 left-[calc(50%+20px)] w-[calc(100%-40px)] border-t border-dashed border-[rgba(17,17,17,0.20)]" />
              )}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111111] text-[#DCDBD3] font-mono text-[11px] mb-4 relative z-10">
                {stage.num}
              </div>
              <h3 className="font-mono text-[12px] uppercase tracking-[0.12em] text-[#111111] font-bold mb-2">
                {stage.title}
              </h3>
              <p className="font-mono text-[11px] leading-[1.5] text-[rgba(17,17,17,0.50)]">
                {stage.line1}
              </p>
              <p className="font-mono text-[11px] leading-[1.5] text-[rgba(17,17,17,0.40)]">
                {stage.line2}
              </p>
            </div>
          ))}
        </div>

        {/* Key Distinction callout */}
        <div className="pipe-callout mx-auto max-w-[680px] rounded-2xl bg-white p-6 md:p-8 border border-[rgba(17,17,17,0.08)]">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)] mb-3">
            Key Distinction
          </p>
          <p className="text-[17px] leading-[1.65] text-[rgba(17,17,17,0.70)]">
            &ldquo;We start from images — precise, approved, deliberate. Not
            from text prompts that produce something approximate. Every frame is
            designed before it moves. That&apos;s why it doesn&apos;t look like
            AI.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* SECTION 4B — FULL-BLEED VISUAL BREAK (IMG_BREAK_4B)                 */
/* ------------------------------------------------------------------ */
const VisualBreak4B = () => {
  return (
    <section
      className="diag-left relative w-full overflow-hidden"
      style={{ height: 'clamp(280px, 55vh, 650px)' }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/img-content-desk.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Oxford Blue tint -- signals the dark section coming next */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(10, 40, 67, 0.45)' }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-black text-white select-none pointer-events-none"
          style={{
            fontSize: 'clamp(80px,12vw,160px)',
            opacity: 0.07,
            letterSpacing: '-0.04em',
          }}
        >
          HERO
        </span>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* SECTION 5 — HERO TIER DEEP DIVE (Oxford Blue)                       */
/* ------------------------------------------------------------------ */
const HeroTierDeepDive = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.htd-el', {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      data-theme="dark"
      className="w-full bg-[#0A2843] px-6 py-32 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="htd-el mb-16">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)]">
            Hero Track — Deep Dive
          </p>
          <h2 className="mt-4 text-[clamp(36px,5vw,60px)] font-black leading-[0.95] tracking-[-0.03em] text-white">
            The film you pitched to your investors.
          </h2>
          <p className="mt-2 text-[clamp(20px,3vw,28px)] font-black leading-[0.95] tracking-[-0.02em] text-[rgba(255,255,255,0.65)]">
            Not the one the agency delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left -- Prose */}
          <div className="htd-el max-w-[480px]">
            <p className="text-[16px] leading-[1.7] text-[rgba(255,255,255,0.65)] mb-4">
              Traditional production has hard physical constraints — locations,
              actors, camera rigs, post schedules. Those constraints shape the
              creative. Creative shaped by constraints looks like everything
              else.
            </p>
            <p className="text-[16px] leading-[1.7] text-[rgba(255,255,255,0.65)]">
              We start from what the concept demands, not from what&apos;s
              physically available. The visual ceiling is genuinely different.
            </p>
          </div>

          {/* Right -- Offer cards */}
          <div className="htd-el rounded-2xl bg-[#060e1a] border border-[rgba(255,255,255,0.10)] p-8">
            {/* AI Hero Commercial */}
            <div className="mb-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)] mb-2">
                One Film
              </p>
              <h3 className="text-[20px] font-bold text-white mb-2">
                Concept through delivery.
              </h3>
              <p className="text-[15px] text-[rgba(255,255,255,0.60)] mb-4">
                4&ndash;6 weeks. From $20,000.
              </p>
              <button
                onClick={() => openCalendly('ai_content_hero_one_film')}
                className="rounded-full border border-[rgba(255,255,255,0.20)] px-6 py-3 text-sm font-semibold text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors duration-200"
              >
                Discuss this project
              </button>
            </div>

            <div className="border-t border-[rgba(255,255,255,0.10)] pt-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)] mb-2">
                3&ndash;5 Connected Films
              </p>
              <h3 className="text-[20px] font-bold text-white mb-2">
                One visual world. Multiple pieces.
              </h3>
              <p className="text-[15px] text-[rgba(255,255,255,0.60)] mb-4">
                From $50,000.
              </p>
              <button
                onClick={() => openCalendly('ai_content_hero_campaign')}
                className="rounded-full border border-[rgba(255,255,255,0.20)] px-6 py-3 text-sm font-semibold text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors duration-200"
              >
                Discuss this project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* SECTION 6 — OBJECTION: "WON'T IT LOOK AI?"                         */
/* ------------------------------------------------------------------ */
const ObjectionSection = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.obj-el', {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="w-full bg-white px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left -- Question + comparison slots */}
          <div className="obj-el">
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">
              The Question Everyone Asks
            </p>
            <h2 className="mt-4 text-[clamp(36px,5vw,60px)] font-black leading-[0.95] tracking-[-0.03em] text-[#111111] mb-8">
              Won&apos;t it look AI&#8209;generated?
            </h2>

            {/* Comparison image slots -- placeholder state */}
            <div className="grid grid-cols-2 gap-3">
              {/* IMG_COMPARE_A -- text-to-video (deliberately mediocre) */}
              <div
                className="rounded-xl overflow-hidden relative"
                style={{ aspectRatio: '16/9' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img-compare-generic.png"
                  alt="Generic text-to-video result"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 rounded-full bg-[rgba(0,0,0,0.50)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.60)]">
                  Text-to-Video
                </span>
              </div>

              {/* IMG_COMPARE_B -- Diabol pipeline (cinematic) */}
              <div
                className="rounded-xl overflow-hidden relative"
                style={{ aspectRatio: '16/9' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img-compare-premium.png"
                  alt="Diabol pipeline result"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 rounded-full bg-[#FF4F30] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white">
                  Diabol Pipeline
                </span>
              </div>
            </div>
          </div>

          {/* Right -- Answer prose */}
          <div className="obj-el">
            <div className="space-y-4 lg:pt-20">
              <p className="text-[18px] leading-[1.7] text-[rgba(17,17,17,0.70)]">
                The &ldquo;AI-looking&rdquo; problem comes from text-to-video:
                describe something, get a rough approximation, call it done.
              </p>
              <p className="text-[18px] leading-[1.7] text-[rgba(17,17,17,0.70)]">
                Our pipeline starts from image generation — where creative
                control is precise — and animates from there. Every visual
                decision is made before motion is added. You approve frames
                before a single pixel moves.
              </p>
              <p className="text-[18px] leading-[1.7] text-[rgba(17,17,17,0.70)]">
                If you&apos;ve seen AI video that looked unfinished or strange,
                it was made differently.
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={() => openCalendly('ai_content_objection_pipeline')}
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-[rgba(17,17,17,0.70)] hover:text-[#111111] transition-colors duration-200"
              >
                See the pipeline in detail <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* SECTION 7 — FINAL CTA (Two-Track Split)                             */
/* ------------------------------------------------------------------ */
const ContentFinalCTA = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fcta-card', {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="w-full bg-[#DCDBD3] px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Volume Track CTA */}
          <div className="fcta-card rounded-2xl bg-white p-10 border border-[rgba(17,17,17,0.08)]">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#FF4F30] mb-4">
              Volume Track
            </p>
            <h3 className="text-[22px] font-extrabold text-[#111111] mb-3">
              Ready to start?
            </h3>
            <p className="text-[15px] leading-[1.65] text-[rgba(17,17,17,0.60)] mb-4">
              Get your first 5&ndash;10 AI content pieces in 2 weeks. No long
              onboarding.
            </p>
            <p className="font-mono text-[13px] text-[rgba(17,17,17,0.50)] mb-6">
              Custom quote
            </p>
            <button
              onClick={() => openCalendly('ai_content_final_volume')}
              className="w-full rounded-full bg-[#111111] px-8 py-3.5 text-sm font-semibold text-[#DCDBD3] hover:bg-[#222222] transition-colors duration-200"
            >
              Book a Call
            </button>
          </div>

          {/* Hero Track CTA */}
          <div className="fcta-card rounded-2xl bg-[#0A2843] p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#FF4F30] mb-4">
              Hero Track
            </p>
            <h3 className="text-[22px] font-extrabold text-white mb-3">
              Have a project in mind?
            </h3>
            <p className="text-[15px] leading-[1.65] text-[rgba(255,255,255,0.65)] mb-4">
              Tell us what you&apos;re building. We&apos;ll tell you if we can
              make it.
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)] mb-6">
              30-min call &middot; No pitch deck &middot; No proposals until we
              know it&apos;s a fit
            </p>
            <button
              onClick={() => openCalendly('ai_content_final_hero')}
              className="w-full rounded-full bg-[#FF4F30] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#E64528] transition-colors duration-200"
            >
              Discuss a project
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* PAGE ASSEMBLY                                                       */
/* ------------------------------------------------------------------ */
export default function AIContentClient() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="relative w-full selection:bg-[#FF4F30] selection:text-white">
      <Navbar forceDark />
      <ContentHero />
      <TwoTracks />
      <VisualBreak2B />
      <Portfolio />
      <ThePipeline />
      <VisualBreak4B />
      <HeroTierDeepDive />
      <ObjectionSection />
      <ContentFinalCTA />
      <Testimonials />
      <ClientLogos />
      <HomeFAQ />
    </main>
  )
}
