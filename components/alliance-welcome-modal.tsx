"use client"
'use client'

import { useEffect, useState } from "react"
import { X, ChevronRight, Users, Play } from "lucide-react"

interface AllianceWelcomeModalProps {
  onClose: () => void
  onExploreStories: () => void
  allianceName?: string
}

export default function AllianceWelcomeModal({
  onClose,
  onExploreStories,
  allianceName = "Google Cloud",
}: AllianceWelcomeModalProps) {
  const getIsMobile = () => (typeof window !== "undefined" ? window.innerWidth <= 768 : false)
  const [isMobileLayout, setIsMobileLayout] = useState(getIsMobile)

  useEffect(() => {
    const handleResize = () => setIsMobileLayout(getIsMobile())
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "clamp(320px, 90vw, 1200px)",
          height: "clamp(400px, 80vh, 700px)",
          maxWidth: "90vw",
          maxHeight: "90vh",
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: isMobileLayout ? "column" : "row",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "clamp(12px, 2vw, 20px)",
            right: "clamp(12px, 2vw, 20px)",
            background: "rgba(255, 255, 255, 0.9)",
            border: "none",
            cursor: "pointer",
            padding: "clamp(6px, 1vw, 8px)",
            borderRadius: "50%",
            zIndex: 10,
          }}
        >
          <X style={{ width: "clamp(20px, 3vw, 24px)", height: "clamp(20px, 3vw, 24px)", color: "#3D3C3C" }} />
        </button>

        {/* Hero image section */}
        <div
          style={{
            flex: 1,
            backgroundImage: "url(/kyndryl-google-cloud-hero.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            minHeight: "clamp(200px, 40vh, 400px)",
          }}
        >
          {/* Overlay for better text readability */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%)",
            }}
          />

          {/* Content overlay on image */}
          <div
            style={{
              position: "absolute",
              bottom: "clamp(20px, 4vw, 40px)",
              left: "clamp(20px, 4vw, 40px)",
              right: "clamp(20px, 4vw, 40px)",
              zIndex: 2,
            }}
          >
            <h1
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontSize: "clamp(24px, 5vw, 42px)",
                fontWeight: "400",
                color: "#FFFFFF",
                lineHeight: "1.2",
                marginBottom: "16px",
                margin: "0 0 16px 0",
              }}
            >
              Kyndryl and Google Cloud
            </h1>
            <p
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontSize: "clamp(14px, 2.5vw, 20px)",
                color: "#FFFFFF",
                lineHeight: "1.4",
                marginBottom: "32px",
                opacity: 0.9,
              }}
            >
              The foundation for your AI transformation
            </p>
          </div>
        </div>

        {/* Content panel */}
        <div
          style={{
            width: "clamp(300px, 40vw, 400px)",
            padding: "clamp(30px, 6vw, 60px) clamp(20px, 4vw, 40px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#FFFFFF",
          }}
        >
          {/* Main content */}
          <div>
            {/* Alliance icon */}
            <div
              style={{
                width: "clamp(50px, 8vw, 60px)",
                height: "clamp(50px, 8vw, 60px)",
                backgroundColor: "#FF462D",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "32px",
              }}
            >
              <Users style={{ width: "clamp(24px, 4vw, 30px)", height: "clamp(24px, 4vw, 30px)", color: "#FFFFFF" }} />
            </div>

            {/* Info section */}
            <div style={{ marginBottom: "40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    border: "2px solid #3D3C3C",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Play style={{ width: "12px", height: "12px", color: "#3D3C3C" }} />
                </div>
                <h2
                  style={{
                    fontFamily: "TWK Everett, sans-serif",
                    fontSize: "clamp(18px, 3vw, 24px)",
                    fontWeight: "400",
                    color: "#3D3C3C",
                    margin: 0,
                  }}
                >
                  Customer Stories
                </h2>
              </div>

              <p
                style={{
                  fontFamily: "TWK Everett, sans-serif",
                  fontSize: "clamp(14px, 2vw, 16px)",
                  color: "#727175",
                  lineHeight: "1.5",
                  marginBottom: "32px",
                }}
              >
                Explore real-world success stories and innovative solutions from our partnership across industries.
              </p>

              {/* Explore button */}
              <button
                onClick={onExploreStories}
                style={{
                  backgroundColor: "#FF462D",
                  border: "none",
                  borderRadius: "4px",
                  padding: "clamp(12px, 2vw, 16px) clamp(18px, 3vw, 24px)",
                  fontFamily: "TWK Everett, sans-serif",
                  fontSize: "clamp(14px, 2vw, 16px)",
                  fontWeight: "500",
                  color: "#FFFFFF",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                Explore Stories
                <ChevronRight
                  style={{ width: "clamp(16px, 2.5vw, 18px)", height: "clamp(16px, 2.5vw, 18px)", color: "#FFFFFF" }}
                />
              </button>
            </div>
          </div>

          {/* Bottom section */}
          <div>
            {/* Statistics */}
            <div style={{ display: "flex", gap: "40px", marginBottom: "24px" }}>
              <div>
                <div
                  style={{
                    fontFamily: "TWK Everett, sans-serif",
                    fontSize: "clamp(28px, 5vw, 36px)",
                    fontWeight: "300",
                    color: "#FF462D",
                    lineHeight: "1",
                    marginBottom: "4px",
                  }}
                >
                  25+
                </div>
                <div
                  style={{
                    fontFamily: "TWK Everett, sans-serif",
                    fontSize: "clamp(12px, 1.8vw, 14px)",
                    color: "#3D3C3C",
                    lineHeight: "1.2",
                  }}
                >
                  Customer
                  <br />
                  Stories
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "TWK Everett, sans-serif",
                    fontSize: "clamp(28px, 5vw, 36px)",
                    fontWeight: "300",
                    color: "#FF462D",
                    lineHeight: "1",
                    marginBottom: "4px",
                  }}
                >
                  12
                </div>
                <div
                  style={{
                    fontFamily: "TWK Everett, sans-serif",
                    fontSize: "clamp(12px, 1.8vw, 14px)",
                    color: "#3D3C3C",
                    lineHeight: "1.2",
                  }}
                >
                  Industry
                  <br />
                  Verticals
                </div>
              </div>
            </div>

            {/* Back to alliance link */}
            <button
              onClick={onClose}
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "TWK Everett, sans-serif",
                fontSize: "clamp(12px, 1.8vw, 14px)",
                color: "#727175",
                padding: 0,
              }}
            >
              Back to alliance page
              <ChevronRight
                style={{ width: "clamp(12px, 1.8vw, 14px)", height: "clamp(12px, 1.8vw, 14px)", color: "#727175" }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
