"use client"

import { X, Search, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface TabContent {
  title: string
  subtitle: string
  description: string
  image: string
}

interface SolutionScreen {
  title: string
  subtitle: string
  description: string
  image: string
}

interface CaseStudyData {
  opportunity: TabContent
  challenge: TabContent
  solution: SolutionScreen[] // Changed to array of solution screens
  outcome: TabContent
}

interface FeatureFocusModalProps {
  isOpen: boolean
  onClose: () => void
  caseStudyData?: CaseStudyData
  story?: any
}

export default function FeatureFocusModal({ isOpen, onClose, caseStudyData, story }: FeatureFocusModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("Solution")
  const [isIframeOpen, setIsIframeOpen] = useState(false)
  const [currentSolutionIndex, setCurrentSolutionIndex] = useState(0) // Added state for solution screen index

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
    solution: [
      {
        title: "Agentic Sales Assistant",
        subtitle: "Mobile Intelligent Bot",
        description:
          "When a customer comes in to purchase a new iPhone and trade in their old device, the Mobile Intelligent Bot (MIB) ensures the entire process is completed in just 8 minutes. By automating checks, validations, and trade-in calculations, MIB delivers a seamless, fast, and hassle-free experience, minimizing waiting time and maximizing customer satisfaction.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-C6UfyHLe4P5aeYaC0feLcUuu9oDTYU.png",
      },
      {
        title: "Agentic Sales Assistant",
        subtitle: "Helpdesk Only",
        description:
          "If the process is handled solely through the helpdesk, it typically takes around 45 minutes. This is because each step—from verifying the old device to completing the trade-in and purchase—relies on manual intervention. While the helpdesk ensures accuracy and human interaction, the longer time frame can lead to delays during peak hours.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e3MBOLpIeUbcPnOt8S1LTfxSuQ9jJh.png",
      },
      {
        title: "Agentic Sales Assistant",
        subtitle: "Helpdesk + Mobile Intelligent Bot",
        description:
          "In scenarios where both the helpdesk and MIB work together, the process is completed in about 35 minutes. This hybrid model combines the speed and efficiency of automation with the reassurance of human support for more complex queries, creating a balance between convenience and personalized service.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Qx04oQNMRL3DlblAxX1F6ySE0RK10O.png",
      },
    ],
    outcome: {
      title: "Measurable Business Results",
      subtitle: "Performance Metrics",
      description:
        "Implementation of the Agentic Media Monitor resulted in 85% faster response times, 40% improvement in customer satisfaction scores, and 60% reduction in escalated complaints. The automated sentiment analysis enabled proactive issue resolution, leading to increased passenger loyalty and positive brand perception across social media platforms.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VRsisTvtopmnPmmkhPMpLZ0Ht25fbV.png",
    },
  }

  const getCaseStudyDataForStory = (storyId: number): CaseStudyData => {
    switch (storyId) {
      case 1: // Agentic Airport AI Experience
        return {
          opportunity: {
            title: "Airport Operations Transformation",
            subtitle: "Passenger Experience Enhancement",
            description:
              "The aviation industry faces increasing pressure to enhance passenger experience while managing operational efficiency. Airports need intelligent systems to handle complex logistics, reduce wait times, and provide seamless passenger journeys from check-in to boarding.",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qroohISaYhm8KYJElbQm8a23m4BfTS.png",
          },
          challenge: {
            title: "Operational Complexity",
            subtitle: "Current State Analysis",
            description:
              "Traditional airport operations struggle with manual processes, disconnected systems, and reactive problem-solving. This leads to passenger delays, inefficient resource allocation, and poor visibility into operational performance across terminals and gates.",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qroohISaYhm8KYJElbQm8a23m4BfTS.png",
          },
          solution: [
            {
              title: "Agentic Airport AI Experience",
              subtitle: "Redefining Travel Experience",
              description:
                "John is a frequent flyer, travelling with his wife Kathy, and 11-year-old daughter Helen. He wants to check the best rates to fly Amsterdam. Create a travel itinerary from his doorstep to the Amsterdam airport Schiphol",
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bqXG9Sk6fCNFEaRIKFvNq1p5IUTSsJ.png",
            },
            {
              title: "Agentic Airport AI Experience",
              subtitle: "Redefining Technical Support",
              description:
                "Frank leverages advanced technology to keep aircraft operating safely and efficiently. With a flexible, resource-focused approach, he ensures maintenance stays on track, even in dynamic conditions. Frank uses live visual collaboration with a retired engineer to perform on-demand maintenance during flight changes. This approach accelerates service, prioritizes tasks, and ensures flights remain safe, reliable, and on schedule for passengers and crew.",
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ooV69PYAQNj3xgnqY0DgMF7MGpctWL.png",
            },
            {
              title: "Agentic Airport AI Experience",
              subtitle: "Redefining Pilot Allocation",
              description:
                "The pilot is a highly trained professional responsible for the safety and operation of the aircraft. In this scenario, the pilot collaborates with ground maintenance and agentic AI systems to report in-flight observations, confirm system statuses, and support faster, more coordinated troubleshooting. Their expertise is crucial for making real-time decisions and ensuring passenger safety.",
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eRSZ51esE6vlv6U09EwJp5kLazYYR2.png",
            },
          ],
          outcome: {
            title: "Operational Excellence",
            subtitle: "Performance Metrics",
            description:
              "Implementation resulted in 95% gate availability, 98% system health monitoring, and proactive alert management. The AI system reduced operational delays by 40% and improved passenger satisfaction through better resource allocation and predictive maintenance.",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qroohISaYhm8KYJElbQm8a23m4BfTS.png",
          },
        }

      case 3: // Agentic Sales Assistant (keep existing data)
        return {
          opportunity: {
            title: "Sales Process Optimization",
            subtitle: "Customer Experience Enhancement",
            description:
              "Retail environments face increasing pressure to provide fast, efficient service while maintaining high customer satisfaction. Mobile device sales and trade-ins require complex validation processes that can significantly impact customer wait times and overall experience.",
            image: "/business-opportunity-dashboard-with-growth-charts-.jpg",
          },
          challenge: {
            title: "Service Delivery Challenges",
            subtitle: "Current State Analysis",
            description:
              "Traditional sales processes rely heavily on manual intervention, leading to extended wait times and inconsistent service quality. Complex trade-in evaluations and device validations create bottlenecks that frustrate customers and reduce sales efficiency.",
            image: "/operational-challenges-dashboard-showing-alerts-an.jpg",
          },
          solution: [
            {
              title: "Agentic Sales Assistant",
              subtitle: "Mobile Intelligent Bot",
              description:
                "When a customer comes in to purchase a new iPhone and trade in their old device, the Mobile Intelligent Bot (MIB) ensures the entire process is completed in just 8 minutes. By automating checks, validations, and trade-in calculations, MIB delivers a seamless, fast, and hassle-free experience, minimizing waiting time and maximizing customer satisfaction.",
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SXlUa.png",
            },
            {
              title: "Agentic Sales Assistant",
              subtitle: "Helpdesk Only",
              description:
                "If the process is handled solely through the helpdesk, it typically takes around 45 minutes. This is because each step—from verifying the old device to completing the trade-in and purchase—relies on manual intervention. While the helpdesk ensures accuracy and human interaction, the longer time frame can lead to delays during peak hours.",
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9bA54.png",
            },
            {
              title: "Agentic Sales Assistant",
              subtitle: "Helpdesk + Mobile Intelligent Bot",
              description:
                "In scenarios where both the helpdesk and MIB work together, the process is completed in about 35 minutes. This hybrid model combines the speed and efficiency of automation with the reassurance of human support for more complex queries, creating a balance between convenience and personalized service.",
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-G18iB.png",
            },
          ],
          outcome: {
            title: "Enhanced Customer Experience",
            subtitle: "Performance Metrics",
            description:
              "Implementation of the Agentic Sales Assistant resulted in 82% reduction in service time, 95% customer satisfaction improvement, and 60% increase in successful trade-in completions. The hybrid approach optimized both speed and service quality.",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VRsisTvtopmnPmmkhPMpLZ0Ht25fbV.png",
          },
        }

      default:
        // Return default case study data for other stories
        return defaultCaseStudyData
    }
  }

  const currentCaseStudy = caseStudyData || (story ? getCaseStudyDataForStory(story.id) : defaultCaseStudyData)

  const currentContent =
    activeTab === "Solution"
      ? currentCaseStudy.solution[currentSolutionIndex]
      : currentCaseStudy[activeTab.toLowerCase() as keyof Omit<CaseStudyData, "solution">]

  const handlePreviousTab = () => {
    const currentIndex = tabs.indexOf(activeTab)
    const previousIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1
    setActiveTab(tabs[previousIndex])
    setCurrentSolutionIndex(0) // Reset solution index when changing tabs
  }

  const handleNextTab = () => {
    const currentIndex = tabs.indexOf(activeTab)
    const nextIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1
    setActiveTab(tabs[nextIndex])
    setCurrentSolutionIndex(0) // Reset solution index when changing tabs
  }

  const handlePreviousSolution = () => {
    setCurrentSolutionIndex((prev) => (prev === 0 ? currentCaseStudy.solution.length - 1 : prev - 1))
  }

  const handleNextSolution = () => {
    setCurrentSolutionIndex((prev) => (prev === currentCaseStudy.solution.length - 1 ? 0 : prev + 1))
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
            <div className="flex items-center gap-4">
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

              {activeTab === "Solution" && (
                <div className="flex items-center gap-2 ml-4">
                  {currentCaseStudy.solution.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSolutionIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSolutionIndex ? "bg-[#FF462D]" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

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

              {activeTab === "Solution" && currentCaseStudy.solution.length > 1 && (
                <div className="flex items-center gap-4 mt-8">
                  <button
                    onClick={handlePreviousSolution}
                    className="flex items-center gap-2 px-4 py-2 text-[#727175] hover:text-[#3D3C3C] transition-colors border border-gray-300 rounded-md hover:border-[#FF462D]"
                    style={{
                      fontFamily: "TWK Everett, sans-serif",
                    }}
                  >
                    <ChevronLeft size={16} />
                    Previous
                  </button>

                  <span className="text-[#727175]" style={{ fontFamily: "TWK Everett, sans-serif" }}>
                    {currentSolutionIndex + 1} of {currentCaseStudy.solution.length}
                  </span>

                  <button
                    onClick={handleNextSolution}
                    className="flex items-center gap-2 px-4 py-2 text-[#727175] hover:text-[#3D3C3C] transition-colors border border-gray-300 rounded-md hover:border-[#FF462D]"
                    style={{
                      fontFamily: "TWK Everett, sans-serif",
                    }}
                  >
                    Next
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </div>

            {/* Right Image Section */}
            <div
              className="flex-1 flex items-center justify-center px-12 my-12 mx-12 py-8 cursor-pointer"
              style={{
                backgroundImage: `url(${currentContent.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => setIsIframeOpen(true)}
            >
              {/* Static image with click functionality */}
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

      {isIframeOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1002,
            padding: "2rem",
          }}
          onClick={() => setIsIframeOpen(false)}
        >
          <div
            style={{
              width: "711px",
              height: "400px",
              position: "relative",
              backgroundColor: "white",
              borderRadius: "8px",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsIframeOpen(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                zIndex: 1003,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <X size={16} />
            </button>
            <iframe
              src="https://embed.figma.com/proto/6ecHaQxnlMV4HV057v0rQD/Liverpool-Studio-Use-cases?page-id=5%3A3&node-id=86-7599&scaling=scale-down&content-scaling=fixed&starting-point-node-id=86%3A7635&embed-host=share"
              style={{
                width: "100%",
                height: "100%",
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  )
}
