"use client"

import { X, Search, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface TabContent {
  title: string
  subtitle: string
  description: string
  image: string
}

interface SolutionScreen {
  title: string
  subtitle: string
  description: string
  image: string
}

interface CaseStudyData {
  opportunity: TabContent
  challenge: TabContent
  solution: SolutionScreen[] // Changed to array of solution screens
  outcome: TabContent
}

interface FeatureFocusModalProps {
  isOpen: boolean
  onClose: () => void
  caseStudyData?: CaseStudyData
  story?: any
  onOpenEmbed?: (story: any, overrides?: { videoUrl?: string; embedUrl?: string; externalUrl?: string }) => void
}

export default function FeatureFocusModal({
  isOpen,
  onClose,
  caseStudyData,
  story,
  onOpenEmbed,
}: FeatureFocusModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("Solution")
  const [currentSolutionIndex, setCurrentSolutionIndex] = useState(0)

  const xRaySharepointUrl =
    "https://kyndryl.sharepoint.com/teams/ASEAN_AI/_layouts/15/embed.aspx?UniqueId=e1998956-f7ea-4f25-a685-de0b2e3b9049&embed=%7B%22af%22%3Atrue%2C%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"

  if (!isOpen) return null

  const tabs = ["Opportunity", "Challenge", "Solution", "Outcome"]

  const defaultCaseStudyData: CaseStudyData = {
    opportunity: {
      title: "Market Opportunity Analysis",
      subtitle: "Business Growth",
      description:
        "The aviation industry faces increasing pressure to enhance passenger experience while managing operational efficiency. Social media has become a critical touchpoint where passenger sentiment directly impacts brand reputation and business outcomes. Airlines and airports need real-time insights to proactively address concerns and capitalize on positive feedback.",
      image: "/business-opportunity-dashboard-with-growth-charts-.jpg",
    },
    challenge: {
      title: "Operational Challenges",
      subtitle: "Current State Analysis",
      description:
        "Traditional customer service approaches struggle to keep pace with the volume and velocity of social media interactions. Manual monitoring leads to delayed responses, missed opportunities, and escalated customer dissatisfaction. Without automated sentiment analysis, organizations cannot prioritize critical issues or measure the effectiveness of their response strategies.",
      image: "/operational-challenges-dashboard-showing-alerts-an.jpg",
    },
    solution: [
      {
        title: "Agentic Sales Assistant",
        subtitle: "Mobile Intelligent Bot",
        description:
          "When a customer comes in to purchase a new iPhone and trade in their old device, the Mobile Intelligent Bot (MIB) ensures the entire process is completed in just 8 minutes. By automating checks, validations, and trade-in calculations, MIB delivers a seamless, fast, and hassle-free experience, minimizing waiting time and maximizing customer satisfaction.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-C6UfyHLe4P5aeYaC0feLcUuu9oDTYU.png",
      },
      {
        title: "Agentic Sales Assistant",
        subtitle: "Helpdesk Only",
        description:
          "If the process is handled solely through the helpdesk, it typically takes around 45 minutes. This is because each step—from verifying the old device to completing the trade-in and purchase—relies on manual intervention. While the helpdesk ensures accuracy and human interaction, the longer time frame can lead to delays during peak hours.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e3MBOLpIeUbcPnOt8S1LTfxSuQ9jJh.png",
      },
      {
        title: "Agentic Sales Assistant",
        subtitle: "Helpdesk + Mobile Intelligent Bot",
        description:
          "In scenarios where both the helpdesk and MIB work together, the process is completed in about 35 minutes. This hybrid model combines the speed and efficiency of automation with the reassurance of human support for more complex queries, creating a balance between convenience and personalized service.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Qx04oQNMRL3DlblAxX1F6ySE0RK10O.png",
      },
    ],
    outcome: {
      title: "Measurable Business Results",
      subtitle: "Performance Metrics",
      description:
        "Implementation of the Agentic Media Monitor resulted in 85% faster response times, 40% improvement in customer satisfaction scores, and 60% reduction in escalated complaints. The automated sentiment analysis enabled proactive issue resolution, leading to increased passenger loyalty and positive brand perception across social media platforms.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VRsisTvtopmnPmmkhPMpLZ0Ht25fbV.png",
    },
  }

  const getCaseStudyDataForStory = (storyId: number): CaseStudyData => {
    switch (storyId) {
      case 1: // Agentic Airport AI Experience
        return {
          opportunity: {
            title: "Airport Operations Transformation",
            subtitle: "Passenger Experience Enhancement",
            description:
              "The aviation industry faces increasing pressure to enhance passenger experience while managing operational efficiency. Airports need intelligent systems to handle complex logistics, reduce wait times, and provide seamless passenger journeys from check-in to boarding.",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qroohISaYhm8KYJElbQm8a23m4BfTS.png",
          },
          challenge: {
            title: "Operational Complexity",
            subtitle: "Current State Analysis",
            description:
              "Traditional airport operations struggle with manual processes, disconnected systems, and reactive problem-solving. This leads to passenger delays, inefficient resource allocation, and poor visibility into operational performance across terminals and gates.",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qroohISaYhm8KYJElbQm8a23m4BfTS.png",
          },
          solution: [
            {
              title: "Agentic Airport AI Experience",
              subtitle: "Redefining Travel Experience",
              description:
                "John is a frequent flyer, travelling with his wife Kathy, and 11-year-old daughter Helen. He wants to check the best rates to fly Amsterdam. Create a travel itinerary from his doorstep to the Amsterdam airport Schiphol",
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bqXG9Sk6fCNFEaRIKFvNq1p5IUTSsJ.png",
            },
            {
              title: "Agentic Airport AI Experience",
              subtitle: "Redefining Technical Support",
              description:
                "Frank leverages advanced technology to keep aircraft operating safely and efficiently. With a flexible, resource-focused approach, he ensures maintenance stays on track, even in dynamic conditions. Frank uses live visual collaboration with a retired engineer to perform on-demand maintenance during flight changes. This approach accelerates service, prioritizes tasks, and ensures flights remain safe, reliable, and on schedule for passengers and crew.",
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ooV69PYAQNj3xgnqY0DgMF7MGpctWL.png",
            },
            {
              title: "Agentic Airport AI Experience",
              subtitle: "Redefining Pilot Allocation",
              description:
                "The pilot is a highly trained professional responsible for the safety and operation of the aircraft. In this scenario, the pilot collaborates with ground maintenance and agentic AI systems to report in-flight observations, confirm system statuses, and support faster, more coordinated troubleshooting. Their expertise is crucial for making real-time decisions and ensuring passenger safety.",
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eRSZ51esE6vlv6U09EwJp5kLazYYR2.png",
            },
          ],
          outcome: {
            title: "Operational Excellence",
            subtitle: "Performance Metrics",
            description:
              "Implementation resulted in 95% gate availability, 98% system health monitoring, and proactive alert management. The AI system reduced operational delays by 40% and improved passenger satisfaction through better resource allocation and predictive maintenance.",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qroohISaYhm8KYJElbQm8a23m4BfTS.png",
          },
        }

      case 2: // Agentic Media Monitor case study
        return {
          opportunity: {
            title: "Social Media Monitoring Transformation",
            subtitle: "Real-time Sentiment Analysis",
            description:
              "The aviation industry faces increasing pressure to monitor and respond to social media feedback in real-time. Airlines and airports need intelligent systems to analyze passenger sentiment, track brand reputation, and proactively address customer concerns across multiple social platforms.",
            image: "/business-opportunity-dashboard-with-growth-charts-.jpg",
          },
          challenge: {
            title: "Social Media Complexity",
            subtitle: "Current State Analysis",
            description:
              "Traditional social media monitoring relies on manual processes and delayed responses. Organizations struggle to track sentiment across multiple platforms, prioritize critical issues, and measure the effectiveness of their engagement strategies in real-time.",
            image: "/operational-challenges-dashboard-showing-alerts-an.jpg",
          },
          solution: [
            {
              title: "Agentic Media Monitor",
              subtitle: "Sentiment Analysis",
              description:
                "Our smart dashboard empowers airport teams to seamlessly monitor social media feedback in real time, ensuring passenger concerns are never overlooked. The agentic bot automatically analyzes incoming feedback and sends immediate, personalized responses to users, while the airport team is simultaneously notified of the interaction. The platform also offers multiple options to categorize issues—whether related to services, facilities, or experiences—making it easier to prioritize and resolve them efficiently. By combining intelligent monitoring, automated assistance, and structured issue management, the system helps airports maintain higher service standards and build stronger trust with travelers.",
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pL6nEqXma8ArGKflm4ZO0DZSj6Oour.png",
            },
          ],
          outcome: {
            title: "Enhanced Customer Engagement",
            subtitle: "Performance Metrics",
            description:
              "Implementation of the Agentic Media Monitor resulted in 85% faster response times, 40% improvement in customer satisfaction scores, and 60% reduction in escalated complaints. The automated sentiment analysis enabled proactive issue resolution, leading to increased passenger loyalty and positive brand perception across social media platforms.",
            image: "/business-opportunity-dashboard-with-growth-charts-.jpg",
          },
        }

      case 3: // Agentic Sales Assistant (keep existing data)
        return {
          opportunity: {
            title: "Sales Process Optimization",
            subtitle: "Customer Experience Enhancement",
            description:
              "Retail environments face increasing pressure to provide fast, efficient service while maintaining high customer satisfaction. Mobile device sales and trade-ins require complex validation processes that can significantly impact customer wait times and overall experience.",
            image: "/business-opportunity-dashboard-with-growth-charts-.jpg",
          },
          challenge: {
            title: "Service Delivery Challenges",
            subtitle: "Current State Analysis",
            description:
              "Traditional sales processes rely heavily on manual intervention, leading to extended wait times and inconsistent service quality. Complex trade-in evaluations and device validations create bottlenecks that frustrate customers and reduce sales efficiency.",
            image: "/operational-challenges-dashboard-showing-alerts-an.jpg",
          },
          solution: [
            {
              title: "Agentic Sales Assistant",
              subtitle: "Mobile Intelligent Bot",
              description:
                "When a customer comes in to purchase a new iPhone and trade in their old device, the Mobile Intelligent Bot (MIB) ensures the entire process is completed in just 8 minutes. By automating checks, validations, and trade-in calculations, MIB delivers a seamless, fast, and hassle-free experience, minimizing waiting time and maximizing customer satisfaction.",
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-C6UfyHLe4P5aeYaC0feLcUuu9oDTYU.png",
            },
            {
              title: "Agentic Sales Assistant",
              subtitle: "Helpdesk Only",
              description:
                "If the process is handled solely through the helpdesk, it typically takes around 45 minutes. This is because each step—from verifying the old device to completing the trade-in and purchase—relies on manual intervention. While the helpdesk ensures accuracy and human interaction, the longer time frame can lead to delays during peak hours.",
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e3MBOLpIeUbcPnOt8S1LTfxSuQ9jJh.png",
            },
            {
              title: "Agentic Sales Assistant",
              subtitle: "Helpdesk + Mobile Intelligent Bot",
              description:
                "In scenarios where both the helpdesk and MIB work together, the process is completed in about 35 minutes. This hybrid model combines the speed and efficiency of automation with the reassurance of human support for more complex queries, creating a balance between convenience and personalized service.",
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Qx04oQNMRL3DlblAxX1F6ySE0RK10O.png",
            },
          ],
          outcome: {
            title: "Enhanced Customer Experience",
            subtitle: "Performance Metrics",
            description:
              "Implementation of the Agentic Sales Assistant resulted in 82% reduction in service time, 95% customer satisfaction improvement, and 60% increase in successful trade-in completions. The hybrid approach optimized both speed and service quality.",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VRsisTvtopmnPmmkhPMpLZ0Ht25fbV.png",
          },
        }

      case 4: // Legal Documents Generator
        return {
          opportunity: {
            title: "Legal Document Management Transformation",
            subtitle: "Smart Legal Operations",
            description:
              "Legal departments face increasing pressure to manage complex document workflows, ensure compliance, and reduce manual processing time. Organizations need intelligent systems to automate document generation, track expiration dates, and maintain centralized legal document repositories.",
            image: "/business-opportunity-dashboard-with-growth-charts-.jpg",
          },
          challenge: {
            title: "Legal Process Complexity",
            subtitle: "Current State Analysis",
            description:
              "Traditional legal document management relies on manual processes, scattered file systems, and reactive compliance monitoring. This leads to missed deadlines, inconsistent document formats, and difficulty tracking document status across multiple legal matters.",
            image: "/operational-challenges-dashboard-showing-alerts-an.jpg",
          },
          solution: [
            {
              title: "Legal Documents Generator",
              subtitle: "Smart legal",
              description:
                "Powered by SmartGen, the Effortless Legal Documents Generator provides you with a smart legal dashboard designed for clarity and simplicity. With centralized access, all your legal documents are stored in one secure and intuitive platform, eliminating the hassle of searching through scattered files. Automated reminders ensure you never miss a deadline by notifying you of renewal dates, expiring agreements, and important follow-ups. Additionally, the tracking feature keeps you updated on the status of your agreements—whether they are pending, signed, or archived—so you always have a clear overview at a glance.",
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EuaqajmmyUg4OFz4bCWuclsnCapgtQ.png",
            },
          ],
          outcome: {
            title: "Legal Operations Excellence",
            subtitle: "Performance Metrics",
            description:
              "Implementation of the Legal Documents Generator resulted in 70% reduction in document processing time, 95% improvement in compliance tracking, and 85% decrease in missed deadlines. The automated system enabled proactive legal management, leading to better risk mitigation and streamlined legal operations.",
            image: "/business-opportunity-dashboard-with-growth-charts-.jpg",
          },
        }

      case 5: // Adding Pricing Model case study
        return {
          opportunity: {
            title: "Insurance Analytics Transformation",
            subtitle: "Comprehensive Risk Assessment",
            description:
              "The insurance industry faces increasing pressure to optimize pricing models, enhance risk assessment accuracy, and improve customer retention. Organizations need intelligent analytics systems to process complex data patterns, predict market trends, and deliver personalized insurance solutions that balance profitability with competitive pricing.",
            image: "/business-opportunity-dashboard-with-growth-charts-.jpg",
          },
          challenge: {
            title: "Pricing Complexity",
            subtitle: "Current State Analysis",
            description:
              "Traditional insurance pricing relies on static models and historical data, leading to suboptimal risk assessment and pricing inefficiencies. Manual processes struggle to incorporate real-time market dynamics, customer behavior patterns, and emerging risk factors into pricing decisions.",
            image: "/operational-challenges-dashboard-showing-alerts-an.jpg",
          },
          solution: [
            {
              title: "Pricing Model",
              subtitle: "Acturance",
              description:
                "Acturance Comprehensive Insurance offers complete protection for every aspect of life—your home, health, business, and travel—consolidated under one trusted provider. More than just a policy, it delivers peace of mind by safeguarding your family's future and securing your valuable assets. With streamlined onboarding and tailored coverage, Acturance ensures reliable protection at every stage, allowing you to focus on what matters most while we manage the risks.",
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5P1bGM2lMEjvWL62yT3qdNusAERKlv.png",
            },
          ],
          outcome: {
            title: "Enhanced Insurance Performance",
            subtitle: "Performance Metrics",
            description:
              "Implementation of the Acturance Pricing Model resulted in 94.2% completion rate, 89.3% policy retention rate, and 7.1% increase in customer acquisition. The advanced analytics platform enabled data-driven pricing decisions, leading to improved profitability and competitive market positioning.",
            image: "/business-opportunity-dashboard-with-growth-charts-.jpg",
          },
        }

      case 6: // Adding Marketing Automation case study
        return {
          opportunity: {
            title: "Marketing Automation Transformation",
            subtitle: "Customer Engagement Enhancement",
            description:
              "The retail industry faces increasing pressure to deliver personalized marketing campaigns, optimize customer engagement, and maximize return on marketing investment. Organizations need intelligent automation systems to manage multi-channel campaigns, track customer behavior, and deliver targeted messaging that drives conversions and customer loyalty.",
            image: "/business-opportunity-dashboard-with-growth-charts-.jpg",
          },
          challenge: {
            title: "Marketing Complexity",
            subtitle: "Current State Analysis",
            description:
              "Traditional marketing approaches rely on manual campaign management, generic messaging, and limited customer insights. This leads to poor engagement rates, inefficient resource allocation, and difficulty measuring campaign effectiveness across multiple touchpoints and customer segments.",
            image: "/operational-challenges-dashboard-showing-alerts-an.jpg",
          },
          solution: [
            {
              title: "Marketing Personalization",
              subtitle: "Customer segmented marketing campaigns",
              description:
                "Our intelligent marketing platform transforms customer engagement through advanced segmentation and personalized campaign delivery. By analyzing customer behavior patterns, purchase history, and demographic data, the system automatically creates targeted customer segments and delivers personalized content across multiple channels. Real-time analytics track engagement metrics, conversion rates, and campaign performance, enabling marketers to optimize messaging and timing for maximum impact. The platform integrates seamlessly with existing CRM systems and marketing tools, providing a unified view of customer interactions and enabling sophisticated A/B testing to continuously improve campaign effectiveness.",
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TPBnIgxdeYffTp5yRiF6aNkKUJWOlY.png",
            },
          ],
          outcome: {
            title: "Enhanced Marketing Performance",
            subtitle: "Performance Metrics",
            description:
              "Implementation of the Marketing Automation system resulted in 18.9% engagement rate improvement, 45.2K total reach expansion, and 1.5h average response time optimization. The automated platform enabled data-driven marketing decisions, leading to improved customer acquisition and retention rates.",
            image: "/business-opportunity-dashboard-with-growth-charts-.jpg",
          },
        }

      case 7: // Updated X-Ray Image Analysis to focus on cargo and baggage screening instead of medical imaging
        return {
          opportunity: {
            title: "Cargo Security Transformation",
            subtitle: "AI-Powered Screening Technology",
            description:
              "The transportation and logistics industry faces increasing pressure to enhance security screening efficiency while maintaining high throughput at ports, airports, and border crossings. Organizations need intelligent X-ray systems to detect threats, contraband, and prohibited items in cargo containers, baggage, and freight shipments with greater accuracy and speed.",
            image: "/business-opportunity-dashboard-with-growth-charts-.jpg",
          },
          challenge: {
            title: "Security Screening Complexity",
            subtitle: "Current State Analysis",
            description:
              "Traditional X-ray screening relies on manual image interpretation by security personnel, leading to potential oversight, extended processing times, and inconsistent threat detection across different operators. The growing volume of cargo and baggage requires automated solutions to maintain security standards while improving operational efficiency.",
            image: "/operational-challenges-dashboard-showing-alerts-an.jpg",
          },
          solution: [
            {
              title: "X-Ray Image Analysis",
              subtitle: "X-Ray Scanner",
              description:
                "Our advanced AI-powered X-ray screening system revolutionizes cargo and baggage security through machine learning algorithms trained on millions of security images. The platform automatically detects weapons, explosives, contraband, and prohibited items with precision that exceeds human operators. Real-time image processing provides instant threat assessment, flagging suspicious items for immediate security attention while routine cargo is processed efficiently. The system integrates seamlessly with existing security infrastructure and provides detailed threat reports with confidence scores, item identification, and risk assessment tools that support security decision-making and enhance transportation safety.",
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BL8Mq810eoqqoSaJjLfurJyTnewTll.png",
            },
          ],
          outcome: {
            title: "Enhanced Security Performance",
            subtitle: "Performance Metrics",
            description:
              "Implementation of the X-Ray Image Analysis system resulted in 98% threat detection accuracy, 65% reduction in screening time, and 95% consistency in security assessments. The AI-powered platform enabled faster, more reliable cargo and baggage screening, leading to improved transportation security and operational efficiency.",
            image: "/business-opportunity-dashboard-with-growth-charts-.jpg",
          },
        }

      case 8: // Adding Smart Baggage Claim case study
        return {
          opportunity: {
            title: "Smart Baggage Tracking Transformation",
            subtitle: "Passenger Experience Enhancement",
            description:
              "The aviation industry faces increasing pressure to improve baggage handling efficiency and passenger satisfaction. Airports need intelligent systems to track luggage in real-time, reduce claim times, and provide transparency throughout the baggage journey from check-in to collection.",
            image: "/business-opportunity-dashboard-with-growth-charts-.jpg",
          },
          challenge: {
            title: "Baggage Handling Complexity",
            subtitle: "Current State Analysis",
            description:
              "Traditional baggage systems rely on manual tracking and limited visibility, leading to lost luggage, extended claim times, and frustrated passengers. Without real-time monitoring and automated alerts, airports struggle to proactively address baggage issues and optimize operational efficiency.",
            image: "/operational-challenges-dashboard-showing-alerts-an.jpg",
          },
          solution: [
            {
              title: "Baggage Claim",
              subtitle: "Traveller",
              description:
                "The traveller experience is transformed through our intelligent baggage tracking mobile application that provides real-time visibility into luggage location and status. Passengers receive instant notifications when their bags are loaded, in transit, and ready for collection, eliminating uncertainty and reducing wait times at baggage claim areas. The app features interactive terminal maps showing exact carousel locations, estimated arrival times, and push notifications for any delays or issues. Integration with airline systems ensures seamless tracking from check-in to collection, while the intuitive interface allows passengers to report missing items and track resolution progress.",
              image: "/baggage-claim-mobile-app.png",
            },
            {
              title: "Baggage Claim",
              subtitle: "Admin",
              description:
                "The administrative dashboard provides comprehensive oversight of baggage operations with real-time monitoring, predictive analytics, and automated alert systems. Airport staff can track baggage flow across all terminals, identify bottlenecks before they impact passengers, and coordinate with ground handling teams for optimal resource allocation. The system features advanced reporting capabilities, performance metrics tracking, and integration with security systems to ensure compliance and operational efficiency. Automated workflows handle exception management, while machine learning algorithms predict peak times and optimize carousel assignments to minimize passenger wait times.",
              image: "/baggage-claim-admin-dashboard.png",
            },
          ],
          outcome: {
            title: "Enhanced Baggage Operations",
            subtitle: "Performance Metrics",
            description:
              "Implementation of the Smart Baggage Claim system resulted in 96.4% on-time rate, 4.2 minute average claim time, and significant reduction in lost baggage incidents. The real-time tracking and automated notifications improved passenger satisfaction and operational efficiency across the airport.",
            image: "/business-opportunity-dashboard-with-growth-charts-.jpg",
          },
        }

      case 9: // Connected Traveler
        return {
          opportunity: {
            title: "Seamless Journey Orchestration",
            subtitle: "End-to-End Passenger Support",
            description:
              "Airlines and airports must coordinate multiple handoffs, partners, and data sources to deliver a reliable travel experience. Travellers expect proactive guidance, real-time updates, and personalized services from booking through arrival.",
            image: "/modern-airport-terminal-with-ai-powered-passenger.jpg",
          },
          challenge: {
            title: "Fragmented Travel Touchpoints",
            subtitle: "Disconnected Service Landscape",
            description:
              "Information silos across carriers, airports, and service providers make it difficult to respond quickly to disruptions. Travellers receive inconsistent updates, making it hard to adapt plans or access timely assistance.",
            image: "/modern-airport-terminal-with-ai-powered-passenger.jpg",
          },
          solution: [
            {
              title: "Connected Traveler Companion",
              subtitle: "Personal Itinerary Concierge",
              description:
                "AI curates a unified itinerary that synchronizes flights, transfers, and accommodations. The companion delivers contextual prompts, proactive re-booking options, and on-demand concierge support through voice and chat channels.",
              image: "/modern-airport-terminal-with-ai-powered-passenger.jpg",
            },
            {
              title: "Operations Control Console",
              subtitle: "Real-time Coordination",
              description:
                "Airline and airport teams monitor traveller cohorts with live dashboards that surface disruption risks, recommend interventions, and orchestrate handoffs with ground services, loyalty teams, and hospitality partners.",
              image: "/baggage-claim-admin.png",
            },
            {
              title: "Destination Services Hub",
              subtitle: "Integrated Experience Marketplace",
              description:
                "Partners publish ground transport, lounge access, and local experiences that automatically match traveller personas. AI agents negotiate availability, confirm bookings, and push confirmations into the companion app.",
              image: "/grand-hotel-exterior.png",
            },
          ],
          outcome: {
            title: "Elevated Passenger Satisfaction",
            subtitle: "Performance Metrics",
            description:
              "Connected Traveler drives 35% faster disruption recovery, 25% ancillary revenue uplift, and a 15-point increase in NPS by keeping travellers informed, supported, and delighted across every touchpoint.",
            image: "/business-opportunity-dashboard-with-growth-charts-.jpg",
          },
        }

      default:
        // Return default case study data for other stories
        return defaultCaseStudyData
    }
  }

  const currentCaseStudy = caseStudyData || (story ? getCaseStudyDataForStory(story.id) : defaultCaseStudyData)

  const currentContent =
    activeTab === "Solution"
      ? currentCaseStudy.solution[currentSolutionIndex]
      : currentCaseStudy[activeTab.toLowerCase() as keyof Omit<CaseStudyData, "solution">]

  const handlePreviousTab = () => {
    const currentIndex = tabs.indexOf(activeTab)
    const previousIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1
    setActiveTab(tabs[previousIndex])
    setCurrentSolutionIndex(0) // Reset solution index when changing tabs
  }

  const handleNextTab = () => {
    const currentIndex = tabs.indexOf(activeTab)
    const nextIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1
    setActiveTab(tabs[nextIndex])
    setCurrentSolutionIndex(0) // Reset solution index when changing tabs
  }

  const handlePreviousSolution = () => {
    setCurrentSolutionIndex((prev) => (prev === 0 ? currentCaseStudy.solution.length - 1 : prev - 1))
  }

  const handleNextSolution = () => {
    setCurrentSolutionIndex((prev) => (prev === currentCaseStudy.solution.length - 1 ? 0 : prev + 1))
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
              className={`${story?.id === 7 && onOpenEmbed ? "cursor-pointer" : "cursor-default"} flex-1 flex items-center justify-center px-12 my-12 mx-12 py-8`}
              style={{
                backgroundImage: `url(${currentContent.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => {
                if (story?.id === 7 && onOpenEmbed) {
                  onOpenEmbed(story, {
                    videoUrl: xRaySharepointUrl,
                    externalUrl: xRaySharepointUrl,
                  })
                }
              }}
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
          </div>
        </div>
      </div>

    </>
  )
}
