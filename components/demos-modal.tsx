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
      title: "Virtual Healthcare Assistant",
      description: "abilasha11 / Abi@lex11",
      tags: [
        "Patient", // Persona
        "Appointment Mgmt", // Abbreviated use case
        "Prescription Mgmt",
        "Medication Refills",
        "General Queries",
        "Healthcare",
        "AI Assistant",
      ],
      learnMoreUrl: "https://develop-vks.d2hmtm6qbgyxg0.amplifyapp.com",
    },
    {
      title: "SRE AI Agent",
      description: "abilasha11 / Abi@lex11",
      examplePrompts: [
        "Investigate why the client service is not loading.",
        "Check why order service is not working",
        "Payment functions are unresponsive in the UI",
        "I am unable to access the app from my IP address.",
      ],
      tags: [
        "Site Reliability Engineer", // Persona
        "Service Down - Direct",
        "Service Down - Dependent",
        "CR Required",
        "IP Whitelist",
        "DevOps",
        "Monitoring",
        "AI Assistant",
      ],
      learnMoreUrl: "https://develop.djer0fdxkca76.amplifyapp.com",
    },
    {
      title: "Conversational AI",
      description: "abilasha11 / Abi@lex11",
      loginNote: "Branch & General Query - No Login required",
      tags: [
        "Banking Customer", // Persona
        "Non-Banking Customer", // Persona
        "Account Balance",
        "Transaction History",
        "Bill Payment",
        "Reward Points",
        "Block Card",
        "Loan Closure",
        "Complaint Registration",
        "Branch Location",
        "General Inquiry",
        "Financial Services",
        "AI Assistant",
      ],
      learnMoreUrl: "https://develop.d3kz6ryu6joj19.amplifyapp.com",
    },
    {
      title: "First Notice of Loss (FNOL)",
      description:
        "john.doe@gmail.com / john@123, janedoe@gmail.com / jd@12345, raju.k@gmail.com / john_doe, davidmoody@gmail.com / dm@123, jamesalex@hotmail.com / ja@12345",
      tags: [
        "Insurance Customer", // Persona
        "Claims Reviewer", // Persona
        "Claims Agent", // Persona
        "Report a Claim with supporting documents",
        "Update a claim with supporting documents",
        "View a claim",
        "Insurance",
        "AI Assistant",
      ],
      learnMoreUrl: "https://develop.dl8vx96rzs86v.amplifyapp.com",
    },
    {
      title: "Entreprise Observability",
      description: "admin / admin123",
      tags: [
        "Site Reliability Engineer", // Persona
        "Observability",
        "Monitoring",
        "Incident Response",
        "Telemetry",
        "AWS",
        "AI Assistant",
      ],
      learnMoreUrl: "https://aeromonitor.apps-aws.com/",
    },
  ]

  const itemsPerPage = 4 // Updated to match the 4 demo tiles
  const totalPages = Math.ceil(demoCards.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = demoCards.slice(startIndex, startIndex + itemsPerPage)

  const handleLearnMoreClick = (cardUrl?: string) => {
    const targetUrl = cardUrl || learnMoreUrl || "https://develop-vks.d2hmtm6qbgyxg0.amplifyapp.com"
    window.open(targetUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
    >
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
          <div className="grid grid-cols-4 gap-10 mb-16 max-w-7xl mx-auto">
            {currentItems.map((demo, index) => {
              const getIndustryLabel = (title: string) => {
                switch (title) {
                  case "Virtual Healthcare Assistant":
                    return "Industry / Healthcare"
                  case "SRE AI Agent":
                    return "Industry / DevOps"
                  case "Conversational AI":
                    return "Industry / Financial Services"
                  case "First Notice of Loss (FNOL)":
                    return "Industry / Insurance"
                  case "Entreprise Observability":
                    return "Industry / Transportation"
                  default:
                    return "Industry / Technology"
                }
              }

              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  {/* Demo Label */}
                  <div
                    className="text-[#FF462D] text-sm font-medium mb-4 uppercase"
                    style={{ fontFamily: "TWK Everett, sans-serif" }}
                  >
                    {getIndustryLabel(demo.title)}
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

                  {/* Login Note */}
                  {demo.loginNote && (
                    <div
                      className="text-[#727175] text-xs mb-4 bg-blue-50 px-3 py-2 rounded border border-blue-200"
                      style={{ fontFamily: "TWK Everett, sans-serif" }}
                    >
                      Note: {demo.loginNote}
                    </div>
                  )}

                  {/* Example Prompts */}
                  {demo.examplePrompts && (
                    <div className="mb-4">
                      <div
                        className="text-[#727175] text-xs font-medium mb-2 uppercase"
                        style={{ fontFamily: "TWK Everett, sans-serif" }}
                      >
                        Example Prompts:
                      </div>
                      <div className="space-y-1">
                        {demo.examplePrompts.map((prompt, promptIndex) => (
                          <div
                            key={promptIndex}
                            className="text-[#727175] text-xs bg-gray-50 px-2 py-1 rounded text-left"
                            style={{ fontFamily: "TWK Everett, sans-serif" }}
                          >
                            • {prompt}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Learn More Link */}
                  <div
                    className="flex items-center text-[#727175] text-base font-medium mb-6 cursor-pointer hover:text-[#FF462D] transition-colors"
                    style={{ fontFamily: "TWK Everett, sans-serif" }}
                    onClick={() => handleLearnMoreClick(demo.learnMoreUrl)}
                  >
                    Learn more
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </div>

                  {/* Meta Tags */}
                  <div className="flex gap-2 flex-wrap">
                    {demo.tags.map((tag, tagIndex) => {
                      const isPersonaTag =
                        tag === "Patient" ||
                        tag === "Site Reliability Engineer" ||
                        tag === "Banking Customer" ||
                        tag === "Non-Banking Customer" ||
                        tag === "Insurance Customer" ||
                        tag === "Claims Reviewer" || // Updated from "Claims Agent" to "Claims Reviewer"
                        tag === "Claims Agent" // Added Claims Agent to persona tag detection
                      return (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 text-xs rounded-full ${
                            isPersonaTag ? "bg-[#ff462d] text-white" : "bg-[#F2F1EE] text-[#727175]"
                          }`}
                          style={{ fontFamily: "TWK Everett, sans-serif" }}
                        >
                          {tag}
                        </span>
                      )
                    })}
                  </div>
                </div>
              )
            })}
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
