"use client"

import { motion } from "framer-motion"
import { ScratchCard } from "next-scratchcard"
import { useState } from "react"

interface ScratchableCardProps {
  className?: string
}

export default function ScratchableCard({
  className = ""
}: ScratchableCardProps) {
  const [isRevealed, setIsRevealed] = useState(false)

  const handleComplete = () => {
    setIsRevealed(true)
  }

  return (
    <div className={`relative w-full max-w-[250px] mx-auto ${className}`}>
      <div className="w-full aspect-[4/5] rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-[#FF1D3E] via-[#E53E3E] to-[#C53030]">
        <ScratchCard
          width={250}
          height={320}
          image="/images/card-mask.png"
          finishPercent={70}
          onComplete={handleComplete}
          brushSize={40}
        >
            {/* Revealed content - Position illustration */}
            <div className="w-full h-full bg-white flex items-center justify-center">
              <div className="text-center w-full">
                {/* Position Image */}
                <div className="mb-2 sm:mb-3 w-full flex justify-center">
                  <img
                    src="/images/position-reveal.jpg"
                    alt="Posição revelada"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </ScratchCard>
      </div>

      {/* Completion celebration */}
      {isRevealed && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg z-10"
        >
          🎉 Revelado!
        </motion.div>
      )}
    </div>
  )
}
