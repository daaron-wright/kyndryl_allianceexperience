"use client"

import { useState, useEffect } from "react"

const fontFamilyClass = "font-['TWK_Everett',sans-serif]"

export default function VideoLibraryModal({
  onClose,
  initialAlliance = "All",
}: {
  onClose: () => void
  initialAlliance?: string
}) {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All")
  const [selectedAIFeature, setSelectedAIFeature] = useState<string>("All")
  const [selectedAlliance, setSelectedAlliance] = useState<string>(initialAlliance)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(null)
  const [isFilterCollapsed, setIsFilterCollapsed] = useState(true)
  const [csvVideos, setCsvVideos] = useState<any[]>([])

  useEffect(() => {
    setSelectedAlliance(initialAlliance)
  }, [initialAlliance])

  useEffect(() => {
    const fetchCSVVideos = async () => {
      try {
        console.log("[v0] Fetching CSV videos...")
        const csvUrl =
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DAM%20Videos%20-%20List-5OAcuPFFaY8mm0feJHtNE8g7V0OjwS.csv"
        const response = await fetch(csvUrl)
        const csvText = await response.text()

        // Parse CSV
        const lines = csvText.split("\n")
        const headers = lines[0].split(",").map((h) => h.trim().replace(/"/g, ""))

        const videos = []
        for (let i = 1; i < lines.length; i++) {
          if (lines[i].trim()) {
            const values = lines[i].split(",").map((v) => v.trim().replace(/"/g, ""))
            const video: any = {}
            headers.forEach((header, index) => {
              video[header] = values[index] || ""
            })

            // Transform CSV data to match our video structure
            const transformedVideo = {
              title: video.Title || video.title || "Untitled",
              alliance: video.Alliance || video.alliance || "Cross",
              industry: video.Industry || video.industry || "General",
              aiFeature: video["AI Feature"] || video.aiFeature || "Digital Transformation",
              duration: video.Duration || video.duration || "N/A",
              url: video.URL || video.url || "",
              featured: (video.Featured || video.featured || "").toLowerCase() === "true",
              type: video.Type || video.type || "video",
              // Additional metadata from CSV columns as tags
              tags: [
                video.Category || "",
                video.Region || "",
                video.Customer || "",
                video.UseCase || "",
                video.Technology || "",
                video.Solution || "",
              ].filter((tag) => tag && tag.trim()),
              description:
                video.Description ||
                video.description ||
                "Content title utenim ad minim veniam, quis nostrud exercitation",
              customerName: video.Customer || video.customer || "customer name",
              region: video.Region || video.region || "",
              category: video.Category || video.category || "",
              useCase: video.UseCase || video.useCase || "",
              technology: video.Technology || video.technology || "",
              solution: video.Solution || video.solution || "",
            }

            videos.push(transformedVideo)
          }
        }

        console.log("[v0] Parsed CSV videos:", videos.length)
        setCsvVideos(videos)
      } catch (error) {
        console.error("[v0] Error fetching CSV videos:", error)
      }
    }

    fetchCSVVideos()
  }, [])

  const allContent = [
    {
      title: "Mainframe Integration, Democratization",
      alliance: "Microsoft Azure",
      industry: "Financial Services",
      aiFeature: "Digital Transformation",
      duration: "2:51",
      url: "https://s7d1.scene7.com/is/content/kyndryl/democratization-mainframe-integration-en",
      featured: true,
      type: "video",
      tags: ["Mainframe", "Integration", "Modernization"],
      description: "Democratizing mainframe integration through modern cloud solutions",
      customerName: "Financial Services Client",
    },
    {
      title: "Google Cloud for Banking and Financial Services",
      alliance: "Google Cloud",
      industry: "Banking",
      aiFeature: "Cloud Services",
      duration: "1:10",
      url: "https://s7d1.scene7.com/is/content/kyndryl/fss-industry-cloud-consult",
      featured: false,
      type: "video",
      tags: ["Banking", "Cloud", "Services"],
      description: "Exploring Google Cloud solutions for banking and financial services",
      customerName: "Banking Client",
    },
    {
      title: "Kyndryl and Google Partnership",
      alliance: "Google Cloud",
      industry: "Communications & Media",
      aiFeature: "AI & Machine Learning",
      duration: "1:35",
      url: "https://s7d1.scene7.com/is/content/kyndryl/kyndryl-google-partnership",
      featured: true,
      type: "video",
      tags: ["Partnership", "AI", "Machine Learning"],
      description: "Kyndryl's partnership with Google Cloud",
      customerName: "Communications & Media Client",
    },
    {
      title: "Protect stores from merchandise and retail shrinkage",
      alliance: "Microsoft Azure",
      industry: "Retail",
      aiFeature: "Cybersecurity",
      duration: "1:27",
      url: "https://s7d1.scene7.com/is/content/kyndryl/retail-azure",
      featured: false,
      type: "video",
      tags: ["Retail", "Cybersecurity", "Protection"],
      description: "Protecting retail stores from shrinkage using Microsoft Azure",
      customerName: "Retail Client",
    },
    {
      title: "Mainframe modernization for Banking",
      alliance: "Microsoft Azure",
      industry: "Banking",
      aiFeature: "Infrastructure Modernization",
      duration: "1:17",
      url: "https://s7d1.scene7.com/is/content/kyndryl/mainframe-modernization-azure-banking",
      featured: false,
      type: "video",
      tags: ["Banking", "Mainframe", "Modernization"],
      description: "Modernizing mainframes for banking with Microsoft Azure",
      customerName: "Banking Client",
    },
    {
      title: "Elevate Customer Satisfaction",
      alliance: "Google Cloud",
      industry: "Retail",
      aiFeature: "Data Analytics",
      duration: "0:56",
      url: "https://s7d1.scene7.com/is/content/kyndryl/elevate-customer-satisfaction",
      featured: true,
      type: "video",
      tags: ["Retail", "Customer Satisfaction", "Analytics"],
      description: "Improving customer satisfaction in retail using Google Cloud",
      customerName: "Retail Client",
    },
    {
      title: "Leading Warehouse and Logistics Provider",
      alliance: "Google Cloud",
      industry: "Manufacturing",
      aiFeature: "Automation",
      duration: "1:22",
      url: "https://s7d1.scene7.com/is/content/kyndryl/leading-warehouse-logistics",
      featured: false,
      type: "video",
      tags: ["Manufacturing", "Warehouse", "Logistics"],
      description: "Leading warehouse and logistics solutions with Google Cloud",
      customerName: "Manufacturing Client",
    },
    {
      title: "Customized NDA Generator",
      alliance: "Google Cloud",
      industry: "Financial Services",
      aiFeature: "AI & Machine Learning",
      duration: "1:19",
      url: "https://s7d1.scene7.com/is/content/kyndryl/customized-nda-generator",
      featured: false,
      type: "video",
      tags: ["Financial Services", "NDA", "Generator"],
      description: "Generating customized NDAs for financial services using Google Cloud",
      customerName: "Financial Services Client",
    },
    {
      title: "Kyndryl IaaS for IBM Power with Microsoft Azure",
      alliance: "Microsoft Azure",
      industry: "Government",
      aiFeature: "Infrastructure Modernization",
      duration: "0:59",
      url: "https://s7d1.scene7.com/is/content/kyndryl/kyndryl-microsoft-iaas",
      featured: false,
      type: "video",
      tags: ["Government", "IaaS", "IBM Power"],
      description: "Kyndryl's IaaS solution for IBM Power with Microsoft Azure",
      customerName: "Government Client",
    },
    {
      title: "Address Evolving Threats Fast",
      alliance: "Microsoft Azure",
      industry: "Healthcare",
      aiFeature: "Cybersecurity",
      duration: "1:07",
      url: "https://s7d1.scene7.com/is/content/kyndryl/address-evolving-threats",
      featured: false,
      type: "video",
      tags: ["Healthcare", "Cybersecurity", "Threats"],
      description: "Addressing evolving threats in healthcare with Microsoft Azure",
      customerName: "Healthcare Client",
    },
    {
      title: "Kyndryl Microsoft Partnership",
      alliance: "Microsoft Azure",
      industry: "Communications & Media",
      aiFeature: "Digital Transformation",
      duration: "1:33",
      url: "https://s7d1.scene7.com/is/content/kyndryl/kyndryl-microsoft-partnership",
      featured: false,
      type: "video",
      tags: ["Communications & Media", "Partnership", "Digital Transformation"],
      description: "Kyndryl's partnership with Microsoft Azure",
      customerName: "Communications & Media Client",
    },
    {
      title: "Financial Services Adapt of Mainframe Modernization",
      alliance: "Microsoft Azure",
      industry: "Financial Services",
      aiFeature: "Infrastructure Modernization",
      duration: "1:19",
      url: "https://s7d1.scene7.com/is/content/kyndryl/optimize-mission-critical-financial-workloads",
      featured: false,
      type: "video",
      tags: ["Financial Services", "Mainframe", "Modernization"],
      description: "Adapting mainframe modernization for financial services with Microsoft Azure",
      customerName: "Financial Services Client",
    },
    {
      title: "Kyndryl Sustainability Advisor",
      alliance: "Google Cloud",
      industry: "Energy & Utilities",
      aiFeature: "Data Analytics",
      duration: "0:41",
      url: "https://s7d1.scene7.com/is/content/kyndryl/sustainability-advisor",
      featured: false,
      type: "video",
      tags: ["Energy & Utilities", "Sustainability", "Advisor"],
      description: "Kyndryl's sustainability advisor for energy and utilities using Google Cloud",
      customerName: "Energy & Utilities Client",
    },
    {
      title: "Banking customer service – Relationship AI agent",
      alliance: "Cross",
      industry: "Banking",
      aiFeature: "AI & Machine Learning",
      duration: "0:46",
      url: "https://s7d1.scene7.com/is/content/kyndryl/banking-relationship-agent",
      featured: false,
      type: "video",
      tags: ["Banking", "AI", "Relationship Agent"],
      description: "Banking customer service using a relationship AI agent",
      customerName: "Banking Client",
    },
    {
      title: "Automotive GenAI Customer 360 video",
      alliance: "Cross",
      industry: "Automotive",
      aiFeature: "AI & Machine Learning",
      duration: "0:51",
      url: "https://s7d1.scene7.com/is/content/kyndryl/automotive-customer-360",
      featured: false,
      type: "video",
      tags: ["Automotive", "GenAI", "Customer 360"],
      description: "Automotive GenAI customer 360 video",
      customerName: "Automotive Client",
    },
    {
      title: "Fire Safety solution (AWS)",
      alliance: "AWS",
      industry: "Government",
      aiFeature: "Automation",
      duration: "3:5",
      url: "Fire Fighter Safety Solution-demo-v4-3.mp4",
      featured: true,
      type: "video",
      tags: ["Government", "Fire Safety", "Automation"],
      description: "Fire safety solution using AWS",
      customerName: "Government Client",
    },
    {
      title: "GenAI navigator capability",
      alliance: "Cross",
      industry: "Communications & Media",
      aiFeature: "AI & Machine Learning",
      duration: "1:51",
      url: "Kyndryl GenAI Navigator Solution Demo",
      featured: false,
      type: "demo",
      tags: ["Communications & Media", "GenAI", "Navigator"],
      description: "GenAI navigator capability demo",
      customerName: "Communications & Media Client",
    },
    {
      title: "Kyndryl IDP Solution for Loan Application Manager, Insurance Industry",
      alliance: "Cross",
      industry: "Financial Services",
      aiFeature: "Automation",
      duration: "3:01",
      url: "Kyndryl IDP Solution for Loan Application Manager.mp4",
      featured: false,
      type: "video",
      tags: ["Financial Services", "IDP", "Loan Application"],
      description: "Kyndryl IDP solution for loan application management in the insurance industry",
      customerName: "Insurance Client",
    },
    {
      title: "Agentic IT management",
      alliance: "Cross",
      industry: "Telecommunications",
      aiFeature: "Managed Services",
      duration: "2:24",
      url: "Kyndryl Agentic IT Management.mp4",
      featured: false,
      type: "video",
      tags: ["Telecommunications", "Agentic IT", "Management"],
      description: "Agentic IT management video",
      customerName: "Telecommunications Client",
    },
    {
      title: "Kyndryl healthcare assistant",
      alliance: "Cross",
      industry: "Healthcare",
      aiFeature: "AI & Machine Learning",
      duration: "3:14",
      url: "Kyndryl Healthcare Assistant.mp4",
      featured: false,
      type: "video",
      tags: ["Healthcare", "AI", "Healthcare Assistant"],
      description: "Kyndryl healthcare assistant video",
      customerName: "Healthcare Client",
    },
    {
      title: "Aviation Industry – Figma Use Case",
      alliance: "Cross",
      industry: "Automotive",
      aiFeature: "Digital Transformation",
      duration: "N/A",
      url: "https://www.figma.com/proto/SOJfxIoop1uPyLkAYrd19D/Kyndryl-Connected-Traveller--New-Version?page-id=170%3A2293&node-id=177-18664&viewport=3245%2C-460%2C0.13&t=w4tQkCe2sDolVUBF-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2014%3A9590",
      featured: false,
      type: "demo",
      tags: ["Automotive", "Aviation", "Figma"],
      description: "Aviation industry use case using Figma",
      customerName: "Aviation Client",
    },
    {
      title: "Retail Industry – Figma Use Case",
      alliance: "Cross",
      industry: "Retail",
      aiFeature: "Digital Transformation",
      duration: "N/A",
      url: "https://www.figma.com/proto/NhVo9auVTYErgwPGARbi8P/NRF-Event?page-id=255%3A2959&node-id=552-103795&viewport=5899%2C-1406%2C0.13&t=azoPAKa205pvTkv0-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=552%3A103795",
      featured: false,
      type: "demo",
      tags: ["Retail", "Figma", "Use Case"],
      description: "Retail industry use case using Figma",
      customerName: "Retail Client",
    },
    {
      title: "Manufacturing Industry – Figma Use Case",
      alliance: "Cross",
      industry: "Manufacturing",
      aiFeature: "Automation",
      duration: "N/A",
      url: "https://www.figma.com/proto/2R2qYArOjV0I9bXDBv3hBc/Plant-360-Demo?node-id=239-2737&t=30csRjSwcUMPzizt-1&starting-point-node-id=406%3A1499",
      featured: false,
      type: "demo",
      tags: ["Manufacturing", "Plant Operations", "Automation"],
      description: "Interactive manufacturing plant management demo",
      customerName: "Manufacturing Partner",
    },
    ...csvVideos,
  ]

  const filteredContent = allContent.filter((item) => {
    const matchesIndustry = selectedIndustry === "All" || item.industry === selectedIndustry
    const matchesAIFeature = selectedAIFeature === "All" || item.aiFeature === selectedAIFeature
    const matchesAlliance = selectedAlliance === "All" || item.alliance === selectedAlliance
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.alliance.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.aiFeature.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesIndustry && matchesAIFeature && matchesAlliance && matchesSearch
  })

  const itemsPerPage = 4
  const calculatedPages = Math.ceil(filteredContent.length / itemsPerPage)
  const totalPages = Math.min(calculatedPages, 6)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = filteredContent.slice(startIndex, startIndex + itemsPerPage)

  const industries = [
    "All",
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
  const aiFeatures = [
    "All",
    "AI & Machine Learning",
    "Data Analytics",
    "Automation",
    "Cybersecurity",
    "Cloud Services",
    "Infrastructure Modernization",
    "Digital Transformation",
    "Managed Services",
  ]
  const alliances = ["All", "AWS", "Google Cloud", "Microsoft Azure", "Cross"]

  const handleVideoClick = (index: number) => {
    if (playingVideoIndex === index) {
      setPlayingVideoIndex(null)
    } else {
      setPlayingVideoIndex(index)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-7xl h-full max-h-[90vh] overflow-hidden rounded-lg bg-white shadow-2xl flex flex-col ${fontFamilyClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 bg-white p-6">
          <h1 className="text-[32px] font-light text-[#FF462D]">Customer Stories</h1>
          <div className="flex items-center gap-4">
            <div className="relative w-full sm:w-64 md:w-80">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-600 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#FF462D]"
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

        {/* Collapsible Filter Section */}
        <div className="bg-white border-b border-gray-200">
          <button
            onClick={() => setIsFilterCollapsed(!isFilterCollapsed)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="text-lg font-medium text-gray-900 mb-3" style={{ fontFamily: "TWK Everett, sans-serif" }}>
              Filters
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`transform transition-transform duration-200 ${isFilterCollapsed ? "rotate-0" : "rotate-90"}`}
            >
              <polyline points="9,18 15,12 9,6" />
            </svg>
          </button>

          {!isFilterCollapsed && (
            <div className="p-6 space-y-6 border-t border-gray-100">
              {/* Industry Filter */}
              <div>
                <h3
                  className="text-lg font-medium text-gray-900 mb-3"
                  style={{ fontFamily: "TWK Everett, sans-serif" }}
                >
                  Industry
                </h3>
                <div className="flex flex-wrap gap-3">
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      onClick={() => {
                        setSelectedIndustry(industry)
                        setCurrentPage(1)
                      }}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedIndustry === industry
                          ? "border-2 border-[#FF462D] bg-white text-[#FF462D]"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                      style={{ fontFamily: "TWK Everett, sans-serif" }}
                    >
                      {industry}
                    </button>
                  ))}
                </div>
              </div>

              {/* AI Feature Filter */}
              <div>
                <h3
                  className="text-lg font-medium text-gray-900 mb-3"
                  style={{ fontFamily: "TWK Everett, sans-serif" }}
                >
                  AI Feature
                </h3>
                <div className="flex flex-wrap gap-3">
                  {aiFeatures.map((feature) => (
                    <button
                      key={feature}
                      onClick={() => {
                        setSelectedAIFeature(feature)
                        setCurrentPage(1)
                      }}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedAIFeature === feature
                          ? "border-2 border-[#FF462D] bg-white text-[#FF462D]"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                      style={{ fontFamily: "TWK Everett, sans-serif" }}
                    >
                      {feature}
                    </button>
                  ))}
                </div>
              </div>

              {/* Alliance Filter */}
              <div>
                <h3
                  className="text-lg font-medium text-gray-900 mb-3"
                  style={{ fontFamily: "TWK Everett, sans-serif" }}
                >
                  Alliance
                </h3>
                <div className="flex flex-wrap gap-3">
                  {alliances.map((alliance) => (
                    <button
                      key={alliance}
                      onClick={() => {
                        setSelectedAlliance(alliance)
                        setCurrentPage(1)
                      }}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
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
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-y-auto bg-[rgba(242,241,238,1)]">
          <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto">
            {currentItems.map((item, index) => {
              const globalIndex = startIndex + index
              const isPlaying = playingVideoIndex === globalIndex

              return (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative">
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center relative">
                      {/* Video Thumbnail with Duration Overlay */}
                      {item.type === "video" && item.url.startsWith("http") ? (
                        <div className="w-full h-full relative">
                          {isPlaying ? (
                            <iframe
                              src={`${item.url}?autoplay=1&controls=1`}
                              className="w-full h-full"
                              frameBorder="0"
                              allowFullScreen
                              title={item.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            />
                          ) : (
                            <div className="w-full h-full relative">
                              {item.url.includes("scene7.com") ? (
                                <img
                                  src={`${item.url}&fmt=jpeg&wid=640&hei=360&fit=crop&crop=1,1,1,1&qlt=95&op_sharpen=0&resMode=sharp2&op_usm=1,1,6,0&iccEmbed=0&printRes=150`}
                                  alt={item.title}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
                              )}

                              {/* Play button overlay */}
                              <div
                                className="absolute inset-0 flex items-center justify-center cursor-pointer group bg-black bg-opacity-30 hover:bg-opacity-40 transition-all"
                                onClick={() => handleVideoClick(globalIndex)}
                              >
                                <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all shadow-lg">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF462D" className="ml-1">
                                    <polygon points="5,3 19,12 5,21" />
                                  </svg>
                                </div>
                              </div>

                              {/* Duration Overlay */}
                              <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded">
                                {item.duration}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : item.type === "video" && !item.url.startsWith("http") ? (
                        <div className="w-full h-full relative">
                          {isPlaying ? (
                            <iframe
                              src="https://kyndryl.sharepoint.com/sites/ADAI-Data-and-AI/_layouts/15/embed.aspx?UniqueId=90a24f3d-c0cd-473e-9b45-5dee61933b6820c177c481e87684af1729ec3a6fbc1869ac310&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
                              className="w-full h-full"
                              frameBorder="0"
                              scrolling="no"
                              allowFullScreen
                              title="Fire Fighter Safety Solution-demo-v4-3.mp4"
                            />
                          ) : (
                            <div className="w-full h-full relative">
                              <img
                                src={`/video-thumbnails/${item.url.replace(".mp4", "-keyframe.jpg")}`}
                                alt={item.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  // Fallback to gradient if keyframe image doesn't exist
                                  e.currentTarget.style.display = "none"
                                  e.currentTarget.nextElementSibling.style.display = "block"
                                }}
                              />
                              <div
                                className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"
                                style={{ display: "none" }}
                              />

                              {/* Play button overlay */}
                              <div
                                className="absolute inset-0 flex items-center justify-center cursor-pointer group bg-black bg-opacity-30 hover:bg-opacity-40 transition-all"
                                onClick={() => handleVideoClick(globalIndex)}
                              >
                                <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center mb-2 group-hover:bg-opacity-100 transition-all">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                    <polygon points="5,3 19,12 5,21" />
                                  </svg>
                                </div>
                              </div>

                              {/* Duration Overlay */}
                              <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded">
                                {item.duration}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div
                          className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center cursor-pointer group relative"
                          onClick={() => handleVideoClick(globalIndex)}
                        >
                          <div className="text-center">
                            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2 group-hover:bg-opacity-30 transition-all">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                <polygon points="5,3 19,12 5,21" />
                              </svg>
                            </div>
                          </div>
                          {/* Duration Overlay */}
                          <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded">
                            {item.duration}
                          </div>
                        </div>
                      )}

                      {/* Featured Badge */}
                      {item.featured && (
                        <div className="absolute top-3 left-3 bg-[#FF462D] text-white px-3 py-1 text-xs font-medium rounded">
                          Featured
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div
                      className="text-[#FF462D] text-sm font-medium mb-2"
                      style={{ fontFamily: "TWK Everett, sans-serif" }}
                    >
                      {item.alliance} / {item.customerName || "customer name"}
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
                      {item.description || "Content title utenim ad minim veniam, quis nostrud exercitation"}
                    </p>
                    <div
                      className="flex items-center text-[#3D3C3C] text-sm font-medium mb-4 cursor-pointer hover:text-[#FF462D]"
                      style={{ fontFamily: "TWK Everett, sans-serif" }}
                      onClick={() =>
                        window.open(
                          "https://kyndryl.sharepoint.com/:v:/s/ADAI-Data-and-AI/ET1PopDNwD5Hm0Vd7mGTO1IBQOkLmQFAwuqKiSb3anjxWw?e=G3e1WY&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZ19MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
                          "_blank",
                        )
                      }
                    >
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
                      {item.tags && item.tags.length > 0 ? (
                        item.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                            style={{ fontFamily: "TWK Everett, sans-serif" }}
                          >
                            {tag}
                          </span>
                        ))
                      ) : (
                        <>
                          <span
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                            style={{ fontFamily: "TWK Everett, sans-serif" }}
                          >
                            {item.industry}
                          </span>
                          <span
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                            style={{ fontFamily: "TWK Everett, sans-serif" }}
                          >
                            {item.aiFeature}
                          </span>
                          <span
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                            style={{ fontFamily: "TWK Everett, sans-serif" }}
                          >
                            {item.alliance}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 mb-8">
              <div className="flex items-center gap-8">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    disabled={currentPage === page}
                    className={`text-lg ${
                      currentPage === page
                        ? "text-[#FF462D] font-medium relative"
                        : "text-[#3D3C3C] hover:text-[#FF462D]"
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
        <div className="flex items-center justify-between p-6 bg-white border-t border-gray-200">
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
