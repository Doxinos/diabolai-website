'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCallback, useState, useEffect, useRef } from 'react'
import { trackScheduleClick } from '@/utils/analytics'
import { ChevronDown } from 'lucide-react'

export default function Navigation() {
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)
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

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <nav className="container-max flex items-center justify-between px-6 md:px-8 h-16">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logos/Diabol_Logo_White-01.png" alt="diabol logo" width={120} height={40} />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-white/80">
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
          <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
          <Link href="https://blog.diabolai.com" className="hover:text-white transition-colors">Blog</Link>
        </div>

        <button onClick={handleBookDemo} className="btn-primary text-sm px-6 py-2">
          Book a Demo
        </button>
      </nav>
    </header>
  )
}
