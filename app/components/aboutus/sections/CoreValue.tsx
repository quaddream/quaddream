'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link' 
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
 
type items={
    icon:string,
    title:string, 
}
type datapop={
    heading:string,
    subheading:string,
    items:items[];
}
type MissionProps = {
    Data:datapop[];
}
 
  const CoreValue: React.FC<MissionProps> = ({   Data }) => { 
   

    return (
        <section className='py-150 rounded-t-2xl 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative bg-black  '>
            <div className='container '>
                <div>
                    <h2 className='text-80 leading-[1.125] mb-10 text-white  '>{Data[0].heading}</h2>
                    <p className='text-lite-gray text-19 leading-[1.684210526315789]   max-w-[75ch] mb-7'>{Data[0].subheading}</p>
                </div>
                <div className='flex gap-20  '>
                    {Data[0].items.map((item,index)=>(
                        <div key={index} className='group w-fit flex align-center gap-20'>
                            
                                <div className=' transition-all duration-300' >
                                    <div className='flex items-baseline gap-7 '>
                                    <div className='w-[67px] h-[67px] rounded-2xl bg-primary flex items-center justify-center'>
                                    <Image src={item.icon} alt={item.title} width={32} height={32}  />
                                    </div>
                                    <h3 className='relative  text-33 leading-[1] font-light  text-white transition-all duration-300 max-w-[15ch]'>{item.title}</h3>
                                    </div> 
                                </div> 
                                {index<Data[0].items.length-1 &&   
                                <div className='border-r-1   border-[#BEBEBE] h-full w-[1px] '> </div> 
                                }
                        </div>
                    ))}
                </div>
 
                
            </div> 
            
        </section>
    )
}

export default CoreValue
