"use client"

import { ScratchCard } from "next-scratchcard"
import { useEffect, useState } from "react"

interface CleanScratchableCardProps {
  className?: string
}

export default function CleanScratchableCard({
  className = ""
}: CleanScratchableCardProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const [isScratching, setIsScratching] = useState(false)
  const [randomQuestion, setRandomQuestion] = useState("")

  const questions = [
    "Onde você quer morar quando nos aposentarmos?",
    "Qual é seu lugar favorito para estar comigo?", 
    "Você prefere dominar ou ser dominado (a)?"
  ]

  useEffect(() => {
    // Select a random question when component mounts
    const randomIndex = Math.floor(Math.random() * questions.length)
    setRandomQuestion(questions[randomIndex])
  }, [])

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
        >
          <div className="w-full h-full max-w-full max-h-full">
            <ScratchCard
              width={200}
              height={318}
              image="/images/card-mask.png"
              finishPercent={100}
              onComplete={handleComplete}
              brushSize={35}
            >
              {/* Revealed content - Question card */}
              <div className="w-full h-full bg-white flex items-center justify-center p-4">
                <div className="text-center w-full h-full flex items-center justify-center">
                  <div className="max-w-[160px]">
                    <div className="mb-4">
                      <svg className="w-8 h-8 mx-auto text-[#FF1D3E]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-800 text-sm font-medium leading-tight text-center">
                      {randomQuestion}
                    </p>
                  </div>
                </div>
              </div>
            </ScratchCard>
          </div>
        </div>
      </div>
    </div>
  )
}
