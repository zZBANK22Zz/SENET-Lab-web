import { LibraryBig } from "lucide-react";
import Router from "next/router";
import PhotoSlideshow from "./PhotoSlideShow";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary-deep">
      {/* Immersive Background Slideshow */}
      <PhotoSlideshow />
      
      {/* Hero Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center lg:text-left max-w-3xl">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold mb-8 tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Next-Gen Research Lab
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-8 leading-[1.05] tracking-tight drop-shadow-2xl">
            Software Engineering <br />
            <span className="text-blue-400">&</span> Network Lab
          </h1>
          
          <p className="text-xl sm:text-2xl text-blue-100/90 mb-12 leading-relaxed font-medium drop-shadow-lg max-w-2xl mx-auto lg:mx-0">
            Advancing the frontiers of technology through innovative research, 
            cutting-edge software solutions, and robust network infrastructures.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <button 
              onClick={() => {Router.push('/ResearchPage')}} 
              className="btn-primary-white py-4 px-10 text-lg shadow-2xl"
            >
              <LibraryBig size={22} />
              Explore Research
            </button>
            <button 
              onClick={() => {Router.push('/JoinUs')}} 
              className="px-10 py-4 rounded-xl border-2 border-white/30 text-white font-bold hover:bg-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-2 lg:text-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              Join the Team
            </button>
          </div>

          {/* Optional: Lab Stats or Partner Logos could go here in white */}
        </div>
      </div>

      {/* Elegant Bottom Scrim */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-white to-transparent z-10"></div>
    </section>
  );
}
