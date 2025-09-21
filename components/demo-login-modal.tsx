"use client"

interface DemoLoginModalProps {
  onClose: () => void
  onLogin: () => void
}

export default function DemoLoginModal({ onClose, onLogin }: DemoLoginModalProps) {
  return (
    <div className="p-8 relative" style={{ fontFamily: "TWK Everett, sans-serif" }}>
      {/* Close Button */}
      <button onClick={onClose} className="absolute top-6 left-6 text-gray-600 hover:text-gray-800 transition-colors">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div className="flex mb-8 mt-4">
        <div className="w-20 h-20 bg-[#FF462D] rounded-full flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </div>

      <h1 className="text-4xl font-light text-[#FF462D] text-left mb-6">Welcome to AI Use Cases Explorer</h1>

      {/* Subtitle */}
      <p className="text-xl text-gray-700 text-left mb-8">
        Discover how AI transforms industries through interactive demonstrations
      </p>

      {/* Info Section */}
      <div className="mb-8">
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-gray-600 font-medium">i</span>
          </div>
          <div>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Kyndryl Consult Concierge</h2>
            <p className="text-gray-700 leading-relaxed">
              A Kyndryl Consult concierge is on the way to assist you with personalized AI solution recommendations and
              answer any questions about our use cases. In the meantime, explore our interactive demonstrations to see
              AI in action.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div>
          <a
            href="https://kyndryl-demos.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-lg font-medium text-gray-700 no-underline w-fit"
          >
            Log in to explore demos
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF462D" strokeWidth="2">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
          <p className="text-sm text-gray-600 mt-2">Username: &lt;email&gt; | Password: &lt;firstname.surname&gt;</p>
        </div>
      </div>

      {/* Statistics */}
      <div className="flex justify-between items-end">
        <div>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29-pqzc5awmnX2H8V3G2BnhCTysrrhamq.png"
            alt="15+"
            className="mb-2 h-12 w-auto"
          />
          <div className="text-gray-700">
            Interactive
            <br />
            Demos
          </div>
        </div>
        <div>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29-9L8JLoP1MnoeS7zZPqq3VgwbjXaGIl.png"
            alt="8"
            className="mb-2 h-12 w-auto"
          />
          <div className="text-gray-700">
            Industry
            <br />
            Verticals
          </div>
        </div>
        <div className="text-right">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Back to home page
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
