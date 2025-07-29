import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <section>
        <div className='container py-[150px]'>
            <div className='grid grid-cols-2 text-white'>
                <div className='flex flex-col gap-[40px]'>
                    <h2 className='text-80'>Our Services</h2>
                    <h4 className='text-30'>At Quaddream, We offer Rentals and Sales to suit your requirement and Budget.</h4>
                    <p className='text-19'>Quaddream is committed to your project’s success and budget. With flexible rental and sales 
                        options for high-quality materials, we ensure smooth execution—whether you need temporary equipment 
                        or a permanent solution. Partner with us for reliable results within your financial goals.
                    </p>
                </div>
                <div className='flex flex-col w-full gap-3 h-fit'>
                    <div className='grid grid-cols-5 gap-3'>
                    <div className='relative rounded-2xl col-span-2'>
                        <Image src="/assets/home/service-1.jpg" alt="Services" width={500} height={300} className='h-full w-full rounded-xl'/>
                        <div className='absolute bottom-0 left-0'>
                        <h3 className='text-33'>High-Quality Materials</h3>
                        <button>Explore</button>
                        </div>
                    </div>
                    <div className='relative col-span-3'>
                        <Image src="/assets/home/service-2.jpg" alt="Services" width={500} height={500} className='h-full w-full'/>
                        <div className='absolute bottom-0 left-0'>
                        <h3 className='text-33'>Cuplock Scaffolding & Aluminum Mobile Tower Rental & Sales</h3>
                        <button>Explore</button>
                        </div>
                    </div>
                    </div>
                    <div className='grid grid-cols-5 gap-3'>
                    <div className='col-span-3 relative'>
                        <Image src="/assets/home/service-3.jpg" alt="Services" width={500} height={500} className='h-full w-full'/>
                        <div className='absolute bottom-0 left-0'>
                        <h3 className='text-33'>Scaffolding Formwork</h3>
                        <button>Explore</button>
                        </div>
                    </div>
                    <div className='col-span-2 relative'>
                        <Image src="/assets/home/service-4.jpg" alt="Services" width={500} height={500} className='h-full w-full'/>
                        <div className='absolute bottom-0 left-0'>
                        <h3 className='text-33'>Equipment Rentals</h3>
                        <button>Explore</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services