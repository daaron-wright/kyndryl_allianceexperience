const csvUrl =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DAM%20Videos%20-%20List-5OAcuPFFaY8mm0feJHtNE8g7V0OjwS.csv"

async function fetchAndParseCSV() {
  try {
    console.log("[v0] Fetching CSV data from:", csvUrl)
    const response = await fetch(csvUrl)
    const csvText = await response.text()

    console.log("[v0] CSV data received, length:", csvText.length)
    console.log("[v0] First 500 characters:", csvText.substring(0, 500))

    // Parse CSV manually (simple approach)
    const lines = csvText.split("\n")
    const headers = lines[0].split(",").map((h) => h.trim().replace(/"/g, ""))

    console.log("[v0] CSV Headers:", headers)

    const videos = []
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim()) {
        const values = lines[i].split(",").map((v) => v.trim().replace(/"/g, ""))
        const video = {}
        headers.forEach((header, index) => {
          video[header] = values[index] || ""
        })
        videos.push(video)
      }
    }

    console.log("[v0] Parsed videos count:", videos.length)
    console.log("[v0] Sample video:", videos[0])

    return { headers, videos }
  } catch (error) {
    console.error("[v0] Error fetching CSV:", error)
    return { headers: [], videos: [] }
  }
}

// Execute the function
fetchAndParseCSV().then((result) => {
  console.log("[v0] Final result:", result)
})
