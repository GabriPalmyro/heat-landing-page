"use client"

import { useTranslations } from "@/hooks/use-translations"
import { motion, useInView } from "framer-motion"
import { Star } from "lucide-react"
import { useRef } from "react"

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const { t } = useTranslations()

  // Get testimonials array safely
  const getTestimonials = () => {
    try {
      const testimonialsString = t('testimonials.items')
      return JSON.parse(testimonialsString)
    } catch {
      // Fallback to default testimonials if parsing fails
      return [
        {
          quote: "Heat transformou nosso relacionamento. Agora temos momentos muito mais divertidos e íntimos juntos.",
          author: "Ana & João",
          location: "São Paulo",
        },
        {
          quote: "Nunca imaginei que um jogo pudesse nos aproximar tanto. Recomendo para todos os casais!",
          author: "Marcos",
          location: "Rio de Janeiro",
        },
        {
          quote: "Perfeito para quebrar a rotina e adicionar um pouco de aventura ao relacionamento.",
          author: "Carla & Pedro",
          location: "Belo Horizonte",
        },
      ]
    }
  }

  const testimonials = getTestimonials()

  return (
    <section id="testimonials" ref={ref} className="w-full py-20 bg-gradient-to-b from-[#3D3D3D] to-[#1D0611]">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('testimonials.title')}</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-[#FF1D3E]/20 to-[#1D0611] p-6 rounded-xl"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#FF1D3E] fill-[#FF1D3E]" />
                ))}
              </div>
              <p className="text-white/90 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-white/70 text-sm">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
