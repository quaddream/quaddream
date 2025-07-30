import React from 'react'
import Banner from './sections/Banner'
import Commitment from './sections/Commitment'
import Services from './sections/Services'
import HomeTicker from './sections/HomeTicker'
import CTA from './sections/cta'
import IndustriesList from './sections/IndustriesList'
import WhyChoose from './sections/WhyChoose'
import OurPartners from './sections/OurPartners'
import ProjectSwiperSlider from './sections/ProjectSwiper'
const Index = () => {
  
  return (
   <div className='bg-black'>
    <Banner/>
    <Commitment/>
    <HomeTicker/>
    <Services/>
    <IndustriesList/>
    <WhyChoose/>
    <ProjectSwiperSlider/>
    <OurPartners/>
    <CTA/>
   </div>
  )
}

export default Index