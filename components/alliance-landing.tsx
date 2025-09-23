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
import GoogleCloudFocusModal from "./google-cloud-focus-modal"
import AWSFocusModal from "./aws-focus-modal"
import MicrosoftFocusModal from "./microsoft-focus-modal"
import AWSScreenSaver from "./aws-screen-saver"
import GoogleCloudScreenSaver from "./google-cloud-screen-saver"
import MicrosoftScreenSaver from "./microsoft-screen-saver"
import GoogleCloudDemosModal from "./google-cloud-demos-modal-new"

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
  const [isGoogleCloudFocusModalOpen, setIsGoogleCloudFocusModalOpen] = useState(false)
  const [isAWSFocusModalOpen, setIsAWSFocusModalOpen] = useState(false)
  const [isMicrosoftFocusModalOpen, setIsMicrosoftFocusModalOpen] = useState(false)
  const [isGoogleCloudDemosModalOpen, setIsGoogleCloudDemosModalOpen] = useState(false)
  const [isAWSScreenSaverOpen, setIsAWSScreenSaverOpen] = useState(false)
  const [isGoogleCloudScreenSaverOpen, setIsGoogleCloudScreenSaverOpen] = useState(false)
  const [isMicrosoftScreenSaverOpen, setIsMicrosoftScreenSaverOpen] = useState(false)
  const [isMicrosoftNoDemoModalOpen, setIsMicrosoftNoDemoModalOpen] = useState(false)

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
    <div className="w-full min-h-screen bg-white">
      <div className="w-full h-full" style={{ padding: "clamp(16px, 2vw, 32px)" }}>
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
          <DemosModal
            onClose={() => setIsDemosModalOpen(false)}
            learnMoreUrl={title === "AWS" ? "https://develop-vks.d2hmtm6qbgyxg0.amplifyapp.com" : undefined}
          />
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

        {/* Alliance-specific focus modals */}
        {isGoogleCloudFocusModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white rounded-lg overflow-hidden">
              <GoogleCloudFocusModal
                isOpen={isGoogleCloudFocusModalOpen}
                onClose={() => setIsGoogleCloudFocusModalOpen(false)}
              />
            </div>
          </div>
        )}

        {isAWSFocusModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white rounded-lg overflow-hidden">
              <AWSFocusModal isOpen={isAWSFocusModalOpen} onClose={() => setIsAWSFocusModalOpen(false)} />
            </div>
          </div>
        )}

        {isMicrosoftFocusModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white rounded-lg overflow-hidden">
              <MicrosoftFocusModal
                isOpen={isMicrosoftFocusModalOpen}
                onClose={() => setIsMicrosoftFocusModalOpen(false)}
              />
            </div>
          </div>
        )}

        {isAWSScreenSaverOpen && (
          <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white rounded-lg overflow-hidden">
              <AWSScreenSaver
                isOpen={isAWSScreenSaverOpen}
                onClose={() => setIsAWSScreenSaverOpen(false)}
                onProceed={() => {
                  setIsAWSScreenSaverOpen(false)
                  setIsAWSFocusModalOpen(true)
                }}
              />
            </div>
          </div>
        )}

        {isGoogleCloudScreenSaverOpen && (
          <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white rounded-lg overflow-hidden">
              <GoogleCloudScreenSaver
                isOpen={isGoogleCloudScreenSaverOpen}
                onClose={() => setIsGoogleCloudScreenSaverOpen(false)}
                onProceed={() => {
                  setIsGoogleCloudScreenSaverOpen(false)
                  setIsGoogleCloudFocusModalOpen(true)
                }}
              />
            </div>
          </div>
        )}

        {isMicrosoftScreenSaverOpen && (
          <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white rounded-lg overflow-hidden">
              <MicrosoftScreenSaver
                isOpen={isMicrosoftScreenSaverOpen}
                onClose={() => setIsMicrosoftScreenSaverOpen(false)}
                onProceed={() => {
                  setIsMicrosoftScreenSaverOpen(false)
                  setIsMicrosoftFocusModalOpen(true)
                }}
              />
            </div>
          </div>
        )}

        {isGoogleCloudDemosModalOpen && (
          <GoogleCloudDemosModal
            isOpen={isGoogleCloudDemosModalOpen}
            onClose={() => setIsGoogleCloudDemosModalOpen(false)}
          />
        )}

        {/* Microsoft no demo modal */}
        {isMicrosoftNoDemoModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          >
            <div className="bg-white rounded-lg overflow-hidden max-w-md w-full mx-4 p-8 text-center">
              <div className="mb-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%283%29%281%29-a6BCi86Pxyy7cJ9Lr1JB7zld4V645T.png"
                  alt="Demo not available"
                  className="mx-auto h-16 w-16"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Demos Unavailable</h3>
              <p className="text-gray-600 mb-6">No Interactive Demos found for Microsoft</p>
              <button
                onClick={() => setIsMicrosoftNoDemoModalOpen(false)}
                className="bg-[#FF462D] text-white px-6 py-2 rounded hover:bg-[#E63E32] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}

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
            onClick={() => setIsVideoLibraryOpen(true)} // Updated to open VideoLibrary Modal instead of AllianceWelcome Modal
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
            className={`relative shadow-lg rounded-lg overflow-hidden transition-colors bg-[rgba(4,35,21,1)] h-auto w-auto py-0 mx-0 my-0`}
            onClick={() => {
              if (title === "AWS") {
                setIsDemosModalOpen(true)
              } else if (title === "Microsoft") {
                setIsMicrosoftNoDemoModalOpen(true)
              } else {
                switch (title) {
                  case "Google Cloud":
                    setIsGoogleCloudDemosModalOpen(true)
                    break
                  default:
                    setIsDemoLoginModalOpen(true)
                }
              }
            }}
            style={{
              backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-21%20at%2012.35.48%E2%80%AFPM-ETTaHSyPBCPr6WmYfQCvE0v0j9doqf.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29%281%29%281%29%281%29%281%29-egobz1UJjnaZUCxGAh4JYVM4GWtZgT.png"
              alt="Kyndryl Alliance Experience"
              style={{ height: "clamp(24px, 3vh, 32px)", width: "auto" }}
            />
          </div>
          <nav className="text-neutral-600">
            <ul className="flex items-center" style={{ gap: "clamp(8px, 1vw, 16px)" }}>
              <li className="hover:text-black">
                <a className="font-light" href="/alliance-home">
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
