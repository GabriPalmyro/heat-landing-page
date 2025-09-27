import { Suspense } from "react"

import AndroidStorePage from "@/components/android-store-page"

export default function AndroidPtPage() {
  return (
    <Suspense fallback={null}>
      <AndroidStorePage locale="pt" />
    </Suspense>
  )
}
