import AutoMobileRedirect from "@/components/auto-mobile-redirect"
import FeaturesSection from "@/components/features-section"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import TestimonialsSection from "@/components/testimonials-section"

export default function LandingPage() {
  return (
    <>
      <AutoMobileRedirect />
      {/* <MobileRedirectBanner /> */}
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </>
  )
}
