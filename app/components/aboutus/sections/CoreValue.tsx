'use client'
import React from 'react'
import Image from 'next/image'
 
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
        <section className='py-150   relative bg-black  '>
            <div className='container '>
                <div>
                    <h2 className='text-80 leading-[1.125] mb-5 md:mb-8 lg:mb-10 text-white  '>{Data[0].heading}</h2>
                    <p className='text-lite-gray text-19 leading-[1.684210526315789]   max-w-[75ch] mb-5 lg:mb-7'>{Data[0].subheading}</p>
                </div>
                <div className="grid grid-cols-2 xs:grid-cols-2 xl:flex gap-5 lg:gap-5 2xl:gap-20">
  {Data[0].items.map((item, index) => (
    <div key={index} className="group flex items-center gap-10 sm:gap-20">
      <div className="transition-all duration-300">
        <div className="flex items-center gap-3 sm:gap-7">
          <div className="w-[40px] h-[40px] md:w-[67px] md:h-[67px] md:rounded-lg rounded-sm bg-primary flex items-center justify-center">
            <Image src={item.icon} alt={item.title} width={32} height={32} className='w-[40px] h-[40px] md:w-[67px] md:h-[67px]' />
          </div>
          <h3 className="relative xl:top-[13px] text-20 md:text-33 leading-[1] font-light text-white transition-all duration-300 max-w-[15ch]">
            {item.title}
          </h3>
        </div>
      </div>

      {index < Data[0].items.length - 1 && (
        <div className="hidden xl:block border-r border-[#BEBEBE] h-full w-[1px]" />
      )}
    </div>
  ))}
</div>

 
                
            </div> 
            
        </section>
    )
}

export default CoreValue
