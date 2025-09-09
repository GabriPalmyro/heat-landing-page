"use client"

import { useEffect, useState } from "react"
import LanguageSelector from "./language-selector"
import Logo from "./logo"

const translations = {
  'pt-br': {
    features: 'Recursos',
    testimonials: 'Depoimentos',
    support: 'Suporte',
    terms: 'Termos',
    closeMenu: 'Fechar menu',
    openMenu: 'Abrir menu',
    company: 'HEAT APPS LTDA',
    cnpj: 'CNPJ: 62.577.106/0001-00'
  },
  'en': {
    features: 'Features',
    testimonials: 'Testimonials',
    support: 'Support',
    terms: 'Terms',
    closeMenu: 'Close menu',
    openMenu: 'Open menu',
    company: 'HEAT APPS LTDA',
    cnpj: 'CNPJ: 62.577.106/0001-00'
  },
  'es': {
    features: 'Características',
    testimonials: 'Testimonios',
    support: 'Soporte',
    terms: 'Términos',
    closeMenu: 'Cerrar menú',
    openMenu: 'Abrir menú',
    company: 'HEAT APPS LTDA',
    cnpj: 'CNPJ: 62.577.106/0001-00'
  }
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('pt-br')

  useEffect(() => {
    // Detect current language from URL
    const path = window.location.pathname
    if (path.startsWith('/en')) setCurrentLanguage('en')
    else if (path.startsWith('/es')) setCurrentLanguage('es')
    else setCurrentLanguage('pt-br')

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    // If not on main page, navigate to main page first
    if (window.location.pathname !== '/' && !window.location.pathname.startsWith('/#')) {
      const mainPageUrl = currentLanguage === 'pt-br' ? '/' : `/${currentLanguage}`;
      window.location.href = `${mainPageUrl}#${id}`;
      return;
    }
    
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navigateToHome = () => {
    const mainPageUrl = currentLanguage === 'pt-br' ? '/' : `/${currentLanguage}`;
    window.location.href = mainPageUrl;
  }

  const t = translations[currentLanguage as keyof typeof translations]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
         ${isScrolled ? "bg-[#1D0611]/90 backdrop-blur-sm py-2 shadow-lg" : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center group">
          <Logo
            size={"small"}
            withGlow={true}
            onClick={navigateToHome}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="ml-2 flex flex-col">
            <span className="text-xl font-bold text-white cursor-pointer" onClick={navigateToHome}>
              Heat
            </span>
            <span className="text-xs text-white/60 hidden sm:block">
              {t.cnpj}
            </span>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("features")}
            className="text-white hover:text-orange-400 transition-colors duration-200"
          >
            {t.features}
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-white hover:text-orange-400 transition-colors duration-200"
          >
            {t.testimonials}
          </button>
          <a
            href={currentLanguage === 'pt-br' ? '/suporte' : `/${currentLanguage}/support`}
            className="text-white hover:text-orange-400 transition-colors duration-200"
          >
            {t.support}
          </a>
          <a
            href={currentLanguage === 'pt-br' ? '/termos-de-uso' : `/${currentLanguage}/terms-of-use`}
            className="text-white hover:text-orange-400 transition-colors duration-200"
          >
            {t.terms}
          </a>
        </nav>

        <LanguageSelector />
      </div>
    </header>
  )
}
