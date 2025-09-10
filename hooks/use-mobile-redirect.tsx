"use client"

import { getLocaleFromPathname } from '@/src/i18n'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export interface MobileRedirectOptions {
  appStoreUrl?: string
  googlePlayUrl?: string
  redirectDelay?: number
  enableRedirect?: boolean
}

const defaultOptions: Required<MobileRedirectOptions> = {
  appStoreUrl: 'https://apps.apple.com/app/id6742337191',
  googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.heatcouple.app',
  redirectDelay: 300,
  enableRedirect: false
}

export function useMobileRedirect(options: MobileRedirectOptions = {}) {
  const config = { ...defaultOptions, ...options }
  const [isFromTikTok, setIsFromTikTok] = useState(false)
  const [mobileOS, setMobileOS] = useState<'ios' | 'android' | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Detecta se veio do TikTok
    const urlParams = new URLSearchParams(window.location.search)
    const fromTikTok = urlParams.get('tiktok') === 'true'
    const testMode = urlParams.get('test') === 'true' // Parâmetro para testar
    setIsFromTikTok(fromTikTok)

    const detectMobileOS = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera

      // Detecta iOS
      if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        return 'ios'
      }

      // Detecta Android
      if (/android/i.test(userAgent)) {
        return 'android'
      }

      return null
    }

    const detectedOS = detectMobileOS()
    // Se estiver em modo de teste, força iOS para mostrar o banner
    const finalOS = testMode ? 'ios' : detectedOS
    setMobileOS(finalOS)

    // Só faz redirect se não veio do TikTok e o redirect estiver habilitado
    if (!config.enableRedirect || fromTikTok) return

    const redirectToStore = () => {
      if (detectedOS === 'ios') {
        window.location.href = config.appStoreUrl
      } else if (detectedOS === 'android') {
        // Redirect to appropriate Android page based on locale
        const currentLocale = getLocaleFromPathname(window.location.pathname)
        const androidPath = currentLocale === 'pt' ? '/android' : 
                           currentLocale === 'en' ? '/en/android' :
                           '/es/android'
        router.push(androidPath)
      }
    }

    // Adiciona um pequeno delay para permitir que a página carregue
    const timer = setTimeout(redirectToStore, config.redirectDelay)

    return () => clearTimeout(timer)
  }, [config, router])

  return {
    isRedirectEnabled: config.enableRedirect,
    isFromTikTok,
    mobileOS,
    shouldShowTikTokMessage: isFromTikTok && mobileOS === 'ios'
  }
}
