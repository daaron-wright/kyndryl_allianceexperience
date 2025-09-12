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
        padding: 24,
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
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: 32,
          maxWidth: 2360, // gives breathing room on large displays
        }}
      >
        {/* Alliances */}
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

        {/* Industries */}
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
  const W = 560
  const H = isTall ? 540 : 345

  return (
    <article
      role="button"
      aria-label={title}
      tabIndex={0}
      style={{
        position: "relative",
        width: W,
        height: H,
        borderRadius: 8,
        overflow: "hidden",
        border: `1px solid ${wireframe ? "#525252" : "transparent"}`,
        boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
        outline: "none",
      }}
    >
      {/* Background */}
      {bgColor && showImagery && <div style={{ position: "absolute", inset: 0, background: bgColor }} />}
      {bgImage && showImagery && (
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
      {overlay && showImagery && <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.45)" }} />}

      {/* Icon */}
      <div
        style={{
          position: "absolute",
          left: 24,
          top: 24,
          width: 90,
          height: 90,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-hidden
      >
        {icon}
      </div>

      {/* Title */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          padding: "0 40px",
          bottom: isTall ? 88 : 118,
        }}
      >
        <h3
          style={{
            margin: 0,
            fontWeight: 300,
            fontSize: 56,
            lineHeight: "56px",
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
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            padding: "0 40px",
            margin: 0,
            bottom: isTall ? 32 : 40,
            fontSize: 18,
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
        style={{
          position: "absolute",
          right: 24,
          bottom: isTall ? 32 : 28,
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
    <svg viewBox="0 0 96 96" width={90} height={90} fill="none" stroke={color} strokeWidth={3.5}>
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
    <svg viewBox="0 0 96 96" width={90} height={90} fill="none" stroke={color} strokeWidth={3.5}>
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
    <svg viewBox="0 0 96 96" width={90} height={90} fill="none" stroke={color} strokeWidth={3.5}>
      <circle cx="48" cy="48" r="32" />
      <path d="M32 50l12 12 22-26" />
    </svg>
  )
}

function GlobeIcon({ color = COLORS.white }: { color?: string }) {
  return (
    <svg viewBox="0 0 96 96" width={90} height={90} fill="none" stroke={color} strokeWidth={3.5}>
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
