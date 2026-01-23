import { LibraryBig } from "lucide-react";
import Router from "next/router";
import PhotoSlideshow from "./PhotoSlideShow";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-bg-off py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-soft text-primary-deep text-xs font-semibold mb-6 tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-action opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-deep"></span>
              </span>
              Next-Gen Research Lab
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-main mb-8 leading-[1.1] tracking-tight">
              Software Engineering <br />
              & <span className="text-gradient-official">Network</span> Lab
            </h1>
            
            <p className="text-lg sm:text-xl text-text-muted mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Advancing the frontiers of technology through innovative research, 
              cutting-edge software solutions, and robust network infrastructures.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => {Router.push('/ResearchPage')}} 
                className="btn-primary text-base shadow-lg shadow-primary-deep/10"
              >
                <LibraryBig size={20} />
                Explore Our Research
              </button>
              <button 
                onClick={() => {Router.push('/JoinUs')}} 
                className="btn-secondary text-base"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                Join the Team
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for partner logos or tech stacks if needed, or just spacers */}
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
             <div className="absolute -inset-4 bg-gradient-official opacity-10 blur-3xl rounded-[3rem] -z-10 animate-pulse"></div>
            <PhotoSlideshow />
          </div>
        </div>
      </div>
    </section>
  );
}
