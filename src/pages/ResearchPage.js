import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import ResearchAreaData from "@/data/ResearchArea/ResearchAreaData";
import AwardsData from "@/data/Awards/AwardsData";

const ResearchPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Router = useRouter();
  const Research = ResearchAreaData;

    const awards = AwardsData.flatMap((person) =>
    person.awards.map((a) => ({
      id: `${person.id}-${a.id}`,
      title: a.title,
      subtitle: person.name || a.owner || "—",
      year: String(a.year),
      month: a.month || null,
      // If the source award has a category, keep it; otherwise infer:
      category: a.category || (a.fund ? "funding" : "research-excellence"),
      description: a.description || "",
      amount: a.fund
        ? typeof a.fund === "string"
          ? a.fund
          : `${a.fund}`
        : null,
      recipient: a.owner || person.name || "—",
      institution: a.institution || "—",
      impact: a.impact || "",
      icon: (
        <svg
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <rect x="0" fill="none" width="20" height="20"></rect>{" "}
            <g>
              {" "}
              <path d="M4.46 5.16L5 7.46l-.54 2.29 2.01 1.24L7.7 13l2.3-.54 2.3.54 1.23-2.01 2.01-1.24L15 7.46l.54-2.3-2-1.24-1.24-2.01-2.3.55-2.29-.54-1.25 2zm5.55 6.34C7.79 11.5 6 9.71 6 7.49c0-2.2 1.79-3.99 4.01-3.99 2.2 0 3.99 1.79 3.99 3.99 0 2.22-1.79 4.01-3.99 4.01zm-.02-1C8.33 10.5 7 9.16 7 7.5c0-1.65 1.33-3 2.99-3S13 5.85 13 7.5c0 1.66-1.35 3-3.01 3zm3.84 1.1l-1.28 2.24-2.08-.47L13 19.2l1.4-2.2h2.5zm-7.7.07l1.25 2.25 2.13-.51L7 19.2 5.6 17H3.1z"></path>{" "}
            </g>{" "}
          </g>
        </svg>
      ),
      badge: a.badge || (a.fund ? "Major Grant" : "Award"),
    }))
  );

  const stats = {
    totalAwards: awards.length,
    totalFunding: awards
      .filter((award) => award.amount)
      .reduce(
        (sum, award) =>
          sum + parseInt(String(award.amount).replace(/[^\d]/g, ""), 10),
        0
      ),
    currentYear: awards.filter((award) => award.year === "2024").length,
    categories: new Set(awards.map((award) => award.category)).size,
  };

  const researchAreas = [
    {
      icon: Research[0].icon,
      title: Research[0].title,
      description: Research[0].description,
    },
    {
      icon: Research[1].icon,
      title: Research[1].title,
      description: Research[1].description,
    },
    {
      icon: Research[2].icon,
      title: Research[2].title,
      description: Research[2].description,
    },
  ];

  const handlePublicationClick = () => {
    Router.push("/PublicationPage");
  };

  return (
    <div className="min-h-screen bg-gradient-light">
      <Navbar />

      {/* Hero Section - Mobile Responsive */}
      <section className="bg-gradient-light py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-6 sm:mb-8">
              Our Research
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-700 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
              At SEnet Research Lab, we pursue cutting-edge research in software
              engineering and network technologies. Our interdisciplinary
              approach combines theoretical foundations with practical
              applications to address real-world challenges in modern computing
              systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <button
                onClick={handlePublicationClick}
                className="bg-gradient-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:shadow-primary transition-all text-sm sm:text-base"
              >
                Browse Publications
              </button>
              <button className="border-2 border-blue-300 text-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:border-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors text-sm sm:text-base">
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
                  className="bg-gray-50 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer"
                  onClick={() => {
                    setSelectedArea(area);
                    setIsModalOpen(true);
                  }}
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
                              <span className="text-sm sm:text-base text-gray-600">
                                {project}
                              </span>
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
        <div className="text-center mt-8">
          <div className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-4">
            {stats.totalAwards} Awards
          </div>
          <div className="text-3xl sm:text-4xl font-bold text-green-600">
            {stats.totalFunding.toLocaleString("th-TH")} baht Total Funding
          </div>
        </div>
      </section>

      {isModalOpen && selectedArea && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-300 ease-out">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 relative shadow-xl transform transition-all duration-300 ease-out scale-95 opacity-0 animate-modalOpen">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              {selectedArea.title}
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              {selectedArea.detailedDescription || selectedArea.description}
            </p>
          </div>
        </div>
      )}

      <Footer />

      <style jsx>{`
        @keyframes modalOpen {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-modalOpen {
          animation: modalOpen 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ResearchPage;
