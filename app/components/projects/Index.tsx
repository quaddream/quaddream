import React from 'react'
import BannerInner from '../common/BannerInner'  
import FeaturedPjt from './sections/FeaturedPjt' 
import {bannersection,FeaturedPjtdata } from "./data"; 
const Index = () => {
  return (
   <>
    <BannerInner bannerData={bannersection.data}/>  
    {/* <FeaturedPjt Data={FeaturedPjtdata.data}/> */}
 

    
   </>
  )
}

export default Index