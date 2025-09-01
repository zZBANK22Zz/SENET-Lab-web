// AwardPage.js - Complete Responsive Awards Page
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import AwardsData from "@/data/Awards/AwardsData";

const AwardPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const Router = useRouter();

  const categories = [
    { id: "all", name: "All Awards" },
    { id: "research-excellence", name: "Research Excellence" },
    { id: "innovation", name: "Innovation" },
    { id: "funding", name: "Funding & Grants" },
    { id: "publication", name: "Publication Awards" },
    { id: "collaboration", name: "Collaboration" },
  ];

  const years = [
    { id: "all", name: "All Years" },
    { id: "2025", name: "2025" },
    { id: "2024", name: "2024" },
    { id: "2023", name: "2023" },
    { id: "2022", name: "2022" },
    { id: "2021", name: "2021" },
  ];

  // Normalize awards from our external AwardsData (people with awards)
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

  const filteredAwards = awards.filter((award) => {
    const matchesCategory =
      selectedCategory === "all" || award.category === selectedCategory;
    const matchesYear = selectedYear === "all" || award.year === selectedYear;
    return matchesCategory && matchesYear;
  });

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
              Awards & Recognition
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed">
              Our research excellence has been recognized globally through
              prestigious awards, grants, and honors. These achievements reflect
              our commitment to advancing software engineering and network
              technologies through innovative research.
            </p>

            {/* Statistics Summary */}
            <div className="text-center mt-8">
              <div className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-4">
                {stats.totalAwards} Awards
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-green-600">
                {stats.totalFunding.toLocaleString("th-TH")} baht Total Funding
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Filters */}
          <div className="lg:hidden space-y-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Year
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="block w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
              >
                {years.map((year) => (
                  <option key={year.id} value={year.id}>
                    {year.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Desktop Filters */}
          <div className="hidden lg:block">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mb-8">
              {years.map((year) => (
                <button
                  key={year.id}
                  onClick={() => setSelectedYear(year.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedYear === year.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {year.name}
                </button>
              ))}
            </div>
          </div>

          {/* Awards Grid */}
          <div className="grid gap-6 lg:gap-8">
            {filteredAwards.map((award) => (
              <div
                key={award.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6 sm:p-8"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Award Icon and Badge */}
                  <div className="flex-shrink-0">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white mb-3 shadow-lg">
                        {award.icon}
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        {award.badge}
                      </span>
                    </div>
                  </div>

                  {/* Award Details */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                          {award.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
                          <span className="font-medium">{award.subtitle}</span>
                          <span>•</span>
                          <span>
                            {award.month ? `${award.month} ` : ""}
                            {award.year}
                          </span>
                          {award.amount && (
                            <>
                              <span>•</span>
                              <span className="font-semibold text-green-600">
                                {award.amount}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {categories.find((cat) => cat.id === award.category)
                            ?.name || award.category}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {award.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-900">
                            Recipient:
                          </span>
                          <p className="text-gray-600 mt-1">
                            {award.recipient}
                          </p>
                        </div>
                        {/* <div>
                          <span className="font-medium text-gray-900">
                            Awarding Institution:
                          </span>
                          <p className="text-gray-600 mt-1">
                            {award.institution}
                          </p>
                        </div> */}
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <span className="font-medium text-gray-900 block mb-2">
                        Impact & Significance:
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {award.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredAwards.length === 0 && (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No awards found
              </h3>
              <p className="text-gray-600">
                Try adjusting your filters to see more awards.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Excellence in Research
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
            Our awards represent our ongoing commitment to pushing the
            boundaries of knowledge and creating real-world impact through
            innovative research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                Router.push("/ResearchPage");
              }}
              className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors"
            >
              View Our Research
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Collaboration Opportunities
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AwardPage;
