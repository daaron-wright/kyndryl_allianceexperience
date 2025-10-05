"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import IndustryFocusModal from "@/components/industry-focus-modal"

export default function Industries() {
  const router = useRouter()
  const [showAutomotiveModal, setShowAutomotiveModal] = useState(false)
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)
  const [isIndustryModalOpen, setIsIndustryModalOpen] = useState(false)

  const industries = [
    "Automotive",
    "Banking and Financial Markets",
    "Chemical, Oil and Gas",
    "Consumer and Retail",
    "Government",
    "Healthcare",
    "Insurance",
    "Manufacturing",
    "Tech, Media and Telecom",
    "Travel and Transportation",
    "Utilities",
  ]

  const activeIndustries = [
    "Banking and Financial Markets",
    "Consumer and Retail",
    "Healthcare",
    "Insurance",
    "Travel and Transportation",
  ]

  const industryData = {
    Automotive: {
      demos: [],
      caseStudies: [],
      description: "AI-powered solutions for autonomous vehicles, fleet management, and predictive analytics",
    },
    "Banking and Financial Markets": {
      demos: [
        "Conversational AI",
        "Actuary Demo",
        "Barclays Demo",
        "L&G Consumer Duty",
        "L&G ESG Demo",
        "Metlife Demo",
        "New Barclays",
      ],
      caseStudies: ["Pricing Model"],
      description: "Advanced AI for risk assessment, fraud detection, and customer service automation",
    },
    "Consumer and Retail": {
      demos: [],
      caseStudies: ["Agentic Sales Assistant"],
      description: "AI-driven personalization, inventory optimization, and sales automation",
    },
    Healthcare: {
      demos: ["Virtual Healthcare Assistant", "DeploySafe Guardian"],
      caseStudies: ["X-Ray Image Analysis"],
      description: "Medical AI for diagnostics, patient care, and healthcare automation",
    },
    Insurance: {
      demos: ["First Notice of Loss (FNOL)", "TVG Demo"],
      caseStudies: [],
      description: "Automated claims processing, risk assessment, and customer service",
    },
    Manufacturing: {
      demos: ["SRE AI Agent"],
      caseStudies: [],
      description: "Predictive maintenance, production optimization, and operational intelligence",
    },
    "Travel and Transportation": {
      demos: ["Realtime travel companion"],
      caseStudies: ["Agentic Airport AI Experience", "Smart Baggage Claim"],
      description: "Airport operations, baggage handling, and passenger experience optimization",
    },
    Government: {
      demos: ["Kyndryl Post, Trusted mail service"],
      caseStudies: ["Legal Documents Generator"],
      description: "Document automation, compliance management, and process optimization",
    },
    "Tech, Media and Telecom": {
      demos: ["WorldTel Email Response System"],
      caseStudies: ["Agentic Media Monitor", "Marketing Automation"],
      description: "Media monitoring, content analysis, and marketing automation",
    },
    "Chemical, Oil and Gas": {
      demos: [],
      caseStudies: [],
      description: "Process optimization, safety monitoring, and predictive analytics",
    },
    Utilities: {
      demos: [],
      caseStudies: [],
      description: "Grid optimization, predictive maintenance, and energy management",
    },
  }

  const handleIndustryClick = (industry: string) => {
    if (!activeIndustries.includes(industry)) {
      return
    }

    setSelectedIndustry(industry)
    setIsIndustryModalOpen(true)
  }

  return (
    <div
      className="responsive-container"
      style={{
        backgroundImage: "url('/shipping-port-containers.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "#FFFFFF",
          padding: "clamp(20px, 3vh, 30px) clamp(45px, 6vw, 90px)",
          borderBottom: "1px solid #E5E5E5",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left - Industries Title */}
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontFamily: "TWK Everett, sans-serif",
              fontWeight: 300,
              color: "#FF462D",
              margin: 0,
              lineHeight: "1",
            }}
          >
            Industries
          </h1>

          {/* Center - Navigation */}
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
            <a className="hover:text-black text-[#FF462D] border-b-2 border-[#FF462D]" href="/industries">
              Industries
            </a>
            <a className="hover:text-black text-neutral-400 cursor-default font-light" href="#">
              Capabilities
            </a>
            <a className="hover:text-black" href="/ai-journey">
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

          {/* Right - Search */}
          {/* Removed redundant search input and SVG */}
        </div>
      </header>

      {/* Main Content */}
      <main
        style={{
          padding: "clamp(40px, 6vh, 80px) clamp(45px, 6vw, 90px) clamp(60px, 8vh, 120px)",
          minHeight: "calc(100% - clamp(120px, 15vh, 200px))",
        }}
      >
        {/* Industries Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(clamp(280px, 35vw, 390px), 1fr))",
            gridAutoRows: "clamp(200px, 25vh, 280px)", // Increased height to accommodate more content
            gap: "clamp(20px, 3vw, 30px)",
            maxWidth: "100%",
            margin: "0 auto",
            justifyContent: "center",
          }}
        >
          {industries.map((industry, index) => {
            const isActive = activeIndustries.includes(industry)
            const data = industryData[industry] || { demos: [], caseStudies: [], description: "" }

            return (
              <div
                key={index}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.75)",
                  borderRadius: "8px",
                  padding: "clamp(20px, 3vw, 40px) clamp(15px, 2vw, 30px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: isActive ? "pointer" : "default",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  opacity: isActive ? 1 : 0.5,
                }}
                onClick={() => handleIndustryClick(industry)}
                onMouseEnter={(e) => {
                  if (isActive) {
                    e.currentTarget.style.transform = "translateY(-4px)"
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)"
                  }
                }}
                onMouseLeave={(e) => {
                  if (isActive) {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "none"
                  }
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "clamp(18px, 2.5vw, 24px)",
                      fontFamily: "TWK Everett, sans-serif",
                      fontWeight: 500,
                      color: isActive ? "#3D3C3C" : "#9E9287",
                      margin: "0 0 clamp(8px, 1vh, 12px) 0",
                      lineHeight: "1.2",
                    }}
                  >
                    {industry}
                  </h3>

                  {isActive && data.description && (
                    <p
                      style={{
                        fontSize: "clamp(12px, 1.5vw, 14px)",
                        fontFamily: "TWK Everett, sans-serif",
                        color: "#727175",
                        margin: "0 0 clamp(12px, 2vh, 16px) 0",
                        lineHeight: "1.3",
                      }}
                    >
                      {data.description}
                    </p>
                  )}

                  {isActive && (
                    <div
                      style={{
                        display: "flex",
                        gap: "clamp(8px, 1vw, 12px)",
                        marginBottom: "clamp(8px, 1vh, 12px)",
                      }}
                    >
                      {data.demos.length > 0 && (
                        <span
                          style={{
                            fontSize: "clamp(10px, 1.2vw, 12px)",
                            fontFamily: "TWK Everett, sans-serif",
                            backgroundColor: "#FF462D",
                            color: "white",
                            padding: "2px 6px",
                            borderRadius: "4px",
                            fontWeight: 500,
                          }}
                        >
                          {data.demos.length} Demo{data.demos.length > 1 ? "s" : ""}
                        </span>
                      )}
                      {data.caseStudies.length > 0 && (
                        <span
                          style={{
                            fontSize: "clamp(10px, 1.2vw, 12px)",
                            fontFamily: "TWK Everett, sans-serif",
                            backgroundColor: "#29707A",
                            color: "white",
                            padding: "2px 6px",
                            borderRadius: "4px",
                            fontWeight: 500,
                          }}
                        >
                          {data.caseStudies.length} Case Stud{data.caseStudies.length > 1 ? "ies" : "y"}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "clamp(10px, 2vh, 20px)",
                  }}
                >
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isActive ? "#FF462D" : "#9E9287"}
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18L15 12L9 6" />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: "clamp(20px, 3vh, 40px) clamp(45px, 6vw, 90px)",
          borderTop: "1px solid #E5E5E5",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left side - Kyndryl logo and breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(20px, 3vw, 40px)",
            }}
          >
            <svg width="125" height="40" viewBox="0 0 125 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M119.465 0V29.9956H115.97V0H119.465ZM48.6311 9.53295C45.1885 9.53295 43.0847 11.7329 42.7543 14.5264H42.5804V10.0044H39.0857V29.9956H42.5978V17.5469C42.5978 14.1772 44.3887 12.6408 47.3792 12.6408C50.8044 12.6408 52.3345 14.3518 52.3345 17.7215V29.9956H55.8292V17.2676C55.8292 12.4836 53.1343 9.53295 48.6311 9.53295ZM27.2105 29.4544H27.0887L21.0033 10.0044H17.3695L23.8026 29.9956H27.0192L23.7331 40H27.2278L36.8776 10.0044H33.2437L27.2105 29.4544ZM104.078 29.4544H103.973L97.8881 10.0044H94.2542L100.687 29.9956H103.904L100.618 40H104.113L113.762 10.0044H110.128L104.078 29.4544ZM7.2851 19.9913L15.9264 9.9869H11.6666L3.59908 19.6421H3.47737V0H0V29.9956H3.49476V20.1833H6.81565L13.5444 29.9956H17.6129L10.6408 19.9913H7.2851ZM85.9607 14.5264H85.7868V10.0044H82.2921V29.9956H85.7868V17.512C85.7868 14.1423 87.682 12.9201 90.9507 12.9201C91.7853 12.9201 92.5329 13.0074 93.1241 13.1471V9.74247C92.8285 9.62025 92.2026 9.53295 91.4549 9.53295C88.4122 9.53295 86.3432 11.5932 85.9607 14.5264ZM74.2941 0H77.7889V29.9956H74.2941V25.4736H74.1202C73.7899 28.2671 71.6513 30.467 67.6175 30.467C62.6797 30.467 59.1849 26.5386 59.1849 20.0087C59.1849 13.4788 62.6797 9.55041 67.6175 9.55041C71.6513 9.55041 73.7899 11.7503 74.1202 14.5439H74.2941V0ZM74.2941 17.3549C74.2941 13.9852 71.7556 12.6233 68.626 12.6233C65.3225 12.6233 62.8362 14.6835 62.8362 19.9913C62.8362 25.2815 65.3051 27.3592 68.626 27.3592C71.773 27.3592 74.2941 25.9974 74.2941 22.6277V17.3549Z"
                fill="#FF462D"
              />
              <path
                d="M124.525 28.5823C124.525 29.3505 123.899 29.9791 123.134 29.9791C122.369 29.9791 121.743 29.3505 121.743 28.5823C121.743 27.8141 122.369 27.1855 123.134 27.1855C123.899 27.1855 124.525 27.8141 124.525 28.5823ZM124.247 28.5823C124.247 27.9538 123.743 27.4474 123.117 27.4474C122.491 27.4474 121.987 27.9538 121.987 28.5823C121.987 29.2109 122.491 29.7172 123.117 29.7172C123.743 29.7172 124.247 29.2283 124.247 28.5823ZM123.43 28.7395L123.812 29.4029H123.482L123.134 28.7744H122.821V29.4029H122.543V27.8141H123.151C123.534 27.8141 123.76 28.0061 123.76 28.303C123.777 28.5125 123.656 28.6696 123.43 28.7395ZM122.839 28.0411V28.5474H123.169C123.36 28.5474 123.482 28.4601 123.482 28.303C123.482 28.1458 123.36 28.0585 123.169 28.0585H122.839V28.0411Z"
                fill="#FF462D"
              />
            </svg>

            <span
              style={{
                fontSize: "clamp(18px, 2.5vw, 27px)",
                fontFamily: "TWK Everett, sans-serif",
                color: "#9E9287",
                fontWeight: 300,
              }}
            >
              Alliance Experience
            </span>
          </div>

          {/* Right side - Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(8px, 1vw, 12px)",
            }}
          >
            <span
              className="font-light"
              style={{
                fontSize: "clamp(14px, 1.5vw, 16px)",
                fontFamily: "TWK Everett, sans-serif",
                color: "#727175",
                cursor: "pointer",
              }}
              onClick={() => router.push("/")}
            >
              Home
            </span>
            <svg width="14" height="21" viewBox="0 0 8 12" fill="none">
              <path d="M2 2L6 6L2 10" stroke="#727175" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span
              className="font-medium text-[rgba(41,112,122,1)]"
              style={{
                fontSize: "clamp(14px, 1.5vw, 16px)",
                fontFamily: "TWK Everett, sans-serif",
                color: "#29707A",
                fontWeight: 500,
              }}
            >
              Industries
            </span>
          </div>
        </div>
      </footer>

      {/* Industry Focus Modal */}
      {isIndustryModalOpen && selectedIndustry && (
        <IndustryFocusModal
          industry={selectedIndustry}
          onClose={() => {
            setIsIndustryModalOpen(false)
            setSelectedIndustry(null)
          }}
        />
      )}
    </div>
  )
}
