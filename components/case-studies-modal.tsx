"use client"

import { useState } from "react"
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react"

interface CaseStudiesModalProps {
  onClose: () => void
}

export default function CaseStudiesModal({ onClose }: CaseStudiesModalProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(2) // Default to page 2 as shown in design

  const caseStudies = [
    {
      id: 1,
      image: "/grocery-shopping-scene.png",
      featured: false,
      alliance: "Alliance / customer name",
      title: "Content title utenim ad minim veniam, quis nostrud exercitation",
      description: "Content title utenim ad minim veniam, quis nostrud exercitation",
      tags: ["Meta tag", "Meta tag", "Meta tag"],
    },
    {
      id: 2,
      image: "/construction-site-overview.png",
      featured: true,
      alliance: "Alliance / customer name",
      title: "Content title utenim ad minim veniam, quis nostrud exercitation",
      description: "Content title utenim ad minim veniam, quis nostrud exercitation",
      tags: ["Meta tag", "Meta tag", "Meta tag"],
    },
    {
      id: 3,
      image: "/sheep-livestock.png",
      featured: true,
      alliance: "Alliance / customer name",
      title: "Content title utenim ad minim veniam, quis nostrud exercitation",
      description: "Content title utenim ad minim veniam, quis nostrud exercitation",
      tags: ["Meta tag", "Meta tag", "Meta tag"],
    },
    {
      id: 4,
      image: "/dining-food-scene.png",
      featured: false,
      alliance: "Alliance / customer name",
      title: "Content title utenim ad minim veniam, quis nostrud exercitation",
      description: "Content title utenim ad minim veniam, quis nostrud exercitation",
      tags: ["Meta tag", "Meta tag", "Meta tag"],
    },
  ]

  const filteredCaseStudies = caseStudies.filter(
    (study) =>
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.alliance.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "1400px",
          height: "800px",
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <header style={{ padding: "32px 48px", borderBottom: "1px solid #E5E5E5", backgroundColor: "#FFFFFF" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontSize: "32px",
                fontWeight: "400",
                color: "#FF462D",
                margin: 0,
              }}
            >
              Customer Stories - Case studies
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              {/* Search */}
              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: "280px",
                    padding: "12px 16px 12px 40px",
                    border: "1px solid #E5E5E5",
                    borderRadius: "4px",
                    fontFamily: "TWK Everett, sans-serif",
                    fontSize: "16px",
                    backgroundColor: "#FFFFFF",
                    outline: "none",
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

              {/* Close button */}
              <button
                onClick={onClose}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px",
                }}
              >
                <X style={{ width: "24px", height: "24px", color: "#3D3C3C" }} />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main
          style={{
            flex: 1,
            padding: "48px",
            backgroundColor: "#F2F1EE",
            overflow: "auto",
          }}
        >
          {/* Case Studies Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
              marginBottom: "48px",
              maxWidth: "1200px",
              margin: "0 auto 48px auto",
            }}
          >
            {filteredCaseStudies.map((study) => (
              <div
                key={study.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)"
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.15)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)"
                }}
              >
                <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  {study.featured && (
                    <div
                      style={{
                        position: "absolute",
                        top: "16px",
                        left: "16px",
                        backgroundColor: "#FF462D",
                        color: "#FFFFFF",
                        padding: "6px 12px",
                        borderRadius: "4px",
                        fontFamily: "TWK Everett, sans-serif",
                        fontSize: "12px",
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
                      fontSize: "14px",
                      color: "#FF462D",
                      margin: "0 0 8px 0",
                      fontWeight: "500",
                    }}
                  >
                    {study.alliance}
                  </p>
                  <h3
                    style={{
                      fontFamily: "TWK Everett, sans-serif",
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "#3D3C3C",
                      lineHeight: "1.3",
                      margin: "0 0 12px 0",
                    }}
                  >
                    {study.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "TWK Everett, sans-serif",
                      fontSize: "14px",
                      color: "#727175",
                      lineHeight: "1.4",
                      margin: "0 0 16px 0",
                    }}
                  >
                    {study.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "16px",
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        fontFamily: "TWK Everett, sans-serif",
                        fontSize: "14px",
                        color: "#3D3C3C",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        fontWeight: "500",
                      }}
                    >
                      Learn more
                      <ChevronRight style={{ width: "14px", height: "14px" }} />
                    </a>
                  </div>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {study.tags.map((tag, index) => (
                      <span
                        key={index}
                        style={{
                          backgroundColor: "#F2F1EE",
                          color: "#727175",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          fontFamily: "TWK Everett, sans-serif",
                          fontSize: "12px",
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "32px",
              marginBottom: "32px",
            }}
          >
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "TWK Everett, sans-serif",
                  fontSize: "18px",
                  color: currentPage === page ? "#FF462D" : "#9E9287",
                  fontWeight: currentPage === page ? "600" : "400",
                  padding: "8px 12px",
                  position: "relative",
                }}
              >
                {page}
                {currentPage === page && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-8px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "24px",
                      height: "3px",
                      backgroundColor: "#FF462D",
                      borderRadius: "2px",
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </main>

        {/* Footer Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px 48px",
            backgroundColor: "#F2F1EE",
            borderTop: "1px solid #E5E5E5",
          }}
        >
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            style={{
              background: "none",
              border: "none",
              cursor: currentPage === 1 ? "default" : "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "TWK Everett, sans-serif",
              fontSize: "16px",
              color: currentPage === 1 ? "#9E9287" : "#3D3C3C",
            }}
          >
            <ChevronLeft style={{ width: "20px", height: "20px" }} />
            Previous
          </button>

          <button
            onClick={() => setCurrentPage(Math.min(4, currentPage + 1))}
            disabled={currentPage === 4}
            style={{
              background: "none",
              border: "none",
              cursor: currentPage === 4 ? "default" : "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "TWK Everett, sans-serif",
              fontSize: "16px",
              color: currentPage === 4 ? "#9E9287" : "#3D3C3C",
            }}
          >
            Next
            <ChevronRight style={{ width: "20px", height: "20px" }} />
          </button>
        </div>
      </div>
    </div>
  )
}
