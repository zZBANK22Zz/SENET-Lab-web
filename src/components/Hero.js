import { LibraryBig } from "lucide-react";
import Router from "next/router";
import PhotoSlideshow from "./PhotoSlideShow";

export default function Hero() {
  return (
    <section className="bg-gradient-light py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient mb-6 lg:mb-8 leading-tight">
              SEnet Research Lab
            </h1>
            <p className="text-lg sm:text-xl text-blue-700 mb-8 lg:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Advancing the frontiers of Software Engineering and Network
              technologies through innovative research and cutting-edge
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={() => {Router.push('/ResearchPage')}} className="bg-gradient-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:shadow-primary transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                <LibraryBig />
                Our Research
              </button>
              <button onClick={() => {Router.push('/JoinUs')}} className="border-2 border-blue-300 text-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:border-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                Join our Team
              </button>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <PhotoSlideshow />
          </div>
        </div>
      </div>
    </section>
  );
}
