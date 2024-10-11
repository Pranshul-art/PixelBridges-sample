import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { VideoAndImgCard } from './components/VidAndImg'
import { ImgGrid } from './components/ImgGrid'
import { Gallery } from './components/Gallery'
import AlabayHistory from './components/AlabayHistory'
import ProjectVision from './components/ProjectVision'
import RoadMap from './components/RoadMap'
import { Combined } from './components/CombinedVAndR'
import { CardGrid } from './components/CardGrid'
import Tokenomics from './components/Tokenomics'
import Merchandise from './components/Merchandise'

function App() {
  

  return (
    <div>
      {/* <VideoAndImgCard thumbImage='first.png'/> */}
      <div className='  '><AlabayHistory/></div>
      <div className='h-full w-200 '><Gallery/></div>
      <h1 className="text-6xl font-bold text-yellow-900 mb-6 flex justify-center py-24">PROJECT VISION</h1>
      
        
      <div><Combined/></div>
      <div className='mx-4'><CardGrid/></div>
     
      <div className="mt-44 ">
        <Tokenomics />
      </div>
     
      
    </div>
  )
}

export default App
