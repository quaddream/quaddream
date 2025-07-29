import React from 'react'
import Banner from './sections/Banner'
import Commitment from './sections/Commitment'
import Services from './sections/Services'

const Index = () => {
  return (
   <div className='bg-black'>
    <Banner/>
    <Commitment/>
    <Services/>
   </div>
  )
}

export default Index