'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCallback } from 'react'

export default function Navigation() {
  const openCalendly = useCallback(() => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/peter-diabol/30min'
      })
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <nav className="container-max flex items-center justify-between px-6 md:px-8 h-16">
        <Link href="#hero" className="flex items-center gap-3">
          <Image src="/logos/Diabol_Logo_White-01.png" alt="DiabolAI" width={120} height={40} />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-white/80">
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#why-us" className="hover:text-white transition-colors">Why us</a>
          <a href="#tech" className="hover:text-white transition-colors">Tech</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <button onClick={openCalendly} className="btn-primary ml-4">Book a Demo</button>
      </nav>
    </header>
  )
}


