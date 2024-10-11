import React from 'react';
import ImageSlider from './Slider'; // Import the Slider Component

const Merchandise = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white py-12">
      {/* Merchandise Title */}
      <h1 className="text-4xl font-bold text-yellow-500 uppercase mb-6">Merchandise</h1>

      {/* Slider Component */}
      <div className="w-full max-w-xl">
        <ImageSlider />
      </div>
    </div>
  );
};

export default Merchandise;
