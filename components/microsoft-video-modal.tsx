"use client"

import { useState } from "react"

interface MicrosoftVideoModalProps {
  onClose: () => void
}

export default function MicrosoftVideoModal({ onClose }: MicrosoftVideoModalProps) {
  const [activeTab, setActiveTab] = useState("Opportunity")

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
    >
      <div className="bg-white rounded-lg w-full max-w-[1200px] h-[850px] flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-[140px] flex items-center justify-between px-[60px] border-b border-gray-200">
          <h1 className="text-[#FF462D] text-[32px] font-light tracking-[0.32px]">Microsoft Partnership</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-[300px] h-[48px] pl-4 pr-12 border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-[#FF462D] focus:border-transparent"
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button
              onClick={onClose}
              className="w-[48px] h-[48px] flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex h-[650px]">
          {/* Left Content */}
          <div className="w-1/2 p-[60px] flex flex-col justify-center">
            <h2 className="text-[#3D3C3C] text-[48px] font-light leading-[1.25] tracking-[0.32px] mb-6">
              Accelerate Digital Transformation with Microsoft Azure
            </h2>
            <p className="text-[#3D3C3C] text-[18px] font-light leading-[1.5] tracking-[0.2px] mb-8">
              Kyndryl's infrastructure expertise combined with Microsoft's cloud platform delivers enterprise-ready
              solutions that drive innovation and business growth.
            </p>
            <p className="text-[#3D3C3C] text-[18px] font-light leading-[1.5] tracking-[0.2px]">
              From cloud migration to AI implementation, our strategic partnership enables organizations to modernize
              their technology stack and unlock new possibilities.
            </p>
          </div>

          {/* Right Video */}
          <div className="w-1/2 p-[60px] flex items-center justify-center">
            <div className="w-full h-[580px] bg-gray-100 rounded-lg overflow-hidden">
              <div
                id="dynamicmedia_microsoft"
                data-current-page="/content/kyndrylprogram/us/en/about-us/alliances/microsoft"
                data-page-locale="en_us"
                data-asset-path="kyndryl/kyndryl-microsoft-partnership-AVS"
                data-asset-name="kyndryl-microsoft-partnership.mp4"
                data-asset-type="videoavs"
                data-viewer-type="VideoViewer"
                data-viewer-path="https://s7d1.scene7.com/s7viewers/"
                data-imageserver="https://s7d1.scene7.com/is/image/"
                data-videoserver="https://s7d1.scene7.com/is/content/"
                data-contenturl="https://s7d1.scene7.com/is/content/"
                data-config="/kyndryl/Video_social|VIDEO|false"
                data-wcmdisabled
                data-dms7
                data-viewermodifiers="&posterimage=none"
                className="s7dm-dynamic-media video_social s7responsiveViewer s7videoviewer s7mouseinput s7size_small s7device_landscape w-full h-full"
                style={{ height: "auto", pointerEvents: "auto" }}
              >
                <iframe
                  src="https://s7d1.scene7.com/s7viewers/html5/VideoViewer.html?asset=kyndryl/kyndryl-microsoft-partnership-AVS&config=/kyndryl/Video_social&posterimage=https://s7d1.scene7.com/is/image/kyndryl/kyndryl-microsoft-partnership_16x9"
                  width="100%"
                  height="580px"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-[580px] rounded-lg"
                  title="Kyndryl Microsoft Partnership Video"
                />
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="h-[185px] flex flex-col items-center justify-center relative">
          {/* Horizontal Divider */}
          <div className="w-full h-px bg-gray-200 mb-8"></div>

          {/* Navigation */}
          <div className="flex items-center justify-between w-full px-[60px]">
            <button className="flex items-center gap-2 text-[#3D3C3C] hover:text-[#FF462D] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-light text-[18px] tracking-[0.2px]">Previous</span>
            </button>

            <button className="flex items-center gap-2 text-[#3D3C3C] hover:text-[#FF462D] transition-colors">
              <span className="font-light text-[18px] tracking-[0.2px]">Next</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}
