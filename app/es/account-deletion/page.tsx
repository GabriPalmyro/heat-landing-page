import Footer from "@/components/footer"
import Header from "@/components/header"

export const metadata = {
  title: "Solicitud de Eliminación de Cuenta - Heat Game",
  description: "Aprende cómo solicitar la eliminación de tu cuenta de Heat Game y qué sucede con tus datos.",
}

export default function AccountDeletionEsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      <div className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Solicitud de Eliminación de Cuenta — Heat Game 🔥
          </h1>
          
          <div className="flex justify-center mb-6">
            <div className="flex space-x-4 bg-gray-800/50 p-2 rounded-lg">
              <a 
                href="/exclusao-de-conta" 
                className="px-3 py-1 text-gray-400 hover:text-white rounded text-sm transition-colors"
              >
                🇧🇷 PT
              </a>
              <a 
                href="/en/account-deletion" 
                className="px-3 py-1 text-gray-400 hover:text-white rounded text-sm transition-colors"
              >
                🇺🇸 EN
              </a>
              <span className="px-3 py-1 bg-orange-500 text-white rounded text-sm font-semibold">🇪🇸 ES</span>
            </div>
          </div>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-lg text-center">
              Si deseas <strong className="text-orange-500">eliminar tu cuenta</strong> en{" "}
              <strong className="text-orange-500">Heat App</strong>, por favor sigue las instrucciones a continuación.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">Cómo Solicitar la Eliminación de Cuenta:</h2>
              
              <p className="mb-4">
                Para iniciar el proceso de eliminación de cuenta, envía un correo electrónico a la siguiente dirección:
              </p>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-orange-500/20 mb-6">
                <p className="text-center">
                  <strong className="text-orange-500">Email</strong>:{" "}
                  <a 
                    href="mailto:suporte@heatgame.com.br?subject=Solicitud de Eliminación de Cuenta"
                    className="text-orange-500 hover:text-orange-400 underline font-semibold text-lg"
                  >
                    suporte@heatgame.com.br
                  </a>
                </p>
              </div>
              
              <h3 className="text-xl font-semibold text-orange-500 mb-4">Información Requerida en el Email:</h3>
              
              <ol className="list-decimal list-inside space-y-3 mb-6">
                <li>
                  <strong className="text-orange-500">Asunto</strong>: "Solicitud de Eliminación de Cuenta"
                </li>
                <li>
                  <strong className="text-orange-500">Email registrado</strong>: La dirección de correo utilizada para crear tu cuenta
                </li>
                <li>
                  <strong className="text-orange-500">Motivo de eliminación</strong> (opcional): Puedes compartir por qué deseas eliminar tu cuenta
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">¿Qué Sucede Después de la Solicitud?</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-orange-500 mb-2">⏱️ Confirmación Inmediata</h3>
                  <p>Recibirás una confirmación automática de que recibimos tu solicitud.</p>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-orange-500 mb-2">🔍 Procesamiento</h3>
                  <p>Procesaremos tu solicitud en un plazo de <strong>5-7 días laborables</strong>.</p>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-orange-500 mb-2">✅ Confirmación Final</h3>
                  <p>Te enviaremos una confirmación final una vez que tu cuenta haya sido completamente eliminada.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">Datos que Serán Eliminados:</h2>
              
              <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/30 mb-6">
                <h3 className="text-red-400 font-semibold mb-4">⚠️ Esta acción es IRREVERSIBLE</h3>
                <p className="text-sm">
                  Una vez confirmada la eliminación, no será posible recuperar tu cuenta o datos.
                </p>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">🗑️</span>
                  <div>
                    <strong className="text-orange-500">Información del perfil</strong>
                    <p className="text-sm text-gray-400">Nombre, email, foto de perfil y preferencias</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">🗑️</span>
                  <div>
                    <strong className="text-orange-500">Historial de juego</strong>
                    <p className="text-sm text-gray-400">Todas las partidas, puntuaciones y progreso</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">🗑️</span>
                  <div>
                    <strong className="text-orange-500">Configuraciones personalizadas</strong>
                    <p className="text-sm text-gray-400">Todas las configuraciones y preferencias del app</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">🗑️</span>
                  <div>
                    <strong className="text-orange-500">Datos de uso y análisis</strong>
                    <p className="text-sm text-gray-400">Información sobre cómo usas el app</p>
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">Alternativas a la Eliminación:</h2>
              
              <p className="mb-4">Antes de proceder, considera estas opciones:</p>
              
              <div className="space-y-4">
                <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                  <h3 className="font-semibold text-blue-400 mb-2">💤 Desactivación Temporal</h3>
                  <p className="text-sm">
                    Puedes desactivar temporalmente tu cuenta en lugar de eliminarla permanentemente.
                    Contacta nuestro soporte para más información.
                  </p>
                </div>
                
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
                  <h3 className="font-semibold text-green-400 mb-2">🔒 Configuraciones de Privacidad</h3>
                  <p className="text-sm">
                    Revisa las configuraciones de privacidad dentro del app para controlar qué datos se comparten.
                  </p>
                </div>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">¿Necesitas Ayuda?</h2>
              
              <p className="mb-6">
                Si tienes preguntas o necesitas asistencia con el proceso de eliminación:
              </p>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-orange-500/20">
                <p className="mb-2">
                  <strong className="text-orange-500">Email de Soporte</strong>:{" "}
                  <a 
                    href="mailto:suporte@heatgame.com.br?subject=Ayuda con Eliminación de Cuenta"
                    className="text-orange-500 hover:text-orange-400 underline"
                  >
                    suporte@heatgame.com.br
                  </a>
                </p>
                <p className="text-sm text-gray-400">
                  Nuestro equipo de soporte responde en un plazo de 24-48 horas
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
