import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/images/picture/Image1.png",
    caption: "Software engineering research at SENET Lab",
    tag: "Software",
  },
  {
    src: "/images/picture/Image2.png",
    caption: "Network infrastructure and systems work",
    tag: "Networks",
  },
];

const AUTOPLAY_DURATION = 5000;

export default function PhotoSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, AUTOPLAY_DURATION);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlay]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev + images.length - 1) % images.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {images.map((img, index) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className={`w-full h-full transition-transform duration-[12000ms] ease-linear ${
              index === currentSlide ? "scale-110" : "scale-100"
            }`}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "/images/logo/logo1.png";
                e.target.className = "w-full h-full object-contain p-20 opacity-20";
              }}
            />
          </div>
          <div className="absolute inset-0 bg-primary-deep/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-transparent to-primary-deep/35" />
        </div>
      ))}

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-40">
        <div
          key={`${currentSlide}-${isAutoPlay}`}
          className={`h-full bg-accent-warm ${isAutoPlay ? "animate-[progress_5s_linear_infinite]" : "w-0"}`}
          style={{
            animationDuration: `${AUTOPLAY_DURATION}ms`,
            animationPlayState: isAutoPlay ? "running" : "paused",
          }}
        />
      </div>

      <div className="absolute bottom-10 right-4 sm:right-8 z-30 flex items-center gap-2">
        <button
          type="button"
          onClick={goToPrevious}
          className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={goToNext}
          className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          aria-label="Next image"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {images.map((img, index) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide ? "w-6 h-1 bg-white" : "w-2 h-1 bg-white/30 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
