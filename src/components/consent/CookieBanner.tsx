"use client"

import React from "react"
import { useConsent } from "./ConsentProvider"

export const CookieBanner: React.FC = () => {
  const { isBannerVisible, acceptAll, rejectAll, openModal } = useConsent()
  if (!isBannerVisible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-white border-t border-gray-200 p-4 shadow">
      <div className="mx-auto max-w-5xl flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-gray-800">
          We use cookies to provide essential site functionality and, with your consent, functional, analytics, and marketing
          features. You can change your choices anytime.
        </p>
        <div className="flex gap-2 shrink-0">
          <button className="px-3 py-2 text-sm border rounded" onClick={rejectAll}>Reject all</button>
          <button className="px-3 py-2 text-sm border rounded" onClick={openModal}>Cookie settings</button>
          <button className="px-3 py-2 text-sm bg-black text-white rounded" onClick={acceptAll}>Accept all</button>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner


