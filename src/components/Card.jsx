import React from 'react';

const Card = ({ image, title, description, bgColor }) => {
  return (
    <div className={`relative w-1/4 h-96 rounded-lg shadow-lg overflow-hidden ${bgColor}`}>
         {/* Title and Description */}
         
      <div className="text-center mt-4  mb-10">
        <h2 className="text-white text-xl font-bold">{title}</h2>
        <p className="text-white mt-2">{description}</p>
      </div>
      {/* Image Section */}
      <div className="flex justify-center mt-3">
        <img src={image} alt="Character" className="h-56 w-40 transparent" />
      </div>

     

      {/* Bottom Fade Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white"></div>
    </div>
  );
};

export default Card;
