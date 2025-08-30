"use client"

import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

interface LanguageSelectorProps {
  className?: string
}

interface Language {
  code: string
  flag: string
  name: string
  path: string
}

const languages: Language[] = [
  { code: 'pt-br', flag: '🇧🇷', name: 'PT', path: '/' },
  { code: 'en', flag: '🇺🇸', name: 'EN', path: '/en' },
  { code: 'es', flag: '🇪🇸', name: 'ES', path: '/es' }
]

function getCurrentLanguage(): Language {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname
    if (path.startsWith('/en')) return languages[1]
    if (path.startsWith('/es')) return languages[2]
  }
  return languages[0] // default to Portuguese
}

export default function LanguageSelector({ className = "" }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0])

  useEffect(() => {
    setCurrentLanguage(getCurrentLanguage())
  }, [])

  const handleLanguageChange = (language: Language) => {
    if (typeof window !== 'undefined') {
      window.location.href = language.path
    }
    setIsOpen(false)
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-white transition-all duration-200 border border-white/20 hover:border-white/30"
        aria-label="Selecionar idioma"
      >
        <span className="text-sm">{currentLanguage.flag}</span>
        <span className="text-sm font-medium hidden sm:inline">{currentLanguage.name}</span>
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Overlay to close dropdown when clicking outside */}
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-20 min-w-[120px]">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                  currentLanguage.code === language.code
                    ? 'bg-[#FF1D3E] text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{language.flag}</span>
                <span className="font-medium">{language.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
