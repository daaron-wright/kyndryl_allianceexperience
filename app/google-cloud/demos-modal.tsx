"use client"
import { X, ChevronRight, Search } from "lucide-react"

interface DemosModalProps {
  onClose: () => void
  onDemoClick: (demoTitle: string) => void // Added demo click handler prop
}

export default function DemosModal({ onClose, onDemoClick }: DemosModalProps) {
  const demos = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: i < 4 ? "Content title" : "Content title utenim ad minim veniam, quis",
    description: "Content title utenim ad minim veniam, quis nostrud exercitation",
  }))

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
        zIndex: 1001,
      }}
    >
      <div
        style={{
          width: "1600px",
          height: "900px",
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "40px 60px",
            borderBottom: "1px solid #E5E5E5",
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

        {/* Main content */}
        <div
          style={{
            flex: 1,
            padding: "60px",
            backgroundColor: "#F2F1EE",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Demos grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "40px",
              marginBottom: "60px",
            }}
          >
            {demos.map((demo) => (
              <div
                key={demo.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "8px",
                  padding: "24px",
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                }}
                onClick={() => onDemoClick(demo.title)} // Added click handler to open demo viewer
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <p
                  style={{
                    fontFamily: "TWK Everett, sans-serif",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#FF462D",
                    margin: "0 0 16px 0",
                    textTransform: "uppercase",
                  }}
                >
                  Demo
                </p>

                <h3
                  style={{
                    fontFamily: "TWK Everett, sans-serif",
                    fontSize: "24px",
                    fontWeight: "400",
                    color: "#3D3C3C",
                    lineHeight: "1.3",
                    margin: "0 0 16px 0",
                  }}
                >
                  {demo.title}
                </h3>

                <button
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
                    padding: 0,
                    marginBottom: "24px",
                  }}
                >
                  Learn more
                  <ChevronRight style={{ width: "16px", height: "16px", color: "#727175" }} />
                </button>

                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {["Meta tag", "Meta tag", "Meta tag"].map((tag, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: "#F2F1EE",
                        color: "#727175",
                        padding: "4px 12px",
                        borderRadius: "16px",
                        fontSize: "12px",
                        fontFamily: "TWK Everett, sans-serif",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination and navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button
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
              <ChevronRight
                style={{
                  width: "16px",
                  height: "16px",
                  color: "#727175",
                  transform: "rotate(180deg)",
                }}
              />
              Previous
            </button>

            <div style={{ display: "flex", gap: "16px" }}>
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  style={{
                    backgroundColor: "transparent",
                    border: page === 2 ? "2px solid #FF462D" : "2px solid transparent",
                    cursor: "pointer",
                    fontFamily: "TWK Everett, sans-serif",
                    fontSize: "18px",
                    color: page === 2 ? "#FF462D" : "#727175",
                    fontWeight: page === 2 ? "500" : "400",
                    padding: "8px 12px",
                    borderRadius: "4px",
                  }}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
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
              Next
              <ChevronRight style={{ width: "16px", height: "16px", color: "#727175" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
