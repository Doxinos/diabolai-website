"use client"

import Link from "next/link"
import { useConsent } from "./consent/ConsentProvider"

export default function Footer() {
  const { openModal } = useConsent()
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-gray-600">© {new Date().getFullYear()} diabol</p>
        <nav className="flex items-center gap-4">
          <Link href="/privacy" className="hover:underline">Privacy</Link>
          <Link href="/cookies" className="hover:underline">Cookies</Link>
          <button onClick={openModal} className="hover:underline">Change cookie settings</button>
        </nav>
      </div>
    </footer>
  )
}


