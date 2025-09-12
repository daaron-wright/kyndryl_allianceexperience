"use client"

import { useState } from "react"

interface AWSVideoModalProps {
  onClose: () => void
}

export default function AWSVideoModal({ onClose }: AWSVideoModalProps) {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-[1200px] h-[950px] flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-[140px] flex items-center justify-between px-[60px] border-b border-gray-200">
          <h1 className="text-[#FF462D] text-[32px] font-light tracking-[0.32px]">AWS Partnership</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
        <main className="flex-1 flex h-[750px]">
          {/* Left Content */}
          <div className="w-1/2 p-[60px] flex flex-col justify-center">
            <h2 className="text-[#3D3C3C] text-[48px] font-light leading-[1.25] tracking-[0.32px] mb-6">
              Modernize Infrastructure with AWS
            </h2>
            <p className="text-[#3D3C3C] text-[18px] font-light leading-[1.5] tracking-[0.2px] mb-8">
              Kyndryl's infrastructure expertise combined with AWS's cloud platform delivers scalable, secure solutions
              that accelerate your digital transformation journey.
            </p>
            <p className="text-[#3D3C3C] text-[18px] font-light leading-[1.5] tracking-[0.2px]">
              From cloud migration to modernization, our strategic partnership enables organizations to leverage AWS's
              comprehensive services and unlock new business possibilities.
            </p>
          </div>

          {/* Right Video */}
          <div className="w-1/2 p-[60px] flex items-center justify-center">
            <div className="w-full h-[680px] bg-gray-100 rounded-lg overflow-hidden">
              <div
                id="dynamicmedia_3321454"
                data-current-page="/content/kyndrylprogram/us/en/about-us/alliances/aws"
                data-page-locale="en_us"
                data-asset-path="kyndryl/aws-modernize-AVS"
                data-asset-name="aws-modernize.mp4"
                data-asset-type="videoavs"
                data-viewer-type="VideoViewer"
                data-viewer-path="https://s7d1.scene7.com/s7viewers/"
                data-imageserver="https://s7d1.scene7.com/is/image/"
                data-videoserver="https://s7d1.scene7.com/is/content/"
                data-contenturl="https://s7d1.scene7.com/is/content/"
                data-config="/kyndryl/Video_social|VIDEO|false"
                data-wcmdisabled
                data-dms7
                data-viewermodifiers="&posterimage=https://s7d1.scene7.com/is/image/kyndryl/aws-modernize_thumbnail_16x9"
                className="s7dm-dynamic-media video_social s7responsiveViewer s7videoviewer s7mouseinput s7size_medium s7device_landscape w-full h-full"
                style={{ height: "680px", pointerEvents: "auto" }}
              >
                <iframe
                  src="https://s7d1.scene7.com/s7viewers/html5/VideoViewer.html?asset=kyndryl/aws-modernize-AVS&config=/kyndryl/Video_social&posterimage=https://s7d1.scene7.com/is/image/kyndryl/aws-modernize_thumbnail_16x9"
                  width="100%"
                  height="680px"
                  style={{ border: "none" }}
                  allowFullScreen
                  className="w-full h-[680px] rounded-lg"
                  title="AWS Modernize Video"
                />
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="h-[185px] flex flex-col items-center justify-center relative">
          <div className="w-full h-px bg-gray-200 mb-8"></div>
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
