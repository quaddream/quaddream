'use client'
import React from 'react' 
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"  
 
type ServicesItem = {
  title: string;
  bgImg: string;  
  description:string
}
type BannerProps = {
 Data: ServicesItem[]; 
  
};
  
  const Methodology: React.FC<BannerProps> = ({   Data }) => {
    
  return (
    <section >
   <div className="container">
    <div style={{backgroundImage: `url(${Data[0].bgImg})`}} className='bg-top-right  p-5 pt-30 md:p-8 md:pt-35 lg:p-17  lg:pt-[237px] relative rounded-xl z-10'>
    <div className='relative z-10  ' >
    <h2 className='text-white text-80 leading-[1.07] pb-6 md:pb-12 '>{Data[0].title}</h2>
    <p className='text-lite-gray text-19 leading-[1.684210526315789] mb-0'>{Data[0].description}</p>
    </div>
    <div className='rounded-xl overflow-hidden'>
    <div className='overlayimage rounded-xl'></div> 
    </div>
    </div>
   </div>
      
    </section>
  )
}

export default Methodology