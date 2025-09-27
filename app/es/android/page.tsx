import { Suspense } from "react"

import AndroidStorePage from "@/components/android-store-page"

export default function AndroidEsPage() {
  return (
    <Suspense fallback={null}>
      <AndroidStorePage locale="es" />
    </Suspense>
  )
}
