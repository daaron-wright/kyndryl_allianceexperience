"use client"

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

interface FeaturedVideoModalProps {
  onClose: () => void
}

export default function FeaturedVideoModal({ onClose }: FeaturedVideoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[1400px] h-[800px] bg-white font-sans shadow-2xl overflow-hidden">
        <header className="flex items-center justify-between px-12 py-6 h-[90px] border-b border-gray-200">
          <h1 className="text-[30px] font-light text-[#FF462D] tracking-[0.16px]">Feature</h1>

          <div className="w-[296px] h-[48px] border border-[#9E9287] rounded-[4px] flex items-center justify-between px-4">
            <span className="text-[16px] text-[#9E9287] tracking-[0.16px]">Search</span>
            <SearchIcon />
          </div>

          <button
            className="w-[48px] h-[48px] flex items-center justify-center hover:bg-gray-100 rounded"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </header>

        <main className="h-[650px] bg-[#F2F1EE] flex">
          <div className="flex-1 p-12 flex flex-col justify-center gap-12">
            <h2 className="font-light text-[36px] leading-[43px] tracking-[0.32px] text-black max-w-[500px]">
              Kyndryl & Google Cloud Partnership
            </h2>
            <div className="space-y-6 max-w-[500px]">
              <p className="font-light text-[18px] leading-[24px] tracking-[0.32px] text-black">
                Discover how Kyndryl and Google Cloud are working together to deliver innovative solutions that help
                organizations modernize their infrastructure and accelerate their digital transformation journey.
              </p>
              <p className="font-light text-[18px] leading-[24px] tracking-[0.32px] text-black">
                This partnership combines Kyndryl's deep expertise in managing mission-critical systems with Google
                Cloud's cutting-edge technology to create powerful outcomes for our clients.
              </p>
            </div>
          </div>

          <div className="w-[711px] h-full p-6 flex items-center justify-center">
            <div className="w-full h-[580px]">
              <div
                id="dynamicmedia_192138996"
                data-current-page="/content/kyndrylprogram/us/en/about-us/alliances/google-cloud"
                data-page-locale="en_us"
                data-asset-path="kyndryl/kyndryl-google-partnership-AVS"
                data-asset-name="kyndryl-google-partnership.mp4"
                data-asset-type="videoavs"
                data-viewer-type="VideoViewer"
                data-viewer-path="https://s7d1.scene7.com/s7viewers/"
                data-imageserver="https://s7d1.scene7.com/is/image/"
                data-videoserver="https://s7d1.scene7.com/is/content/"
                data-contenturl="https://s7d1.scene7.com/is/content/"
                data-config="/kyndryl/Video_social|VIDEO|false"
                data-wcmdisabled
                data-dms7
                data-viewermodifiers="&posterimage=https://s7d1.scene7.com/is/image/kyndryl/kyndryl-google-partnership_16x9"
                className="s7dm-dynamic-media video_social s7responsiveViewer s7videoviewer s7mouseinput s7size_small s7device_portrait w-full h-full"
                style={{ height: "auto", pointerEvents: "auto" }}
              >
                <iframe
                  src="https://s7d1.scene7.com/s7viewers/html5/VideoViewer.html?asset=kyndryl/kyndryl-google-partnership-AVS&config=/kyndryl/Video_social&posterimage=https://s7d1.scene7.com/is/image/kyndryl/kyndryl-google-partnership_16x9"
                  width="100%"
                  height="580px"
                  frameBorder="0"
                  allowFullScreen
                  title="Kyndryl Google Partnership Video"
                  className="w-full h-[580px] rounded-lg"
                />
              </div>
            </div>
          </div>
        </main>

        <footer className="h-[185px] flex flex-col items-center justify-center relative">
          <div className="w-[570px] border-t border-[#9E9287] mb-8"></div>

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
    </div>
  )
}
