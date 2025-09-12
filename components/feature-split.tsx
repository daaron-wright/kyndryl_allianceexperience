"use client"

/**
 * Feature split layout built with TailwindCSS to match the screenshot:
 * - Top bar with title, search, and close icon
 * - Two-column split: left text panel on a light card background, right image
 * - Bottom tab row with active underline + previous/next controls
 */
interface FeatureSplitProps {
  onClose?: () => void
}

export default function FeatureSplit({ onClose }: FeatureSplitProps) {
  return (
    <div className="min-h-screen w-full bg-white text-neutral-900">
      {/* Frame container */}
      <div className="mx-auto max-w-[1200px]">
        {/* Top bar */}
        <header className="flex items-center justify-between px-6 py-5 border-b border-neutral-200">
          <h1 className="text-[32px] leading-none font-light tracking-tight text-[#ff4a3d]">Feature</h1>

          <div className="flex items-center gap-4">
            {/* Search */}
            <label className="flex items-center gap-3 rounded-md border border-neutral-300 px-4 py-2 text-[15px] text-neutral-700">
              <input
                className="w-[260px] placeholder:text-neutral-400 outline-none"
                placeholder="Search"
                aria-label="Search"
              />
              <SearchIcon />
            </label>

            {/* Close (X) */}
            <button aria-label="Close" className="p-2 rounded-md hover:bg-neutral-100" onClick={onClose}>
              <CloseIcon />
            </button>
          </div>
        </header>

        {/* Split content */}
        <section className="grid grid-cols-12">
          {/* Left panel */}
          <div className="col-span-12 md:col-span-6 bg-[#EFEDE9] border-r border-neutral-200 px-8 lg:px-12 py-12">
            <h2 className="text-[44px] leading-[1.15] font-light tracking-tight text-neutral-900 mb-8">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit,
              <br /> sed do eiusmod
            </h2>

            <div className="max-w-[560px] space-y-6 text-[18px] leading-8 text-neutral-700">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
          </div>

          {/* Right image panel */}
          <div className="relative col-span-12 md:col-span-6 h-[540px] md:h-[600px] overflow-hidden">
            {/* Image placeholder (replace src as needed) */}
            <div className="absolute inset-0">
              {/* Use an img if you have one: <img src="/path.jpg" className="w-full h-full object-cover"/> */}
              <div className="h-full w-full bg-gradient-to-br from-neutral-300 via-neutral-200 to-neutral-400" />
            </div>
          </div>
        </section>

        {/* Tabs & Pagination */}
        <div className="border-t border-neutral-200">
          {/* Tabs row */}
          <div className="mx-auto max-w-[920px]">
            <div className="flex items-center justify-between px-6 md:px-2">
              <Tab label="Opportunity" />
              <Tab label="Challenge" active />
              <Tab label="Solution" />
              <Tab label="Outcome" />
            </div>
          </div>

          {/* Prev/Next row */}
          <div className="flex items-center justify-between px-6 py-6 text-neutral-600">
            <button className="inline-flex items-center gap-2 hover:text-neutral-900">
              <ChevronLeft />
              <span>Previous</span>
            </button>

            <button className="inline-flex items-center gap-2 hover:text-neutral-900">
              <span>Next</span>
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Tab({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <button
      className={[
        "relative py-5 text-[18px]",
        active ? "text-neutral-900 font-medium" : "text-neutral-500 hover:text-neutral-800",
      ].join(" ")}
    >
      <span>{label}</span>
      <span
        className={[
          "pointer-events-none absolute left-0 right-0 -bottom-[1px] h-[3px]",
          active ? "bg-[#ff4a3d]" : "bg-neutral-300",
        ].join(" ")}
      />
    </button>
  )
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function ChevronLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}
