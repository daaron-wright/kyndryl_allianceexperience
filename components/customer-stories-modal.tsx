"use client"

import { useState } from "react"

export default function CustomerStoriesModal({ onClose }: { onClose: () => void }) {
  const [selectedAlliance, setSelectedAlliance] = useState<string>("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const allContent = [
    // Videos from first dataset
    {
      title: "Mainframe Integration, Democratization",
      alliance: "Microsoft",
      duration: "2:51",
      url: "https://s7d1.scene7.com/is/content/kyndryl/democratization-mainframe-integration-en",
      featured: true,
      type: "video",
    },
    {
      title: "Google Cloud for Banking and Financial Services",
      alliance: "Google",
      duration: "1:10",
      url: "https://s7d1.scene7.com/is/content/kyndryl/fss-industry-cloud-consult",
      featured: false,
      type: "video",
    },
    {
      title: "Kyndryl and Google Partnership",
      alliance: "Google",
      duration: "1:35",
      url: "https://s7d1.scene7.com/is/content/kyndryl/kyndryl-google-partnership",
      featured: true,
      type: "video",
    },
    {
      title: "Protect stores from merchandise and retail shrinkage",
      alliance: "Microsoft",
      duration: "1:27",
      url: "https://s7d1.scene7.com/is/content/kyndryl/retail-azure",
      featured: false,
      type: "video",
    },
    {
      title: "Mainframe modernization for Banking",
      alliance: "Microsoft",
      duration: "1:17",
      url: "https://s7d1.scene7.com/is/content/kyndryl/mainframe-modernization-azure-banking",
      featured: false,
      type: "video",
    },
    {
      title: "Elevate Customer Satisfaction",
      alliance: "Google",
      duration: "0:56",
      url: "https://s7d1.scene7.com/is/content/kyndryl/elevate-customer-satisfaction",
      featured: true,
      type: "video",
    },
    {
      title: "Leading Warehouse and Logistics Provider",
      alliance: "Google",
      duration: "1:22",
      url: "https://s7d1.scene7.com/is/content/kyndryl/leading-warehouse-logistics",
      featured: false,
      type: "video",
    },
    {
      title: "Customized NDA Generator",
      alliance: "Google",
      duration: "1:19",
      url: "https://s7d1.scene7.com/is/content/kyndryl/customized-nda-generator",
      featured: false,
      type: "video",
    },
    {
      title: "Kyndryl IaaS for IBM Power with Microsoft Azure",
      alliance: "Microsoft",
      duration: "0:59",
      url: "https://s7d1.scene7.com/is/content/kyndryl/kyndryl-microsoft-iaas",
      featured: false,
      type: "video",
    },
    // Additional videos from second dataset
    {
      title: "Address Evolving Threats Fast",
      alliance: "Microsoft",
      duration: "1:07",
      url: "https://s7d1.scene7.com/is/content/kyndryl/address-evolving-threats",
      featured: false,
      type: "video",
    },
    {
      title: "Kyndryl Microsoft Partnership",
      alliance: "Microsoft",
      duration: "1:33",
      url: "https://s7d1.scene7.com/is/content/kyndryl/kyndryl-microsoft-partnership",
      featured: false,
      type: "video",
    },
    {
      title: "Financial Services Adapt of Mainframe Modernization",
      alliance: "Microsoft",
      duration: "1:19",
      url: "https://s7d1.scene7.com/is/content/kyndryl/optimize-mission-critical-financial-workloads",
      featured: false,
      type: "video",
    },
    {
      title: "Kyndryl Sustainability Advisor",
      alliance: "Google",
      duration: "0:41",
      url: "https://s7d1.scene7.com/is/content/kyndryl/sustainability-advisor",
      featured: false,
      type: "video",
    },
    {
      title: "Banking customer service – Relationship AI agent",
      alliance: "Cross (Hyperscalers Agnostic)",
      duration: "0:46",
      url: "https://s7d1.scene7.com/is/content/kyndryl/banking-relationship-agent",
      featured: false,
      type: "video",
    },
    {
      title: "Automotive GenAI Customer 360 video",
      alliance: "Cross (Hyperscalers Agnostic)",
      duration: "0:51",
      url: "https://s7d1.scene7.com/is/content/kyndryl/automotive-customer-360",
      featured: false,
      type: "video",
    },
    {
      title: "Fire Safety solution (AWS)",
      alliance: "AWS",
      duration: "3:5",
      url: "Fire Fighter Safety Solution-demo-v4-3.mp4",
      featured: true,
      type: "video",
    },
    {
      title: "GenAI navigator capability",
      alliance: "Cross (Hyperscalers Agnostic)",
      duration: "1:51",
      url: "Kyndryl GenAI Navigator Solution Demo",
      featured: false,
      type: "video",
    },
    {
      title: "Kyndryl IDP Solution for Loan Application Manager, Insurance Industry",
      alliance: "Cross (Hyperscalers Agnostic)",
      duration: "3:01",
      url: "Kyndryl IDP Solution for Loan Application Manager.mp4",
      featured: false,
      type: "video",
    },
    {
      title: "Agentic IT management",
      alliance: "Cross (Hyperscalers Agnostic)",
      duration: "2:24",
      url: "Kyndryl Agentic IT Management.mp4",
      featured: false,
      type: "video",
    },
    {
      title: "Kyndryl healthcare assistant",
      alliance: "Cross (Hyperscalers Agnostic)",
      duration: "3:14",
      url: "Kyndryl Healthcare Assistant.mp4",
      featured: false,
      type: "video",
    },
    // Demos from Figma
    {
      title: "Aviation Industry – Figma Use Case",
      alliance: "Cross (Hyperscalers Agnostic)",
      duration: "N/A",
      url: "https://www.figma.com/proto/SOJfxIoop1uPyLkAYrd19D/Kyndryl-Connected-Traveller--New-Version?page-id=170%3A2293&node-id=177-18664&viewport=3245%2C-460%2C0.13&t=w4tQkCe2sDolVUBF-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2014%3A9590",
      featured: false,
      type: "demo",
    },
    {
      title: "Retail Industry – Figma Use Case",
      alliance: "Cross (Hyperscalers Agnostic)",
      duration: "N/A",
      url: "https://www.figma.com/proto/NhVo9auVTYErgwPGARbi8P/NRF-Event?page-id=255%3A2959&node-id=552-103795&viewport=5899%2C-1406%2C0.13&t=azoPAKa205pvTkv0-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=552%3A103795",
      featured: false,
      type: "demo",
      password: "drink-chrome-kiosk-mince",
    },
    {
      title: "Manufacturing Industry – Figma Use Case",
      alliance: "Cross (Hyperscalers Agnostic)",
      duration: "N/A",
      url: "https://www.figma.com/proto/2R2qYArOjV0I9bXDBv3hBc/Plant-360-Demo?node-id=239-2737&t=30csRjSwcUMPzizt-1&starting-point-node-id=406%3A1499",
      featured: false,
      type: "demo",
    },
  ]

  const filteredContent = allContent.filter((item) => {
    const matchesAlliance = selectedAlliance === "All" || item.alliance === selectedAlliance
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.alliance.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesAlliance && matchesSearch
  })

  const itemsPerPage = 4
  const totalPages = Math.ceil(filteredContent.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = filteredContent.slice(startIndex, startIndex + itemsPerPage)

  const alliances = ["All", "Microsoft", "Google", "AWS", "Cross (Hyperscalers Agnostic)"]

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-7xl h-full max-h-[90vh] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
          <h1 className="text-[32px] font-light text-[#FF462D]" style={{ fontFamily: "TWK Everett, sans-serif" }}>
            Customer Stories - Videos & Demos
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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

        <div className="flex items-center gap-4 px-6 py-4 bg-white border-b border-gray-200">
          {alliances.map((alliance) => (
            <button
              key={alliance}
              onClick={() => {
                setSelectedAlliance(alliance)
                setCurrentPage(1)
              }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedAlliance === alliance
                  ? "border-2 border-[#FF462D] bg-white text-[#FF462D]"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              style={{ fontFamily: "TWK Everett, sans-serif" }}
            >
              {alliance}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-[#F2F1EE] p-12 overflow-y-auto">
          <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
            {currentItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative">
                  <div className="w-full h-48 bg-gray-100 flex items-center justify-center relative">
                    {item.type === "video" && item.url.startsWith("http") ? (
                      <iframe
                        src={item.url}
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                        title={item.title}
                      />
                    ) : item.type === "demo" ? (
                      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                        <div className="text-center">
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FF462D"
                            strokeWidth="2"
                            className="mx-auto mb-2"
                          >
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                          </svg>
                          <p className="text-sm text-gray-600" style={{ fontFamily: "TWK Everett, sans-serif" }}>
                            Interactive Demo
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      </div>
                    )}
                    {item.featured && (
                      <div
                        className="absolute top-3 left-3 bg-[#FF462D] text-white px-3 py-1 text-xs font-medium rounded z-10"
                        style={{ fontFamily: "TWK Everett, sans-serif" }}
                      >
                        Featured
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div
                    className="text-[#FF462D] text-sm font-medium mb-2"
                    style={{ fontFamily: "TWK Everett, sans-serif" }}
                  >
                    {item.alliance}
                  </div>
                  <h3
                    className="text-[#3D3C3C] text-lg font-medium mb-3 leading-tight"
                    style={{ fontFamily: "TWK Everett, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-gray-600 text-sm mb-4 leading-relaxed"
                    style={{ fontFamily: "TWK Everett, sans-serif" }}
                  >
                    Duration: {item.duration}
                    {item.password && (
                      <span className="block mt-1 text-xs text-gray-500">Password: {item.password}</span>
                    )}
                  </p>
                  <div
                    className="flex items-center text-[#3D3C3C] text-sm font-medium mb-4 cursor-pointer hover:text-[#FF462D]"
                    style={{ fontFamily: "TWK Everett, sans-serif" }}
                    onClick={() => window.open(item.url, "_blank")}
                  >
                    {item.type === "demo" ? "Open demo" : "Watch video"}
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
                  <div className="flex gap-2 flex-wrap">
                    <span
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      style={{ fontFamily: "TWK Everett, sans-serif" }}
                    >
                      {item.alliance}
                    </span>
                    <span
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      style={{ fontFamily: "TWK Everett, sans-serif" }}
                    >
                      {item.type === "demo" ? "Demo" : "Video"}
                    </span>
                    {item.duration !== "N/A" && (
                      <span
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                        style={{ fontFamily: "TWK Everett, sans-serif" }}
                      >
                        {item.duration}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-12 mb-8">
              <div className="flex items-center gap-8">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`text-lg ${
                      currentPage === page ? "text-[#FF462D] font-medium relative" : "text-[#9E9287]"
                    }`}
                    style={{ fontFamily: "TWK Everett, sans-serif" }}
                  >
                    {page}
                    {currentPage === page && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-[#FF462D]"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between p-6 bg-[#F2F1EE] border-t border-gray-200">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`flex items-center text-sm font-medium ${
              currentPage === 1 ? "text-gray-400" : "text-[#3D3C3C] hover:text-[#FF462D]"
            }`}
            style={{ fontFamily: "TWK Everett, sans-serif" }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="mr-2"
            >
              <polyline points="15,18 9,12 15,6" />
            </svg>
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`flex items-center text-sm font-medium ${
              currentPage === totalPages ? "text-gray-400" : "text-[#3D3C3C] hover:text-[#FF462D]"
            }`}
            style={{ fontFamily: "TWK Everett, sans-serif" }}
          >
            Next
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="ml-2"
            >
              <polyline points="9,18 15,12 9,6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
