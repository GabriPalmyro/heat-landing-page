"use client"

import { motion } from "framer-motion"
import Logo from "./logo"

interface AnimatedLogoProps {
  size?: "small" | "medium" | "large"
  className?: string
}

export default function AnimatedLogo({ size = "medium", className = "" }: AnimatedLogoProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Animated glow effect */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 10px 2px rgba(255, 29, 63, 0.3)",
            "0 0 20px 5px rgba(255, 29, 63, 0.5)",
            "0 0 10px 2px rgba(255, 29, 63, 0.3)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute inset-0 rounded-full"
      />
      <Logo size={size} />
    </div>
  )
}
