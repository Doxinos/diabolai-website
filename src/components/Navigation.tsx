'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCallback, useState, useEffect, useRef } from 'react'
import { trackScheduleClick } from '@/utils/analytics'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleBookDemo = useCallback(() => {
    trackScheduleClick('navigation')
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/peter-diabol/30min'
      })
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsIndustriesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu on route change or resize
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
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              Industries
              <ChevronDown className={`w-4 h-4 transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`} />
            </button>

            {isIndustriesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg">
                <Link
                  href="/real-estate"
                  className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsIndustriesOpen(false)}
                >
                  Real Estate
                </Link>
              </div>
            )}
          </div>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
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
        <div className="md:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-sm z-40">
          <div className="flex flex-col p-6 space-y-4">
            {/* Services link */}
            <Link
              href="/services"
              className="py-3 text-lg text-white/80 hover:text-white transition-colors border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>

            {/* Industries dropdown */}
            <div>
              <button
                onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                className="flex items-center justify-between w-full py-3 text-lg text-white/80 hover:text-white transition-colors border-b border-white/10"
              >
                Industries
                <ChevronDown className={`w-5 h-5 transition-transform ${isMobileIndustriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileIndustriesOpen && (
                <div className="pl-4 py-2">
                  <Link
                    href="/real-estate"
                    className="block py-2 text-white/70 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Real Estate
                  </Link>
                </div>
              )}
            </div>

            {/* About link */}
            <Link
              href="/about"
              className="py-3 text-lg text-white/80 hover:text-white transition-colors border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>

            {/* FAQ link */}
            <Link
              href="/faq"
              className="py-3 text-lg text-white/80 hover:text-white transition-colors border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>

            {/* Blog link */}
            <Link
              href="https://blog.diabolai.com"
              className="py-3 text-lg text-white/80 hover:text-white transition-colors border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>

            {/* Book a Demo button */}
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
