import AutoMobileRedirect from "@/components/auto-mobile-redirect"
import CleanFeaturesSection from "@/components/clean-features-section"
import CleanHeroSection from "@/components/clean-hero-section"
import Footer from "@/components/footer"
import TestimonialsSection from "@/components/testimonials-section"
import TikTokIOSBanner from "@/components/tiktok-ios-banner"

export const metadata = {
  title: "Heat - Aplicativo de Relacionamento",
  description: "Fortaleça sua conexão com seu parceiro através de desafios e atividades interativas.",
}

export default function CleanLandingPage() {
  return (
    <>
      <TikTokIOSBanner />
      <AutoMobileRedirect />
      <main className="min-h-screen">
        <CleanHeroSection />
        <CleanFeaturesSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </>
  )
}
