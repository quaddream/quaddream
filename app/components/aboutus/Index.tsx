'use client'
import React from 'react'
import BannerInner from '../common/BannerInner' 
import About from './sections/About' 
import Methodology from './sections/Methodology' 
import Mission from './sections/Mission' 
import OurJourney from './sections/OurJourney' 
import CoreValue from './sections/CoreValue' 
import CTA from '../common/cta'  
import { aboutus } from './type' 
  
  const Index = async ({ data}: { data: aboutus  }) => {  
    console.log(data)
  return (
   <>
    <BannerInner bannerData={data.bannerSection}/>
    <About data={data.firstSection}/>
    <Methodology data={data.secondSection}/>
    <Mission data={data.thirdSection}/>
    <CoreValue data={data.fourthSection}/>
    <OurJourney data={data.historySection}/>
    <CTA
    maxwidth={17}
   {...data.sixthSection}
          />
         

    
   </>
  )
}

export default Index