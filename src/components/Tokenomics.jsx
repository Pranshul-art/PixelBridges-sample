import React from 'react';
import Merchandise from './Merchandise';

const TokenomicsCard = () => {
  return (
    <div>
        <div className='relative  bg-white h-screen flex items-center justify-center overflow-hidden'>
        <div className="absolute  top-0 left-0 w-[300%] h-full transform -skew-y-12 bg-yellow-300 z-0"></div>
        
        <div className="relative  bg-yellow-300  p-6 mt-64 overflow-hidden">
      {/* Heading */}
      
      <h1 className="text-6xl font-bold uppercase text-white mb-4 text-center">
        Tokenomics
      </h1>
      <div className='flex justify-between'>
            {/* Content Section */}
      <div className="space-y-4 pt-10">
        <div className="bg-black text-white p-3 rounded-lg flex justify-between items-center">
          <span className="text-sm">Liquidity</span>
          <span className="text-sm font-bold">Locked</span>
        </div>
        <div className="bg-black text-white p-3 rounded-lg flex justify-between items-center">
          <span className="text-sm pr-4">Contract</span>
          <span className="text-sm font-bold">Renounced</span>
        </div>
        <div className="bg-black text-white p-3 rounded-lg flex justify-between items-center">
          <span className="text-sm">Taxes</span>
          <span className="text-sm font-bold">0%</span>
        </div>
      </div>

      {/* Character Image */}
      <div className="relative mt-7 ml-40">
        <img
          src="fifth.png" // Add your image path here
          alt="Character"
          className=" w-72 h-72 mx-auto object-cover"
        />
      </div>
      </div>

      

      {/* Fading Effect at the bottom */}
      
    </div>
    </div>
    
    <div className='relative  bg-white h-screen flex items-center justify-center overflow-hidden'>
        <div className="absolute  top-0 left-0 w-[300%] h-72 transform skew-y-12 bg-yellow-300 z-0"></div>
    </div>
    <div className=" ">
        <Merchandise />
      </div>
    </div>
  );
};

export default TokenomicsCard;
