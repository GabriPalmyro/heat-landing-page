import Footer from "@/components/footer"
import Header from "@/components/header"

export const metadata = {
  title: "Soporte - Heat Game",
  description: "Obtén ayuda y soporte para Heat Game. Encuentra respuestas a preguntas frecuentes y contacta nuestro equipo de soporte.",
}

export default function SupportEsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      <div className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Soporte — Heat Game 🔥
          </h1>
          
          <div className="flex justify-center mb-6">
            <div className="flex space-x-4 bg-gray-800/50 p-2 rounded-lg">
              <a 
                href="/suporte" 
                className="px-3 py-1 text-gray-400 hover:text-white rounded text-sm transition-colors"
              >
                🇧🇷 PT
              </a>
              <a 
                href="/en/support" 
                className="px-3 py-1 text-gray-400 hover:text-white rounded text-sm transition-colors"
              >
                🇺🇸 EN
              </a>
              <span className="px-3 py-1 bg-orange-500 text-white rounded text-sm font-semibold">🇪🇸 ES</span>
            </div>
          </div>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-lg text-center">
              ¿Necesitas ayuda con <strong className="text-orange-500">Heat App</strong>? Estamos aquí para ayudarte.
            </p>

            <section className="text-center">
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">Contactar Soporte</h2>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-orange-500/20">
                <p className="mb-2">
                  <strong className="text-orange-500">Email de Soporte</strong>:{" "}
                  <a 
                    href="mailto:suporte@heatgame.com.br?subject=Solicitud de Soporte"
                    className="text-orange-500 hover:text-orange-400 underline font-semibold text-lg"
                  >
                    suporte@heatgame.com.br
                  </a>
                </p>
                <p className="text-sm text-gray-400">
                  Nuestro equipo responde en un plazo de 24-48 horas
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">Disponibilidad de la App</h2>
              
              <div className="bg-yellow-900/20 p-6 rounded-lg border border-yellow-500/30 mb-6">
                <h3 className="text-yellow-400 font-semibold mb-4">⚠️ Actualización Importante - Google Play Store</h3>
                <p className="text-sm mb-4">
                  Actualmente, nuestra aplicación Heat está temporalmente no disponible en Google Play Store debido a algunas restricciones de la tienda. 
                </p>
                <p className="text-sm mb-4">
                  <strong>Estamos trabajando activamente en:</strong>
                </p>
                <ul className="text-sm space-y-1 list-disc list-inside mb-4">
                  <li>Resolver las restricciones con Google Play Store</li>
                  <li>Proporcionar opciones alternativas de descarga</li>
                  <li>Mantener la disponibilidad completa en iOS App Store</li>
                </ul>
                <p className="text-sm">
                  <strong className="text-green-400">✅ Disponible en:</strong> App Store (iOS)<br/>
                  <strong className="text-red-400">⏸️ Temporalmente no disponible en:</strong> Google Play Store (Android)
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">Preguntas Frecuentes</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-orange-500 mb-2">¿Por qué no puedo descargar la app desde Google Play Store?</h3>
                  <p className="text-sm">
                    Nuestra aplicación está temporalmente bloqueada en Google Play Store debido a restricciones de la tienda. 
                    Estamos trabajando para resolver esta situación lo antes posible. Mientras tanto, la app sigue 
                    completamente disponible para dispositivos iOS en la App Store.
                  </p>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-orange-500 mb-2">¿Cuándo estará disponible nuevamente en Android?</h3>
                  <p className="text-sm">
                    Estamos trabajando diligentemente para resolver los problemas con Google Play Store. Exploraremos 
                    alternativas como distribución a través de otras plataformas confiables o descarga directa (APK) 
                    si es necesario. Te mantendremos informado sobre cualquier actualización.
                  </p>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-orange-500 mb-2">¿Cómo puedo eliminar mi cuenta?</h3>
                  <p className="text-sm">
                    Para eliminar tu cuenta, envía un email a{" "}
                    <a 
                      href="mailto:suporte@heatgame.com.br?subject=Solicitud de Eliminación de Cuenta"
                      className="text-orange-500 hover:text-orange-400 underline"
                    >
                      suporte@heatgame.com.br
                    </a>{" "}
                    con el asunto "Solicitud de Eliminación de Cuenta". 
                    También puedes visitar nuestra{" "}
                    <a 
                      href="/es/account-deletion"
                      className="text-orange-500 hover:text-orange-400 underline"
                    >
                      página de eliminación de cuenta
                    </a>{" "}
                    para instrucciones detalladas.
                  </p>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-orange-500 mb-2">¿Es segura la aplicación Heat?</h3>
                  <p className="text-sm">
                    Sí, Heat es completamente segura. Tomamos muy en serio la privacidad y seguridad de nuestros usuarios. 
                    Todos los datos se manejan de acuerdo con las mejores prácticas de seguridad y nuestra política de privacidad.
                  </p>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-orange-500 mb-2">¿Cómo reporto un problema o error?</h3>
                  <p className="text-sm">
                    Si encuentras un problema o error, envía un email detallado a{" "}
                    <a 
                      href="mailto:suporte@heatgame.com.br?subject=Reporte de Error"
                      className="text-orange-500 hover:text-orange-400 underline"
                    >
                      suporte@heatgame.com.br
                    </a>{" "}
                    incluyendo información sobre tu dispositivo, versión de la app y pasos para reproducir el problema.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">Enlaces Útiles</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <a 
                  href="/es/privacy-policy"
                  className="bg-gray-800/50 p-4 rounded-lg border border-gray-600 hover:border-orange-500 transition-colors group"
                >
                  <h3 className="font-semibold text-orange-500 group-hover:text-orange-400 mb-2">🔒 Política de Privacidad</h3>
                  <p className="text-sm text-gray-400">Información sobre cómo manejamos tus datos</p>
                </a>
                
                <a 
                  href="/es/terms-of-use"
                  className="bg-gray-800/50 p-4 rounded-lg border border-gray-600 hover:border-orange-500 transition-colors group"
                >
                  <h3 className="font-semibold text-orange-500 group-hover:text-orange-400 mb-2">📋 Términos de Uso</h3>
                  <p className="text-sm text-gray-400">Términos y condiciones de uso del app</p>
                </a>
                
                <a 
                  href="/es/account-deletion"
                  className="bg-gray-800/50 p-4 rounded-lg border border-gray-600 hover:border-orange-500 transition-colors group"
                >
                  <h3 className="font-semibold text-orange-500 group-hover:text-orange-400 mb-2">🗑️ Eliminación de Cuenta</h3>
                  <p className="text-sm text-gray-400">Cómo eliminar permanentemente tu cuenta</p>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
