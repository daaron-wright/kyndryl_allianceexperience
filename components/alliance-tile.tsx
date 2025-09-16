"use client"
import type { ReactNode } from "react"

interface AllianceTileProps {
  title: string
  description: string
  icon?: ReactNode
  backgroundImage?: string
  backgroundColor?: string
  textColor?: string
  iconOverlay?: boolean
  onClick?: () => void
  width?: number | string
  height?: number | string
  variant?: "alliance" | "industry" | "capabilities" | "markets"
}

export function AllianceTile({
  title,
  description,
  icon,
  backgroundImage,
  backgroundColor = "#F2F1EE",
  textColor = "#3D3C3C",
  iconOverlay = false,
  onClick,
  width = "100%",
  height = "clamp(180px, 20vh + 2vw, 450px)",
  variant = "alliance",
}: AllianceTileProps) {
  const isImageTile = !!backgroundImage

  const titleColor = backgroundColor === "#FF462D" || backgroundImage ? "#FFFFFF" : "#FF462D"
  const descriptionColor = backgroundColor === "#FF462D" || backgroundImage ? "#FFFFFF" : "#3D3C3C"

  const tileStyle = {
    width: typeof width === "string" ? width : `${width}px`,
    height: typeof height === "string" ? height : `${height}px`,
    backgroundColor: isImageTile ? undefined : backgroundColor,
    borderRadius: "4px",
    position: "relative" as const,
    cursor: "pointer",
    overflow: "hidden" as const,
  }

  const responsivePadding = "clamp(12px, 2.5vw + 0.5rem, 40px)"
  const responsiveTitleSize = "clamp(18px, 3vw + 0.8rem, 52px)"
  const responsiveDescriptionSize = "clamp(12px, 1.8vw + 0.4rem, 20px)"
  const responsiveIconSize = "clamp(32px, 5vw + 1rem, 80px)"

  return (
    <div style={tileStyle} onClick={onClick} className="group hover:shadow-lg transition-shadow">
      {variant === "alliance" ? (
        <>
          {/* Icon in top-left */}
          {icon && (
            <div
              style={{
                position: "absolute",
                top: responsivePadding,
                left: responsivePadding,
                width: responsiveIconSize,
                height: responsiveIconSize,
                zIndex: 10,
              }}
            >
              {icon}
            </div>
          )}

          {/* Text content positioned at bottom */}
          <div
            style={{
              position: "absolute",
              bottom: responsivePadding,
              left: responsivePadding,
              right: "clamp(40px, 6vw + 1rem, 90px)",
              zIndex: 10,
            }}
          >
            <h2
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 300,
                fontSize: responsiveTitleSize,
                lineHeight: "1.1",
                color: "#FF462D",
                margin: `0 0 clamp(6px, 1.2vw + 0.2rem, 18px) 0`,
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 400,
                fontSize: responsiveDescriptionSize,
                lineHeight: "1.4",
                letterSpacing: "0.5px",
                color: "#3D3C3C",
                margin: 0,
              }}
            >
              {description}
            </p>
          </div>
        </>
      ) : variant === "capabilities" ? (
        <>
          {/* Icon in top-left */}
          {icon && (
            <div
              style={{
                position: "absolute",
                top: responsivePadding,
                left: responsivePadding,
                width: responsiveIconSize,
                height: responsiveIconSize,
                zIndex: 10,
              }}
            >
              {icon}
            </div>
          )}

          {/* Text content positioned in center-left */}
          <div
            style={{
              position: "absolute",
              left: responsivePadding,
              top: "50%",
              transform: "translateY(-50%)",
              width: "clamp(55%, 60% - 2vw, 65%)",
              zIndex: 10,
            }}
          >
            <h2
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 300,
                fontSize: responsiveTitleSize,
                lineHeight: "1.1",
                color: "#FFFFFF",
                margin: `0 0 clamp(6px, 1.2vw + 0.2rem, 18px) 0`,
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 400,
                fontSize: responsiveDescriptionSize,
                lineHeight: "1.4",
                letterSpacing: "0.5px",
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              {description}
            </p>
          </div>
        </>
      ) : variant === "markets" ? (
        <>
          {/* Dark background */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#1a1a1a",
              borderRadius: "4px",
            }}
          />

          {/* Earth image positioned on the right */}
          {backgroundImage && (
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "clamp(55%, 60% - 1vw, 65%)",
                height: "100%",
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center left",
                borderRadius: "0 4px 4px 0",
              }}
            />
          )}

          {/* Icon in top-left */}
          {icon && (
            <div
              style={{
                position: "absolute",
                top: responsivePadding,
                left: responsivePadding,
                width: responsiveIconSize,
                height: responsiveIconSize,
                zIndex: 10,
              }}
            >
              {icon}
            </div>
          )}

          {/* Text content positioned on the left */}
          <div
            style={{
              position: "absolute",
              left: responsivePadding,
              bottom: responsivePadding,
              width: "clamp(55%, 60% - 1vw, 65%)",
              zIndex: 10,
            }}
          >
            <h2
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 300,
                fontSize: responsiveTitleSize,
                lineHeight: "1.1",
                color: "#FFFFFF",
                margin: 0,
                padding: `${responsivePadding} ${responsivePadding} clamp(6px, 1.2vw + 0.2rem, 18px)`,
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 400,
                fontSize: responsiveDescriptionSize,
                lineHeight: "1.4",
                letterSpacing: "0.5px",
                color: "#FFFFFF",
                margin: 0,
                padding: `clamp(6px, 1.2vw + 0.2rem, 18px) ${responsivePadding} clamp(16px, 2.5vw + 0.5rem, 45px)`,
              }}
            >
              {description}
            </p>
          </div>
        </>
      ) : variant === "industry" ? (
        <>
          {/* Background image */}
          {backgroundImage && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "4px",
              }}
            />
          )}

          {/* Icon in top-left */}
          {icon && (
            <div
              style={{
                position: "absolute",
                top: responsivePadding,
                left: responsivePadding,
                width: responsiveIconSize,
                height: responsiveIconSize,
                zIndex: 10,
              }}
            >
              {icon}
            </div>
          )}

          {/* Text content positioned at bottom */}
          <div
            style={{
              position: "absolute",
              bottom: responsivePadding,
              left: responsivePadding,
              right: responsivePadding,
              zIndex: 10,
            }}
          >
            <h2
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 300,
                fontSize: responsiveTitleSize,
                lineHeight: "1.1",
                color: "#FF462D",
                margin: 0,
                padding: `${responsivePadding} ${responsivePadding} clamp(6px, 1.2vw + 0.2rem, 18px)`,
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 400,
                fontSize: responsiveDescriptionSize,
                lineHeight: "1.4",
                letterSpacing: "0.5px",
                color: "#3D3C3C",
                margin: 0,
                padding: `clamp(6px, 1.2vw + 0.2rem, 18px) ${responsivePadding} clamp(16px, 2.5vw + 0.5rem, 45px)`,
              }}
            >
              {description}
            </p>
          </div>
        </>
      ) : (
        <>
          {icon && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: responsivePadding,
                width: "clamp(70px, 10vw + 2rem, 130px)",
                height: "clamp(70px, 10vh + 1rem, 130px)",
              }}
            >
              <div style={{ width: responsiveIconSize, height: responsiveIconSize }}>{icon}</div>
            </div>
          )}

          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <h2
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 300,
                fontSize: responsiveTitleSize,
                lineHeight: "1.1",
                color: titleColor,
                margin: 0,
                padding: `${responsivePadding} ${responsivePadding} clamp(6px, 1.2vw + 0.2rem, 18px)`,
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 400,
                fontSize: responsiveDescriptionSize,
                lineHeight: "1.4",
                letterSpacing: "0.5px",
                color: descriptionColor,
                margin: 0,
                padding: `clamp(6px, 1.2vw + 0.2rem, 18px) ${responsivePadding} clamp(16px, 2.5vw + 0.5rem, 45px)`,
              }}
            >
              {description}
            </p>
          </div>
        </>
      )}
    </div>
  )
}
