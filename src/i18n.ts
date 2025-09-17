// Locale configuration
export const locales = ['pt', 'en', 'es'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'pt';

// Route mapping for different locales
export const routeMapping = {
  '/': { pt: '/', en: '/en', es: '/es' },
  '/support': { pt: '/suporte', en: '/en/support', es: '/es/support' },
  '/terms-of-use': { pt: '/termos-de-uso', en: '/en/terms-of-use', es: '/es/terms-of-use' },
  '/privacy-policy': { pt: '/politicas-de-privacidade', en: '/en/privacy-policy', es: '/es/privacy-policy' },
  '/account-deletion': { pt: '/exclusao-de-conta', en: '/en/account-deletion', es: '/es/account-deletion' },
  '/android': { pt: '/android', en: '/en/android', es: '/es/android' },
  '/success-payment': { pt: '/success-payment', en: '/success-payment', es: '/success-payment' }
} as const;

// Utility function to get locale from pathname
export function getLocaleFromPathname(pathname: string): Locale {
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/es')) return 'es';
  return 'pt';
}

// Utility function to get localized path
export function getLocalizedPath(path: keyof typeof routeMapping, locale: Locale): string {
  return routeMapping[path]?.[locale] || routeMapping[path]?.pt || '/';
}
