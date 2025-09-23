"use client"

interface MicrosoftScreenSaverProps {
  isOpen: boolean
  onClose: () => void
  onProceed: () => void
}

export default function MicrosoftScreenSaver({ isOpen, onClose, onProceed }: MicrosoftScreenSaverProps) {
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
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/Kyndryl-Microsoft-alliance-logo-lock-up%281%29%281%29%281%29%281%29%281%29%281%29-7lOCTDz2UaLl8H6ukQJiOTTIP7gGe9.png"
          alt="Kyndryl Microsoft Alliance"
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
          color: "#4B5563",
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
