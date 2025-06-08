import AboutSection from "@/components/about-section"
import CtaSection from "@/components/cta-section"
import DemoSection from "@/components/demo-section"
import FeaturesSection from "@/components/features-section"
import Footer from "@/components/footer"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import TestimonialsSection from "@/components/testimonials-section"

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <HeroSection />
      <AboutSection />
      <DemoSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
