"use client"

import { useEffect } from 'react'

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
  enableRedirect: true
}

export function useMobileRedirect(options: MobileRedirectOptions = {}) {
  const config = { ...defaultOptions, ...options }

  useEffect(() => {
    if (!config.enableRedirect) return

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

    const redirectToStore = () => {
      const mobileOS = detectMobileOS()
      
      if (mobileOS === 'ios') {
        window.location.href = config.appStoreUrl
      } else if (mobileOS === 'android') {
        window.location.href = config.googlePlayUrl
      }
    }

    // Adiciona um pequeno delay para permitir que a página carregue
    const timer = setTimeout(redirectToStore, config.redirectDelay)

    return () => clearTimeout(timer)
  }, [config])

  return {
    isRedirectEnabled: config.enableRedirect
  }
}
