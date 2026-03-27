import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import ResearchAreaData from "@/data/ResearchArea/ResearchAreaData";
import AwardsData from "@/data/Awards/AwardsData";

const parseFundingAmount = (amount) => {
  const n = parseInt(String(amount).replace(/[^\d]/g, ""), 10);
  return Number.isFinite(n) ? n : 0;
};

const ResearchPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedArea, setSelectedArea] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const researchAreas = ResearchAreaData;

  const awards = AwardsData.flatMap((person) =>
    person.awards.map((a) => ({
      id: `${person.id}-${a.id}`,
      title: a.title,
      subtitle: person.name || a.owner || "—",
      year: String(a.year),
      month: a.month || null,
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
          fill="currentColor"
          className="w-8 h-8"
          aria-hidden
        >
          <path d="M4.46 5.16L5 7.46l-.54 2.29 2.01 1.24L7.7 13l2.3-.54 2.3.54 1.23-2.01 2.01-1.24L15 7.46l.54-2.3-2-1.24-1.24-2.01-2.3.55-2.29-.54-1.25 2zm5.55 6.34C7.79 11.5 6 9.71 6 7.49c0-2.2 1.79-3.99 4.01-3.99 2.2 0 3.99 1.79 3.99 3.99 0 2.22-1.79 4.01-3.99 4.01zm-.02-1C8.33 10.5 7 9.16 7 7.5c0-1.65 1.33-3 2.99-3S13 5.85 13 7.5c0 1.66-1.35 3-3.01 3zm3.84 1.1l-1.28 2.24-2.08-.47L13 19.2l1.4-2.2h2.5zm-7.7.07l1.25 2.25 2.13-.51L7 19.2 5.6 17H3.1z" />
        </svg>
      ),
      badge: a.badge || (a.fund ? "Major Grant" : "Award"),
    }))
  );

  const stats = {
    totalAwards: awards.length,
    totalFunding: awards
      .filter((award) => award.amount)
      .reduce((sum, award) => sum + parseFundingAmount(award.amount), 0),
  };

  const focusIntro =
    "Three connected strengths—software engineering, testing, and networks—shape how we frame problems, validate solutions, and deploy them at scale.";

  const scrollToFocus = () => {
    document.getElementById("research-focus")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-bg-off text-text-main">
      <Navbar />

      <section className="relative overflow-hidden border-b border-border-light bg-gradient-to-b from-primary-soft/50 via-bg-off to-bg-off">
        <div
          className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-primary-action/15 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-primary-deep/10 blur-3xl"
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-action mb-4">
                An open invitation
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main tracking-tight leading-tight mb-6">
                Step into research{" "}
                <span className="text-gradient-official">with a clear focus</span>
              </h1>
              <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-4">
                The SENET Lab welcomes collaborators, students, and partners who
                care about dependable software and the networks that carry it.
                Below is how we channel curiosity—so you can quickly see where
                your interests align with ours.
              </p>
              <p className="text-sm sm:text-base text-text-main/90 font-medium max-w-2xl mx-auto lg:mx-0 mb-8">
                {focusIntro}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={() => router.push("/PublicationPage")}
                  className="btn-primary min-w-[200px]"
                >
                  Browse publications
                </button>
                <button
                  type="button"
                  onClick={scrollToFocus}
                  className="btn-secondary min-w-[200px]"
                >
                  Explore our focus areas
                </button>
              </div>
              <p className="mt-8 text-sm text-text-muted max-w-xl mx-auto lg:mx-0">
                Prefer to start a conversation?{" "}
                <button
                  type="button"
                  onClick={() => router.push("/JoinUs")}
                  className="font-semibold text-primary-action hover:text-primary-deep underline-offset-4 hover:underline"
                >
                  Visit Join Us
                </button>{" "}
                for roles and collaboration paths.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border-light bg-bg-white/90 backdrop-blur-sm p-6 sm:p-8 shadow-lift">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">
                  Where we concentrate
                </p>
                <ul className="space-y-4">
                  {researchAreas.map((area) => (
                    <li key={area.id}>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveTab(area.id);
                          scrollToFocus();
                        }}
                        className="w-full text-left rounded-xl border border-border-light bg-bg-off/60 hover:bg-primary-soft hover:border-primary-action/30 p-4 transition-all group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-deep text-white shadow-soft">
                            {area.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-bold text-text-main group-hover:text-primary-deep transition-colors">
                              {area.title}
                            </p>
                            <p className="text-sm text-text-muted mt-1 leading-snug line-clamp-2">
                              {area.shortDescription}
                            </p>
                            <p className="mt-2 text-xs font-semibold text-primary-action">
                              Open this focus →
                            </p>
                          </div>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="research-focus"
        className="py-12 sm:py-16 lg:py-20 bg-bg-white border-b border-border-light scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-main mb-4">
              Our research <span className="text-gradient-official">focus areas</span>
            </h2>
            <p className="text-text-muted leading-relaxed">
              Each strand below is both a specialty and a doorway: dive into
              narrative, projects, and momentum—or start from the overview to
              compare how the pieces fit together.
            </p>
          </div>

          <div className="mb-10 sm:mb-12">
            <div className="sm:hidden">
              <label htmlFor="research-tab-select" className="sr-only">
                Choose a focus area
              </label>
              <select
                id="research-tab-select"
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="block w-full rounded-xl border border-border-light bg-bg-white px-4 py-3 text-base text-text-main shadow-soft focus:outline-none focus:ring-2 focus:ring-primary-action/40 focus:border-primary-action"
              >
                <option value="overview">Overview — all focus areas</option>
                {researchAreas.map((area) => (
                  <option key={area.id} value={area.id}>
                    {area.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="hidden sm:flex flex-wrap justify-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("overview")}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                  activeTab === "overview"
                    ? "bg-primary-deep text-white shadow-soft"
                    : "bg-bg-off text-text-muted border border-border-light hover:border-primary-action/40"
                }`}
              >
                Overview
              </button>
              {researchAreas.map((area) => (
                <button
                  type="button"
                  key={area.id}
                  onClick={() => setActiveTab(area.id)}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                    activeTab === area.id
                      ? "bg-primary-deep text-white shadow-soft"
                      : "bg-bg-off text-text-muted border border-border-light hover:border-primary-action/40"
                  }`}
                >
                  {area.title}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "overview" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {researchAreas.map((area) => (
                <div
                  key={area.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    setSelectedArea(area);
                    setIsModalOpen(true);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedArea(area);
                      setIsModalOpen(true);
                    }
                  }}
                  className="card-base p-6 lg:p-8 cursor-pointer"
                >
                  <div className="w-14 h-14 bg-primary-deep rounded-xl flex items-center justify-center text-white mb-5 shadow-soft [&_svg]:text-white">
                    {area.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-text-main mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm sm:text-base text-text-muted mb-5 leading-relaxed min-h-[3rem]">
                    {area.shortDescription || area.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary-deep">
                      {area.publications} publications
                    </span>
                    <span className="inline-flex items-center rounded-full bg-bg-off border border-border-light px-3 py-1 text-xs font-semibold text-text-muted">
                      {area.funding} funded
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTab(area.id);
                      }}
                      className="text-sm font-semibold text-primary-action hover:text-primary-deep transition-colors"
                    >
                      Full focus →
                    </button>
                    <span className="text-xs text-text-muted">Quick view</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {researchAreas.map(
            (area) =>
              activeTab === area.id && (
                <div key={area.id} className="max-w-4xl mx-auto animate-in fade-in duration-300">
                  <div className="card-base p-6 sm:p-8 lg:p-10 border-primary-soft">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-deep rounded-2xl flex items-center justify-center text-white mx-auto sm:mx-0 shadow-soft shrink-0 [&_svg]:text-white">
                        {area.icon}
                      </div>
                      <div className="text-center sm:text-left flex-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary-action mb-2">
                          Research focus
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-bold text-text-main mb-2">
                          {area.title}
                        </h2>
                        <p className="text-text-muted leading-relaxed max-w-2xl">
                          {area.shortDescription}
                        </p>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-4">
                          <span className="inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-bold text-primary-deep">
                            {area.publications} publications
                          </span>
                          <span className="inline-flex rounded-full border border-border-light bg-bg-off px-3 py-1 text-xs font-bold text-text-muted">
                            {area.funding} support
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8 rounded-2xl bg-primary-soft/40 border border-border-light p-6 sm:p-8">
                      <h3 className="text-lg font-bold text-text-main mb-3">
                        How we frame this area
                      </h3>
                      <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                        {area.detailedDescription}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-bold text-text-main mb-4">
                          Active directions
                        </h3>
                        <ul className="space-y-3">
                          {area.currentProjects?.map((project, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-action" />
                              <span className="text-sm sm:text-base text-text-muted leading-relaxed">
                                {project}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-text-main mb-4">
                          Momentum at a glance
                        </h3>
                        <div className="space-y-4">
                          <div className="rounded-xl border border-border-light bg-bg-off p-4">
                            <div className="text-2xl font-bold text-primary-deep tabular-nums">
                              {area.publications}
                            </div>
                            <div className="text-xs font-semibold uppercase tracking-wide text-text-muted mt-1">
                              Published papers
                            </div>
                          </div>
                          <div className="rounded-xl border border-border-light bg-bg-off p-4">
                            <div className="text-xl font-bold text-text-main">
                              {area.funding}
                            </div>
                            <div className="text-xs font-semibold uppercase tracking-wide text-text-muted mt-1">
                              Research funding
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-border-light flex flex-col sm:flex-row gap-4 justify-center sm:justify-between items-center">
                      <p className="text-sm text-text-muted text-center sm:text-left">
                        Want to go deeper in print or partner on a project?
                      </p>
                      <div className="flex flex-wrap gap-3 justify-center">
                        <button
                          type="button"
                          onClick={() => router.push("/PublicationPage")}
                          className="btn-primary text-sm py-2.5 px-5"
                        >
                          See publications
                        </button>
                        <button
                          type="button"
                          onClick={() => router.push("/JoinUs")}
                          className="btn-secondary text-sm py-2.5 px-5"
                        >
                          Talk with us
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-gradient-official text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
            Recognition follows focused work
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Grants and awards reinforce the same priorities you see above—rigor,
            impact, and translational energy across our focus areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch sm:items-center">
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm px-8 py-6 border border-white/20">
              <div className="text-4xl sm:text-5xl font-bold tabular-nums">
                {stats.totalAwards}
              </div>
              <div className="text-sm font-medium text-white/80 mt-1">
                Honors & entries
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm px-8 py-6 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold tabular-nums">
                {stats.totalFunding > 0
                  ? stats.totalFunding.toLocaleString("th-TH")
                  : "—"}
              </div>
              <div className="text-sm font-medium text-white/80 mt-1">
                THB from tracked grants
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => router.push("/AwardPage")}
            className="btn-primary-white mt-10"
          >
            View awards
          </button>
        </div>
      </section>

      {isModalOpen && selectedArea && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center p-4 bg-black/45 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="focus-modal-title"
        >
          <div className="bg-bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-lift border border-border-light animate-modalOpen">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-text-muted hover:bg-bg-off hover:text-text-main text-xl font-bold transition-colors"
              aria-label="Close"
            >
              ×
            </button>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-deep text-white mb-4 [&_svg]:text-white">
              {selectedArea.icon}
            </div>
            <h2
              id="focus-modal-title"
              className="text-xl sm:text-2xl font-bold text-text-main mb-3 pr-8"
            >
              {selectedArea.title}
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-6">
              {selectedArea.detailedDescription || selectedArea.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsModalOpen(false);
                  setActiveTab(selectedArea.id);
                  scrollToFocus();
                }}
                className="btn-primary flex-1 text-sm"
              >
                Open full focus
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="btn-secondary flex-1 text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />

      <style jsx>{`
        @keyframes modalOpen {
          from {
            opacity: 0;
            transform: scale(0.96);
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
