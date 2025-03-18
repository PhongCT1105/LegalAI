// src/components/Carousel.tsx
import React, { useState } from "react";

interface Slide {
  title: string;
  description: string;
  image?: string; // optional, if you want images
}

const slidesData: Slide[] = [
  {
    title: "Slide One",
    description: "This is the first slide. You can customize it with any content."
  },
  {
    title: "Slide Two",
    description: "This is the second slide. Replace or extend these slides as needed."
  },
  {
    title: "Slide Three",
    description: "This is the third slide. You can also add images if you want."
  }
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-md bg-white shadow-lg rounded-lg p-6">
      {/* Slide Content */}
      <div className="text-center">
        <h3 className="font-semibold text-xl mb-2">
          {slidesData[currentIndex].title}
        </h3>
        <p className="text-gray-700">{slidesData[currentIndex].description}</p>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full p-2 transition"
      >
        ◀
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full p-2 transition"
      >
        ▶
      </button>

      {/* Indicators (Optional) */}
      <div className="flex justify-center space-x-2 mt-4">
        {slidesData.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-[#A27D5C]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
