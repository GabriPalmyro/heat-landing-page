"use client"

import Image from "next/image"

interface LogoProps {
  size?: "small" | "medium" | "large"
  withGlow?: boolean
  className?: string
  onClick?: () => void
}

export default function Logo({ size = "medium", withGlow = false, className = "", onClick }: LogoProps) {
  const sizes = {
    small: { container: "w-10 h-10", image: 40 },
    medium: { container: "w-16 h-16", image: 64 },
    large: { container: "w-24 h-24", image: 96 },
  }

  const glowClass = withGlow ? "shadow-[0_0_15px_rgba(255,29,63,0.5)]" : ""
  const cursorClass = onClick ? "cursor-pointer" : ""

  return (
    <div
      className={`rounded-full overflow-hidden flex items-center justify-center ${
        sizes[size].container
      } ${glowClass} ${cursorClass} ${className}`}
      onClick={onClick}
    >
      <Image
        src="/images/heat-logo-black-bg.png"
        alt="Heat Logo"
        width={sizes[size].image}
        height={sizes[size].image}
        className="object-contain"
      />
    </div>
  )
}
