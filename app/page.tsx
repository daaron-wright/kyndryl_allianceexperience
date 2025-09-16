"use client"

import { useState } from "react"
import AllianceHomeFixed from "@/components/alliance-home-fixed"
import SplashScreen from "@/components/splash-screen"

export default function AllianceExperience() {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {!showSplash && (
        <div className="min-h-screen w-full">
          <AllianceHomeFixed
            preset="original"
            startWireframe={false}
            industryImage="/modern-concrete-architecture-bridge.png"
            marketsImage="/earth-from-space-with-city-lights.png"
            fixedFrame={true}
          />
        </div>
      )}
    </>
  )
}
