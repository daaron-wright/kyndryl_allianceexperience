"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronRight, X } from "lucide-react"
import DemoLoginModal from "@/components/demo-login-modal"
import UseCasesFocusModal from "@/components/use-cases-focus-modal"
import FeatureFocusModal from "@/components/feature-focus-modal"
import VideoLibraryModal from "@/components/video-library-modal"

type EmbedView = "video" | "figma" | "demo"

type Story = {
  id: number
  title: string
  description: string
  image: string
  alliance: string
  tags: string[]
  alliancePartner?: string
  aiFeature: string
  videoUrl?: string
  embedUrl?: string
  externalUrl?: string
  demoUrl?: string
  demoCredentials?: { username: string; password: string }
}

export default function AIJourneyPage() {
  const [isDemoLoginOpen, setIsDemoLoginOpen] = useState(false)
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false)
  const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false)
  const [selectedStory, setSelectedStory] = useState<Story | null>(null)
  const [activeEmbedStory, setActiveEmbedStory] = useState<Story | null>(null)
  const [activeEmbedView, setActiveEmbedView] = useState<EmbedView>("video")
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [isVideoLibraryOpen, setIsVideoLibraryOpen] = useState(false)
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([])
  const [selectedAIFeatures, setSelectedAIFeatures] = useState<string[]>([])
  const [isFiltersExpanded, setIsFiltersExpanded] = useState(false)
  const [isVideoClicked, setIsVideoClicked] = useState(false)
  const isHydratingRef = useRef(true)

  const hasActiveVideo = Boolean(activeEmbedStory?.videoUrl)
  const hasActiveDemo = Boolean(
    (activeEmbedStory?.embedUrl && (!hasActiveVideo || activeEmbedStory.embedUrl !== activeEmbedStory.videoUrl)) ||
      activeEmbedStory?.demoUrl,
  )
  const demoCredentials = activeEmbedStory?.demoCredentials
  const isViewDemoActive =
    activeEmbedView === "figma" || (activeEmbedStory?.demoUrl && activeEmbedView === "demo")

  const connectedTravelerPrototypeUrl =
    "https://www.figma.com/proto/SOJfxIoop1uPyLkAYrd19D/Kyndryl-Connected-Traveller--New-Version?page-id=170%3A2293&node-id=2014-11654&viewport=3245%2C-460%2C0.13&t=JtIjOc4RmPuhg9dW-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2014%3A9590"
  const connectedTravelerEmbedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
    connectedTravelerPrototypeUrl,
  )}`

  const maintenanceOperationsPrototypeUrl =
    "https://www.figma.com/proto/6ecHaQxnlMV4HV057v0rQD/Liverpool-Studio-Use-cases?node-id=3292-1098&t=kFaztkRwYKhDlA1A-1"
  const maintenanceOperationsEmbedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
    maintenanceOperationsPrototypeUrl,
  )}`
  const maintenanceOperationsDemoUrl = "https://aeromonitor.apps-aws.com/login"

  const openEmbedModalForStory = (story: Story, overrides: Partial<Story> = {}) => {
    if (!story) {
      return
    }

    const embedStory = { ...story, ...overrides }
    const hasVideo = Boolean(embedStory.videoUrl)
    const hasEmbed = Boolean(embedStory.embedUrl)
    const hasDemoLink = Boolean(embedStory.demoUrl)
    const initialView: EmbedView = hasVideo ? "video" : hasEmbed ? "figma" : hasDemoLink ? "demo" : "figma"

    setActiveEmbedStory(embedStory)
    setActiveEmbedView(initialView)
  }

  const customerStories: Story[] = [
    {
      id: 9,
      title: "Connected Traveler",
      description:
        "A real-time travel companion that orchestrates itineraries, monitors disruptions, and coordinates services across the journey to keep passengers informed and supported end-to-end.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4f55495a54b1427b9bd40ba1c8f3c8aa%2F47d764b4eb0749968a9ea3df03744a3f?format=webp&width=800",
      alliance: "Industry / Transportation",
      tags: ["Travel Companion", "Journey Orchestration", "Passenger Experience"],
      alliancePartner: "Google Cloud",
      aiFeature: "AI & Machine Learning",
      videoUrl: "https://s7d1.scene7.com/is/content/kyndryl/airline-consult",
      embedUrl: connectedTravelerEmbedUrl,
      externalUrl: connectedTravelerPrototypeUrl,
    },
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
      id: 10,
      title: "Maintenance, Repair, and Operations",
      description:
        "Coordinated maintenance planning and intelligent operations workflows that keep transportation assets mission-ready and resilient across the network.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4f55495a54b1427b9bd40ba1c8f3c8aa%2F1d434d3e2f904c149b1ca4aa00717097?format=webp&width=800",
      alliance: "Industry / Transportation",
      tags: ["Maintenance Intelligence", "Asset Reliability", "Operational Efficiency"],
      alliancePartner: "AWS",
      aiFeature: "Automation",
      embedUrl: maintenanceOperationsEmbedUrl,
      externalUrl: maintenanceOperationsPrototypeUrl,
      demoUrl: maintenanceOperationsDemoUrl,
      demoCredentials: {
        username: "admin",
        password: "admin123",
      },
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
        "Advanced cargo and baggage screening using AI-powered X-ray analysis to enhance security, detect contraband, and streamline transportation operations at ports, airports, and border crossings.",
      image: "/container-ship-aerial-view.png",
      alliance: "Industry / Transportation",
      tags: ["Cargo Security", "Image Analysis", "Transportation Technology"],
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
    "Transportation",
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

  useEffect(() => {
    if (isHydratingRef.current) {
      isHydratingRef.current = false
      setCurrentPage((prev) => (prev === 1 ? prev : 1))
    }
  }, [])

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
  const totalPages = Math.max(1, Math.ceil(filteredStories.length / itemsPerPage))
  const effectiveCurrentPage = Math.min(currentPage, totalPages)
  const renderCurrentPage = isHydratingRef.current ? 1 : effectiveCurrentPage
  const startIndex = (renderCurrentPage - 1) * itemsPerPage
  const currentItems = filteredStories.slice(startIndex, startIndex + itemsPerPage)

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages)
    }
  }, [currentPage, totalPages])

  const handleCardClick = (story: Story) => {
    if (story.embedUrl) {
      openEmbedModalForStory(story)
      return
    }

    setSelectedStory(story)
    setIsFeatureModalOpen(true)
  }

  const handleCloseEmbed = () => {
    setActiveEmbedStory(null)
    setActiveEmbedView("video")
  }

  const toggleIndustryFilter = (industry: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry) ? prev.filter((item) => item !== industry) : [...prev, industry],
    )
    setCurrentPage(1)
  }

  const toggleAIFeatureFilter = (feature: string) => {
    setSelectedAIFeatures((prev) =>
      prev.includes(feature) ? prev.filter((item) => item !== feature) : [...prev, feature],
    )
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
      <header className="border-b border-gray-200 bg-white px-4 py-6 sm:px-8 lg:px-16 lg:py-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h1 className="m-0 font-sans text-3xl font-light leading-none text-[#FF462D] sm:text-4xl lg:text-5xl">
            Kyndryl's AI Journey
          </h1>

          <nav className="flex w-full flex-wrap items-center gap-4 text-[clamp(14px,1.5vw,16px)] text-neutral-700 lg:w-auto lg:justify-end">
            <a className="hover:text-black" href="/alliances">
              Alliances
            </a>
            <a className="hover:text-black" href="/industries">
              Industries
            </a>
            <a className="cursor-default font-light text-neutral-400" href="#">
              Capabilities
            </a>
            <a className="border-b-2 border-[#FF462D] text-[#FF462D] hover:text-black" href="/ai-journey">
              Kyndryl's AI Journey
            </a>
            <div className="order-last flex w-full items-center gap-2 rounded-md border border-neutral-300 px-3 py-2 text-sm sm:order-none sm:w-auto">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                className="w-full bg-transparent text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none sm:w-[clamp(140px,20vw,220px)]"
                placeholder="Search"
                value={searchTerm}
                onChange={(event) => {
                  setSearchTerm(event.target.value)
                  setCurrentPage(1)
                }}
              />
            </div>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-r from-[#FF462D] to-[#E63E32] px-4 py-12 text-white sm:px-8 lg:px-16 lg:py-20">
        <div className="max-w-4xl">
          <h2 className="mb-6 text-2xl font-light text-white sm:text-3xl lg:text-4xl">Turn AI ambition into impact </h2>
          <p className="mb-8 text-lg font-light text-white opacity-90 sm:text-xl lg:text-2xl">{""}</p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <button
              onClick={() => setIsDemoLoginOpen(true)}
              className="rounded-md border border-[#F2F1EE] bg-[#FF462D] px-6 py-3 font-medium text-white transition-colors hover:bg-[#F2F1EE] hover:text-[#FF462D]"
            >
              Explore Demos
            </button>
            <button
              onClick={() => setIsVideoLibraryOpen(true)}
              className="rounded-md border border-white px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-[#FF462D]"
            >
              Customer Stories
            </button>
          </div>
        </div>
      </section>

      <section id="introduction-section" className="bg-white px-4 py-12 sm:px-8 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="lg:self-start lg:pr-10">
              <h2 className="mb-6 text-2xl font-light text-[#3D3C3C] sm:text-3xl lg:text-4xl">The Kyndryl Agentic AI Framework</h2>
              <p className="mb-6 text-lg leading-relaxed text-[#9E9287]">
                AI is evolving, and enterprise leaders are asking what comes next. The answer isn’t more automation. It’s
                orchestration. Most organizations are stuck in pilot purgatory. They’ve tested generative AI, but struggle
                to scale it across silos, systems, and governance boundaries. Rigid workflows, fragmented data, and
                compliance complexity stall progress and limit impact.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-[#9E9287]">
                {
                  "The Kyndryl Agentic AI Framework is a policy-driven system that coordinates intelligent agents to deliver outcomes, securely, at scale, and always within your governance boundaries. It's not just a platform. It's a new way to think about AI: one that connects strategy to execution, people to intelligent systems, and outcomes to measurable impact. Imagine a hybrid workforce where agents reason, adapt, and act in real time, alongside your people, within your policies, and across your infrastructure. Every decision is informed. Every action is traceable. Every outcome is intentional.\nWatch the explainer video to see how it works."
                }
              </p>
              <div className="flex flex-wrap justify-start gap-3 sm:gap-4">
                <button
                  onClick={() => {
                    const section = document.getElementById("customer-stories-section")
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="rounded-md border border-[#FF462D] px-6 py-3 font-medium text-[#FF462D] transition-colors hover:bg-[#FF462D] hover:text-white"
                >
                  View Case Studies
                </button>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                {isVideoClicked ? (
                  <iframe
                    title="Kyndryl Agentic AI Framework"
                    src="https://s7d1.scene7.com/is/content/kyndryl/kyndryl-agentic-ai-framework-v1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full min-h-[220px] sm:min-h-[320px] lg:min-h-[400px]"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#3D3C3C] text-white min-h-[220px] sm:min-h-[320px] lg:min-h-[400px]">
                    <span className="sr-only">Play Kyndryl Agentic AI Framework video</span>
                  </div>
                )}
              </div>
              {!isVideoClicked && (
                <button
                  type="button"
                  className="absolute inset-0 flex items-center justify-center"
                  onClick={() => setIsVideoClicked(true)}
                  aria-label="Play Kyndryl Agentic AI Framework video"
                >
                  <span className="rounded-full bg-white/20 p-4 backdrop-blur-sm transition-colors hover:bg-white/30">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-white">
                      <polygon points="5,3 19,12 5,21" fill="currentColor" />
                    </svg>
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="customer-stories-section" className="bg-[#F2F1EE]">
        <div className="border-b border-gray-200 bg-white px-4 py-8 sm:px-8 lg:px-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h1 className="text-[32px] font-light text-[#FF462D]">Case Studies</h1>

            <div className="flex w-full flex-wrap items-center gap-4 md:w-auto md:justify-end">
              <div className="relative w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(event) => {
                    setSearchTerm(event.target.value)
                    setCurrentPage(1)
                  }}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 text-gray-600 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#FF462D] md:w-64 lg:w-80"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </span>
              </div>

              <div className="relative">
                <button
                  onClick={() => setIsFiltersExpanded((prev) => !prev)}
                  className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50 sm:w-auto"
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
                  <div className="absolute right-0 top-full z-10 mt-2 w-screen max-w-[min(90vw,600px)] rounded-lg border border-gray-200 bg-white p-6 shadow-lg sm:w-[32rem]">
                    <div className="mb-6">
                      <h3 className="mb-3 text-lg font-medium text-gray-900">Industry</h3>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => setSelectedIndustries([])}
                          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                            selectedIndustries.length === 0
                              ? "border-2 border-[#FF462D] bg-white text-[#FF462D]"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          All
                        </button>
                        {industryOptions.map((industry) => (
                          <button
                            key={industry}
                            onClick={() => toggleIndustryFilter(industry)}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
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

                    <div className="mb-4">
                      <h3 className="mb-3 text-lg font-medium text-gray-900">AI Feature</h3>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => setSelectedAIFeatures([])}
                          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                            selectedAIFeatures.length === 0
                              ? "border-2 border-[#FF462D] bg-white text-[#FF462D]"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          All
                        </button>
                        {aiFeatureOptions.map((feature) => (
                          <button
                            key={feature}
                            onClick={() => toggleAIFeatureFilter(feature)}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
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

                    <div className="flex justify-end border-t border-gray-200 pt-4">
                      <button
                        onClick={clearAllFilters}
                        className="text-sm text-gray-500 transition-colors hover:text-gray-700"
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

        <div className="px-4 py-12 sm:px-8 lg:px-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {currentItems.map((story) => (
              <article
                key={story.id}
                className="flex h-full cursor-pointer flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
                onClick={() => handleCardClick(story)}
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={story.image && story.image.trim() !== "" ? story.image : "/placeholder.svg"}
                    alt={story.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 text-sm font-medium text-[#FF462D]">{story.alliance}</div>
                  <h3 className="mb-3 text-lg font-medium leading-tight text-[#3D3C3C]">{story.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">{story.description}</p>
                  <div className="mb-4 flex items-center text-sm font-medium text-[#3D3C3C] transition-colors hover:text-[#FF462D]">
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
                  <div className="mt-auto flex flex-wrap gap-2">
                    {story.tags.map((tag, index) => (
                      <span key={`${story.id}-${index}`} className="rounded bg-gray-100 px-3 py-1 text-xs text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-12 mb-8 flex flex-wrap justify-center gap-6">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`relative text-lg ${
                    renderCurrentPage === page ? "font-medium text-[#FF462D]" : "text-[#9E9287]"
                  }`}
                >
                  {page}
                  {renderCurrentPage === page && (
                    <span className="absolute -bottom-2 left-1/2 h-0.5 w-6 -translate-x-1/2 bg-[#FF462D]" />
                  )}
                </button>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-8 flex flex-col items-center gap-4 text-sm font-medium text-[#3D3C3C] sm:flex-row sm:justify-between">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={renderCurrentPage === 1}
                className={`flex items-center gap-2 ${
                  renderCurrentPage === 1 ? "text-gray-400" : "hover:text-[#FF462D]"
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="15,18 9,12 15,6" />
                </svg>
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={renderCurrentPage === totalPages}
                className={`flex items-center gap-2 ${
                  renderCurrentPage === totalPages ? "text-gray-400" : "hover:text-[#FF462D]"
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
                >
                  <polyline points="9,18 15,12 9,6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {activeEmbedStory && (
        <div className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/80 px-4 py-10" onClick={handleCloseEmbed}>
          <div
            className="relative flex w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex flex-col gap-4 border-b border-gray-200 bg-[#F2F1EE] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-[#FF462D]">{activeEmbedStory.alliance}</p>
                <h2 className="text-2xl font-light text-[#3D3C3C]">{activeEmbedStory.title}</h2>
              </div>
              <div className="flex flex-wrap items-center justify-end gap-3">
                {demoCredentials && (
                  <div className="rounded-md border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-[#3D3C3C]">
                    Login: <span className="font-semibold">{demoCredentials.username}</span> / {demoCredentials.password}
                  </div>
                )}
                {(hasActiveVideo || hasActiveDemo) && (
                  <div className="flex items-center gap-2 rounded-full border border-gray-300 bg-white p-1">
                    {hasActiveVideo && (
                      <button
                        type="button"
                        onClick={() => setActiveEmbedView("video")}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                          activeEmbedView === "video"
                            ? "bg-[#FF462D] text-white shadow-sm"
                            : "text-[#3D3C3C] hover:bg-[#F2F1EE]"
                        }`}
                        aria-pressed={activeEmbedView === "video"}
                      >
                        Watch Video
                      </button>
                    )}
                    {hasActiveDemo && (
                      <button
                        type="button"
                        onClick={() => {
                          if (typeof window !== "undefined" && activeEmbedStory?.demoUrl) {
                            window.open(activeEmbedStory.demoUrl, "_blank", "noopener,noreferrer")
                          }
                          if (activeEmbedStory?.demoUrl) {
                            setActiveEmbedView("demo")
                            return
                          }
                          setActiveEmbedView("figma")
                        }}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                          isViewDemoActive ? "bg-[#FF462D] text-white shadow-sm" : "text-[#3D3C3C] hover:bg-[#F2F1EE]"
                        }`}
                        aria-pressed={isViewDemoActive}
                      >
                        View Demo
                      </button>
                    )}
                  </div>
                )}
                <a
                  href={activeEmbedStory.externalUrl || activeEmbedStory.embedUrl || activeEmbedStory.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#FF462D] px-4 py-2 text-sm font-medium text-[#FF462D] transition-colors hover:bg-[#FF462D] hover:text-white"
                >
                  Open in New Tab
                </a>
                <button
                  type="button"
                  onClick={handleCloseEmbed}
                  className="rounded-full bg-white p-2 text-[#3D3C3C] transition-colors hover:bg-[#FF462D] hover:text-white"
                  aria-label="Close Connected Traveler modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 bg-[#1C1C1C]">
              {activeEmbedView === "video" && activeEmbedStory.videoUrl ? (
                <iframe
                  src={activeEmbedStory.videoUrl}
                  title={`${activeEmbedStory.title} overview video`}
                  className="h-[70vh] w-full border-0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              ) : activeEmbedView === "demo" && activeEmbedStory.demoUrl ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center text-white">
                  <p className="text-lg font-light text-white">
                    Open the demo in a new tab to explore the Maintenance, Repair, and Operations experience.
                  </p>
                  <a
                    href={activeEmbedStory.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#FF462D]"
                  >
                    Launch Demo
                  </a>
                  {demoCredentials && (
                    <div className="rounded-md border border-white/60 bg-white/10 px-4 py-3 text-sm">
                      Login: <span className="font-semibold">{demoCredentials.username}</span> / {demoCredentials.password}
                    </div>
                  )}
                </div>
              ) : (
                <iframe
                  src={activeEmbedStory?.embedUrl}
                  title={`${activeEmbedStory?.title ?? ""} prototype`}
                  className="h-[70vh] w-full border-0"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      )}

      <section className="bg-[#F2F1EE] px-4 py-12 sm:px-8 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-2xl font-light text-[#3D3C3C] sm:text-3xl lg:text-4xl">Ready to explore?</h2>
          <p className="mb-8 text-lg text-[#9E9287]">
            Discover how our AI research can help solve your most challenging problems
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setIsDemoLoginOpen(true)}
              className="rounded-md border border-[#F2F1EE] bg-[#FF462D] px-8 py-3 font-medium text-white transition-colors hover:bg-[#F2F1EE] hover:text-[#FF462D]"
            >
              Explore Demos
            </button>
            <button
              onClick={() => setIsVideoLibraryOpen(true)}
              className="rounded-md border border-[#FF462D] px-8 py-3 font-medium text-[#FF462D] transition-colors hover:bg-[#FF462D] hover:text-white"
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
              className="rounded-md border border-[#FF462D] px-8 py-3 font-medium text-[#FF462D] transition-colors hover:bg-[#FF462D] hover:text-white"
            >
              Case Studies
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 bg-white px-4 py-6 sm:px-8 lg:px-16 lg:py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29%281%29%281%29%281%29%281%29%281%29%281%29-xSaA10EDLaeXw1IM0kmRa89Z2EG3YK.png"
              alt="Kyndryl Alliance Experience"
              className="h-8 w-auto object-contain lg:h-10"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm font-light text-[#9E9287] lg:text-base">
            <a href="/alliance-home" className="text-[#9E9287] no-underline">
              Home
            </a>
            <ChevronRight className="h-4 w-4 text-[#9E9287]" />
            <span className="font-medium text-[rgba(41,112,122,1)]">Kyndryl's AI Journey</span>
          </div>
        </div>
      </footer>

      {isDemoLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-lg bg-white shadow-2xl">
            <DemoLoginModal
              onClose={() => setIsDemoLoginOpen(false)}
              onLogin={() => {
                setIsDemoLoginOpen(false)
              }}
            />
          </div>
        </div>
      )}

      {isUseCasesOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/20 p-4 backdrop-blur-md">
          <div className="max-h-[90vh] w-full max-w-5xl overflow-auto rounded-lg bg-white shadow-2xl">
            <UseCasesFocusModal
              isOpen={isUseCasesOpen}
              onClose={() => setIsUseCasesOpen(false)}
              onOpenEmbed={openEmbedModalForStory}
            />
          </div>
        </div>
      )}

      {isFeatureModalOpen && selectedStory && (
        <FeatureFocusModal
          isOpen={isFeatureModalOpen}
          onClose={() => {
            setIsFeatureModalOpen(false)
            setSelectedStory(null)
          }}
          story={selectedStory}
          onOpenEmbed={openEmbedModalForStory}
        />
      )}

      {isVideoLibraryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/20 p-4 backdrop-blur-md">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-lg bg-white shadow-2xl">
            <VideoLibraryModal onClose={() => setIsVideoLibraryOpen(false)} />
          </div>
        </div>
      )}
    </div>
  )
}
