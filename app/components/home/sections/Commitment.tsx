import React from 'react'
import Image from 'next/image'

const Commitment = () => {
  return (
    <section className='py-[150px] rounded-tl-[80px] rounded-tr-[80px] relative z-[50] bg-gray-200'>
        <Image src="/assets/home/commitment-bg.png" alt="Commitment" width={800} height={500} className='absolute top-[150px] left-0 h-full'/>
        <div className='container'>
            <div className='grid grid-cols-5 w-full'>
                <div className='col-span-1 mt-6'>
                    <button className='border border-primary rounded-full py-[5px] px-[12px] text-nowrap cursor-pointer flex items-center gap-2 text-19 w-[163px] overflow-x-hidden'>About Us <div className='bg-black w-[5px] h-[5px] rounded-full'></div> About Us</button>
                </div>
                <div className='col-span-4 flex flex-col gap-10'>
                    <h2 className='text-65'>With a commitment to safety, reliability, and technical excellence.</h2>
                    <p className='text-19'>Quad Dream Scaffolding LLC offers reliable, high-quality scaffolding solutions across the UAE, 
                        supporting construction and industrial projects with safe, flexible, and fully compliant services — 
                        from design to dismantling.
                    </p>
                    <button className='flex items-center gap-2 cursor-pointer text-16 border-2 border-black p-[10px] rounded-[60px] w-fit'>Learn More About Us <span className='bg-primary p-[14px] rounded-full'><Image src="/assets/home/arrow-right.svg" alt="Arrow" width={30} height={30} /></span></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Commitment