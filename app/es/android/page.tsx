"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  ChevronRight,
  Cloud,
  Download,
  Flag,
  Info,
  Lock,
  MoreVertical,
  Share2,
  Shield,
  Star,
  ThumbsDown,
  ThumbsUp,
  Trash2,
} from "lucide-react"
import { useState } from "react"

export default function HeatGamePlayStoreES() {
  const [showFullDescription, setShowFullDescription] = useState(false)
  const [currentScreenshot, setCurrentScreenshot] = useState(0)

  const handleInstallClick = () => {
    // Supabase Storage URL for APK download
    const apkUrl = "https://github.com/Heat-Game/heat_app/releases/download/v1.7.0/app-release.apk"
    
    // Create a temporary link element and trigger download
    const link = document.createElement('a')
    link.href = apkUrl
    link.download = 'heat-app-release.apk'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const screenshots = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-9y6o9rpc1XtMwNynVhjdlx5HRbcqVi.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-XcxsPmu1l6RAKoabYjjYP8HjR48xTH.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-ObWLWHqmNoaax4hRSoujRD7RJyzs3p.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-FoVeY8WUE1t7VfvRgOA2x94dAmmJhe.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-DJaWigRooFEqVmgGdNEa3Fmhn3ceyF.png",
  ]

  const reviews = [
    {
      name: "Alex Chen",
      avatar: "/male-asian-avatar.png",
      rating: 5,
      date: "15 de diciembre de 2024",
      review:
        "¡Gráficos y jugabilidad increíbles! Los efectos de fuego son increíbles y el modo multijugador es adictivo. El mejor juego móvil que he jugado este año.",
      helpful: 127,
    },
    {
      name: "Sarah Johnson",
      avatar: "/user-avatar-female-blonde.png",
      rating: 4,
      date: "12 de diciembre de 2024",
      review:
        "Gran juego en general, pero podría tener más niveles. Los controles son suaves y la historia es atractiva. ¡Esperando actualizaciones!",
      helpful: 89,
    },
    {
      name: "Mike Rodriguez",
      avatar: "/user-avatar-male-hispanic.png",
      rating: 5,
      date: "10 de diciembre de 2024",
      review:
        "¡Absolutamente amo este juego! Las mecánicas de calor son únicas y las batallas contra jefes son épicas. ¡Vale cada centavo!",
      helpful: 156,
    },
  ]

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length)
  }

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <ArrowLeft className="h-6 w-6 text-gray-700" />
          </div>
          <div className="flex items-center gap-4">
            <MoreVertical className="h-5 w-5 text-gray-600" />
          </div>
        </div>
      </header>

      <main className="pb-20">
        <div className="px-6 py-6">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Heat%20Logo-Zt8DWK5YNWyka1p1WZhXEhg6T5G6aj.png"
                alt="Heat Game Icon"
                className="h-20 w-20 rounded-2xl shadow-lg object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="text-3xl font-bold text-gray-900 mb-1 text-balance">Heat Game</h1>
              <p className="text-green-700 text-sm mb-1">PineApp</p>
              <p className="text-gray-600 text-sm">Compras en la app</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm mt-6 mb-6">
            <div className="flex items-center gap-1">
              <span className="font-medium text-gray-900">4.8</span>
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <div className="text-xs text-gray-600 ml-1">4K reseñas</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <Download className="h-4 w-4 text-gray-600 mx-auto mb-1" />
              <div className="text-xs text-gray-600">8 MB</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="font-medium text-gray-900">4M</div>
              <div className="text-xs text-gray-600">Descargas</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="w-6 h-4 bg-gray-300 rounded flex items-center justify-center text-xs font-bold mb-1">
                18+
              </div>
              <div className="text-xs text-gray-600">Adulto</div>
            </div>
          </div>

          <Button 
            className="bg-[#01875f] hover:bg-[#016b4a] text-white w-full py-3 rounded-lg font-medium mb-4"
            onClick={handleInstallClick}
          >
            Instalar
          </Button>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-4 h-4 border border-gray-400 rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
            <span>Esta app está disponible para tu dispositivo</span>
          </div>
        </div>

        <div className="py-4">
          <div className="relative">
            <div className="flex gap-2 px-4 overflow-x-auto scrollbar-hide">
              {screenshots.map((screenshot, index) => (
                <div key={index} className="flex-shrink-0 relative">
                  <img
                    src={screenshot || "/placeholder.svg"}
                    alt={`Screenshot ${index + 1}`}
                    className="h-96 w-44 object-cover rounded-2xl shadow-md cursor-pointer"
                    onClick={() => setCurrentScreenshot(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-normal text-gray-900">Acerca de esta app</h2>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
          <div className="text-sm text-gray-700 leading-relaxed">
            <p>
              Descubre Heat, la app ideal para parejas y amigos que quieren salir de la rutina, crear momentos únicos y
              fortalecer la conexión de manera ligera, divertida y provocativa.
            </p>
            {showFullDescription && (
              <>
                <p className="mt-4">
                  Con juegos interactivos, desafíos atractivos y preguntas que provocan reflexión, Heat transforma
                  cualquier momento en una experiencia memorable — ya sea en pareja, entre amigos o en grupo.
                </p>
                <p className="mt-4">
                  <strong>Lo que encontrarás en Heat:</strong>
                </p>
                <p className="mt-2">
                  <strong>Juegos personalizados:</strong> modos como Verdad o Reto, Cita Perfecta, Sorpresa, entre
                  otros, diseñados para crear conexión, complicidad y buenas risas.
                </p>
                <p className="mt-2">
                  <strong>Niveles de intensidad:</strong> elige entre Suave, Caliente, Picante o Extremo para
                  combinar con el ambiente del momento.
                </p>
                <p className="mt-2">
                  <strong>Modo premium:</strong> desbloquea cartas exclusivas, modos especiales y experiencias más
                  intensas para hacer tus noches aún más memorables.
                </p>
                <p className="mt-2">
                  <strong>Diseño sofisticado:</strong> visual moderno e intuitivo, ideal para usar en casa, en viajes o
                  ocasiones especiales.
                </p>
                <p className="mt-2">
                  <strong>Para todos los estilos:</strong> jugabilidad adaptable para parejas, grupos de amigos o
                  experiencias en pareja.
                </p>
                <p className="mt-4">
                  Ya sea para reavivar la llama, crear nuevos recuerdos o simplemente divertirse con quienes amas, Heat
                  es tu compañero ideal para momentos únicos.
                </p>
              </>
            )}
          </div>
          <Button
            variant="ghost"
            className="mt-3 p-0 h-auto text-green-700 font-medium hover:bg-transparent"
            onClick={() => setShowFullDescription(!showFullDescription)}
          >
            {showFullDescription ? "Leer menos" : "Leer más"}
          </Button>
        </div>

        {/* Ratings and Reviews */}
        <div className="px-4 py-6 border-t">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Calificaciones y reseñas</h2>
            <Button variant="ghost" size="sm">
              Ver todas
            </Button>
          </div>

          {/* Rating Summary */}
          <div className="flex items-center gap-4 mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold">4.8</div>
              <div className="flex items-center justify-center gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-1">2.1M reseñas</p>
            </div>
            <div className="flex-1 space-y-1">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-2 text-xs">
                  <span className="w-2">{rating}</span>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400"
                      style={{
                        width:
                          rating === 5
                            ? "75%"
                            : rating === 4
                              ? "15%"
                              : rating === 3
                                ? "5%"
                                : rating === 2
                                  ? "3%"
                                  : "2%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <Card key={index} className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  <div className="flex gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                      <AvatarFallback>
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{review.name}</span>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-3 w-3 ${
                              star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{review.review}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <button className="flex items-center gap-1 hover:text-foreground">
                          <ThumbsUp className="h-3 w-3" />
                          {review.helpful}
                        </button>
                        <button className="flex items-center gap-1 hover:text-foreground">
                          <ThumbsDown className="h-3 w-3" />
                        </button>
                        <button className="flex items-center gap-1 hover:text-foreground">
                          <Flag className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* App Info */}
        <div className="px-4 py-6 border-t">
          <h2 className="text-lg font-semibold mb-4">Información de la app</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Actualizada</span>
              <span>1 sept. 2025</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tamaño</span>
              <span>8 MB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Instalaciones</span>
              <span>4,000,000+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Versión actual</span>
              <span>1.7.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Requiere Android</span>
              <span>7.0 o superior</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Clasificación de contenido</span>
              <span className="flex items-center gap-1">
                Adulto
                <Info className="h-3 w-3" />
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Ofrecida por</span>
              <span>PineApp</span>
            </div>
          </div>
        </div>

        {/* Data Safety */}
        <div className="px-4 py-6 border-t">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Seguridad de datos</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            La seguridad comienza con comprender cómo los desarrolladores recopilan y comparten tus datos. Las
            prácticas de privacidad y seguridad de datos pueden variar según el uso, la región y la edad.
          </p>

          <div className="bg-gray-50 rounded-lg border p-4 mb-4">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Share2 className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Esta app puede compartir estos tipos de datos con terceros
                  </p>
                  <p className="text-xs text-gray-600 mt-1">Fotos y videos, Actividad de la app y 2 más</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Cloud className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Esta app puede recopilar estos tipos de datos</p>
                  <p className="text-xs text-gray-600 mt-1">Información personal</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Los datos se cifran en tránsito</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Trash2 className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Puedes solicitar que se eliminen los datos</p>
                </div>
              </div>
            </div>

            <Button variant="ghost" className="mt-4 p-0 h-auto text-sm font-medium text-gray-700 hover:bg-transparent">
              Más detalles
            </Button>
          </div>

          <Button variant="outline" className="w-full bg-transparent">
            Ver detalles
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 px-4 py-8 mt-8">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Android Store</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">
                Store Pass
              </a>
              <a href="#" className="hover:text-foreground">
                Store Points
              </a>
              <a href="#" className="hover:text-foreground">
                Tarjetas de regalo
              </a>
              <a href="#" className="hover:text-foreground">
                Canjear
              </a>
              <a href="#" className="hover:text-foreground">
                Política de reembolso
              </a>
              <a href="#" className="hover:text-foreground">
                Consola para desarrolladores
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Niños y familia</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">
                Guía para padres
              </a>
              <a href="#" className="hover:text-foreground">
                Compartir en familia
              </a>
            </div>
          </div>

          <div className="pt-4 border-t text-xs text-muted-foreground space-y-2">
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-foreground">
                Términos del Servicio
              </a>
              <a href="#" className="hover:text-foreground">
                Privacidad
              </a>
              <a href="#" className="hover:text-foreground">
                Acerca de Android Store
              </a>
            </div>
            <p>Android Commerce Limited</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
