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
  const [currentPage, setCurrentPage] = useState(1)
  const [isVideoLibraryOpen, setIsVideoLibraryOpen] = useState(false)
  const [selectedIndustries, setSelectedIndustries] = useState([])
  const [selectedAIFeatures, setSelectedAIFeatures] = useState([])
  const [isFiltersExpanded, setIsFiltersExpanded] = useState(false)
  const [isVideoClicked, setIsVideoClicked] = useState(false)

  const customerStories = [
    {
      id: 1,
      title: "Agentic Airport AI Experience",
      description:
        "Revolutionizing airport operations with intelligent automation and passenger experience optimization through AI-powered systems.",
      image: "/airport-terminal-passenger.png",
      alliance: "Industry / Transportation",
      tags: ["AI Automation", "Airport Operations", "Passenger Experience"],
      alliancePartner: "AWS",
      aiFeature: "AI & Machine Learning",
    },
    {
      id: 2,
      title: "Agentic Media Monitor",
      description:
        "Advanced media monitoring and analysis using AI to track brand sentiment, content performance, and market trends in real-time.",
      image: "/analytics-dashboard-viewer.png",
      alliance: "Industry / Communications & Media",
      tags: ["Media Analysis", "Brand Monitoring", "AI Insights"],
      alliancePartner: "Google Cloud",
      aiFeature: "Data Analytics",
    },
    {
      id: 3,
      title: "Agentic Sales Assistant",
      description:
        "AI-powered sales automation that enhances customer interactions, lead qualification, and sales process optimization.",
      image: "/customer-service-team.png",
      alliance: "Industry / Retail",
      tags: ["Sales Automation", "Lead Generation", "Customer Engagement"],
      alliancePartner: "Microsoft Azure",
      aiFeature: "Automation",
    },
    {
      id: 4,
      title: "Legal Documents Generator",
      description:
        "Automated legal document creation and review system powered by AI to streamline legal processes and ensure compliance.",
      image: "/legal-document-review.png",
      alliance: "Industry / Government",
      tags: ["Legal Tech", "Document Automation", "Compliance"],
      alliancePartner: "AWS",
      aiFeature: "Digital Transformation",
    },
    {
      id: 5,
      title: "Pricing Model",
      description:
        "Dynamic pricing optimization using AI algorithms to maximize revenue and market competitiveness across various industries.",
      image: "/pricing-model-business-meeting.png",
      alliance: "Industry / Financial Services",
      tags: ["Pricing Strategy", "Revenue Optimization", "Market Analysis"],
      alliancePartner: "Google Cloud",
      aiFeature: "AI & Machine Learning",
    },
    {
      id: 6,
      title: "Marketing Automation",
      description:
        "Comprehensive AI-driven marketing automation platform for personalized campaigns, customer segmentation, and ROI optimization.",
      image: "/hand-phone-scanning-nfc-mobile-pos-desktop-background.jpg",
      alliance: "Industry / Telecommunications",
      tags: ["Marketing AI", "Campaign Automation", "Customer Segmentation"],
      alliancePartner: "Cross",
      aiFeature: "Automation",
    },
    {
      id: 7,
      title: "X-Ray Image Analysis",
      description:
        "Advanced medical imaging analysis using AI to assist healthcare professionals in diagnostic accuracy and treatment planning.",
      image: "/container-ship-aerial-view.png",
      alliance: "Industry / Healthcare",
      tags: ["Medical AI", "Image Analysis", "Healthcare Technology"],
      alliancePartner: "Microsoft Azure",
      aiFeature: "AI & Machine Learning",
    },
    {
      id: 8,
      title: "Smart Baggage Claim",
      description:
        "Intelligent baggage tracking and claim system using AI-powered computer vision and RFID technology to streamline airport baggage operations and enhance passenger experience.",
      image: "/smart-baggage-claim-system-with-ai-tracking.jpg",
      alliance: "Industry / Transportation",
      tags: ["Baggage Tracking", "Computer Vision", "Airport Operations"],
      alliancePartner: "AWS",
      aiFeature: "AI & Machine Learning",
    },
  ]

  const industryOptions = [
    "Automotive",
    "Banking",
    "Communications & Media",
    "Financial Services",
    "Healthcare",
    "Manufacturing",
    "Government",
    "Telecommunications",
    "Retail",
    "Energy & Utilities",
  ]
  const aiFeatureOptions = [
    "AI & Machine Learning",
    "Data Analytics",
    "Automation",
    "Cybersecurity",
    "Cloud Services",
    "Infrastructure Modernization",
    "Digital Transformation",
    "Managed Services",
  ]

  const filteredStories = customerStories.filter((story) => {
    const matchesSearch =
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesIndustry =
      selectedIndustries.length === 0 || selectedIndustries.some((industry) => story.alliance.includes(industry))

    const matchesAIFeature = selectedAIFeatures.length === 0 || selectedAIFeatures.includes(story.aiFeature)

    return matchesSearch && matchesIndustry && matchesAIFeature
  })

  const itemsPerPage = 4
  const totalPages = Math.ceil(filteredStories.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = filteredStories.slice(startIndex, startIndex + itemsPerPage)

  const handleCardClick = (story) => {
    setSelectedStory(story)
    setIsFeatureModalOpen(true)
  }

  const toggleIndustryFilter = (industry) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry) ? prev.filter((i) => i !== industry) : [...prev, industry],
    )
    setCurrentPage(1)
  }

  const toggleAIFeatureFilter = (feature) => {
    setSelectedAIFeatures((prev) => (prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]))
    setCurrentPage(1)
  }

  const clearAllFilters = () => {
    setSelectedIndustries([])
    setSelectedAIFeatures([])
    setSearchTerm("")
    setCurrentPage(1)
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
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1)
                }}
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
              className="bg-[#FF462D] text-white border border-[#F2F1EE] px-6 py-3 rounded-md font-medium hover:bg-[#F2F1EE] hover:text-[#FF462D] transition-colors"
            >
              Explore Demos
            </button>
            <button
              onClick={() => setIsVideoLibraryOpen(true)}
              className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-[#FF462D] transition-colors"
            >
              Customer Stories
            </button>
          </div>
        </div>
      </section>

      {/* Introduction + Video Section */}
      <section id="introduction-section" className="bg-white px-4 sm:px-8 lg:px-16 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left side - Introduction */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#3D3C3C] mb-6">
                The Kyndryl Agentic AI Framework
              </h2>
              <p className="text-lg text-[#9E9287] mb-6 leading-relaxed">
                AI is evolving, and enterprise leaders are asking what comes next. The answer isn’t more automation.
                It’s orchestration. Most organizations are stuck in pilot purgatory. They’ve tested generative AI, but
                struggle to scale it across silos, systems, and governance boundaries. Rigid workflows, fragmented data,
                and compliance complexity stall progress and limit impact.
              </p>
              <p className="text-lg text-[#9E9287] mb-8 leading-relaxed">
                {
                  "The Kyndryl Agentic AI Framework is a policy-driven system that coordinates intelligent agents to deliver outcomes, securely, at scale, and always within your governance boundaries. It's not just a platform. It's a new way to think about AI: one that connects strategy to execution, people to intelligent systems, and outcomes to measurable impact. Imagine a hybrid workforce where agents reason, adapt, and act in real time, alongside your people, within your policies, and across your infrastructure. Every decision is informed. Every action is traceable. Every outcome is intentional.\nWatch the explainer video to see how it works."
                }
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => {
                    const section = document.getElementById("customer-stories-section")
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="border border-[#FF462D] text-[#FF462D] px-6 py-3 rounded-md font-medium hover:bg-[#FF462D] hover:text-white transition-colors"
                >
                  View Case Studies
                </button>
              </div>
            </div>

            {/* Right side - Extended Video taking 2 columns */}
            <div className="relative flex items-center justify-center lg:col-span-2">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg w-full">
                {isVideoClicked ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://s7d1.scene7.com/is/content/kyndryl/kyndryl-agentic-ai-framework-v1"
                    title="Kyndryl Agentic AI Framework"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-fill"
                    style={{
                      minHeight: "400px",
                    }}
                  />
                ) : (
                  <div
                    className="w-full h-full bg-gray-100 flex items-center justify-center"
                    style={{ minHeight: "400px" }}
                  >
                    <div className="text-gray-500 text-center">
                      <div className="text-lg font-medium mb-2">Kyndryl Agentic AI Framework</div>
                      <div className="text-sm">Click to play video</div>
                    </div>
                  </div>
                )}
              </div>
              {/* Play button overlay for better UX */}
              {!isVideoClicked && (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={() => setIsVideoClicked(true)}
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-white">
                      <polygon points="5,3 19,12 5,21" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Stories Section */}
      <section id="customer-stories-section" className="bg-[#F2F1EE]">
        {/* Customer Stories Header */}
        <div className="bg-white px-4 sm:px-8 lg:px-16 py-8 border-b border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-[32px] font-light text-[#FF462D]">Case Studies</h1>

            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="w-80 px-4 py-2 border border-gray-300 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF462D] focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </button>
              </div>

              <div className="relative">
                <button
                  onClick={() => setIsFiltersExpanded(!isFiltersExpanded)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <span>Filters</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`transition-transform ${isFiltersExpanded ? "rotate-180" : ""}`}
                  >
                    <polyline points="6,9 12,15 18,9" />
                  </svg>
                </button>

                {isFiltersExpanded && (
                  <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-6 w-[600px] z-10">
                    {/* Industry Filter */}
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-3">Industry</h3>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => setSelectedIndustries([])}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            selectedIndustries.length === 0
                              ? "border-2 border-[#FF462D] text-[#FF462D] bg-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          All
                        </button>
                        {industryOptions.map((industry) => (
                          <button
                            key={industry}
                            onClick={() => toggleIndustryFilter(industry)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                              selectedIndustries.includes(industry)
                                ? "bg-[#FF462D] text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {industry}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* AI Feature Filter */}
                    <div className="mb-4">
                      <h3 className="text-lg font-medium text-gray-900 mb-3">AI Feature</h3>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => setSelectedAIFeatures([])}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            selectedAIFeatures.length === 0
                              ? "border-2 border-[#FF462D] text-[#FF462D] bg-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          All
                        </button>
                        {aiFeatureOptions.map((feature) => (
                          <button
                            key={feature}
                            onClick={() => toggleAIFeatureFilter(feature)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                              selectedAIFeatures.includes(feature)
                                ? "bg-[#FF462D] text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {feature}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Clear Filters */}
                    <div className="flex justify-end pt-4 border-t border-gray-200">
                      <button
                        onClick={clearAllFilters}
                        className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        Clear all filters
                      </button>
                    </div>
                  </div>
                )}
              </div>
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
                    src={story.image && story.image.trim() !== "" ? story.image : "/placeholder.svg"}
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

          {/* Footer Navigation */}
          {totalPages > 1 && (
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
          )}
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
              className="bg-[#FF462D] text-white border border-[#F2F1EE] px-8 py-3 rounded-md font-medium hover:bg-[#F2F1EE] hover:text-[#FF462D] transition-colors"
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
              onClick={() => {
                const section = document.getElementById("customer-stories-section")
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="border border-[#FF462D] text-[#FF462D] px-8 py-3 rounded-md font-medium hover:bg-[#FF462D] hover:text-white transition-colors"
            >
              Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white px-4 sm:px-8 lg:px-16 py-6 lg:py-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29%281%29%281%29%281%29%281%29%281%29%281%29-xSaA10EDLaeXw1IM0kmRa89Z2EG3YK.png"
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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
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
