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

export default function HeatGamePlayStore() {
  const [showFullDescription, setShowFullDescription] = useState(false)
  const [currentScreenshot, setCurrentScreenshot] = useState(0)

  const handleInstallClick = () => {
    // Supabase Storage URL for APK download
    const apkUrl = "https://uwjpufwedldtmjhmzqye.supabase.co/storage/v1/object/public/apk-android/app-release.apk"
    
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
      date: "15 de dezembro de 2024",
      review:
        "Gráficos e jogabilidade incríveis! Os efeitos de fogo são incríveis e o modo multiplayer é viciante. O melhor jogo mobile que joguei este ano.",
      helpful: 127,
    },
    {
      name: "Sarah Johnson",
      avatar: "/user-avatar-female-blonde.png",
      rating: 4,
      date: "12 de dezembro de 2024",
      review:
        "Ótimo jogo no geral, mas poderia ter mais níveis. Os controles são suaves e a história é envolvente. Ansioso por atualizações!",
      helpful: 89,
    },
    {
      name: "Mike Rodriguez",
      avatar: "/user-avatar-male-hispanic.png",
      rating: 5,
      date: "10 de dezembro de 2024",
      review:
        "Absolutamente amo este jogo! As mecânicas de calor são únicas e as batalhas contra chefes são épicas. Vale cada centavo!",
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
              <p className="text-gray-600 text-sm">Compras no app</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm mt-6 mb-6">
            <div className="flex items-center gap-1">
              <span className="font-medium text-gray-900">4.8</span>
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <div className="text-xs text-gray-600 ml-1">4K avaliações</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <Download className="h-4 w-4 text-gray-600 mx-auto mb-1" />
              <div className="text-xs text-gray-600">8 MB</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="font-medium text-gray-900">4M</div>
              <div className="text-xs text-gray-600">Downloads</div>
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
            <span>Este app está disponível para o seu dispositivo</span>
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
            <h2 className="text-xl font-normal text-gray-900">Sobre este app</h2>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
          <div className="text-sm text-gray-700 leading-relaxed">
            <p>
              Descubra o Heat, o app ideal para casais e amigos que querem sair da rotina, criar momentos únicos e
              fortalecer a conexão de forma leve, divertida e provocante.
            </p>
            {showFullDescription && (
              <>
                <p className="mt-4">
                  Com jogos interativos, desafios envolventes e perguntas que provocam reflexão, o Heat transforma
                  qualquer momento em uma experiência memorável — seja a dois, entre amigos ou em grupo.
                </p>
                <p className="mt-4">
                  <strong>O que você encontrará no Heat:</strong>
                </p>
                <p className="mt-2">
                  <strong>Jogos personalizados:</strong> modos como Verdade ou Desafio, Encontro Perfeito, Surpresa,
                  entre outros, pensados para criar conexão, cumplicidade e boas risadas.
                </p>
                <p className="mt-2">
                  <strong>Níveis de intensidade:</strong> escolha entre Leve, Quente, Picante ou Extremo para combinar
                  com o clima do momento.
                </p>
                <p className="mt-2">
                  <strong>Modo premium:</strong> desbloqueie cartas exclusivas, modos especiais e experiências mais
                  intensas para tornar suas noites ainda mais memoráveis.
                </p>
                <p className="mt-2">
                  <strong>Design sofisticado:</strong> visual moderno e intuitivo, ideal para usar em casa, em viagens
                  ou ocasiões especiais.
                </p>
                <p className="mt-2">
                  <strong>Para todos os estilos:</strong> jogabilidade adaptável para casais, grupos de amigos ou
                  experiências a dois.
                </p>
                <p className="mt-4">
                  Seja para reacender a chama, criar novas memórias ou simplesmente se divertir com quem você ama, o
                  Heat é seu parceiro ideal para momentos únicos.
                </p>
              </>
            )}
          </div>
          <Button
            variant="ghost"
            className="mt-3 p-0 h-auto text-green-700 font-medium hover:bg-transparent"
            onClick={() => setShowFullDescription(!showFullDescription)}
          >
            {showFullDescription ? "Ler menos" : "Ler mais"}
          </Button>
        </div>

        {/* Ratings and Reviews */}
        <div className="px-4 py-6 border-t">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Avaliações</h2>
            <Button variant="ghost" size="sm">
              Ver todas
            </Button>
          </div>

          {/* Rating Summary */}
          <div className="flex items-center gap-4 mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">4.8</div>
              <div className="flex items-center justify-center gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-1">2.1M avaliações</p>
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
                        <span className="font-medium text-sm text-gray-900">{review.name}</span>
                        <span className="text-xs text-gray-600">{review.date}</span>
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
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">{review.review}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-600">
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
          <h2 className="text-lg font-semibold mb-4">Informações do app</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Atualizado</span>
              <span className="text-gray-900">1 de set. de 2025</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tamanho</span>
              <span className="text-gray-900">8 MB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Instalações</span>
              <span className="text-gray-900">4.000.000+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Versão atual</span>
              <span className="text-gray-900">1.7.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Requer Android</span>
              <span className="text-gray-900">7.0 ou superior</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Classificação do conteúdo</span>
              <span className="flex items-center gap-1 text-gray-900">
                Adulto
                <Info className="h-3 w-3" />
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Oferecido por</span>
              <span className="text-gray-900">PineApp</span>
            </div>
          </div>
        </div>

        {/* Data Safety */}
        <div className="px-4 py-6 border-t">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Segurança dos dados</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            A segurança começa com o entendimento de como os desenvolvedores coletam e compartilham seus dados. As
            práticas de privacidade e segurança de dados podem variar de acordo com o uso, região e idade.
          </p>

          <div className="bg-gray-50 rounded-lg border p-4 mb-4">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Share2 className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Este app pode compartilhar estes tipos de dados com terceiros
                  </p>
                  <p className="text-xs text-gray-600 mt-1">Fotos e vídeos, Atividade do app e mais 2</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Cloud className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Este app pode coletar estes tipos de dados</p>
                  <p className="text-xs text-gray-600 mt-1">Informações pessoais</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Os dados são criptografados em trânsito</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Trash2 className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Você pode solicitar a exclusão dos dados</p>
                </div>
              </div>
            </div>

            <Button variant="ghost" className="mt-4 p-0 h-auto text-sm font-medium text-gray-700 hover:bg-transparent">
              Mais detalhes
            </Button>
          </div>

          <Button variant="outline" className="w-full bg-transparent">
            Ver detalhes
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
                Cartões-presente
              </a>
              <a href="#" className="hover:text-foreground">
                Resgatar
              </a>
              <a href="#" className="hover:text-foreground">
                Política de reembolso
              </a>
              <a href="#" className="hover:text-foreground">
                Console do desenvolvedor
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Crianças e família</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">
                Guia dos pais
              </a>
              <a href="#" className="hover:text-foreground">
                Compartilhamento familiar
              </a>
            </div>
          </div>

          <div className="pt-4 border-t text-xs text-muted-foreground space-y-2">
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-foreground">
                Termos de Serviço
              </a>
              <a href="#" className="hover:text-foreground">
                Privacidade
              </a>
              <a href="#" className="hover:text-foreground">
                Sobre a Android Store
              </a>
            </div>
            <p>Android Commerce Limited</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
