import type React from "react"

interface ResponsiveWrapperProps {
  children: React.ReactNode
  className?: string
}

const ResponsiveWrapper: React.FC<ResponsiveWrapperProps> = ({ children, className = "" }) => {
  return <div className={`w-full ${className}`}>{children}</div>
}

export default ResponsiveWrapper
