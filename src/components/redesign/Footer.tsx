'use client'

import Link from 'next/link'
import { useCallback } from 'react'
import { useConsent } from '@/components/consent/ConsentProvider'
import { trackScheduleClick } from '@/utils/analytics'

export default function Footer() {
  const { openModal } = useConsent()

  const handleBookCall = useCallback(() => {
    trackScheduleClick('footer')
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      ;(window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/peter-diabol/30min',
      })
    }
  }, [])

  return (
    <footer data-theme="dark" className="relative -mt-12 w-full rounded-t-[40px] bg-[#0A2843] px-6 pt-24 pb-12 md:px-12">
      <div className="absolute left-0 top-0 h-[1px] w-full bg-[rgba(255,255,255,0.10)]" />
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 md:flex-row md:items-end">
        {/* Left */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-4xl font-bold tracking-tight text-white no-underline">
            Diabol.
          </Link>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)]">
            AI Voice · AI Content · AI Avatars
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.30)]">
            © {new Date().getFullYear()} Diabol. All rights reserved.
          </div>
        </div>

        {/* Center links */}
        <div className="flex flex-wrap gap-8 font-mono text-[12px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.50)]">
          <Link href="/privacy" className="transition-colors hover:text-[rgba(255,255,255,0.90)] no-underline">
            Privacy
          </Link>
          <Link href="/cookies" className="transition-colors hover:text-[rgba(255,255,255,0.90)] no-underline">
            Cookies
          </Link>
          <button onClick={openModal} className="transition-colors hover:text-[rgba(255,255,255,0.90)]">
            Cookie Settings
          </button>
          <Link
            href="https://www.linkedin.com/company/diabol-ab"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[rgba(255,255,255,0.90)] no-underline"
          >
            LinkedIn
          </Link>
          <button onClick={handleBookCall} className="transition-colors hover:text-[rgba(255,255,255,0.90)]">
            Book a Call
          </button>
        </div>

        {/* Right status */}
        <div className="flex flex-col gap-3 font-mono text-[11px] tracking-[0.14em] text-[rgba(255,255,255,0.45)]">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            SYSTEM OPERATIONAL
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[#FF4F30] animate-pulse" />
            VOICE AGENTS LIVE
          </div>
        </div>
      </div>
    </footer>
  )
}
