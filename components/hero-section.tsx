"use client"

import { motion } from "framer-motion"
import DownloadButtons from "./download-buttons"
import ScratchableCard from "./scratchable-card"

export default function HeroSection() {

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(180deg, #FF1D3E 0%, #000000 25%, #000000 75%, #FF1D3E 100%)`
        }}
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container relative z-20 px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-8 lg:py-16 gap-8 lg:gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0 order-1 lg:order-1"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 lg:mb-6 leading-tight"
            >
              Faça Sexo como
              <br />
              nunca antes
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-white/90 mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Desperte o seu lado sexual com o seu amor,
              com mais de mil desafios do leve ao extremo,
              com posições e fetiches
            </motion.p>
            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-3 lg:space-y-4 mb-6 lg:mb-8 text-center max-w-md mx-auto"
            >
              {[
              "Relacionamento a distância",
              "Posições e desafios",
              "Roleta e notificações",
              "Perguntas íntimas"
              ].map((feature, index) => (
              <div key={index} className="flex items-center justify-center gap-3">
                <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-[#FF1D3E] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                  <span className="text-white text-sm sm:text-base lg:text-lg font-bold">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* Download Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-4 max-w-xs mx-auto lg:mx-0"
            >
              <div className="hidden lg:block">
                <DownloadButtons variant="primary" size="lg" />
              </div>
              <div className="lg:hidden">
                <DownloadButtons variant="primary" size="sm" />
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-4 lg:mt-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 1l2.928 6.089L20 8.237l-5 4.864L16.18 20 10 16.755 3.82 20 5 13.101 0 8.237l7.072-1.148z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-white text-xs lg:text-sm">
                  4,7/5,0 - 12.551 avaliações
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Scratchable Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex flex-col items-center max-w-xs sm:max-w-sm mx-auto order-2 lg:order-2"
          >
            {/* Card Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 lg:mb-6 text-center"
            >
              Raspe e desbloqueie
              <br />
              uma nova posição 😈
            </motion.h2>

            <div className="w-full max-w-[220px] sm:max-w-[250px] lg:max-w-[280px]">
              <ScratchableCard 
                className="mb-9 lg:mb-12 w-full" 
              />
            </div>

            {/* Bottom Download Buttons - Mobile Only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="w-full max-w-xs lg:hidden"
            >
              <DownloadButtons variant="primary" size="sm" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
