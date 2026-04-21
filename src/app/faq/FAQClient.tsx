'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import { Search, ChevronDown, X, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'
import Navbar from '@/components/redesign/Navbar'
import { mainFaqData, mainFaqStructuredData, type FAQItem } from '@/data/mainFaq'
import { trackScheduleClick } from '@/utils/analytics'
import StructuredData from './StructuredData'

type FlatItem = FAQItem & { category: string; catIndex: number; qIndex: number }

const POPULAR_KEYS = ['receptionist', 'avatar', 'content', 'sound', 'integrate', 'ready']

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function FAQClient() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [openKey, setOpenKey] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  const handleBookCall = () => {
    trackScheduleClick('faq_page')
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      ;(window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/peter-diabol/30min',
      })
    }
  }

  const flat: FlatItem[] = useMemo(
    () =>
      mainFaqData.flatMap((cat, ci) =>
        cat.questions.map((q, qi) => ({
          ...q,
          category: cat.category,
          catIndex: ci,
          qIndex: qi,
        }))
      ),
    []
  )

  const popular = useMemo(
    () =>
      flat
        .filter((f) =>
          POPULAR_KEYS.some((k) => f.question.toLowerCase().includes(k.toLowerCase()))
        )
        .slice(0, 6),
    [flat]
  )

  const isFiltering = query.trim().length > 0 || activeCategory !== null

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return flat.filter((f) => {
      if (activeCategory && f.category !== activeCategory) return false
      if (!q) return true
      return (
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q) ||
        f.category.toLowerCase().includes(q)
      )
    })
  }, [flat, query, activeCategory])

  const countByCategory = useMemo(() => {
    const counts = new Map<string, number>()
    mainFaqData.forEach((c) => counts.set(c.category, c.questions.length))
    return counts
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-reveal',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.7, ease: 'power2.out' }
      )
    }, heroRef)

    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
        inputRef.current?.select()
      }
      if (e.key === 'Escape') {
        setQuery('')
        setActiveCategory(null)
        inputRef.current?.blur()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      ctx.revert()
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  const highlight = (text: string) => {
    const q = query.trim()
    if (!q) return text
    const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
    const parts = text.split(re)
    return parts.map((part, i) =>
      re.test(part) ? (
        <mark key={i} className="rounded bg-[#FF4F30]/20 px-0.5 text-[#111111]">
          {part}
        </mark>
      ) : (
        <span key={i}>{part}</span>
      )
    )
  }

  const clearAll = () => {
    setQuery('')
    setActiveCategory(null)
    inputRef.current?.focus()
  }

  return (
    <>
      <StructuredData data={mainFaqStructuredData} />
      <Navbar />
      <main className="relative w-full selection:bg-[#FF4F30] selection:text-white">
        {/* Hero — Westar with search */}
        <section
          ref={heroRef}
          className="relative w-full bg-[#DCDBD3] px-6 pt-40 pb-16 md:px-12 lg:px-20"
        >
          <div className="mx-auto max-w-5xl">
            <div className="hero-reveal mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[#FF4F30]">
              FAQ · ASK OR BROWSE
            </div>
            <h1 className="hero-reveal text-[clamp(44px,7vw,88px)] font-black leading-[0.9] tracking-[-0.04em] text-[#111111]">
              Questions we get <br />
              <span className="text-[#FF4F30]">asked the most.</span>
            </h1>
            <p className="hero-reveal mt-6 max-w-2xl text-[clamp(16px,1.3vw,18px)] leading-relaxed text-[rgba(17,17,17,0.65)]">
              Type what you want to know, or browse by topic in the sidebar.
            </p>

            {/* Search box */}
            <div className="hero-reveal mt-10 max-w-2xl">
              <div className="flex items-center gap-3 rounded-2xl border border-[rgba(17,17,17,0.15)] bg-white px-5 py-4 shadow-sm transition-all focus-within:border-[#FF4F30] focus-within:shadow-md">
                <Search size={20} className="shrink-0 text-[rgba(17,17,17,0.40)]" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a question or keyword…"
                  className="flex-1 bg-transparent text-[16px] text-[#111111] placeholder:text-[rgba(17,17,17,0.35)] outline-none"
                />
                {query && (
                  <button
                    onClick={() => {
                      setQuery('')
                      inputRef.current?.focus()
                    }}
                    className="shrink-0 rounded-full p-1 text-[rgba(17,17,17,0.40)] hover:bg-[rgba(17,17,17,0.05)] hover:text-[#111111]"
                  >
                    <X size={16} />
                  </button>
                )}
                <kbd className="hidden md:inline-flex shrink-0 items-center rounded-md border border-[rgba(17,17,17,0.15)] bg-[#DCDBD3] px-2 py-0.5 font-mono text-[10px] text-[rgba(17,17,17,0.55)]">
                  {typeof navigator !== 'undefined' && navigator.platform?.includes('Mac') ? '⌘K' : 'Ctrl K'}
                </kbd>
              </div>

              {/* Quick-filter chips — visible immediately under search */}
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`rounded-full border px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] transition-all ${
                    !activeCategory
                      ? 'border-[#111111] bg-[#111111] text-white'
                      : 'border-[rgba(17,17,17,0.20)] text-[rgba(17,17,17,0.60)] hover:border-[rgba(17,17,17,0.40)] hover:text-[#111111]'
                  }`}
                >
                  All · {flat.length}
                </button>
                {mainFaqData.map((cat) => {
                  const isActive = activeCategory === cat.category
                  return (
                    <button
                      key={cat.category}
                      onClick={() => setActiveCategory(isActive ? null : cat.category)}
                      className={`rounded-full border px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] transition-all ${
                        isActive
                          ? 'border-[#FF4F30] bg-[#FF4F30] text-white'
                          : 'border-[rgba(17,17,17,0.20)] text-[rgba(17,17,17,0.60)] hover:border-[rgba(17,17,17,0.40)] hover:text-[#111111]'
                      }`}
                    >
                      {cat.category}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Two-col body — sidebar filter + content */}
        <section className="relative w-full bg-white px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[260px_1fr] lg:gap-16">
            {/* Sticky sidebar — desktop. Acts as filter, not scroll-jump */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[rgba(17,17,17,0.40)]">
                  FILTER BY TOPIC
                </div>
                <nav className="flex flex-col gap-1">
                  <button
                    onClick={() => setActiveCategory(null)}
                    className={`group flex items-center gap-3 border-l-2 py-2 pl-4 text-left text-sm transition-all ${
                      !activeCategory
                        ? 'border-[#FF4F30] text-[#FF4F30] font-semibold'
                        : 'border-transparent text-[rgba(17,17,17,0.55)] hover:text-[#111111] hover:border-[rgba(17,17,17,0.20)]'
                    }`}
                  >
                    <span>All topics</span>
                    <span className="ml-auto font-mono text-[10px] opacity-60">{flat.length}</span>
                  </button>
                  {mainFaqData.map((cat) => {
                    const isActive = activeCategory === cat.category
                    return (
                      <button
                        key={cat.category}
                        onClick={() => setActiveCategory(isActive ? null : cat.category)}
                        className={`group flex items-center gap-3 border-l-2 py-2 pl-4 text-left text-sm transition-all ${
                          isActive
                            ? 'border-[#FF4F30] text-[#FF4F30] font-semibold'
                            : 'border-transparent text-[rgba(17,17,17,0.55)] hover:text-[#111111] hover:border-[rgba(17,17,17,0.20)]'
                        }`}
                      >
                        <span>{cat.category}</span>
                        <span className="ml-auto font-mono text-[10px] opacity-60">
                          {countByCategory.get(cat.category)}
                        </span>
                      </button>
                    )
                  })}
                </nav>
                <div className="mt-8 rounded-2xl border border-[rgba(17,17,17,0.10)] bg-[#DCDBD3] p-5">
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[rgba(17,17,17,0.40)]">
                    STILL STUCK?
                  </div>
                  <p className="mb-4 text-[13px] leading-relaxed text-[rgba(17,17,17,0.70)]">
                    A 30-min call beats reading every FAQ.
                  </p>
                  <button
                    onClick={handleBookCall}
                    className="w-full rounded-full bg-[#111111] px-4 py-2.5 text-[12px] font-semibold text-white transition-colors hover:bg-[#FF4F30]"
                  >
                    Book a Call
                  </button>
                </div>
              </div>
            </aside>

            {/* Mobile: sticky horizontal pill filter */}
            <div className="lg:hidden sticky top-20 z-10 -mx-6 mb-8 overflow-x-auto bg-white/95 px-6 py-3 backdrop-blur-md [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`shrink-0 rounded-full border px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] transition-all ${
                    !activeCategory
                      ? 'border-[#111111] bg-[#111111] text-white'
                      : 'border-[rgba(17,17,17,0.15)] text-[rgba(17,17,17,0.60)]'
                  }`}
                >
                  All · {flat.length}
                </button>
                {mainFaqData.map((cat) => {
                  const isActive = activeCategory === cat.category
                  return (
                    <button
                      key={cat.category}
                      onClick={() => setActiveCategory(isActive ? null : cat.category)}
                      className={`shrink-0 rounded-full border px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] transition-all ${
                        isActive
                          ? 'border-[#FF4F30] bg-[#FF4F30] text-white'
                          : 'border-[rgba(17,17,17,0.15)] text-[rgba(17,17,17,0.60)]'
                      }`}
                    >
                      {cat.category}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Content column */}
            <div>
              {/* Popular cards — only show when idle */}
              {!isFiltering && (
                <div className="mb-14">
                  <div className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[rgba(17,17,17,0.40)]">
                    <Sparkles size={12} className="text-[#FF4F30]" />
                    POPULAR RIGHT NOW
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {popular.map((f) => {
                      const key = `${f.catIndex}-${f.qIndex}`
                      return (
                        <button
                          key={key}
                          onClick={() => {
                            setOpenKey(key)
                            setTimeout(() => {
                              document
                                .getElementById(`q-${key}`)
                                ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                            }, 50)
                          }}
                          className="group flex flex-col items-start gap-2 rounded-xl border border-[rgba(17,17,17,0.10)] bg-[#DCDBD3]/30 p-4 text-left transition-all hover:border-[#FF4F30] hover:bg-[#DCDBD3]/60"
                        >
                          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[rgba(17,17,17,0.40)] group-hover:text-[#FF4F30]">
                            {f.category}
                          </span>
                          <span className="text-[14px] font-semibold leading-snug text-[#111111]">
                            {f.question}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Results header */}
              <div className="mb-6 flex items-center justify-between">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[rgba(17,17,17,0.40)]">
                  {isFiltering ? 'RESULTS' : 'ALL QUESTIONS'} · {filtered.length}
                  {activeCategory && !query && (
                    <span className="ml-2 text-[#FF4F30]">
                      in {activeCategory}
                    </span>
                  )}
                </div>
                {isFiltering && (
                  <button
                    onClick={clearAll}
                    className="font-mono text-[10px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.50)] hover:text-[#FF4F30]"
                  >
                    Clear ×
                  </button>
                )}
              </div>

              {/* Results list */}
              {filtered.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-[rgba(17,17,17,0.15)] bg-[#DCDBD3]/20 p-10 text-center">
                  <p className="text-[15px] text-[rgba(17,17,17,0.60)]">
                    No matching questions for "
                    <span className="font-semibold text-[#111111]">{query}</span>"
                  </p>
                  <p className="mt-2 text-[13px] text-[rgba(17,17,17,0.50)]">
                    The fastest way to get an answer is a 30-min call.
                  </p>
                  <button
                    onClick={handleBookCall}
                    className="mt-5 inline-flex items-center rounded-full bg-[#111111] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#FF4F30]"
                  >
                    Book a Call
                  </button>
                </div>
              ) : isFiltering ? (
                <div className="flex flex-col">
                  {filtered.map((f) => {
                    const key = `${f.catIndex}-${f.qIndex}`
                    const isOpen = openKey === key
                    return (
                      <div
                        key={key}
                        id={`q-${key}`}
                        className="border-b border-[rgba(17,17,17,0.08)] scroll-mt-32"
                      >
                        <button
                          onClick={() => setOpenKey(isOpen ? null : key)}
                          className="group flex w-full items-start justify-between gap-4 py-5 text-left"
                        >
                          <div className="flex flex-col gap-1.5">
                            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[rgba(17,17,17,0.40)] group-hover:text-[#FF4F30]">
                              {f.category}
                            </span>
                            <span className="text-[15px] font-semibold leading-snug text-[#111111] md:text-[16px] group-hover:text-[#FF4F30]">
                              {highlight(f.question)}
                            </span>
                          </div>
                          <ChevronDown
                            size={18}
                            className={`mt-1 shrink-0 transition-all duration-300 ${
                              isOpen ? 'rotate-180 text-[#FF4F30]' : 'text-[rgba(17,17,17,0.35)]'
                            }`}
                          />
                        </button>
                        <div
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="text-[14px] leading-[1.7] text-[rgba(17,17,17,0.60)] md:text-[15px]">
                              {highlight(f.answer)}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="flex flex-col gap-20">
                  {mainFaqData.map((cat, ci) => (
                    <div key={cat.category} id={slug(cat.category)} className="scroll-mt-32">
                      <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#FF4F30]">
                        {String(ci + 1).padStart(2, '0')} / {cat.questions.length} QUESTIONS
                      </div>
                      <h2 className="mb-8 text-[clamp(28px,3.5vw,44px)] font-extrabold leading-[0.95] tracking-[-0.03em] text-[#111111]">
                        {cat.category}
                      </h2>
                      <div className="flex flex-col">
                        {cat.questions.map((q, qi) => {
                          const key = `${ci}-${qi}`
                          const isOpen = openKey === key
                          return (
                            <div
                              key={key}
                              id={`q-${key}`}
                              className="border-b border-[rgba(17,17,17,0.08)] scroll-mt-32"
                            >
                              <button
                                onClick={() => setOpenKey(isOpen ? null : key)}
                                className="group flex w-full items-center justify-between gap-4 py-5 text-left"
                              >
                                <span className="text-[15px] font-semibold leading-snug text-[#111111] md:text-[17px] group-hover:text-[#FF4F30]">
                                  {q.question}
                                </span>
                                <ChevronDown
                                  size={18}
                                  className={`shrink-0 transition-all duration-300 ${
                                    isOpen ? 'rotate-180 text-[#FF4F30]' : 'text-[rgba(17,17,17,0.35)]'
                                  }`}
                                />
                              </button>
                              <div
                                className={`grid transition-all duration-300 ease-in-out ${
                                  isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
                                }`}
                              >
                                <div className="overflow-hidden">
                                  <p className="text-[14px] leading-[1.7] text-[rgba(17,17,17,0.60)] md:text-[15px]">
                                    {q.answer}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                      {cat.relatedLinks && cat.relatedLinks.length > 0 && (
                        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px]">
                          <span className="font-mono uppercase tracking-[0.16em] text-[rgba(17,17,17,0.45)]">
                            Related:
                          </span>
                          {cat.relatedLinks.map((link, li) => (
                            <span key={link.href} className="inline-flex items-center gap-3">
                              <a
                                href={link.href}
                                className="text-[#0A2843] underline decoration-[rgba(10,40,67,0.25)] underline-offset-4 transition-colors hover:text-[#FF4F30] hover:decoration-[#FF4F30]"
                              >
                                {link.text}
                              </a>
                              {li < cat.relatedLinks!.length - 1 && (
                                <span aria-hidden="true" className="text-[rgba(17,17,17,0.25)]">·</span>
                              )}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Oxford CTA */}
        <section className="relative w-full bg-[#0A2843] px-6 py-32 md:px-12 lg:px-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#FF4F30]">
              NOT FINDING IT?
            </div>
            <h2 className="text-[clamp(36px,5vw,64px)] font-black leading-[0.95] tracking-[-0.03em] text-white">
              Ask us directly.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-[rgba(255,255,255,0.65)]">
              30 minutes. No slide deck. Honest answers about your specific situation.
            </p>
            <button
              onClick={handleBookCall}
              className="mt-10 inline-flex items-center rounded-full bg-[#FF4F30] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#E64528]"
            >
              Book a Call
            </button>
          </div>
        </section>
      </main>
    </>
  )
}
