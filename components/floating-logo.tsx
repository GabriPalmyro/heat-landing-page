"use client"

import { motion } from "framer-motion"
import Logo from "./logo"

interface FloatingLogoProps {
  size?: "small" | "medium" | "large"
  className?: string
  onClick?: () => void
}

export default function FloatingLogo({ size = "large", className = "", onClick }: FloatingLogoProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Animated floating effect */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        {/* Animated glow effect */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 15px 3px rgba(255, 29, 63, 0.3)",
              "0 0 25px 8px rgba(255, 29, 63, 0.5)",
              "0 0 15px 3px rgba(255, 29, 63, 0.3)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="rounded-full"
        >
          <Logo size={size} onClick={onClick} />
        </motion.div>
      </motion.div>
    </div>
  )
}
