"use client"
import { Search, X, ChevronRight, ChevronLeft } from "lucide-react"
import { useState } from "react"

interface CaseStudiesModalProps {
  onClose: () => void
}

interface DetailedCaseStudyModalProps {
  caseStudy: any
  onClose: () => void
}

function DetailedCaseStudyModal({ caseStudy, onClose }: DetailedCaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState("Challenge")

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 1001,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "1600px",
          height: "900px",
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4)",
        }}
      >
        {/* Header */}
        <header style={{ padding: "40px 60px", borderBottom: "1px solid #E5E5E5" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontSize: "48px",
                fontWeight: "300",
                color: "#FF462D",
                margin: 0,
              }}
            >
              Feature
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
              {/* Search */}
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
                <X style={{ width: "32px", height: "32px", color: "#3D3C3C" }} />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main style={{ padding: "60px", backgroundColor: "#F2F1EE", height: "calc(900px - 320px)", overflow: "auto" }}>
          <div style={{ display: "flex", gap: "60px", height: "100%" }}>
            {/* Left Content */}
            <div style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h2
                style={{
                  fontFamily: "TWK Everett, sans-serif",
                  fontSize: "48px",
                  fontWeight: "300",
                  color: "#3D3C3C",
                  lineHeight: "1.2",
                  margin: "0 0 40px 0",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </h2>

              <div style={{ marginBottom: "40px" }}>
                <p
                  style={{
                    fontFamily: "TWK Everett, sans-serif",
                    fontSize: "18px",
                    color: "#3D3C3C",
                    lineHeight: "1.6",
                    margin: "0 0 24px 0",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>

                <p
                  style={{
                    fontFamily: "TWK Everett, sans-serif",
                    fontSize: "18px",
                    color: "#3D3C3C",
                    lineHeight: "1.6",
                    margin: "0",
                  }}
                >
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div style={{ flex: "1", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src={caseStudy.image || "/placeholder.svg"}
                alt="Case study hero"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>
        </main>

        {/* Bottom Navigation */}
        <div style={{ padding: "0 60px 40px", backgroundColor: "#F2F1EE" }}>
          {/* Tabs */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
            {["Opportunity", "Challenge", "Solution", "Outcome"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: "none",
                  border: activeTab === tab ? "2px solid #FF462D" : "2px solid transparent",
                  cursor: "pointer",
                  fontFamily: "TWK Everett, sans-serif",
                  fontSize: "18px",
                  color: activeTab === tab ? "#FF462D" : "#727175",
                  fontWeight: activeTab === tab ? "600" : "400",
                  padding: "12px 40px",
                  borderRadius: "4px",
                  backgroundColor: activeTab === tab ? "#FFFFFF" : "transparent",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Previous/Next Navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
              <ChevronLeft style={{ width: "20px", height: "20px" }} />
              Previous
            </button>

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
        </div>
      </div>
    </div>
  )
}

export default function CaseStudiesModal({ onClose }: CaseStudiesModalProps) {
  const [currentPage, setCurrentPage] = useState(2)
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any>(null)

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

  const handleCaseStudyClick = (caseStudy: any) => {
    setSelectedCaseStudy(caseStudy)
  }

  return (
    <>
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
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
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
                  fontWeight: "300",
                  color: "#FF462D",
                  margin: 0,
                }}
              >
                Customer Stories - Case studies
              </h1>

              <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
                {/* Search */}
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
                  <X style={{ width: "32px", height: "32px", color: "#3D3C3C" }} />
                </button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main
            style={{ padding: "60px", backgroundColor: "#F2F1EE", height: "calc(900px - 200px)", overflow: "auto" }}
          >
            {/* Case Studies Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "60px" }}>
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  onClick={() => handleCaseStudyClick(study)}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)"
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)"
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
                        fontSize: "20px",
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
                        fontSize: "16px",
                        color: "#727175",
                        lineHeight: "1.4",
                        margin: "0 0 16px 0",
                      }}
                    >
                      {study.description}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <a
                        href="#"
                        style={{
                          fontFamily: "TWK Everett, sans-serif",
                          fontSize: "16px",
                          color: "#FF462D",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        Learn more
                        <ChevronRight style={{ width: "16px", height: "16px" }} />
                      </a>
                    </div>
                    <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
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
                <ChevronLeft style={{ width: "20px", height: "20px" }} />
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

      {selectedCaseStudy && (
        <DetailedCaseStudyModal caseStudy={selectedCaseStudy} onClose={() => setSelectedCaseStudy(null)} />
      )}
    </>
  )
}
