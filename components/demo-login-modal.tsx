const fontFamilyClass = "font-['TWK_Everett',sans-serif]"

interface DemoLoginModalProps {
  onClose: () => void
  onLogin: () => void
}

export default function DemoLoginModal({ onClose, onLogin }: DemoLoginModalProps) {
  return (
    <div className={`relative bg-white p-6 sm:p-8 ${fontFamilyClass}`}>
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-gray-600 transition-colors hover:text-gray-800"
        aria-label="Close demo login modal"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div className="mb-8 mt-4 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF462D] sm:h-20 sm:w-20">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </div>

      <h1 className="mb-6 text-left text-3xl font-light text-[#FF462D] sm:text-4xl">Welcome to AI Use Cases Explorer</h1>

      <p className="mb-8 text-left text-lg text-gray-700 sm:text-xl">
        Discover how AI transforms industries through interactive demonstrations
      </p>

      <div className="mb-8">
        <div className="flex items-start gap-4">
          <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-400">
            <span className="text-base font-medium text-gray-600">i</span>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-medium text-gray-900">Kyndryl Consult Concierge</h2>
            <p className="leading-relaxed text-gray-700">
              A Kyndryl Consult concierge is on the way to assist you with personalized AI solution recommendations and
              answer any questions about our use cases. In the meantime, explore our interactive demonstrations to see AI
              in action.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <a
          href="https://kyndryl-demos.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-lg border-2 border-gray-300 px-6 py-3 text-lg font-medium text-gray-700 transition-colors hover:border-gray-400"
        >
          Log in to explore demos
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF462D" strokeWidth="2">
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
        <p className="mt-2 text-sm text-gray-600">Username: &lt;email&gt; | Password: &lt;firstname.surname&gt;</p>
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29%281%29%281%29%281%29%281%29%281%29%281%29%281%29-jbvNUskL3LuHNxwJDhwTj4EaGpwfvE.png"
            alt="Interactive demos"
            className="h-12 w-auto"
          />
          <div className="text-gray-700">
            Interactive
            <br />
            Demos
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29%281%29%281%29%281%29%281%29%281%29%281%29%281%29-QzGHXrMNbcBPcyUWOSZrdqx4A9BII1.png"
            alt="Industry verticals"
            className="h-12 w-auto"
          />
          <div className="text-gray-700">
            Industry
            <br />
            Verticals
          </div>
        </div>
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-800"
        >
          Back to home page
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

    </div>
  )
}
