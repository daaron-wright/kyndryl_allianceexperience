"use client"

// AllianceHomeFixed.tsx
import * as React from "react"
import { useRouter } from "next/navigation"

/** ----- Types ----- */
type Rect = { x: number; y: number; w: number; h: number }

export interface AllianceHomeFixedProps {
  /** Start in wireframe (imagery off) */
  startWireframe?: boolean
  /** Assets (place in /public or use full URLs) */
  industryImage?: string
  marketsImage?: string
  /** Individual tile positioning - now independent */
  alliancesRect?: Rect
  industriesRect?: Rect
  capabilitiesRect?: Rect
  marketsRect?: Rect
}

/** ----- Palette ----- */
const C = {
  warmRed: "#FF462D",
  ink: "#3D3C3C",
  bg: "#F2F1EE",
  white: "#FFFFFF",
  neutral: "#6B7280",
} as const

/** ----- Component ----- */
export default function AllianceHomeFixed({
  startWireframe = false,
  industryImage = "/GettyImages-200297202-002_EDIT.png",
  marketsImage = "/AdobeStock_251246346.jpg",
  alliancesRect = { x: 4.69, y: 23.33, w: 37.09, h: 65.72 },
  industriesRect = { x: 42.81, y: 23.33, w: 22.13, h: 65.72 },
  capabilitiesRect = { x: 65.97, y: 23.33, w: 29.84, h: 31.94 },
  marketsRect = { x: 65.97, y: 56.94, w: 29.84, h: 31.94 },
}: AllianceHomeFixedProps) {
  const [wireframe, setWireframe] = React.useState(startWireframe)
  const showImagery = !wireframe
  const router = useRouter()

  return (
    <div
      className="relative w-full overflow-hidden min-h-screen"
      style={{
        aspectRatio: "16/9",
        minHeight: "100vh",
        background: C.bg,
        outline: "1px solid transparent",
        fontSize: "clamp(0.75rem, 1.5vw, 2rem)",
      }}
    >
      <div style={{ position: "absolute", left: 0, top: "5.28%", width: "100%", height: "94.72%" }} />
      <div
        style={{ position: "absolute", left: 0, top: "18.5%", width: "100%", height: "81.5%", background: "#fff" }}
      />

      <img
        className="my-3"
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29-2be0oZHKNQ1qmLsmG2Kr2aI6hpJ5dr.png"
        alt="Alliance Experience"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "5.28%",
          width: "clamp(90%, 99.88%, 100%)",
          height: "clamp(12%, 16.89%, 20%)",
          objectFit: "contain",
          maxWidth: "100vw",
        }}
      />

      <div
        className="absolute cursor-pointer z-10"
        style={{
          top: "1.5%",
          right: "0.84%",
        }}
        onClick={() => setWireframe((v) => !v)}
      >
        <svg
          className="w-auto h-auto"
          style={{
            maxWidth: "clamp(120px, 20vw, 300px)",
            maxHeight: "clamp(30px, 4.33vh, 80px)",
          }}
          viewBox="0 0 193 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="1" width="191" height="45" rx="3" stroke="#F2F1EE" strokeWidth="2" />
          <path
            d="M7.77981 17.34H17.6838V19.116H13.7638V29.5H11.6998V19.116H7.77981V17.34ZM21.2307 29.692C18.5747 29.692 16.8947 27.852 16.8947 25.18C16.8947 22.524 18.5747 20.684 21.2307 20.684C23.9027 20.684 25.5827 22.524 25.5827 25.18C25.5827 27.852 23.9027 29.692 21.2307 29.692ZM21.2307 28.284C22.7187 28.284 23.5347 27.084 23.5347 25.18C23.5347 23.292 22.7187 22.092 21.2307 22.092C19.7587 22.092 18.9267 23.292 18.9267 25.18C18.9267 27.084 19.7587 28.284 21.2307 28.284ZM33.0318 25.884V20.876H35.0318V29.5H33.0478V27.788C32.6638 28.812 31.8478 29.692 30.3598 29.692C28.3918 29.692 27.4638 28.204 27.4638 26.284V26.252V20.876H29.4638V25.884V25.916C29.4638 27.532 30.1198 28.252 31.2558 28.252C32.3918 28.252 33.0318 27.5 33.0318 25.884ZM41.3491 29.692C38.7411 29.692 37.0291 27.868 37.0291 25.18C37.0291 22.492 38.7571 20.684 41.3491 20.684C43.5571 20.684 45.0451 21.964 45.4131 23.884H43.3811C43.1571 22.892 42.5011 22.092 41.3491 22.092C39.8931 22.092 39.0611 23.292 39.0611 25.18C39.0611 27.1 39.9091 28.284 41.3491 28.284C42.4851 28.284 43.1571 27.644 43.4771 26.524H45.4931C45.0611 28.572 43.4131 29.692 41.3491 29.692ZM52.0076 20.684C53.9916 20.684 54.9356 22.156 54.9356 24.076V24.108V29.5H52.9356V24.492V24.46C52.9356 22.828 52.2476 22.108 51.1116 22.108C49.9916 22.108 49.2876 22.844 49.2876 24.492V29.5H47.2876V17.34H49.2716V22.636C49.6716 21.58 50.5196 20.684 52.0076 20.684ZM65.0458 28.012H65.9578V29.5H64.7098C63.1098 29.5 61.8778 28.716 61.8778 27.036V27.004V22.348H60.1818V20.876H61.8778V18.828H63.8778V20.876H65.9258V22.348H63.8778V26.908V26.94C63.8778 27.772 64.3098 28.012 65.0458 28.012ZM71.4463 29.692C68.7903 29.692 67.1103 27.852 67.1103 25.18C67.1103 22.524 68.7903 20.684 71.4463 20.684C74.1183 20.684 75.7983 22.524 75.7983 25.18C75.7983 27.852 74.1183 29.692 71.4463 29.692ZM71.4463 28.284C72.9343 28.284 73.7503 27.084 73.7503 25.18C73.7503 23.292 72.9343 22.092 71.4463 22.092C69.9743 22.092 69.1423 23.292 69.1423 25.18C69.1423 27.084 69.9743 28.284 71.4463 28.284ZM86.5388 20.684C88.5228 20.684 89.4668 22.156 89.4668 24.076V24.108V29.5H87.4668V24.492V24.46C87.4668 22.828 86.7788 22.108 85.6428 22.108C84.5228 22.108 83.8188 22.844 83.8188 24.492V29.5H81.8188V17.34H83.8028V22.636C84.2028 21.58 85.0508 20.684 86.5388 20.684ZM93.9106 19.548H91.8146V17.34H93.9106V19.548ZM93.8626 29.5H91.8626V20.876H93.8626V29.5ZM102.44 22.908V17.34H104.424V29.5H102.44V27.66C101.944 28.844 100.792 29.692 99.4798 29.692C97.3678 29.692 95.8638 27.804 95.8638 25.18C95.8638 22.556 97.3838 20.684 99.4798 20.684C101.048 20.684 102.056 21.756 102.44 22.908ZM100.2 28.284C101.688 28.284 102.504 27.084 102.504 25.18C102.504 23.292 101.688 22.092 100.2 22.092C98.7118 22.092 97.8958 23.292 97.8958 25.18C97.8958 27.084 98.7118 28.284 100.2 28.284ZM114.855 25.132C114.855 25.324 114.839 25.548 114.807 25.772H108.439C108.599 27.436 109.447 28.284 110.663 28.284C111.767 28.284 112.327 27.788 112.631 26.956H114.663C114.119 28.796 112.663 29.692 110.647 29.692C108.007 29.692 106.407 27.804 106.407 25.18C106.407 22.54 108.055 20.684 110.647 20.684C113.191 20.684 114.855 22.444 114.855 25.132ZM110.647 22.092C109.479 22.092 108.663 22.828 108.455 24.38H112.807C112.711 23.004 111.879 22.092 110.647 22.092ZM122.929 19.548H120.833V17.34H122.929V19.548ZM122.881 29.5H120.881V20.876H122.881V29.5ZM135.363 20.684C137.283 20.684 138.179 22.108 138.179 24.076V24.108V29.5H136.179V24.492V24.46C136.179 22.844 135.603 22.108 134.483 22.108C133.347 22.108 132.771 22.844 132.771 24.492V29.5H130.771V20.876H132.747V22.652C133.123 21.612 133.907 20.684 135.363 20.684ZM139.971 20.684C141.459 20.684 142.323 21.708 142.643 22.812C142.995 21.756 143.827 20.684 145.315 20.684C147.235 20.684 148.131 22.108 148.131 24.076V24.108V29.5H146.131V24.492V24.46C146.131 22.844 145.555 22.108 144.435 22.108C143.299 22.108 142.723 22.844 142.723 24.492V29.5H140.723V24.492V24.46C140.723 22.844 140.147 22.108 139.027 22.108C137.891 22.108 137.315 22.844 137.315 24.492V29.5H135.315V20.876H137.291V22.652C137.667 21.612 138.451 20.684 139.971 20.684ZM144.21 20.684C146.866 20.684 147.986 22.236 147.986 23.996V24.028V29.5H146.002V27.788C145.458 28.924 144.722 29.692 143.074 29.692C141.442 29.692 140.13 28.524 140.13 26.892C140.13 24.892 142.066 24.46 143.698 24.3L145.986 24.06V23.948V23.916C145.986 22.908 145.41 22.092 144.21 22.092C143.138 22.092 142.546 22.732 142.434 23.452H140.418C140.626 21.756 142.098 20.684 144.21 20.684ZM143.842 28.428C145.266 28.428 145.986 27.276 145.986 25.836V25.324L144.434 25.484C143.346 25.612 142.162 25.772 142.162 26.892C142.162 27.868 142.93 28.428 143.842 28.428ZM156.484 22.86V20.876H158.468V29.436C158.468 31.884 156.388 32.828 154.388 32.828C152.324 32.828 150.548 31.884 150.324 29.964H152.34C152.516 30.924 153.364 31.42 154.388 31.42C155.556 31.42 156.484 30.796 156.484 29.484V27.468C156.004 28.636 154.836 29.436 153.524 29.436C151.412 29.436 149.908 27.692 149.908 25.052C149.908 22.428 151.428 20.684 153.524 20.684C155.092 20.684 156.1 21.724 156.484 22.86ZM154.244 28.028C155.732 28.028 156.564 26.924 156.564 25.052C156.564 23.196 155.732 22.092 154.244 22.092C152.772 22.092 151.956 23.196 151.956 25.052C151.956 26.924 152.772 28.028 154.244 28.028ZM168.868 25.132C168.868 25.324 168.852 25.548 168.82 25.772H162.452C162.612 27.436 163.46 28.284 164.676 28.284C165.78 28.284 166.34 27.788 166.644 26.956H168.676C168.132 28.796 166.676 29.692 164.66 29.692C162.02 29.692 160.42 27.804 160.42 25.18C160.42 22.54 162.068 20.684 164.66 20.684C167.204 20.684 168.868 22.444 168.868 25.132ZM164.66 22.092C163.492 22.092 162.676 22.828 162.468 24.38H166.82C166.724 23.004 165.892 22.092 164.66 22.092ZM172.818 20.876V22.972C173.154 21.676 174.018 20.684 175.682 20.684V22.652H175.138C173.586 22.652 172.834 23.164 172.834 24.668V29.5H170.834V20.876H172.818ZM180.915 28.284L183.219 20.876H185.315L181.619 32.636H179.555L180.819 28.572H179.043L176.275 20.876H178.291L180.915 28.284Z"
            fill="#F2F1EE"
          />
        </svg>
      </div>

      {/* Cards */}
      <Tile
        rect={alliancesRect}
        title="Alliances"
        subtitle="Explore our growing ecosystem of partners"
        mode={wireframe ? "wire" : "alliances"}
        showImagery={showImagery}
        icon={<AlliancesIcon color={wireframe ? C.neutral : C.ink} />}
        titleColor={wireframe ? C.neutral : C.warmRed}
        subtitleColor={wireframe ? C.neutral : C.ink}
        arrowColor={wireframe ? C.neutral : C.warmRed}
        bgColor={undefined}
        bgImage={
          showImagery
            ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EkSK2SwWKAZo2FLoUUf9tLMzL1fvC7.png"
            : undefined
        }
        titleImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GoQWLWcFVWvB0dQgTirSAaE78TWF12.png"
        onClick={() => router.push("/alliances")}
      />

      <Tile
        rect={industriesRect}
        title="Industries"
        subtitle="Learn more about our industry expertise"
        mode={wireframe ? "wire" : "industries"}
        showImagery={showImagery}
        icon={<FactoryIcon color={wireframe ? C.neutral : C.ink} />}
        titleColor={wireframe ? C.neutral : C.warmRed}
        subtitleColor={wireframe ? C.neutral : C.ink}
        arrowColor={wireframe ? C.neutral : C.warmRed}
        bgImage={showImagery ? "/industries-architecture.png" : undefined}
        titleImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QHCuFpNfQtAnWcEI2UQ02SZFxAqtRZ.png"
        onClick={() => router.push("/industries")}
      />

      <Tile
        rect={capabilitiesRect}
        title="Capabilities"
        subtitle="Reach your business potential"
        mode={wireframe ? "wire" : "capabilities"}
        showImagery={showImagery}
        icon={<CapabilitiesIcon color={wireframe ? C.neutral : C.bg} />}
        titleColor={wireframe ? C.neutral : C.bg}
        subtitleColor={wireframe ? C.neutral : C.white}
        arrowColor={wireframe ? C.neutral : C.white}
        bgColor={undefined}
        bgImage={
          showImagery
            ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8K1Ppifm7wrXLOji4AenkUHJlMkQzx.png"
            : undefined
        }
        titleImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BrnJLUyECmk963bak0FZQb3fC1ASJw.png"
        onClick={() => {
          /* router.push("/capabilities") */
        }}
      />

      <Tile
        rect={marketsRect}
        title="Markets"
        subtitle="Discover our global reach"
        mode={wireframe ? "wire" : "markets"}
        showImagery={showImagery}
        icon={<GlobeIcon color={wireframe ? C.neutral : C.white} />}
        titleColor={wireframe ? C.neutral : C.white}
        subtitleColor={wireframe ? C.neutral : C.white}
        arrowColor={wireframe ? C.neutral : C.warmRed}
        bgColor={showImagery ? "#1a1a2e" : undefined}
        bgImage={showImagery ? marketsImage : undefined}
        overlay={showImagery ? "space" : undefined}
        titleImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K69IfVc28v4XLmmNu0acI80iWDBuJr.png"
        onClick={() => router.push("/ai-journey")}
      />

      <div
        style={{
          position: "absolute",
          left: "4.69%",
          top: "92.61%",
          width: "clamp(4%, 6.5%, 10%)",
          height: "clamp(2.5%, 3.72%, 6%)",
        }}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29-2TGXK3bwOYOQ6W7B6myCGMrLUBmRJv.png"
          alt="Kyndryl"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  )
}

/** ----- Tile ----- */
function Tile({
  rect,
  title,
  subtitle,
  icon,
  titleColor,
  subtitleColor,
  arrowColor = C.warmRed,
  bgColor,
  bgImage,
  overlay,
  showImagery = true,
  mode = "wire",
  titleImage,
  onClick,
}: {
  rect: Rect
  title: string
  subtitle?: string
  icon?: React.ReactNode
  titleColor: string
  subtitleColor: string
  arrowColor?: string
  bgColor?: string
  bgImage?: string
  overlay?: "dark" | "space"
  showImagery?: boolean
  mode?: "wire" | "alliances" | "industries" | "capabilities" | "markets"
  titleImage?: string
  onClick?: () => void
}) {
  const isTall = rect.h >= 46.28

  const iconSize = `clamp(1.5rem, ${rect.w * 0.08}vw, 8rem)`
  const titleFontSize = `clamp(1.2rem, ${rect.w * 0.12}vw, 6rem)`
  const subtitleFontSize = `clamp(0.7rem, ${rect.w * 0.025}vw, 1.8rem)`
  const padding = `clamp(0.5rem, ${rect.w * 0.04}%, 2rem)`

  return (
    <article
      role="button"
      aria-label={title}
      tabIndex={0}
      onClick={onClick}
      className="absolute rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] focus:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      style={{
        left: `${rect.x}%`,
        top: `${rect.y}%`,
        width: `${rect.w}%`,
        height: `${rect.h}%`,
        border: `1px solid ${mode === "wire" ? "#525252" : "transparent"}`,
        minWidth: "clamp(200px, 20vw, 600px)",
        minHeight: "clamp(150px, 15vh, 400px)",
      }}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && onClick) {
          e.preventDefault()
          onClick()
        }
      }}
    >
      {/* Backgrounds */}
      {bgColor && showImagery && <div style={{ position: "absolute", inset: 0, background: bgColor }} />}
      {bgImage && showImagery && mode === "markets" && (
        <div
          style={{
            position: "absolute",
            right: "-17.5%",
            top: "-14.4%",
            width: "69.9%",
            height: "116.1%",
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50%",
          }}
        />
      )}
      {bgImage && showImagery && mode === "alliances" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FA0sCvw6kul4FVr5THD13MrhLF4JNg.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      {bgImage && showImagery && mode === "industries" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      {bgImage && showImagery && mode === "capabilities" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      {overlay === "dark" && showImagery && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.45)" }} />
      )}
      {overlay === "space" && showImagery && (
        <div
          className="pr-14 pl-14 mb-8 ml-1"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25KYN_Alliance_Experience-dQ0T1sphi9vUK86agsz5Scg7aN3bGc.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* Title */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          padding: `0 ${padding}`,
          margin: 0,
          bottom: isTall ? `${rect.h * 0.12}%` : `${rect.h * 0.18}%`,
        }}
      ></div>

      {/* Arrow */}
      <div
        style={{
          position: "absolute",
          right: padding,
          bottom: isTall ? `${rect.h * 0.04}%` : `${rect.h * 0.045}%`,
        }}
      >
        <ChevronRightIcon color={arrowColor} size={`clamp(20px, ${rect.w * 0.025}vw, 60px)`} />
      </div>
    </article>
  )
}

/** ----- Icons (responsive sizing) ----- */
function AlliancesIcon({ color = C.ink, size = 270 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" stroke={color} strokeWidth="2" />
      <path
        d="M30 40 L50 30 L70 40 M30 60 L50 50 L70 60"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FactoryIcon({ color = C.ink, size = 150 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="40" width="60" height="40" stroke={color} strokeWidth="2" fill="none" />
      <rect x="30" y="20" width="20" height="20" stroke={color} strokeWidth="2" fill="none" />
      <rect x="50" y="30" width="20" height="10" stroke={color} strokeWidth="2" fill="none" />
    </svg>
  )
}

function CapabilitiesIcon({ color = C.bg, size = 150 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" stroke={color} strokeWidth="2" />
      <path d="M30 50 L45 65 L70 35" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GlobeIcon({ color = C.white, size = 90 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" stroke={color} strokeWidth="2" />
      <path d="M50 5 Q30 25 50 50 Q70 25 50 5" stroke={color} strokeWidth="2" fill="none" />
      <path d="M50 50 Q30 75 50 95 Q70 75 50 50" stroke={color} strokeWidth="2" fill="none" />
      <line x1="5" y1="50" x2="95" y2="50" stroke={color} strokeWidth="2" />
    </svg>
  )
}

function ChevronRightIcon({ color = C.warmRed, size = 90 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 5l7 7-7 7" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
