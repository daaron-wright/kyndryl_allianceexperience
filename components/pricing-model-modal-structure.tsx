"use client"
\
 1))
  }

return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1001,
          padding: "2rem",
        }}
        onClick={onClose}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            width: "1422px",
            height: "800px",
            position: "relative",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            overflow: "hidden",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-4 bg-background">
            <div className="flex items-center gap-4">
              <h1
                style={{
                  fontSize: "2rem",
                  fontFamily: "TWK Everett, sans-serif",
                  fontWeight: 300,
                  color: "#FF462D",
                  margin: 0,
                }}
              >
                {activeTab}
              </h1>

              {activeTab === "Solution" && (
                <div className="flex items-center gap-2 ml-4">
                  {currentCaseStudy.solution.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSolutionIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSolutionIndex ? "bg-[#FF462D]" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-80 px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF462D] focus:border-transparent"
                  style={{
                    fontFamily: "TWK Everett, sans-serif",
                  }}
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>

              {/* Close Button */}
              <button onClick={onClose} className="text-gray-600 hover:text-gray-800 transition-colors">
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex h-full bg-[rgba(242,241,238,1)]" style={{ height: "calc(100% - 180px)" }}>
            {/* Left Content Section */}
            <div
              className={`${activeTab === "Solution" ? "flex-1" : "w-full"} flex flex-col justify-center px-12 py-8 bg-[rgba(242,241,238,1)]`}
            >
              <h2
                className="text-[#3D3C3C] mb-4 leading-tight"
                style={{
                  fontSize: "3rem",
                  fontFamily: "TWK Everett, sans-serif",
                  fontWeight: 300,
                  lineHeight: "1.1",
                }}
              >
                {currentContent.title}
              </h2>

              {currentContent.subtitle && (
                <h3
                  className="text-[#3D3C3C] mb-8"
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: "TWK Everett, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {currentContent.subtitle}
                </h3>
              )}

              <p
                className="text-[#3D3C3C] leading-relaxed"
                style={{
                  fontSize: "1.1rem",
                  fontFamily: "TWK Everett, sans-serif",
                  lineHeight: "1.6",
                }}
              >
                {currentContent.description}
              </p>

              {activeTab === "Solution" && currentCaseStudy.solution.length > 1 && (
                <div className="flex items-center gap-4 mt-8">
                  <button
                    onClick={handlePreviousSolution}
                    className="flex items-center gap-2 px-4 py-2 text-[#727175] hover:text-[#3D3C3C] transition-colors border border-gray-300 rounded-md hover:border-[#FF462D]"
                    style={{
                      fontFamily: "TWK Everett, sans-serif",
                    }}
                  >
                    <ChevronLeft size={16} />
                    Previous
                  </button>

                  <span className="text-[#727175]" style={{ fontFamily: "TWK Everett, sans-serif" }}>
                    {currentSolutionIndex + 1} of {currentCaseStudy.solution.length}
                  </span>

                  <button
                    onClick={handleNextSolution}
                    className="flex items-center gap-2 px-4 py-2 text-[#727175] hover:text-[#3D3C3C] transition-colors border border-gray-300 rounded-md hover:border-[#FF462D]"
                    style={{
                      fontFamily: "TWK Everett, sans-serif",
                    }}
                  >
                    Next
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </div>

            {/* Right Image Section - Only show for Solution tab */}
            {activeTab === "Solution" && (
              <div
                className="flex-1 flex items-center justify-center px-12 my-12 mx-12 py-8 cursor-pointer"
                style={{
                  backgroundImage: `url(${currentContent.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onClick={() => setIsIframeOpen(true)}
              >
                {/* Static image with click functionality */}
              </div>
            )}
          </div>

          {/* Navigation Tabs */}
          <div className="absolute bottom-16 left-0 right-0 flex items-center justify-center">
            <div className="flex items-center gap-8 relative">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-lg font-medium transition-colors relative py-[-10px] px-4 py-0 pt-0 my-0 ${
                    activeTab === tab ? "text-[#3D3C3C]" : "text-[#727175] hover:text-[#3D3C3C]"
                  }`}
                  style={{
                    fontFamily: "TWK Everett, sans-serif",
                  }}
                >
                  {tab}
                  {activeTab === tab && <div className="absolute bottom-[-8px] left-0 right-0 h-0.5 bg-[#FF462D]" />}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between px-6">
            <button
              onClick={handlePreviousTab}
              className="flex items-center gap-2 text-[#727175] hover:text-[#3D3C3C] transition-colors"
              style={{
                fontFamily: "TWK Everett, sans-serif",
              }}
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            <button
              onClick={handleNextTab}
              className="flex items-center gap-2 text-[#727175] hover:text-[#3D3C3C] transition-colors"
              style={{
                fontFamily: "TWK Everett, sans-serif",
              }}
            >
              Next
              <ChevronRight size={20} />
            </button>
          \
