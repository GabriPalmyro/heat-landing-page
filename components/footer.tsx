"use client"

import { useTranslations } from "@/hooks/use-translations"
import { Heart } from "lucide-react"
import DownloadButtons from "./download-buttons"
import Logo from "./logo"

export default function Footer() {
  const { t } = useTranslations()
  
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
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
              {t('footer.description')}
            </p>
          </div>

          {/* Company Information */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="text-white font-semibold text-lg">{t('footer.companyTitle')}</h3>
            <div className="text-white/70 text-xs space-y-1 text-center md:text-left">
              <p className="font-medium text-white">{t('footer.companyInfo.name')}</p>
              <p>{t('footer.companyInfo.fantasyName')}</p>
              <p>{t('footer.companyInfo.cnpj')}</p>
              <p>{t('footer.companyInfo.address')}</p>
              <p>{t('footer.companyInfo.city')}</p>
              <p>{t('footer.companyInfo.cep')}</p>
              <a 
                href={`mailto:${t('footer.companyInfo.email')}`}
                className="text-orange-400 hover:text-orange-300 transition-colors"
              >
                {t('footer.companyInfo.email')}
              </a>
              <p>{t('footer.companyInfo.phone')}</p>
            </div>
          </div>

          {/* Download Section */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-white font-semibold text-lg">{t('footer.downloadTitle')}</h3>
            <DownloadButtons variant="secondary" size="sm" />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h3 className="text-white font-semibold text-lg">{t('footer.navigationTitle')}</h3>
            <nav className="flex flex-col space-y-2 text-center md:text-right">
              <button
                onClick={() => scrollToSection("about")}
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                {t('footer.aboutNav')}
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                {t('footer.featuresNav')}
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                {t('footer.testimonialsNav')}
              </button>
              <div className="pt-2 border-t border-white/10">
                <p className="text-white/50 text-xs mb-2">Português</p>
                <div className="flex flex-col space-y-1">
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
                </div>
              </div>
              <div className="pt-2">
                <p className="text-white/50 text-xs mb-2">English</p>
                <div className="flex flex-col space-y-1">
                  <a
                    href="/en/terms-of-use"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Terms of Use
                  </a>
                  <a
                    href="/en/privacy-policy"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/en/account-deletion"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Account Deletion
                  </a>
                  <a
                    href="/en/support"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Support
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/50 text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center space-x-1 text-white/50 text-sm">
            <span>{t('footer.madeWith')}</span>
            <Heart className="h-4 w-4 text-[#FF1D3E] fill-current" />
            <span>{t('footer.forCouples')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
