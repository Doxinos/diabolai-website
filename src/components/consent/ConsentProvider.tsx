"use client"

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

export type ConsentCategory = "necessary" | "functional" | "analytics" | "marketing"

export type ConsentState = Record<ConsentCategory, boolean>

type ConsentContextValue = {
  consent: ConsentState
  isBannerVisible: boolean
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
  acceptAll: () => void
  rejectAll: () => void
  savePreferences: (next: Partial<ConsentState>) => void
  toggleCategory: (category: Exclude<ConsentCategory, "necessary">, value: boolean) => void
}

const ConsentContext = createContext<ConsentContextValue | null>(null)

const STORAGE_KEY = "diabol_consent_v1"

const defaultConsent: ConsentState = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
}

export const useConsent = (): ConsentContextValue => {
  const ctx = useContext(ConsentContext)
  if (!ctx) {
    throw new Error("useConsent must be used within ConsentProvider")
  }
  return ctx
}

export const ConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<ConsentState>(defaultConsent)
  const [hasSet, setHasSet] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null
      if (raw) {
        const parsed = JSON.parse(raw) as ConsentState
        setConsent({ ...defaultConsent, ...parsed, necessary: true })
        setHasSet(true)
      }
    } catch {
      // ignore storage errors
    }
  }, [])

  useEffect(() => {
    // reflect categories as data attributes for CSS if needed
    if (typeof document !== "undefined") {
      document.documentElement.dataset.functional = String(consent.functional)
      document.documentElement.dataset.analytics = String(consent.analytics)
      document.documentElement.dataset.marketing = String(consent.marketing)
    }
  }, [consent])

  const persist = useCallback((next: ConsentState) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      // ignore
    }
  }, [])

  const acceptAll = useCallback(() => {
    const next: ConsentState = { necessary: true, functional: true, analytics: true, marketing: true }
    setConsent(next)
    persist(next)
    setHasSet(true)
  }, [persist])

  const rejectAll = useCallback(() => {
    const next: ConsentState = { necessary: true, functional: false, analytics: false, marketing: false }
    setConsent(next)
    persist(next)
    setHasSet(true)
  }, [persist])

  const savePreferences = useCallback(
    (partial: Partial<ConsentState>) => {
      const next: ConsentState = { ...consent, ...partial, necessary: true }
      setConsent(next)
      persist(next)
      setHasSet(true)
      setIsModalOpen(false)
    },
    [consent, persist]
  )

  const toggleCategory = useCallback(
    (category: Exclude<ConsentCategory, "necessary">, value: boolean) => {
      setConsent((prev) => ({ ...prev, [category]: value }))
    },
    []
  )

  const value = useMemo<ConsentContextValue>(() => ({
    consent,
    isBannerVisible: !hasSet,
    isModalOpen,
    openModal: () => setIsModalOpen(true),
    closeModal: () => setIsModalOpen(false),
    acceptAll,
    rejectAll,
    savePreferences,
    toggleCategory,
  }), [acceptAll, consent, hasSet, isModalOpen, rejectAll, savePreferences, toggleCategory])

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
}


