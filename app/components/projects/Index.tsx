import React from 'react'
import BannerInner from '../common/BannerInner' 
import About from './sections/About' 
import Methodology from './sections/Methodology' 
import Mission from './sections/Mission' 
import CoreValue from './sections/CoreValue' 
import CTA from '../common/cta' 
import {bannersection,methodologysection,missionsection,corevaluesection,ctaSection } from "./data"; 
const Index = () => {
  return (
   <>
    <BannerInner bannerData={bannersection.data}/>
    <About/>
    <Methodology Data={methodologysection.data}/>
    <Mission Data={missionsection.data}/>
    <CoreValue Data={corevaluesection.data}/>
    <CTA
            title={ctaSection.title}
            description={ctaSection.description}
            buttonLink={ctaSection.buttonLink}
            buttonText={ctaSection.buttonText}
            bgImg={ctaSection.bgImg}
          />
         

    
   </>
  )
}

export default Index