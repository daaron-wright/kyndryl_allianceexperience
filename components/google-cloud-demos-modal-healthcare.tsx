"use client"
import { X, ChevronRight } from "lucide-react"
import { useState } from "react"

interface GoogleCloudDemosModalHealthcareProps {
  isOpen: boolean
  onClose: () => void
}

export default function GoogleCloudDemosModalHealthcare({ isOpen, onClose }: GoogleCloudDemosModalHealthcareProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  if (!isOpen) return null

  const demoCards = [
    {
      title: "Appointment Management - Book/Cancel/Reschedule/List",
      description: "Streamline patient scheduling with intelligent appointment management",
      tags: ["Healthcare", "Scheduling", "Patient Care"],
      credentials: "abilasha11 / Abi@lex11",
    },
    {
      title: "Prescription Management - Get prescriptions details",
      description: "Comprehensive prescription tracking and management system",
      tags: ["Pharmacy", "Medication", "Healthcare"],
      credentials: "aloksharma1 / Alok@12345",
    },
    {
      title: "Medication Refill Management - Check refill eligibility and Place Refill request",
      description: "Automated medication refill processing and eligibility verification",
      tags: ["Refills", "Pharmacy", "Automation"],
      credentials: "abilasha11 / Abi@lex11",
    },
    {
      title: "General Query - Information from available knowledgebase of the documents",
      description: "AI-powered healthcare information retrieval and support",
      tags: ["AI Assistant", "Knowledge Base", "Support"],
      credentials: "aloksharma1 / Alok@12345",
    },
  ]

  const currentItems = demoCards.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
  const totalPages = Math.ceil(demoCards.length / itemsPerPage)

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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "40px 60px" }}>
          <h1
            style={{
              fontFamily: "TWK Everett, sans-serif",
              fontSize: "48px",
              fontWeight: "400",
              color: "#FF462D",
              margin: 0,
            }}
          >
            Google Cloud Healthcare Demos
          </h1>
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

        {/* Main content */}
        <div className="flex-1 bg-[#F2F1EE] px-16 py-16 overflow-y-auto min-h-0">
          <div className="grid grid-cols-4 gap-10 mb-16">
            {currentItems.map((demo, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => {
                  window.open("https://develop-vks.d2hmtm6qbgyxg0.amplifyapp.com", "_blank")
                }}
              >
                {/* Demo label */}
                <div className="text-[#FF462D] text-sm font-medium mb-4 uppercase tracking-wide">Google Cloud Demo</div>

                {/* Healthcare interface image */}
                <div className="mb-6">
                  <img
                    src="/healthcare-interface.png"
                    alt="Healthcare AI Interface"
                    className="w-full h-32 object-cover rounded-md"
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-[#3D3C3C] text-xl font-normal mb-4 leading-tight min-h-[3rem]"
                  style={{ fontFamily: "TWK Everett, sans-serif" }}
                >
                  {demo.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[#727175] text-base mb-4 leading-relaxed min-h-[2.5rem]"
                  style={{ fontFamily: "TWK Everett, sans-serif" }}
                >
                  {demo.description}
                </p>

                {/* Login credentials */}
                <div className="mb-4 p-3 bg-gray-50 rounded-md border">
                  <div className="text-xs text-gray-600 mb-1">Login Credentials:</div>
                  <div className="font-mono text-sm text-gray-800">{demo.credentials}</div>
                </div>

                {/* Learn more button */}
                <button className="flex items-center gap-2 text-[#727175] hover:text-[#FF462D] transition-colors mb-6">
                  <span style={{ fontFamily: "TWK Everett, sans-serif" }}>Launch Demo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Meta tags */}
                <div className="flex flex-wrap gap-2">
                  {demo.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#F2F1EE] text-[#727175] rounded-full text-xs"
                      style={{ fontFamily: "TWK Everett, sans-serif" }}
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
          <div className="flex justify-between items-center">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className="flex items-center gap-2 text-[#727175] hover:text-[#FF462D] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              style={{ fontFamily: "TWK Everett, sans-serif" }}
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              Previous
            </button>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              className="flex items-center gap-2 text-[#727175] hover:text-[#FF462D] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              style={{ fontFamily: "TWK Everett, sans-serif" }}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
