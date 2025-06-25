import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Terms of Use - Heat Game",
  description: "Read our terms of use and conditions for using Heat Game.",
}

export default function TermsOfUseEnPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      <div className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Terms of Use — Heat Game 🔥
          </h1>
          
          <div className="flex justify-center mb-6">
            <div className="flex space-x-4 bg-gray-800/50 p-2 rounded-lg">
              <a 
                href="/termos-de-uso" 
                className="px-3 py-1 text-gray-400 hover:text-white rounded text-sm transition-colors"
              >
                🇧🇷 PT
              </a>
              <span className="px-3 py-1 bg-orange-500 text-white rounded text-sm font-semibold">🇺🇸 EN</span>
            </div>
          </div>
          
          <p className="text-center text-gray-400 mb-12">
            <strong>Last updated:</strong> May 15, 2025
          </p>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-lg">
              Welcome to <strong className="text-orange-500">Heat Game</strong>! By accessing or using our application, 
              you agree to the terms and conditions described below. Please read carefully.
            </p>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">1. Acceptance of Terms</h2>
              <p>
                By using Heat Game, you agree to these Terms of Use. If you do not agree with any part of these terms, 
                please do not use the application.
              </p>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">2. Target Audience</h2>
              <p>
                This application is intended exclusively for users over 18 years old. By using Heat Game, you declare 
                that you are of legal age according to the laws of your country of residence.
              </p>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">3. Service Description</h2>
              <p>Heat Game is an interactive games application for couples, with dynamics such as:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Truth or Dare</li>
                <li>Kiss, Lick or Suck</li>
                <li>Positions Game</li>
                <li>Perfect Date</li>
              </ul>
              <p className="mt-4">Among other games aimed at adult and intimate entertainment.</p>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">4. User Account</h2>
              <p>
                Some features require authentication via Google, Apple or Supabase. By creating an account, you agree 
                to provide truthful information and keep your account secure.
              </p>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">5. Sensitive Content</h2>
              <p>
                The app may contain provocative and sensitive content. All use must be done consensually between adults. 
                Heat Game <strong>does not encourage</strong> any form of inappropriate or illegal behavior.
              </p>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">6. Subscriptions and Payments</h2>
              <p>
                The app may offer monthly or annual plans with exclusive benefits. Payment is processed directly by 
                the stores (Google Play and App Store). You can cancel at any time via store settings.
              </p>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">7. Privacy</h2>
              <p>
                We care about your privacy. See our{" "}
                <a 
                  href="/en/privacy-policy" 
                  className="text-orange-500 hover:text-orange-400 underline"
                >
                  Privacy Policy
                </a>{" "}
                to learn how your data is handled.
              </p>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">8. Usage Restrictions</h2>
              <p>It is prohibited to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Use the app for illegal purposes;</li>
                <li>Share your account with third parties;</li>
                <li>Reproduce or distribute the app's content without authorization.</li>
              </ul>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">9. Modifications</h2>
              <p>
                We may update these Terms at any time. Notifications will be sent within the app itself or via email.
              </p>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">10. Contact</h2>
              <p>For questions, suggestions or requests, send an email to:</p>
              <p className="mt-4">
                📧{" "}
                <a 
                  href="mailto:suporte@heatgame.com.br" 
                  className="text-orange-500 hover:text-orange-400 underline font-semibold"
                >
                  suporte@heatgame.com.br
                </a>
              </p>
            </section>

            <hr className="border-gray-700" />

            <div className="text-center mt-12">
              <p className="text-gray-500">
                <strong>Heat Game</strong> © All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
