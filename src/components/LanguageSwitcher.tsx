'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded transition-colors ${
          language === 'en'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        aria-label="Switch to English"
      >
        🇬🇧 EN
      </button>
      <button
        onClick={() => setLanguage('sv')}
        className={`px-3 py-1 rounded transition-colors ${
          language === 'sv'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        aria-label="Byt till Svenska"
      >
        🇸🇪 SV
      </button>
    </div>
  )
}
