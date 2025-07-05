"use client"

import { ScratchCard } from "next-scratchcard"
import { useEffect, useState } from "react"

interface ScratchableCardProps {
  className?: string
}

export default function ScratchableCard({
  className = ""
}: ScratchableCardProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const [isScratching, setIsScratching] = useState(false)

  const handleComplete = () => {
    setIsRevealed(true)
    setIsScratching(false)
  }

  // Block/unblock scroll when scratching
  useEffect(() => {
    if (isScratching) {
      // Prevent scrolling
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      // Re-enable scrolling
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [isScratching])

  const handleScratchStart = () => {
    setIsScratching(true)
  }

  const handleScratchEnd = () => {
    setIsScratching(false)
  }

  return (
    <div className={`relative w-full max-w-[200px] sm:max-w-[250px] mx-auto ${className}`}>
      {/* Glow effect behind the card */}
      <div 
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'rgba(255, 29, 62, 0.18)',
          filter: 'blur(17px)',
          transform: 'scale(1.1)',
          zIndex: -1
        }}
      />
      
      <div className="w-full aspect-[896/1424] rounded-lg overflow-hidden shadow-2xl bg-gradient-to-b from-[#FF1D3E] via-[#E53E3E] to-[#C53030]">
        <div
          className="w-full h-full flex items-center justify-center"
          onMouseDown={handleScratchStart}
          onMouseUp={handleScratchEnd}
          onMouseLeave={handleScratchEnd}
          onTouchStart={handleScratchStart}
          onTouchEnd={handleScratchEnd}
          onTouchCancel={handleScratchEnd}
        >          <div className="w-full h-full max-w-full max-h-full">
            <ScratchCard
              width={200}
              height={318}
              image="/images/card-mask.png"
              finishPercent={100}
              onComplete={handleComplete}
              brushSize={35}
            >
              {/* Revealed content - Position illustration */}
              <div className="w-full h-full bg-white flex items-center justify-center">
                <div className="text-center w-full">
                  {/* Position Image */}
                  <div className="mb-2 sm:mb-3 w-full flex justify-center">
                    <img
                      src="/images/position-reveal.jpg"
                      alt="Posição revelada"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </ScratchCard>
          </div>
        </div>
      </div>

      {/* Completion celebration
      {isRevealed && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg z-10"
        >
          🎉 Revelado!
        </motion.div>
      )} */}
    </div>
  )
}
