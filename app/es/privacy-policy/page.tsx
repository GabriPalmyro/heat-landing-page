import Footer from "@/components/footer"
import Header from "@/components/header"

export const metadata = {
  title: "Política de Privacidad - Heat Game",
  description: "Política de privacidad de Heat Game. Aprende cómo recopilamos, usamos y protegemos tu información.",
}

export default function PrivacyPolicyEsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      <div className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Política de Privacidad — Heat Game 🔥
          </h1>
          
          <div className="flex justify-center mb-6">
            <div className="flex space-x-4 bg-gray-800/50 p-2 rounded-lg">
              <a 
                href="/politicas-de-privacidade" 
                className="px-3 py-1 text-gray-400 hover:text-white rounded text-sm transition-colors"
              >
                🇧🇷 PT
              </a>
              <a 
                href="/en/privacy-policy" 
                className="px-3 py-1 text-gray-400 hover:text-white rounded text-sm transition-colors"
              >
                🇺🇸 EN
              </a>
              <span className="px-3 py-1 bg-orange-500 text-white rounded text-sm font-semibold">🇪🇸 ES</span>
            </div>
          </div>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-lg text-center">
              En <strong className="text-orange-500">Heat Game</strong>, tu privacidad es nuestra prioridad.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">Información que Recopilamos</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-orange-500 mb-2">📧 Información de Cuenta</h3>
                  <p className="text-sm">
                    Email, nombre de usuario y configuraciones de perfil que proporcionas al crear tu cuenta.
                  </p>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-orange-500 mb-2">🎮 Datos de Juego</h3>
                  <p className="text-sm">
                    Información sobre tu progreso, puntuaciones, preferencias de juego y interacciones dentro de la aplicación.
                  </p>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-orange-500 mb-2">📱 Información del Dispositivo</h3>
                  <p className="text-sm">
                    Datos técnicos como tipo de dispositivo, sistema operativo, identificadores únicos y datos de rendimiento.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">Cómo Usamos tu Información</h2>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold">✅</span>
                  <div>
                    <strong className="text-orange-500">Mejora del Servicio</strong>
                    <p className="text-sm text-gray-400">Para mejorar la funcionalidad y experiencia del usuario</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold">✅</span>
                  <div>
                    <strong className="text-orange-500">Soporte al Cliente</strong>
                    <p className="text-sm text-gray-400">Para responder a tus consultas y resolver problemas técnicos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold">✅</span>
                  <div>
                    <strong className="text-orange-500">Análisis y Estadísticas</strong>
                    <p className="text-sm text-gray-400">Para entender cómo se usa la aplicación y mejorar las funcionalidades</p>
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">Protección de Datos</h2>
              
              <div className="bg-green-900/20 p-6 rounded-lg border border-green-500/30">
                <h3 className="text-green-400 font-semibold mb-4">🔒 Medidas de Seguridad</h3>
                <ul className="text-sm space-y-2">
                  <li>• Encriptación de datos en tránsito y en reposo</li>
                  <li>• Acceso restringido a información personal</li>
                  <li>• Monitoreo regular de sistemas de seguridad</li>
                  <li>• Cumplimiento con estándares internacionales de protección de datos</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">Tus Derechos</h2>
              
              <div className="space-y-4">
                <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                  <h3 className="font-semibold text-blue-400 mb-2">📋 Acceso a Datos</h3>
                  <p className="text-sm">
                    Tienes derecho a solicitar una copia de los datos personales que tenemos sobre ti.
                  </p>
                </div>
                
                <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                  <h3 className="font-semibold text-blue-400 mb-2">✏️ Corrección de Datos</h3>
                  <p className="text-sm">
                    Puedes solicitar correcciones a información inexacta o desactualizada.
                  </p>
                </div>
                
                <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                  <h3 className="font-semibold text-blue-400 mb-2">🗑️ Eliminación de Datos</h3>
                  <p className="text-sm">
                    Puedes solicitar la eliminación de tu cuenta y datos personales en cualquier momento.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">Compartir Información</h2>
              
              <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/30">
                <h3 className="text-red-400 font-semibold mb-4">🚫 NO Compartimos Datos Personales</h3>
                <p className="text-sm mb-4">
                  No vendemos, alquilamos o compartimos tu información personal con terceros para fines de marketing.
                </p>
                <p className="text-sm">
                  Solo podemos compartir información en casos específicos como:
                </p>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Cumplimiento de obligaciones legales</li>
                  <li>• Protección de derechos y seguridad de usuarios</li>
                  <li>• Con proveedores de servicios esenciales (bajo estrictos acuerdos de confidencialidad)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">Cookies y Tecnologías Similares</h2>
              
              <p className="mb-4">
                Utilizamos cookies y tecnologías similares para:
              </p>
              
              <ul className="space-y-2 mb-6">
                <li>• Mantener tu sesión iniciada</li>
                <li>• Recordar tus preferencias</li>
                <li>• Analizar el uso de la aplicación</li>
                <li>• Mejorar el rendimiento</li>
              </ul>
              
              <p className="text-sm text-gray-400">
                Puedes gestionar las configuraciones de cookies en tu dispositivo, aunque esto puede afectar 
                algunas funcionalidades de la aplicación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">Retención de Datos</h2>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-orange-500/20">
                <p className="text-sm mb-4">
                  Mantenemos tu información personal solo durante el tiempo necesario para:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Proporcionar nuestros servicios</li>
                  <li>• Cumplir con obligaciones legales</li>
                  <li>• Resolver disputas</li>
                  <li>• Hacer cumplir nuestros acuerdos</li>
                </ul>
                <p className="text-sm mt-4">
                  <strong className="text-orange-500">Eliminación de cuenta</strong>: Cuando solicites la eliminación 
                  de tu cuenta, eliminaremos permanentemente tus datos personales en un plazo de 30 días.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">Menores de Edad</h2>
              
              <div className="bg-yellow-900/20 p-6 rounded-lg border border-yellow-500/30">
                <h3 className="text-yellow-400 font-semibold mb-4">🔞 Restricción de Edad</h3>
                <p className="text-sm">
                  Heat Game está destinado a usuarios adultos (18 años o más). No recopilamos 
                  intencionalmente información personal de menores de 18 años. Si descubrimos que 
                  hemos recopilado información de un menor, tomaremos medidas inmediatas para eliminar esa información.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">Cambios en esta Política</h2>
              
              <p className="mb-4">
                Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre 
                cambios significativos mediante:
              </p>
              
              <ul className="space-y-2 mb-6">
                <li>• Notificación dentro de la aplicación</li>
                <li>• Email a tu dirección registrada</li>
                <li>• Actualización en nuestro sitio web</li>
              </ul>
              
              <p className="text-sm text-gray-400">
                La fecha de la última actualización se mostrará al principio de esta política.
              </p>
            </section>

            <section className="text-center">
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">Contacto</h2>
              
              <p className="mb-6">
                Si tienes preguntas sobre esta política de privacidad o sobre el manejo de tus datos:
              </p>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-orange-500/20">
                <p className="mb-2">
                  <strong className="text-orange-500">Email</strong>:{" "}
                  <a 
                    href="mailto:suporte@heatgame.com.br?subject=Consulta sobre Política de Privacidad"
                    className="text-orange-500 hover:text-orange-400 underline"
                  >
                    suporte@heatgame.com.br
                  </a>
                </p>
                <p className="text-sm text-gray-400">
                  Responderemos a tu consulta en un plazo de 48 horas
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
