"use client"

import React from "react"
import { useConsent } from "./ConsentProvider"

const Row: React.FC<{ label: string; checked: boolean; onChange?: (v: boolean) => void; disabled?: boolean; helper?: string }> = ({ label, checked, onChange, disabled, helper }) => (
  <label className="flex items-start gap-3 py-2">
    <input type="checkbox" className="mt-1" checked={checked} onChange={(e) => onChange?.(e.target.checked)} disabled={disabled} />
    <span className="text-sm">
      <span className="font-medium">{label}</span>
      {helper ? <span className="block text-gray-600">{helper}</span> : null}
    </span>
  </label>
)

export const CookieSettingsModal: React.FC = () => {
  const { isModalOpen, closeModal, consent, toggleCategory, savePreferences } = useConsent()
  if (!isModalOpen) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow w-full max-w-lg p-6">
        <h2 className="text-lg font-semibold mb-1">Cookie settings</h2>
        <p className="text-sm text-gray-700 mb-4">Select which categories you want to allow. Necessary cookies are always on.</p>

        <div className="divide-y">
          <Row label="Necessary" checked={true} disabled helper="Required for core site functions." />
          <Row label="Functional" checked={consent.functional} onChange={(v) => toggleCategory("functional", v)} helper="Calendly widget, ElevenLabs voice widget, UI preferences." />
          <Row label="Analytics" checked={consent.analytics} onChange={(v) => toggleCategory("analytics", v)} helper="Measurement and performance." />
          <Row label="Marketing" checked={consent.marketing} onChange={(v) => toggleCategory("marketing", v)} helper="Third‑party embeds and remarketing." />
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button className="px-3 py-2 text-sm border rounded" onClick={closeModal}>Cancel</button>
          <button className="px-3 py-2 text-sm bg-black text-white rounded" onClick={() => savePreferences({})}>Save preferences</button>
        </div>
      </div>
    </div>
  )
}

export default CookieSettingsModal


