import AutoMobileRedirect from "@/components/auto-mobile-redirect"
import FeaturesSection from "@/components/features-section"
import Footer from "@/components/footer"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import TestimonialsSection from "@/components/testimonials-section"
import TikTokIOSBanner from "@/components/tiktok-ios-banner"

export const metadata = {
  title: "Heat - El Juego Más Candente para Parejas",
  description: "Juega desafíos, explora la intimidad y lleva tu relación al siguiente nivel con Heat.",
  icons: {
    icon: "/images/heat-logo-black-bg.png",
  },
}

export default function SpanishLandingPage() {
  return (
    <>
      <Header />
      <TikTokIOSBanner />
      <AutoMobileRedirect />
  <main className="min-h-screen pt-[72px] md:pt-[96px]">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </>
  )
}
