"use client"

import { useState } from "react"
import FeatureModal from "./feature-modal"
import VideoLibraryModal from "./video-library-modal"
import CaseStudiesModal from "./case-studies-modal"
import DemosModal from "./demos-modal"
import DemoLoginModal from "./demo-login-modal"
import AllianceWelcomeModal from "./alliance-welcome-modal"
import GoogleCloudTile from "./google-cloud-tile"
import MicrosoftTile from "./microsoft-tile"
import AWSTile from "./aws-tile"

interface AllianceLandingProps {
  logo?: string
  title?: string
  breadcrumbTitle?: string
}

export default function AllianceLanding({
  logo = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qY90vjSlxdh5RRYNGpS3vAz59W0dGH.png",
  title = "Google Cloud",
  breadcrumbTitle = "Google Cloud",
}: AllianceLandingProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isVideoLibraryOpen, setIsVideoLibraryOpen] = useState(false)
  const [isCaseStudiesModalOpen, setIsCaseStudiesModalOpen] = useState(false)
  const [isAllianceWelcomeModalOpen, setIsAllianceWelcomeModalOpen] = useState(false)
  const [isDemosModalOpen, setIsDemosModalOpen] = useState(false)
  const [isDemoLoginModalOpen, setIsDemoLoginModalOpen] = useState(false)

  const getAllianceFilter = (allianceTitle: string) => {
    switch (allianceTitle) {
      case "Google Cloud":
        return "Google Cloud"
      case "Microsoft":
        return "Microsoft Azure"
      case "AWS":
        return "AWS"
      default:
        return "All"
    }
  }

  return (
    <div className="responsive-container">
      {/* Modal overlays */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-lg overflow-hidden">
            <FeatureModal onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}

      {isAllianceWelcomeModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-lg overflow-hidden">
            <AllianceWelcomeModal
              onClose={() => setIsAllianceWelcomeModalOpen(false)}
              onExploreStories={() => {
                setIsAllianceWelcomeModalOpen(false)
                setIsVideoLibraryOpen(true)
              }}
              allianceName={title}
            />
          </div>
        </div>
      )}

      {isVideoLibraryOpen && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-lg overflow-hidden">
            <VideoLibraryModal
              onClose={() => setIsVideoLibraryOpen(false)}
              initialAlliance={getAllianceFilter(title)}
            />
          </div>
        </div>
      )}

      {isCaseStudiesModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-lg overflow-hidden">
            <CaseStudiesModal onClose={() => setIsCaseStudiesModalOpen(false)} />
          </div>
        </div>
      )}

      {isDemosModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-lg overflow-hidden">
            <DemosModal
              onClose={() => setIsDemosModalOpen(false)}
              learnMoreUrl={title === "AWS" ? "https://develop-vks.d2hmtm6qbgyxg0.amplifyapp.com" : undefined}
            />
          </div>
        </div>
      )}

      {isDemoLoginModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-lg overflow-hidden max-w-2xl w-full mx-4">
            <DemoLoginModal
              onClose={() => setIsDemoLoginModalOpen(false)}
              onLogin={() => {
                setIsDemoLoginModalOpen(false)
                setIsDemosModalOpen(true)
              }}
            />
          </div>
        </div>
      )}

      <div className="w-full h-full" style={{ padding: "clamp(16px, 2vw, 32px)" }}>
        {/* Header */}
        <header className="mb-8 flex items-center justify-between" style={{ marginBottom: "clamp(16px, 2vh, 32px)" }}>
          <img
            src={logo || "/placeholder.svg"}
            alt={title}
            style={{ height: "clamp(32px, 4vh, 44px)", width: "auto" }}
          />
          <nav
            className="flex items-center gap-8 text-neutral-700"
            style={{
              gap: "clamp(16px, 2vw, 32px)",
              fontSize: "clamp(14px, 1.5vw, 16px)",
            }}
          >
            <a className="text-[#FF462D] border-b-2 border-[#FF462D] hover:text-[#FF462D]" href="/alliances">
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
        </header>

        {/* Main content grid */}
        <main
          className="grid grid-cols-2 grid-rows-2 gap-8"
          style={{
            height: "calc(100vh - clamp(200px, 25vh, 300px))",
            gap: "clamp(16px, 2vw, 32px)",
          }}
        >
          <section className="row-span-2">
            {title === "Google Cloud" && <GoogleCloudTile onClick={() => setIsModalOpen(true)} />}
            {title === "Microsoft" && <MicrosoftTile onClick={() => setIsModalOpen(true)} />}
            {title === "AWS" && <AWSTile onClick={() => setIsModalOpen(true)} />}
          </section>

          <div
            className="relative w-full bg-[#FF462D] shadow-lg rounded-[4px] overflow-hidden cursor-pointer hover:bg-[#E63E32] transition-colors"
            onClick={() => setIsAllianceWelcomeModalOpen(true)}
          >
            <div style={{ padding: "clamp(20px, 3vw, 40px)" }}>
              <h2
                style={{
                  fontFamily: "TWK Everett, sans-serif",
                  fontSize: "clamp(32px, 5vw, 54px)",
                  fontWeight: 300,
                  lineHeight: "1.1",
                  letterSpacing: "0.2px",
                  color: "white",
                  margin: 0,
                }}
              >
                Customer Stories
              </h2>
            </div>

            {/* Videos Button */}
            <div
              className="absolute flex gap-[20px]"
              style={{
                bottom: "clamp(20px, 3vw, 40px)",
                left: "clamp(20px, 3vw, 40px)",
                gap: "clamp(10px, 2vw, 20px)",
              }}
            >
              <div
                className="bg-white rounded-[4px] flex items-center justify-center gap-[20px]"
                style={{
                  width: "clamp(130px, 16vw, 170px)",
                  height: "clamp(40px, 5vh, 60px)",
                  padding: "clamp(10px, 2vw, 20px)",
                  gap: "clamp(10px, 2vw, 20px)",
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  setIsVideoLibraryOpen(true)
                }}
              >
                <span
                  style={{
                    fontFamily: "TWK Everett, sans-serif",
                    fontSize: "clamp(14px, 2vw, 20px)",
                    fontWeight: 500,
                    lineHeight: "1.2",
                    letterSpacing: "0.2px",
                    color: "#042315",
                  }}
                >
                  Videos
                </span>
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 23L13 12L1 1"
                    stroke="#FF462D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div
            className="relative w-full shadow-lg rounded-lg overflow-hidden cursor-pointer transition-colors bg-[rgba(4,35,21,1)]"
            onClick={() => setIsDemoLoginModalOpen(true)}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wnldDrFOwtGggYEklLsbwV4cbvqcMM.png"
              alt="Demos"
              className="object-cover size-full px-0 py-3.5 my-14 mx-8 ml-8 pl-0 w-[120] pb-8 pt-7"
            />
          </div>
        </main>

        {/* Footer */}
        <footer
          className="flex items-center justify-between"
          style={{
            marginTop: "clamp(16px, 2vh, 32px)",
            fontSize: "clamp(14px, 1.5vw, 16px)",
          }}
        >
          <div className="flex items-center" style={{ gap: "clamp(16px, 2vw, 32px)" }}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-djRnyWQrSo8Vh5UCgxBpA8uKqiZUJV.png"
              alt="Kyndryl Alliance Experience"
              style={{ height: "clamp(24px, 3vh, 32px)", width: "auto" }}
            />
          </div>
          <nav className="text-neutral-600">
            <ul className="flex items-center" style={{ gap: "clamp(8px, 1vw, 16px)" }}>
              <li className="hover:text-black">
                <a className="font-light" href="/">
                  Home
                </a>
              </li>
              <li className="text-neutral-400">›</li>
              <li className="hover:text-black">
                <a className="font-light text-[#FF462D] border-b-2 border-[#FF462D]" href="/alliances">
                  Alliances
                </a>
              </li>
              <li className="text-neutral-400">›</li>
              <li className="font-medium text-[rgba(41,112,122,1)]">{breadcrumbTitle}</li>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  )
}
