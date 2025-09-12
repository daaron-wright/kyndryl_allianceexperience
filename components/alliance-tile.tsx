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
  width = "clamp(280px, 35vw, 712px)", // Made width responsive with clamp()
  height = "clamp(200px, 25vh, 710px)", // Made height responsive with clamp()
  variant = "alliance",
}: AllianceTileProps) {
  const isImageTile = !!backgroundImage

  const titleColor = backgroundColor === "#FF462D" || backgroundImage ? "#FFFFFF" : "#FF462D"
  const descriptionColor = backgroundColor === "#FF462D" || backgroundImage ? "#FFFFFF" : "#3D3C3C"
  const chevronColor = backgroundColor === "#FF462D" ? "#FFFFFF" : "#FF462D"

  const tileStyle = {
    width: typeof width === "string" ? width : `${width}px`,
    height: typeof height === "string" ? height : `${height}px`,
    backgroundColor: isImageTile ? undefined : backgroundColor,
    borderRadius: "4px",
    position: "relative" as const,
    cursor: "pointer",
    overflow: "hidden" as const,
  }

  const responsivePadding = "clamp(20px, 3vw, 40px)"
  const responsiveFontSizeTitle = "clamp(32px, 5vw, 60px)"
  const responsiveFontSizeDescription = "clamp(16px, 2.5vw, 24px)"
  const responsiveIconSize = "clamp(60px, 8vw, 90px)"

  const titleStyle = {
    fontFamily: "TWK Everett, sans-serif",
    fontWeight: 300,
    fontSize: responsiveFontSizeTitle, // Made font size responsive
    lineHeight: "1.1",
    color: titleColor,
    margin: 0,
    padding: `${responsivePadding} ${responsivePadding} clamp(10px, 1.5vw, 20px)`, // Made padding responsive
  }

  const descriptionStyle = {
    fontFamily: "TWK Everett, sans-serif",
    fontWeight: 400,
    fontSize: responsiveFontSizeDescription, // Made font size responsive
    lineHeight: "1.4",
    letterSpacing: "0.5px",
    color: descriptionColor,
    margin: 0,
    padding: `clamp(10px, 1.5vw, 20px) ${responsivePadding} clamp(30px, 4vw, 50px)`, // Made padding responsive
  }

  const iconContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: responsivePadding, // Made padding responsive
    width: `clamp(120px, 15vw, 170px)`, // Made width responsive
    height: `clamp(120px, 15vh, 170px)`, // Made height responsive
  }

  const chevronContainerStyle = {
    position: "absolute" as const,
    right: responsivePadding, // Made positioning responsive
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: responsivePadding, // Made padding responsive
    width: `clamp(60px, 8vw, 101px)`, // Made width responsive
    height: `clamp(80px, 10vh, 120px)`, // Made height responsive
  }

  return (
    <div style={tileStyle} onClick={onClick} className="group hover:shadow-lg transition-shadow">
      {variant === "alliance" ? (
        <>
          {/* Icon in top-left */}
          {icon && (
            <div
              style={{
                position: "absolute",
                top: responsivePadding, // Made positioning responsive
                left: responsivePadding, // Made positioning responsive
                width: responsiveIconSize, // Made icon size responsive
                height: responsiveIconSize, // Made icon size responsive
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
              bottom: responsivePadding, // Made positioning responsive
              left: responsivePadding, // Made positioning responsive
              right: `clamp(80px, 12vw, 100px)`, // Made spacing responsive for chevron
              zIndex: 10,
            }}
          >
            <h2
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 300,
                fontSize: responsiveFontSizeTitle, // Made font size responsive
                lineHeight: "1.1",
                color: "#FF462D",
                margin: `0 0 clamp(10px, 1.5vw, 20px) 0`, // Made margin responsive
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 400,
                fontSize: responsiveFontSizeDescription, // Made font size responsive
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
                top: responsivePadding, // Made positioning responsive
                left: responsivePadding, // Made positioning responsive
                width: responsiveIconSize, // Made icon size responsive
                height: responsiveIconSize, // Made icon size responsive
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
              left: responsivePadding, // Made positioning responsive
              top: "50%",
              transform: "translateY(-50%)",
              width: "60%",
              zIndex: 10,
            }}
          >
            <h2
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 300,
                fontSize: responsiveFontSizeTitle, // Made font size responsive
                lineHeight: "1.1",
                color: "#FFFFFF",
                margin: `0 0 clamp(10px, 1.5vw, 20px) 0`, // Made margin responsive
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 400,
                fontSize: responsiveFontSizeDescription, // Made font size responsive
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
                width: "60%",
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
                top: responsivePadding, // Made positioning responsive
                left: responsivePadding, // Made positioning responsive
                width: responsiveIconSize, // Made icon size responsive
                height: responsiveIconSize, // Made icon size responsive
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
              left: responsivePadding, // Made positioning responsive
              bottom: responsivePadding, // Made positioning responsive
              width: "60%",
              zIndex: 10,
            }}
          >
            <h2
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 300,
                fontSize: responsiveFontSizeTitle, // Made font size responsive
                lineHeight: "1.1",
                color: "#FFFFFF",
                margin: `0 0 clamp(10px, 1.5vw, 20px) 0`, // Made margin responsive
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 400,
                fontSize: responsiveFontSizeDescription, // Made font size responsive
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
                top: responsivePadding, // Made positioning responsive
                left: responsivePadding, // Made positioning responsive
                width: responsiveIconSize, // Made icon size responsive
                height: responsiveIconSize, // Made icon size responsive
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
              bottom: responsivePadding, // Made positioning responsive
              left: responsivePadding, // Made positioning responsive
              right: responsivePadding, // Made positioning responsive
              zIndex: 10,
            }}
          >
            <h2
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 300,
                fontSize: responsiveFontSizeTitle, // Made font size responsive
                lineHeight: "1.1",
                color: "#FF462D",
                margin: `0 0 clamp(10px, 1.5vw, 20px) 0`, // Made margin responsive
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 400,
                fontSize: responsiveFontSizeDescription, // Made font size responsive
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
      ) : isImageTile ? (
        <>
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

          {icon && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                ...iconContainerStyle,
              }}
            >
              <div style={{ width: responsiveIconSize, height: responsiveIconSize }}>{icon}</div>{" "}
              {/* Made icon size responsive */}
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
            <h2 style={titleStyle}>{title}</h2>
            <p style={descriptionStyle}>{description}</p>
          </div>
        </>
      ) : (
        <>
          {icon && (
            <div style={iconContainerStyle}>
              <div style={{ width: responsiveIconSize, height: responsiveIconSize }}>{icon}</div>{" "}
              {/* Made icon size responsive */}
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
            <h2 style={titleStyle}>{title}</h2>
            <p style={descriptionStyle}>{description}</p>
          </div>
        </>
      )}
    </div>
  )
}
