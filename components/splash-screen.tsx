"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import KyndrylBrandedScreen from "./kyndryl-branded-screen"

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [currentScreen, setCurrentScreen] = useState<"video" | "branded" | "complete">("video")
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLIFrameElement>(null)

  const handleVideoComplete = () => {
    setCurrentScreen("branded")
  }

  const handleBrandedComplete = () => {
    setCurrentScreen("complete")
    onComplete()
  }

  // Handle keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      if (currentScreen === "video") {
        handleVideoComplete()
      } else if (currentScreen === "branded") {
        handleBrandedComplete()
      }
    }
  }

  useEffect(() => {
    // Auto-dismiss after 10 seconds as fallback
    const timer = setTimeout(() => {
      handleVideoComplete()
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  if (currentScreen === "branded") {
    return <KyndrylBrandedScreen onComplete={handleBrandedComplete} />
  }

  if (currentScreen === "complete") return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer transition-opacity duration-300 ease-out"
      style={{ backgroundColor: "#FF462D" }}
      onClick={handleVideoComplete}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label="Kyndryl splash video - click or press enter to continue"
    >
      <div className="relative w-full h-full flex items-center justify-center z-10 p-2 sm:p-4 md:p-6 lg:p-8 xl:p-12">
        <div className="relative w-full h-full max-w-[95vw] max-h-[85vh] sm:max-w-[90vw] sm:max-h-[80vh] md:max-w-[85vw] md:max-h-[75vh] lg:max-w-7xl lg:max-h-[70vh] xl:max-h-[75vh] 2xl:max-h-[80vh]">
          <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-2xl">
            <iframe
              ref={videoRef}
              src="https://drive.google.com/file/d/1DiyhiCCOWyn8IebKkhFUscFOWhlYO102/preview"
              className="absolute top-0 left-0 w-full h-full border-0"
              style={{
                minWidth: "280px",
                minHeight: "157px",
              }}
              allow="autoplay"
              onLoad={() => setVideoLoaded(true)}
              title="Kyndryl splash video"
            />
          </div>
        </div>

        {!videoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#FF462D] z-10">
            <div className="text-white font-sans font-medium" style={{ fontSize: "clamp(1rem, 3vw, 2rem)" }}>
              Loading...
            </div>
          </div>
        )}

        <button
          onClick={handleVideoComplete}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-all duration-200 z-30 font-medium shadow-sm"
          style={{
            fontSize: "clamp(0.75rem, 2vw, 1rem)",
            padding: "clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1.25rem)",
          }}
          aria-label="Skip video"
        >
          Skip
        </button>
      </div>
    </div>
  )
}
