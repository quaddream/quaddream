import React from 'react'
import Banner from './sections/Banner'
import Commitment from './sections/Commitment'
import Services from './sections/Services'
import HomeTicker from './sections/HomeTicker'

const Index = () => {
  
  return (
   <div className='bg-black'>
    <Banner/>
    <Commitment/>
    <HomeTicker/>
    <Services/>
   </div>
  )
}

export default Index