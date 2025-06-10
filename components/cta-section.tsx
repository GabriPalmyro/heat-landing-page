"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import DownloadButtons from "./download-buttons"
import Logo from "./logo"

export default function CtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <section id="cta" ref={ref} className="w-full py-20 bg-[#1D0611]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <Logo
              size="medium"
              withGlow={true}
              onClick={scrollToTop}
              className="transition-transform duration-300 hover:scale-110"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-[#FF1D3E] to-[#B52B2B] p-8 md:p-12 rounded-2xl shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Pronto para apimentar as coisas?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto">
              Baixe agora o Heat e descubra uma nova dimensão de diversão e intimidade no seu relacionamento.
            </p>
            
            {/* Download Buttons */}
            <DownloadButtons variant="primary" size="lg" className="mb-6" />
            
            <p className="mt-6 text-white/70 text-sm">Disponível para Android e iOS. Sem anúncios intrusivos.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
