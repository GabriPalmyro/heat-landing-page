import { Suspense } from "react"

import AndroidStorePage from "@/components/android-store-page"

export default function AndroidEnPage() {
  return (
    <Suspense fallback={null}>
      <AndroidStorePage locale="en" />
    </Suspense>
  )
}
