'use client';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { useTranslations } from '@/hooks/use-translations';
import { type Locale } from '@/src/i18n';
import { Suspense } from 'react';

interface StaticPageTemplateProps {
  locale?: Locale;
  pageKey: string;
  children: React.ReactNode;
}

// Loading component for Suspense boundary
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-[#1D0611] flex items-center justify-center">
      <div className="animate-pulse text-white">Loading...</div>
    </div>
  );
}

// Reusable template for static pages - follows DRY principle
export default function StaticPageTemplate({ 
  locale = 'pt', 
  pageKey,
  children 
}: StaticPageTemplateProps) {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <StaticPageContent locale={locale} pageKey={pageKey}>
        {children}
      </StaticPageContent>
    </Suspense>
  );
}

// Separated content component for better error boundaries
function StaticPageContent({ 
  locale, 
  pageKey, 
  children 
}: { 
  locale: Locale; 
  pageKey: string; 
  children: React.ReactNode; 
}) {
  const { t } = useTranslations();

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      <div className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <PageHeader pageKey={pageKey} t={t} />
          <PageContent>{children}</PageContent>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

// Page header component - follows SRP
function PageHeader({ pageKey, t }: { pageKey: string; t: (key: string) => string }) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
        {t(`pages.${pageKey}.title`)}
      </h1>
      <p className="text-lg text-gray-300">
        {t(`pages.${pageKey}.description`)}
      </p>
    </div>
  );
}

// Page content wrapper - follows SRP
function PageContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-gray-300 space-y-8">
      {children}
    </div>
  );
}
