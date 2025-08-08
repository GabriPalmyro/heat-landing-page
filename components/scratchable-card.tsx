"use client"

import { ScratchCard } from "next-scratchcard"
import { useEffect, useRef, useState } from "react"

interface ScratchableCardProps {
  className?: string
}

export default function ScratchableCard({
  className = ""
}: ScratchableCardProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const [isScratching, setIsScratching] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [size, setSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 })

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

  // Keep the canvas sized to its container so it fits the red div exactly
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      // Use ceil to avoid sub-pixel gaps on the right/bottom
      const w = Math.max(1, Math.ceil(rect.width))
      const h = Math.max(1, Math.ceil(rect.height))
      setSize((prev) => (prev.w !== w || prev.h !== h ? { w, h } : prev))
    }

    update()

    const ro = new ResizeObserver(() => update())
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

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
          className="relative w-full h-full"
          onMouseDown={handleScratchStart}
          onMouseUp={handleScratchEnd}
          onMouseLeave={handleScratchEnd}
          onTouchStart={handleScratchStart}
          onTouchEnd={handleScratchEnd}
          onTouchCancel={handleScratchEnd}
        >
          <div
            ref={containerRef}
            className="absolute inset-0 [&>canvas]:block [&>canvas]:w-full [&>canvas]:h-full"
          >
            {size.w > 0 && size.h > 0 && (
              <ScratchCard
                width={size.w}
                height={size.h}
                image="/images/card-mask.png"
                finishPercent={100}
                onComplete={handleComplete}
                brushSize={Math.max(20, Math.floor(size.w * 0.12))}
              >
                {/* Revealed content - Position illustration */}
                <div className="w-full h-full bg-white">
                  <img
                    src="/images/position-reveal.jpg"
                    alt="Posição revelada"
                    className="w-full h-full object-contain"
                  />
                </div>
              </ScratchCard>
            )}
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
