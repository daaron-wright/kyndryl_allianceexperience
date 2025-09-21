"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface KyndrylBrandedScreenProps {
  onComplete: () => void
}

export default function KyndrylBrandedScreen({ onComplete }: KyndrylBrandedScreenProps) {
  const [isVisible, setIsVisible] = useState(true)

  const handleDismiss = () => {
    setIsVisible(false)
    setTimeout(onComplete, 300) // Wait for fade animation to complete
  }

  // Handle keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleDismiss()
    }
  }

  useEffect(() => {
    // Auto-dismiss after 3 seconds as fallback
    const timer = setTimeout(() => {
      handleDismiss()
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer transition-opacity duration-300 ease-out"
      style={{ backgroundColor: "#FF462D" }}
      onClick={handleDismiss}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label="Kyndryl branded screen - click or press enter to continue"
    >
      <div className="flex items-center justify-center w-full h-full p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="relative w-full h-full max-w-6xl max-h-[80vh] flex items-center justify-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/25KYN_Alliance_Experience%281%29-Cy0VJ32bj4zNbYPic6mo5FWTtA76rh.png"
            alt="Kyndryl"
            className="max-w-full max-h-full object-contain"
            style={{
              width: "clamp(200px, 80vw, 1200px)",
              height: "clamp(150px, 60vh, 800px)",
              minWidth: "200px",
              minHeight: "150px",
            }}
          />
        </div>
      </div>
    </div>
  )
}
