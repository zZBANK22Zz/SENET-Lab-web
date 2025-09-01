import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export default function PhotoSlideshow() {
  // Add your image paths here - update these paths to match your actual image names
  const images = [
    '/images/picture/Image1.png', // Replace with your actual image names
    '/images/picture/Image2.png'  // Replace with your actual image names
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlay, images.length]);

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
    <div className="relative mt-8 lg:mt-0">
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-2">
        <div className="aspect-video bg-gray-200 rounded-lg relative overflow-hidden group">
          {/* Main Image */}
          <img 
            src={images[currentSlide]} 
            alt={`Slide ${currentSlide + 1}`} 
            className="w-full h-full object-cover transition-opacity duration-500"
            onError={(e) => {
              // Fallback to logo if image fails to load
              e.target.src = '/images/logo/logo1.png';
              e.target.className = 'object-contain h-48 sm:h-64 lg:h-72 mx-auto my-auto';
            }}
          />

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={toggleAutoPlay}
            className="absolute top-2 right-2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label={isAutoPlay ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlay ? <Pause size={16} /> : <Play size={16} />}
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentSlide 
                    ? 'bg-white' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {currentSlide + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
}