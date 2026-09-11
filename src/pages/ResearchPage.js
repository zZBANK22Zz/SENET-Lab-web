import { useState, useEffect } from "react";
import Head from "next/head";
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

  useEffect(() => {
    if (!router.isReady) return;
    const raw = router.query.focus;
    const focus = Array.isArray(raw) ? raw[0] : raw;
    if (!focus) return;
    const match = ResearchAreaData.find((a) => a.id === focus);
    if (!match) return;
    setActiveTab(focus);
    const timer = window.setTimeout(() => {
      document.getElementById("research-focus")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [router.isReady, router.query.focus]);

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
    <div className="min-h-dvh bg-bg-canvas text-text-main">
      <Head>
        <title>Research · SENET Lab</title>
      </Head>
      <Navbar />

      <main id="main">
        <section className="relative overflow-hidden border-b border-border-light">
          <div
            className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-accent-warm/15 blur-3xl"
            aria-hidden
          />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-24">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-7">
                <p className="kicker mb-4">An open invitation</p>
                <h1 className="display-title text-3xl sm:text-4xl lg:text-5xl text-text-main leading-tight mb-6">
                  Research with a clear focus
                </h1>
                <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-xl mb-4">
                  SENET welcomes collaborators, students, and partners who care
                  about dependable software and the networks that carry it.
                </p>
                <p className="text-sm sm:text-base text-text-main/90 max-w-xl mb-8">
                  {focusIntro}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
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
                <p className="mt-8 text-sm text-text-muted max-w-xl">
                  Prefer to start a conversation?{" "}
                  <button
                    type="button"
                    onClick={() => router.push("/JoinUs")}
                    className="font-semibold text-primary-action hover:text-primary-deep underline-offset-4 hover:underline"
                  >
                    Visit contact
                  </button>{" "}
                  for roles and collaboration paths.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-bg-white p-6 sm:p-8 shadow-soft">
                  <p className="kicker mb-5 text-base">Where we concentrate</p>
                  <ul className="space-y-3">
                    {researchAreas.map((area, i) => (
                      <li key={area.id}>
                        <button
                          type="button"
                          onClick={() => {
                            setActiveTab(area.id);
                            scrollToFocus();
                          }}
                          className="w-full text-left rounded-xl hover:bg-bg-off p-4 transition-colors duration-200 group"
                        >
                          <div className="flex items-start gap-4">
                            <span className="font-display italic text-accent-warm w-8 shrink-0">
                              0{i + 1}
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="font-semibold text-text-main group-hover:text-primary-deep transition-colors">
                                {area.title}
                              </p>
                              <p className="text-sm text-text-muted mt-1 leading-snug line-clamp-2">
                                {area.shortDescription}
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
          className="py-12 sm:py-16 lg:py-20 bg-bg-white border-b border-border-light scroll-mt-24"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10 sm:mb-14">
              <h2 className="display-title text-2xl sm:text-3xl text-text-main mb-4">
                Focus areas
              </h2>
              <p className="text-text-muted leading-relaxed">
                Each strand is a specialty and a doorway. Compare them in overview,
                or open one for projects and momentum.
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
                  className="block w-full rounded-lg border border-border-light bg-bg-canvas px-4 py-3 text-base text-text-main focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-action"
                >
                  <option value="overview">Overview — all focus areas</option>
                  {researchAreas.map((area) => (
                    <option key={area.id} value={area.id}>
                      {area.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="hidden sm:flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("overview")}
                  className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    activeTab === "overview"
                      ? "bg-primary-deep text-white"
                      : "bg-bg-off text-text-muted hover:text-primary-deep"
                  }`}
                >
                  Overview
                </button>
                {researchAreas.map((area) => (
                  <button
                    type="button"
                    key={area.id}
                    onClick={() => setActiveTab(area.id)}
                    className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      activeTab === area.id
                        ? "bg-primary-deep text-white"
                        : "bg-bg-off text-text-muted hover:text-primary-deep"
                    }`}
                  >
                    {area.title}
                  </button>
                ))}
              </div>
            </div>

            {activeTab === "overview" && (
              <div className="space-y-4">
                {researchAreas.map((area, index) => (
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
                    className="grid md:grid-cols-12 gap-6 items-center rounded-2xl bg-bg-canvas p-6 lg:p-8 cursor-pointer hover:shadow-soft transition-shadow duration-200"
                  >
                    <div className="md:col-span-4 flex items-center gap-4">
                      <span className="font-display italic text-accent-warm text-xl">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="display-title text-xl sm:text-2xl text-text-main">
                          {area.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="text-xs font-semibold text-primary-deep">
                            {area.publications} publications
                          </span>
                          <span className="text-xs text-text-muted">{area.funding} funded</span>
                        </div>
                      </div>
                    </div>
                    <p className="md:col-span-5 text-sm sm:text-base text-text-muted leading-relaxed">
                      {area.shortDescription || area.description}
                    </p>
                    <div className="md:col-span-3 flex md:justify-end items-center gap-4">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveTab(area.id);
                        }}
                        className="text-sm font-semibold text-primary-action hover:text-primary-deep transition-colors"
                      >
                        Full focus
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
                  <div key={area.id} className="max-w-4xl">
                    <div className="rounded-2xl bg-bg-canvas p-6 sm:p-8 lg:p-10">
                      <p className="kicker mb-2">Research focus</p>
                      <h2 className="display-title text-2xl sm:text-3xl text-text-main mb-3">
                        {area.title}
                      </h2>
                      <p className="text-text-muted leading-relaxed max-w-2xl mb-4">
                        {area.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-8">
                        <span className="text-xs font-semibold text-primary-deep">
                          {area.publications} publications
                        </span>
                        <span className="text-xs font-semibold text-text-muted">
                          {area.funding} support
                        </span>
                      </div>

                      <div className="mb-8 rounded-xl bg-bg-white p-6 sm:p-8">
                        <h3 className="font-semibold text-text-main mb-3">
                          How we frame this area
                        </h3>
                        <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                          {area.detailedDescription}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="font-semibold text-text-main mb-4">
                            Active directions
                          </h3>
                          <ul className="space-y-3">
                            {area.currentProjects?.map((project, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-warm" />
                                <span className="text-sm sm:text-base text-text-muted leading-relaxed">
                                  {project}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-semibold text-text-main mb-4">
                            Momentum
                          </h3>
                          <div className="space-y-4">
                            <div className="rounded-xl bg-bg-white p-4">
                              <div className="text-2xl font-semibold text-primary-deep tabular-nums">
                                {area.publications}
                              </div>
                              <div className="text-xs font-medium text-text-muted mt-1">
                                Published papers
                              </div>
                            </div>
                            <div className="rounded-xl bg-bg-white p-4">
                              <div className="text-xl font-semibold text-text-main">
                                {area.funding}
                              </div>
                              <div className="text-xs font-medium text-text-muted mt-1">
                                Research funding
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-10 pt-8 border-t border-border-light flex flex-col sm:flex-row gap-4 justify-between items-center">
                        <p className="text-sm text-text-muted">
                          Want to go deeper in print or partner on a project?
                        </p>
                        <div className="flex flex-wrap gap-3">
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

        <section className="py-16 sm:py-20 bg-bg-off">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <h2 className="display-title text-2xl sm:text-3xl text-text-main mb-4">
                Recognition follows focused work
              </h2>
              <p className="text-text-muted leading-relaxed">
                Grants and awards sit on the same priorities: rigor, impact, and
                work that can be deployed.
              </p>
            </div>
            <div className="flex flex-wrap gap-10 mb-10">
              <div>
                <div className="text-4xl sm:text-5xl font-semibold tabular-nums text-primary-deep">
                  {stats.totalAwards}
                </div>
                <div className="text-sm font-medium text-text-muted mt-1">Honors &amp; entries</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-semibold tabular-nums text-primary-deep">
                  {stats.totalFunding > 0 ? stats.totalFunding.toLocaleString("th-TH") : "—"}
                </div>
                <div className="text-sm font-medium text-text-muted mt-1">THB from tracked grants</div>
              </div>
            </div>
            <button type="button" onClick={() => router.push("/AwardPage")} className="btn-primary">
              View awards
            </button>
          </div>
        </section>
      </main>

      {isModalOpen && selectedArea && (
        <div
          className="fixed inset-0 z-[50] flex justify-center items-center p-4 bg-primary-deep/45 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="focus-modal-title"
        >
          <div className="bg-bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-lift">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-text-muted hover:bg-bg-off hover:text-text-main text-xl font-bold transition-colors"
              aria-label="Close"
            >
              ×
            </button>
            <h2 id="focus-modal-title" className="display-title text-xl sm:text-2xl text-text-main mb-3 pr-8">
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
              <button type="button" onClick={() => setIsModalOpen(false)} className="btn-secondary flex-1 text-sm">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ResearchPage;
