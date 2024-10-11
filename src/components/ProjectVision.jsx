import React from 'react';

const ProjectVision = () => {
  return (
    <div className="text-center  pb-10 bg-yellow-300">
      {/* Title */}
     

      {/* Dog image */}
      <div className="flex justify-center h-full ">
              <img
              src="fourth.png"  // Replace with your image path
              alt="Group of Dogs"
              className="w-3/4 sm:w-1/2 object-contain"
              />
        </div>

      {/* Description */}
      <p className=" text-yellow-900 max-w-xl mx-auto">
        Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.
      </p>
    </div>
  );
};

export default ProjectVision;
