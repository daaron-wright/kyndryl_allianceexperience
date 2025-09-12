"use client"

import { X, Search } from "lucide-react"

interface DemoViewerProps {
  onClose: () => void
  demoTitle: string
}

export default function DemoViewer({ onClose, demoTitle }: DemoViewerProps) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "1920px",
        height: "1080px",
        backgroundColor: "#FFFFFF",
        zIndex: 1002,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "40px 90px",
          borderBottom: "1px solid #E5E5E5",
          backgroundColor: "#FFFFFF",
        }}
      >
        <h1
          style={{
            fontFamily: "TWK Everett, sans-serif",
            fontSize: "48px",
            fontWeight: "400",
            color: "#FF462D",
            margin: 0,
          }}
        >
          Demos
        </h1>

        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <nav style={{ display: "flex", gap: "18px 40px", flexWrap: "wrap" }}>
            <a
              href="/alliances"
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontSize: "20px",
                fontWeight: "500",
                letterSpacing: "0.32px",
                lineHeight: "24px",
                color: "#3D3C3C",
                textDecoration: "none",
              }}
            >
              Alliances
            </a>
            <a
              href="/industries"
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontSize: "20px",
                fontWeight: "500",
                letterSpacing: "0.32px",
                lineHeight: "24px",
                color: "#3D3C3C",
                textDecoration: "none",
              }}
            >
              Industries
            </a>
            <a
              href="#"
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontSize: "20px",
                fontWeight: "500",
                letterSpacing: "0.32px",
                lineHeight: "24px",
                color: "#3D3C3C",
                textDecoration: "none",
              }}
            >
              Capabilities
            </a>
            <a
              href="#"
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontSize: "20px",
                fontWeight: "500",
                letterSpacing: "0.32px",
                lineHeight: "24px",
                color: "#3D3C3C",
                textDecoration: "none",
              }}
            >
              Market
            </a>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Search"
                style={{
                  width: "300px",
                  padding: "12px 16px 12px 40px",
                  border: "1px solid #E5E5E5",
                  borderRadius: "4px",
                  fontFamily: "TWK Everett, sans-serif",
                  fontSize: "16px",
                }}
              />
              <Search
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "20px",
                  height: "20px",
                  color: "#727175",
                }}
              />
            </div>
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
              }}
            >
              <X style={{ width: "24px", height: "24px", color: "#3D3C3C" }} />
            </button>
          </div>
        </div>
      </header>

      {/* Main demo content area */}
      <main
        style={{
          flex: 1,
          backgroundColor: "#042315",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Demo content would be loaded here */}
        <div
          style={{
            color: "#FFFFFF",
            fontFamily: "TWK Everett, sans-serif",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          {/* Interactive demo content for "{demoTitle}" would load here */}
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: "40px 90px",
          backgroundColor: "#FFFFFF",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <svg width="125" height="40" viewBox="0 0 125 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40V0H8.5V16.5H12.5L20 0H29.5L20.5 18.5L30 40H20.5L14 25H8.5V40H0Z" fill="#FF462D" />
            <path d="M35 40V25L45 0H54L64 25V40H55.5V28L52 20H47L43.5 28V40H35Z" fill="#FF462D" />
            <path d="M70 40V0H78.5V15H85V0H93.5V40H85V22.5H78.5V40H70Z" fill="#FF462D" />
            <path d="M100 40V0H125V7.5H108.5V15H122.5V22.5H108.5V32.5H125V40H100Z" fill="#FF462D" />
          </svg>

          <span
            style={{
              fontFamily: "TWK Everett, sans-serif",
              fontSize: "18px",
              color: "#9E9287",
            }}
          >
            Alliance Experience
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span
            style={{
              fontFamily: "TWK Everett, sans-serif",
              fontSize: "16px",
              color: "#727175",
            }}
          >
            Home
          </span>
          <span style={{ color: "#727175" }}>{">"}</span>
          <span
            style={{
              fontFamily: "TWK Everett, sans-serif",
              fontSize: "16px",
              color: "#727175",
            }}
          >
            Industries
          </span>
          <span style={{ color: "#727175" }}>{">"}</span>
          <span
            style={{
              fontFamily: "TWK Everett, sans-serif",
              fontSize: "16px",
              color: "#727175",
            }}
          >
            Automotive
          </span>
          <span style={{ color: "#727175" }}>{">"}</span>
          <span
            style={{
              fontFamily: "TWK Everett, sans-serif",
              fontSize: "16px",
              color: "#29707A",
              fontWeight: "500",
            }}
          >
            Demos
          </span>
        </div>
      </footer>
    </div>
  )
}
