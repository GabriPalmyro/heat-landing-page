import Footer from "@/components/footer"
import Header from "@/components/header"

export const metadata = {
  title: "Términos de Uso - Heat Game",
  description: "Términos de uso y condiciones de servicio para Heat Game.",
}

export default function TermsOfUseEsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      <div className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Términos de Uso — Heat Game 🔥
          </h1>
          
          <div className="flex justify-center mb-6">
            <div className="flex space-x-4 bg-gray-800/50 p-2 rounded-lg">
              <a 
                href="/termos-de-uso" 
                className="px-3 py-1 text-gray-400 hover:text-white rounded text-sm transition-colors"
              >
                🇧🇷 PT
              </a>
              <a 
                href="/en/terms-of-use" 
                className="px-3 py-1 text-gray-400 hover:text-white rounded text-sm transition-colors"
              >
                🇺🇸 EN
              </a>
              <span className="px-3 py-1 bg-orange-500 text-white rounded text-sm font-semibold">🇪🇸 ES</span>
            </div>
          </div>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-lg text-center">
              Bienvenido a <strong className="text-orange-500">Heat Game</strong>. Al usar nuestra aplicación, aceptas estos términos de uso.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">1. Aceptación de los Términos</h2>
              
              <p className="mb-4">
                Al descargar, instalar o usar la aplicación Heat Game, aceptas estar sujeto a estos 
                Términos de Uso. Si no estás de acuerdo con alguno de estos términos, no uses la aplicación.
              </p>
              
              <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-500/30">
                <p className="text-sm">
                  <strong className="text-yellow-400">Nota importante:</strong> Estos términos pueden 
                  actualizarse periódicamente. Te notificaremos sobre cambios significativos.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">2. Restricción de Edad</h2>
              
              <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/30">
                <h3 className="text-red-400 font-semibold mb-4">🔞 Solo para Adultos</h3>
                <p className="text-sm mb-4">
                  Heat Game está diseñado exclusivamente para usuarios de <strong>18 años o más</strong>. 
                  Al usar la aplicación, confirmas que tienes al menos 18 años de edad.
                </p>
                <p className="text-sm">
                  La aplicación contiene contenido destinado a audiencias adultas y no es apropiada para menores.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">3. Uso Apropiado</h2>
              
              <div className="space-y-4">
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
                  <h3 className="font-semibold text-green-400 mb-2">✅ Uso Permitido</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Usar la aplicación para entretenimiento personal</li>
                    <li>• Compartir la experiencia con tu pareja</li>
                    <li>• Proporcionar feedback constructivo</li>
                    <li>• Contactar soporte para asistencia técnica</li>
                  </ul>
                </div>
                
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30">
                  <h3 className="font-semibold text-red-400 mb-2">❌ Uso Prohibido</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Usar la aplicación para actividades ilegales</li>
                    <li>• Intentar piratear, decodificar o hacer ingeniería inversa</li>
                    <li>• Distribuir virus o código malicioso</li>
                    <li>• Violar los derechos de otros usuarios</li>
                    <li>• Usar la aplicación si eres menor de 18 años</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">4. Cuenta de Usuario</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-orange-500 mb-2">📧 Responsabilidad de la Cuenta</h3>
                  <p className="text-sm">
                    Eres responsable de mantener la confidencialidad de tu información de cuenta 
                    y de todas las actividades que ocurran bajo tu cuenta.
                  </p>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-orange-500 mb-2">🔒 Seguridad</h3>
                  <p className="text-sm">
                    Debes notificarnos inmediatamente sobre cualquier uso no autorizado de tu cuenta 
                    o cualquier otra violación de seguridad.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">5. Propiedad Intelectual</h2>
              
              <div className="space-y-4">
                <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                  <h3 className="font-semibold text-blue-400 mb-2">© Derechos de Autor</h3>
                  <p className="text-sm mb-2">
                    Todo el contenido de la aplicación Heat Game, incluyendo pero no limitándose a:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Textos, gráficos, logos, íconos</li>
                    <li>• Imágenes, audio y contenido digital</li>
                    <li>• Software y código fuente</li>
                    <li>• Diseño y funcionalidades</li>
                  </ul>
                  <p className="text-sm mt-2">
                    Están protegidos por derechos de autor y son propiedad de Heat Game o sus licenciantes.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">6. Disponibilidad del Servicio</h2>
              
              <div className="bg-yellow-900/20 p-6 rounded-lg border border-yellow-500/30 mb-6">
                <h3 className="text-yellow-400 font-semibold mb-4">⚠️ Limitaciones de Disponibilidad</h3>
                <p className="text-sm mb-4">
                  Nos esforzamos por mantener la aplicación disponible, pero pueden ocurrir interrupciones por:
                </p>
                <ul className="text-sm space-y-1 mb-4">
                  <li>• Mantenimiento programado</li>
                  <li>• Actualizaciones de sistemas</li>
                  <li>• Problemas técnicos imprevisto</li>
                  <li>• Restricciones de tiendas de aplicaciones</li>
                </ul>
                <p className="text-sm">
                  <strong>Nota importante:</strong> Actualmente, la aplicación puede no estar disponible 
                  en Google Play Store debido a restricciones temporales. Estamos trabajando para resolver esta situación.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">7. Privacidad y Datos</h2>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-orange-500/20">
                <p className="text-sm mb-4">
                  Tu privacidad es importante para nosotros. El uso de tus datos personales se rige por 
                  nuestra Política de Privacidad, que forma parte de estos términos.
                </p>
                <p className="text-sm">
                  <strong className="text-orange-500">Consulta nuestra:</strong>{" "}
                  <a 
                    href="/es/privacy-policy"
                    className="text-orange-500 hover:text-orange-400 underline"
                  >
                    Política de Privacidad
                  </a>{" "}
                  para obtener información detallada sobre cómo manejamos tus datos.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">8. Limitación de Responsabilidad</h2>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-orange-500/20">
                <p className="text-sm mb-4">
                  Heat Game se proporciona "tal como está" sin garantías de ningún tipo. No somos responsables por:
                </p>
                <ul className="text-sm space-y-1 mb-4">
                  <li>• Daños directos o indirectos por el uso de la aplicación</li>
                  <li>• Pérdida de datos o interrupciones del servicio</li>
                  <li>• Problemas técnicos del dispositivo del usuario</li>
                  <li>• Uso inapropiado de la aplicación</li>
                </ul>
                <p className="text-sm">
                  El uso de Heat Game es bajo tu propio riesgo y responsabilidad.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">9. Terminación</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-orange-500 mb-2">🚪 Por tu parte</h3>
                  <p className="text-sm">
                    Puedes dejar de usar la aplicación en cualquier momento y solicitar la eliminación 
                    de tu cuenta contactando nuestro soporte.
                  </p>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-orange-500 mb-2">🛡️ Por nuestra parte</h3>
                  <p className="text-sm">
                    Nos reservamos el derecho de suspender o terminar tu acceso si violas estos términos 
                    o usas la aplicación de manera inapropiada.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">10. Ley Aplicable</h2>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-orange-500/20">
                <p className="text-sm">
                  Estos términos se rigen por las leyes de Brasil. Cualquier disputa será resuelta 
                  en los tribunales competentes de Brasil.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">11. Cambios en los Términos</h2>
              
              <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/30">
                <p className="text-sm mb-4">
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                  Los cambios significativos serán notificados mediante:
                </p>
                <ul className="text-sm space-y-1 mb-4">
                  <li>• Notificación dentro de la aplicación</li>
                  <li>• Email a tu dirección registrada</li>
                  <li>• Actualización en nuestro sitio web</li>
                </ul>
                <p className="text-sm">
                  El uso continuado de la aplicación después de los cambios constituye tu aceptación de los nuevos términos.
                </p>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">Contacto</h2>
              
              <p className="mb-6">
                Si tienes preguntas sobre estos términos de uso:
              </p>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-orange-500/20">
                <p className="mb-2">
                  <strong className="text-orange-500">Email</strong>:{" "}
                  <a 
                    href="mailto:suporte@heatgame.com.br?subject=Consulta sobre Términos de Uso"
                    className="text-orange-500 hover:text-orange-400 underline"
                  >
                    suporte@heatgame.com.br
                  </a>
                </p>
                <p className="text-sm text-gray-400">
                  Nuestro equipo responde en un plazo de 24-48 horas
                </p>
              </div>
            </section>

            <section className="text-center">
              <p className="text-sm text-gray-400">
                <strong>Última actualización:</strong> Agosto de 2025
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
