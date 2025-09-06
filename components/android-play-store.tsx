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

interface AndroidPlayStoreProps {
  translations: {
    // App Info
    appName: string
    developer: string
    inAppPurchases: string
    rating: string
    reviews: string
    downloads: string
    size: string
    adult: string
    install: string
    deviceCompatible: string
    
    // About Section
    aboutApp: string
    description: string
    fullDescription?: string[]
    readMore: string
    readLess: string
    
    // Ratings Section
    ratingsAndReviews: string
    viewAll: string
    totalReviews: string
    
    // Reviews
    reviewData: Array<{
      name: string
      avatar: string
      rating: number
      date: string
      review: string
      helpful: number
    }>
    
    // App Info Section
    appInfo: string
    updated: string
    size2: string
    installs: string
    currentVersion: string
    requiresAndroid: string
    contentRating: string
    offeredBy: string
    
    // Data Safety
    dataSafety: string
    dataPrivacyDescription: string
    shareDataTypes: string
    shareDataDetails: string
    collectDataTypes: string
    collectDataDetails: string
    dataEncrypted: string
    dataCanBeDeleted: string
    moreDetails: string
    seeDetails: string
    
    // Footer
    androidStore: string
    storePass: string
    storePoints: string
    giftCards: string
    redeem: string
    refundPolicy: string
    developerConsole: string
    kidsFamily: string
    parentGuide: string
    familySharing: string
    termsOfService: string
    privacy: string
    aboutAndroidStore: string
  }
}

export default function AndroidPlayStore({ translations }: AndroidPlayStoreProps) {
  const [showFullDescription, setShowFullDescription] = useState(false)
  const [currentScreenshot, setCurrentScreenshot] = useState(0)

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
                src="/heat-game-app-icon-with-fire-logo.png"
                alt="Heat Game Icon"
                className="h-20 w-20 rounded-2xl shadow-lg object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="text-3xl font-bold text-gray-900 mb-1 text-balance">{translations.appName}</h1>
              <p className="text-green-700 text-sm mb-1">{translations.developer}</p>
              <p className="text-gray-600 text-sm">{translations.inAppPurchases}</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm mt-6 mb-6">
            <div className="flex items-center gap-1">
              <span className="font-medium">4.8</span>
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <div className="text-xs text-gray-500 ml-1">{translations.reviews}</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <Download className="h-4 w-4 text-gray-600 mx-auto mb-1" />
              <div className="text-xs text-gray-500">{translations.size}</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="font-medium">4M</div>
              <div className="text-xs text-gray-500">{translations.downloads}</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="w-6 h-4 bg-gray-300 rounded flex items-center justify-center text-xs font-bold mb-1">
                18+
              </div>
              <div className="text-xs text-gray-500">{translations.adult}</div>
            </div>
          </div>

          <Button className="bg-[#01875f] hover:bg-[#016b4a] text-white w-full py-3 rounded-lg font-medium mb-4">
            {translations.install}
          </Button>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-4 h-4 border border-gray-400 rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
            <span>{translations.deviceCompatible}</span>
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
            <h2 className="text-xl font-normal text-gray-900">{translations.aboutApp}</h2>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
          <div className="text-sm text-gray-700 leading-relaxed">
            <p>{translations.description}</p>
            {showFullDescription && translations.fullDescription && (
              <>
                {translations.fullDescription.map((paragraph, index) => (
                  <p key={index} className="mt-4">{paragraph}</p>
                ))}
              </>
            )}
          </div>
          <Button
            variant="ghost"
            className="mt-3 p-0 h-auto text-green-700 font-medium hover:bg-transparent"
            onClick={() => setShowFullDescription(!showFullDescription)}
          >
            {showFullDescription ? translations.readLess : translations.readMore}
          </Button>
        </div>

        {/* Ratings and Reviews */}
        <div className="px-4 py-6 border-t">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">{translations.ratingsAndReviews}</h2>
            <Button variant="ghost" size="sm">
              {translations.viewAll}
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
              <p className="text-xs text-muted-foreground mt-1">{translations.totalReviews}</p>
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
            {translations.reviewData.map((review, index) => (
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
          <h2 className="text-lg font-semibold mb-4">{translations.appInfo}</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">{translations.updated}</span>
              <span>Sep 1, 2025</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{translations.size2}</span>
              <span>8 MB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{translations.installs}</span>
              <span>4,000,000+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{translations.currentVersion}</span>
              <span>1.7.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{translations.requiresAndroid}</span>
              <span>7.0 and up</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{translations.contentRating}</span>
              <span className="flex items-center gap-1">
                {translations.adult}
                <Info className="h-3 w-3" />
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{translations.offeredBy}</span>
              <span>{translations.developer}</span>
            </div>
          </div>
        </div>

        {/* Data Safety */}
        <div className="px-4 py-6 border-t">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">{translations.dataSafety}</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            {translations.dataPrivacyDescription}
          </p>

          <div className="bg-gray-50 rounded-lg border p-4 mb-4">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Share2 className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {translations.shareDataTypes}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">{translations.shareDataDetails}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Cloud className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{translations.collectDataTypes}</p>
                  <p className="text-xs text-gray-600 mt-1">{translations.collectDataDetails}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{translations.dataEncrypted}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Trash2 className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{translations.dataCanBeDeleted}</p>
                </div>
              </div>
            </div>

            <Button variant="ghost" className="mt-4 p-0 h-auto text-sm font-medium text-gray-700 hover:bg-transparent">
              {translations.moreDetails}
            </Button>
          </div>

          <Button variant="outline" className="w-full bg-transparent">
            {translations.seeDetails}
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 px-4 py-8 mt-8">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">{translations.androidStore}</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">
                {translations.storePass}
              </a>
              <a href="#" className="hover:text-foreground">
                {translations.storePoints}
              </a>
              <a href="#" className="hover:text-foreground">
                {translations.giftCards}
              </a>
              <a href="#" className="hover:text-foreground">
                {translations.redeem}
              </a>
              <a href="#" className="hover:text-foreground">
                {translations.refundPolicy}
              </a>
              <a href="#" className="hover:text-foreground">
                {translations.developerConsole}
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">{translations.kidsFamily}</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">
                {translations.parentGuide}
              </a>
              <a href="#" className="hover:text-foreground">
                {translations.familySharing}
              </a>
            </div>
          </div>

          <div className="pt-4 border-t text-xs text-muted-foreground space-y-2">
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-foreground">
                {translations.termsOfService}
              </a>
              <a href="#" className="hover:text-foreground">
                {translations.privacy}
              </a>
              <a href="#" className="hover:text-foreground">
                {translations.aboutAndroidStore}
              </a>
            </div>
            <p>Android Commerce Limited</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
