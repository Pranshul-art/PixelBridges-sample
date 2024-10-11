import AlabayHistory from "./AlabayHistory"
import { CardGrid } from "./CardGrid"
import { Combined } from "./CombinedVAndR"
import { Gallery } from "./Gallery"
import TokenomicsCard from "./Tokenomics"


function Main() {
  

  return (
    <div>
      {/* <VideoAndImgCard thumbImage='first.png'/> */}
      <div className='  '><AlabayHistory/></div>
      <div className='h-full w-200 '><Gallery/></div>
      <h1 className="text-6xl font-bold text-yellow-900 mb-6 flex justify-center py-24">PROJECT VISION</h1>
      
        
      <div><Combined/></div>
      <div className='mx-4'><CardGrid/></div>
     
      <div className="mt-44  ">
        <TokenomicsCard />
      </div>
     
      
    </div>
  )
}

export default Main
