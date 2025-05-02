import React, { useState, useEffect } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? slides.length - 1 : currentIndex - 1);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden group">
      {/* Slide Image */}
      <div className="w-full h-full duration-500">
        <img
          src={slides[currentIndex].url}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Navigation Arrows */}
      <div
        onClick={goToPrev}
        className="hidden group-hover:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full cursor-pointer"
      >
        ❰
      </div>
      <div
        onClick={goToNext}
        className="hidden group-hover:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full cursor-pointer"
      >
        ❱
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center absolute bottom-4 w-full">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`mx-1 cursor-pointer text-2xl ${
              slideIndex === currentIndex ? "text-white" : "text-gray-400"
            }`}
          >
            •
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;