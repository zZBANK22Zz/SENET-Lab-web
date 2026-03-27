import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  Map,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
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
      hint: "From code quality to networks",
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
      label: "Grant funding (tracked)",
      value: fundedTotal > 0 ? `฿${fundedTotal.toLocaleString("th-TH")}` : "—",
      hint: "From project data",
    },
  ];

  const values = [
    {
      icon: FlaskConical,
      title: "Ideas you can stress-test",
      body: "We bias toward work that can be validated—through experiments, benchmarks, and architectures that survive messy reality.",
    },
    {
      icon: Zap,
      title: "Speed with discipline",
      body: "From automated testing to networked systems, we care about building pipelines and protocols that scale without sacrificing rigor.",
    },
    {
      icon: Users,
      title: "Built for partners",
      body: "Students, faculty, and industry collaborators find clear entry points—whether you want papers, prototypes, or funded projects.",
    },
  ];

  const paths = [
    {
      icon: BookOpen,
      title: "Read the work",
      body: "Browse publications and topics to see how we frame problems and report results.",
      href: "/PublicationPage",
      cta: "Open publications",
    },
    {
      icon: Map,
      title: "Map our focus",
      body: "Software engineering, testing, and networks—see how each area drives projects today.",
      href: "/ResearchPage",
      cta: "Explore research",
    },
    {
      icon: Sparkles,
      title: "Start a conversation",
      body: "Graduate paths, collaborations, or a simple question—reach the lab directly.",
      href: "/JoinUs",
      cta: "Contact us",
    },
  ];

  return (
    <>
      <section className="relative py-16 sm:py-20 bg-bg-white border-y border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary-action mb-4">
            At a glance
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-main text-center mb-3 tracking-tight">
            Numbers that frame the{" "}
            <span className="text-gradient-official">story</span>
          </h2>
          <p className="text-text-muted text-center max-w-2xl mx-auto mb-12 text-sm sm:text-base leading-relaxed">
            A quick snapshot—so you know the lab is active, funded, and publishing
            before you dive into the details.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="card-base p-5 sm:p-6 text-center hover:translate-y-0 border-primary-soft/50"
              >
                <p className="text-2xl sm:text-3xl font-bold text-primary-deep tabular-nums mb-1">
                  {s.value}
                </p>
                <p className="text-sm font-semibold text-text-main">{s.label}</p>
                <p className="text-xs text-text-muted mt-2 leading-snug">{s.hint}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-primary-soft/30 to-bg-off">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-main mb-5 tracking-tight">
              Why people{" "}
              <span className="text-gradient-official">stick around</span>
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              Research should feel electric—not abstract. Here is the mindset we bring
              when you walk through the door (virtual or in Phuket).
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {values.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="card-base p-8 lg:p-10 relative overflow-hidden group"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary-action/10 blur-2xl group-hover:bg-primary-action/20 transition-colors" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary-deep text-white flex items-center justify-center mb-6 shadow-soft">
                    <Icon size={26} strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold text-text-main mb-3">{title}</h3>
                  <p className="text-text-muted leading-relaxed text-sm sm:text-base">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-bg-white border-t border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-action mb-3">
                Choose your path
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-main tracking-tight mb-4">
                Three ways to get{" "}
                <span className="text-gradient-official">unstuck</span>
              </h2>
              <p className="text-text-muted text-lg leading-relaxed">
                Whether you are hunting citations, comparing research tracks, or ready
                to talk—we built obvious on-ramps so you never hunt through hidden menus.
              </p>
            </div>
            <Link
              href="/TeamPage"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-action hover:text-primary-deep transition-colors shrink-0"
            >
              Meet the people behind the work
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {paths.map(({ icon: Icon, title, body, href, cta }) => (
              <Link
                key={href}
                href={href}
                className="group card-base p-8 flex flex-col h-full border-transparent hover:border-primary-action/40"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-soft text-primary-deep flex items-center justify-center mb-6 group-hover:bg-primary-deep group-hover:text-white transition-colors duration-300">
                  <Icon size={22} strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-primary-deep transition-colors">
                  {title}
                </h3>
                <p className="text-text-muted text-sm sm:text-base leading-relaxed flex-1 mb-6">
                  {body}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-primary-action">
                  {cta}
                  <ArrowRight
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-official text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 tracking-tight">
            Ready when you are
          </h2>
          <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Tell us what you are building, studying, or funding—we will point you to
            the fastest next step inside the lab.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/JoinUs" className="btn-primary-white justify-center py-3.5 px-8">
              Start a conversation
            </Link>
            <Link
              href="/ResearchPage"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/80 px-8 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-white hover:text-primary-deep transition-colors"
            >
              See research focus
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
