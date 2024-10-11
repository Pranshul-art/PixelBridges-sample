import React,{useRef} from 'react'
//import { VideoAndImgCard } from './imgAndvidCard'
import { VideoAndImgCard } from './VidAndImg'
const Items = [
    { id: 1, image: "first.png", type: "VIDEO" },
    { id: 2, image: "second.png", type: "VIDEO" },
    { id: 3, image: "third.png", type: "IMAGE" },
    { id: 4, image: "seventh.png", type: "VIDEO" },
    { id: 5, image: "eigth.png", type: "IMAGE" },
    { id: 6, image: "ninth.png", type: "VIDEO" },
    { id: 7, image: "fourth.png", type: "IMAGE" },
    { id: 8, image: "fifth.png", type: "VIDEO" },
    { id: 9, image: "sixth.png", type: "IMAGE" },
     
  ];
  

export const  ImgGrid = ({ filter, currentPage, setCurrentPage })=>{
    const itemsPerPage = 3;
    const gridRef = useRef(null);

  // Filter items based on the selected filter
  const filteredItems = Items.filter((item) => {
    if (filter === "ALL") return true;
    if (filter === "IMAGES") return item.type === "IMAGE";
    if (filter === "VIDEOS") return item.type === "VIDEO";
    return false; // Default fallback
  });
  
    // Pagination logic: Slice the items to show only three at a time
    const startIndex = currentPage * itemsPerPage;
    const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);
  
    // Calculate if we have more pages to navigate
    const canGoLeft = currentPage > 0;
    const canGoRight = startIndex + itemsPerPage < filteredItems.length;
  
    const handleNext = () => {
        if (canGoRight) {
          setCurrentPage(currentPage + 1);
          if (gridRef.current) {
            gridRef.current.scrollBy({
              left: gridRef.current.offsetWidth, // Move horizontally by the width of the container
              behavior: 'smooth', // Smooth scroll behavior
            });
          }
        }
      };
    
      const handlePrev = () => {
        if (canGoLeft) {
          setCurrentPage(currentPage - 1);
          if (gridRef.current && gridRef.current.scrollLeft > 0) {
            gridRef.current.scrollBy({
              left: -gridRef.current.offsetWidth, // Move horizontally to the left
              behavior: 'smooth', // Smooth scroll behavior
            });
          }
        }
      };
    
    // return(
    //     <div className="grid grid-cols-1 md:grid-cols-3">        
    //         {Images.map(images=><div>
    //             <VideoAndImgCard thumbImage={images.image}/>
    //         </div>)}
    // </div>
    //)
    return (
        <div>
          <div className="flex justify-center items-center ">
            <button
              className={`p-2 h-12 w-12  ${!canGoLeft && "opacity-50"}`}
              onClick={handlePrev}
              disabled={!canGoLeft}
            >
              <img src='left-arrow-svgrepo-com.svg'/>
            </button>
    
            <div className="grid grid-cols-3 gap-4">
              {paginatedItems.map((item) => (
                <VideoAndImgCard key={item.id} thumbImage={item.image} />
              ))}
            </div>
    
            <button
              className={`p-2 h-12 w-12 ${!canGoRight && "opacity-50"}`}
              onClick={handleNext}
              disabled={!canGoRight}
            >
              <img src='right-arrow-svgrepo-com.svg'/>
            </button>
          </div>
        </div>
      );
    };
    


