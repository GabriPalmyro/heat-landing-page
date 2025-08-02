"use client"

import { useMobileRedirect } from '@/hooks/use-mobile-redirect'

interface AutoMobileRedirectProps {
  appStoreUrl?: string
  googlePlayUrl?: string
  redirectDelay?: number
  enabled?: boolean
}

/**
 * Componente invisível que apenas executa o redirect automático
 * sem mostrar nenhuma interface para o usuário
 */
export default function AutoMobileRedirect({
  appStoreUrl = 'https://apps.apple.com/app/id6742337191',
  googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.heatcouple.app',
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
