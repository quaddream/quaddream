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
import { partnersSection ,ctaSection ,projects } from "./data";
const Index = () => {
  return (
   <div className='bg-black'>
    <Banner/>
    <Commitment/>
    <HomeTicker/>
    <Services/>
    <IndustriesList/>
    <WhyChoose/>
    <ProjectSwiperSlider projects={projects.portfolio.projects} title={projects.portfolio.title} buttonLink={projects.portfolio.buttonLink} buttonText={projects.portfolio.buttonText}/>
    <OurPartners   title={partnersSection.title}
        description={partnersSection.description}
        items={partnersSection.items} bgImg={partnersSection.bgImg}/>
    <CTA title={ctaSection.title} description={ctaSection.description} buttonLink={ctaSection.buttonLink} buttonText={ctaSection.buttonText} bgImg={ctaSection.bgImg}/>
   </div>
  )
}

export default Index