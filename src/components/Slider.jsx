import React from 'react';

const ImageSlider = () => {
  return (
    <div className="relative w-full h-64 bg-pink-200 rounded-lg shadow-lg overflow-hidden">
      {/* Merchandise Image */}
      <img
        src="pink tshirt.png" // Use your image path here
        alt="Merchandise"
        className="w-full h-full object-cover"
      />

      {/* Left and Right Arrows (For future sliding functionality) */}
      <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
        {/* Left Arrow */}
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>

      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
        {/* Right Arrow */}
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      {/* Coming Soon Overlay */}
      <div className="absolute top-2 right-4 text-white font-bold text-lg">Coming Soon...</div>

      {/* Bottom Button */}
      <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-4 rounded-full shadow-md">
        Discover
      </button>
    </div>
  );
};

export default ImageSlider;
