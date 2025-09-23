'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCallback } from 'react'
import { trackScheduleClick } from '@/utils/analytics'

export default function Navigation() {
  const handleBookDemo = useCallback(() => {
    trackScheduleClick('navigation')
    // Calendly badge widget handles the booking flow
  }, [])

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <nav className="container-max flex items-center justify-between px-6 md:px-8 h-16">
        <Link href="#hero" className="flex items-center gap-3">
          <Image src="/logos/Diabol_Logo_White-01.png" alt="diabol logo" width={120} height={40} />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-white/80">
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#why-us" className="hover:text-white transition-colors">Why us</a>
          <a href="#tech" className="hover:text-white transition-colors">Tech</a>
          <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <button onClick={handleBookDemo} className="btn-primary text-sm px-6 py-2">
          Book a Demo
        </button>
      </nav>
    </header>
  )
}
