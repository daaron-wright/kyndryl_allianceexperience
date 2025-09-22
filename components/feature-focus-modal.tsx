"use client"

import { X, Search, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface TabContent {
  title: string
  subtitle: string
  description: string
  image: string
}

interface CaseStudyData {
  opportunity: TabContent
  challenge: TabContent
  solution: TabContent
  outcome: TabContent
}

interface FeatureFocusModalProps {
  isOpen: boolean
  onClose: () => void
  caseStudyData?: CaseStudyData
}

export default function FeatureFocusModal({ isOpen, onClose, caseStudyData }: FeatureFocusModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("Solution")

  if (!isOpen) return null

  const tabs = ["Opportunity", "Challenge", "Solution", "Outcome"]

  const defaultCaseStudyData: CaseStudyData = {
    opportunity: {
      title: "Market Opportunity Analysis",
      subtitle: "Business Growth",
      description:
        "The aviation industry faces increasing pressure to enhance passenger experience while managing operational efficiency. Social media has become a critical touchpoint where passenger sentiment directly impacts brand reputation and business outcomes. Airlines and airports need real-time insights to proactively address concerns and capitalize on positive feedback.",
      image: "/business-opportunity-dashboard-with-growth-charts-.jpg",
    },
    challenge: {
      title: "Operational Challenges",
      subtitle: "Current State Analysis",
      description:
        "Traditional customer service approaches struggle to keep pace with the volume and velocity of social media interactions. Manual monitoring leads to delayed responses, missed opportunities, and escalated customer dissatisfaction. Without automated sentiment analysis, organizations cannot prioritize critical issues or measure the effectiveness of their response strategies.",
      image: "/operational-challenges-dashboard-showing-alerts-an.jpg",
    },
    solution: {
      title: "Agentic Media Monitor",
      subtitle: "Sentiment Analysis",
      description:
        "Our smart dashboard empowers airport teams to seamlessly monitor social media feedback in real time, ensuring passenger concerns are never overlooked. The agentic bot automatically analyzes incoming feedback and sends immediate, personalized responses to users, while the airport team is simultaneously notified of the interaction. The platform also offers multiple options to categorize issues—whether related to services, facilities, or experiences—making it easier to prioritize and resolve them efficiently. By combining intelligent monitoring, automated assistance, and structured issue management, the system helps airports maintain higher service standards and build stronger trust with travelers.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7DC7HVpKT5Jx37aHVCYIgPgdbIZM9H.png",
    },
    outcome: {
      title: "Measurable Business Results",
      subtitle: "Performance Metrics",
      description:
        "Implementation of the Agentic Media Monitor resulted in 85% faster response times, 40% improvement in customer satisfaction scores, and 60% reduction in escalated complaints. The automated sentiment analysis enabled proactive issue resolution, leading to increased passenger loyalty and positive brand perception across social media platforms.",
      image: "/business-results-dashboard-with-kpi-metrics-and-su.jpg",
    },
  }

  const currentCaseStudy = caseStudyData || defaultCaseStudyData
  const currentContent = currentCaseStudy[activeTab.toLowerCase() as keyof CaseStudyData]

  const handlePreviousTab = () => {
    const currentIndex = tabs.indexOf(activeTab)
    const previousIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1
    setActiveTab(tabs[previousIndex])
  }

  const handleNextTab = () => {
    const currentIndex = tabs.indexOf(activeTab)
    const nextIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1
    setActiveTab(tabs[nextIndex])
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
          zIndex: 1001,
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
          <div className="flex items-center justify-between p-6 pb-4 bg-background">
            <h1
              style={{
                fontSize: "2rem",
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 300,
                color: "#FF462D",
                margin: 0,
              }}
            >
              {activeTab}
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

          {/* Main Content */}
          <div className="flex h-full" style={{ height: "calc(100% - 180px)" }}>
            {/* Left Content Section */}
            <div className="flex-1 flex flex-col justify-center px-12 py-8 bg-white">
              <h2
                className="text-[#3D3C3C] mb-4 leading-tight"
                style={{
                  fontSize: "3rem",
                  fontFamily: "TWK Everett, sans-serif",
                  fontWeight: 300,
                  lineHeight: "1.1",
                }}
              >
                {currentContent.title}
              </h2>

              {currentContent.subtitle && (
                <h3
                  className="text-[#3D3C3C] mb-8"
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: "TWK Everett, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {currentContent.subtitle}
                </h3>
              )}

              <p
                className="text-[#3D3C3C] leading-relaxed"
                style={{
                  fontSize: "1.1rem",
                  fontFamily: "TWK Everett, sans-serif",
                  lineHeight: "1.6",
                }}
              >
                {currentContent.description}
              </p>
            </div>

            {/* Right Image Section */}
            <div
              className="flex-1 flex items-center justify-center px-7 my-9 mx-8 py-0"
              style={{
                backgroundImage: `url(${currentContent.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Static image without play button overlay */}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="absolute bottom-16 left-0 right-0 flex items-center justify-center">
            <div className="flex items-center gap-8 relative">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-lg font-medium transition-colors relative ${
                    activeTab === tab ? "text-[#3D3C3C]" : "text-[#727175] hover:text-[#3D3C3C]"
                  }`}
                  style={{
                    fontFamily: "TWK Everett, sans-serif",
                  }}
                >
                  {tab}
                  {activeTab === tab && <div className="absolute bottom-[-8px] left-0 right-0 h-0.5 bg-[#FF462D]" />}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between px-6">
            <button
              onClick={handlePreviousTab}
              className="flex items-center gap-2 text-[#727175] hover:text-[#3D3C3C] transition-colors"
              style={{
                fontFamily: "TWK Everett, sans-serif",
              }}
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            <button
              onClick={handleNextTab}
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
    </>
  )
}
