"use client"

import { X, Search, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface FeatureFocusModalProps {
  isOpen: boolean
  onClose: () => void
  featureData?: {
    title: string
    description: string
    image: string
  }
}

export default function FeatureFocusModal({ isOpen, onClose, featureData }: FeatureFocusModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("Challenge")

  if (!isOpen) return null

  const tabs = ["Opportunity", "Challenge", "Solution", "Outcome"]

  const tabContent = {
    Opportunity: {
      title: "Market Opportunity Analysis",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      additionalText:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    Challenge: {
      title: "Agentic Media Monitor",
      description:
        "Our smart dashboard empowers airport teams to seamlessly monitor social media feedback in real time, ensuring passenger concerns are never overlooked. The agentic bot automatically analyzes incoming feedback and sends immediate, personalized responses to users, while the airport team is simultaneously notified of the interaction. The platform also offers multiple options to categorize issues—whether related to services, facilities, or experiences—making it easier to prioritize and resolve them efficiently. By combining intelligent monitoring, automated assistance, and structured issue management, the system helps airports maintain higher service standards and build stronger trust with travelers.",
      additionalText:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    Solution: {
      title: "AI-Powered Solution Implementation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      additionalText:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    Outcome: {
      title: "Measurable Business Results",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      additionalText:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  }

  const currentContent = tabContent[activeTab as keyof typeof tabContent]

  return (
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
            Solution
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
        <div className="px-6 h-full">
          <div className="grid grid-cols-2 gap-8 h-full items-center -mt-4">
            {/* Left Content */}
            <div className="flex flex-col justify-center pr-8">
              <h2
                className="text-[#3D3C3C] mb-6 leading-tight"
                style={{
                  fontSize: "2.5rem",
                  fontFamily: "TWK Everett, sans-serif",
                  fontWeight: 300,
                  lineHeight: "1.2",
                }}
              >
                {currentContent.title}
              </h2>

              <p
                className="text-[#727175] mb-6 leading-relaxed"
                style={{
                  fontSize: "1.1rem",
                  fontFamily: "TWK Everett, sans-serif",
                  lineHeight: "1.6",
                }}
              >
                {currentContent.description}
              </p>

              <p
                className="text-[#727175] leading-relaxed"
                style={{
                  fontSize: "1.1rem",
                  fontFamily: "TWK Everett, sans-serif",
                  lineHeight: "1.6",
                }}
              >
                {currentContent.additionalText}
              </p>
            </div>

            {/* Right Image */}
            <div className="flex items-center justify-center">
              <div
                className="w-full h-96 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-06cw4thx3F0tHlMOYNofDadruRUQOA.png)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="absolute bottom-20 left-0 right-0 flex items-center justify-center">
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

        {/* Next Button */}
        <div className="absolute bottom-20 right-6"></div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between px-6">
          <button
            className="flex items-center gap-2 text-[#727175] hover:text-[#3D3C3C] transition-colors"
            style={{
              fontFamily: "TWK Everett, sans-serif",
            }}
          >
            <ChevronLeft size={20} />
            Previous
          </button>

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
  )
}
