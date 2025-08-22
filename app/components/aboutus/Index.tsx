import React from 'react'
import BannerInner from '../common/BannerInner' 
import About from './sections/About' 
import Methodology from './sections/Methodology' 
import Mission from './sections/Mission' 
import CoreValue from './sections/CoreValue' 
/* import ProjectSwiperSlider from './sections/ProjectSwiper' */
import {bannersection,methodologysection,missionsection,corevaluesection } from "./data"; 
const Index = () => {
  return (
   <>
    <BannerInner bannerData={bannersection.data}/>
    <About/>
    <Methodology Data={methodologysection.data}/>
    <Mission Data={missionsection.data}/>
    <CoreValue Data={corevaluesection.data}/>

    
   </>
  )
}

export default Index