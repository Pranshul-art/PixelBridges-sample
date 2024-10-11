import React,{useState} from "react";
import { ImgGrid } from "./ImgGrid";

export const Gallery=()=>{
    const [filter, setFilter] = useState("ALL"); // Filter can be ALL, IMAGES, or VIDEOS
    const [currentPage, setCurrentPage] = useState(0); // Pagination control
  
    const handleFilterChange = (newFilter) => {
      setFilter(newFilter);
      setCurrentPage(0); // Reset to the first page when filter changes
    };
    return(
        <div>
            <div className="flex justify-center p-1 mx-96 font-semibold antialiased">
                <button className={`p-2 px-6 ${filter === "ALL" ? "text-yellow-500" : ""}`} onClick={() => handleFilterChange("ALL")}>ALL</button>
                <button className={`p-2 px-4 ${filter === "IMAGES" ? "text-yellow-500" : ""}`} onClick={() => handleFilterChange("IMAGES")}>IMAGES</button>
                <button className={`p-2 px-4 ${filter === "VIDEOS" ? "text-yellow-500" : ""}`} onClick={() => handleFilterChange("VIDEOS")}>VIDEOS</button>
            </div>
            <ImgGrid filter={filter} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}