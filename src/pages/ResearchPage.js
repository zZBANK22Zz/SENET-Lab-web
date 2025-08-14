import { use, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

const ResearchPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Router = useRouter();

  const researchAreas = [
    {
      id: "software-architecture",
      title: "Software Architecture",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 3v3.5c0 .28.22.5.5.5h7c.28 0 .5-.22.5-.5V3c0-.28-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5zM4 8v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2z" />
        </svg>
      ),
      shortDescription:
        "Advanced patterns and methodologies for scalable software systems design and implementation.",
      detailedDescription:
        "Our software architecture research focuses on developing innovative design patterns, architectural styles, and methodologies that enable the creation of robust, scalable, and maintainable software systems. We explore microservices architectures, event-driven systems, and domain-driven design approaches.",
      currentProjects: [
        "Microservices Architecture Optimization",
        "Event-Driven System Design Patterns",
        "Scalable Cloud-Native Applications",
      ],
      publications: 5,
      funding: "$450,000",
    },
    {
      id: "network-security",
      title: "Network Security",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V16H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z" />
        </svg>
      ),
      shortDescription:
        "Cybersecurity protocols and threat detection systems for modern network infrastructures.",
      detailedDescription:
        "Our network security research addresses critical challenges in protecting modern digital infrastructure. We develop advanced threat detection algorithms, secure communication protocols, and innovative approaches to network forensics and incident response.",
      currentProjects: [
        "AI-Powered Intrusion Detection Systems",
        "Blockchain-Based Network Authentication",
        "Quantum-Safe Communication Protocols",
      ],
      publications: 8,
      funding: "$680,000",
    },
    {
      id: "ai-testing",
      title: "AI-Driven Testing",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
        </svg>
      ),
      shortDescription:
        "Machine learning approaches for automated software testing and quality assurance.",
      detailedDescription:
        "We leverage artificial intelligence and machine learning to revolutionize software testing processes. Our research includes automated test case generation, intelligent bug detection, and predictive quality assessment using deep learning techniques.",
      currentProjects: [
        "Automated Test Case Generation using NLP",
        "Predictive Bug Detection Models",
        "Intelligent Test Prioritization Systems",
      ],
      publications: 6,
      funding: "$520,000",
    },
    {
      id: "cloud-computing",
      title: "Cloud Computing",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4Z" />
        </svg>
      ),
      shortDescription:
        "Distributed systems and cloud-native application development frameworks.",
      detailedDescription:
        "Our cloud computing research explores distributed systems architecture, serverless computing paradigms, and edge computing solutions. We focus on developing frameworks that optimize resource utilization and improve application performance in cloud environments.",
      currentProjects: [
        "Serverless Architecture Optimization",
        "Edge Computing Resource Management",
        "Multi-Cloud Deployment Strategies",
      ],
      publications: 7,
      funding: "$750,000",
    },
    {
      id: "performance-analysis",
      title: "Performance Analysis",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23,11H18A1,1 0 0,0 17,12V21A1,1 0 0,0 18,22H23A1,1 0 0,0 24,21V12A1,1 0 0,0 23,11M23,20H18V13H23V20M20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H9V16H4V4H20V9H22V4A2,2 0 0,0 20,2Z" />
        </svg>
      ),
      shortDescription:
        "Network performance optimization and software system efficiency measurement tools.",
      detailedDescription:
        "We develop sophisticated tools and methodologies for analyzing and optimizing the performance of complex software systems and network infrastructures. Our research includes real-time monitoring, bottleneck identification, and automated performance tuning.",
      currentProjects: [
        "Real-Time Performance Monitoring Tools",
        "Automated Performance Optimization",
        "Network Latency Reduction Techniques",
      ],
      publications: 4,
      funding: "$380,000",
    },
    {
      id: "iot-systems",
      title: "IoT Systems",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z" />
        </svg>
      ),
      shortDescription:
        "Internet of Things protocols and embedded software development methodologies.",
      detailedDescription:
        "Our IoT research focuses on developing efficient communication protocols, secure device management systems, and innovative applications for Internet of Things ecosystems. We address challenges in device interoperability, energy efficiency, and large-scale IoT deployments.",
      currentProjects: [
        "Energy-Efficient IoT Protocols",
        "Secure Device Authentication Systems",
        "Large-Scale IoT Network Management",
      ],
      publications: 9,
      funding: "$620,000",
    },
  ];

  const handlePublicationClick = () => {
    Router.push("/PublicationPage");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section - Mobile Responsive */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
              Our Research
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
              At SEnet Research Lab, we pursue cutting-edge research in software
              engineering and network technologies. Our interdisciplinary
              approach combines theoretical foundations with practical
              applications to address real-world challenges in modern computing
              systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <button onClick={handlePublicationClick} className="bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base">
                Browse Publications
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:border-gray-900 hover:text-gray-900 transition-colors text-sm sm:text-base">
                Research Collaborations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Tab Navigation - Mobile Responsive */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation - Responsive */}
          <div className="mb-8 sm:mb-12">
            {/* Mobile: Dropdown Style */}
            <div className="sm:hidden">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="block w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
              >
                <option value="overview">Overview</option>
                {researchAreas.map((area) => (
                  <option key={area.id} value={area.id}>
                    {area.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Desktop: Button Tabs */}
            <div className="hidden sm:flex flex-wrap justify-center gap-2 lg:gap-4">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-3 lg:px-6 py-2 lg:py-3 rounded-lg font-medium transition-colors text-sm lg:text-base ${
                  activeTab === "overview"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Overview
              </button>
              {researchAreas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setActiveTab(area.id)}
                  className={`px-3 lg:px-6 py-2 lg:py-3 rounded-lg font-medium transition-colors text-sm lg:text-base ${
                    activeTab === area.id
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {area.title}
                </button>
              ))}
            </div>
          </div>

          {/* Overview Tab Content - Mobile Responsive Grid */}
          {activeTab === "overview" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {researchAreas.map((area) => (
                <div
                  key={area.id}
                  className="bg-gray-50 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-900 rounded-lg flex items-center justify-center text-white mb-4 lg:mb-6">
                    {area.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">
                    {area.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 lg:mb-6 leading-relaxed">
                    {area.shortDescription}
                  </p>
                  <div className="flex justify-between text-xs sm:text-sm text-gray-500 mb-3 lg:mb-4">
                    <span>{area.publications} Publications</span>
                    <span>{area.funding} Funding</span>
                  </div>
                  <button
                    onClick={() => setActiveTab(area.id)}
                    className="text-sm sm:text-base text-gray-900 font-medium hover:text-gray-700 transition-colors"
                  >
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Individual Research Area Content - Mobile Responsive */}
          {researchAreas.map(
            (area) =>
              activeTab === area.id && (
                <div key={area.id} className="max-w-4xl mx-auto">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                    {/* Header - Mobile Responsive */}
                    <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-900 rounded-xl flex items-center justify-center text-white mb-4 sm:mb-0 sm:mr-6 mx-auto sm:mx-0">
                        {area.icon}
                      </div>
                      <div className="text-center sm:text-left">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                          {area.title}
                        </h2>
                        <div className="flex flex-col sm:flex-row sm:gap-6 text-sm text-gray-500 space-y-1 sm:space-y-0">
                          <span>{area.publications} Publications</span>
                          <span>{area.funding} Total Funding</span>
                        </div>
                      </div>
                    </div>

                    {/* Research Focus */}
                    <div className="mb-6 sm:mb-8">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                        Research Focus
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {area.detailedDescription}
                      </p>
                    </div>

                    {/* Projects and Impact - Mobile Stacked */}
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                          Current Projects
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                          {area.currentProjects.map((project, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-sm sm:text-base text-gray-600">{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                          Research Impact
                        </h3>
                        <div className="space-y-3 sm:space-y-4">
                          <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                            <div className="text-xl sm:text-2xl font-bold text-gray-900">
                              {area.publications}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600">
                              Published Papers
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                            <div className="text-xl sm:text-2xl font-bold text-gray-900">
                              {area.funding}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600">
                              Research Funding
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </section>

      {/* Research Statistics - Mobile Responsive */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">50+</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">Research Papers</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">$3.4M</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">Total Funding</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">15</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">Active Projects</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">25+</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">Collaborations</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResearchPage;