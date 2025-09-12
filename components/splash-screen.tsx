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
      <div className="relative w-full h-full flex items-center justify-center z-10">
        <iframe
          ref={videoRef}
          src="https://drive.google.com/file/d/1DiyhiCCOWyn8IebKkhFUscFOWhlYO102/preview"
          width="1920"
          height="1080"
          className="object-contain relative z-20"
          allow="autoplay"
          onLoad={() => setVideoLoaded(true)}
          title="Kyndryl splash video"
        />

        {!videoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#FF462D] z-10">
            <div className="text-white text-xl">Loading...</div>
          </div>
        )}

        <button
          onClick={handleVideoComplete}
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75 px-4 py-2 rounded-lg transition-all duration-200 text-sm z-30"
          aria-label="Skip video"
        >
          Skip
        </button>
      </div>
    </div>
  )
}
