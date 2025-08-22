'use client'
import React, {  useState } from 'react' 
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"  
import Link from 'next/link'
type Navigation = {
  title: string;
  slug: string;
}
type ServicesItem = {
  title: string;
  bgImg: string;  
  navigation: Navigation[];
}
type BannerProps = {
  bannerData: ServicesItem[]; 
  
};
  
  const BannerInner: React.FC<BannerProps> = ({   bannerData }) => {
    
  return (
    <section className=' pt-[349px] pb-[70px] bg-image bg-cover bg-center bg-no-repeat  relative z-[1] hero overlaybanner ' style={{backgroundImage: `url(${bannerData[0].bgImg})`}}>
       <div className="relative z-10">
       <div className='container h-full '>
      <div><h1 className='text-white text-75 leading-[1.07] pb-3 border-b-[.5px] border-white'>{bannerData[0].title}</h1></div>
      <div className='pt-[135px] pb-[100px]'>
      
        <ul className='flex gap-4 items-center'  >
          <li className='text-primary'>{bannerData[0].navigation[0].title}</li>
          <li><p className='w-[6px] h-[6px] bg-[#D9D9D9] rounded-full m-0'></p></li>
          <li className='text-lite-gray'><Link href={bannerData[0].navigation[1].slug}>{bannerData[0].navigation[1].title}</Link></li>
        </ul> 
      </div>
      </div>
       </div>
      
    </section>
  )
}

export default BannerInner