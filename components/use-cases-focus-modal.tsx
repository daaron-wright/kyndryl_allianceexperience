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
  const [currentPage, setCurrentPage] = useState(2) // Set to page 2 as shown in image
  const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState<any>(null)

  if (!isOpen) return null

  const caseStudies = [
    {
      id: 1,
      image: "/grocery-shopping-scene.png",
      alliance: "Alliance / customer name",
      title: "Agentic Airport AI Experience",
      description: "Advanced AI-powered airport operations and passenger experience management system",
      tags: ["AI", "Airport", "Experience"],
    },
    {
      id: 2,
      image: "/shipping-port-containers.png",
      alliance: "Alliance / customer name",
      title: "Agentic Media Monitor",
      description: "Intelligent media monitoring and analysis platform for real-time insights",
      tags: ["Media", "Monitor", "Analytics"],
    },
    {
      id: 3,
      image: "/sheep-livestock.png",
      alliance: "Alliance / customer name",
      title: "Agentic Sales Assistant",
      description: "AI-powered sales automation and customer engagement platform",
      tags: ["Sales", "AI", "Assistant"],
    },
    {
      id: 4,
      image: "/dining-food-scene.png",
      alliance: "Alliance / customer name",
      title: "Legal Documents Generator",
      description: "Automated legal document creation and compliance management system",
      tags: ["Legal", "Documents", "Generator"],
    },
    {
      id: 5,
      image: "/grocery-shopping-scene.png",
      alliance: "Alliance / customer name",
      title: "Pricing Model",
      description: "Dynamic pricing optimization and market analysis platform",
      tags: ["Pricing", "Model", "Analytics"],
    },
    {
      id: 6,
      image: "/shipping-port-containers.png",
      alliance: "Alliance / customer name",
      title: "Marketing Automation",
      description: "Comprehensive marketing automation and campaign management solution",
      tags: ["Marketing", "Automation", "Campaigns"],
    },
    {
      id: 7,
      image: "/sheep-livestock.png",
      alliance: "Alliance / customer name",
      title: "X-Ray Image Analysis",
      description: "AI-powered medical imaging analysis and diagnostic assistance platform",
      tags: ["X-Ray", "Medical", "Analysis"],
    },
  ]

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
          backgroundColor: "rgba(0, 0, 0, 0.8)", // ensuring background matches other modals exactly
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
            backgroundColor: "#F2F1EE",
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
              Case studies
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
          <div className="px-6 py-4">
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
              {caseStudies.slice(0, 8).map((study) => (
                <div
                  key={study.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                  style={{
                    height: "240px",
                  }}
                  onClick={() => handleCardClick(study)}
                >
                  <div
                    className="w-full h-24 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${study.image})`,
                    }}
                  />
                  <div className="p-3">
                    <p
                      className="text-[#FF462D] text-xs font-medium mb-1"
                      style={{
                        fontFamily: "TWK Everett, sans-serif",
                      }}
                    >
                      {study.alliance}
                    </p>
                    <h3
                      className="text-[#3D3C3C] font-medium mb-2 text-sm leading-tight"
                      style={{
                        fontFamily: "TWK Everett, sans-serif",
                      }}
                    >
                      {study.title}
                    </h3>
                    <p
                      className="text-[#727175] text-xs mb-2 leading-relaxed"
                      style={{
                        fontFamily: "TWK Everett, sans-serif",
                      }}
                    >
                      {study.description}
                    </p>
                    <div className="flex items-center justify-between mb-2">
                      <button
                        className="text-[#3D3C3C] text-xs font-medium hover:text-[#FF462D] transition-colors flex items-center gap-1"
                        style={{
                          fontFamily: "TWK Everett, sans-serif",
                        }}
                      >
                        Learn more
                        <ChevronRight size={12} />
                      </button>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                      {study.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                          style={{
                            fontFamily: "TWK Everett, sans-serif",
                            fontSize: "10px",
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
          </div>

          {/* Pagination */}
          <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center">
            <div className="flex items-center gap-8">
              <button
                className="flex items-center gap-2 text-[#727175] hover:text-[#3D3C3C] transition-colors"
                style={{
                  fontFamily: "TWK Everett, sans-serif",
                }}
              >
                <ChevronLeft size={20} />
                Previous
              </button>

              <div className="flex items-center gap-4">
                {[1, 2, 3, 4].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                      currentPage === page ? "bg-[#FF462D] text-white" : "text-[#727175] hover:text-[#3D3C3C]"
                    }`}
                    style={{
                      fontFamily: "TWK Everett, sans-serif",
                    }}
                  >
                    {page}
                  </button>
                ))}
                {/* Active page indicator line */}
                <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2">
                  <div
                    className="h-0.5 bg-[#FF462D] transition-all duration-300"
                    style={{
                      width: "32px",
                      transform: `translateX(${(currentPage - 2.5) * 48}px)`,
                    }}
                  />
                </div>
              </div>

              <button
                className="flex items-center gap-2 text-[#727175] hover:text-[#3D3C3C] transition-colors"
                style={{
                  fontFamily: "TWK Everett, sans-serif",
                }}
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
