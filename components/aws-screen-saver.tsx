"use client"

interface AWSScreenSaverProps {
  isOpen: boolean
  onClose: () => void
  onProceed: () => void
}

export default function AWSScreenSaver({ isOpen, onClose, onProceed }: AWSScreenSaverProps) {
  if (!isOpen) return null

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        cursor: "pointer",
      }}
      onClick={onProceed}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/%5BUse%20this%5D%20Kyndryl%20and%20AWS%20850%20alliance%20logo%20lock-up-RGB-c%281%29%281%29-CVScCYGtMWSPBIeh4B9bafBT3A0Fmr.png"
          alt="Kyndryl AWS Alliance"
          style={{
            maxWidth: "600px",
            maxHeight: "200px",
            width: "auto",
            height: "auto",
          }}
        />
      </div>

      {/* Click anywhere indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#374151",
          fontSize: "1rem",
          fontFamily: "TWK Everett, sans-serif",
          opacity: 0.7,
        }}
      >
        Click anywhere to continue
      </div>
    </div>
  )
}
