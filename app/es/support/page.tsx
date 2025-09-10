"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function SupportEsPage() {
  const router = useRouter()
  
  const handleAndroidRedirect = () => {
    router.push('/es/android')
  }

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
          
          <p className="text-center text-gray-400 mb-12">
            <strong>Última actualización:</strong> 30/08/2025
          </p>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-lg text-center">
              Si tienes problemas o preguntas sobre la <strong className="text-orange-500">Heat App</strong>, 
              ¡estamos aquí para ayudar! Sigue las instrucciones a continuación para encontrar soluciones, contactarnos o 
              reportar cualquier problema.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">⚠️ Actualización Importante - Google Play Store</h2>
              
              <div className="bg-yellow-900/20 p-6 rounded-lg border border-yellow-500/30 mb-8">
                <h3 className="text-yellow-400 font-semibold mb-4">Aplicación Temporalmente No Disponible en Android</h3>
                <p className="text-sm mb-4">
                  Desafortunadamente, nuestra aplicación Heat está temporalmente bloqueada en Google Play Store debido a algunas restricciones de la tienda. 
                  <strong> Estamos trabajando arduamente para resolver esta situación lo más rápido posible.</strong>
                </p>
                <p className="text-sm mb-4">
                  <strong>Estamos explorando alternativas como:</strong>
                </p>
                <ul className="text-sm space-y-1 list-disc list-inside mb-4">
                  <li>Redistribución a través de otras plataformas confiables</li>
                  <li>Disponibilidad de descarga directa (APK)</li>
                  <li>Reenvío a Play Store con las correcciones adecuadas</li>
                </ul>
                <p className="text-sm mb-4">
                  <strong className="text-green-400">✅ Disponible en:</strong> App Store (iOS)<br/>
                  <strong className="text-red-400">⏸️ Temporalmente no disponible en:</strong> Google Play Store (Android)
                </p>
                <p className="text-sm mb-4">
                  <strong>Nuestro equipo está dedicado a asegurar que tengas acceso a Heat pronto. Agradecemos tu paciencia y comprensión.</strong>
                </p>
                <div className="mt-4">
                  <Button 
                    onClick={handleAndroidRedirect}
                    className="bg-[#FF1D3E] hover:bg-[#F45454] text-white"
                  >
                    📱 Descargar APK para Android
                  </Button>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">1. Problemas Comunes y Soluciones</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-4">1.1 Problemas de Inicio de Sesión</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 font-bold text-lg">•</span>
                      <div>
                        <strong className="text-orange-400">Error de inicio de sesión</strong>: Asegúrate de que tu conexión 
                        a internet esté funcionando correctamente. Si estás usando inicio de sesión de Google o Apple, 
                        verifica que estés conectado con la cuenta correcta.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 font-bold text-lg">•</span>
                      <div>
                        <strong className="text-orange-400">No puedo acceder a mi cuenta</strong>: Si olvidaste 
                        tu contraseña o no puedes acceder a tu cuenta, intenta restablecer tu contraseña o contacta a nuestro 
                        equipo de soporte.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-4">1.2 Errores del Juego</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 font-bold text-lg">•</span>
                      <div>
                        <strong className="text-orange-400">Problemas de rendimiento</strong>: Si el juego funciona 
                        lentamente, intenta cerrar otras aplicaciones en segundo plano o reiniciar tu dispositivo.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 font-bold text-lg">•</span>
                      <div>
                        <strong className="text-orange-400">Error de carga de contenido</strong>: Si el contenido no 
                        carga correctamente, intenta verificar si tu conexión a internet es estable.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-4">1.3 Problemas de Pago</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 font-bold text-lg">•</span>
                      <div>
                        <strong className="text-orange-400">Problemas con suscripción Premium</strong>: Si tienes 
                        problemas para acceder a las funciones Premium después de la compra, intenta cerrar sesión y volver a iniciarla en 
                        tu cuenta o contacta a nuestro equipo de soporte.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">2. Cómo Contactarnos</h2>
              
              <p className="mb-6">
                Si no has encontrado una solución a tu problema o tienes otras preguntas, nuestro equipo de soporte 
                está disponible para ayudarte. Sigue los pasos a continuación para ponerte en contacto:
              </p>

              <div>
                <h3 className="text-xl font-semibold text-orange-400 mb-4">2.1 Email de Soporte</h3>
                <p className="mb-4">Envía un email detallando tu problema o pregunta a la siguiente dirección:</p>
                
                <div className="bg-gray-800/50 p-6 rounded-lg border border-orange-500/20 mb-6">
                  <p className="text-center">
                    <strong className="text-orange-500">Email de Soporte</strong>:{" "}
                    <a 
                      href="mailto:suporte@heatgame.com.br?subject=Soporte Heat App"
                      className="text-orange-500 hover:text-orange-400 underline font-semibold text-lg"
                    >
                      suporte@heatgame.com.br
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-orange-400 mb-4">2.2 Información Importante para Soporte</h3>
                <p className="mb-4">
                  Al contactarnos, por favor proporciona la siguiente información para que podamos 
                  ayudarte de manera más eficiente:
                </p>
                
                <div className="bg-gray-900/50 p-6 rounded-lg">
                  <ul className="space-y-2 text-gray-300">
                    <li>• Descripción del problema o pregunta.</li>
                    <li>• Modelo de tu dispositivo y versión del sistema operativo (iOS o Android).</li>
                    <li>• Captura de pantalla o cualquier otro detalle que pueda ayudar a entender el problema.</li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">3. Preguntas Frecuentes (FAQ)</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-800/30 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">3.1 ¿Puedo jugar solo o solo con amigos?</h3>
                  <p>
                    Sí, puedes jugar solo o con amigos. La <strong className="text-orange-500">Heat App</strong> ofrece 
                    diferentes modos de juego para jugar individualmente o en grupo.
                  </p>
                </div>

                <div className="bg-gray-800/30 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">3.2 ¿Cómo puedo actualizar la aplicación?</h3>
                  <p>
                    Para actualizar Heat, ve a la <strong className="text-orange-500">App Store</strong> o{" "}
                    <strong className="text-orange-500">Google Play Store</strong>, busca la aplicación y haz clic en "Actualizar".
                  </p>
                </div>

                <div className="bg-gray-800/30 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">3.3 ¿Dónde puedo ver mi suscripción Premium?</h3>
                  <p>
                    Si te suscribiste a Premium, puedes ver los detalles de tu suscripción en{" "}
                    <strong className="text-orange-500">Configuración</strong> &gt;{" "}
                    <strong className="text-orange-500">Suscripciones</strong> en tu dispositivo.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-700" />

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">4. Política de Privacidad</h2>
              <p>
                Para saber cómo protegemos tu información personal, consulta nuestra{" "}
                <a 
                  href="/es/privacy-policy" 
                  className="text-orange-500 hover:text-orange-400 underline"
                >
                  Política de Privacidad
                </a>{" "}
                en la aplicación o en nuestro sitio web oficial.
              </p>
            </section>

            <hr className="border-gray-700" />

            <div className="bg-gray-800/50 p-6 rounded-lg text-center space-y-4">
              <p>
                <strong>Nota</strong>: Estamos trabajando constantemente para mejorar la{" "}
                <strong className="text-orange-500">Heat App</strong> y garantizar la mejor experiencia posible para nuestros usuarios. 
                ¡Gracias por elegir Heat y esperamos que sigas divirtiéndote!
              </p>
              
              <p className="text-orange-400 font-semibold">
                <strong>¿Preguntas?</strong> ¡Contacta a nuestro equipo de soporte y estaremos felices de ayudar!
              </p>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-500">
                <strong>Heat Game</strong> © Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
