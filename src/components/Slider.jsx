import React, { useState } from 'react';

const ImageSlider = () => {
  // Array of image sources
  const images = [
    { src: 'pink tshirt.png', alt: 'Pink T-shirt' },
    { src: 'black hoodie.png', alt: 'Blue T-shirt' },
    { src: 'yellow tshirt.png', alt: 'Green T-shirt' },
    { src: 'cap mockup.png', alt: 'Green T-shirt' }
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-full bg-pink-200 rounded-lg shadow-lg overflow-hidden">
      {/* Merchandise Image */}
      <img
        src={images[currentIndex].src} // Display the current image
        alt={images[currentIndex].alt} // Alt text for the image
        className="w-full h-full object-cover"
      />

      {/* Left and Right Arrows for Sliding */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        onClick={prevSlide} // Go to the previous image on click
      >
        {/* Left Arrow */}
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>

      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        onClick={nextSlide} // Go to the next image on click
      >
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
