"use client"
import { X } from "lucide-react"
import type React from "react"

interface LoginModalProps {
  onClose: () => void
  onLogin: () => void
}

export default function LoginModal({ onClose, onLogin }: LoginModalProps) {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin()
  }

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
          padding: "4px",
        }}
      >
        <X style={{ width: "24px", height: "24px", color: "#3D3C3C" }} />
      </button>

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
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            fill="white"
          />
        </svg>
      </div>

      {/* Main heading */}
      <h1
        style={{
          fontFamily: "TWK Everett, sans-serif",
          fontSize: "48px",
          fontWeight: "400",
          color: "#FF462D",
          margin: "0 0 24px 0",
          lineHeight: "1.2",
        }}
      >
        Welcome to AI Use Cases Explorer
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontFamily: "TWK Everett, sans-serif",
          fontSize: "20px",
          color: "#3D3C3C",
          margin: "0 0 40px 0",
          lineHeight: "1.4",
        }}
      >
        Discover how AI transforms industries through interactive demonstrations
      </p>

      {/* Info icon and section */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "40px" }}>
        <div
          style={{
            width: "32px",
            height: "32px",
            border: "2px solid #3D3C3C",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span style={{ fontFamily: "TWK Everett, sans-serif", fontSize: "16px", color: "#3D3C3C" }}>i</span>
        </div>
        <div>
          <h3
            style={{
              fontFamily: "TWK Everett, sans-serif",
              fontSize: "24px",
              fontWeight: "400",
              color: "#3D3C3C",
              margin: "0 0 12px 0",
            }}
          >
            Kyndryl Consult Concierge
          </h3>
          <p
            style={{
              fontFamily: "TWK Everett, sans-serif",
              fontSize: "16px",
              color: "#3D3C3C",
              margin: "0",
              lineHeight: "1.5",
            }}
          >
            A Kyndryl Consult concierge is on the way to assist you with personalized AI solution recommendations and
            answer any questions about our use cases. In the meantime, explore our interactive demonstrations to see AI
            in action.
          </p>
        </div>
      </div>

      {/* Login button */}
      <button
        onClick={handleLogin}
        style={{
          backgroundColor: "transparent",
          border: "2px solid #3D3C3C",
          borderRadius: "4px",
          padding: "16px 24px",
          fontFamily: "TWK Everett, sans-serif",
          fontSize: "16px",
          color: "#3D3C3C",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          alignSelf: "flex-start",
          marginBottom: "auto",
        }}
      >
        Log in to explore demos
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke="#FF462D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Bottom statistics and back link */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "20px" }}>
        <div style={{ display: "flex", gap: "80px" }}>
          <div>
            <div
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontSize: "48px",
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
                fontSize: "16px",
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
                fontSize: "48px",
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
                fontSize: "16px",
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
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "TWK Everett, sans-serif",
            fontSize: "16px",
            color: "#3D3C3C",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          Back to home page
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="#3D3C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
