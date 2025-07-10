"use client"

import { Button } from '@/components/ui/button'
import { useMobileRedirect } from '@/hooks/use-mobile-redirect'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

interface MobileRedirectBannerProps {
  appStoreUrl?: string
  googlePlayUrl?: string
}

export default function MobileRedirectBanner({ 
  appStoreUrl = 'https://apps.apple.com/app/heat-sex-game/id6742337191',
  googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.heatcouple.app'
}: MobileRedirectBannerProps) {
  const [showBanner, setShowBanner] = useState(false)
  const [redirectDisabled, setRedirectDisabled] = useState(false)
  const [mobileOS, setMobileOS] = useState<'ios' | 'android' | null>(null)

  // Usar o hook de redirect com redirect desabilitado
  useMobileRedirect({
    appStoreUrl,
    googlePlayUrl,
    redirectDelay: 2000,
    enableRedirect: false
  })

  useEffect(() => {
    const detectMobileOS = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera

      if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        return 'ios'
      }

      if (/android/i.test(userAgent)) {
        return 'android'
      }

      return null
    }

    const detectedOS = detectMobileOS()
    setMobileOS(detectedOS)

    // Mostrar banner apenas em dispositivos móveis
    if (detectedOS) {
      setShowBanner(true)
      // Adiciona padding-top ao body para evitar que o conteúdo fique escondido
      document.body.style.paddingTop = '80px'
    }
  }, [])

  useEffect(() => {
    // Remove padding quando o banner é escondido
    if (!showBanner) {
      document.body.style.paddingTop = '0'
    }
    
    return () => {
      // Cleanup ao desmontar o componente
      document.body.style.paddingTop = '0'
    }
  }, [showBanner])

  const handleStayOnSite = () => {
    setRedirectDisabled(true)
    setShowBanner(false)
    // Remove o padding do body
    document.body.style.paddingTop = '0'
  }

  const handleGoToStore = () => {
    if (mobileOS === 'ios') {
      window.location.href = appStoreUrl
    } else if (mobileOS === 'android') {
      window.location.href = googlePlayUrl
    }
  }

  if (!showBanner || !mobileOS) {
    return null
  }

  const storeName = mobileOS === 'ios' ? 'App Store' : 'Google Play'
  const storeIcon = mobileOS === 'ios' ? '🍎' : '📱'

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#FF1D3E] text-white p-4 shadow-lg">
      <div className="max-w-sm mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1">
          <span className="text-xl">{storeIcon}</span>
          <div className="flex-1">
            <p className="text-sm font-medium">
              Abrir no app Heat
            </p>
            <p className="text-xs opacity-90">
              Melhor experiência no {storeName}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={handleStayOnSite}
            className="text-white hover:bg-white/20 p-1 h-auto"
          >
            <X className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            onClick={handleGoToStore}
            className="bg-white text-[#FF1D3E] hover:bg-white/90 text-xs px-3 py-1"
          >
            Abrir
          </Button>
        </div>
      </div>
    </div>
  )
}
