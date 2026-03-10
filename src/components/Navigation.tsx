'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCallback, useState, useEffect } from 'react'
import { trackScheduleClick } from '@/utils/analytics'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleBookDemo = useCallback(() => {
    trackScheduleClick('navigation')
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/peter-diabol/30min'
      })
    }
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <nav className="container-max flex items-center justify-between px-6 md:px-8 h-16">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logos/Diabol_Logo_White-01.png" alt="diabol logo" width={120} height={40} />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-white/80">
          <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
          <Link href="https://blog.diabolai.com" className="hover:text-white transition-colors">Blog</Link>
        </div>

        {/* Desktop Book a Demo button */}
        <button onClick={handleBookDemo} className="hidden md:block btn-primary text-sm px-6 py-2">
          Book a Demo
        </button>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-black z-40 [touch-action:manipulation]">
          <div className="flex flex-col p-6 space-y-4">
            <Link
              href="/faq"
              className="py-3 text-lg text-white/80 hover:text-white transition-colors border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>

            <Link
              href="https://blog.diabolai.com"
              className="py-3 text-lg text-white/80 hover:text-white transition-colors border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>

            <button
              onClick={() => {
                handleBookDemo()
                setIsMobileMenuOpen(false)
              }}
              className="btn-primary text-base px-6 py-3 mt-4"
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
