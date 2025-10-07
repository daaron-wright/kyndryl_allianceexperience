import { X, Search, ChevronLeft, ChevronRight } from "lucide-react"
import { X, Search, ChevronLeft, ChevronRight } from "lucide-react"
import { useMemo, useState } from "react"
import FeatureFocusModal from "./feature-focus-modal"

const fontFamilyClass = "font-['TWK_Everett',sans-serif]"

interface UseCasesFocusModalProps {
  isOpen: boolean
  onClose: () => void
  onOpenEmbed?: (story: any, overrides?: { videoUrl?: string; embedUrl?: string; externalUrl?: string }) => void
}

export default function UseCasesFocusModal({ isOpen, onClose, onOpenEmbed }: UseCasesFocusModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState<any>(null)

  if (!isOpen) return null

  const caseStudies = [
    {
      id: 5,
      image: "/placeholder-98f8c.png",
      alliance: "Industry / Financial Services",
      title: "Pricing Model",
      description:
        "Dynamic pricing optimization using AI algorithms to maximize revenue and market competitiveness across various industries.",
      tags: ["Pricing Strategy", "Revenue Optimization", "Market Analysis"],
    },
    {
      id: 6,
      image: "/placeholder-98f8c.png",
      alliance: "Industry / Telecommunications",
      title: "Marketing Automation",
      description:
        "Comprehensive AI-driven marketing automation platform for personalized campaigns, customer segmentation, and ROI optimization.",
      tags: ["Marketing AI", "Campaign Automation", "Customer Segmentation"],
    },
    {
      id: 7,
      image: "/placeholder-98f8c.png",
      alliance: "Industry / Transportation",
      title: "X-Ray Image Analysis",
      description:
        "Advanced security screening analysis using AI to assist transportation professionals in threat detection and passenger safety.",
      tags: ["Security AI", "Image Analysis", "Transportation Technology"],
    },
    {
      id: 8,
      image: "/smart-baggage-claim.png",
      alliance: "Industry / Transportation",
      title: "Smart Baggage Claim",
      description:
        "Intelligent baggage tracking and claim system using AI-powered computer vision and RFID technology to streamline airport baggage operations.",
      tags: ["Baggage Tracking", "Computer Vision", "Airport Operations"],
    },
    {
      id: 1,
      image: "/placeholder-98f8c.png",
      alliance: "Industry / Transportation",
      title: "Agentic Airport AI Experience",
      description:
        "Revolutionizing airport operations with intelligent automation and passenger experience optimization through AI-powered systems.",
      tags: ["AI Automation", "Airport Operations", "Passenger Experience"],
    },
    {
      id: 2,
      image: "/placeholder-98f8c.png",
      alliance: "Industry / Communications & Media",
      title: "Agentic Media Monitor",
      description:
        "Advanced media monitoring and analysis using AI to track brand sentiment, content performance, and market trends in real-time.",
      tags: ["Media Analysis", "Brand Monitoring", "AI Insights"],
    },
    {
      id: 3,
      image: "/placeholder-98f8c.png",
      alliance: "Industry / Retail",
      title: "Agentic Sales Assistant",
      description:
        "AI-powered sales automation that enhances customer interactions, lead qualification, and sales process optimization.",
      tags: ["Sales Automation", "Lead Generation", "Customer Engagement"],
    },
    {
      id: 4,
      image: "/placeholder-98f8c.png",
      alliance: "Industry / Government",
      title: "Legal Documents Generator",
      description:
        "Automated legal document creation and review system powered by AI to streamline legal processes and ensure compliance.",
      tags: ["Legal Tech", "Document Automation", "Compliance"],
    },
  ]

  const filteredStudies = useMemo(() => {
    if (!searchQuery.trim()) {
      return caseStudies
    }

    const normalizedQuery = searchQuery.toLowerCase()
    return caseStudies.filter((study) =>
      [study.title, study.description, study.alliance, ...study.tags].some((value) =>
        value.toLowerCase().includes(normalizedQuery),
      ),
    )
  }, [searchQuery])

  const itemsPerPage = 4
  const totalPages = Math.max(1, Math.ceil(filteredStudies.length / itemsPerPage))
  const safePage = Math.min(currentPage, totalPages)
  const currentItems = filteredStudies.slice((safePage - 1) * itemsPerPage, safePage * itemsPerPage)

  const handleCardClick = (study: any) => {
    setSelectedFeature(study)
    setIsFeatureModalOpen(true)
  }

  const closeFeatureModal = () => {
    setIsFeatureModalOpen(false)
    setSelectedFeature(null)
  }

  return (
    <>
      <div
        className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 px-4 py-6 sm:p-8"
        onClick={onClose}
      >
        <div
          className={`relative flex h-full w-full max-w-[90rem] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.3)] ${fontFamilyClass}`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex flex-col gap-4 border-b border-gray-200 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <h1 className="text-2xl font-light text-[#FF462D]">Case studies</h1>

            <div className="flex flex-wrap items-center gap-4">
              <div className="relative w-full sm:w-64 md:w-80">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(event) => {
                    setSearchQuery(event.target.value)
                    setCurrentPage(1)
                  }}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 text-sm text-gray-700 placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#FF462D]"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              </div>

              <button
                onClick={onClose}
                className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-800"
                aria-label="Close case studies modal"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto bg-[#F2F1EE] px-4 py-6 sm:px-8 md:px-12">
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {currentItems.map((study) => (
                <article
                  key={study.id}
                  className="flex h-full cursor-pointer flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-200 hover:scale-[1.01] hover:shadow-lg"
                  onClick={() => handleCardClick(study)}
                >
                  <div className="h-48 w-full overflow-hidden bg-gray-100">
                    <img src={study.image} alt={study.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                    <p className="mb-2 text-sm font-medium text-[#FF462D]">{study.alliance}</p>
                    <h3 className="mb-3 text-lg font-medium leading-tight text-[#3D3C3C]">{study.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-[#727175]">{study.description}</p>
                    <button
                      className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-[#3D3C3C] transition-colors hover:text-[#FF462D]"
                      onClick={(event) => {
                        event.stopPropagation()
                        handleCardClick(study)
                      }}
                    >
                      Learn more
                      <ChevronRight size={16} />
                    </button>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {study.tags.map((tag: string) => (
                        <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 border-t border-gray-200 px-4 py-4 sm:px-8">
            <button
              className="flex items-center gap-2 text-sm text-[#727175] transition-colors hover:text-[#3D3C3C] disabled:text-gray-300"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={safePage === 1}
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            <div className="flex items-center gap-4">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`relative px-2 text-sm font-medium transition-colors ${
                    safePage === page ? "text-[#FF462D]" : "text-[#727175] hover:text-[#3D3C3C]"
                  }`}
                >
                  {page}
                  {safePage === page && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF462D]" />}
                </button>
              ))}
            </div>

            <button
              className="flex items-center gap-2 text-sm text-[#727175] transition-colors hover:text-[#3D3C3C] disabled:text-gray-300"
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              disabled={safePage === totalPages}
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <FeatureFocusModal
        isOpen={isFeatureModalOpen}
        onClose={closeFeatureModal}
        story={selectedFeature}
        onOpenEmbed={onOpenEmbed}
      />
    </>
  )
}
