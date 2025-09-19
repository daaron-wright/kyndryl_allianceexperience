"use client"

import { useState } from "react"
import { X, Search, ChevronLeft, ChevronRight } from "lucide-react"

interface DemosModalProps {
  onClose: () => void
  learnMoreUrl?: string
}

export default function DemosModal({ onClose, learnMoreUrl }: DemosModalProps) {
  const [currentPage, setCurrentPage] = useState(1) // Set to page 1 to match the design
  const [searchQuery, setSearchQuery] = useState("")

  const demoCards = [
    {
      title: "Appointment Management - Book/Cancel/Reschedule/List",
      description: "abilasha11 / Abi@lex11",
      tags: ["Healthcare", "Scheduling", "Patient Care"],
    },
    {
      title: "Prescription Management - Get prescriptions details",
      description: "aloksharma1 / Alok@12345",
      tags: ["Pharmacy", "Medication", "Healthcare"],
    },
    {
      title: "Medication Refill Management - Check refill eligibility and Place Refill request",
      description: "abilasha11 / Abi@lex11",
      tags: ["Refills", "Pharmacy", "Automation"],
    },
    {
      title: "General Query - Information from available knowledgebase of the documents",
      description: "aloksharma1 / Alok@12345",
      tags: ["AI Assistant", "Knowledge Base", "Support"],
    },
  ]

  const itemsPerPage = 4 // Updated to match the 4 demo tiles
  const totalPages = 1 // Fixed to 1 page to match the design
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = demoCards.slice(startIndex, startIndex + itemsPerPage)

  const handleLearnMoreClick = () => {
    const targetUrl = learnMoreUrl || "https://develop-vks.d2hmtm6qbgyxg0.amplifyapp.com"
    window.open(targetUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[1600px] h-[900px] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-16 py-10 border-b border-gray-200 bg-white flex-shrink-0">
          <h1 className="text-5xl font-light text-[#FF462D] m-0" style={{ fontFamily: "TWK Everett, sans-serif" }}>
            Demos
          </h1>
          <div className="flex items-center gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-80 px-4 py-3 pl-12 border border-gray-300 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF462D] focus:border-transparent"
                style={{ fontFamily: "TWK Everett, sans-serif" }}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-[#F2F1EE] px-16 py-16 overflow-y-auto min-h-0">
          <div className="grid grid-cols-4 gap-10 mb-16">
            {currentItems.map((demo, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                {/* Demo Label */}
                <div
                  className="text-[#FF462D] text-sm font-medium mb-4 uppercase"
                  style={{ fontFamily: "TWK Everett, sans-serif" }}
                >
                  Demo
                </div>

                {/* Title */}
                <h3
                  className="text-[#3D3C3C] text-xl font-normal mb-4 leading-tight min-h-[3rem]"
                  style={{ fontFamily: "TWK Everett, sans-serif" }}
                >
                  {demo.title}
                </h3>

                {/* Description */}
                {demo.description && (
                  <div
                    className="text-[#727175] text-sm font-mono mb-4 bg-gray-50 px-3 py-2 rounded border"
                    style={{ fontFamily: "monospace" }}
                  >
                    Login: {demo.description}
                  </div>
                )}

                {/* Learn More Link */}
                <div
                  className="flex items-center text-[#727175] text-base font-medium mb-6 cursor-pointer hover:text-[#FF462D] transition-colors"
                  style={{ fontFamily: "TWK Everett, sans-serif" }}
                  onClick={handleLearnMoreClick}
                >
                  Learn more
                  <ChevronRight className="ml-2 w-4 h-4" />
                </div>

                {/* Meta Tags */}
                <div className="flex gap-2 flex-wrap">
                  {demo.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#F2F1EE] text-[#727175] text-xs rounded-full"
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
                className={`w-10 h-10 flex items-center justify-center text-lg font-medium transition-colors ${
                  currentPage === page
                    ? "text-[#FF462D] border-b-2 border-[#FF462D]"
                    : "text-[#727175] hover:text-[#FF462D]"
                }`}
                style={{ fontFamily: "TWK Everett, sans-serif" }}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Previous/Next Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 text-base font-medium transition-colors ${
                currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-[#727175] hover:text-[#FF462D]"
              }`}
              style={{ fontFamily: "TWK Everett, sans-serif" }}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 text-base font-medium transition-colors ${
                currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-[#727175] hover:text-[#FF462D]"
              }`}
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
