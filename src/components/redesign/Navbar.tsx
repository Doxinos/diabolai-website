'use client'

import Link from 'next/link'
import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Menu, X } from 'lucide-react'
import { trackScheduleClick } from '@/utils/analytics'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Navbar({ forceDark = false }: { forceDark?: boolean }) {
  const navRef = useRef<HTMLElement>(null)
  const [onDark, setOnDark] = useState(forceDark)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleBookCall = useCallback(() => {
    trackScheduleClick('navbar')
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      ;(window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/peter-diabol/30min',
      })
    }
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    if (forceDark) {
      const handleDarkScroll = () => {
        setOnDark(window.scrollY <= window.innerHeight * 0.8)
      }
      window.addEventListener('scroll', handleDarkScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('scroll', handleDarkScroll)
      }
    }

    const ctx = gsap.context(() => {
      const darkSections = document.querySelectorAll('[data-theme="dark"]')
      darkSections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 60px',
          end: 'bottom 60px',
          onEnter: () => setOnDark(true),
          onLeave: () => setOnDark(false),
          onEnterBack: () => setOnDark(true),
          onLeaveBack: () => setOnDark(false),
        })
      })
    })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      ctx.revert()
    }
  }, [forceDark])

  const navLinks = [
    { label: 'AI Voice', href: '/ai-voice' },
    { label: 'AI Content', href: '/ai-content' },
    { label: 'AI Avatars', href: '/ai-avatars' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Blog', href: 'https://blog.diabolai.com' },
  ]

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-6 left-1/2 z-[100] flex w-full max-w-7xl -translate-x-1/2 items-center justify-between rounded-full px-8 md:px-16 lg:px-20 py-3 transition-all duration-500
          ${scrolled
            ? onDark
              ? 'bg-[#0A2843]/80 border border-white/10 backdrop-blur-md'
              : 'bg-[#DCDBD3]/80 border border-[rgba(17,17,17,0.10)] backdrop-blur-md'
            : ''
          }`}
      >
        <Link
          href="/"
          className={`text-[28px] font-bold tracking-tight transition-colors duration-500 no-underline ${
            onDark ? 'text-white' : 'text-[#111111]'
          }`}
        >
          Diabol
        </Link>

        {/* Desktop links */}
        <div className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`group relative text-sm no-underline transition-colors duration-500 ${
                onDark
                  ? 'text-white/65 hover:text-white/95'
                  : 'text-[rgba(17,17,17,0.60)] hover:text-[#111111]'
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#FF4F30] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={handleBookCall}
          className={`hidden md:block btn-magnetic rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-500 ${
            onDark
              ? 'bg-white/10 text-white hover:bg-white/20'
              : 'bg-[#111111] text-[#DCDBD3] hover:bg-[#222222]'
          }`}
        >
          Book a Call
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 transition-colors ${onDark ? 'text-white' : 'text-[#111111]'}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 bg-[#0A2843] z-[99] pt-24">
          <div className="flex flex-col p-8 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="py-4 text-2xl font-bold text-white border-b border-white/10 no-underline"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                handleBookCall()
                setMobileOpen(false)
              }}
              className="mt-6 btn-magnetic rounded-full bg-[#FF4F30] px-8 py-4 text-sm font-bold text-white hover:bg-[#E64528]"
            >
              Book a Call
            </button>
          </div>
        </div>
      )}
    </>
  )
}
