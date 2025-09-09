'use client';

import { useTranslations } from '@/hooks/use-translations';
import { getLocalizedPath, type Locale } from '@/src/i18n';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import LanguageSelector from './language-selector';
import Logo from './logo';

// Navigation configuration - follows Open/Closed Principle
const navigationConfig = [
  { key: 'nav.about', href: '#about', isExternal: false },
  { key: 'nav.features', href: '#features', isExternal: false },
  { key: 'nav.testimonials', href: '#testimonials', isExternal: false },
] as const;

// Header component following SRP and Clean Code principles
export default function Header() {
  const { t, locale } = useTranslations();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect for handling scroll behavior - separated concern
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handlers following SRP
  const handleScrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#1D0611]/90 backdrop-blur-sm py-2 shadow-lg' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo Section */}
        <LogoSection onLogoClick={handleScrollToTop} />
        
        {/* Desktop Navigation */}
        <DesktopNavigation 
          navigationItems={navigationConfig}
          onNavigate={handleScrollToSection}
          t={t}
          locale={locale}
        />
        
        {/* Mobile Menu Button */}
        <MobileMenuButton 
          isOpen={isMenuOpen}
          onToggle={toggleMenu}
          t={t}
        />
        
        {/* Language Selector */}
        <div className="hidden md:block">
          <LanguageSelector />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <MobileNavigation
        isOpen={isMenuOpen}
        navigationItems={navigationConfig}
        onNavigate={handleScrollToSection}
        onClose={closeMenu}
        t={t}
        locale={locale}
      />
    </header>
  );
}

// Logo section component - follows SRP
function LogoSection({ onLogoClick }: { onLogoClick: () => void }) {
  return (
    <div className="flex items-center group cursor-pointer" onClick={onLogoClick}>
      <Logo
        size="small"
        withGlow={true}
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <span className="ml-2 text-xl font-bold text-white">
        Heat
      </span>
    </div>
  );
}

// Desktop navigation component - follows SRP
function DesktopNavigation({ 
  navigationItems, 
  onNavigate, 
  t,
  locale 
}: {
  navigationItems: typeof navigationConfig;
  onNavigate: (href: string) => void;
  t: (key: string) => string;
  locale: Locale;
}) {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navigationItems.map((item) => (
        <button
          key={item.key}
          onClick={() => onNavigate(item.href)}
          className="text-white hover:text-orange-400 transition-colors duration-200 font-medium"
        >
          {t(item.key)}
        </button>
      ))}
      
      {/* Support Link */}
      <a
        href={getLocalizedPath('/support', locale)}
        className="text-white hover:text-orange-400 transition-colors duration-200 font-medium"
      >
        {t('nav.support')}
      </a>
    </nav>
  );
}

// Mobile menu button component - follows SRP
function MobileMenuButton({ 
  isOpen, 
  onToggle, 
  t 
}: { 
  isOpen: boolean; 
  onToggle: () => void; 
  t: (key: string) => string;
}) {
  return (
    <button
      onClick={onToggle}
      className="md:hidden p-2 text-white hover:text-orange-400 transition-colors"
      aria-label={isOpen ? t('nav.closeMenu') : t('nav.openMenu')}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
}

// Mobile navigation component - follows SRP
function MobileNavigation({
  isOpen,
  navigationItems,
  onNavigate,
  onClose,
  t,
  locale
}: {
  isOpen: boolean;
  navigationItems: typeof navigationConfig;
  onNavigate: (href: string) => void;
  onClose: () => void;
  t: (key: string) => string;
  locale: Locale;
}) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
      />
      
      {/* Mobile Menu */}
      <div className="fixed top-full left-0 right-0 bg-[#1D0611]/95 backdrop-blur-sm border-t border-orange-500/20 z-50 md:hidden">
        <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
          {navigationItems.map((item) => (
            <button
              key={item.key}
              onClick={() => onNavigate(item.href)}
              className="text-white hover:text-orange-400 transition-colors duration-200 font-medium text-left py-2"
            >
              {t(item.key)}
            </button>
          ))}
          
          {/* Support Link */}
          <a
            href={getLocalizedPath('/support', locale)}
            className="text-white hover:text-orange-400 transition-colors duration-200 font-medium py-2"
            onClick={onClose}
          >
            {t('nav.support')}
          </a>
          
          {/* Language Selector for Mobile */}
          <div className="pt-4 border-t border-white/10">
            <LanguageSelector />
          </div>
        </nav>
      </div>
    </>
  );
}
