"use client"

import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

interface GooglePlayRestrictionDialogProps {
  isOpen: boolean
  onClose: () => void
  language: 'pt-br' | 'en' | 'es'
}

const messages = {
  'pt-br': {
    title: '⚠️ App Temporariamente Indisponível na Play Store',
    description: 'Infelizmente, nosso aplicativo Heat está temporariamente bloqueado na Google Play Store devido a algumas restrições da loja. Estamos trabalhando arduamente para resolver essa situação o mais rápido possível.',
    explanation: 'Estamos explorando alternativas como:',
    alternatives: [
      'Redistribuição através de outras plataformas confiáveis',
      'Disponibilização de download direto (APK)',
      'Reenvio para aprovação na Play Store com as devidas correções'
    ],
    commitment: 'Nossa equipe está dedicada a garantir que você tenha acesso ao Heat em breve. Agradecemos sua paciência e compreensão.',
    action: 'Entendi',
    ios_available: '💡 O aplicativo continua totalmente disponível na App Store para dispositivos iOS!'
  },
  'en': {
    title: '⚠️ App Temporarily Unavailable on Play Store',
    description: 'Unfortunately, our Heat app is temporarily blocked on the Google Play Store due to some store restrictions. We are working hard to resolve this situation as quickly as possible.',
    explanation: 'We are exploring alternatives such as:',
    alternatives: [
      'Redistribution through other trusted platforms',
      'Direct download availability (APK)',
      'Resubmission to Play Store with proper corrections'
    ],
    commitment: 'Our team is dedicated to ensuring you have access to Heat soon. We appreciate your patience and understanding.',
    action: 'Got it',
    ios_available: '💡 The app remains fully available on the App Store for iOS devices!'
  },
  'es': {
    title: '⚠️ App Temporalmente No Disponible en Play Store',
    description: 'Desafortunadamente, nuestra aplicación Heat está temporalmente bloqueada en Google Play Store debido a algunas restricciones de la tienda. Estamos trabajando duro para resolver esta situación lo más rápido posible.',
    explanation: 'Estamos explorando alternativas como:',
    alternatives: [
      'Redistribución a través de otras plataformas confiables',
      'Disponibilidad de descarga directa (APK)',
      'Reenvío a Play Store con las correcciones adecuadas'
    ],
    commitment: 'Nuestro equipo está dedicado a asegurar que tengas acceso a Heat pronto. Agradecemos tu paciencia y comprensión.',
    action: 'Entendido',
    ios_available: '💡 ¡La aplicación sigue completamente disponible en la App Store para dispositivos iOS!'
  }
}

export default function GooglePlayRestrictionDialog({ 
  isOpen, 
  onClose, 
  language 
}: GooglePlayRestrictionDialogProps) {
  const content = messages[language]

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-md mx-auto bg-white rounded-lg shadow-xl border-2 border-[#FF1D3E]/20">
        <AlertDialogHeader className="text-center">
          <AlertDialogTitle className="text-lg font-bold text-[#FF1D3E] mb-2">
            {content.title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-700 text-sm leading-relaxed">
            <div className="space-y-4">
              <p>{content.description}</p>
              
              <div className="bg-[#FF1D3E]/5 p-3 rounded-lg text-left">
                <p className="font-semibold text-[#FF1D3E] mb-2">{content.explanation}</p>
                <ul className="space-y-1 text-xs text-gray-600">
                  {content.alternatives.map((alt, index) => (
                    <li key={index}>• {alt}</li>
                  ))}
                </ul>
              </div>
              
              <p className="text-sm font-medium text-[#FF1D3E]">
                {content.commitment}
              </p>
              
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <p className="text-xs text-green-800">
                  {content.ios_available}
                </p>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction asChild>
            <Button 
              onClick={onClose}
              className="w-full bg-[#FF1D3E] hover:bg-[#F45454] text-white rounded-lg"
            >
              {content.action}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
