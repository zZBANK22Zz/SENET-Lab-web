import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, ImageIcon } from 'lucide-react';

const images = [
  {
    src: '/images/picture/Image1.png',
    caption: 'Cutting-edge Research in Software Engineering',
    tag: 'Innovation'
  },
  {
    src: '/images/picture/Image2.png',
    caption: 'Advanced Network Infrastructure & Security',
    tag: 'Connectivity'
  }
];

const AUTOPLAY_DURATION = 5000; // 5 seconds

export default function PhotoSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, AUTOPLAY_DURATION);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlay]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Cinematic Background Images Layer */}
      {images.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Ken Burns Effect Container */}
          <div className={`w-full h-full transition-transform duration-[12000ms] ease-linear ${
            index === currentSlide ? 'scale-110' : 'scale-100'
          }`}>
            <img 
              src={img.src} 
              alt={img.caption} 
              className="w-full h-full object-cover"
              onLoad={() => setIsLoaded(true)}
              onError={(e) => {
                e.target.src = '/images/logo/logo1.png';
                e.target.className = 'w-full h-full object-contain p-20 opacity-20';
              }}
            />
          </div>

          {/* Deep Overlay Gradient for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 via-transparent to-primary-deep/40"></div>
        </div>
      ))}

      {/* Simplified Bottom Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-40">
        <div 
          key={`${currentSlide}-${isAutoPlay}`}
          className={`h-full bg-gradient-to-r from-primary-action to-blue-400 transition-all ${
            isAutoPlay ? 'animate-[progress_5s_linear_infinite]' : 'w-0'
          }`}
          style={{ 
            animationDuration: `${AUTOPLAY_DURATION}ms`,
            animationPlayState: isAutoPlay ? 'running' : 'paused'
          }}
        ></div>
      </div>

      {/* Discrete Side Controls */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 flex justify-between px-4 sm:px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <button
          onClick={goToPrevious}
          className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={goToNext}
          className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Minimal Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'w-6 h-1 bg-white' 
                : 'w-2 h-1 bg-white/30 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}