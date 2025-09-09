"use client"

import { useTranslations } from "@/hooks/use-translations"
import { motion, useInView } from "framer-motion"
import { Flame, Heart, Shield, Sparkles, Users, Zap } from "lucide-react"
import { useRef } from "react"

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const { t, isLoading } = useTranslations()

  const icons = [
    <Heart className="h-10 w-10 text-[#FF1D3E]" />,
    <Flame className="h-10 w-10 text-[#FF1D3E]" />,
    <Sparkles className="h-10 w-10 text-[#FF1D3E]" />,
    <Shield className="h-10 w-10 text-[#FF1D3E]" />,
    <Zap className="h-10 w-10 text-[#FF1D3E]" />,
    <Users className="h-10 w-10 text-[#FF1D3E]" />,
  ]

  // Get features array directly from translations
  const featuresData = isLoading ? [] : t('features.items')
  console.log('Features data:', featuresData, 'Type:', typeof featuresData, 'Is Array:', Array.isArray(featuresData), 'Is Loading:', isLoading)
  const features = Array.isArray(featuresData) ? featuresData : [
    {
      title: "Focused on Couples",
      description: "Specifically developed to strengthen the connection between partners."
    },
    {
      title: "Intensity Levels", 
      description: "Adjust the game intensity according to your mood and preferences."
    },
    {
      title: "Exclusive Challenges",
      description: "Unique content that you won't find in any other app."
    },
    {
      title: "Total Privacy",
      description: "Your data and preferences remain safe and private."
    },
    {
      title: "Intuitive Interface",
      description: "Clean and modern design for a perfect user experience."
    },
    {
      title: "Partner Connection",
      description: "Link with your partner for a personalized experience."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="features" ref={ref} className="relative w-full py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,29,62,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            {t('features.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            {t('features.subtitle')}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature: any, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#3D3D3D] rounded-xl p-6 hover:bg-[#4D4D4D] transition-colors duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="mb-4">{icons[index]}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
