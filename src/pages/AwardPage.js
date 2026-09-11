import { useMemo, useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import AwardsData from "@/data/Awards/AwardsData";

const parseFundingAmount = (amount) => {
  const n = parseInt(String(amount).replace(/[^\d]/g, ""), 10);
  return Number.isFinite(n) ? n : 0;
};

const AwardPage = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("year-desc");

  const categories = [
    { id: "all", name: "All awards" },
    { id: "research-excellence", name: "Research excellence" },
    { id: "innovation", name: "Innovation" },
    { id: "funding", name: "Funding & grants" },
    { id: "publication", name: "Publication awards" },
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
          badge: a.badge || (a.fund ? "Major Grant" : "Award"),
        }))
      ),
    []
  );

  const yearOptions = useMemo(() => {
    const years = [...new Set(awards.map((a) => a.year).filter(Boolean))].sort(
      (x, y) => Number(y) - Number(x)
    );
    return [{ id: "all", name: "All years" }, ...years.map((y) => ({ id: y, name: y }))];
  }, [awards]);

  const stats = useMemo(() => {
    const withFunding = awards.filter((a) => a.amount);
    const totalFunding = withFunding.reduce((sum, a) => sum + parseFundingAmount(a.amount), 0);
    const numericYears = awards.map((a) => parseInt(a.year, 10)).filter((n) => Number.isFinite(n));
    const latestYear = numericYears.length > 0 ? String(Math.max(...numericYears)) : null;
    return {
      totalAwards: awards.length,
      totalFunding,
      grantCount: withFunding.length,
      latestYear,
      latestYearCount: latestYear ? awards.filter((a) => a.year === latestYear).length : 0,
    };
  }, [awards]);

  const filteredAwards = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return awards.filter((award) => {
      const matchesCategory = selectedCategory === "all" || award.category === selectedCategory;
      const matchesYear = selectedYear === "all" || award.year === selectedYear;
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
      return sortBy === "year-asc" ? x[0].localeCompare(y[0]) : y[0].localeCompare(x[0]);
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

  const chipClass = (active) =>
    `rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
      active ? "bg-primary-deep text-white" : "bg-bg-off text-text-muted hover:text-primary-deep"
    }`;

  return (
    <div className="min-h-dvh bg-bg-canvas">
      <Head>
        <title>Awards · SENET Lab</title>
      </Head>
      <Navbar />

      <main id="main">
        <section className="relative overflow-hidden border-b border-border-light">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-warm/15 blur-3xl"
            aria-hidden
          />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-24">
            <p className="kicker mb-4">SENET Lab</p>
            <h1 className="display-title text-3xl sm:text-4xl lg:text-5xl text-text-main mb-5 max-w-2xl">
              Awards &amp; recognition
            </h1>
            <p className="text-base sm:text-lg text-text-muted max-w-2xl leading-relaxed mb-12">
              Honors, qualifications, and grants in software engineering and
              networking—filter by year, category, or keyword.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 border-t border-border-light pt-10">
              <div>
                <p className="text-3xl sm:text-4xl font-semibold text-primary-deep tabular-nums">{stats.totalAwards}</p>
                <p className="text-sm text-text-muted mt-1">Total honors</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-semibold text-primary-deep tabular-nums">{stats.grantCount}</p>
                <p className="text-sm text-text-muted mt-1">Funded projects</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-semibold text-text-main tabular-nums">
                  {stats.totalFunding > 0 ? stats.totalFunding.toLocaleString("th-TH") : "—"}
                </p>
                <p className="text-sm text-text-muted mt-1">THB aggregate</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-semibold text-primary-deep tabular-nums">
                  {stats.latestYear ? stats.latestYearCount : "—"}
                </p>
                <p className="text-sm text-text-muted mt-1">
                  {stats.latestYear ? `In ${stats.latestYear}` : "Recent year"}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12 bg-bg-white border-b border-border-light">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="sticky top-[4.5rem] z-[30] -mx-4 px-4 py-4 sm:mx-0 sm:px-0 sm:static sm:py-0 mb-6 sm:mb-8 glass-effect border-b border-border-light sm:border-0 sm:bg-transparent sm:backdrop-blur-none sm:shadow-none">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex-1 max-w-xl">
                  <label htmlFor="award-search" className="block text-xs font-semibold text-text-muted mb-2">
                    Search
                  </label>
                  <input
                    id="award-search"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Title, researcher, or keyword"
                    className="w-full rounded-lg border border-border-light bg-bg-canvas px-4 py-3 text-sm text-text-main placeholder:text-text-muted/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-action"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <div>
                    <label htmlFor="award-sort" className="block text-xs font-semibold text-text-muted mb-2 lg:sr-only">
                      Sort
                    </label>
                    <select
                      id="award-sort"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="rounded-lg border border-border-light bg-bg-canvas px-4 py-3 text-sm font-medium text-text-main min-w-[200px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-action"
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
                      className="inline-flex items-center gap-2 rounded-lg bg-primary-soft px-4 py-3 text-sm font-semibold text-primary-deep hover:bg-primary-action/10 transition-colors"
                    >
                      Clear filters
                      <span className="rounded-md bg-primary-deep px-2 py-0.5 text-[10px] text-white tabular-nums">
                        {activeFilterCount}
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            <p className="text-sm text-text-muted mb-6">
              Showing{" "}
              <span className="font-semibold text-text-main tabular-nums">{sortedAwards.length}</span>{" "}
              {sortedAwards.length === 1 ? "entry" : "entries"}
              {sortedAwards.length !== awards.length && <span> of {awards.length} total</span>}
            </p>

            <div className="lg:hidden space-y-5 mb-8">
              <div>
                <label className="block text-xs font-semibold text-text-muted mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="block w-full rounded-lg border border-border-light bg-bg-canvas px-4 py-3 text-sm font-medium text-text-main focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-action"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-muted mb-2">Year</label>
                <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
                  {yearOptions.map((year) => (
                    <button
                      key={year.id}
                      type="button"
                      onClick={() => setSelectedYear(year.id)}
                      className={`flex-shrink-0 ${chipClass(selectedYear === year.id)}`}
                    >
                      {year.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden lg:block space-y-6 mb-10">
              <div>
                <p className="text-xs font-semibold text-text-muted mb-3">Category</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setSelectedCategory(category.id)}
                      className={chipClass(selectedCategory === category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-text-muted mb-3">Year</p>
                <div className="flex flex-wrap gap-2">
                  {yearOptions.map((year) => (
                    <button
                      key={year.id}
                      type="button"
                      onClick={() => setSelectedYear(year.id)}
                      className={chipClass(selectedYear === year.id)}
                    >
                      {year.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-10 lg:space-y-14">
              {showTimeline
                ? awardsByYear.map(([year, items]) => (
                    <div key={year}>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="display-title text-2xl sm:text-3xl text-text-main tabular-nums">{year}</span>
                        <span className="h-px flex-1 bg-border-light" />
                        <span className="text-sm font-medium text-text-muted tabular-nums">
                          {items.length} {items.length === 1 ? "item" : "items"}
                        </span>
                      </div>
                      <div className="space-y-4">
                        {items.map((award) => (
                          <AwardCard key={award.id} award={award} categories={categories} />
                        ))}
                      </div>
                    </div>
                  ))
                : sortedAwards.map((award) => (
                    <AwardCard key={award.id} award={award} categories={categories} />
                  ))}
            </div>

            {filteredAwards.length === 0 && (
              <div className="text-center py-16 max-w-lg mx-auto">
                <h3 className="display-title text-2xl text-text-main mb-2">No awards match</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  Try a different keyword, category, or year—or reset everything at once.
                </p>
                <button type="button" onClick={clearFilters} className="btn-primary text-sm">
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-bg-off">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="display-title text-2xl sm:text-3xl text-text-main mb-4 max-w-xl">
              From recognition to the next project
            </h2>
            <p className="text-text-muted mb-8 max-w-xl leading-relaxed">
              Awards are one signal. See how the work shows up in publications and
              collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button type="button" onClick={() => router.push("/ResearchPage")} className="btn-primary">
                View our research
              </button>
              <button type="button" onClick={() => router.push("/JoinUs")} className="btn-secondary">
                Collaboration opportunities
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

function AwardCard({ award, categories }) {
  const categoryLabel = categories.find((cat) => cat.id === award.category)?.name || award.category;

  return (
    <article className="rounded-2xl bg-bg-canvas p-6 sm:p-8 group">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        <div className="lg:w-36 shrink-0">
          <p className="font-display italic text-primary-action mb-2">{award.year}</p>
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-bg-white text-text-muted">
            {award.badge}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div className="min-w-0">
              <h3 className="display-title text-xl sm:text-2xl text-text-main leading-snug mb-2">
                {award.title}
              </h3>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-text-muted">
                <span className="font-medium text-text-main/90">{award.subtitle}</span>
                {award.month && (
                  <>
                    <span className="text-border-light hidden sm:inline">·</span>
                    <span className="tabular-nums">{award.month}</span>
                  </>
                )}
                {award.amount && (
                  <>
                    <span className="text-border-light hidden sm:inline">·</span>
                    <span className="font-semibold text-primary-action">{award.amount}</span>
                  </>
                )}
              </div>
            </div>
            <span className="inline-flex self-start items-center px-3 py-1 rounded-md text-xs font-semibold bg-bg-white text-text-muted">
              {categoryLabel}
            </span>
          </div>

          {award.description ? (
            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-5 max-w-2xl">
              {award.description}
            </p>
          ) : null}

          <div className="grid sm:grid-cols-2 gap-4 text-sm mb-5">
            <div>
              <span className="text-xs font-semibold text-text-muted">Recipient</span>
              <p className="text-text-main mt-1 font-medium">{award.recipient}</p>
            </div>
            {award.institution && award.institution !== "—" ? (
              <div>
                <span className="text-xs font-semibold text-text-muted">Institution</span>
                <p className="text-text-main mt-1">{award.institution}</p>
              </div>
            ) : null}
          </div>

          {award.impact && award.impact.trim() ? (
            <div className="rounded-xl bg-bg-white p-4 sm:p-5">
              <span className="text-xs font-semibold text-primary-deep block mb-2">Impact</span>
              <p className="text-text-muted text-sm leading-relaxed">{award.impact}</p>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default AwardPage;
