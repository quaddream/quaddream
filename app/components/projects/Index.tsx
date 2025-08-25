import React from 'react'
import BannerInner from '../common/BannerInner'  
import FeaturedPjt from './sections/FeaturedPjt' 
import {bannersection,FeaturedPjtdata,ctaSection } from "./data"; 
import CTA from '../common/cta' 
const Index = () => {
  return (
   <>
    <BannerInner bannerData={bannersection.data}/>  
    <FeaturedPjt Data={FeaturedPjtdata.data}/>
  <CTA
            maxwidth={12}
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