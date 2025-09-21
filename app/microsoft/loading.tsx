"use client"

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#FFFFFF",
        fontFamily: "TWK Everett, sans-serif",
      }}
    >
      <div
        style={{
          animation: "pulse 2s ease-in-out infinite",
          marginBottom: "24px",
        }}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29%281%29-lkLepdkNR4LSFBGgocVH5ur7ZRUFOs.png"
          alt="Kyndryl Alliance Experience"
          style={{
            height: "clamp(32px, 4vh, 48px)",
            width: "auto",
            objectFit: "contain",
          }}
        />
      </div>
      <div
        style={{
          fontSize: "18px",
          color: "#3D3C3C",
          fontWeight: "400",
        }}
      >
        Loading Microsoft Alliance...
      </div>
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  )
}
