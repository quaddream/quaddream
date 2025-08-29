import React from 'react'
import BannerInner from '../common/BannerInner'  
import GetInTouch from './sections/GetInTouch' 
import Letstalk from './sections/Letstalk' 
import {bannersection,getintouch,letstalk } from "./data";  
const Index = () => {
  return (
   <>
    <BannerInner bannerData={bannersection.data}/> 
    <GetInTouch Data={getintouch.data} titlewidth={17}/> 
    <Letstalk Data={letstalk.data} titlewidth={17}/> 
   
    
         

    
   </>
  )
}

export default Index