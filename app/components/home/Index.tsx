import React from 'react'
import Banner from './sections/Banner'
import Commitment from './sections/Commitment'
import Services from './sections/Services'
import HomeTicker from './sections/HomeTicker'
import CTA from './sections/cta'
import IndustriesList from './sections/IndustriesList'
import WhyChoose from './sections/WhyChoose'
const Index = () => {
  
  return (
   <div className='bg-black'>
    <Banner/>
    <Commitment/>
    <HomeTicker/>
    <Services/>
    <IndustriesList/>
    <WhyChoose/>
    <CTA/>
   </div>
  )
}

export default Index