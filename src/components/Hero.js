import { ChevronDown, ArrowRight } from "lucide-react";
import { useRouter } from "next/router";
import PhotoSlideshow from "./PhotoSlideShow";
import ResearchAreaData from "@/data/ResearchArea/ResearchAreaData";
import AwardsData from "@/data/Awards/AwardsData";

export default function Hero() {
  const router = useRouter();
  const flatAwards = AwardsData.flatMap((person) => person.awards);
  const totalPublications = ResearchAreaData.reduce(
    (sum, area) => sum + (area.publications || 0),
    0
  );

  const quickStats = [
    { label: "Focus areas", value: ResearchAreaData.length },
    { label: "Publications tracked", value: `${totalPublications}+` },
    { label: "Grants & honors", value: flatAwards.length },
  ];

  const scrollToContent = () => {
    document.getElementById("research")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative flex min-h-[calc(100dvh-4.5rem)] overflow-hidden bg-primary-deep"
      aria-label="Hero"
    >
      <PhotoSlideshow />

      <div className="relative z-20 flex min-h-0 w-full items-center overflow-y-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="max-w-3xl lg:max-w-4xl pb-10">
            <p className="inline-flex items-center gap-2 mb-4 sm:mb-5 text-blue-100/90">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent-warm opacity-80" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-warm" />
              </span>
              <span className="font-display italic text-base sm:text-lg">
                College of Computing, PSU Phuket
              </span>
            </p>

            <h1 className="display-title text-4xl sm:text-5xl md:text-6xl lg:text-[4.4rem] text-white mb-4 sm:mb-5 leading-[1.08]">
              Build software and networks
              <br />
              <span className="italic text-white/85">that hold up in the field</span>
            </h1>

            <p className="text-base sm:text-lg text-blue-50/90 mb-7 leading-relaxed max-w-xl">
              SENET studies software quality, testing, and networked systems—then
              publishes, prototypes, and deploys the results.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
              <button
                type="button"
                onClick={() => router.push("/ResearchPage")}
                className="btn-primary-white py-3.5 px-7 text-base"
              >
                Explore research
                <ArrowRight size={18} aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => router.push("/JoinUs")}
                className="px-7 py-3.5 rounded-lg border border-white/35 text-white font-semibold hover:bg-white/10 backdrop-blur-md transition-all duration-200 active:scale-[0.98] text-base"
              >
                Collaborate
              </button>
            </div>
            <button
              type="button"
              onClick={() => router.push("/PublicationPage")}
              className="text-sm font-medium text-blue-100/85 hover:text-white underline-offset-4 hover:underline transition-colors mb-8"
            >
              Jump to publications
            </button>

            <div className="flex flex-wrap gap-x-10 gap-y-5 border-t border-white/15 pt-6">
              {quickStats.map((s) => (
                <div key={s.label} className="min-w-[6.5rem]">
                  <p className="text-2xl sm:text-3xl font-semibold text-white tabular-nums leading-none">
                    {s.value}
                  </p>
                  <p className="text-xs text-blue-100/70 font-medium mt-2">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToContent}
        className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-0.5 text-blue-100/70 hover:text-white transition-colors"
        aria-label="Scroll to research areas"
      >
        <span className="font-display italic text-sm">Discover</span>
        <ChevronDown className="w-5 h-5 animate-bounce" strokeWidth={1.75} aria-hidden />
      </button>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-bg-canvas to-transparent z-10 pointer-events-none" />
    </section>
  );
}
