'use client';

import { getLocaleFromPathname, type Locale } from '@/src/i18n';
import { useEffect, useState } from 'react';

// Translation hook following SRP - only handles translations
export function useTranslations() {
  const [locale, setLocale] = useState<Locale>('pt');
  const [messages, setMessages] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMessages = async () => {
      if (typeof window === 'undefined') return;
      
      setIsLoading(true);
      const currentLocale = getLocaleFromPathname(window.location.pathname);
      setLocale(currentLocale);

      try {
        const messagesModule = await import(`@/messages/${currentLocale}.json`);
        setMessages(messagesModule.default);
      } catch (error) {
        console.error('Failed to load translations:', error);
        // Fallback to Portuguese
        const fallbackMessages = await import('@/messages/pt.json');
        setMessages(fallbackMessages.default);
      } finally {
        setIsLoading(false);
      }
    };

    loadMessages();
  }, []);

  // Translation function with nested key support
  const t = (key: string): any => {
    if (isLoading) return key;
    
    const keys = key.split('.');
    let value = messages;
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return value;
  };

  return { t, locale, isLoading };
}

// Locale hook following SRP - only handles locale state
export function useLocale() {
  const [locale, setLocale] = useState<Locale>('pt');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentLocale = getLocaleFromPathname(window.location.pathname);
      setLocale(currentLocale);
    }
  }, []);

  return { locale, setLocale };
}
