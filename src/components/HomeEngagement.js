import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ResearchAreaData from "@/data/ResearchArea/ResearchAreaData";
import AwardsData from "@/data/Awards/AwardsData";

const parseFundingAmount = (amount) => {
  const n = parseInt(String(amount).replace(/[^\d]/g, ""), 10);
  return Number.isFinite(n) ? n : 0;
};

export default function HomeEngagement() {
  const flatAwards = AwardsData.flatMap((person) => person.awards);
  const totalPublications = ResearchAreaData.reduce(
    (sum, area) => sum + (area.publications || 0),
    0
  );
  const fundedTotal = flatAwards
    .filter((a) => a.fund)
    .reduce((sum, a) => sum + parseFundingAmount(a.fund), 0);

  const stats = [
    {
      label: "Research pillars",
      value: String(ResearchAreaData.length),
      hint: "Software, testing, networks",
    },
    {
      label: "Tracked publications",
      value: `${totalPublications}+`,
      hint: "Across our focus areas",
    },
    {
      label: "Honors & grants",
      value: String(flatAwards.length),
      hint: "Awards, funds, recognition",
    },
    {
      label: "Grant funding tracked",
      value: fundedTotal > 0 ? `฿${fundedTotal.toLocaleString("th-TH")}` : "—",
      hint: "From project records",
    },
  ];

  const values = [
    {
      index: "01",
      title: "Work you can test",
      body: "We prefer claims that can be checked—experiments, benchmarks, and architectures that survive messy deployments.",
    },
    {
      index: "02",
      title: "Speed with a paper trail",
      body: "Automated testing and networked systems both matter. We build pipelines and protocols that scale without dropping rigor.",
    },
    {
      index: "03",
      title: "Clear ways in",
      body: "Students, faculty, and industry partners get concrete next steps—papers, prototypes, or funded projects—not a maze of menus.",
    },
  ];

  const paths = [
    {
      title: "Read the work",
      body: "Publications and topics, with how we frame problems and report results.",
      href: "/PublicationPage",
      cta: "Open publications",
    },
    {
      title: "Map our focus",
      body: "Software engineering, testing, and networks—and the projects behind each.",
      href: "/ResearchPage",
      cta: "Explore research",
    },
    {
      title: "Start a conversation",
      body: "Graduate paths, collaborations, or a question for the lab.",
      href: "/JoinUs",
      cta: "Contact us",
    },
  ];

  return (
    <>
      <section className="relative py-16 sm:py-20 bg-bg-canvas border-y border-border-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="kicker mb-3">At a glance</p>
          <h2 className="display-title text-3xl sm:text-4xl text-text-main mb-3">
            What the lab looks like in numbers
          </h2>
          <p className="text-text-muted max-w-xl mb-12 text-base leading-relaxed">
            A snapshot of activity, funding, and publication volume before you
            open the details.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-x-12 border-t border-border-light pt-10">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl sm:text-4xl font-semibold text-primary-deep tabular-nums tracking-tight mb-2">
                  {s.value}
                </p>
                <p className="text-sm font-semibold text-text-main">{s.label}</p>
                <p className="text-xs text-text-muted mt-1 leading-snug">{s.hint}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-bg-off">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
            <div className="lg:col-span-4 mb-12 lg:mb-0 lg:sticky lg:top-28">
              <p className="kicker mb-3">How we work</p>
              <h2 className="display-title text-3xl sm:text-4xl text-text-main mb-5">
                A lab that prefers evidence over slogans
              </h2>
              <p className="text-text-muted leading-relaxed">
                Research should be checkable. That is the posture we bring in
                Phuket and in every collaboration.
              </p>
            </div>
            <div className="lg:col-span-8 divide-y divide-border-light">
              {values.map(({ index, title, body }) => (
                <article key={title} className="py-8 first:pt-0 last:pb-0 grid grid-cols-[auto_1fr] gap-6 sm:gap-10">
                  <span className="font-display italic text-2xl text-accent-warm tabular-nums pt-1">
                    {index}
                  </span>
                  <div>
                    <h3 className="display-title text-2xl text-text-main mb-3">{title}</h3>
                    <p className="text-text-muted leading-relaxed max-w-xl">{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-bg-canvas">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 sm:mb-14">
            <div className="max-w-xl">
              <p className="kicker mb-3">Where to go next</p>
              <h2 className="display-title text-3xl sm:text-4xl text-text-main mb-4">
                Three doors. Pick one.
              </h2>
              <p className="text-text-muted text-lg leading-relaxed">
                Citations, research tracks, or a conversation—each path is one click.
              </p>
            </div>
            <Link
              href="/TeamPage"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-action hover:text-primary-deep transition-colors shrink-0"
            >
              Meet the people behind the work
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>

          <div className="divide-y divide-border-light border-y border-border-light">
            {paths.map(({ title, body, href, cta }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 py-7 sm:py-8 hover:bg-bg-white/60 -mx-4 px-4 sm:mx-0 sm:px-2 transition-colors duration-200"
              >
                <h3 className="display-title text-2xl sm:text-3xl text-text-main sm:w-64 shrink-0 group-hover:text-primary-deep transition-colors">
                  {title}
                </h3>
                <p className="text-text-muted leading-relaxed flex-1">{body}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-action shrink-0">
                  {cta}
                  <ArrowRight
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-bg-off">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-primary-deep px-8 py-14 sm:px-14 sm:py-16 lg:px-20 text-white">
            <div
              className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-accent-warm/20 blur-3xl"
              aria-hidden
            />
            <div className="relative max-w-2xl">
              <h2 className="display-title text-3xl sm:text-4xl mb-4 tracking-tight">
                Visit, write, or collaborate
              </h2>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8">
                Tell us what you are building, studying, or funding. We will point
                you to the shortest next step inside the lab.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/JoinUs" className="btn-primary-white justify-center py-3.5 px-8">
                  Start a conversation
                </Link>
                <Link
                  href="/ResearchPage"
                  className="inline-flex items-center justify-center rounded-lg border border-white/50 px-8 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-white/10 transition-colors duration-200"
                >
                  See research focus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
