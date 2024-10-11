import ProjectVision from "./ProjectVision";
import RoadMap from "./RoadMap";

export const Combined = () => {
  return (
    
    <div className=" relative bg-white overflow-hidden ">
      {/* Slanted background */}
      
      <div className="absolute top-0 left-[-200px] w-[250%] h-screen transform -skew-y-3 bg-yellow-300 z-0 "></div>
        
      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center py-20">
        {/* Project Vision Section */}
        
        <ProjectVision />

        {/* Road Map Section */}
       
        
        <RoadMap />
        
      </div>
      
      
    </div>
  );
};
