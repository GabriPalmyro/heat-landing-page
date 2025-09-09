"use client"

import { useTranslations } from "@/hooks/use-translations"
import EnhancedDownloadButtons from "./enhanced-download-buttons"

interface DownloadButtonsProps {
  variant?: "primary" | "secondary"
  size?: "sm" | "lg"
  className?: string
}

export default function DownloadButtons({ 
  variant = "primary", 
  size = "lg", 
  className = "" 
}: DownloadButtonsProps) {
  const { t } = useTranslations()
  
  return (
    <EnhancedDownloadButtons 
      variant={variant}
      size={size}
      className={className}
      t={t}
    />
  )
}
