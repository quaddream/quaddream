'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link' 
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
 
type items={
    icon:string,
    title:string,
    desc:string
}
type datapop={
    heading:string,
    items:items[];
}
type MissionProps = {
    Data:datapop[];
}
 
  const FeaturedPjt: React.FC<MissionProps> = ({   Data }) => { 
   

    return (
        <section className='py-150 rounded-t-2xl 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative  '>
            <div className='container '>
                <div>
                    <h2 className='text-80 leading-[1.125] mb-10  '>{Data[0].heading}</h2>
                </div>
                <div className='grid md:grid-cols-2 gap-5 '>
                    {Data[0].items.map((item,index)=>(
                        <div key={index} className='group'>
                            
                                <div className='border-b-1   border-lite-gray    pb-3 mb-7 transition-all duration-300' >
                                    <div className='flex items-baseline gap-5 '>
                                    <div className='w-[67px] h-[67px] rounded-2xl bg-primary flex items-center justify-center'>
                                    <Image src={item.icon} alt={item.title} width={32} height={32}  />
                                    </div>
                                    <h3 className='relative top-4 text-30 leading-[1] font-light   transition-all duration-300 max-w-[15ch]'>{item.title}</h3>
                                    </div>
                                    
                                    <div className='w-0 h-[3px] bg-primary rounded-full m-0  group-hover:w-full transition-all duration-300 relative top-[14px]'></div>
                                </div>
                                <div>
                                    <p className='text-[#696969] text-19 leading-[1.684210526315789] mb-0'>{item.desc}</p>
                                </div> 
                        </div>
                    ))}
                </div>
 
                
            </div> 
            
        </section>
    )
}

export default FeaturedPjt
