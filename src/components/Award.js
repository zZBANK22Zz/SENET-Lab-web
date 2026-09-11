import Link from "next/link";
import AwardsData from "@/data/Awards/AwardsData";

function MedalIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M4.46 5.16L5 7.46l-.54 2.29 2.01 1.24L7.7 13l2.3-.54 2.3.54 1.23-2.01 2.01-1.24L15 7.46l.54-2.3-2-1.24-1.24-2.01-2.3.55-2.29-.54-1.25 2zm5.55 6.34C7.79 11.5 6 9.71 6 7.49c0-2.2 1.79-3.99 4.01-3.99 2.2 0 3.99 1.79 3.99 3.99 0 2.22-1.79 4.01-3.99 4.01zm-.02-1C8.33 10.5 7 9.16 7 7.5c0-1.65 1.33-3 2.99-3S13 5.85 13 7.5c0 1.66-1.35 3-3.01 3zm3.84 1.1l-1.28 2.24-2.08-.47L13 19.2l1.4-2.2h2.5zm-7.7.07l1.25 2.25 2.13-.51L7 19.2 5.6 17H3.1z" />
    </svg>
  );
}

export default function Awards() {
  const AwardsList = AwardsData.flatMap((person) => person.awards);

  const awards = AwardsList.map((award) => ({
    title: award.title,
    year: award.year,
    fund: award.fund || null,
    description: award.description || null,
  }));

  const featured = awards[0];
  const rest = awards.slice(1, 5);

  if (!featured) return null;

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-bg-off">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 award-glow-pulse"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 50% at 8% 15%, rgba(184, 149, 74, 0.16), transparent 55%),
            radial-gradient(ellipse 60% 45% at 92% 80%, rgba(12, 39, 68, 0.1), transparent 50%)
          `,
        }}
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-xl">
            <p className="kicker mb-3">Impact &amp; credibility</p>
            <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl text-text-main mb-4">
              Awards &amp; recognition
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              Grants, qualifications, and honors from peer review, funded
              projects, and institutions that evaluate the work.
            </p>
          </div>
          <Link
            href="/AwardPage"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-action hover:text-primary-deep transition-colors"
          >
            Full awards archive
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <article className="lg:col-span-7 rounded-[1.5rem] bg-bg-white p-8 sm:p-10 shadow-soft award-fade-up">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary-deep text-white flex items-center justify-center shadow-soft">
                <MedalIcon />
              </div>
              <span className="font-display italic text-primary-action">{featured.year}</span>
            </div>
            <h3 className="display-title text-2xl sm:text-3xl text-text-main mb-4 leading-snug">
              {featured.title}
            </h3>
            {featured.description ? (
              <p className="text-text-muted leading-relaxed mb-6 max-w-xl">
                {featured.description}
              </p>
            ) : (
              <p className="text-text-muted leading-relaxed mb-6 max-w-xl">
                Grant and recognition aligned with lab research priorities.
              </p>
            )}
            {featured.fund ? (
              <p className="text-sm font-semibold text-primary-deep tabular-nums">
                {featured.fund}
              </p>
            ) : null}
          </article>

          <div className="lg:col-span-5 divide-y divide-border-light">
            {rest.map((award, index) => (
              <article
                key={`${award.title}-${index}`}
                className="py-5 first:pt-0 last:pb-0 award-fade-up"
                style={{ animationDelay: `${(index + 1) * 80}ms` }}
              >
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <h3 className="font-semibold text-text-main leading-snug">
                    {award.title}
                  </h3>
                  <span className="shrink-0 font-display italic text-sm text-text-muted tabular-nums">
                    {award.year}
                  </span>
                </div>
                {award.fund ? (
                  <p className="text-xs font-semibold text-primary-action mt-1">{award.fund}</p>
                ) : award.description ? (
                  <p className="text-sm text-text-muted mt-1 line-clamp-2">{award.description}</p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
