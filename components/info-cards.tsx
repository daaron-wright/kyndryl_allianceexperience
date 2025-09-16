"use client"

// InfoCards.tsx
import * as React from "react"

type Size = "tall" | "short"
type Overlay = "dark" | undefined

type CardProps = {
  title: string
  subtitle?: string
  size?: Size
  /** Solid background color when imagery is on */
  bgColor?: string
  /** Background image URL (from /public or remote) when imagery is on */
  bgImage?: string
  /** Optional dark overlay for readability on photos */
  overlay?: Overlay
  /** Icon element (90×90) */
  icon?: React.ReactNode
  /** Colors */
  titleColor?: string
  subtitleColor?: string
  arrowColor?: string
  /** Global toggles (passed from parent) */
  showImagery?: boolean
  wireframe?: boolean
}

export interface InfoCardsProps {
  /** Start in wireframe mode (imagery hidden) */
  startWireframe?: boolean
  /** Defaults assume these live in /public */
  industryImage?: string
  marketsImage?: string
}

const COLORS = {
  warmRed: "#FF462D",
  ink: "#3D3C3C",
  bg: "#F2F1EE",
  white: "#FFFFFF",
  neutral: "#6B7280",
} as const

export default function InfoCards({
  startWireframe = false,
  industryImage = "/GettyImages-200297202-002_EDIT.png",
  marketsImage = "/AdobeStock_251246346.jpg",
}: InfoCardsProps) {
  const [wireframe, setWireframe] = React.useState<boolean>(startWireframe)
  const imageryOn = !wireframe

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "clamp(16px, 3vw, 24px)",
        boxSizing: "border-box",
      }}
    >
      {/* Toggle */}
      <div
        style={{
          position: "fixed",
          top: 16,
          right: 16,
          zIndex: 10,
          background: "rgba(24,24,27,.85)",
          border: "1px solid #3f3f46",
          borderRadius: 10,
          padding: "8px 10px",
          color: "#e5e7eb",
          display: "flex",
          alignItems: "center",
          gap: 8,
          backdropFilter: "blur(6px)",
          fontSize: 14,
        }}
      >
        <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
          <input
            type="checkbox"
            checked={wireframe}
            onChange={() => setWireframe((v) => !v)}
            aria-label="Wireframe mode (hide imagery)"
          />
          Wireframe (hide imagery)
        </label>
      </div>

      {/* Grid */}
      <div
        className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl w-full"
        style={{
          gridTemplateRows: "repeat(2, minmax(300px, 1fr))",
        }}
      >
        {/* Alliances */}
        <div className="lg:row-span-2">
          <Card
            title="Alliances"
            subtitle="Explore our growing ecosystem of partners"
            size="tall"
            bgColor={imageryOn ? COLORS.bg : undefined}
            titleColor={wireframe ? COLORS.neutral : COLORS.warmRed}
            subtitleColor={wireframe ? COLORS.neutral : COLORS.ink}
            arrowColor={wireframe ? COLORS.neutral : COLORS.warmRed}
            icon={<AlliancesIcon color={wireframe ? COLORS.neutral : COLORS.ink} />}
            showImagery={imageryOn}
            wireframe={wireframe}
          />
        </div>

        {/* Industries */}
        <div className="lg:row-span-2">
          <Card
            title="Industries"
            subtitle="Learn more about our industry expertice"
            size="tall"
            bgImage={imageryOn ? industryImage : undefined}
            titleColor={wireframe ? COLORS.neutral : COLORS.warmRed}
            subtitleColor={wireframe ? COLORS.neutral : COLORS.ink}
            arrowColor={wireframe ? COLORS.neutral : COLORS.warmRed}
            icon={<FactoryIcon color={wireframe ? COLORS.neutral : COLORS.ink} />}
            showImagery={imageryOn}
            wireframe={wireframe}
          />
        </div>

        {/* Capabilities */}
        <Card
          title="Capabilites"
          subtitle="Reach your business potential"
          size="short"
          bgColor={imageryOn ? COLORS.warmRed : undefined}
          titleColor={wireframe ? COLORS.neutral : COLORS.bg}
          subtitleColor={wireframe ? COLORS.neutral : COLORS.white}
          arrowColor={wireframe ? COLORS.neutral : COLORS.white}
          icon={<CheckIcon color={wireframe ? COLORS.neutral : COLORS.bg} />}
          showImagery={imageryOn}
          wireframe={wireframe}
        />

        {/* Markets */}
        <Card
          title="Markets"
          subtitle="Discover our global reach"
          size="short"
          bgImage={imageryOn ? marketsImage : undefined}
          overlay={imageryOn ? "dark" : undefined}
          titleColor={wireframe ? COLORS.neutral : COLORS.white}
          subtitleColor={wireframe ? COLORS.neutral : COLORS.white}
          arrowColor={wireframe ? COLORS.neutral : COLORS.warmRed}
          icon={<GlobeIcon color={wireframe ? COLORS.neutral : COLORS.white} />}
          showImagery={imageryOn}
          wireframe={wireframe}
        />
      </div>
    </div>
  )
}

/* ---------- Card ---------- */

function Card({
  title,
  subtitle,
  size = "tall",
  bgColor,
  bgImage,
  overlay,
  icon,
  titleColor = "#000000",
  subtitleColor = "#3D3C3C",
  arrowColor = COLORS.warmRed,
  showImagery = true,
  wireframe = false,
}: CardProps) {
  const isTall = size === "tall"

  return (
    <article
      role="button"
      aria-label={title}
      tabIndex={0}
      className="relative w-full h-full min-h-[300px] rounded-lg overflow-hidden border border-transparent hover:shadow-lg transition-shadow outline-none"
      style={{
        border: `1px solid ${wireframe ? "#525252" : "transparent"}`,
        boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
      }}
    >
      {/* Background */}
      {bgColor && showImagery && <div className="absolute inset-0" style={{ background: bgColor }} />}
      {bgImage && showImagery && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        />
      )}
      {overlay && showImagery && <div className="absolute inset-0 bg-black/45" />}

      {/* Icon */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          left: "clamp(16px, 3vw, 24px)",
          top: "clamp(16px, 3vw, 24px)",
          width: "clamp(60px, 8vw, 90px)",
          height: "clamp(60px, 8vw, 90px)",
        }}
        aria-hidden
      >
        {icon}
      </div>

      {/* Title */}
      <div
        className="absolute left-0 right-0"
        style={{
          padding: "0 clamp(24px, 4vw, 40px)",
          bottom: isTall ? "clamp(60px, 8vh, 88px)" : "clamp(80px, 10vh, 118px)",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontWeight: 300,
            fontSize: "clamp(32px, 5vw, 56px)",
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            color: titleColor,
          }}
        >
          {title}
        </h3>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p
          className="absolute left-0 right-0 m-0"
          style={{
            padding: "0 clamp(24px, 4vw, 40px)",
            bottom: isTall ? "clamp(24px, 3vh, 32px)" : "clamp(32px, 4vh, 40px)",
            fontSize: "clamp(14px, 2vw, 18px)",
            lineHeight: 1.6,
            letterSpacing: "0.02em",
            color: subtitleColor,
          }}
        >
          {subtitle}
        </p>
      )}

      {/* Caret */}
      <div
        className="absolute"
        style={{
          right: "clamp(16px, 3vw, 24px)",
          bottom: isTall ? "clamp(24px, 3vh, 32px)" : "clamp(20px, 3vh, 28px)",
        }}
        aria-hidden
      >
        <ArrowRight color={arrowColor} />
      </div>
    </article>
  )
}

/* ---------- Icons (90×90 viewBox) ---------- */

function AlliancesIcon({ color = COLORS.ink }: { color?: string }) {
  return (
    <svg viewBox="0 0 96 96" width="100%" height="100%" fill="none" stroke={color} strokeWidth={3.5}>
      <circle cx="24" cy="24" r="10" />
      <circle cx="72" cy="24" r="10" />
      <circle cx="24" cy="72" r="10" />
      <circle cx="72" cy="72" r="10" />
      <path d="M34 24h28M24 34v28M62 72H34M72 34v28" />
      <circle cx="48" cy="48" r="8" />
    </svg>
  )
}

function FactoryIcon({ color = COLORS.ink }: { color?: string }) {
  return (
    <svg viewBox="0 0 96 96" width="100%" height="100%" fill="none" stroke={color} strokeWidth={3.5}>
      <rect x="10" y="50" width="76" height="28" rx="2" />
      <path d="M10 50l24-16v16l24-16v16" />
      <rect x="20" y="58" width="10" height="10" />
      <rect x="36" y="58" width="10" height="10" />
      <rect x="52" y="58" width="10" height="10" />
    </svg>
  )
}

function CheckIcon({ color = COLORS.bg }: { color?: string }) {
  return (
    <svg viewBox="0 0 96 96" width="100%" height="100%" fill="none" stroke={color} strokeWidth={3.5}>
      <circle cx="48" cy="48" r="32" />
      <path d="M32 50l12 12 22-26" />
    </svg>
  )
}

function GlobeIcon({ color = COLORS.white }: { color?: string }) {
  return (
    <svg viewBox="0 0 96 96" width="100%" height="100%" fill="none" stroke={color} strokeWidth={3.5}>
      <circle cx="48" cy="48" r="30" />
      <path d="M18 56c8-2 16 6 24 0s20-3 36 0M30 24c8 12 8 36 0 48M66 24c-8 12-8 36 0 48M18 40c16-4 22-2 30 0s14 2 30 0" />
    </svg>
  )
}

function ArrowRight({ color = COLORS.warmRed }: { color?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={28}
      height={28}
      fill="none"
      stroke={color}
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 4l10 8-10 8" />
    </svg>
  )
}
