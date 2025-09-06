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
    Loader2,
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

interface AndroidGameProps {
  title: string
  description: string
  fullDescription: {
    intro: string
    whatYouFind: string
    personalizedGames: string
    intensityLevels: string
    premiumMode: string
    sophisticatedDesign: string
    forAllStyles: string
    conclusion: string
  }
  reviews: Array<{
    name: string
    avatar: string
    rating: number
    date: string
    review: string
    helpful: number
  }>
  appInfo: {
    updated: string
    size: string
    installs: string
    currentVersion: string
    requiresAndroid: string
    contentRating: string
    offeredBy: string
  }
  dataSafety: {
    shareDescription: string
    collectDescription: string
  }
  footer: {
    androidStore: string
    kidsFamily: string
    terms: string
    privacy: string
    about: string
    company: string
  }
}

export default function AndroidGame({
  title,
  description,
  fullDescription,
  reviews,
  appInfo,
  dataSafety,
  footer,
}: AndroidGameProps) {
  const [showFullDescription, setShowFullDescription] = useState(false)
  const [currentScreenshot, setCurrentScreenshot] = useState(0)
  const [isDownloading, setIsDownloading] = useState(false)

  // Função para simular download do APK
  const handleDownloadAPK = async () => {
    setIsDownloading(true)
    
    try {
      // Simular delay de download (remova em produção)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // URL do seu APK (você precisa hospedar o arquivo)
      const apkUrl = '/heat-game.apk' // ou URL externa como 'https://yoursite.com/heat-game.apk'
      
      // Criar link de download
      const link = document.createElement('a')
      link.href = apkUrl
      link.download = 'heat-game.apk'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
    } catch (error) {
      console.error('Erro no download:', error)
      // Opcional: mostrar erro para o usuário
    } finally {
      setIsDownloading(false)
    }
  }

  const screenshots = [
    "/heat-screenshot-1.png",
    "/heat-screenshot-2.png",
    "/heat-screenshot-3.png",
    "/heat-screenshot-4.png",
    "/heat-screenshot-5.png",
  ]

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length)
  }

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <style jsx global>{`
        @font-face {
          font-family: 'ProductSans';
          src: url('/fonts/ProductSans-Regular.ttf') format('truetype');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'ProductSans';
          src: url('/fonts/ProductSans-Medium.ttf') format('truetype');
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'ProductSans';
          src: url('/fonts/ProductSans-Bold.ttf') format('truetype');
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        .font-product-sans {
          font-family: 'ProductSans', sans-serif;
        }
      `}</style>
      
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

      <main className="pb-20 font-product-sans">
        <div className="px-6 py-6">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <img
                src="/heat-game-logo.png"
                alt="Heat Game Icon"
                className="h-20 w-20 rounded-2xl shadow-lg object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="text-3xl font-bold text-gray-900 mb-1 text-balance">{title}</h1>
              <p className="text-[#01875f] text-sm mb-1">PineApp</p>
              <p className="text-gray-600 text-sm">In-app purchases</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm mt-6 mb-6">
            <div className="flex items-center gap-1">
              <span className="font-medium">4.8</span>
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <div className="text-xs text-gray-500 ml-1">4K reviews</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <Download className="h-4 w-4 text-gray-600 mx-auto mb-1" />
              <div className="text-xs text-gray-500">8 MB</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="font-medium">4M</div>
              <div className="text-xs text-gray-500">Downloads</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="w-6 h-4 bg-gray-300 rounded flex items-center justify-center text-xs font-bold mb-1">
                18+
              </div>
              <div className="text-xs text-gray-500">Adult</div>
            </div>
          </div>

          <Button 
            className="bg-[#01875f] hover:bg-[#016b4a] text-white w-full py-3 rounded-lg font-medium mb-4 relative"
            onClick={handleDownloadAPK}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Baixando...
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Install
              </>
            )}
          </Button>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-4 h-4 border border-gray-400 rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
            <span>This app is available for your device</span>
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
            <h2 className="text-xl font-normal text-gray-900">About this app</h2>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
          <div className="text-sm text-gray-700 leading-relaxed">
            <p>{description}</p>
            {showFullDescription && (
              <>
                <p className="mt-4">{fullDescription.intro}</p>
                <p className="mt-4">
                  <strong>{fullDescription.whatYouFind}</strong>
                </p>
                <p className="mt-2">
                  <strong>Personalized games:</strong> {fullDescription.personalizedGames}
                </p>
                <p className="mt-2">
                  <strong>Intensity levels:</strong> {fullDescription.intensityLevels}
                </p>
                <p className="mt-2">
                  <strong>Premium mode:</strong> {fullDescription.premiumMode}
                </p>
                <p className="mt-2">
                  <strong>Sophisticated design:</strong> {fullDescription.sophisticatedDesign}
                </p>
                <p className="mt-2">
                  <strong>For all styles:</strong> {fullDescription.forAllStyles}
                </p>
                <p className="mt-4">{fullDescription.conclusion}</p>
              </>
            )}
          </div>
          <Button
            variant="ghost"
            className="mt-3 p-0 h-auto text-[#01875f] font-medium hover:bg-transparent"
            onClick={() => setShowFullDescription(!showFullDescription)}
          >
            {showFullDescription ? "Read less" : "Read more"}
          </Button>
        </div>

        {/* Ratings and Reviews */}
        <div className="px-4 py-6 border-t">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Ratings and reviews</h2>
            <Button variant="ghost" size="sm">
              View all
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
              <p className="text-xs text-muted-foreground mt-1">2.1M reviews</p>
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
          <h2 className="text-lg font-semibold mb-4">App info</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Updated</span>
              <span>{appInfo.updated}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Size</span>
              <span>{appInfo.size}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Installs</span>
              <span>{appInfo.installs}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Current version</span>
              <span>{appInfo.currentVersion}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Requires Android</span>
              <span>{appInfo.requiresAndroid}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Content rating</span>
              <span className="flex items-center gap-1">
                {appInfo.contentRating}
                <Info className="h-3 w-3" />
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Offered by</span>
              <span>{appInfo.offeredBy}</span>
            </div>
          </div>
        </div>

        {/* Data Safety */}
        <div className="px-4 py-6 border-t">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="h-5 w-5 text-[#01875f]" />
            <h2 className="text-lg font-semibold">Data safety</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Safety starts with understanding how developers collect and share your data. Data privacy and security
            practices may vary based on your use, region, and age.
          </p>

          <div className="bg-gray-50 rounded-lg border p-4 mb-4">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Share2 className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    This app may share these data types with third parties
                  </p>
                  <p className="text-xs text-gray-600 mt-1">{dataSafety.shareDescription}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Cloud className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">This app may collect these data types</p>
                  <p className="text-xs text-gray-600 mt-1">{dataSafety.collectDescription}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Data is encrypted in transit</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Trash2 className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">You can request that data be deleted</p>
                </div>
              </div>
            </div>

            <Button variant="ghost" className="mt-4 p-0 h-auto text-sm font-medium text-gray-700 hover:bg-transparent">
              More details
            </Button>
          </div>

          <Button variant="outline" className="w-full bg-transparent">
            See details
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 px-4 py-8 mt-8">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">{footer.androidStore}</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">
                Store Pass
              </a>
              <a href="#" className="hover:text-foreground">
                Store Points
              </a>
              <a href="#" className="hover:text-foreground">
                Gift cards
              </a>
              <a href="#" className="hover:text-foreground">
                Redeem
              </a>
              <a href="#" className="hover:text-foreground">
                Refund policy
              </a>
              <a href="#" className="hover:text-foreground">
                Developer Console
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">{footer.kidsFamily}</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">
                Parent Guide
              </a>
              <a href="#" className="hover:text-foreground">
                Family sharing
              </a>
            </div>
          </div>

          <div className="pt-4 border-t text-xs text-muted-foreground space-y-2">
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-foreground">
                {footer.terms}
              </a>
              <a href="#" className="hover:text-foreground">
                {footer.privacy}
              </a>
              <a href="#" className="hover:text-foreground">
                {footer.about}
              </a>
            </div>
            <p>{footer.company}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
