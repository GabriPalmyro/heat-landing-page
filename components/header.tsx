"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Logo from "./logo"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#1D0611]/90 backdrop-blur-sm py-2 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center group">
          <Logo
            size={isScrolled ? "small" : "small"}
            withGlow={true}
            onClick={scrollToTop}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <span className="ml-2 text-xl font-bold text-white cursor-pointer" onClick={scrollToTop}>
            Heat
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-[#FF1D3E] transition-colors"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-white hover:text-[#FF1D3E] transition-colors"
          >
            Recursos
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-white hover:text-[#FF1D3E] transition-colors"
          >
            Depoimentos
          </button>
          <Button
            onClick={() => scrollToSection("cta")}
            className="bg-[#FF1D3E] hover:bg-[#F45454] text-white rounded-full px-6"
          >
            Jogar Agora
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1D0611]/95 absolute top-full left-0 right-0 p-4 shadow-lg backdrop-blur-sm">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-[#FF1D3E] transition-colors py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-white hover:text-[#FF1D3E] transition-colors py-2"
            >
              Recursos
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-white hover:text-[#FF1D3E] transition-colors py-2"
            >
              Depoimentos
            </button>
            <Button
              onClick={() => scrollToSection("cta")}
              className="bg-[#FF1D3E] hover:bg-[#F45454] text-white rounded-full"
            >
              Jogar Agora
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
