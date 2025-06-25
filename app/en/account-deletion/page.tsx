import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Account Deletion Request - Heat Game",
  description: "Learn how to request deletion of your Heat Game account and what happens to your data.",
}

export default function AccountDeletionEnPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      <div className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Account Deletion Request — Heat Game 🔥
          </h1>
          
          <div className="flex justify-center mb-6">
            <div className="flex space-x-4 bg-gray-800/50 p-2 rounded-lg">
              <a 
                href="/exclusao-de-conta" 
                className="px-3 py-1 text-gray-400 hover:text-white rounded text-sm transition-colors"
              >
                🇧🇷 PT
              </a>
              <span className="px-3 py-1 bg-orange-500 text-white rounded text-sm font-semibold">🇺🇸 EN</span>
            </div>
          </div>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-lg text-center">
              If you wish to <strong className="text-orange-500">delete your account</strong> on{" "}
              <strong className="text-orange-500">Heat App</strong>, please follow the instructions below.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">How to Request Account Deletion:</h2>
              
              <p className="mb-4">
                To initiate the account deletion process, send an email to the following address:
              </p>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-orange-500/20 mb-6">
                <p className="text-center">
                  <strong className="text-orange-500">Email</strong>:{" "}
                  <a 
                    href="mailto:suporte@heatgame.com.br?subject=Account Deletion Request"
                    className="text-orange-500 hover:text-orange-400 underline font-semibold text-lg"
                  >
                    suporte@heatgame.com.br
                  </a>
                </p>
              </div>

              <p className="mb-4">In the email, include the following information:</p>
              
              <div className="bg-gray-900/50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">• Subject:</h4>
                  <p className="ml-4 text-gray-300">Account Deletion Request</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">• Email Body:</h4>
                  <ul className="ml-4 space-y-2 text-gray-300">
                    <li>- Full name</li>
                    <li>- Email associated with the account you want to delete</li>
                    <li>- Any other relevant information (if necessary)</li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">What Happens After the Request:</h2>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold text-lg">•</span>
                  <p>
                    After we receive your request, our team will process the account deletion request.
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold text-lg">•</span>
                  <p>
                    You will receive a confirmation email within{" "}
                    <strong className="text-orange-500">7 business days</strong> informing you that your account has been successfully deleted.
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold text-lg">•</span>
                  <p>
                    After deletion, <strong className="text-orange-500">all data associated with your account will be erased</strong>, 
                    including history, settings and preferences.
                  </p>
                </li>
              </ul>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">⚠️ Important:</h2>
              
              <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-lg space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-red-400 font-bold text-lg">•</span>
                  <p>
                    <strong className="text-red-400">Deletion is permanent</strong> and cannot be reversed. 
                    After deletion, you will lose access to the application and all data related to your account.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-400 font-bold text-lg">•</span>
                  <p>
                    If you change your mind after requesting deletion, <strong className="text-red-400">it will not be possible 
                    to recover your account</strong> or the data associated with it.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-700" />

            <section>
              <div className="bg-gray-800/50 p-6 rounded-lg text-center">
                <p className="mb-4">
                  If you have any questions or concerns, please don't hesitate to contact us at the email above.
                </p>
                <p className="text-orange-400">
                  Thank you for using <strong>Heat App</strong>. If you decide to return in the future, we'd be happy to have you back!
                </p>
              </div>
            </section>

            <hr className="border-gray-700" />

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p className="text-sm text-gray-400">
                <strong>Note</strong>: This deletion process is in compliance with applicable data protection laws, 
                such as <strong className="text-orange-500">GDPR</strong> and{" "}
                <strong className="text-orange-500">LGPD</strong>.
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
