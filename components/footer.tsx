"use client"

import { Heart } from "lucide-react"
import DownloadButtons from "./download-buttons"
import Logo from "./logo"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="w-full bg-[#1D0611] border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-3">
              <Logo 
                size="small" 
                withGlow={true} 
                onClick={scrollToTop}
                className="transition-transform duration-300 hover:scale-110"
              />
              <span className="text-2xl font-bold text-white cursor-pointer" onClick={scrollToTop}>
                Heat
              </span>
            </div>
            <p className="text-white/70 text-sm text-center md:text-left max-w-xs">
              O jogo mais quente para casais. Transforme momentos comuns em experiências inesquecíveis.
            </p>
          </div>

          {/* Download Section */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-white font-semibold text-lg">Baixe Agora</h3>
            <DownloadButtons variant="secondary" size="sm" />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h3 className="text-white font-semibold text-lg">Navegação</h3>
            <nav className="flex flex-col space-y-2 text-center md:text-right">
              <button
                onClick={() => scrollToSection("about")}
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Recursos
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Depoimentos
              </button>
              <a
                href="/termos-de-uso"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Termos de Uso
              </a>
              <a
                href="/politicas-de-privacidade"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Políticas de Privacidade
              </a>
              <a
                href="/exclusao-de-conta"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Exclusão de Conta
              </a>
              <a
                href="/suporte"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Suporte
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/50 text-sm">
            © 2024 Heat. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-1 text-white/50 text-sm">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-[#FF1D3E] fill-current" />
            <span>para casais</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
