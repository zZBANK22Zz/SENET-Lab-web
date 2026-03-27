import { useState } from "react";
import Link from "next/link";
import AwardsData from "@/data/Awards/AwardsData";

function MedalIcon({ className = "w-7 h-7" }) {
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

function AwardCardContent({ award, variant = "desktop" }) {
  const isMobile = variant === "mobile";

  const iconWell = (
    <div
      className={`relative flex shrink-0 items-center justify-center rounded-2xl bg-gradient-official text-white shadow-lg shadow-primary-deep/30 ring-4 ring-white/90 ${
        isMobile ? "w-14 h-14" : "w-16 h-16 mb-8"
      } transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary-action/25`}
    >
      <MedalIcon className={isMobile ? "w-6 h-6" : "w-7 h-7"} />
      <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[9px] font-black text-primary-deep shadow-md border border-primary-soft">
        ★
      </span>
    </div>
  );

  const body = (
    <>
      {!isMobile && (
        <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-deep ring-1 ring-primary-action/10 mb-4">
          {award.year}
        </span>
      )}

      {isMobile ? (
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-bold text-text-main leading-snug tracking-tight group-hover:text-primary-deep transition-colors pr-2">
            {award.title}
          </h3>
          <span className="flex-shrink-0 rounded-full bg-primary-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-deep ring-1 ring-primary-action/10">
            {award.year}
          </span>
        </div>
      ) : (
        <h3 className="text-xl font-bold text-text-main mb-3 leading-snug tracking-tight group-hover:text-primary-deep transition-colors">
          {award.title}
        </h3>
      )}

      {award.description ? (
        <p
          className={`text-text-muted leading-relaxed ${isMobile ? "text-sm mb-4" : "text-sm mb-6"}`}
        >
          {award.description}
        </p>
      ) : isMobile ? null : (
        <p className="text-sm text-text-muted/80 italic mb-6">
          Grant &amp; recognition aligned with lab research priorities.
        </p>
      )}

      {award.fund ? (
        <div className="mt-auto flex items-center gap-2 rounded-xl border border-primary-action/15 bg-primary-soft/60 px-3 py-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-action" />
          <span className="text-xs font-bold text-primary-action">{award.fund}</span>
        </div>
      ) : null}
    </>
  );

  if (isMobile) {
    return (
      <div className="flex items-start gap-4">
        {iconWell}
        <div className="min-w-0 flex-1">{body}</div>
      </div>
    );
  }

  return (
    <>
      {iconWell}
      {body}
    </>
  );
}

export default function Awards() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const AwardsList = AwardsData.flatMap((person) => person.awards);

  const awards = AwardsList.map((award) => ({
    title: award.title,
    year: award.year,
    fund: award.fund || null,
    description: award.description || null,
  }));

  const slideCount = Math.max(1, awards.length - 2);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-bg-off"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55] award-glow-pulse"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 55% at 15% 20%, rgba(29, 78, 216, 0.14), transparent 55%),
            radial-gradient(ellipse 70% 50% at 85% 75%, rgba(0, 45, 114, 0.12), transparent 50%),
            linear-gradient(180deg, transparent 0%, rgba(248, 250, 252, 0.9) 100%)
          `,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 45, 114, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 45, 114, 0.04) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 lg:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-action mb-4">
            Impact &amp; credibility
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main mb-5 tracking-tight">
            Awards &amp; <span className="text-gradient-official">Recognition</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed mb-6">
            Grants, qualifications, and honors that reflect how we execute—peer
            review, funded projects, and recognition from institutions that
            matter.
          </p>
          <Link
            href="/AwardPage"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary-action hover:text-primary-deep transition-colors group/link"
          >
            Explore the full awards archive
            <svg
              className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative px-4 sm:px-14 lg:px-16">
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-bg-white border-2 border-border-light flex items-center justify-center text-primary-deep shadow-lift hover:border-primary-action hover:bg-primary-soft hover:scale-105 active:scale-95 transition-all duration-200"
            aria-label="Previous awards"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-bg-white border-2 border-border-light flex items-center justify-center text-primary-deep shadow-lift hover:border-primary-action hover:bg-primary-soft hover:scale-105 active:scale-95 transition-all duration-200"
            aria-label="Next awards"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
            >
              {awards.map((award, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-3 sm:px-4">
                  <div
                    className="group relative h-full min-h-[340px] flex flex-col rounded-2xl border border-border-light bg-bg-white/90 backdrop-blur-sm p-9 lg:p-10 shadow-soft transition-all duration-300 ease-out hover:-translate-y-2 hover:border-primary-action/45 hover:shadow-[0_22px_44px_-18px_rgba(0,45,114,0.28)] award-fade-up"
                    style={{ animationDelay: `${index * 70}ms` }}
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-primary-deep via-primary-action to-primary-deep opacity-60 scale-x-95 group-hover:scale-x-100 transition-transform origin-center"
                      aria-hidden
                    />
                    <AwardCardContent award={award} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-12 gap-2">
            {Array.from({ length: slideCount }).map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-10 bg-gradient-official shadow-md shadow-primary-deep/25"
                    : "w-2 bg-border-light hover:bg-primary-action/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentSlide === index ? "true" : undefined}
              />
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border-light bg-bg-white/95 p-8 shadow-soft transition-all duration-300 hover:border-primary-action/40 hover:shadow-lift award-fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-primary-deep via-primary-action to-primary-deep opacity-50 group-hover:opacity-80 transition-opacity"
                aria-hidden
              />
              <AwardCardContent award={award} variant="mobile" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
