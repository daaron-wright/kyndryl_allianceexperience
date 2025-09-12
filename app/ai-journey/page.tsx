"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import VideoLibraryModal from "@/components/video-library-modal"
import DemoLoginModal from "@/components/demo-login-modal"

export default function AIJourneyPage() {
  const [isDemoLoginOpen, setIsDemoLoginOpen] = useState(false)

  const scrollToVideoLibrary = () => {
    const videoSection = document.getElementById("video-library-section")
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 sm:px-8 lg:px-16 py-6 lg:py-12">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#FF462D] m-0 leading-none font-sans">
            Kyndryl's AI Journey
          </h1>

          <nav
            className="flex items-center gap-8 text-neutral-700"
            style={{
              gap: "clamp(16px, 2vw, 32px)",
              fontSize: "clamp(14px, 1.5vw, 16px)",
            }}
          >
            <a className="hover:text-black" href="/alliances">
              Alliances
            </a>
            <a className="hover:text-black" href="/industries">
              Industries
            </a>
            <a className="hover:text-black text-neutral-400 cursor-default font-light" href="#">
              Capabilities
            </a>
            <a className="hover:text-black text-[#FF462D] border-b-2 border-[#FF462D]" href="/ai-journey">
              Kyndryl's AI Journey
            </a>
            <div className="ml-4 flex items-center gap-2 rounded-md border border-neutral-300 px-3 py-2 text-sm">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                className="outline-none placeholder:text-neutral-400"
                placeholder="Search"
                style={{ width: "clamp(120px, 15vw, 180px)" }}
              />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#FF462D] bg-gradient-to-r from-[#FF462D] to-[#E63E32] text-white px-4 sm:px-8 lg:px-16 py-12 lg:py-20">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6 text-white">Our AI Journey</h2>
          <p className="text-lg sm:text-xl lg:text-2xl font-light opacity-90 mb-8 text-white">
            Learn how findings from research over the past year can make AI helpful for everyone.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setIsDemoLoginOpen(true)}
              className="bg-white text-[#FF462D] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Explore Demos
            </button>
            <button
              onClick={scrollToVideoLibrary}
              className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-[#FF462D] transition-colors"
            >
              Video Library
            </button>
          </div>
        </div>
      </section>

      {/* Video Library Section */}
      <section id="video-library-section" className="px-4 sm:px-8 lg:px-16 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <VideoLibraryModal onClose={() => {}} isEmbedded={true} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F2F1EE] px-4 sm:px-8 lg:px-16 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#3D3C3C] mb-6">Ready to explore?</h2>
          <p className="text-lg text-[#9E9287] mb-8">
            Discover how our AI research can help solve your most challenging problems
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsDemoLoginOpen(true)}
              className="bg-[#FF462D] text-white px-8 py-3 rounded-md font-medium hover:bg-[#E63E32] transition-colors"
            >
              Explore Demos
            </button>
            <button
              onClick={scrollToVideoLibrary}
              className="border border-[#FF462D] text-[#FF462D] px-8 py-3 rounded-md font-medium hover:bg-[#FF462D] hover:text-white transition-colors"
            >
              Video Library
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white px-4 sm:px-8 lg:px-16 py-6 lg:py-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MEGNnZWLbIFaozl7mPigQVLRmY1A2o.png"
              alt="Kyndryl Alliance Experience"
              className="object-contain h-8 lg:h-10 w-auto"
            />
          </div>

          <div className="flex items-center gap-2">
            <a href="/" className="text-[#9E9287] no-underline text-sm lg:text-base font-light">
              Home
            </a>
            <ChevronRight className="text-[#9E9287] w-4 h-4" />
            <span className="text-[#29707A] text-sm lg:text-base text-[rgba(41,112,122,1)] font-medium">
              Kyndryl's AI Journey
            </span>
          </div>
        </div>
      </footer>

      {/* Demo Login Modal */}
      {isDemoLoginOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-white/20 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <DemoLoginModal
              onClose={() => setIsDemoLoginOpen(false)}
              onLogin={() => {
                setIsDemoLoginOpen(false)
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
