 'use client'
import React from 'react'
import BannerInner from '../common/BannerInner'  
import FeaturedPjt from './sections/FeaturedPjt'  
import CTA from '../common/cta'  
import { Projects,Location,sector } from './type' 
  const Index = async ({ data,locationdata,sectordata }: { data: Projects,locationdata: Location,sectordata: sector  }) => { 
  
  return (
   <>
    <BannerInner bannerData={data.bannerSection}/>  
    <FeaturedPjt   
    firstSection={data.firstSection}
    projectlist={data.projects} 
    locationdata={locationdata}
    sectordata={sectordata}
    />
  <CTA
            maxwidth={12}
           {...data.lastSection}
           />
          

    
   </>
  )
}

export default Index