"use client"

import AllianceHomeFixed from "@/components/alliance-home-fixed"

export default function AllianceHomePage() {
  return (
    <div className="min-h-screen w-full">
      <AllianceHomeFixed
        preset="original"
        startWireframe={false}
        industryImage="/modern-concrete-architecture-bridge.png"
        marketsImage="/earth-from-space-with-city-lights.png"
        fixedFrame={true}
      />
    </div>
  )
}
