"use client"

import { useState } from "react"
import MicrosoftVideoModal from "./microsoft-video-modal"

interface FeaturedTileProps {
  onClick?: () => void
}

const LargeArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="40" viewBox="0 0 21 40" fill="none">
    <path d="M1 39L19.5 20L1 1" stroke="#FF462D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function FeaturedTile({ onClick }: FeaturedTileProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const handleClick = () => {
    setIsVideoModalOpen(true)
  }

  return (
    <>
      <div
        className="relative w-full h-full bg-[#F2F1EE] shadow-lg rounded-[4px] overflow-hidden font-sans cursor-pointer hover:shadow-xl transition-shadow"
        onClick={handleClick}
      >
        {/* Top Image Section */}
        <div className="absolute top-0 left-0 w-full h-1/2">
          <img
            src="/modern-office-collaboration.png"
            alt="Modern office collaboration with team meeting on couch"
            className="w-full h-full object-cover rounded-t-[4px]"
          />
        </div>

        {/* Bottom Text Content Section */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 flex flex-col">
          {/* Headline */}
          <div style={{ padding: "clamp(20px, 3vw, 40px) clamp(20px, 3vw, 40px) clamp(10px, 1.5vw, 20px)" }}>
            <h2
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(24px, 4vw, 48px)",
                lineHeight: "1.25",
                letterSpacing: "0.32px",
                color: "#FF462D",
                margin: 0,
              }}
            >
              Accelerate Digital Transformation with Microsoft Azure
            </h2>
          </div>

          {/* Body Copy */}
          <div
            style={{
              paddingLeft: "clamp(20px, 3vw, 40px)",
              paddingRight: "clamp(60px, 15vw, 200px)",
              paddingTop: "clamp(10px, 1.5vw, 20px)",
              paddingBottom: "clamp(20px, 3vw, 40px)",
            }}
          >
            <p
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(16px, 2.5vw, 24px)",
                lineHeight: "1.25",
                letterSpacing: "0.32px",
                color: "#3D3C3C",
                margin: 0,
              }}
            >
              Kyndryl's infrastructure expertise combines with Microsoft's cloud platform to deliver enterprise-ready
              solutions that drive innovation
            </p>
          </div>
        </div>

        {/* Arrow Icon positioned at the bottom right */}
        <div
          className="absolute bottom-0 right-0 flex items-center justify-center"
          style={{
            width: "clamp(60px, 8vw, 101px)",
            height: "clamp(80px, 10vh, 120px)",
          }}
        >
          <LargeArrowRightIcon />
        </div>
      </div>

      {isVideoModalOpen && <MicrosoftVideoModal onClose={() => setIsVideoModalOpen(false)} />}
    </>
  )
}
