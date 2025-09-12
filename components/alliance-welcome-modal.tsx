"use client"
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
    >
      <div
        style={{
          width: "900px",
          height: "600px",
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "rgba(255, 255, 255, 0.9)",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            borderRadius: "50%",
            zIndex: 10,
          }}
        >
          <X style={{ width: "24px", height: "24px", color: "#3D3C3C" }} />
        </button>

        {/* Hero image section */}
        <div
          style={{
            flex: 1,
            backgroundImage: "url(/kyndryl-google-cloud-hero.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
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
              bottom: "40px",
              left: "40px",
              right: "40px",
              zIndex: 2,
            }}
          >
            <h1
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontSize: "42px",
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
                fontSize: "20px",
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
            width: "400px",
            padding: "60px 40px",
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
                width: "60px",
                height: "60px",
                backgroundColor: "#FF462D",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "32px",
              }}
            >
              <Users style={{ width: "30px", height: "30px", color: "#FFFFFF" }} />
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
                    fontSize: "24px",
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
                  fontSize: "16px",
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
                  padding: "16px 24px",
                  fontFamily: "TWK Everett, sans-serif",
                  fontSize: "16px",
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
                <ChevronRight style={{ width: "18px", height: "18px", color: "#FFFFFF" }} />
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
                    fontSize: "36px",
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
                    fontSize: "14px",
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
                    fontSize: "36px",
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
                    fontSize: "14px",
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
                fontSize: "14px",
                color: "#727175",
                padding: 0,
              }}
            >
              Back to alliance page
              <ChevronRight style={{ width: "14px", height: "14px", color: "#727175" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
