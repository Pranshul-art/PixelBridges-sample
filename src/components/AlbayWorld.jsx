import React from 'react';


const AlabayWorld = () => {
  return (
    <div className="relative min-h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: 'first.png' }}>
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Alabay World</h1>
        <p className="mt-4 text-lg md:text-xl">
          Where the legendary Central Asian Shepherd Dog meets a new-age adventure. 
          Join us in celebrating the strength, loyalty, and heritage of the Alabay breed.
        </p>
      </div>
      <div className="relative z-10 mt-16 p-10">
        {/* Scrollable content starts here */}
        <div className="overflow-auto max-h-screen space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">About Alabay Breed</h2>
            <p>The Alabay breed is known for its strength and loyalty...</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Heritage and History</h2>
            <p>Learn about the rich history of this ancient dog breed...</p>
          </div>
          {/* Add more content blocks as needed */}
        </div>
      </div>
    </div>
  );
};

export default AlabayWorld;
