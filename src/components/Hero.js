import { ChevronDown, LibraryBig, Sparkles } from "lucide-react";
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
    { label: "Publications (tracked)", value: `${totalPublications}+` },
    { label: "Grants & honors", value: flatAwards.length },
  ];

  const scrollToContent = () => {
    document.getElementById("research")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative flex min-h-0 h-[calc(100svh-5rem)] supports-[height:100dvh]:h-[calc(100dvh-5rem)] overflow-hidden bg-primary-deep"
      aria-label="Hero"
    >
      <PhotoSlideshow />

      <div className="relative z-20 flex min-h-0 w-full items-center justify-center overflow-y-auto overscroll-y-contain px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="text-center lg:text-left max-w-4xl w-full my-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-bold mb-5 sm:mb-6 tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            College of Computing · PSU Phuket
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 sm:mb-5 leading-[1.08] tracking-tight drop-shadow-2xl">
            Build software &amp; networks
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-300">
              that survive reality
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-blue-100/95 mb-3 sm:mb-4 leading-relaxed font-medium drop-shadow-lg max-w-2xl mx-auto lg:mx-0">
            SENET is where disciplined engineering meets networked systems—papers,
            prototypes, and people who want the story behind the stack.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-blue-200/80 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Curious if our lab fits your thesis, product, or partnership? Scroll,
            explore three focus areas, then pick how you want to engage.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-5 sm:mb-6">
            <button
              type="button"
              onClick={() => router.push("/ResearchPage")}
              className="btn-primary-white py-3.5 sm:py-4 px-6 sm:px-10 text-base sm:text-lg shadow-2xl inline-flex items-center justify-center gap-2"
            >
              <LibraryBig size={22} aria-hidden />
              Explore research
            </button>
            <button
              type="button"
              onClick={() => router.push("/JoinUs")}
              className="px-6 sm:px-10 py-3.5 sm:py-4 rounded-xl border-2 border-white/35 text-white font-bold hover:bg-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-2 text-base sm:text-lg"
            >
              <Sparkles size={20} aria-hidden />
              Collaborate with us
            </button>
          </div>
          <div className="flex justify-center lg:justify-start mb-6 sm:mb-8">
            <button
              type="button"
              onClick={() => router.push("/PublicationPage")}
              className="text-sm font-semibold text-blue-100/90 hover:text-white underline-offset-4 hover:underline transition-colors"
            >
              Or jump straight to publications →
            </button>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4">
            {quickStats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 px-3 py-2.5 sm:px-4 sm:py-3 text-left min-w-0 flex-1 sm:flex-none sm:min-w-[130px] max-w-[11rem] sm:max-w-none"
              >
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white tabular-nums leading-none">
                  {s.value}
                </p>
                <p className="text-[10px] sm:text-xs text-blue-100/80 font-medium uppercase tracking-wider mt-1 leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToContent}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-0.5 text-blue-100/70 hover:text-white transition-colors group pointer-events-auto"
        aria-label="Scroll to research areas"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">
          Discover
        </span>
        <ChevronDown
          className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce"
          strokeWidth={2}
          aria-hidden
        />
      </button>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-bg-white to-transparent z-10 pointer-events-none" />
    </section>
  );
}
