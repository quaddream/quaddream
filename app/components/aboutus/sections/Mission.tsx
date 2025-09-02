'use client'
import React from 'react'
import Image from 'next/image'

 
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
 
  const Mission: React.FC<MissionProps> = ({   Data }) => { 
   

    return (
        <section className='py-150 rounded-t-2xl 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative  '>
            <div className='container '>
                <div>
                    <h2 className='text-80 leading-[1.125] mb-7 md:mb-10  text-black'>{Data[0].heading}</h2>
                </div>
                <div className='grid md:grid-cols-2 gap-8 md:gap-10 xl:gap-17 '>
                    {Data[0].items.map((item,index)=>(
                        <div key={index} className='group'>
                            
                                <div className='border-b-1   border-lite-gray    pb-3 mb-4 md:mb-7 transition-all duration-300' >
                                    <div className='flex items-baseline gap-3 md:gap-5 '>
                                    <div className='w-[45px] h-[45px] lg:w-[67px] lg:h-[67px] rounded-xl bg-primary flex items-center justify-center'>
                                    <Image src={item.icon} alt={item.title} width={32} height={32} className='w-[18px] h-[18px] lg:w-[32px] lg:h-[32px]'  />
                                    </div>
                                    <h3 className='text-black relative xl:top-4 text-30 leading-[1] font-400   transition-all duration-300 max-w-[15ch]'>{item.title}</h3>
                                    </div>
                                    
                                    <div className='w-0 h-[3px] bg-primary rounded-full m-0  group-hover:w-full transition-all duration-300 relative top-[14px]'></div>
                                </div>
                                <div>
                                    <p className='text-gray-para text-19 leading-[1.684210526315789] mb-0'>{item.desc}</p>
                                </div> 
                        </div>
                    ))}
                </div>
 
                
            </div> 
            
        </section>
    )
}

export default Mission
