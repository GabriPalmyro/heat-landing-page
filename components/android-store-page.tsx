"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, ChevronRight, Cloud, Download, Flag, Info, Lock, MoreVertical, Share2, Shield, Star, ThumbsDown, ThumbsUp, Trash2 } from "lucide-react"

import { androidContent } from "@/lib/android-content"
import { ANDROID_APK_URL } from "@/lib/download-links"
import { Locale } from "@/src/i18n"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const SCREENSHOTS = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-9y6o9rpc1XtMwNynVhjdlx5HRbcqVi.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-XcxsPmu1l6RAKoabYjjYP8HjR48xTH.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-ObWLWHqmNoaax4hRSoujRD7RJyzs3p.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-FoVeY8WUE1t7VfvRgOA2x94dAmmJhe.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-DJaWigRooFEqVmgGdNEa3Fmhn3ceyF.png",
]

type AndroidStorePageProps = {
  locale: Locale
}

export function AndroidStorePage({ locale }: AndroidStorePageProps) {
  const [showFullDescription, setShowFullDescription] = useState(false)
  const [, setCurrentScreenshot] = useState(0)
  const searchParams = useSearchParams()

  const content = androidContent[locale] || androidContent.pt
  const isUpdateMode = searchParams?.get("update") === "true"
  const safetyIcons = [Share2, Cloud, Lock, Trash2]

  const handleInstallClick = () => {
    window.open(ANDROID_APK_URL, "_blank", "noopener,noreferrer")
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
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="text-3xl font-bold text-gray-900 mb-1 text-balance">{content.appName}</h1>
              <p className="text-green-700 text-sm mb-1">{content.developer}</p>
              <p className="text-gray-600 text-sm">{content.billingLabel}</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm mt-6 mb-6">
            <div className="flex items-center gap-1">
              <span className="font-medium text-gray-900">{content.stats.ratingValue}</span>
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <div className="text-xs text-gray-600 ml-1">{content.stats.ratingLabel}</div>
            </div>
            <div className="w-px h-8 bg-gray-300" />
            <div className="text-center">
              <Download className="h-4 w-4 text-gray-600 mx-auto mb-1" />
              <div className="text-xs text-gray-600">{content.stats.size}</div>
            </div>
            <div className="w-px h-8 bg-gray-300" />
            <div className="text-center">
              <div className="font-medium text-gray-900">{content.stats.downloadsValue}</div>
              <div className="text-xs text-gray-600">{content.stats.downloadsLabel}</div>
            </div>
            <div className="w-px h-8 bg-gray-300" />
            <div className="text-center">
              <div className="w-6 h-4 bg-gray-300 rounded flex items-center justify-center text-xs font-bold mb-1">
                {content.stats.maturityBadge}
              </div>
              <div className="text-xs text-gray-600">{content.stats.maturityLabel}</div>
            </div>
          </div>

          <Button
            className="bg-[#01875f] hover:bg-[#016b4a] text-white w-full py-3 rounded-lg font-medium mb-4"
            onClick={handleInstallClick}
          >
            {isUpdateMode ? content.install.updateLabel : content.install.installLabel}
          </Button>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-4 h-4 border border-gray-400 rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full" />
            </div>
            <span>{content.install.availabilityNote}</span>
          </div>
        </div>

        <div className="py-4">
          <div className="relative">
            <div className="flex gap-2 px-4 overflow-x-auto scrollbar-hide">
              {SCREENSHOTS.map((screenshot, index) => (
                <div key={screenshot} className="flex-shrink-0 relative">
                  <img
                    src={screenshot || "/placeholder.svg"}
                    alt={`Screenshot ${index + 1}`}
                    className="h-96 w-44 object-cover rounded-2xl shadow-md cursor-pointer"
                    onClick={() => setCurrentScreenshot(index)}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    width={176}
                    height={384}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-normal text-gray-900">{content.about.title}</h2>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
          <div className="text-sm text-gray-700 leading-relaxed">
            <p>{content.about.intro}</p>
            {showFullDescription && (
              <>
                {content.about.expanded.map((section, index) => {
                  if (section.type === "paragraph") {
                    return (
                      <p key={`paragraph-${index}`} className="mt-4">
                        {section.text}
                      </p>
                    )
                  }

                  if (section.type === "heading") {
                    return (
                      <p key={`heading-${index}`} className="mt-4 font-semibold text-gray-900">
                        {section.text}
                      </p>
                    )
                  }

                  return (
                    <p key={`highlight-${index}`} className="mt-2">
                      <strong>{section.label}</strong> {section.text}
                    </p>
                  )
                })}
              </>
            )}
          </div>
          <Button
            variant="ghost"
            className="mt-3 p-0 h-auto text-green-700 font-medium hover:bg-transparent"
            onClick={() => setShowFullDescription(!showFullDescription)}
          >
            {showFullDescription ? content.about.readLessLabel : content.about.readMoreLabel}
          </Button>
        </div>

        <div className="px-4 py-6 border-t">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">{content.reviews.title}</h2>
            <Button variant="ghost" size="sm" className="text-gray-700">
              {content.reviews.viewAllLabel}
            </Button>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">{content.stats.ratingValue}</div>
              <div className="flex items-center justify-center gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-1">{content.reviews.averageCountLabel}</p>
            </div>
            <div className="flex-1 space-y-1">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="w-2">{rating}</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
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

          <div className="space-y-4">
            {content.reviews.entries.map((review, index) => (
              <Card key={`${review.name}-${index}`} className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  <div className="flex gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} loading="lazy" />
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
                              star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">{review.review}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-600">
                        <button className="flex items-center gap-1 hover:text-gray-800">
                          <ThumbsUp className="h-3 w-3" />
                          {review.helpful}
                        </button>
                        <button className="flex items-center gap-1 hover:text-gray-800">
                          <ThumbsDown className="h-3 w-3" />
                        </button>
                        <button className="flex items-center gap-1 hover:text-gray-800">
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

        <div className="px-4 py-6 border-t">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">{content.appInfo.title}</h2>
          <div className="space-y-3 text-sm">
            {content.appInfo.items.map((item, index) => (
              <div key={`${item.label}-${index}`} className="flex justify-between">
                <span className="text-gray-600">{item.label}</span>
                {item.type === "badge" ? (
                  <span className="flex items-center gap-1 text-gray-900">
                    {item.value}
                    <Info className="h-3 w-3" />
                  </span>
                ) : (
                  <span className="text-gray-900">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 py-6 border-t">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-gray-900">{content.dataSafety.title}</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">{content.dataSafety.description}</p>

          <div className="bg-gray-50 rounded-lg border p-4 mb-4">
            <div className="space-y-4">
              {content.dataSafety.items.map((item, index) => {
                const Icon = safetyIcons[index] || Share2

                return (
                  <div key={`${item.title}-${index}`} className="flex items-start gap-3">
                    <Icon className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{item.title}</p>
                      {item.description && <p className="text-xs text-gray-600 mt-1">{item.description}</p>}
                    </div>
                  </div>
                )
              })}
            </div>

            <Button variant="ghost" className="mt-4 p-0 h-auto text-sm font-medium text-gray-700 hover:bg-transparent">
              {content.dataSafety.moreDetailsLabel}
            </Button>
          </div>

          <Button variant="outline" className="w-full bg-transparent text-gray-700 hover:bg-gray-100">
            {content.dataSafety.viewDetailsLabel}
          </Button>
        </div>
      </main>

      <footer className="bg-gray-50 px-4 py-8 mt-8">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3 text-gray-900">{content.footer.storeTitle}</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              {content.footer.storeLinks.map((link) => (
                <a key={link} href="#" className="hover:text-gray-900">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-gray-900">{content.footer.familyTitle}</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              {content.footer.familyLinks.map((link) => (
                <a key={link} href="#" className="hover:text-gray-900">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t text-xs text-gray-600 space-y-2">
            <div className="flex flex-wrap gap-4">
              {content.footer.legalLinks.map((link) => (
                <a key={link} href="#" className="hover:text-gray-900">
                  {link}
                </a>
              ))}
            </div>
            <p>{content.footer.companyLabel}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AndroidStorePage
