import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Privacy Policy - Heat Game",
  description: "Learn about our privacy policy and how we protect your data in Heat Game.",
}

export default function PrivacyPolicyEnPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      <div className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Privacy Policy — Heat Game 🔥
          </h1>
          
          <div className="flex justify-center mb-6">
            <div className="flex space-x-4 bg-gray-800/50 p-2 rounded-lg">
              <a 
                href="/politicas-de-privacidade" 
                className="px-3 py-1 text-gray-400 hover:text-white rounded text-sm transition-colors"
              >
                🇧🇷 PT
              </a>
              <span className="px-3 py-1 bg-orange-500 text-white rounded text-sm font-semibold">🇺🇸 EN</span>
            </div>
          </div>
          
          <p className="text-center text-gray-400 mb-12">
            <strong>Last updated:</strong> May 13, 2025
          </p>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-lg">
              We at <strong className="text-orange-500">Heat App</strong> respect your privacy and are committed to 
              protecting the personal information you share with us. This <strong className="text-orange-500">Privacy Policy</strong> 
              describes how we collect, use, protect and disclose your information when using our application. By accessing 
              or using Heat, you agree to this Privacy Policy.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">1. Information We Collect</h2>
              <p>We collect the following information when you use Heat:</p>
              
              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">1.1 Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Full Name</strong>: When you register or sign in using{" "}
                  <strong>Sign In with Apple</strong> or <strong>Google</strong>, we may collect your full name.
                </li>
                <li>
                  <strong>Email</strong>: We collect your email address when you register or log in so we can provide 
                  services related to your account.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">1.2 Usage Information</h3>
              <p>We collect information related to app usage, such as:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Data about your interaction with the application.</li>
                <li>Information about your device, such as model, operating system, device identifiers.</li>
                <li>Location data (if the feature is activated and allowed).</li>
              </ul>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">2. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>To provide and maintain Heat services.</li>
                <li>To personalize your app experience and improve our content.</li>
                <li>To send notifications, promotions and other relevant communications.</li>
                <li>To ensure the security and integrity of the application.</li>
              </ul>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">3. Information Sharing</h2>
              <p>
                We <strong>do not share</strong> your personal information with third parties, except in the following situations:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <strong>Service providers</strong>: We may share your information with third-party service providers 
                  who help provide or improve our services (such as data storage providers or authentication tools).
                </li>
                <li>
                  <strong>Legal requirements</strong>: We may disclose your information if necessary to comply with 
                  the law or protect our legal rights.
                </li>
              </ul>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">4. Data Storage and Security</h2>
              <p>
                We take reasonable security measures to protect your personal information, but no data transmission 
                over the internet is 100% secure. We cannot guarantee the complete security of information transmitted 
                through the application.
              </p>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">5. Data Retention</h2>
              <p>
                We will retain your personal information while your account is active or as long as necessary to 
                provide our services. You may request deletion of your information at any time by contacting us.
              </p>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">6. Your Rights</h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <strong>Access</strong>: You can request a copy of the personal information we hold about you.
                </li>
                <li>
                  <strong>Correction</strong>: If your information is incorrect or outdated, you can request correction.
                </li>
                <li>
                  <strong>Deletion</strong>: You can request deletion of your personal information at any time. 
                  However, note that deleting some information may prevent you from continuing to use certain app features. 
                  For more information on how to delete your account, visit our{" "}
                  <a 
                    href="/en/account-deletion" 
                    className="text-orange-500 hover:text-orange-400 underline"
                  >
                    Account Deletion Request
                  </a> page.
                </li>
              </ul>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">7. Changes to this Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for 
                legal, operational or regulatory reasons. We recommend that you review this page periodically. 
                Changes to this policy will be posted on this page with the update date indicated.
              </p>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">8. Contact</h2>
              <p>
                If you have questions about this Privacy Policy or want to exercise any of the rights mentioned above, 
                please contact us by email:
              </p>
              <p className="mt-4">
                <strong>Contact email</strong>:{" "}
                <a 
                  href="mailto:suporte@heatgame.com.br" 
                  className="text-orange-500 hover:text-orange-400 underline font-semibold"
                >
                  suporte@heatgame.com.br
                </a>
              </p>
            </section>

            <hr className="border-gray-700" />

            <div className="bg-gray-800/50 p-6 rounded-lg mt-8">
              <p className="text-sm text-gray-400">
                <strong>Note</strong>: This Privacy Policy was created to comply with data protection laws, 
                including <strong className="text-orange-500">LGPD</strong> (Brazilian General Data Protection Law) and{" "}
                <strong className="text-orange-500">GDPR</strong> (General Data Protection Regulation).
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
