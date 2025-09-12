"use client"
import { Search, ChevronRight, X, Play } from "lucide-react"
import { useState } from "react"

interface VideosModalProps {
  onClose: () => void
}

export default function VideosModal({ onClose }: VideosModalProps) {
  const [currentPage, setCurrentPage] = useState(2)

  const videos = [
    {
      id: 1,
      title: "to become a sustainability leader?",
      alliance: "Alliance / customer name",
      contentTitle: "Content title utenim ad minim veniam, quis nostrud exercitation",
      description: "Content title utenim ad minim veniam, quis nostrud exercitation",
      thumbnail: "/video-thumbnail-1.png",
      duration: "1:25",
      featured: true,
      tags: ["Meta tag", "Meta tag", "Meta tag"],
    },
    {
      id: 2,
      title: "experiences",
      alliance: "Alliance / customer name",
      contentTitle: "Content title utenim ad minim veniam, quis nostrud exercitation",
      description: "Content title utenim ad minim veniam, quis nostrud exercitation",
      thumbnail: "/video-thumbnail-2.png",
      duration: "1:35",
      featured: false,
      tags: ["Meta tag", "Meta tag", "Meta tag"],
    },
    {
      id: 3,
      title: "Drive faster insights",
      alliance: "Alliance / customer name",
      contentTitle: "Content title utenim ad minim veniam, quis nostrud exercitation",
      description: "Content title utenim ad minim veniam, quis nostrud exercitation",
      thumbnail: "/video-thumbnail-3.png",
      duration: "1:11",
      featured: false,
      tags: ["Meta tag", "Meta tag", "Meta tag"],
    },
    {
      id: 4,
      title: "to become a sustainability leader?",
      alliance: "Alliance / customer name",
      contentTitle: "Content title utenim ad minim veniam, quis nostrud exercitation",
      description: "Content title utenim ad minim veniam, quis nostrud exercitation",
      thumbnail: "/video-thumbnail-4.png",
      duration: "1:25",
      featured: true,
      tags: ["Meta tag", "Meta tag", "Meta tag"],
    },
  ]

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "1600px",
          height: "900px",
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          position: "absolute",
          top: "90px",
          left: "90px",
        }}
      >
        {/* Header */}
        <header style={{ padding: "40px 60px", borderBottom: "1px solid #E5E5E5" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontSize: "48px",
                fontWeight: 300,
                color: "#FF462D",
                margin: 0,
              }}
            >
              Customer Stories - Videos
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  placeholder="Search"
                  style={{
                    width: "300px",
                    padding: "12px 16px 12px 40px",
                    border: "1px solid #E5E5E5",
                    borderRadius: "4px",
                    fontFamily: "TWK Everett, sans-serif",
                    fontSize: "16px",
                    backgroundColor: "#FFFFFF",
                  }}
                />
                <Search
                  style={{
                    position: "absolute",
                    left: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "20px",
                    height: "20px",
                    color: "#9E9287",
                  }}
                />
              </div>

              <button
                onClick={onClose}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px",
                }}
              >
                <X style={{ width: "32px", height: "32px", color: "#3D3C3C" }} />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main style={{ padding: "60px", backgroundColor: "#F2F1EE", height: "calc(900px - 200px)", overflow: "auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "40px",
              marginBottom: "60px",
            }}
          >
            {videos.map((video) => (
              <div
                key={video.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                }}
              >
                <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />

                  {/* Play button overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "80px",
                      height: "80px",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Play style={{ width: "32px", height: "32px", color: "#FFFFFF", marginLeft: "4px" }} />
                  </div>

                  {/* Duration */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "16px",
                      right: "16px",
                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                      color: "#FFFFFF",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontFamily: "TWK Everett, sans-serif",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {video.duration}
                  </div>

                  {/* Video title overlay */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "60px",
                      left: "24px",
                      right: "24px",
                      color: "#FFFFFF",
                      fontFamily: "TWK Everett, sans-serif",
                      fontSize: "32px",
                      fontWeight: "600",
                      textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    {video.title}
                  </div>

                  {video.featured && (
                    <div
                      style={{
                        position: "absolute",
                        top: "16px",
                        left: "16px",
                        backgroundColor: "#FF462D",
                        color: "#FFFFFF",
                        padding: "4px 12px",
                        borderRadius: "4px",
                        fontFamily: "TWK Everett, sans-serif",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Featured
                    </div>
                  )}
                </div>

                <div style={{ padding: "24px" }}>
                  <p
                    style={{
                      fontFamily: "TWK Everett, sans-serif",
                      fontSize: "16px",
                      color: "#FF462D",
                      margin: "0 0 12px 0",
                      fontWeight: "500",
                    }}
                  >
                    {video.alliance}
                  </p>

                  <h3
                    style={{
                      fontFamily: "TWK Everett, sans-serif",
                      fontSize: "24px",
                      fontWeight: "600",
                      color: "#3D3C3C",
                      margin: "0 0 12px 0",
                      lineHeight: "1.3",
                    }}
                  >
                    {video.contentTitle}
                  </h3>

                  <p
                    style={{
                      fontFamily: "TWK Everett, sans-serif",
                      fontSize: "16px",
                      color: "#727175",
                      margin: "0 0 24px 0",
                      lineHeight: "1.4",
                    }}
                  >
                    {video.description}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <a
                      href="#"
                      style={{
                        fontFamily: "TWK Everett, sans-serif",
                        fontSize: "16px",
                        color: "#FF462D",
                        textDecoration: "none",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      Learn more
                      <ChevronRight style={{ width: "16px", height: "16px" }} />
                    </a>
                  </div>

                  <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
                    {video.tags.map((tag, index) => (
                      <span
                        key={index}
                        style={{
                          backgroundColor: "#F2F1EE",
                          color: "#727175",
                          padding: "6px 12px",
                          borderRadius: "16px",
                          fontFamily: "TWK Everett, sans-serif",
                          fontSize: "14px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "40px" }}>
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "TWK Everett, sans-serif",
                fontSize: "16px",
                color: "#3D3C3C",
              }}
            >
              <ChevronRight style={{ width: "20px", height: "20px", transform: "rotate(180deg)" }} />
              Previous
            </button>

            <div style={{ display: "flex", gap: "16px" }}>
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  style={{
                    background: "none",
                    border: currentPage === page ? "2px solid #FF462D" : "2px solid transparent",
                    cursor: "pointer",
                    fontFamily: "TWK Everett, sans-serif",
                    fontSize: "18px",
                    color: currentPage === page ? "#FF462D" : "#727175",
                    fontWeight: currentPage === page ? "600" : "400",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    backgroundColor: currentPage === page ? "#FFFFFF" : "transparent",
                  }}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "TWK Everett, sans-serif",
                fontSize: "16px",
                color: "#3D3C3C",
              }}
            >
              Next
              <ChevronRight style={{ width: "20px", height: "20px" }} />
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}
