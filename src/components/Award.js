import { useState } from 'react'

export default function Awards() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const awards = [
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5,16L3,14V8.5C3,7.67 3.67,7 4.5,7H8V5.5C8,4.67 8.67,4 9.5,4H14.5C15.33,4 16,4.67 16,5.5V7H19.5C20.33,7 21,7.67 21,8.5V14L19,16H5M12,2A1,1 0 0,1 13,3A1,1 0 0,1 12,4A1,1 0 0,1 11,3A1,1 0 0,1 12,2Z"/>
        </svg>
      ),
      title: "Best Research Paper",
      subtitle: "IEEE Conference 2023",
      description: "Outstanding contribution to network security protocols and implementation strategies."
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z"/>
        </svg>
      ),
      title: "Innovation Award",
      subtitle: "TechExcellence 2024",
      description: "Recognition for breakthrough AI-driven software testing methodologies."
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11M12,9A1,1 0 0,1 11,8A1,1 0 0,1 12,7A1,1 0 0,1 13,8A1,1 0 0,1 12,9Z"/>
        </svg>
      ),
      title: "Excellence Grant",
      subtitle: "Research Foundation 2024",
      description: "Funding award for cloud computing infrastructure research project."
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, awards.length - 2))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, awards.length - 2)) % Math.max(1, awards.length - 2))
  }

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
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Next awards"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
            {Array.from({ length: Math.max(1, awards.length - 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-gray-900' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
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
  )
}