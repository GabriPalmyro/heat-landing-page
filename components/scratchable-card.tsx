"use client"

import { useTranslations } from "@/hooks/use-translations"
import { ScratchCard } from "next-scratchcard"
import { useEffect, useRef, useState } from "react"

interface ScratchableCardProps {
  className?: string
}

export default function ScratchableCard({
  className = ""
}: ScratchableCardProps) {
  const { t } = useTranslations()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [size, setSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 })
  const [isScratching, setIsScratching] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showMobileOverlay, setShowMobileOverlay] = useState(false)

  const rawMobileHint = t("hero.cardMobileHint")
  const mobileHint = typeof rawMobileHint === "string" ? rawMobileHint : "Tap to scratch"

  const rawMobileOpenLabel = t("hero.cardMobileOpen")
  const mobileOpenLabel = typeof rawMobileOpenLabel === "string" ? rawMobileOpenLabel : "Click to open"

  const handleComplete = () => {
    setIsScratching(false)
  }

  useEffect(() => {
    if (typeof window === "undefined") return

    const mediaQuery = window.matchMedia("(max-width: 1023px)")
    const updateMatch = (mq: MediaQueryList | MediaQueryListEvent) => {
      setIsMobile(mq.matches)
    }

    updateMatch(mediaQuery)

    const listener = (event: MediaQueryListEvent) => updateMatch(event)

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", listener)
      return () => mediaQuery.removeEventListener("change", listener)
    }

    if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(listener)
      return () => mediaQuery.removeListener(listener)
    }
  }, [])

  useEffect(() => {
    if (isMobile || typeof document === "undefined") return
    if (!isScratching) return

    const previousOverflow = document.body.style.overflow
    const previousTouchAction = document.body.style.touchAction

    document.body.style.overflow = "hidden"
    document.body.style.touchAction = "none"

    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.touchAction = previousTouchAction
    }
  }, [isScratching, isMobile])

  useEffect(() => {
    if (!isMobile || !showMobileOverlay || typeof document === "undefined") return

    const previousOverflow = document.body.style.overflow
    const previousTouchAction = document.body.style.touchAction

    document.body.style.overflow = "hidden"
    document.body.style.touchAction = "none"

    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.touchAction = previousTouchAction
    }
  }, [isMobile, showMobileOverlay])

  useEffect(() => {
    if (!showMobileOverlay || typeof window === "undefined") return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowMobileOverlay(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [showMobileOverlay])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const measure = () => {
      const w = Math.max(1, el.clientWidth)
      const h = Math.max(1, el.clientHeight)
      setSize((prev) => (prev.w !== w || prev.h !== h ? { w, h } : prev))
    }

    const frame = requestAnimationFrame(measure)

    let ro: ResizeObserver | null = null

    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(measure)
      ro.observe(el)
    } else if (typeof window !== "undefined") {
      window.addEventListener("resize", measure)
      window.addEventListener("orientationchange", measure)
    }

    return () => {
      cancelAnimationFrame(frame)
      if (ro) {
        ro.disconnect()
      } else if (typeof window !== "undefined") {
        window.removeEventListener("resize", measure)
        window.removeEventListener("orientationchange", measure)
      }
    }
  }, [isMobile, showMobileOverlay])

  const handleScratchStart = () => {
    setIsScratching(true)
  }

  const handleScratchEnd = () => {
    setIsScratching(false)
  }

  const openMobileOverlay = () => {
    setShowMobileOverlay(true)
  }

  const closeMobileOverlay = () => {
    setShowMobileOverlay(false)
    setIsScratching(false)
  }

  const renderInteractiveCard = () => (
    <div
      ref={containerRef}
      className="w-full aspect-[896/1424] rounded-lg overflow-hidden shadow-2xl bg-gradient-to-b from-[#FF1D3E] via-[#E53E3E] to-[#C53030]"
      onMouseDown={!isMobile ? handleScratchStart : undefined}
      onMouseUp={!isMobile ? handleScratchEnd : undefined}
      onMouseLeave={!isMobile ? handleScratchEnd : undefined}
      onTouchStart={showMobileOverlay ? handleScratchStart : undefined}
      onTouchEnd={showMobileOverlay ? handleScratchEnd : undefined}
      onTouchCancel={showMobileOverlay ? handleScratchEnd : undefined}
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0 overflow-hidden [&_canvas]:block [&_canvas]:w-full [&_canvas]:h-full">
          {size.w > 0 && size.h > 0 && (
            <ScratchCard
              width={size.w}
              height={size.h}
              image="/images/card-mask.png"
              finishPercent={100}
              onComplete={handleComplete}
              brushSize={Math.max(20, Math.floor(size.w * 0.12))}
            >
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
  )

  const renderStaticCard = () => (
    <div className="relative block w-full aspect-[896/1424] rounded-lg overflow-hidden shadow-2xl bg-gradient-to-b from-[#FF1D3E] via-[#E53E3E] to-[#C53030]">
      <img
        src="/images/card-mask.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  )

  return (
    <>
      <div className={`relative w-full max-w-[200px] sm:max-w-[250px] mx-auto ${className}`}>
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            background: "rgba(255, 29, 62, 0.18)",
            filter: "blur(17px)",
            transform: "scale(1.1)",
            zIndex: -1
          }}
        />

        {isMobile ? (
          <>
            <button
              type="button"
              onClick={openMobileOverlay}
              aria-label={`${mobileOpenLabel}. ${mobileHint}`}
              className="relative block w-full focus:outline-none focus:ring-2 focus:ring-[#FF1D3E]/60"
            >
              {renderStaticCard()}
            </button>
            <p className="mt-3 text-center text-sm font-semibold text-white/90">
              {mobileOpenLabel}
            </p>
          </>
        ) : (
          renderInteractiveCard()
        )}
      </div>

      {isMobile && showMobileOverlay && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6"
          onClick={closeMobileOverlay}
        >
          <div
            className="relative w-full max-w-sm"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Fechar"
              onClick={closeMobileOverlay}
              className="absolute -top-12 right-0 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 8.586l4.95-4.95a1 1 0 011.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10l-4.95-4.95A1 1 0 015.05 3.636L10 8.586z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div className="relative w-full">
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: "rgba(255, 29, 62, 0.18)",
                  filter: "blur(20px)",
                  transform: "scale(1.05)",
                  zIndex: -1
                }}
              />
              {renderInteractiveCard()}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
