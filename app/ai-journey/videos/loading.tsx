export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29%281%29%281%29%281%29-lQE3biu2Xmg6BT9aEqCdXC1D8WpyKp.png"
          alt="Loading"
          className="w-16 h-auto mx-auto mb-4 animate-pulse"
        />
        <p className="text-gray-600">Loading video library...</p>
      </div>
    </div>
  )
}
