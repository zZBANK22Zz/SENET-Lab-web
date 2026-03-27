// AwardPage.js — Awards directory with filters, search, and timeline grouping
import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import AwardsData from "@/data/Awards/AwardsData";

const parseFundingAmount = (amount) => {
  const n = parseInt(String(amount).replace(/[^\d]/g, ""), 10);
  return Number.isFinite(n) ? n : 0;
};

const AwardMedallionIcon = () => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    className="w-9 h-9 sm:w-10 sm:h-10 text-primary-deep"
    aria-hidden
  >
    <path
      fill="currentColor"
      d="M4.46 5.16L5 7.46l-.54 2.29 2.01 1.24L7.7 13l2.3-.54 2.3.54 1.23-2.01 2.01-1.24L15 7.46l.54-2.3-2-1.24-1.24-2.01-2.3.55-2.29-.54-1.25 2zm5.55 6.34C7.79 11.5 6 9.71 6 7.49c0-2.2 1.79-3.99 4.01-3.99 2.2 0 3.99 1.79 3.99 3.99 0 2.22-1.79 4.01-3.99 4.01zm-.02-1C8.33 10.5 7 9.16 7 7.5c0-1.65 1.33-3 2.99-3S13 5.85 13 7.5c0 1.66-1.35 3-3.01 3zm3.84 1.1l-1.28 2.24-2.08-.47L13 19.2l1.4-2.2h2.5zm-7.7.07l1.25 2.25 2.13-.51L7 19.2 5.6 17H3.1z"
    />
  </svg>
);

const AwardPage = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("year-desc");

  const categories = [
    { id: "all", name: "All Awards" },
    { id: "research-excellence", name: "Research Excellence" },
    { id: "innovation", name: "Innovation" },
    { id: "funding", name: "Funding & Grants" },
    { id: "publication", name: "Publication Awards" },
    { id: "collaboration", name: "Collaboration" },
  ];

  const awards = useMemo(
    () =>
      AwardsData.flatMap((person) =>
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
          icon: <AwardMedallionIcon />,
          badge: a.badge || (a.fund ? "Major Grant" : "Award"),
        }))
      ),
    []
  );

  const yearOptions = useMemo(() => {
    const years = [
      ...new Set(awards.map((a) => a.year).filter(Boolean)),
    ].sort((x, y) => Number(y) - Number(x));
    return [{ id: "all", name: "All Years" }, ...years.map((y) => ({ id: y, name: y }))];
  }, [awards]);

  const stats = useMemo(() => {
    const withFunding = awards.filter((a) => a.amount);
    const totalFunding = withFunding.reduce(
      (sum, a) => sum + parseFundingAmount(a.amount),
      0
    );
    const numericYears = awards
      .map((a) => parseInt(a.year, 10))
      .filter((n) => Number.isFinite(n));
    const latestYear =
      numericYears.length > 0 ? String(Math.max(...numericYears)) : null;
    return {
      totalAwards: awards.length,
      totalFunding,
      grantCount: withFunding.length,
      categoryCount: new Set(awards.map((a) => a.category)).size,
      latestYear,
      latestYearCount: latestYear
        ? awards.filter((a) => a.year === latestYear).length
        : 0,
    };
  }, [awards]);

  const filteredAwards = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return awards.filter((award) => {
      const matchesCategory =
        selectedCategory === "all" || award.category === selectedCategory;
      const matchesYear =
        selectedYear === "all" || award.year === selectedYear;
      const matchesSearch =
        !q ||
        award.title.toLowerCase().includes(q) ||
        award.subtitle.toLowerCase().includes(q) ||
        award.recipient.toLowerCase().includes(q) ||
        (award.description && award.description.toLowerCase().includes(q));
      return matchesCategory && matchesYear && matchesSearch;
    });
  }, [awards, selectedCategory, selectedYear, searchQuery]);

  const sortedAwards = useMemo(() => {
    const list = [...filteredAwards];
    list.sort((a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title, undefined, { sensitivity: "base" });
      }
      const ya = parseInt(a.year, 10) || 0;
      const yb = parseInt(b.year, 10) || 0;
      if (sortBy === "year-asc") return ya - yb;
      return yb - ya;
    });
    return list;
  }, [filteredAwards, sortBy]);

  const awardsByYear = useMemo(() => {
    const map = new Map();
    for (const a of sortedAwards) {
      const y = a.year || "—";
      if (!map.has(y)) map.set(y, []);
      map.get(y).push(a);
    }
    return [...map.entries()].sort((x, y) => {
      const nx = parseInt(x[0], 10);
      const ny = parseInt(y[0], 10);
      if (Number.isFinite(nx) && Number.isFinite(ny)) {
        return sortBy === "year-asc" ? nx - ny : ny - nx;
      }
      return sortBy === "year-asc"
        ? x[0].localeCompare(y[0])
        : y[0].localeCompare(x[0]);
    });
  }, [sortedAwards, sortBy]);

  const activeFilterCount = [
    selectedCategory !== "all",
    selectedYear !== "all",
    searchQuery.trim().length > 0,
  ].filter(Boolean).length;

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedYear("all");
    setSearchQuery("");
  };

  const showTimeline = sortBy === "year-desc" || sortBy === "year-asc";

  return (
    <div className="min-h-screen bg-bg-off">
      <Navbar />

      <section className="relative overflow-hidden border-b border-border-light bg-gradient-to-b from-primary-soft/40 to-bg-off">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-action/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-primary-deep/5 blur-3xl"
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-24">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary-action mb-4">
            SENET Lab
          </p>
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main tracking-tight mb-5 sm:mb-6">
            Awards &{" "}
            <span className="text-gradient-official">Recognition</span>
          </h1>
          <p className="text-center text-base sm:text-lg text-text-muted max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-12">
            Honors, qualifications, and grants that reflect our commitment to
            software engineering and networking research—with tools below to
            explore by year, category, or keyword.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="card-base p-5 sm:p-6 text-center hover:translate-y-0">
              <p className="text-3xl sm:text-4xl font-bold text-primary-deep tabular-nums">
                {stats.totalAwards}
              </p>
              <p className="text-xs sm:text-sm font-medium text-text-muted mt-1">
                Total honors
              </p>
            </div>
            <div className="card-base p-5 sm:p-6 text-center hover:translate-y-0">
              <p className="text-3xl sm:text-4xl font-bold text-primary-deep tabular-nums">
                {stats.grantCount}
              </p>
              <p className="text-xs sm:text-sm font-medium text-text-muted mt-1">
                Funded projects
              </p>
            </div>
            <div className="card-base p-5 sm:p-6 text-center hover:translate-y-0">
              <p className="text-xl sm:text-2xl font-bold text-text-main tabular-nums leading-tight">
                {stats.totalFunding > 0
                  ? `${stats.totalFunding.toLocaleString("th-TH")}`
                  : "—"}
              </p>
              <p className="text-xs sm:text-sm font-medium text-text-muted mt-1">
                THB aggregate (parsed)
              </p>
            </div>
            <div className="card-base p-5 sm:p-6 text-center hover:translate-y-0">
              <p className="text-3xl sm:text-4xl font-bold text-primary-deep tabular-nums">
                {stats.latestYear ? stats.latestYearCount : "—"}
              </p>
              <p className="text-xs sm:text-sm font-medium text-text-muted mt-1">
                {stats.latestYear
                  ? `In ${stats.latestYear}`
                  : "Recent year"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 bg-bg-white border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sticky top-0 z-20 -mx-4 px-4 py-4 sm:mx-0 sm:px-0 sm:static sm:py-0 mb-6 sm:mb-8 glass-effect border-b border-border-light sm:border-0 sm:bg-transparent sm:backdrop-blur-none">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex-1 max-w-xl">
                <label
                  htmlFor="award-search"
                  className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2"
                >
                  Search
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </span>
                  <input
                    id="award-search"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Title, researcher, or keyword…"
                    className="w-full rounded-xl border border-border-light bg-bg-white pl-10 pr-4 py-3 text-sm text-text-main placeholder:text-text-muted/70 shadow-soft focus:outline-none focus:ring-2 focus:ring-primary-action/40 focus:border-primary-action"
                  />
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div>
                  <label
                    htmlFor="award-sort"
                    className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2 lg:sr-only"
                  >
                    Sort
                  </label>
                  <select
                    id="award-sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="rounded-xl border border-border-light bg-bg-white px-4 py-3 text-sm font-medium text-text-main shadow-soft focus:outline-none focus:ring-2 focus:ring-primary-action/40 focus:border-primary-action min-w-[200px]"
                  >
                    <option value="year-desc">Newest first</option>
                    <option value="year-asc">Oldest first</option>
                    <option value="title">Title (A–Z)</option>
                  </select>
                </div>
                {activeFilterCount > 0 && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="inline-flex items-center gap-2 rounded-xl border border-border-light bg-primary-soft px-4 py-3 text-sm font-semibold text-primary-deep hover:bg-primary-action/10 transition-colors"
                  >
                    Clear filters
                    <span className="rounded-full bg-primary-deep px-2 py-0.5 text-[10px] text-white tabular-nums">
                      {activeFilterCount}
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>

          <p className="text-sm text-text-muted mb-6">
            Showing{" "}
            <span className="font-semibold text-text-main tabular-nums">
              {sortedAwards.length}
            </span>{" "}
            {sortedAwards.length === 1 ? "entry" : "entries"}
            {sortedAwards.length !== awards.length && (
              <span className="text-text-muted">
                {" "}
                of {awards.length} total
              </span>
            )}
          </p>

          {/* Mobile: category & year */}
          <div className="lg:hidden space-y-5 mb-8">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full rounded-xl border border-border-light bg-bg-white px-4 py-3 text-sm font-medium text-text-main shadow-soft focus:outline-none focus:ring-2 focus:ring-primary-action/40"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                Year
              </label>
              <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-thin">
                {yearOptions.map((year) => (
                  <button
                    key={year.id}
                    type="button"
                    onClick={() => setSelectedYear(year.id)}
                    className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                      selectedYear === year.id
                        ? "bg-primary-deep text-white shadow-soft"
                        : "bg-bg-off text-text-muted border border-border-light hover:border-primary-action/50"
                    }`}
                  >
                    {year.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop filters */}
          <div className="hidden lg:block space-y-6 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
                Category
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                      selectedCategory === category.id
                        ? "bg-primary-deep text-white shadow-soft"
                        : "bg-bg-off text-text-muted border border-border-light hover:border-primary-action/50"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
                Year
              </p>
              <div className="flex flex-wrap gap-2">
                {yearOptions.map((year) => (
                  <button
                    key={year.id}
                    type="button"
                    onClick={() => setSelectedYear(year.id)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                      selectedYear === year.id
                        ? "bg-primary-action text-white shadow-soft"
                        : "bg-bg-off text-text-muted border border-border-light hover:border-primary-action/50"
                    }`}
                  >
                    {year.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* List / timeline */}
          <div className="space-y-10 lg:space-y-14">
            {showTimeline
              ? awardsByYear.map(([year, items]) => (
                  <div key={year}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-2xl sm:text-3xl font-bold text-text-main tabular-nums">
                        {year}
                      </span>
                      <span className="h-px flex-1 bg-gradient-to-r from-border-light to-transparent" />
                      <span className="text-sm font-medium text-text-muted tabular-nums">
                        {items.length}{" "}
                        {items.length === 1 ? "item" : "items"}
                      </span>
                    </div>
                    <div className="space-y-5 lg:space-y-6 pl-0 sm:pl-6 border-l-0 sm:border-l-2 border-primary-soft">
                      {items.map((award) => (
                        <AwardCard
                          key={award.id}
                          award={award}
                          categories={categories}
                        />
                      ))}
                    </div>
                  </div>
                ))
              : sortedAwards.map((award) => (
                  <AwardCard
                    key={award.id}
                    award={award}
                    categories={categories}
                  />
                ))}
          </div>

          {filteredAwards.length === 0 && (
            <div className="text-center py-16 card-base p-10 max-w-lg mx-auto">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary-deep">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-main mb-2">
                No awards match
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                Try a different keyword, category, or year—or reset everything
                at once.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="btn-primary text-sm"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-gradient-official text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 tracking-tight">
            Excellence in research
          </h2>
          <p className="text-base sm:text-lg text-white/85 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
            Recognition is one signal of impact—explore how our work translates
            into publications, collaborations, and funded innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => router.push("/ResearchPage")}
              className="btn-primary-white"
            >
              View our research
            </button>
            <button
              type="button"
              onClick={() => router.push("/ResearchPage")}
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/80 px-6 py-3 text-sm sm:text-base font-semibold text-white hover:bg-white hover:text-primary-deep transition-colors"
            >
              Collaboration opportunities
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

function AwardCard({ award, categories }) {
  const categoryLabel =
    categories.find((cat) => cat.id === award.category)?.name ||
    award.category;

  return (
    <article className="card-base p-6 sm:p-8 relative overflow-hidden group">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-action to-primary-deep opacity-80" />
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 pl-2">
        <div className="flex-shrink-0">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-[4.5rem] h-[4.5rem] sm:w-20 sm:h-20 rounded-2xl bg-primary-soft border border-border-light flex items-center justify-center text-primary-deep mb-3 shadow-soft group-hover:shadow-lift transition-shadow">
              {award.icon}
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide bg-primary-soft text-primary-deep border border-border-light">
              {award.badge}
            </span>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div className="min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-text-main leading-snug mb-2">
                {award.title}
              </h3>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-text-muted">
                <span className="font-medium text-text-main/90">
                  {award.subtitle}
                </span>
                <span className="text-border-light hidden sm:inline">·</span>
                <span className="tabular-nums">
                  {award.month ? `${award.month} ` : ""}
                  {award.year}
                </span>
                {award.amount && (
                  <>
                    <span className="text-border-light hidden sm:inline">·</span>
                    <span className="font-semibold text-primary-action">
                      {award.amount}
                    </span>
                  </>
                )}
              </div>
            </div>
            <span className="inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-semibold bg-bg-off text-text-muted border border-border-light">
              {categoryLabel}
            </span>
          </div>

          {award.description ? (
            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-5">
              {award.description}
            </p>
          ) : null}

          <div className="grid sm:grid-cols-2 gap-4 text-sm mb-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                Recipient
              </span>
              <p className="text-text-main mt-1 font-medium">{award.recipient}</p>
            </div>
            {award.institution && award.institution !== "—" ? (
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  Institution
                </span>
                <p className="text-text-main mt-1">{award.institution}</p>
              </div>
            ) : null}
          </div>

          {award.impact && award.impact.trim() ? (
            <div className="rounded-xl border border-border-light bg-bg-off/80 p-4 sm:p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-deep block mb-2">
                Impact & significance
              </span>
              <p className="text-text-muted text-sm leading-relaxed">
                {award.impact}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default AwardPage;
