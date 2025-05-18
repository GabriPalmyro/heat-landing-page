"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function DemoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/placeholder.svg?height=600&width=300",
      title: "Modo Verdade ou Desafio",
      description: "Perguntas e desafios para conhecer melhor seu parceiro.",
    },
    {
      image: "/placeholder.svg?height=600&width=300",
      title: "Exploração de Posições",
      description: "Descubra novas posições e adicione variedade ao seu relacionamento.",
    },
    {
      image: "/placeholder.svg?height=600&width=300",
      title: "Encontro Perfeito",
      description: "Cartões de perguntas para criar momentos especiais juntos.",
    },
    {
      image: "/placeholder.svg?height=600&width=300",
      title: "Conteúdo Premium",
      description: "Desbloqueie conteúdo exclusivo e eleve sua experiência.",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <section ref={ref} className="w-full py-20 bg-gradient-to-b from-[#1D0611] to-[#3D3D3D]">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Veja o Heat em Ação</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Navegue pelos recursos do jogo e descubra como o Heat pode transformar seu relacionamento.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full -ml-4 md:-ml-6"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full -mr-4 md:-mr-6"
            aria-label="Próximo slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full flex flex-col md:flex-row items-center p-4 md:p-8 bg-[#3D3D3D]">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      width={300}
                      height={600}
                      className="rounded-lg shadow-lg mx-auto"
                    />
                  </div>
                  <div className="md:w-1/2 text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#FF1D3E] mb-4">{slide.title}</h3>
                    <p className="text-lg text-white/90">{slide.description}</p>
                    <div className="mt-8 flex space-x-2">
                      {slides.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentSlide(i)}
                          className={`h-3 w-3 rounded-full ${i === currentSlide ? "bg-[#FF1D3E]" : "bg-white/30"}`}
                          aria-label={`Ir para slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
