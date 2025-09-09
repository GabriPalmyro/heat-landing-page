import Footer from "@/components/footer"
import Header from "@/components/header"

export const metadata = {
  title: "Support - Heat Game",
  description: "Find solutions to common problems, frequently asked questions and how to contact our support team.",
}

export default function SupportEnPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      <div className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Support — Heat Game 🔥
          </h1>
          
          <div className="flex justify-center mb-6">
            <div className="flex space-x-4 bg-gray-800/50 p-2 rounded-lg">
              <a 
                href="/suporte" 
                className="px-3 py-1 text-gray-400 hover:text-white rounded text-sm transition-colors"
              >
                🇧🇷 PT
              </a>
              <span className="px-3 py-1 bg-orange-500 text-white rounded text-sm font-semibold">🇺🇸 EN</span>
              <a 
                href="/es/support" 
                className="px-3 py-1 text-gray-400 hover:text-white rounded text-sm transition-colors"
              >
                🇪🇸 ES
              </a>
            </div>
          </div>
          
          <p className="text-center text-gray-400 mb-12">
            <strong>Last updated:</strong> 08/30/2025
          </p>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-lg text-center">
              If you're having problems or have questions about the <strong className="text-orange-500">Heat App</strong>, 
              we're here to help! Follow the instructions below to find solutions, contact us, or 
              report any issues.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">⚠️ Important Update - Google Play Store</h2>
              
              <div className="bg-yellow-900/20 p-6 rounded-lg border border-yellow-500/30 mb-8">
                <h3 className="text-yellow-400 font-semibold mb-4">App Temporarily Unavailable on Android</h3>
                <p className="text-sm mb-4">
                  Unfortunately, our Heat app is temporarily blocked on the Google Play Store due to some store restrictions. 
                  <strong> We're working hard to resolve this situation as quickly as possible.</strong>
                </p>
                <p className="text-sm mb-4">
                  <strong>We're exploring alternatives such as:</strong>
                </p>
                <ul className="text-sm space-y-1 list-disc list-inside mb-4">
                  <li>Redistribution through other trusted platforms</li>
                  <li>Direct download availability (APK)</li>
                  <li>Resubmission to Play Store with proper corrections</li>
                </ul>
                <p className="text-sm mb-4">
                  <strong className="text-green-400">✅ Available on:</strong> App Store (iOS)<br/>
                  <strong className="text-red-400">⏸️ Temporarily unavailable on:</strong> Google Play Store (Android)
                </p>
                <p className="text-sm">
                  <strong>Our team is dedicated to ensuring you have access to Heat soon. We appreciate your patience and understanding.</strong>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">1. Common Problems and Solutions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-4">1.1 Login Issues</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 font-bold text-lg">•</span>
                      <div>
                        <strong className="text-orange-400">Login error</strong>: Make sure your internet connection 
                        is working properly. If you're using Google or Apple login, 
                        verify you're connected with the correct account.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 font-bold text-lg">•</span>
                      <div>
                        <strong className="text-orange-400">Can't access my account</strong>: If you forgot 
                        your password or can't access your account, try resetting your password or contact our 
                        support team.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-4">1.2 Game Errors</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 font-bold text-lg">•</span>
                      <div>
                        <strong className="text-orange-400">Performance issues</strong>: If the game is running 
                        slowly, try closing other background apps or restarting your device.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 font-bold text-lg">•</span>
                      <div>
                        <strong className="text-orange-400">Content loading error</strong>: If content doesn't 
                        load properly, try checking if your internet connection is stable.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-4">1.3 Payment Issues</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 font-bold text-lg">•</span>
                      <div>
                        <strong className="text-orange-400">Premium subscription issues</strong>: If you have 
                        trouble accessing Premium features after purchase, try logging out and back into 
                        your account or contact our support team.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">2. How to Contact Us</h2>
              
              <p className="mb-6">
                If you haven't found a solution to your problem or have other questions, our support team 
                is available to help you. Follow the steps below to get in touch:
              </p>

              <div>
                <h3 className="text-xl font-semibold text-orange-400 mb-4">2.1 Support Email</h3>
                <p className="mb-4">Send an email detailing your problem or question to the following address:</p>
                
                <div className="bg-gray-800/50 p-6 rounded-lg border border-orange-500/20 mb-6">
                  <p className="text-center">
                    <strong className="text-orange-500">Support Email</strong>:{" "}
                    <a 
                      href="mailto:suporte@heatgame.com.br?subject=Heat App Support"
                      className="text-orange-500 hover:text-orange-400 underline font-semibold text-lg"
                    >
                      suporte@heatgame.com.br
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-orange-400 mb-4">2.2 Important Information for Support</h3>
                <p className="mb-4">
                  When contacting us, please provide the following information so we can 
                  help you more efficiently:
                </p>
                
                <div className="bg-gray-900/50 p-6 rounded-lg">
                  <ul className="space-y-2 text-gray-300">
                    <li>• Description of the problem or question.</li>
                    <li>• Your device model and operating system version (iOS or Android).</li>
                    <li>• Screenshot or any other detail that might help understand the problem.</li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">3. Frequently Asked Questions (FAQ)</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-800/30 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">3.1 Can I play alone or only with friends?</h3>
                  <p>
                    Yes, you can play alone or with friends. The <strong className="text-orange-500">Heat App</strong> offers 
                    different game modes for playing individually or in groups.
                  </p>
                </div>

                <div className="bg-gray-800/30 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">3.2 How can I update the app?</h3>
                  <p>
                    To update Heat, go to the <strong className="text-orange-500">App Store</strong> or{" "}
                    <strong className="text-orange-500">Google Play Store</strong>, search for the app and click "Update".
                  </p>
                </div>

                <div className="bg-gray-800/30 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">3.3 Where can I see my Premium subscription?</h3>
                  <p>
                    If you subscribed to Premium, you can see your subscription details in{" "}
                    <strong className="text-orange-500">Settings</strong> &gt;{" "}
                    <strong className="text-orange-500">Subscriptions</strong> on your device.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">4. Privacy Policy</h2>
              <p>
                To learn how we protect your personal information, check our{" "}
                <a 
                  href="/en/privacy-policy" 
                  className="text-orange-500 hover:text-orange-400 underline"
                >
                  Privacy Policy
                </a>{" "}
                in the app or on our official website.
              </p>
            </section>

            <hr className="border-gray-700" />

            <div className="bg-gray-800/50 p-6 rounded-lg text-center space-y-4">
              <p>
                <strong>Note</strong>: We're constantly working to improve the{" "}
                <strong className="text-orange-500">Heat App</strong> and ensure the best possible experience for our users. 
                Thank you for choosing Heat and we hope you continue having fun!
              </p>
              
              <p className="text-orange-400 font-semibold">
                <strong>Questions?</strong> Contact our support team and we'll be happy to help!
              </p>
            </div>

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
