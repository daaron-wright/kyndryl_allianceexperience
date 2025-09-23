"use client"

import { useState } from "react"
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react"

interface IndustryFocusModalProps {
  industry: string
  onClose: () => void
}

export default function IndustryFocusModal({ industry, onClose }: IndustryFocusModalProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const allCustomerStories = [
    {
      id: 1,
      title: "Agentic Airport AI Experience",
      description:
        "Revolutionizing airport operations with intelligent automation and passenger experience optimization through AI-powered systems.",
      image: "/shipping-port-containers.png",
      alliance: "Industry / Transportation",
      tags: ["AI Automation", "Airport Operations", "Passenger Experience"],
      type: "Case Study",
      alliancePartner: "Google Cloud",
      aiFeature: "AI & Machine Learning",
    },
    {
      id: 2,
      title: "Smart Baggage Claim",
      description:
        "Intelligent baggage tracking and claim system using AI-powered computer vision and RFID technology to streamline airport baggage operations and enhance passenger experience.",
      image: "/shipping-port-containers.png",
      alliance: "Industry / Transportation",
      tags: ["Baggage Tracking", "Computer Vision", "Airport Operations"],
      type: "Case Study",
      alliancePartner: "AWS",
      aiFeature: "AI & Machine Learning",
    },
    {
      id: 3,
      title: "TAP AIRPORTUGAL, FlyTAP AI Agent",
      description:
        "AI-powered customer service agent for aviation industry providing personalized travel assistance and support.",
      image: "/shipping-port-containers.png",
      alliance: "Industry / Transportation",
      tags: ["Aviation", "AI Agent", "Customer Service", "Travel"],
      type: "Hyperscalar Demo",
      alliancePartner: "Google Cloud",
      aiFeature: "AI & Machine Learning",
    },
    {
      id: 4,
      title: "X-Ray Image Analysis",
      description:
        "Advanced medical imaging analysis using AI to assist healthcare professionals in diagnostic accuracy and treatment planning.",
      image: "/placeholder-98f8c.png",
      alliance: "Industry / Healthcare",
      tags: ["Medical AI", "Image Analysis", "Healthcare Technology"],
      type: "Case Study",
      alliancePartner: "AWS",
      aiFeature: "AI & Machine Learning",
    },
    {
      id: 5,
      title: "Virtual Healthcare Assistant",
      description:
        "AI-powered virtual assistant for healthcare providing patient support, appointment management, and medical guidance.",
      image: "/placeholder-98f8c.png",
      alliance: "Industry / Healthcare",
      tags: [
        "Patient",
        "Appointment Mgmt",
        "Prescription Mgmt",
        "Medication Refills",
        "General Queries",
        "Healthcare",
        "AI Assistant",
      ],
      type: "Interactive Demo",
      alliancePartner: "Microsoft Azure",
      aiFeature: "AI & Machine Learning",
    },
    {
      id: 6,
      title: "Pricing Model",
      description:
        "Dynamic pricing optimization using AI algorithms to maximize revenue and market competitiveness across various industries.",
      image: "/dining-food-scene.png",
      alliance: "Industry / Financial Services",
      tags: ["Pricing Strategy", "Revenue Optimization", "Market Analysis"],
      type: "Case Study",
      alliancePartner: "Google Cloud",
      aiFeature: "AI & Machine Learning",
    },
    {
      id: 7,
      title: "Conversational AI",
      description:
        "Advanced conversational AI system for banking and financial services providing customer support and account management.",
      image: "/dining-food-scene.png",
      alliance: "Industry / Financial Services",
      tags: [
        "Banking Customer",
        "Non-Banking Customer",
        "Account Balance",
        "Transaction History",
        "Bill Payment",
        "Reward Points",
        "Block Card",
        "Loan Closure",
        "Complaint Registration",
        "Branch Location",
        "General Inquiry",
        "Financial Services",
        "AI Assistant",
      ],
      type: "Interactive Demo",
      alliancePartner: "Microsoft Azure",
      aiFeature: "AI & Machine Learning",
    },
    {
      id: 8,
      title: "Actuary Demo",
      description:
        "Actuarial analysis and risk assessment platform powered by AI for insurance and financial planning.",
      image: "/dining-food-scene.png",
      alliance: "Industry / Financial Services",
      tags: ["Risk Assessment", "Actuarial Analysis", "Financial Planning"],
      type: "Interactive Demo",
      alliancePartner: "Google Cloud",
      aiFeature: "AI & Machine Learning",
    },
    {
      id: 9,
      title: "Barclays Demo",
      description: "Barclays demo showcasing an example agentic framework for the Know Your Customer (KYC) use case.",
      image: "/dining-food-scene.png",
      alliance: "Industry / Financial Services",
      tags: ["KYC", "Banking", "Compliance", "Customer Onboarding"],
      type: "Interactive Demo",
      alliancePartner: "Google Cloud",
      aiFeature: "AI & Machine Learning",
    },
    {
      id: 10,
      title: "New Barclays",
      description:
        "Updated Barclays demo. Will require a login for enhanced security and personalized banking experience.",
      image: "/dining-food-scene.png",
      alliance: "Industry / Financial Services",
      tags: ["Banking", "Security", "Personalization"],
      type: "Interactive Demo",
      alliancePartner: "Google Cloud",
      aiFeature: "AI & Machine Learning",
    },
    {
      id: 11,
      title: "L&G Consumer Duty",
      description:
        "An agentic AI system enabling automating data extraction, data validation, and masterfile report generation from multiple consumer files.",
      image: "/dining-food-scene.png",
      alliance: "Industry / Financial Services",
      tags: ["Consumer Duty", "Data Extraction", "Compliance", "Report Generation"],
      type: "Interactive Demo",
      alliancePartner: "Google Cloud",
      aiFeature: "AI & Machine Learning",
    },
    {
      id: 12,
      title: "L&G ESG Demo",
      description:
        "This demo indicates an agentic AI system where agents gather information from external/internal databases and online resources to generate the L&G portfolio and future investment ESG performance.",
      image: "/dining-food-scene.png",
      alliance: "Industry / Financial Services",
      tags: ["ESG", "Investment", "Portfolio Management", "Sustainability"],
      type: "Interactive Demo",
      alliancePartner: "Google Cloud",
      aiFeature: "AI & Machine Learning",
    },
    {
      id: 13,
      title: "First Notice of Loss (FNOL)",
      description:
        "Streamlined insurance claims processing system with AI-powered document analysis and fraud detection capabilities.",
      image: "/construction-site-overview.png",
      alliance: "Industry / Insurance",
      tags: [
        "Report a Claim with supporting documents",
        "Update a claim with supporting documents",
        "View a claim",
        "Insurance",
        "AI Assistant",
      ],
      type: "Interactive Demo",
      alliancePartner: "AWS",
      aiFeature: "AI & Machine Learning",
    },
    {
      id: 14,
      title: "Metlife Demo",
      description:
        "Insurance industry demonstration showcasing digital transformation solutions for the insurance sector. Features customer portal, claims processing, and policy management systems.",
      image: "/construction-site-overview.png",
      alliance: "Industry / Insurance",
      tags: ["Insurance", "Digital Transformation", "Claims Processing", "Policy Management"],
      type: "Interactive Demo",
      alliancePartner: "Microsoft Azure",
      aiFeature: "AI & Machine Learning",
    },
    {
      id: 15,
      title: "Agentic Sales Assistant",
      description:
        "AI-powered sales automation that enhances customer interactions, lead qualification, and sales process optimization.",
      image: "/grocery-shopping-scene.png",
      alliance: "Industry / Retail",
      tags: ["Sales Automation", "Lead Generation", "Customer Engagement"],
      type: "Case Study",
      alliancePartner: "Microsoft Azure",
      aiFeature: "AI & Machine Learning",
    },
    {
      id: 16,
      title: "Legal Documents Generator",
      description:
        "Automated legal document creation and review system powered by AI to streamline legal processes and ensure compliance.",
      image: "/construction-site-overview.png",
      alliance: "Industry / Insurance",
      tags: ["Legal Tech", "Document Automation", "Compliance"],
      type: "Case Study",
      alliancePartner: "AWS",
      aiFeature: "Automation",
    },
    {
      id: 17,
      title: "DeploySafe Guardian",
      description:
        "Cobol Demo - Advanced security and deployment management system for government and enterprise applications.",
      image: "/construction-site-overview.png",
      alliance: "Industry / Government",
      tags: ["Security", "Deployment", "Enterprise", "Cobol"],
      type: "Interactive Demo",
      alliancePartner: "AWS",
      aiFeature: "Security & Compliance",
    },
    {
      id: 18,
      title: "Agentic Media Monitor",
      description:
        "Advanced media monitoring and analysis using AI to track brand sentiment, content performance, and market trends in real-time.",
      image: "/placeholder-98f8c.png",
      alliance: "Industry / Communications & Media",
      tags: ["Media Analysis", "Brand Monitoring", "AI Insights"],
      type: "Case Study",
      alliancePartner: "Google Cloud",
      aiFeature: "AI & Machine Learning",
    },
    {
      id: 19,
      title: "WorldTel Email Response System",
      description:
        "Automated email response system for telecommunications companies providing intelligent customer service and support.",
      image: "/placeholder-98f8c.png",
      alliance: "Industry / Communications & Media",
      tags: ["Email", "Response System", "AI/ML", "Communication"],
      type: "Hyperscalar Demo",
      alliancePartner: "Google Cloud",
      aiFeature: "AI & Machine Learning",
    },
    {
      id: 20,
      title: "TVG Demo",
      description: "Demo for The Very Group showcasing retail and media convergence solutions.",
      image: "/grocery-shopping-scene.png",
      alliance: "Industry / Retail",
      tags: ["Retail Media", "Customer Experience", "Digital Commerce"],
      type: "Hyperscalar Demo",
      alliancePartner: "Microsoft Azure",
      aiFeature: "AI & Machine Learning",
    },
    {
      id: 21,
      title: "Marketing Automation",
      description:
        "Comprehensive AI-driven marketing automation platform for personalized campaigns, customer segmentation, and ROI optimization.",
      image: "/sheep-livestock.png",
      alliance: "Industry / Telecommunications",
      tags: ["Marketing AI", "Campaign Automation", "Customer Segmentation"],
      type: "Case Study",
      alliancePartner: "Microsoft Azure",
      aiFeature: "AI & Machine Learning",
    },
    {
      id: 22,
      title: "SRE AI Agent",
      description:
        "Site Reliability Engineering AI agent for automated monitoring, incident response, and system optimization.",
      image: "/construction-site-overview.png",
      alliance: "Industry / Technology",
      tags: [
        "Site Reliability Engineer",
        "Service Down - Direct",
        "Service Down - Dependent",
        "CR Required",
        "IP Whitelist",
        "DevOps",
        "Monitoring",
        "AI Assistant",
      ],
      type: "Interactive Demo",
      alliancePartner: "Google Cloud",
      aiFeature: "AI & Machine Learning",
    },
    {
      id: 23,
      title: "Kyndryl Post, Trusted mail service",
      description:
        "Enterprise-grade trusted mail service providing secure email communication and cloud services integration.",
      image: "/placeholder-98f8c.png",
      alliance: "Industry / Enterprise",
      tags: ["Email", "Security", "Cloud Services", "Enterprise"],
      type: "Hyperscalar Demo",
      alliancePartner: "Google Cloud",
      aiFeature: "Security & Compliance",
    },
    {
      id: 24,
      title: "TVG Demo",
      description:
        "Demo for The Very Group showcasing retail and e-commerce solutions with AI-powered customer experience.",
      image: "/grocery-shopping-scene.png",
      alliance: "Industry / Retail",
      tags: ["Retail", "E-commerce", "Customer Experience", "Digital Commerce"],
      type: "Hyperscalar Demo",
      alliancePartner: "Microsoft Azure",
      aiFeature: "AI & Machine Learning",
    },
  ]

  const industryMapping = {
    Automotive: "Automotive",
    "Banking and Financial Markets": "Financial Services",
    "Consumer and Retail": "Retail",
    Healthcare: "Healthcare",
    Insurance: "Insurance",
    Manufacturing: "Manufacturing",
    "Travel and Transportation": "Transportation",
    Government: "Government",
    "Tech, Media and Telecom": "Communications & Media",
    "Chemical, Oil and Gas": "Energy & Utilities",
    Utilities: "Energy & Utilities",
    Technology: "Technology",
    Enterprise: "Enterprise",
    Telecommunications: "Telecommunications",
  }

  const industryKey = industryMapping[industry] || industry
  const filteredStories = allCustomerStories.filter((story) => {
    const matchesIndustry = story.alliance.includes(industryKey)
    const matchesSearch =
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.description.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesIndustry && matchesSearch
  })

  const itemsPerPage = 4
  const totalPages = Math.ceil(filteredStories.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = filteredStories.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "1400px",
          height: "800px",
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <header style={{ padding: "32px 48px", borderBottom: "1px solid #E5E5E5", backgroundColor: "#FFFFFF" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1
              className="font-thin"
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontSize: "32px",
                fontWeight: "100",
                color: "#FF462D",
                margin: 0,
              }}
            >
              {industry}
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              {/* Search */}
              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: "280px",
                    padding: "12px 16px 12px 40px",
                    border: "1px solid #E5E5E5",
                    borderRadius: "4px",
                    fontFamily: "TWK Everett, sans-serif",
                    fontSize: "16px",
                    backgroundColor: "#FFFFFF",
                    outline: "none",
                  }}
                />
                <Search
                  style={{
                    position: "absolute",
                    left: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "20px",
                    height: "20px",
                    color: "#9E9287",
                  }}
                />
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px",
                }}
              >
                <X style={{ width: "24px", height: "24px", color: "#3D3C3C" }} />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main
          style={{
            flex: 1,
            padding: "48px",
            backgroundColor: "#F2F1EE",
            overflow: "auto",
          }}
        >
          {/* Case Studies Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
              marginBottom: "48px",
              maxWidth: "1200px",
              margin: "0 auto 48px auto",
            }}
          >
            {currentItems.map((story) => (
              <div
                key={story.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)"
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.15)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)"
                }}
              >
                <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <p
                      style={{
                        fontFamily: "TWK Everett, sans-serif",
                        fontSize: "14px",
                        color: "#FF462D",
                        margin: "0",
                        fontWeight: "500",
                      }}
                    >
                      {story.alliance}
                    </p>
                    <span
                      style={{
                        backgroundColor:
                          story.type === "Case Study"
                            ? "#E8F5E8"
                            : story.type === "Interactive Demo"
                              ? "#E8F0FF"
                              : "#FFF3E8",
                        color:
                          story.type === "Case Study"
                            ? "#2D7D32"
                            : story.type === "Interactive Demo"
                              ? "#1976D2"
                              : "#F57C00",
                        padding: "2px 8px",
                        borderRadius: "12px",
                        fontFamily: "TWK Everett, sans-serif",
                        fontSize: "11px",
                        fontWeight: "500",
                        textTransform: "uppercase",
                      }}
                    >
                      {story.type}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "TWK Everett, sans-serif",
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "#3D3C3C",
                      lineHeight: "1.3",
                      margin: "0 0 12px 0",
                    }}
                  >
                    {story.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "TWK Everett, sans-serif",
                      fontSize: "14px",
                      color: "#727175",
                      lineHeight: "1.4",
                      margin: "0 0 16px 0",
                    }}
                  >
                    {story.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "16px",
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        fontFamily: "TWK Everett, sans-serif",
                        fontSize: "14px",
                        color: "#3D3C3C",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        fontWeight: "500",
                      }}
                    >
                      Learn more
                      <ChevronRight style={{ width: "14px", height: "14px" }} />
                    </a>
                  </div>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {story.tags.map((tag, index) => (
                      <span
                        key={index}
                        style={{
                          backgroundColor: "#F2F1EE",
                          color: "#727175",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          fontFamily: "TWK Everett, sans-serif",
                          fontSize: "12px",
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

          {/* No results message */}
          {filteredStories.length === 0 && (
            <div style={{ textAlign: "center", padding: "48px" }}>
              <p
                style={{
                  fontFamily: "TWK Everett, sans-serif",
                  fontSize: "18px",
                  color: "#9E9287",
                }}
              >
                No case studies found for {industry}
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "32px",
                marginBottom: "32px",
              }}
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "TWK Everett, sans-serif",
                    fontSize: "18px",
                    color: currentPage === page ? "#FF462D" : "#9E9287",
                    fontWeight: currentPage === page ? "600" : "400",
                    padding: "8px 12px",
                    position: "relative",
                  }}
                >
                  {page}
                  {currentPage === page && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-8px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "24px",
                        height: "3px",
                        backgroundColor: "#FF462D",
                        borderRadius: "2px",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          )}
        </main>

        {/* Footer Navigation */}
        {totalPages > 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "24px 48px",
              backgroundColor: "#F2F1EE",
              borderTop: "1px solid #E5E5E5",
            }}
          >
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              style={{
                background: "none",
                border: "none",
                cursor: currentPage === 1 ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "TWK Everett, sans-serif",
                fontSize: "16px",
                color: currentPage === 1 ? "#9E9287" : "#3D3C3C",
              }}
            >
              <ChevronLeft style={{ width: "20px", height: "20px" }} />
              Previous
            </button>

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              style={{
                background: "none",
                border: "none",
                cursor: currentPage === totalPages ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "TWK Everett, sans-serif",
                fontSize: "16px",
                color: currentPage === totalPages ? "#9E9287" : "#3D3C3C",
              }}
            >
              Next
              <ChevronRight style={{ width: "20px", height: "20px" }} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
