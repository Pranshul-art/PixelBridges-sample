import React from 'react';

const AlabayHistory = () => {
  return (
    <div className="relative  bg-white h-screen flex items-center justify-center overflow-hidden ">
      {/* Slanted background */}
      <div className="absolute  top-0 left-[-100px] w-[300%] h-full transform skew-y-12 bg-yellow-300 z-0"></div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start  p-6">
        {/* Dog image */}
        <div className="w- h-80 mb-8 sm:mb-0 sm:mr-8">
          <img
            src="third.png"
            alt="Alabay Dog"
            className="w-full h-auto "
          />
        </div>

        {/* Text content */}
        <div className=" sm:text-left text-white max-w-lg">
          <h1 className="text-5xl font-bold mb-2 text-right">History Of</h1>
          <h2 className="text-8xl font-bold text-right text-yellow-800 mb-4 font-mono">ALABAY</h2>
          <p className="text-lg font-black text-left pb-24">
            The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlabayHistory;
