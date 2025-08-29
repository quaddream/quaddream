import React from 'react'
import BannerInner from '../common/BannerInner'  
import GetInTouch from './sections/GetInTouch' 
import {bannersection,getintouch } from "./data";  
const Index = () => {
  return (
   <>
    <BannerInner bannerData={bannersection.data}/> 
    <GetInTouch Data={getintouch.data} titlewidth={17}/> 
   
    
         

    
   </>
  )
}

export default Index