"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import FeaturedTile from "@/components/featured-tile"

export default function Insurance() {
  const router = useRouter()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAllianceWelcomeModalOpen, setIsAllianceWelcomeModalOpen] = useState(false)
  const [isCaseStudiesModalOpen, setIsCaseStudiesModalOpen] = useState(false)
  const [isCustomerStoriesModalOpen, setIsCustomerStoriesModalOpen] = useState(false)
  const [isDemoLoginModalOpen, setIsDemoLoginModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white relative">
      {/* Header */}
      <header
        className="bg-white border-b border-gray-200"
        style={{ padding: "clamp(20px, 4vh, 30px) clamp(30px, 6vw, 90px)" }}
      >
        <div className="flex justify-between items-center">
          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 48px)",
              fontFamily: "TWK Everett, sans-serif",
              fontWeight: 300,
              color: "#FF462D",
              margin: 0,
              lineHeight: "1.1",
            }}
          >
            Insurance
          </h1>

          <nav className="flex items-center" style={{ gap: "clamp(16px, 2vw, 40px)" }}>
            <a
              href="/alliances"
              className="text-gray-700 hover:text-black transition-colors"
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Alliances
            </a>
            <a
              href="/industries"
              className="text-gray-700 hover:text-black transition-colors"
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Industries
            </a>
            <a
              href="#"
              className="text-gray-500 cursor-default"
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Capabilities
            </a>
            <a
              href="#"
              className="text-gray-500 cursor-default"
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Kyndryl's AI Journey
            </a>

            <div
              className="relative border border-gray-200 rounded"
              style={{ padding: "clamp(8px, 1vh, 12px) clamp(12px, 2vw, 16px)" }}
            >
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none"
                style={{
                  width: "clamp(200px, 20vw, 300px)",
                  fontSize: "clamp(14px, 1.5vw, 16px)",
                  fontFamily: "TWK Everett, sans-serif",
                }}
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                  stroke="#727175"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </nav>
        </div>
      </header>

      <main
        className="grid grid-cols-2 grid-rows-2 gap-8"
        style={{
          height: "calc(100vh - clamp(200px, 25vh, 300px))",
          gap: "clamp(16px, 2vw, 32px)",
          padding: "clamp(30px, 5vh, 60px) clamp(45px, 6vw, 90px)",
        }}
      >
        <section className="row-span-2">
          <FeaturedTile onClick={() => setIsModalOpen(true)} />
        </section>

        <div
          className="relative w-full bg-[#FF462D] shadow-lg rounded-[4px] overflow-hidden cursor-pointer hover:bg-[#E63E32] transition-colors"
          onClick={() => setIsAllianceWelcomeModalOpen(true)}
        >
          <div style={{ padding: "clamp(20px, 3vw, 40px)" }}>
            <h2
              style={{
                fontFamily: "TWK Everett, sans-serif",
                fontSize: "clamp(32px, 5vw, 54px)",
                fontWeight: 300,
                lineHeight: "1.1",
                letterSpacing: "0.2px",
                color: "white",
                margin: 0,
              }}
            >
              Customer Stories
            </h2>
          </div>

          {/* Buttons Container */}
          <div
            className="absolute flex gap-[20px]"
            style={{
              bottom: "clamp(20px, 3vw, 40px)",
              left: "clamp(20px, 3vw, 40px)",
              gap: "clamp(10px, 2vw, 20px)",
            }}
          >
            <div
              className="bg-white rounded-[4px] flex items-center justify-center gap-[20px]"
              style={{
                width: "clamp(160px, 20vw, 210px)",
                height: "clamp(40px, 5vh, 60px)",
                padding: "clamp(10px, 2vw, 20px)",
                gap: "clamp(10px, 2vw, 20px)",
              }}
              onClick={(e) => {
                e.stopPropagation()
                setIsCaseStudiesModalOpen(true)
              }}
            >
              <span
                style={{
                  fontFamily: "TWK Everett, sans-serif",
                  fontSize: "clamp(14px, 2vw, 20px)",
                  fontWeight: 500,
                  lineHeight: "1.2",
                  letterSpacing: "0.2px",
                  color: "#042315",
                }}
              >
                Case studies
              </span>
              <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 23L13 12L1 1"
                  stroke="#FF462D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div
              className="bg-white rounded-[4px] flex items-center justify-center gap-[20px]"
              style={{
                width: "clamp(130px, 16vw, 170px)",
                height: "clamp(40px, 5vh, 60px)",
                padding: "clamp(10px, 2vw, 20px)",
                gap: "clamp(10px, 2vw, 20px)",
              }}
              onClick={(e) => {
                e.stopPropagation()
                setIsCustomerStoriesModalOpen(true)
              }}
            >
              <span
                style={{
                  fontFamily: "TWK Everett, sans-serif",
                  fontSize: "clamp(14px, 2vw, 20px)",
                  fontWeight: 500,
                  lineHeight: "1.2",
                  letterSpacing: "0.2px",
                  color: "#042315",
                }}
              >
                Videos
              </span>
              <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 23L13 12L1 1"
                  stroke="#FF462D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div
          className="relative w-full shadow-lg rounded-lg overflow-hidden cursor-pointer transition-colors bg-[rgba(4,35,21,1)]"
          onClick={() => setIsDemoLoginModalOpen(true)}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29-36RWsLYVwLCHUWkCzYldRhXRBlvE06.png"
            alt="Demos"
            className="object-cover size-full px-0 py-3.5 my-14 mx-8"
          />
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: "clamp(20px, 3vh, 40px) clamp(45px, 6vw, 90px)",
          borderTop: "1px solid #E5E5E5",
          backgroundColor: "#FFFFFF",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
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
                fontSize: "clamp(16px, 2vw, 18px)",
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
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path d="M2 2L6 6L2 10" stroke="#727175" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span
              style={{
                fontSize: "clamp(14px, 1.5vw, 16px)",
                fontFamily: "TWK Everett, sans-serif",
                color: "#727175",
                cursor: "pointer",
              }}
              onClick={() => router.push("/industries")}
            >
              Industries
            </span>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path d="M2 2L6 6L2 10" stroke="#727175" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span
              style={{
                fontSize: "clamp(14px, 1.5vw, 16px)",
                fontFamily: "TWK Everett, sans-serif",
                color: "#29707A",
                fontWeight: 500,
              }}
            >
              Insurance
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
