 'use client'
import React from 'react'
import BannerInner from '../common/BannerInner'  
import FeaturedPjt from './sections/FeaturedPjt' 
import {bannersection,FeaturedPjtdata,ctaSection } from "./data"; 
import CTA from '../common/cta'  
import { Projects } from './type' 
  const Index = async ({ data}: { data: Projects  }) => { 
    console.log(data)
  return (
   <>
    <BannerInner bannerData={bannersection.data}/>  
    <FeaturedPjt Data={FeaturedPjtdata.data}/>
  <CTA
            maxwidth={12}
           {...data.lastSection}
           />
          

    
   </>
  )
}

export default Index