import FeaturesSection from "@/components/features-section"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import MobileRedirectBanner from "@/components/mobile-redirect-banner"
import TestimonialsSection from "@/components/testimonials-section"

export default function LandingPage() {
  return (
    <>
      <MobileRedirectBanner />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </>
  )
}
