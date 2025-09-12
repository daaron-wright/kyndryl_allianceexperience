"use client"

import { useState } from "react"
import Link from "next/link"

const videoData = [
  {
    id: 1,
    title: "Kyndryl Customer Compilation",
    description:
      "This is a customer video compilation is to be used specifically for 1-to-1 or 1-to-few customer meetings to increase scope or gain new business and for internal Kyndryl meetings. Please do not use this for external purposes.",
    duration: "1:51",
    tags: ["Cross", "Customer Stories"],
    category: "Customer Stories",
    date: "12/20/2024",
    featured: true,
    thumbnail: "/video-thumbnail-1.png",
  },
  {
    id: 2,
    title: "Sustainability Barometer Report Booth Video - Cross Industry",
    description: "Sustainability and ESG initiatives across industries",
    duration: "1:25",
    tags: ["Microsoft Azure", "ESG", "Sustainability", "ESG"],
    category: "ESG",
    date: "12/15/2024",
    featured: false,
    thumbnail: "/video-thumbnail-2.png",
  },
  {
    id: 3,
    title: "Modern Data-Driven Enterprises",
    description: "How modern enterprises leverage data for competitive advantage",
    duration: "1:11",
    tags: ["Cross", "Data Modernization", "Data-Driven", "AI"],
    category: "Data Modernization",
    date: "12/10/2024",
    featured: false,
    thumbnail: "/video-thumbnail-3.png",
  },
  {
    id: 4,
    title: "Kyndryl Gen AI Thought Leadership - Data that drives the AI",
    description: "Thought leadership on AI and data governance",
    duration: "2:33",
    tags: ["Cross", "Thought Leadership", "AI", "Data Governance"],
    category: "Thought Leadership",
    date: "12/08/2024",
    featured: false,
    thumbnail: "/video-thumbnail-4.png",
  },
  {
    id: 5,
    title: "Automotive Innovate Customer Experience Booth",
    description: "Customer experience innovations in automotive industry",
    duration: "1:03",
    tags: ["Cross", "Customer Experience", "Customer 360", "Automotive"],
    category: "Customer Experience",
    date: "12/05/2024",
    featured: true,
    thumbnail: "/video-thumbnail-1.png",
  },
  {
    id: 6,
    title: "Communication and Media Industry",
    description: "AI solutions for communication and media companies",
    duration: "0:47",
    tags: ["Cross", "Industry Solutions", "Generative AI", "Cloud Migration"],
    category: "Industry Solutions",
    date: "12/03/2024",
    featured: true,
    thumbnail: "/video-thumbnail-2.png",
  },
  {
    id: 7,
    title: "Kyndryl and Google Cloud Partnership",
    description: "Strategic partnership with Google Cloud",
    duration: "1:35",
    tags: ["Google Cloud", "Partnership"],
    category: "Partnership",
    date: "11/28/2024",
    featured: false,
    thumbnail: "/video-thumbnail-3.png",
  },
  {
    id: 8,
    title: "Google Cloud for Banking and Financial Services Industry",
    description: "Google Cloud solutions for financial services",
    duration: "1:10",
    tags: ["Google Cloud", "Financial Services"],
    category: "Financial Services",
    date: "11/25/2024",
    featured: false,
    thumbnail: "/video-thumbnail-4.png",
  },
]

export default function VideoLibraryPage() {
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [filteredVideos, setFilteredVideos] = useState(videoData)

  const categories = [
    "All",
    "Customer Stories",
    "Partnership",
    "ESG",
    "Data Modernization",
    "Thought Leadership",
    "Customer Experience",
    "Industry Solutions",
    "Financial Services",
  ]

  const handleFilterChange = (category: string) => {
    setSelectedFilter(category)
    if (category === "All") {
      setFilteredVideos(videoData)
    } else {
      setFilteredVideos(videoData.filter((video) => video.category === category))
    }
  }

  const featuredVideo = videoData.find((video) => video.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/ai-journey" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L6.59 1.41L12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z" transform="rotate(180 8 8)" />
              </svg>
              Back to AI Journey
            </Link>
            <Link href="/alliances" className="text-gray-600 hover:text-gray-900">
              View Alliances
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Featured Videos Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Featured Videos</h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover how AI is being applied in real-world scenarios across different industries and use cases.
          </p>

          {featuredVideo && (
            <div className="bg-black rounded-lg overflow-hidden mb-8">
              <div className="relative aspect-video">
                <img
                  src={featuredVideo.thumbnail || "/placeholder.svg"}
                  alt={featuredVideo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                  {featuredVideo.duration}
                </div>
                <div className="absolute top-4 left-4 bg-[#FF462D] text-white px-3 py-1 rounded text-sm font-medium">
                  Featured
                </div>
              </div>
              <div className="p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  {featuredVideo.tags.map((tag, index) => (
                    <span key={index} className="text-gray-300 text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{featuredVideo.title}</h3>
                <p className="text-gray-300 text-sm">{featuredVideo.description}</p>
                <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
                  <span>{featuredVideo.category}</span>
                  <span>{featuredVideo.date}</span>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Filter Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">Filter</span>
              <select
                value={selectedFilter}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF462D] focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <span className="text-gray-600 text-sm">
              Showing {filteredVideos.length} of {videoData.length} videos
            </span>
          </div>
        </section>

        {/* Video Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all flex items-center justify-center">
                    <button className="w-12 h-12 bg-white bg-opacity-0 hover:bg-opacity-90 rounded-full flex items-center justify-center transition-all">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="ml-0.5 opacity-0 hover:opacity-100 transition-opacity"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                  {video.featured && (
                    <div className="absolute top-2 left-2 bg-[#FF462D] text-white px-2 py-1 rounded text-xs font-medium">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {video.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                    {video.tags.length > 2 && <span className="text-gray-500 text-xs">+{video.tags.length - 2}</span>}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">{video.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{video.category}</span>
                    <span>{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* See All Featured Videos Link */}
        <div className="text-center mt-12">
          <button className="text-[#FF462D] hover:text-[#E63E32] font-medium">See all featured videos</button>
        </div>
      </main>
    </div>
  )
}
