"use client"

import { useState } from "react"

interface DemosModalProps {
  onClose: () => void
  learnMoreUrl?: string
}

export default function DemosModal({ onClose, learnMoreUrl }: DemosModalProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")

  const demoCards = [
    {
      title: "Appointment Management - Book/Cancel/Reschedule/List",
      description: "",
      tags: ["Healthcare"],
    },
    {
      title: "Prescription Management - Get prescriptions details",
      description: "",
      tags: ["AWS"],
    },
    {
      title: "Medication Refill Management - Check refill eligibility and Place Refill request",
      description: "",
      tags: ["Chabot"],
    },
    {
      title: "General Query - Information from available knowledgebase of the documents",
      description: "",
      tags: ["Knowledge Base"],
    },
  ]

  const handleLearnMoreClick = () => {
    const targetUrl = learnMoreUrl || "https://develop-vks.d2hmtm6qbgyxg0.amplifyapp.com"
    window.open(targetUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="w-full max-w-7xl h-full max-h-[90vh] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
        <h1 className="text-[32px] font-light text-[#FF462D]" style={{ fontFamily: "TWK Everett, sans-serif" }}>
          Demos
        </h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-80 px-4 py-2 border border-gray-300 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF462D] focus:border-transparent"
              style={{ fontFamily: "TWK Everett, sans-serif" }}
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#F2F1EE] p-12 overflow-y-auto">
        <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
          {demoCards.map((demo, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Demo Label */}
              <div
                className="text-[#FF462D] text-sm font-medium mb-3"
                style={{ fontFamily: "TWK Everett, sans-serif" }}
              >
                Demo
              </div>

              {/* Title */}
              <h3
                className="text-[#3D3C3C] text-lg font-medium mb-4 leading-tight"
                style={{ fontFamily: "TWK Everett, sans-serif" }}
              >
                {demo.title}
              </h3>

              {/* Learn More Link */}
              <div
                className="flex items-center text-[#3D3C3C] text-sm font-medium mb-4 cursor-pointer hover:text-[#FF462D]"
                style={{ fontFamily: "TWK Everett, sans-serif" }}
                onClick={handleLearnMoreClick}
              >
                Learn more
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="ml-1"
                >
                  <polyline points="9,18 15,12 9,6" />
                </svg>
              </div>

              {/* Meta Tags */}
              <div className="flex gap-2 flex-wrap">
                {demo.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    style={{ fontFamily: "TWK Everett, sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
