import AutoMobileRedirect from "@/components/auto-mobile-redirect"
import FeaturesSection from "@/components/features-section"
import Footer from "@/components/footer"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import TestimonialsSection from "@/components/testimonials-section"
import TikTokIOSBanner from "@/components/tiktok-ios-banner"

export const metadata = {
  title: "Heat - The Hottest Game for Couples",
  description: "Play challenges, explore intimacy, and take your relationship to the next level with Heat.",
  icons: {
    icon: "/images/heat-logo-black-bg.png",
  },
}

export default function LandingPageEn() {
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
