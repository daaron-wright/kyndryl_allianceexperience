"use client"
import { X, Search, ChevronRight } from "lucide-react"
import { useState } from "react"

interface AWSDemo {
  id: number
  title: string
  description: string
  tags: string[]
  url: string
  linkLabel?: string
}

interface AWSDemosModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AWSDemosModal({ isOpen, onClose }: AWSDemosModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 1

  if (!isOpen) return null

  const demos: AWSDemo[] = [
    {
      id: 1,
      title: "Appointment Management",
      description:
        "Use-Case: Appointment Management - Book/Cancel/Reschedule/List appointments with intelligent scheduling and automated reminders",
      tags: ["Healthcare", "Scheduling", "Automation"],
      url: "https://develop-vks.d2hmtm6qbgyxg0.amplifyapp.com",
      linkLabel: "View demo",
    },
    {
      id: 2,
      title: "Prescription Management",
      description:
        "Use-Case: Prescription Management - Get prescriptions details, track medication history, and manage dosage information",
      tags: ["Healthcare", "Prescriptions", "Medical Records"],
      url: "https://develop-vks.d2hmtm6qbgyxg0.amplifyapp.com",
      linkLabel: "View demo",
    },
    {
      id: 3,
      title: "Medication Refill Management",
      description:
        "Use-Case: Medication Refill Management - Check refill eligibility and Place Refill request with automated approval workflows",
      tags: ["Healthcare", "Refills", "Pharmacy"],
      url: "https://develop-vks.d2hmtm6qbgyxg0.amplifyapp.com",
      linkLabel: "View demo",
    },
    {
      id: 4,
      title: "General Query",
      description:
        "Use-Case: General Query - Information from available knowledgebase of the documents with AI-powered search and insights",
      tags: ["Healthcare", "Knowledge Base", "AI Search"],
      url: "https://develop-vks.d2hmtm6qbgyxg0.amplifyapp.com",
      linkLabel: "View demo",
    },
  ]

  const handleOpenLink = (url?: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  const filteredDemos = demos.filter(
    (demo) =>
      demo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      demo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      demo.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(8px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1001,
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "1600px",
          height: "900px",
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "40px 60px",
            borderBottom: "1px solid #E5E5E5",
          }}
        >
          <h1
            style={{
              fontFamily: "TWK Everett, sans-serif",
              fontSize: "48px",
              fontWeight: "400",
              color: "#FF462D",
              margin: 0,
            }}
          >
            AWS Healthcare Demos
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Search demos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "300px",
                  padding: "12px 16px 12px 40px",
                  border: "1px solid #E5E5E5",
                  borderRadius: "4px",
                  fontFamily: "TWK Everett, sans-serif",
                  fontSize: "16px",
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
                  color: "#727175",
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
              <X style={{ width: "24px", height: "24px", color: "#3D3C3C" }} />
            </button>
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            flex: 1,
            padding: "60px",
            backgroundColor: "#F2F1EE",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Demos grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "40px",
              marginBottom: "60px",
            }}
          >
            {filteredDemos.map((demo) => (
              <div
                key={demo.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "8px",
                  padding: "24px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  border: "1px solid transparent",
                }}
                onClick={() => {
                  window.open(demo.url, "_blank")
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)"
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)"
                  e.currentTarget.style.borderColor = "#FF462D"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "none"
                  e.currentTarget.style.borderColor = "transparent"
                }}
              >
                <p
                  style={{
                    fontFamily: "TWK Everett, sans-serif",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#FF462D",
                    margin: "0 0 16px 0",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  AWS Healthcare Demo
                </p>

                <h3
                  style={{
                    fontFamily: "TWK Everett, sans-serif",
                    fontSize: "24px",
                    fontWeight: "400",
                    color: "#3D3C3C",
                    lineHeight: "1.3",
                    margin: "0 0 12px 0",
                    minHeight: "62px",
                  }}
                >
                  {demo.title}
                </h3>

                <p
                  style={{
                    fontFamily: "TWK Everett, sans-serif",
                    fontSize: "16px",
                    color: "#727175",
                    lineHeight: "1.4",
                    margin: "0 0 20px 0",
                    minHeight: "88px",
                  }}
                >
                  {demo.description}
                </p>

                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "TWK Everett, sans-serif",
                    fontSize: "16px",
                    color: "#727175",
                    padding: 0,
                    marginBottom: "24px",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FF462D"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#727175"
                  }}
                >
                  Launch Demo
                  <ChevronRight style={{ width: "16px", height: "16px" }} />
                </button>

                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {demo.tags.map((tag, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: "#F2F1EE",
                        color: "#727175",
                        padding: "6px 12px",
                        borderRadius: "16px",
                        fontSize: "12px",
                        fontFamily: "TWK Everett, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mb-8">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  currentPage === page
                    ? "bg-[#FF462D] text-white border-2 border-[#FF462D]"
                    : "bg-transparent text-[#727175] border-2 border-transparent hover:text-[#FF462D]"
                }`}
                style={{
                  fontFamily: "TWK Everett, sans-serif",
                  fontSize: "18px",
                  fontWeight: currentPage === page ? "500" : "400",
                }}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "TWK Everett, sans-serif",
                fontSize: "16px",
                color: currentPage === 1 ? "#C0C0C0" : "#727175",
                opacity: currentPage === 1 ? 0.5 : 1,
              }}
            >
              <ChevronRight
                style={{
                  width: "16px",
                  height: "16px",
                  transform: "rotate(180deg)",
                }}
              />
              Previous
            </button>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "TWK Everett, sans-serif",
                fontSize: "16px",
                color: currentPage === totalPages ? "#C0C0C0" : "#727175",
                opacity: currentPage === totalPages ? 0.5 : 1,
              }}
            >
              Next
              <ChevronRight style={{ width: "16px", height: "16px" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
