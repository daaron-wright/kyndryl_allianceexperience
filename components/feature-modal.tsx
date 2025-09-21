"use client"

// SVG components for icons. The user's CSS describes simple vectors,
// so these are styled to match that aesthetic.
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-[18.59px] w-[18.59px] text-[#3D3C3C]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-[20px] w-[20px] text-[#3D3C3C]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-[12px] w-[7px]"
    fill="none"
    viewBox="0 0 8 14"
    stroke="#3D3C3C"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 13L1 7l6-6" />
  </svg>
)

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-[12px] w-[7px]"
    fill="none"
    viewBox="0 0 8 14"
    stroke="#3D3C3C"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M1 1l6 6-6 6" />
  </svg>
)

// NOTE: The user's CSS specifies the 'TWK Everett' and 'Roboto' fonts.
// These are not standard web fonts and would need to be imported in your project's
// global CSS file for them to appear correctly. We are using standard Tailwind sans-serif fonts as a fallback.
export default function FeatureModal({ onClose }: { onClose?: () => void }) {
  return (
    // The main container is set to a fixed size as per the CSS.
    // It's centered on the page for better previewing.
    <div className="w-full max-w-[1400px] h-[800px] bg-white font-sans shadow-2xl overflow-hidden mx-auto my-8 relative">
      {/* Header Section */}
      <header className="flex items-center justify-between px-12 py-6 h-[90px] border-b border-gray-200">
        {/* Logo/Title */}
        <h1 className="text-[30px] font-light text-[#FF462D] tracking-[0.16px]">Feature</h1>

        {/* Search Input */}
        <div className="w-[296px] h-[48px] border border-[#9E9287] rounded-[4px] flex items-center justify-between px-4">
          <span className="text-[16px] text-[#9E9287] tracking-[0.16px]">Search</span>
          <SearchIcon />
        </div>

        {/* Close Button */}
        <button
          className="w-[48px] h-[48px] flex items-center justify-center hover:bg-gray-100 rounded"
          onClick={onClose}
        >
          <CloseIcon />
        </button>
      </header>

      {/* Main Content Area */}
      <main className="h-[525px] bg-[#F2F1EE] flex">
        {/* Text Content */}
        <div className="flex-1 p-12 flex flex-col justify-center gap-12">
          <h2 className="font-light text-[36px] leading-[43px] tracking-[0.32px] text-black max-w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </h2>
          <div className="space-y-6 max-w-[500px]">
            <p className="font-light text-[18px] leading-[24px] tracking-[0.32px] text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <p className="font-light text-[18px] leading-[24px] tracking-[0.32px] text-black">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-[711px] h-full">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29%281%29-V9aiEUI0QLSXTqxh8wVJxw38caOVZu.png"
            alt="Professional man in white shirt and glasses holding tablet in modern office environment"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null
              e.currentTarget.src = "https://placehold.co/711x525/cccccc/ffffff?text=Image+Not+Found"
            }}
          />
        </div>
      </main>

      {/* Footer Section */}
      <footer className="h-[185px] flex flex-col items-center justify-center relative">
        {/* Tabs Navigation */}
        <div className="flex items-center gap-[60px] text-[#3D3C3C] mb-4">
          <a href="#" className="font-light text-[18px] tracking-[0.2px] hover:text-[#FF462D] transition-colors">
            Opportunity
          </a>
          <a href="#" className="font-bold text-[18px] tracking-[0.2px] text-[#FF462D] relative">
            Challenge
            <div className="absolute -bottom-2 left-0 right-0 h-[3px] bg-[#FF462D] my-[-10px]"></div>
          </a>
          <a href="#" className="font-light text-[18px] tracking-[0.2px] hover:text-[#FF462D] transition-colors">
            Solution
          </a>
          <a href="#" className="font-light text-[18px] tracking-[0.2px] hover:text-[#FF462D] transition-colors">
            Outcome
          </a>
        </div>

        {/* Underline for tabs */}
        <div className="w-[570px] border-t border-[#9E9287] mb-8"></div>

        {/* Pagination Buttons */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-between px-8">
          <a href="#" className="flex items-center gap-2 text-[#3D3C3C] hover:text-[#FF462D] transition-colors">
            <ChevronLeftIcon />
            <span className="text-[16px] font-normal tracking-[0.2px]">Previous</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-[#3D3C3C] hover:text-[#FF462D] transition-colors">
            <span className="text-[16px] font-normal tracking-[0.2px]">Next</span>
            <ChevronRightIcon />
          </a>
        </div>
      </footer>
    </div>
  )
}
