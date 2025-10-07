import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Heat - El Juego Más Caliente para Parejas",
  description: "Juega desafíos, explora la intimidad y lleva tu relación al siguiente nivel con Heat.",
  icons: {
    icon: "/images/heat-logo-black-bg.png",
  },
};

export default function EsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-ES">
      <body className={inter.className}>
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
  );
}
