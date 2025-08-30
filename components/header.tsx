"use client"

import { useEffect, useState } from "react"
import LanguageSelector from "./language-selector"
import Logo from "./logo"

const translations = {
  'pt-br': {
    about: 'Sobre',
    features: 'Recursos',
    testimonials: 'Depoimentos',
    playNow: 'Jogar Agora',
    closeMenu: 'Fechar menu',
    openMenu: 'Abrir menu'
  },
  'en': {
    about: 'About',
    features: 'Features',
    testimonials: 'Testimonials',
    playNow: 'Play Now',
    closeMenu: 'Close menu',
    openMenu: 'Open menu'
  },
  'es': {
    about: 'Acerca',
    features: 'Características',
    testimonials: 'Testimonios',
    playNow: 'Jugar Ahora',
    closeMenu: 'Cerrar menú',
    openMenu: 'Abrir menú'
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
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
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
            onClick={scrollToTop}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <span className="ml-2 text-xl font-bold text-white cursor-pointer" onClick={scrollToTop}>
            Heat
          </span>
        </div>
        <LanguageSelector />
      </div>
    </header>
  )
}
