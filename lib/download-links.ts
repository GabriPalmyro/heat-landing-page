import { Locale } from "@/src/i18n"

export const APP_STORE_URL = "https://apps.apple.com/app/id6742337191"
export const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.heatcouple.app"
export const ANDROID_APK_URL = "https://pub-3aa1ba49fdb04de1b8653d47fc4df68c.r2.dev/app-release.apk"

const ANDROID_DETAIL_ROUTES: Record<Locale, string> = {
  pt: "/android",
  en: "/en/android",
  es: "/es/android",
}

export function getAndroidDetailRoute(locale: Locale): string {
  return ANDROID_DETAIL_ROUTES[locale] ?? ANDROID_DETAIL_ROUTES.pt
}
