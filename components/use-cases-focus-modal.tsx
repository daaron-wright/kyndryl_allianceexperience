"use client"

import { X, Search, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import FeatureFocusModal from "./feature-focus-modal"

interface UseCasesFocusModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function UseCasesFocusModal({ isOpen, onClose }: UseCasesFocusModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1) // Changed initial page from 2 to 1 so modal starts on first page
  const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState<any>(null)

  if (!isOpen) return null

  const caseStudies = [
    {
      id: 5, // Pricing Model in FeatureFocusModal
      image: "/placeholder-98f8c.png",
      alliance: "Industry / Financial Services",
      title: "Pricing Model",
      description:
        "Dynamic pricing optimization using AI algorithms to maximize revenue and market competitiveness across various industries.",
      tags: ["Pricing Strategy", "Revenue Optimization", "Market Analysis"],
    },
    {
      id: 6, // Marketing Automation in FeatureFocusModal
      image: "/placeholder-98f8c.png",
      alliance: "Industry / Telecommunications",
      title: "Marketing Automation",
      description:
        "Comprehensive AI-driven marketing automation platform for personalized campaigns, customer segmentation, and ROI optimization.",
      tags: ["Marketing AI", "Campaign Automation", "Customer Segmentation"],
    },
    {
      id: 7, // X-Ray Image Analysis in FeatureFocusModal
      image: "/placeholder-98f8c.png",
      alliance: "Industry / Transportation", // Updated to Transportation as per previous change
      title: "X-Ray Image Analysis",
      description:
        "Advanced security screening analysis using AI to assist transportation professionals in threat detection and passenger safety.",
      tags: ["Security AI", "Image Analysis", "Transportation Technology"],
    },
    {
      id: 8, // Smart Baggage Claim in FeatureFocusModal (but keeping ID 4 for proper grid display)
      image: "/smart-baggage-claim.png",
      alliance: "Industry / Transportation",
      title: "Smart Baggage Claim",
      description:
        "Intelligent baggage tracking and claim system using AI-powered computer vision and RFID technology to streamline airport baggage operations.",
      tags: ["Baggage Tracking", "Computer Vision", "Airport Operations"],
    },
    {
      id: 1, // Agentic Airport AI Experience in FeatureFocusModal
      image: "/placeholder-98f8c.png",
      alliance: "Industry / Transportation",
      title: "Agentic Airport AI Experience",
      description:
        "Revolutionizing airport operations with intelligent automation and passenger experience optimization through AI-powered systems.",
      tags: ["AI Automation", "Airport Operations", "Passenger Experience"],
    },
    {
      id: 2, // Agentic Media Monitor in FeatureFocusModal
      image: "/placeholder-98f8c.png",
      alliance: "Industry / Communications & Media",
      title: "Agentic Media Monitor",
      description:
        "Advanced media monitoring and analysis using AI to track brand sentiment, content performance, and market trends in real-time.",
      tags: ["Media Analysis", "Brand Monitoring", "AI Insights"],
    },
    {
      id: 3, // Agentic Sales Assistant in FeatureFocusModal
      image: "/placeholder-98f8c.png",
      alliance: "Industry / Retail",
      title: "Agentic Sales Assistant",
      description:
        "AI-powered sales automation that enhances customer interactions, lead qualification, and sales process optimization.",
      tags: ["Sales Automation", "Lead Generation", "Customer Engagement"],
    },
    {
      id: 4, // Legal Documents Generator in FeatureFocusModal
      image: "/placeholder-98f8c.png",
      alliance: "Industry / Government",
      title: "Legal Documents Generator",
      description:
        "Automated legal document creation and review system powered by AI to streamline legal processes and ensure compliance.",
      tags: ["Legal Tech", "Document Automation", "Compliance"],
    },
  ]

  const itemsPerPage = 4
  const totalPages = Math.ceil(caseStudies.length / itemsPerPage)
  const currentItems = caseStudies.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handleCardClick = (study: any) => {
    setSelectedFeature(study)
    setIsFeatureModalOpen(true)
  }

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          padding: "2rem",
        }}
        onClick={onClose}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            width: "1422px",
            height: "800px",
            position: "relative",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            overflow: "hidden",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-4">
            <h1
              style={{
                fontSize: "2rem",
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 300,
                color: "#FF462D",
                margin: 0,
              }}
            >
              Customer Stories - Case studies
            </h1>

            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-80 px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF462D] focus:border-transparent"
                  style={{
                    fontFamily: "TWK Everett, sans-serif",
                  }}
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>

              {/* Close Button */}
              <button onClick={onClose} className="text-gray-600 hover:text-gray-800 transition-colors">
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="px-16 py-8" style={{ backgroundColor: "#F2F1EE" }}>
            <div className="grid grid-cols-4 gap-6 mb-16">
              {currentItems.map((study) => (
                <div
                  key={study.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                  style={{
                    height: "400px",
                  }}
                  onClick={() => handleCardClick(study)}
                >
                  <div
                    className="w-full h-48 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${study.image})`,
                    }}
                  />
                  <div className="p-4">
                    <p
                      className="text-[#FF462D] text-sm font-medium mb-2"
                      style={{
                        fontFamily: "TWK Everett, sans-serif",
                      }}
                    >
                      {study.alliance}
                    </p>
                    <h3
                      className="text-[#3D3C3C] font-medium mb-3 text-lg leading-tight"
                      style={{
                        fontFamily: "TWK Everett, sans-serif",
                      }}
                    >
                      {study.title}
                    </h3>
                    <p
                      className="text-[#727175] text-sm mb-4 leading-relaxed"
                      style={{
                        fontFamily: "TWK Everett, sans-serif",
                      }}
                    >
                      {study.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <button
                        className="text-[#3D3C3C] text-sm font-medium hover:text-[#FF462D] transition-colors flex items-center gap-1"
                        style={{
                          fontFamily: "TWK Everett, sans-serif",
                        }}
                      >
                        Learn more
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center">
            <div className="flex items-center gap-8">
              <button
                className="flex items-center gap-2 text-[#727175] hover:text-[#3D3C3C] transition-colors"
                style={{
                  fontFamily: "TWK Everett, sans-serif",
                }}
                onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={20} />
                Previous
              </button>

              <div className="flex items-center gap-6 relative">
                {[1, 2].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-1 py-2 text-sm font-medium transition-colors relative ${
                      currentPage === page ? "text-[#FF462D]" : "text-[#727175] hover:text-[#3D3C3C]"
                    }`}
                    style={{
                      fontFamily: "TWK Everett, sans-serif",
                    }}
                  >
                    {page}
                    {/* Active page underline indicator */}
                    {currentPage === page && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF462D]" />}
                  </button>
                ))}
              </div>

              <button
                className="flex items-center gap-2 text-[#727175] hover:text-[#3D3C3C] transition-colors"
                style={{
                  fontFamily: "TWK Everett, sans-serif",
                }}
                onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : currentPage)}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Modal */}
      <FeatureFocusModal
        isOpen={isFeatureModalOpen}
        onClose={() => setIsFeatureModalOpen(false)}
        featureData={selectedFeature}
      />
    </>
  )
}
