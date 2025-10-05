"use client"

import { useState } from "react"
import { X, Search, ChevronRight, ChevronLeft } from "lucide-react"

interface Demo {
  title: string
  description: string
  tags: string[]
  url?: string
  loginNote?: string
  examplePrompts?: string[]
}

interface GoogleCloudDemosModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function GoogleCloudDemosModal({ isOpen, onClose }: GoogleCloudDemosModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4 // Match AWS demos with 4 items per page

  if (!isOpen) return null

  const demos: Demo[] = [
    {
      title: "Kyndryl Post, Trusted mail service",
      description: "demo@kyndryl.com / kyndryl123",
      tags: ["Enterprise", "Email", "Security", "Cloud Services"],
      url: "https://kyndrylpost-frontend-441679889998.us-central1.run.app",
    },
    {
      title: "WorldTel Email Response System",
      description: "worldtel@demo.com / worldtel456",
      tags: ["Communication", "Email", "Response System", "AI/ML"],
      url: "http://35.238.3.133:8501",
    },
    {
      title: "Realtime travel companion",
      description: "flytap@demo.com / flytap789",
      tags: ["Travel", "Aviation", "AI Agent", "Customer Service"],
      url: "http://35.238.3.133:4200",
    },
    {
      title: "Connected Traveler Demo",
      description: "Interactive aviation experience demo",
      tags: ["Travel", "Aviation", "Connected Experience", "AI Agent"],
      url: "https://www.figma.com/proto/oFuCQkQyHoRD1qLrfEwdGj/Kyndryl-Aviation?page-id=359%3A1919&node-id=438-1695&viewport=742%2C507%2C0.06&t=OMtigABUdmkAqEB1-1&scaling=min-zoom&starting-point-node-id=615%3A1721",
    },
    {
      title: "Connected Shopping Demo",
      description: "Password: drink-chrome-kiosk-mince",
      tags: ["Retail", "Connected Experience", "Shopping", "Customer Experience"],
      url: "https://www.figma.com/proto/NhVo9auVTYErgwPGARbi8P/NRF-Event?page-id=255%3A2959&node-id=552-103795&viewport=5899%2C-1406%2C0.13&t=azoPAKa205pvTkv0-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=552%3A103795",
    },
    {
      title: "Connected Operations Demo",
      description: "Password: spice-market-post-land",
      tags: ["Operations", "Connected Experience", "Manufacturing", "Plant Management"],
      url: "https://www.figma.com/proto/2R2qYArOjV0I9bXDBv3hBc/Plant-360-Demo?node-id=239-2737&t=30csRjSwcUMPzizt-1&starting-point-node-id=406%3A1499",
    },
  ]

  const filteredDemos = demos.filter(
    (demo) =>
      demo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      demo.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const totalPages = Math.ceil(filteredDemos.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = filteredDemos.slice(startIndex, startIndex + itemsPerPage)

  const handleLearnMoreClick = (url?: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer")
    } else {
      console.log("Learn more clicked")
    }
  }

  const getIndustryLabel = (title: string) => {
    switch (title) {
      case "Kyndryl Post, Trusted mail service":
        return "Industry / Enterprise"
      case "WorldTel Email Response System":
        return "Industry / Communications"
      case "Realtime travel companion":
        return "Industry / Travel"
      case "Connected Traveler Demo":
        return "Industry / Travel"
      case "Connected Shopping Demo":
        return "Industry / Retail"
      case "Connected Operations Demo":
        return "Industry / Manufacturing"
      default:
        return "Industry / Technology"
    }
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
            Google Cloud Demos
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
            {currentItems.map((demo, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                {/* Industry Label - Updated to match AWS format */}
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

                {/* Description - Updated to match AWS login format */}
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
                  onClick={() => handleLearnMoreClick(demo.url)}
                >
                  Learn more
                  <ChevronRight className="ml-2 w-4 h-4" />
                </div>

                {/* Meta Tags - Updated to match AWS tag styling with persona detection */}
                <div className="flex gap-2 flex-wrap">
                  {demo.tags.map((tag, tagIndex) => {
                    const isPersonaTag =
                      tag === "Enterprise" ||
                      tag === "Communication" ||
                      tag === "Travel" ||
                      tag === "Retail" ||
                      tag === "Operations"
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
