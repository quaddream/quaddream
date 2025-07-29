import React from 'react'
import Banner from './sections/Banner'
import Commitment from './sections/Commitment'
import Services from './sections/Services'
import HomeTicker from './sections/HomeTicker'
import CTA from './sections/Cta'
import OurPartner from './sections/OurPartners'

const Index = () => {
  
  return (
   <div className='bg-black'>
    <Banner/>
    <Commitment/>
    <HomeTicker/>
    <Services/>
    <OurPartner/>
    <CTA/>
   </div>
  )
}

export default Index