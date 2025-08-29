import React from 'react'
import BannerInner from '../common/BannerInner'  
import Comprehensive from './sections/Comprehensive'
import CoreServices from './sections/CoreServices'   
import {bannersection,methodologysection,coresection } from "./data";  
const Index = () => {
  return (
   <>
    <BannerInner bannerData={bannersection.data}/> 
    <Comprehensive Data={methodologysection.data} titlewidth={17}/>
    <CoreServices Data={coresection.data}/>
   
    
         

    
   </>
  )
}

export default Index