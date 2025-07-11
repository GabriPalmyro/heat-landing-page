"use client"

import { Button } from '@/components/ui/button'
import { useMobileRedirect } from '@/hooks/use-mobile-redirect'
import { X } from 'lucide-react'
import { useState } from 'react'

export default function TikTokIOSBanner() {
  const { shouldShowTikTokMessage } = useMobileRedirect()
  const [isVisible, setIsVisible] = useState(true)

  if (!shouldShowTikTokMessage || !isVisible) {
    return null
  }

  const closeBanner = () => {
    setIsVisible(false)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#8F0015] to-[#330A1E] text-white p-4 shadow-lg border-b-2 border-white/20">
      <div className="max-w-lg mx-auto text-center space-y-3 relative">
        {/* Botão de fechar */}
        <Button
          onClick={closeBanner}
          variant="ghost"
          size="sm"
          className="absolute -top-1 -right-1 text-white hover:bg-white/20 p-1 h-auto w-auto"
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-2xl">🍎</span>
          <h3 className="text-lg font-bold">Usuário iOS do TikTok</h3>
        </div>
        
        <div className="text-sm leading-relaxed space-y-2">
          <p>
            Para baixar o app <span className="font-bold">Heat</span>, você precisa sair do navegador do TikTok:
          </p>
          
          <div className="bg-white/10 rounded-lg p-3 text-left">
            <p className="font-semibold mb-2">📱 Como fazer:</p>
            <ol className="space-y-1 text-xs">
              <li>1. Toque nos <span className="font-bold">3 pontinhos (⋯)</span> no canto superior direito</li>
              <li>2. Selecione <span className="font-bold">"Abrir no Safari"</span> ou <span className="font-bold">"Abrir no navegador"</span></li>
              <li>3. Clique em "Instale na App Store" e você será redirecionado para o download! </li>
            </ol>
          </div>
        </div>
        
        <p className="text-xs opacity-75">
          💡 Depois de abrir no Safari, use os botões de download desta página
        </p>
      </div>
    </div>
  )
}
