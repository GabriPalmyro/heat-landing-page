// import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { GoogleAnalytics } from '@next/third-parties/google'
import localFont from "next/font/local"
import type React from "react"

const productSans = localFont({
  src: [
    { path: "../public/fonts/ProductSans-Thin.ttf", weight: "100", style: "normal" },
    { path: "../public/fonts/ProductSans-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/ProductSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/ProductSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/ProductSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/ProductSans-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-product-sans",
  display: "swap",
})


export const metadata = {
  title: "Heat - O Jogo Mais Quente para Casais",
  description: "Jogue desafios, explore a intimidade e eleve o nível do seu relacionamento com o Heat.",
  icons: {
    icon: "/images/heat-logo-black-bg.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={productSans.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem 
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-JDRW1TBKPD" />
    </html>
  )
}
