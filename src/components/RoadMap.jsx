import React from 'react';

const RoadMap = () => {
  return (
    <div className='mt-20'>

         <h1 className="text-6xl  font-bold text-yellow-900 mt-3 my-6 pl-6">ROAD MAP</h1>
         <div className=" py-12 flex flex-cols-3">
      {/* Title */}
        
      {/* Dog image */}
      {/* Description */}
      <p className="text-lg font-semibold text-gray-700  mx-16 justify-start mt-40">
        Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store.<br/>
        <span className='text-yellow-500 font-bold'>Join us as we grow and achieve new heights</span>
      </p>
      
      <div className=" mb-6 flex justify-end ">
        <img
          src="ninth.png"  // Replace with your image path
          alt="Dog with Signpost"
          className="w-3/3  "
        />
      </div>


      
    </div>
        
    </div>
    
  );
};

export default RoadMap;
