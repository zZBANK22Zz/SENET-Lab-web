import { useState } from "react";
import AwardsData from "@/data/Awards/AwardsData";

export default function Awards() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Get the awards for the first person
  // Get all awards from everyone
  const AwardsList = AwardsData.flatMap((person) => person.awards);

  console.log("AwardsList:", AwardsList);

  const awards = AwardsList.map((award) => ({
    icon: (
      <svg
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <rect x="0" fill="none" width="20" height="20"></rect>{" "}
          <g>
            {" "}
            <path d="M4.46 5.16L5 7.46l-.54 2.29 2.01 1.24L7.7 13l2.3-.54 2.3.54 1.23-2.01 2.01-1.24L15 7.46l.54-2.3-2-1.24-1.24-2.01-2.3.55-2.29-.54-1.25 2zm5.55 6.34C7.79 11.5 6 9.71 6 7.49c0-2.2 1.79-3.99 4.01-3.99 2.2 0 3.99 1.79 3.99 3.99 0 2.22-1.79 4.01-3.99 4.01zm-.02-1C8.33 10.5 7 9.16 7 7.5c0-1.65 1.33-3 2.99-3S13 5.85 13 7.5c0 1.66-1.35 3-3.01 3zm3.84 1.1l-1.28 2.24-2.08-.47L13 19.2l1.4-2.2h2.5zm-7.7.07l1.25 2.25 2.13-.51L7 19.2 5.6 17H3.1z"></path>{" "}
          </g>{" "}
        </g>
      </svg>
    ),
    title: award.title,
    year: award.year,
    fund: award.fund || null, // only if available
  }));

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, awards.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.max(1, awards.length - 2)) %
        Math.max(1, awards.length - 2)
    );
  };

  return (
    <section className="py-24 lg:py-32 bg-bg-off">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main mb-6 tracking-tight">
            Awards & <span className="text-gradient-official">Recognition</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Our commitment to excellence has been recognized through numerous 
            prestigious awards and grants in the field of research.
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative px-16">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border border-border-light flex items-center justify-center text-primary-deep shadow-soft hover:shadow-lift hover:border-primary-action transition-all"
            aria-label="Previous awards"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border border-border-light flex items-center justify-center text-primary-deep shadow-soft hover:shadow-lift hover:border-primary-action transition-all"
            aria-label="Next awards"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Awards Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
            >
              {awards.map((award, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-4">
                  <div className="card-base p-10 h-full">
                    <div className="w-14 h-14 bg-primary-soft rounded-xl flex items-center justify-center text-primary-deep mb-8">
                      {award.icon}
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-soft text-primary-deep text-[10px] font-bold uppercase tracking-wider mb-4">
                      {award.year}
                    </span>
                    <h3 className="text-xl font-bold text-text-main mb-3 leading-tight">
                      {award.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-6">
                      {award.description}
                    </p>
                    {award.fund && (
                       <p className="text-xs font-semibold text-primary-action flex items-center gap-2">
                         <span className="w-1 h-1 rounded-full bg-primary-action"></span>
                         {award.fund}
                       </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: Math.max(1, awards.length - 2) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "w-8 bg-primary-deep" : "w-2 bg-border-light"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            )}
          </div>
        </div>

        {/* Mobile View - Stacked Cards */}
        <div className="md:hidden space-y-6">
          {awards.map((award, index) => (
            <div key={index} className="card-base p-8">
              <div className="w-12 h-12 bg-primary-soft rounded-lg flex items-center justify-center text-primary-deep mb-6">
                {award.icon}
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-text-main pr-4">
                  {award.title}
                </h3>
                <span className="flex-shrink-0 px-2.5 py-1 rounded-full bg-primary-soft text-primary-deep text-[10px] font-bold uppercase tracking-wider">
                  {award.year}
                </span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                {award.description}
              </p>
              {award.fund && (
                 <p className="text-xs font-semibold text-primary-action">
                   {award.fund}
                 </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
