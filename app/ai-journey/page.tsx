"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import DemoLoginModal from "@/components/demo-login-modal"
import UseCasesFocusModal from "@/components/use-cases-focus-modal"
import FeatureFocusModal from "@/components/feature-focus-modal"
import VideoLibraryModal from "@/components/video-library-modal"

export default function AIJourneyPage() {
  const [isDemoLoginOpen, setIsDemoLoginOpen] = useState(false)
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false)
  const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false)
  const [selectedStory, setSelectedStory] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1) // Start with page 1
  const [isVideoLibraryOpen, setIsVideoLibraryOpen] = useState(false)

  const customerStories = [
    {
      id: 1,
      title: "Agentic Airport AI Experience",
      description:
        "Revolutionizing airport operations with intelligent automation and passenger experience optimization through AI-powered systems.",
      image: "/grocery-shopping-scene.png",
      alliance: "Alliance / customer name",
      tags: ["AI Automation", "Airport Operations", "Passenger Experience"],
    },
    {
      id: 2,
      title: "Agentic Media Monitor",
      description:
        "Advanced media monitoring and analysis using AI to track brand sentiment, content performance, and market trends in real-time.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Sy4wzm6gVgKcfOGuuDTbl6rAcERiqU.png", // replaced with AeroBot Media Monitor dashboard image
      alliance: "Alliance / customer name",
      tags: ["Media Analysis", "Brand Monitoring", "AI Insights"],
    },
    {
      id: 3,
      title: "Agentic Sales Assistant",
      description:
        "AI-powered sales automation that enhances customer interactions, lead qualification, and sales process optimization.",
      image: "/sheep-livestock.png",
      alliance: "Alliance / customer name",
      tags: ["Sales Automation", "Lead Generation", "Customer Engagement"],
    },
    {
      id: 4,
      title: "Legal Documents Generator",
      description:
        "Automated legal document creation and review system powered by AI to streamline legal processes and ensure compliance.",
      image: "/dining-food-scene.png",
      alliance: "Alliance / customer name",
      tags: ["Legal Tech", "Document Automation", "Compliance"],
    },
    {
      id: 5,
      title: "Pricing Model",
      description:
        "Dynamic pricing optimization using AI algorithms to maximize revenue and market competitiveness across various industries.",
      image: "/construction-site-overview.png",
      alliance: "Alliance / customer name",
      tags: ["Pricing Strategy", "Revenue Optimization", "Market Analysis"],
    },
    {
      id: 6,
      title: "Marketing Automation",
      description:
        "Comprehensive AI-driven marketing automation platform for personalized campaigns, customer segmentation, and ROI optimization.",
      image: "/grocery-shopping-scene.png",
      alliance: "Alliance / customer name",
      tags: ["Marketing AI", "Campaign Automation", "Customer Segmentation"],
    },
    {
      id: 7,
      title: "X-Ray Image Analysis",
      description:
        "Advanced medical imaging analysis using AI to assist healthcare professionals in diagnostic accuracy and treatment planning.",
      image: "/shipping-port-containers.png",
      alliance: "Alliance / customer name",
      tags: ["Medical AI", "Image Analysis", "Healthcare Technology"],
    },
  ]

  const itemsPerPage = 4
  const totalPages = Math.ceil(customerStories.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = customerStories.slice(startIndex, startIndex + itemsPerPage)

  const handleCardClick = (story) => {
    setSelectedStory(story)
    setIsFeatureModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 sm:px-8 lg:px-16 py-6 lg:py-12">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#FF462D] m-0 leading-none font-sans">
            Kyndryl's AI Journey
          </h1>

          <nav
            className="flex items-center gap-8 text-neutral-700"
            style={{
              gap: "clamp(16px, 2vw, 32px)",
              fontSize: "clamp(14px, 1.5vw, 16px)",
            }}
          >
            <a className="hover:text-black" href="/alliances">
              Alliances
            </a>
            <a className="hover:text-black" href="/industries">
              Industries
            </a>
            <a className="hover:text-black text-neutral-400 cursor-default font-light" href="#">
              Capabilities
            </a>
            <a className="hover:text-black text-[#FF462D] border-b-2 border-[#FF462D]" href="/ai-journey">
              Kyndryl's AI Journey
            </a>
            <div className="ml-4 flex items-center gap-2 rounded-md border border-neutral-300 px-3 py-2 text-sm">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                className="outline-none placeholder:text-neutral-400"
                placeholder="Search"
                style={{ width: "clamp(120px, 15vw, 180px)" }}
              />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#FF462D] bg-gradient-to-r from-[#FF462D] to-[#E63E32] text-white px-4 sm:px-8 lg:px-16 py-12 lg:py-20">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6 text-white">Turn AI ambition into impact </h2>
          <p className="text-lg sm:text-xl lg:text-2xl font-light opacity-90 mb-8 text-white">{""}</p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setIsDemoLoginOpen(true)}
              className="bg-white text-[#FF462D] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Explore Demos
            </button>
            <button
              onClick={() => setIsVideoLibraryOpen(true)}
              className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-[#FF462D] transition-colors"
            >
              Customer Stories
            </button>
            <button
              onClick={() => setIsUseCasesOpen(true)}
              className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-[#FF462D] transition-colors"
            >
              Case Studies
            </button>
          </div>
        </div>
      </section>

      <section id="customer-stories-section" className="bg-[#F2F1EE] min-h-screen">
        {/* Customer Stories Header */}
        <div className="bg-white px-4 sm:px-8 lg:px-16 py-8 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h1 className="text-[32px] font-light text-[#FF462D]">Case Studies</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-80 px-4 py-2 border border-gray-300 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF462D] focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </button>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Customer Stories Grid */}
        <div className="px-4 sm:px-8 lg:px-16 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {currentItems.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleCardClick(story)}
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[#FF462D] text-sm font-medium mb-2">{story.alliance}</div>
                  <h3 className="text-[#3D3C3C] text-lg font-medium mb-3 leading-tight">{story.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{story.description}</p>
                  <div className="flex items-center text-[#3D3C3C] text-sm font-medium mb-4 hover:text-[#FF462D]">
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
                  <div className="flex gap-2 flex-wrap">
                    {story.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12 mb-8">
            <div className="flex items-center gap-8">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`text-lg ${
                    currentPage === page ? "text-[#FF462D] font-medium relative" : "text-[#9E9287]"
                  }`}
                >
                  {page}
                  {currentPage === page && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-[#FF462D]"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`flex items-center text-sm font-medium ${
                currentPage === 1 ? "text-gray-400" : "text-[#3D3C3C] hover:text-[#FF462D]"
              }`}
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
      </section>

      {/* CTA Section */}
      <section className="bg-[#F2F1EE] px-4 sm:px-8 lg:px-16 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#3D3C3C] mb-6">Ready to explore?</h2>
          <p className="text-lg text-[#9E9287] mb-8">
            Discover how our AI research can help solve your most challenging problems
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsDemoLoginOpen(true)}
              className="bg-[#FF462D] text-white px-8 py-3 rounded-md font-medium hover:bg-[#E63E32] transition-colors"
            >
              Explore Demos
            </button>
            <button
              onClick={() => setIsVideoLibraryOpen(true)}
              className="border border-[#FF462D] text-[#FF462D] px-8 py-3 rounded-md font-medium hover:bg-[#FF462D] hover:text-white transition-colors"
            >
              Customer Stories
            </button>
            <button
              onClick={() => setIsUseCasesOpen(true)}
              className="border border-[#FF462D] text-[#FF462D] px-8 py-3 rounded-md font-medium hover:bg-[#FF462D] hover:text-white transition-colors"
            >
              Use Cases
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white px-4 sm:px-8 lg:px-16 py-6 lg:py-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-XBBrqd3OtOkYn9qXa1LtODY0kX9w1D.png"
              alt="Kyndryl Alliance Experience"
              className="object-contain h-8 lg:h-10 w-auto"
            />
          </div>

          <div className="flex items-center gap-2">
            <a href="/alliance-home" className="text-[#9E9287] no-underline text-sm lg:text-base font-light">
              Home
            </a>
            <ChevronRight className="text-[#9E9287] w-4 h-4" />
            <span className="text-[#29707A] text-sm lg:text-base text-[rgba(41,112,122,1)] font-medium">
              Kyndryl's AI Journey
            </span>
          </div>
        </div>
      </footer>

      {/* Demo Login Modal */}
      {isDemoLoginOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-white/20 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <DemoLoginModal
              onClose={() => setIsDemoLoginOpen(false)}
              onLogin={() => {
                setIsDemoLoginOpen(false)
              }}
            />
          </div>
        </div>
      )}

      {/* Use Cases Focus Modal */}
      {isUseCasesOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-white/20 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <UseCasesFocusModal isOpen={isUseCasesOpen} onClose={() => setIsUseCasesOpen(false)} />
          </div>
        </div>
      )}

      {/* Feature Focus Modal */}
      {isFeatureModalOpen && selectedStory && (
        <FeatureFocusModal
          isOpen={isFeatureModalOpen}
          onClose={() => {
            setIsFeatureModalOpen(false)
            setSelectedStory(null)
          }}
          story={selectedStory}
        />
      )}

      {/* Video Library Modal */}
      {isVideoLibraryOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-white/20 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <VideoLibraryModal onClose={() => setIsVideoLibraryOpen(false)} />
          </div>
        </div>
      )}
    </div>
  )
}
