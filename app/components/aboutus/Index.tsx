import React from 'react'
import BannerInner from './sections/BannerInner' 
import Commitment from './sections/Commitment' 
/* import ProjectSwiperSlider from './sections/ProjectSwiper' */
import {bannersection } from "./data"; 
const Index = () => {
  return (
   <div className='bg-black'>
    <BannerInner bannerData={bannersection.data}/>
    <Commitment/>
    
   </div>
  )
}

export default Index