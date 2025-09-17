"use client"

import Footer from "@/components/footer"
import Logo from "@/components/logo"
import { type Locale } from '@/src/i18n'
import { CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"

// Custom hook to detect locale from browser language
function useClientLocaleTranslations() {
  const [locale, setLocale] = useState<Locale>('pt')
  const [messages, setMessages] = useState<any>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const detectLocaleAndLoadMessages = async () => {
      setIsLoading(true)
      
      // Get browser language and map to supported locale
      const browserLang = navigator.language.toLowerCase()
      let detectedLocale: Locale = 'pt' // default
      
      // More explicit Portuguese detection for pt, pt-br, pt_br, etc.
      if (browserLang.startsWith('pt')) {
        detectedLocale = 'pt'
      } else if (browserLang.startsWith('en')) {
        detectedLocale = 'en'
      } else if (browserLang.startsWith('es')) {
        detectedLocale = 'es'
      }
      
      console.log('Browser language:', browserLang, 'Detected locale:', detectedLocale)
      setLocale(detectedLocale)

      try {
        console.log('Attempting to load messages for locale:', detectedLocale)
        const messagesModule = await import(`@/messages/${detectedLocale}.json`)
        console.log('Successfully loaded messages:', messagesModule.default)
        setMessages(messagesModule.default)
      } catch (error) {
        console.error('Failed to load translations for locale:', detectedLocale, error)
        // Fallback to Portuguese
        try {
          console.log('Falling back to Portuguese messages')
          const fallbackMessages = await import('@/messages/pt.json')
          setMessages(fallbackMessages.default)
          setLocale('pt') // Update locale to match the loaded messages
        } catch (fallbackError) {
          console.error('Failed to load fallback Portuguese messages:', fallbackError)
        }
      } finally {
        setIsLoading(false)
      }
    }

    detectLocaleAndLoadMessages()
  }, [])

  const t = (key: string): any => {
    if (isLoading) return key
    
    const keys = key.split('.')
    let value = messages
    
    console.log(`Looking for translation key: ${key}`, 'Current locale:', locale, 'Messages available:', Object.keys(messages))
    
    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) {
        console.warn(`Translation key not found: ${key} at step: ${k}`, 'Available messages:', messages)
        return key
      }
    }
    
    console.log(`Found translation for ${key}:`, value)
    return value
  }

  return { t, locale, isLoading }
}

export default function SuccessPaymentPage() {
  const { t, isLoading, locale } = useClientLocaleTranslations()
  const [debugInfo, setDebugInfo] = useState<any>({})

  useEffect(() => {
    // Collect debug information
    setDebugInfo({
      navigatorLanguage: navigator.language,
      navigatorLanguages: navigator.languages,
      userAgent: navigator.userAgent,
    })
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#FF1D3E]"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Gradient - Same as landing page */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: `linear-gradient(180deg, #FF1D3E 0%, #000000 25%, #000000 75%, #FF1D3E 100%)`
        }}
      />
      
      {/* Dot Pattern Overlay */}
      <div 
        className="absolute inset-0 w-full h-full opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
          backgroundSize: `60px 60px`
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="text-center max-w-md mx-auto space-y-8 animate-fade-in">
            {/* Logo */}
            <div className="flex justify-center animate-bounce">
              <Logo size="large" withGlow className="drop-shadow-2xl" />
            </div>

            {/* Success Icon */}
            <div className="flex justify-center animate-scale-in">
              <div className="p-4 rounded-full bg-green-500/20 border-2 border-green-500 shadow-lg shadow-green-500/25">
                <CheckCircle className="w-16 h-16 text-green-500 animate-pulse" />
              </div>
            </div>

            {/* Success Message */}
            <div className="space-y-4 text-white animate-slide-up">
              <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-lg">
                {t('pages.successPayment.title')}
              </h1>
              
              <p className="text-xl font-medium text-center text-gray-200 drop-shadow-md">
                {t('pages.successPayment.subtitle')}
              </p>
              
              <p className="text-base text-center text-gray-300 leading-relaxed drop-shadow-sm">
                {t('pages.successPayment.message')}
              </p>
            </div>

            {/* Return Button - Just informational, no click action */}
            <div className="space-y-4 animate-slide-up delay-300">
              <div className="w-full bg-gradient-to-r from-[#FF1D3E] to-[#FF4D6A] text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-red-500/25 border border-white/10 text-center">
                {t('pages.successPayment.returnButton')}
              </div>
              
              <p className="text-sm text-gray-400 text-center animate-fade-in delay-500">
                {t('pages.successPayment.thankYou')}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
