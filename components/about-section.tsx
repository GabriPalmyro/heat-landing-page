"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const features = [
    "Modos Verdade ou Desafio",
    "Jogo de exploração de posições",
    "Cartões de perguntas para o Encontro Perfeito",
    "Conexão com o parceiro",
    "Conteúdo premium desbloqueado",
  ]

  return (
    <section id="about" ref={ref} className="w-full py-20 bg-[#1D0611] text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre o Jogo</h2>
          <p className="text-xl text-white/80 mb-10">
            Heat é um jogo interativo para relacionamentos, projetado para diversão, conexão e romance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-[#3D3D3D] rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-[#FF1D3E]">Principais Características</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-center"
                  >
                    <div className="h-2 w-2 rounded-full bg-[#FF1D3E] mr-3"></div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-[#3D3D3D] rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-[#FF1D3E]">Por que Heat?</h3>
              <p className="text-white/80 mb-4">
                Heat foi criado para casais que desejam adicionar diversão, intimidade e um toque de aventura ao seu
                relacionamento.
              </p>
              <p className="text-white/80">
                Com diferentes níveis de intensidade, o jogo se adapta ao seu humor e ao estágio do seu relacionamento.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
