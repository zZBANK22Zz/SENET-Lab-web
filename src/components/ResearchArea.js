import Link from "next/link";
import ResearchAreaData from "@/data/ResearchArea/ResearchAreaData";

export default function ResearchAreas() {
  const researchAreas = ResearchAreaData.map((area) => ({
    id: area.id,
    icon: area.icon,
    title: area.title,
    description: area.shortDescription,
    publications: area.publications,
    funding: area.funding,
  }));

  return (
    <section id="research" className="py-20 lg:py-28 bg-bg-canvas scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14 lg:mb-20">
          <p className="kicker mb-3">Where we spend our time</p>
          <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl text-text-main mb-5">
            Research areas
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Three pillars—each with publications, funding, and active projects.
            Open the research page for the full picture.
          </p>
        </div>

        <div className="space-y-5 lg:space-y-6">
          {researchAreas.map((area, index) => (
            <Link
              key={area.id}
              href={`/ResearchPage?focus=${area.id}`}
              className="group block rounded-[1.5rem] bg-bg-white p-6 sm:p-8 shadow-soft hover:shadow-lift transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-action focus-visible:ring-offset-2"
            >
              <div className="flex flex-col gap-5 sm:gap-6">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-deep rounded-xl flex items-center justify-center text-white shrink-0 [&_svg]:text-white">
                    {area.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-display italic text-accent-warm text-sm mb-1 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="display-title text-2xl sm:text-3xl text-text-main group-hover:text-primary-deep transition-colors text-balance">
                      {area.title}
                    </h3>
                  </div>
                </div>

                <p className="text-text-muted leading-relaxed max-w-2xl">
                  {area.description}
                </p>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-1 border-t border-border-light/80">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold rounded-md bg-primary-soft px-3 py-1 text-primary-deep">
                      {area.publications} papers tracked
                    </span>
                    <span className="text-xs font-semibold rounded-md bg-bg-off px-3 py-1 text-text-muted">
                      {area.funding}
                    </span>
                  </div>
                  <span className="inline-flex items-center text-sm font-semibold text-primary-action">
                    Open on research page
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
