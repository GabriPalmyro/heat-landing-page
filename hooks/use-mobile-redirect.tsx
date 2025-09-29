"use client"

import { useEffect, useMemo, useState } from 'react'

import { APP_STORE_URL, getAndroidDetailRoute } from '@/lib/download-links'
import { getLocaleFromPathname } from '@/src/i18n'

export interface MobileRedirectOptions {
  appStoreUrl?: string
  googlePlayUrl?: string
  redirectDelay?: number
  enableRedirect?: boolean
}

export function useMobileRedirect(options: MobileRedirectOptions = {}) {
  const config = useMemo(() => ({
    appStoreUrl: options.appStoreUrl ?? APP_STORE_URL,
    googlePlayUrl: options.googlePlayUrl,
    redirectDelay: options.redirectDelay ?? 300,
    enableRedirect: options.enableRedirect ?? false
  }), [options.appStoreUrl, options.googlePlayUrl, options.redirectDelay, options.enableRedirect])
  const [isFromTikTok, setIsFromTikTok] = useState(false)
  const [mobileOS, setMobileOS] = useState<'ios' | 'android' | null>(null)

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
        const currentLocale = getLocaleFromPathname(window.location.pathname)
        const androidDetailPath = getAndroidDetailRoute(currentLocale)
        window.location.href = config.googlePlayUrl ?? androidDetailPath
      }
    }

    // Adiciona um pequeno delay para permitir que a página carregue
    const timer = setTimeout(redirectToStore, config.redirectDelay)

    return () => clearTimeout(timer)
  }, [config])

  return {
    isRedirectEnabled: config.enableRedirect,
    isFromTikTok,
    mobileOS,
    shouldShowTikTokMessage: isFromTikTok && mobileOS === 'ios'
  }
}
