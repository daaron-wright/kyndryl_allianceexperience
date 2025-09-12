"use client"

import { useRouter } from "next/navigation"

export default function ChemicalOilGas() {
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
            Chemical, Oil and Gas
          </h1>

          {/* Center - Navigation */}
          <nav
            style={{
              display: "flex",
              gap: "18px 40px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/alliances"
              style={{
                fontSize: "20px",
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 500,
                color: "#3D3C3C",
                textDecoration: "none",
                letterSpacing: "0.32px",
                lineHeight: "24px",
                padding: "8px 0",
              }}
            >
              Alliances
            </a>
            <a
              href="/industries"
              style={{
                fontSize: "20px",
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 500,
                color: "#3D3C3C",
                textDecoration: "none",
                letterSpacing: "0.32px",
                lineHeight: "24px",
                padding: "8px 0",
                borderBottom: "3px solid #FF462D",
              }}
            >
              Industries
            </a>
            <a
              href="#"
              style={{
                fontSize: "20px",
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 500,
                color: "#3D3C3C",
                textDecoration: "none",
                letterSpacing: "0.32px",
                lineHeight: "24px",
                padding: "8px 0",
              }}
            >
              Capabilities
            </a>
            <a
              href="#"
              style={{
                fontSize: "20px",
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 500,
                color: "#3D3C3C",
                textDecoration: "none",
                letterSpacing: "0.32px",
                lineHeight: "24px",
                padding: "8px 0",
              }}
            >
              Market
            </a>
          </nav>

          {/* Right - Search */}
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Search"
              style={{
                width: "300px",
                padding: "12px 45px 12px 16px",
                border: "1px solid #E5E5E5",
                borderRadius: "4px",
                fontSize: "16px",
                fontFamily: "TWK Everett, sans-serif",
                backgroundColor: "#FFFFFF",
              }}
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
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
            src="/industrial-oil-refinery-with-pipes-and-towers.png"
            alt="Industrial oil refinery"
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
              Industrial IoT and automation; optimizing operations safely
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
              Smart monitoring and predictive maintenance for critical infrastructure.
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

        {/* Customer Stories - Top Right */}
        <div
          style={{
            backgroundColor: "#FF462D",
            borderRadius: "8px",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              fontFamily: "TWK Everett, sans-serif",
              fontWeight: 300,
              color: "#FFFFFF",
              margin: "0 0 40px 0",
              lineHeight: "42px",
            }}
          >
            Customer Stories
          </h2>
          <div style={{ display: "flex", gap: "20px" }}>
            <button
              style={{
                backgroundColor: "#FFFFFF",
                border: "none",
                borderRadius: "4px",
                padding: "12px 24px",
                fontSize: "16px",
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 500,
                color: "#3D3C3C",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Case studies
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 12L10 8L6 4"
                  stroke="#FF462D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              style={{
                backgroundColor: "#FFFFFF",
                border: "none",
                borderRadius: "4px",
                padding: "12px 24px",
                fontSize: "16px",
                fontFamily: "TWK Everett, sans-serif",
                fontWeight: 500,
                color: "#3D3C3C",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Videos
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 12L10 8L6 4"
                  stroke="#FF462D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Demos - Bottom Right */}
        <div
          style={{
            backgroundColor: "#042315",
            borderRadius: "8px",
            padding: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              fontFamily: "TWK Everett, sans-serif",
              fontWeight: 300,
              color: "#FFFFFF",
              margin: 0,
              zIndex: 2,
            }}
          >
            Demos
          </h2>
          <div
            style={{
              position: "absolute",
              right: "40px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "3px solid #074127",
              opacity: 0.6,
            }}
          />
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ zIndex: 2 }}>
            <path d="M12 24L20 16L12 8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
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
          {/* Left side - Kyndryl logo and breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
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
                fontSize: "18px",
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
              Chemical, Oil and Gas
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
