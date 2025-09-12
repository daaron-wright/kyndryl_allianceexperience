"use client"

import { useRouter } from "next/navigation"

export default function Government() {
  const router = useRouter()

  return (
    <div
      style={{
        width: "1920px",
        height: "1080px",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "#FFFFFF",
          padding: "30px 90px",
          borderBottom: "1px solid #E5E5E5",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              fontFamily: "TWK Everett, sans-serif",
              fontWeight: 300,
              color: "#FF462D",
              margin: 0,
              lineHeight: "48px",
            }}
          >
            Government
          </h1>

          <nav
            className="flex items-center gap-8 text-neutral-700"
            style={{
              gap: "clamp(16px, 2vw, 32px)",
              fontSize: "clamp(14px, 1.5vw, 16px)",
            }}
          >
            <a className="hover:text-black" href="/alliances">
              Alliances
            </a>
            <a className="hover:text-black" href="/industries">
              Industries
            </a>
            <a className="hover:text-black text-neutral-400 cursor-default font-light" href="#">
              Capabilities
            </a>
            <a className="hover:text-black cursor-default" href="#">
              Kyndryl's AI Journey
            </a>
            <div className="ml-4 flex items-center gap-2 rounded-md border border-neutral-300 px-3 py-2 text-sm">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                className="outline-none placeholder:text-neutral-400"
                placeholder="Search"
                style={{ width: "clamp(120px, 15vw, 180px)" }}
              />
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main
        style={{
          padding: "60px 90px",
          height: "calc(1080px - 200px)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "30px",
        }}
      >
        {/* Featured Content - Left Side */}
        <div
          style={{
            gridRow: "1 / 3",
            backgroundColor: "#F2F1EE",
            borderRadius: "8px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src="/placeholder.svg?key=gov1"
            alt="Government building"
            style={{
              width: "100%",
              height: "60%",
              objectFit: "cover",
            }}
          />
          <div style={{ padding: "40px" }}>
            <h2
              style={{
                fontSize: "32px",
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 500,
                color: "#FF462D",
                margin: "0 0 20px 0",
                lineHeight: "38px",
              }}
            >
              Digital government services; secure and compliant
            </h2>
            <p
              style={{
                fontSize: "18px",
                fontFamily: "TWK Everett, sans-serif",
                color: "#727175",
                margin: "0 0 30px 0",
                lineHeight: "24px",
              }}
            >
              Modernizing public services with cloud-first architecture.
            </p>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M12 24L20 16L12 8"
                  stroke="#FF462D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: "40px 90px",
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span
              style={{
                fontSize: "16px",
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
                fontSize: "16px",
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
                fontSize: "16px",
                fontFamily: "TWK Everett, sans-serif",
                color: "#29707A",
                fontWeight: 500,
              }}
            >
              Government
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
