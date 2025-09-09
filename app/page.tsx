import AutoMobileRedirect from "@/components/auto-mobile-redirect"
import FeaturesSection from "@/components/features-section"
import Footer from "@/components/footer"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import TestimonialsSection from "@/components/testimonials-section"
import TikTokIOSBanner from "@/components/tiktok-ios-banner"

export default function LandingPage() {
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
