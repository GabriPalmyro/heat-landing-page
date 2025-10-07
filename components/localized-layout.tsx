import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface LocalizedLayoutProps {
  children: React.ReactNode;
  locale: 'en' | 'es';
  metadata: {
    title: string;
    description: string;
  };
}

// Shared layout component following DRY principle
export default function LocalizedLayout({ 
  children, 
  locale, 
  metadata 
}: LocalizedLayoutProps) {
  const langCode = locale === 'en' ? 'en-US' : 'es-ES';
  
  return (
    <html lang={langCode}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/images/heat-logo-black-bg.png" />
      </head>
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
