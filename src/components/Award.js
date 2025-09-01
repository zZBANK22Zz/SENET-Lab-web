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
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
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
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
            Awards & Recognition
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Our achievements in research excellence and innovation
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Previous awards"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Next awards"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Awards Cards */}
          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
            >
              {awards.map((award, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 mb-6">
                      {award.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {award.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 mb-4">
                      {award.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.max(1, awards.length - 2) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? "bg-gray-900" : "bg-gray-300"
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
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 mb-4 sm:mb-6">
                {award.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {award.title}
              </h3>
              <p className="text-sm font-medium text-gray-500 mb-3 sm:mb-4">
                {award.subtitle}
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
