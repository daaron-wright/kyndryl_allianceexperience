"use client"
import { X, ChevronRight, User, Info } from "lucide-react"

interface DemosWelcomeModalProps {
  onClose: () => void
  onExplore: () => void // Added onExplore prop for navigation to demos
}

export default function DemosWelcomeModal({ onClose, onExplore }: DemosWelcomeModalProps) {
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
          width: "672px", // Updated modal dimensions from 800x600 to 672x775
          height: "775px", // Updated modal dimensions from 800x600 to 672x775
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          position: "relative",
          padding: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "30px",
            right: "30px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
          }}
        >
          <X style={{ width: "24px", height: "24px", color: "#3D3C3C" }} />
        </button>

        {/* Main content */}
        <div>
          {/* User icon */}
          <div
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "#FF462D",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "40px",
            }}
          >
            <User style={{ width: "40px", height: "40px", color: "#FFFFFF" }} />
          </div>

          {/* Welcome heading */}
          <h1
            style={{
              fontFamily: "TWK Everett, sans-serif",
              fontSize: "48px",
              fontWeight: "400",
              color: "#FF462D",
              lineHeight: "1.2",
              marginBottom: "24px",
              margin: "0 0 24px 0",
            }}
          >
            Welcome to AI Use Cases Explorer
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "TWK Everett, sans-serif",
              fontSize: "24px",
              color: "#3D3C3C",
              lineHeight: "1.4",
              marginBottom: "60px",
            }}
          >
            Discover how AI transforms industries through interactive demonstrations
          </p>

          {/* Info section */}
          <div style={{ marginBottom: "40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  border: "2px solid #3D3C3C",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Info style={{ width: "16px", height: "16px", color: "#3D3C3C" }} />
              </div>
              <h2
                style={{
                  fontFamily: "TWK Everett, sans-serif",
                  fontSize: "32px",
                  fontWeight: "400",
                  color: "#3D3C3C",
                  margin: 0,
                }}
              >
                Kyndryl Consult Concierge
              </h2>
            </div>

            <p
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontSize: "18px",
                color: "#727175",
                lineHeight: "1.5",
                marginBottom: "32px",
              }}
            >
              A Kyndryl Consult concierge is on the way to assist you with personalized AI solution recommendations and
              answer any questions about our use cases. In the meantime, explore our interactive demonstrations to see
              AI in action.
            </p>

            {/* Login button */}
            <button
              onClick={onExplore} // Added click handler to navigate to demos
              style={{
                backgroundColor: "transparent",
                border: "2px solid #3D3C3C",
                borderRadius: "4px",
                padding: "16px 32px",
                fontFamily: "TWK Everett, sans-serif",
                fontSize: "18px",
                fontWeight: "500",
                color: "#3D3C3C",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              Log in to explore demos
              <ChevronRight style={{ width: "20px", height: "20px", color: "#FF462D" }} />
            </button>
          </div>
        </div>

        {/* Bottom section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          {/* Statistics */}
          <div style={{ display: "flex", gap: "80px" }}>
            <div>
              <div
                style={{
                  fontFamily: "TWK Everett, sans-serif",
                  fontSize: "64px",
                  fontWeight: "300",
                  color: "#FF462D",
                  lineHeight: "1",
                  marginBottom: "8px",
                }}
              >
                15+
              </div>
              <div
                style={{
                  fontFamily: "TWK Everett, sans-serif",
                  fontSize: "18px",
                  color: "#3D3C3C",
                  lineHeight: "1.2",
                }}
              >
                Interactive
                <br />
                Demos
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "TWK Everett, sans-serif",
                  fontSize: "64px",
                  fontWeight: "300",
                  color: "#FF462D",
                  lineHeight: "1",
                  marginBottom: "8px",
                }}
              >
                8
              </div>
              <div
                style={{
                  fontFamily: "TWK Everett, sans-serif",
                  fontSize: "18px",
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

          {/* Back to home link */}
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
              fontSize: "16px",
              color: "#727175",
            }}
          >
            Back to home page
            <ChevronRight style={{ width: "16px", height: "16px", color: "#727175" }} />
          </button>
        </div>
      </div>
    </div>
  )
}
