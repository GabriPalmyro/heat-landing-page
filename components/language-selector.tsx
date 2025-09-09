'use client';

import { useLocale } from '@/hooks/use-translations';
import { getLocalizedPath, locales, type Locale } from '@/src/i18n';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

// Language configuration - follows Open/Closed Principle
const languageConfig = {
  pt: { flag: '🇧🇷', name: 'PT', fullName: 'Português' },
  en: { flag: '🇺🇸', name: 'EN', fullName: 'English' },
  es: { flag: '🇪🇸', name: 'ES', fullName: 'Español' }
} as const;

interface LanguageSelectorProps {
  className?: string;
}

// Main Language Selector component following SRP
export default function LanguageSelector({ 
  className = '' 
}: LanguageSelectorProps) {
  const { locale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  // Effect to track current path - separated concern
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  // Handlers following SRP
  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);
  
  const handleLanguageChange = (newLocale: Locale) => {
    if (typeof window !== 'undefined') {
      const newPath = getLocalizedPathForCurrentPage(currentPath, newLocale);
      window.location.href = newPath;
    }
    closeDropdown();
  };

  const currentLanguage = languageConfig[locale];

  return (
    <div className={`relative ${className}`}>
      <LanguageButton
        language={currentLanguage}
        isOpen={isOpen}
        onClick={toggleDropdown}
      />
      
      <LanguageDropdown
        isOpen={isOpen}
        currentLocale={locale}
        onLanguageChange={handleLanguageChange}
        onClose={closeDropdown}
      />
    </div>
  );
}

// Language button component - follows SRP
function LanguageButton({
  language,
  isOpen,
  onClick
}: {
  language: typeof languageConfig[Locale];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-white transition-all duration-200 border border-white/20 hover:border-white/30"
      aria-label="Select language"
    >
      <span className="text-sm">{language.flag}</span>
      <span className="text-sm font-medium hidden sm:inline">
        {language.name}
      </span>
      <ChevronDown 
        className={`h-3 w-3 transition-transform duration-200 ${
          isOpen ? 'rotate-180' : ''
        }`} 
      />
    </button>
  );
}

// Language dropdown component - follows SRP
function LanguageDropdown({
  isOpen,
  currentLocale,
  onLanguageChange,
  onClose
}: {
  isOpen: boolean;
  currentLocale: Locale;
  onLanguageChange: (locale: Locale) => void;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-10"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Dropdown Menu */}
      <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-20 min-w-[140px]">
        {locales.map((locale) => {
          const language = languageConfig[locale];
          const isSelected = currentLocale === locale;
          
          return (
            <LanguageOption
              key={locale}
              locale={locale}
              language={language}
              isSelected={isSelected}
              onClick={() => onLanguageChange(locale)}
            />
          );
        })}
      </div>
    </>
  );
}

// Language option component - follows SRP
function LanguageOption({
  locale,
  language,
  isSelected,
  onClick
}: {
  locale: Locale;
  language: typeof languageConfig[Locale];
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
        isSelected
          ? 'bg-[#FF1D3E] text-white'
          : 'text-gray-700 hover:bg-gray-50'
      }`}
    >
      <span>{language.flag}</span>
      <span className="font-medium">{language.fullName}</span>
    </button>
  );
}

// Utility function to get localized path for current page
function getLocalizedPathForCurrentPage(currentPath: string, targetLocale: Locale): string {
  // Remove locale prefix from current path
  let basePath = currentPath;
  
  // Handle exact matches and paths with trailing content
  if (currentPath === '/en' || currentPath.startsWith('/en/')) {
    basePath = currentPath.replace(/^\/en/, '') || '/';
  } else if (currentPath === '/es' || currentPath.startsWith('/es/')) {
    basePath = currentPath.replace(/^\/es/, '') || '/';
  }

  // Handle specific page mappings
  const pathMappings: Record<string, keyof typeof getLocalizedPath extends (...args: any[]) => any ? Parameters<typeof getLocalizedPath>[0] : never> = {
    '/': '/',
    '/suporte': '/support',
    '/support': '/support',
    '/termos-de-uso': '/terms-of-use',
    '/terms-of-use': '/terms-of-use',
    '/politicas-de-privacidade': '/privacy-policy',
    '/privacy-policy': '/privacy-policy',
    '/exclusao-de-conta': '/account-deletion',
    '/account-deletion': '/account-deletion'
  };

  const mappedPath = pathMappings[basePath];
  if (mappedPath) {
    return getLocalizedPath(mappedPath, targetLocale);
  }

  // Fallback for unmapped paths
  if (targetLocale === 'pt') return basePath;
  return `/${targetLocale}${basePath === '/' ? '' : basePath}`;
}
