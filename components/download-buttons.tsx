"use client"

import { Button } from "@/components/ui/button"

interface DownloadButtonsProps {
  variant?: "primary" | "secondary"
  size?: "sm" | "lg"
  className?: string
}

// Ícone customizado da Apple
const AppleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
  </svg>
)

// Ícone customizado do Google Play
const GooglePlayIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
  </svg>
)

export default function DownloadButtons({ 
  variant = "primary", 
  size = "lg", 
  className = "" 
}: DownloadButtonsProps) {
  const isPrimary = variant === "primary"
  const isLarge = size === "lg"
  
  const buttonClasses = isPrimary 
    ? "bg-white hover:bg-white/90 text-[#FF1D3E] hover:text-[#FF1D3E] border-2 border-white"
    : "bg-[#FF1D3E] hover:bg-[#F45454] text-white border-2 border-[#FF1D3E]"
  
  const sizeClasses = isLarge 
    ? "text-base px-6 py-4" 
    : "text-sm px-4 py-3"

  return (
    <div className={`flex flex-col justify-center gap-3 w-full max-w-sm mx-auto ${className}`}>
      <Button
        asChild
        size={size}
        className={`${buttonClasses} ${sizeClasses} rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-lg w-full justify-start`}
      >
        <a href="https://apps.apple.com/us/app/heat-game/id6742337191" target="_blank" rel="noopener noreferrer">
          <AppleIcon className={`${isLarge ? 'h-7 w-7' : 'h-5 w-5'} flex-shrink-0`} />
          <span className="flex flex-col items-start">
            <span className={`text-xs ${isPrimary ? 'text-[#FF1D3E]/70' : 'text-white/70'}`}>Instale na</span>
            <span className="font-bold text-left">App Store</span>
          </span>
        </a>
      </Button>
      
      <div className="text-center">
        <span className="text-white text-sm font-medium">Ou</span>
      </div>
      
      <Button
        asChild
        size={size}
        className={`${buttonClasses} ${sizeClasses} rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-lg w-full justify-start`}
      >
        <a href="https://play.google.com/store/apps/details?id=com.heatcouple.app" target="_blank" rel="noopener noreferrer">
          <GooglePlayIcon className={`${isLarge ? 'h-7 w-7' : 'h-5 w-5'} flex-shrink-0`} />
          <span className="flex flex-col items-start">
            <span className={`text-xs ${isPrimary ? 'text-[#FF1D3E]/70' : 'text-white/70'}`}>Instale na</span>
            <span className="font-bold text-left">Play Store</span>
          </span>
        </a>
      </Button>
    </div>
  )
}
