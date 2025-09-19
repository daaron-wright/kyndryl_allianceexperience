"use client"

import { X } from "lucide-react"

interface GoogleCloudFocusModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function GoogleCloudFocusModal({ isOpen, onClose }: GoogleCloudFocusModalProps) {
  if (!isOpen) return null

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "2rem",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          maxWidth: "1200px",
          width: "100%",
          maxHeight: "90vh",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "rgba(255, 255, 255, 0.9)",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 10,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
          }}
        >
          <X size={20} color="#3D3C3C" />
        </button>

        {/* Hero Image */}
        <div
          style={{
            width: "100%",
            height: "400px",
            backgroundImage: "url(/kyndryl-google-cloud-landing.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        />

        {/* Content Section */}
        <div
          style={{
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <h2
            className="text-left my-0 py-0 px-7 mx-[235px]"
            style={{
              fontSize: "2rem",
              fontFamily: "TWK Everett, sans-serif",
              fontWeight: 300,
              color: "#3D3C3C",
              marginBottom: "1rem",
              lineHeight: "1.2",
            }}
          >
            {"Our partnership\n"}
          </h2>

          <p
            className="text-left"
            style={{
              fontSize: "1.125rem",
              fontFamily: "TWK Everett, sans-serif",
              color: "#727175",
              marginBottom: "2rem",
              lineHeight: "1.6",
              maxWidth: "600px",
              margin: "0 auto 2rem auto",
            }}
          >
            Unlock the full potential of your enterprise by combining Kyndryl’s trusted expertise and operational
            excellence with Google Cloud’s cutting-edge agentic AI and generative AI capabilities and industry-defining
            innovation. This partnership empowers enterprises with future ready solutions that help drive modernization
            and innovation.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => {
                onClose()
                window.location.href = "/google-cloud"
              }}
              style={{
                backgroundColor: "#FF462D",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "4px",
                padding: "0.75rem 2rem",
                fontSize: "1rem",
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#E63E2A"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FF462D"
              }}
            >
              Explore Google Cloud Customer Stories
            </button>

            <button
              onClick={() => {
                onClose()
                window.location.href = "/alliances"
              }}
              style={{
                backgroundColor: "transparent",
                color: "#3D3C3C",
                border: "2px solid #E5E5E5",
                borderRadius: "4px",
                padding: "0.75rem 2rem",
                fontSize: "1rem",
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#FF462D"
                e.currentTarget.style.color = "#FF462D"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E5E5E5"
                e.currentTarget.style.color = "#3D3C3C"
              }}
            >
              Back to Alliances
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
