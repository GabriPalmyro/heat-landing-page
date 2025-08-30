"use client"

import EnhancedDownloadButtons from "./enhanced-download-buttons"

interface DownloadButtonsProps {
  variant?: "primary" | "secondary"
  size?: "sm" | "lg"
  className?: string
}

// Detecta idioma baseado na URL ou configuração
function detectLanguage(): 'pt-br' | 'en' | 'es' {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname
    if (path.startsWith('/en/')) return 'en'
    if (path.startsWith('/es/')) return 'es'
  }
  return 'pt-br' // padrão para português brasileiro
}

export default function DownloadButtons({ 
  variant = "primary", 
  size = "lg", 
  className = "" 
}: DownloadButtonsProps) {
  const language = detectLanguage()
  
  return (
    <EnhancedDownloadButtons 
      variant={variant}
      size={size}
      className={className}
      language={language}
    />
  )
}
