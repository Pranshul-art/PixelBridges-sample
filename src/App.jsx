import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { VideoAndImgCard } from './components/VidAndImg'
import { ImgGrid } from './components/ImgGrid'
import { Gallery } from './components/Gallery'
import AlabayHistory from './components/AlabayHistory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <VideoAndImgCard thumbImage='first.png'/> */}
      <div className='  '><AlabayHistory/></div>
      <div className='h-10 w-200'><Gallery/></div>
      
      
    </div>
  )
}

export default App
