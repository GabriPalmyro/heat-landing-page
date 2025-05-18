"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
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
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-[#FF1D3E] hover:text-[#FF1D3E] text-lg px-8 py-6 rounded-full font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Jogar Agora
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full font-bold transition-all duration-300"
              >
                Saiba Mais
              </Button>
            </div>
            <p className="mt-6 text-white/70 text-sm">Disponível para Android e iOS. Sem anúncios intrusivos.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
