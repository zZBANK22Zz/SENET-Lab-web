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
    <section id="research" className="py-24 lg:py-32 bg-bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-action mb-4">
            Where we spend our time
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main mb-6 tracking-tight">
            Research <span className="text-gradient-official">areas</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Three pillars—each with its own publications, funding, and project
            momentum. Tap through to the full research page for depth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {researchAreas.map((area) => (
            <Link
              key={area.id}
              href="/ResearchPage"
              className="card-base p-8 lg:p-10 group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-action focus-visible:ring-offset-2"
            >
              <div className="w-16 h-16 bg-primary-soft rounded-2xl flex items-center justify-center text-primary-deep mb-8 group-hover:bg-gradient-official group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-sm [&_svg]:transition-colors">
                {area.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-text-main mb-4 group-hover:text-primary-deep transition-colors">
                {area.title}
              </h3>
              <p className="text-text-muted leading-relaxed mb-6">{area.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-xs font-bold uppercase tracking-wide rounded-full bg-primary-soft px-3 py-1 text-primary-deep">
                  {area.publications} papers (tracked)
                </span>
                <span className="text-xs font-bold uppercase tracking-wide rounded-full border border-border-light bg-bg-off px-3 py-1 text-text-muted">
                  {area.funding}
                </span>
              </div>
              <div className="pt-6 border-t border-border-light flex items-center text-sm font-semibold text-primary-action group-hover:text-primary-deep transition-colors">
                Open on research page
                <svg
                  className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

