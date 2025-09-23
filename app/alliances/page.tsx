"use client"

import type React from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import GoogleCloudFocusModal from "../../components/google-cloud-focus-modal"
import AWSFocusModal from "../../components/aws-focus-modal"
import MicrosoftFocusModal from "../../components/microsoft-focus-modal"
import DemoFocusModal from "../../components/demo-focus-modal"
import AWSScreenSaver from "../../components/aws-screen-saver"
import GoogleCloudScreenSaver from "../../components/google-cloud-screen-saver"
import MicrosoftScreenSaver from "../../components/microsoft-screen-saver"

export default function AlliancesPage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isGoogleCloudModalOpen, setIsGoogleCloudModalOpen] = useState(false)
  const [isAWSModalOpen, setIsAWSModalOpen] = useState(false)
  const [isMicrosoftModalOpen, setIsMicrosoftModalOpen] = useState(false)
  const [isDemoFocusModalOpen, setIsDemoFocusModalOpen] = useState(false)
  const [isAWSScreenSaverOpen, setIsAWSScreenSaverOpen] = useState(false)
  const [isGoogleCloudScreenSaverOpen, setIsGoogleCloudScreenSaverOpen] = useState(false)
  const [isMicrosoftScreenSaverOpen, setIsMicrosoftScreenSaverOpen] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (gridRef.current && !isDragging) {
      const { scrollLeft, scrollWidth, clientWidth } = gridRef.current
      const maxScroll = scrollWidth - clientWidth
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0
      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    handleDrag(e)
  }

  const handleDrag = (e: React.MouseEvent | MouseEvent) => {
    if (progressBarRef.current && gridRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = Math.min(100, Math.max(0, (x / rect.width) * 100))

      const { scrollWidth, clientWidth } = gridRef.current
      const maxScroll = scrollWidth - clientWidth
      const newScrollLeft = (percentage / 100) * maxScroll

      gridRef.current.scrollLeft = newScrollLeft
      setScrollProgress(percentage)
    }
  }

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleDrag(e)
      }
    }

    const handleGlobalMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove)
      document.addEventListener("mouseup", handleGlobalMouseUp)
      document.body.style.cursor = "grabbing"
      document.body.style.userSelect = "none"
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove)
      document.removeEventListener("mouseup", handleGlobalMouseUp)
      document.body.style.cursor = ""
      document.body.style.userSelect = ""
    }
  }, [isDragging])

  const scrollLeft = () => {
    if (gridRef.current) {
      const scrollDistance = window.innerWidth < 768 ? window.innerWidth * 0.8 : window.innerWidth * 0.4
      gridRef.current.scrollBy({ left: -scrollDistance, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (gridRef.current) {
      const scrollDistance = window.innerWidth < 768 ? window.innerWidth * 0.8 : window.innerWidth * 0.4
      gridRef.current.scrollBy({ left: scrollDistance, behavior: "smooth" })
    }
  }

  useEffect(() => {
    const gridElement = gridRef.current
    if (gridElement) {
      gridElement.addEventListener("scroll", handleScroll)
      return () => gridElement.removeEventListener("scroll", handleScroll)
    }
  }, [isDragging])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 sm:px-8 lg:px-16 py-6 lg:py-12">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          {/* Left side - Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#FF462D] m-0 leading-none font-sans">
            Alliances
          </h1>

          {/* Center - Navigation */}
          <nav
            className="flex items-center gap-8 text-neutral-700"
            style={{
              gap: "clamp(16px, 2vw, 32px)",
              fontSize: "clamp(14px, 1.5vw, 16px)",
            }}
          >
            <a className="hover:text-black text-[#FF462D] border-b-2 border-[#FF462D]" href="/alliances">
              Alliances
            </a>
            <a className="hover:text-black" href="/industries">
              Industries
            </a>
            <a className="hover:text-black text-neutral-400 cursor-default font-light" href="#">
              Capabilities
            </a>
            <a className="hover:text-black" href="/ai-journey">
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

          {/* Right side - Search */}
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-[#F2F1EE] min-h-[calc(100vh-200px)] px-4 sm:px-8 lg:px-16 py-8 lg:py-12">
        {/* Partner Logos Grid */}
        <div
          ref={gridRef}
          className="grid gap-4 lg:gap-6 mb-8 lg:mb-12 overflow-x-auto scrollbar-thin scrollbar-track-[#F2F1EE] scrollbar-thumb-[#565049]"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gridAutoRows: "minmax(140px, auto)",
            scrollBehavior: "smooth",
          }}
        >
          {/* Row 1 */}
          {/* AWS first in alphabetical order */}
          <div
            onClick={() => setIsAWSScreenSaverOpen(true)}
            className="bg-white border-2 border-[#F2F1EE] rounded-lg flex flex-col justify-center items-center cursor-pointer transition-all duration-300 grayscale hover:grayscale-0 hover:scale-105 p-6"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29%281%29%281%29%281%29%281%29%281%29-U2CQe4VpCFfVHiMm0NXu7QEBKPhspl.png"
              alt="Amazon Web Services"
              className="object-contain w-full max-w-[200px] h-12 lg:h-16"
            />
          </div>

          <div
            onClick={() => setIsGoogleCloudScreenSaverOpen(true)}
            className="bg-white border-2 border-[#F2F1EE] rounded-lg flex flex-col justify-center items-center cursor-pointer transition-all duration-300 grayscale hover:grayscale-0 hover:scale-105 p-6"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29%281%29%281%29%281%29%281%29%281%29-aRHp1XI4ENaZp2ztUykqqfbx1GxJrg.png"
              alt="Google Cloud"
              className="object-contain w-full max-w-[200px] h-12 lg:h-16"
            />
          </div>

          <div
            onClick={() => setIsMicrosoftScreenSaverOpen(true)}
            className="bg-white border-2 border-[#F2F1EE] rounded-lg flex flex-col justify-center items-center cursor-pointer transition-all duration-300 grayscale hover:grayscale-0 hover:scale-105 p-6"
          >
            <img
              src="/logos/microsoft-logo.png"
              alt="Microsoft"
              className="object-contain w-full max-w-[200px] h-12 lg:h-16"
            />
          </div>

          <div
            onClick={() => setIsDemoFocusModalOpen(true)}
            className="bg-white border-2 border-[#F2F1EE] rounded-lg flex flex-col justify-center items-center p-0 cursor-pointer transition-all duration-300 overflow-hidden hover:scale-105"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29%281%29%281%29%281%29%281%29%281%29-jOCOylEpHWqELgtnE6QO6mDd72MqUt.png"
              alt="Completion Status"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white border-2 border-[#F2F1EE] rounded-lg flex flex-col justify-center items-center opacity-40 cursor-not-allowed p-6">
            <img
              src="/logos/cisco-logo.png"
              alt="Cisco"
              className="object-contain grayscale w-full max-w-[200px] h-10 lg:h-12"
            />
          </div>

          <div className="bg-white border-2 border-[#F2F1EE] rounded-lg flex flex-col justify-center items-center opacity-40 cursor-not-allowed p-6">
            <img
              src="/logos/dell-technologies-logo.png"
              alt="Dell Technologies"
              className="object-contain grayscale w-full max-w-[200px] h-10 lg:h-12"
            />
          </div>

          <div className="bg-white border-2 border-[#F2F1EE] rounded-lg flex flex-col justify-center items-center opacity-40 cursor-not-allowed p-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29%281%29%281%29%281%29%281%29%281%29-LYzu7OvPm7oJB5xfaZDgHu9CqGGF0W.png"
              alt="Dynatrace"
              className="object-contain grayscale w-full max-w-[200px] h-10 lg:h-12"
            />
          </div>

          <div className="bg-white border-2 border-[#F2F1EE] rounded-lg flex flex-col justify-center items-center opacity-40 cursor-not-allowed p-6">
            <img
              src="/logos/hpe-logo.png"
              alt="Hewlett Packard Enterprise"
              className="object-contain grayscale max-w-[200px] h-10 w-[150%] lg:h-20"
            />
          </div>

          <div className="bg-white border-2 border-[#F2F1EE] rounded-lg flex flex-col justify-center items-center opacity-40 cursor-not-allowed p-6">
            <img
              src="/logos/oracle-logo.png"
              alt="Oracle"
              className="object-contain grayscale w-full max-w-[200px] h-10 lg:h-12"
            />
          </div>

          <div className="bg-white border-2 border-[#F2F1EE] rounded-lg flex flex-col justify-center items-center opacity-40 cursor-not-allowed p-6">
            <img
              src="/logos/palo-alto-networks-logo.png"
              alt="Palo Alto Networks"
              className="object-contain grayscale w-full max-w-[200px] h-10 lg:h-12"
            />
          </div>

          <div className="bg-white border-2 border-[#F2F1EE] rounded-lg flex flex-col justify-center items-center opacity-40 cursor-not-allowed p-6">
            <img
              src="/logos/red-hat-logo.png"
              alt="Red Hat"
              className="object-contain grayscale w-full max-w-[200px] h-10 lg:h-12"
            />
          </div>

          <div className="bg-white border-2 border-[#F2F1EE] rounded-lg flex flex-col justify-center items-center opacity-40 cursor-not-allowed p-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29%281%29%281%29%281%29%281%29%281%29-62kpR2CylIAVmBZy8sdls2zHTz7AJ4.png"
              alt="Rubrik"
              className="object-contain grayscale w-full max-w-[200px] h-10 lg:h-12"
            />
          </div>

          <div className="bg-white border-2 border-[#F2F1EE] rounded-lg flex flex-col justify-center items-center opacity-40 cursor-not-allowed p-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29%281%29%281%29%281%29%281%29%281%29-Z7zT9FJB5auGMTzRsWKH77GmG6aDja.png"
              alt="SAP Global Partner"
              className="object-contain grayscale w-full max-w-[200px] h-10 lg:h-12"
            />
          </div>

          <div className="bg-white border-2 border-[#F2F1EE] rounded-lg flex flex-col justify-center items-center opacity-40 cursor-not-allowed p-6">
            <img
              src="/logos/servicenow-logo.png"
              alt="ServiceNow"
              className="object-contain grayscale w-full max-w-[200px] h-10 lg:h-12"
            />
          </div>
        </div>
      </main>

      {/* Progress bar and controls */}
      <div className="relative w-full h-0 hidden lg:block">
        <div className="absolute top-[-2rem] left-4 sm:left-8 lg:left-16 right-4 sm:right-8 lg:right-16 h-12 z-20 py-[0] my-2">
          {/* Background bar */}
          <div
            ref={progressBarRef}
            className="absolute top-6 left-0 w-full bg-[#565049] cursor-grab h-0.5 py-0 my-0.5"
            onMouseDown={handleMouseDown}
          ></div>

          {/* Active progress bar */}
          <div
            className="absolute top-6 left-0 h-1 bg-[#FF462D] pointer-events-none transition-all duration-200"
            style={{
              width: `${scrollProgress}%`,
            }}
          ></div>

          {/* Scroll directional controls */}
          <div
            className="absolute bg-white rounded-xl shadow-lg flex items-center justify-between z-10 w-16 h-6 px-2 top-3 cursor-grab transition-all duration-200 my-px"
            style={{
              left: `calc(${scrollProgress}% - 2rem)`,
            }}
            onMouseDown={handleMouseDown}
          >
            <ChevronLeft
              onClick={(e) => {
                e.stopPropagation()
                scrollLeft()
              }}
              className="text-[#FF462D] cursor-pointer w-4 h-4"
            />
            <ChevronRight
              onClick={(e) => {
                e.stopPropagation()
                scrollRight()
              }}
              className="text-[#FF462D] cursor-pointer w-4 h-4"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white px-4 sm:px-8 lg:px-16 py-6 lg:py-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          {/* Left side - Kyndryl Alliance Experience logo */}
          <div className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29%281%29%281%29%281%29%281%29%281%29-pnzCNtUuHDTwKocFYfvNJaSCfZ0ssi.png"
              alt="Kyndryl Alliance Experience"
              className="object-contain h-8 lg:h-10 w-auto"
            />
          </div>

          {/* Right side - Breadcrumb */}
          <div className="flex items-center gap-2">
            <a href="/alliance-home" className="text-[#9E9287] no-underline text-sm lg:text-base font-light">
              Home
            </a>
            <ChevronRight className="text-[#9E9287] w-4 h-4" />
            <span className="text-[#29707A] text-sm lg:text-base text-[rgba(41,112,122,1)] font-medium">Alliances</span>
          </div>
        </div>
      </footer>

      {/* Screen Savers */}
      <AWSScreenSaver
        isOpen={isAWSScreenSaverOpen}
        onClose={() => setIsAWSScreenSaverOpen(false)}
        onProceed={() => {
          setIsAWSScreenSaverOpen(false)
          setIsAWSModalOpen(true)
        }}
      />

      <GoogleCloudScreenSaver
        isOpen={isGoogleCloudScreenSaverOpen}
        onClose={() => setIsGoogleCloudScreenSaverOpen(false)}
        onProceed={() => {
          setIsGoogleCloudScreenSaverOpen(false)
          setIsGoogleCloudModalOpen(true)
        }}
      />

      <MicrosoftScreenSaver
        isOpen={isMicrosoftScreenSaverOpen}
        onClose={() => setIsMicrosoftScreenSaverOpen(false)}
        onProceed={() => {
          setIsMicrosoftScreenSaverOpen(false)
          setIsMicrosoftModalOpen(true)
        }}
      />

      {/* Focus Modals */}
      <GoogleCloudFocusModal isOpen={isGoogleCloudModalOpen} onClose={() => setIsGoogleCloudModalOpen(false)} />
      <AWSFocusModal isOpen={isAWSModalOpen} onClose={() => setIsAWSModalOpen(false)} />
      <MicrosoftFocusModal isOpen={isMicrosoftModalOpen} onClose={() => setIsMicrosoftModalOpen(false)} />
      <DemoFocusModal isOpen={isDemoFocusModalOpen} onClose={() => setIsDemoFocusModalOpen(false)} />
    </div>
  )
}
