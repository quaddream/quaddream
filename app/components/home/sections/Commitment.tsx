import React from 'react'
import Image from 'next/image'

const Commitment = () => {
  return (
    <section className='py-[150px] rounded-tl-[80px] rounded-tr-[80px] relative z-[50] bg-white mt-[-4.5%]'>
        <Image src="/assets/home/commitment-bg.png" alt="Commitment" width={900} height={500} className='absolute top-[150px] -left-[60px] h-[80%] z-20'/>
        <div className='container flex flex-col gap-[150px]'>
            <div className='grid grid-cols-5 w-full'>
                <div className='col-span-1 mt-6'>
                    <button className='border border-primary rounded-full py-[5px] px-[12px] text-nowrap cursor-pointer flex items-center gap-2 text-19 w-[163px] overflow-x-hidden'>About Us <div className='bg-black w-[5px] h-[5px] rounded-full'></div> About Us</button>
                </div>
                <div className='col-span-4 flex flex-col gap-10'>
                      <h2 className='text-65 leading-[1.153846153846154]'>With a commitment to safety, reliability, <span className='text-[#bebebe]'>and technical excellence.</span></h2>
                    <p className='text-19 text-[#7f7f7f] leading-[1.684210526315789]'>Quad Dream Scaffolding LLC offers reliable, high-quality scaffolding solutions across the UAE, 
                        supporting construction and industrial projects with safe, flexible, and fully compliant services — 
                        from design to dismantling.
                    </p>
                    <button className='flex items-center gap-2 cursor-pointer text-16 border-2 border-black p-[10px] rounded-[60px] w-fit z-10'>Learn More About Us <span className='bg-primary p-[14px] rounded-full'><Image src="/assets/images/home/arrow-right.svg" alt="Arrow" width={30} height={30} /></span></button>
                </div>
            </div>
            <div className='flex justify-between w-full items-center'>
                <div className='flex flex-col gap-2'>
                    <Image src="/assets/images/home/cmt-1.svg" alt="Commitment" width={50} height={50}/>
                    <h3 className='text-75'>21,000<span className='text-primary'>+</span></h3>
                    <p className='text-19'>Work Completed</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <Image src="/assets/images/home/cmt-2.svg" alt="Commitment" width={50} height={50}/>
                    <h3 className='text-75'>110<span className='text-primary'>+</span></h3>
                    <p className='text-19'>Employees</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <Image src="/assets/images/home/cmt-3.svg" alt="Commitment" width={50} height={50}/>
                    <h3 className='text-75'>100<span className='text-primary'>+</span></h3>
                    <p className='text-19'>Clients</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <Image src="/assets/images/home/cmt-4.svg" alt="Commitment" width={50} height={50}/>
                    <h3 className='text-75'>2012</h3>
                    <p className='text-19'>Year Established</p>
                </div>
            </div>
        </div>
            <div className="h-[230px] w-full bg-[linear-gradient(to_top,_white_50%,_transparent_90%)] absolute bottom-0 z-30"></div>
    </section>
  )
}

export default Commitment