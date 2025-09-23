"use client"

import { useState } from "react"
import { ChevronRight, Search, X } from "lucide-react"

export default function UseCasesPage() {
  const [currentPage, setCurrentPage] = useState(2) // Set to page 2 to match the image
  const [searchQuery, setSearchQuery] = useState("")

  const caseStudies = [
    {
      id: 1,
      image: "/grocery-shopping-scene.png",
      alliance: "Alliance / customer name",
      title: "Content title utenim ad minim veniam, quis nostrud exercitation",
      description: "Content title utenim ad minim veniam, quis nostrud exercitation",
      tags: ["Meta tag", "Meta tag", "Meta tag"],
    },
    {
      id: 2,
      image: "/shipping-port-containers.png",
      alliance: "Alliance / customer name",
      title: "Content title utenim ad minim veniam, quis nostrud exercitation",
      description: "Content title utenim ad minim veniam, quis nostrud exercitation",
      tags: ["Meta tag", "Meta tag", "Meta tag"],
    },
    {
      id: 3,
      image: "/sheep-livestock.png",
      alliance: "Alliance / customer name",
      title: "Content title utenim ad minim veniam, quis nostrud exercitation",
      description: "Content title utenim ad minim veniam, quis nostrud exercitation",
      tags: ["Meta tag", "Meta tag", "Meta tag"],
    },
    {
      id: 4,
      image: "/dining-food-scene.png",
      alliance: "Alliance / customer name",
      title: "Content title utenim ad minim veniam, quis nostrud exercitation",
      description: "Content title utenim ad minim veniam, quis nostrud exercitation",
      tags: ["Meta tag", "Meta tag", "Meta tag"],
    },
    {
      id: 5,
      image: "/grocery-shopping-scene.png",
      alliance: "Alliance / customer name",
      title: "Content title utenim ad minim veniam, quis nostrud exercitation ullamco",
      description: "Content title utenim ad minim veniam, quis nostrud exercitation",
      tags: ["Meta tag", "Meta tag", "Meta tag"],
    },
    {
      id: 6,
      image: "/shipping-port-containers.png",
      alliance: "Alliance / customer name",
      title: "Content title utenim ad minim veniam, quis nostrud exercitation ullamco",
      description: "Content title utenim ad minim veniam, quis nostrud exercitation",
      tags: ["Meta tag", "Meta tag", "Meta tag"],
    },
    {
      id: 7,
      image: "/sheep-livestock.png",
      alliance: "Alliance / customer name",
      title: "Content title utenim ad minim veniam, quis nostrud exercitation ullamco",
      description: "Content title utenim ad minim veniam, quis nostrud exercitation",
      tags: ["Meta tag", "Meta tag", "Meta tag"],
    },
    {
      id: 8,
      image: "/dining-food-scene.png",
      alliance: "Alliance / customer name",
      title: "Content title utenim ad minim veniam, quis nostrud exercitation ullamco",
      description: "Content title utenim ad minim veniam, quis nostrud exercitation",
      tags: ["Meta tag", "Meta tag", "Meta tag"],
    },
  ]

  const itemsPerPage = 4 // Changed from 5 to 4 to match the 2x2 grid
  const totalPages = Math.ceil(caseStudies.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = caseStudies.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="min-h-screen bg-[#F2F1EE]">
      {" "}
      {/* Changed background to match image */}
      {/* Header */}
      <header className="bg-white px-4 sm:px-8 lg:px-16 py-6 lg:py-8">
        {" "}
        {/* Reduced padding */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#FF462D] m-0 leading-none font-sans">
            Customer Stories - Case studies
          </h1>

          <div className="flex items-center gap-4">
            {" "}
            {/* Added gap for close button */}
            <div className="flex items-center gap-2 rounded-md border border-neutral-300 px-3 py-2 text-sm bg-white">
              <Search className="w-4 h-4 text-neutral-400" />
              <input
                className="outline-none placeholder:text-neutral-400 bg-transparent"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: "clamp(120px, 15vw, 180px)" }}
              />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-md">
              {" "}
              {/* Added close button */}
              <X className="w-5 h-5 text-neutral-400" />
            </button>
          </div>
        </div>
      </header>
      {/* Case Studies Grid */}
      <section className="px-4 sm:px-8 lg:px-16 py-8 lg:py-12">
        {" "}
        {/* Reduced padding */}
        <div className="max-w-6xl mx-auto">
          {" "}
          {/* Reduced max width for better 2x2 layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {" "}
            {/* Changed to 4 columns for proper layout */}
            {currentItems.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  {" "}
                  {/* Reduced padding */}
                  <div className="text-[#FF462D] text-sm font-medium mb-2">{study.alliance}</div>
                  <h3 className="text-base font-medium text-[#3D3C3C] mb-2 line-clamp-3">{study.title}</h3>{" "}
                  {/* Reduced font size and increased line clamp */}
                  <p className="text-[#9E9287] text-sm mb-4 line-clamp-2">{study.description}</p>
                  <div className="flex items-center text-[#FF462D] text-sm font-medium mb-4 hover:underline cursor-pointer">
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {" "}
                        {/* Reduced padding and removed rounded-full */}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex items-center justify-center mt-16 gap-8">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex items-center text-[#9E9287] hover:text-[#3D3C3C] disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                <ChevronRight className="w-4 h-4 mr-1 rotate-180" />
                Previous
              </button>

              <div className="flex items-center gap-4">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <div key={page} className="relative">
                    <button
                      onClick={() => setCurrentPage(page)}
                      className={`text-lg font-light transition-colors ${
                        currentPage === page ? "text-[#FF462D]" : "text-[#9E9287] hover:text-[#3D3C3C]"
                      }`}
                    >
                      {page}
                    </button>
                    {currentPage === page && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-[#FF462D]"></div>
                    )}
                  </div>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center text-[#9E9287] hover:text-[#3D3C3C] disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          )}
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white px-4 sm:px-8 lg:px-16 py-6 lg:py-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29%281%29%281%29%281%29%281%29%281%29%281%29-1kxvzJ0Oxd953lzH32hms4djGXuYvP.png"
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
              Customer Stories
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
