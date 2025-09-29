"use client"

import { useMobileRedirect } from '@/hooks/use-mobile-redirect'
import { APP_STORE_URL } from '@/lib/download-links'

interface AutoMobileRedirectProps {
  appStoreUrl?: string
  googlePlayUrl?: string
  redirectDelay?: number
  enabled?: boolean
}

/**
 * Componente invisível que apenas executa o redirect automático
 * sem mostrar nenhuma interface para o usuário.
 * Android users will be redirected to the appropriate locale-specific Android page.
 */
export default function AutoMobileRedirect({
  appStoreUrl = APP_STORE_URL,
  googlePlayUrl,
  redirectDelay = 1000,
  enabled = false
}: AutoMobileRedirectProps) {
  useMobileRedirect({
    appStoreUrl,
    googlePlayUrl,
    redirectDelay,
    enableRedirect: enabled
  })

  return null
}
