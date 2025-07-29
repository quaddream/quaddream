import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Services = () => {
    return (
        <section className='py-150'>
            <div className='container'>
                <div className='grid grid-cols-1 2xl:grid-cols-[auto_866.89px] 2xl:gap-[97.23px] text-white'>
                    <div className='flex flex-col gap-[40px]'>
                        <h2 className='text-80 leading-[1.125]'>Our Services</h2>
                        <h4 className='text-30 leading-[1.333333333333333]'>At Quaddream, We offer Rentals and Sales to suit your requirement and Budget.</h4>
                        <p className='text-19 leading-[1.684210526315789] text-[#bcbcbc]'>Quaddream is committed to your project’s success and budget. With flexible rental and sales
                            options for high-quality materials, we ensure smooth execution—whether you need temporary equipment
                            or a permanent solution. Partner with us for reliable results within your financial goals.
                        </p>
                    </div>
                    <div className='flex flex-col w-full gap-3 h-fit'>
                        <div className='grid grid-cols-5 2xl:grid-rows-[336px_339px] gap-3'>
                            <div className='relative col-span-2 overflow-hidden rounded-2xl p-8 flex flex-col group'>
                                <div className='absolute top-0 left-0 h-full w-full overflow-hidden'>
                                    <Image src="/assets/home/service-1.jpg" alt="Services" width={500} height={300} className='h-full w-full' />
                                </div>
                                <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black/50 group-hover:to-primary/75 transition-all duration-300 to-100% z-20'></div>
                                <div className='relative z-20 w-[53px] h-[53px] flex items-center justify-center bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M10.8472 1.14795L0.820141 11.175" stroke="white" strokeWidth="1.07432" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10.8472 8.50349V1.14795H3.49163" stroke="white" strokeWidth="1.07432" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className='relative z-30 mt-auto'>
                                    <h3 className='text-33 leading-[1.212121212121212] mb-25px'>High-Quality Materials</h3>
                                    <Link href="/" className="flex items-center gap-2 group cursor-pointer">
                                        <span>Explore</span> <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg" 
                                        className='group-hover:translate-x-2 transition-all duration-300'>
                                            <path d="M11.8843 1.2334L17.9543 7.3034L11.8843 13.3734" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" className='group-hover:stroke-primary transition-all duration-300' />
                                            <path d="M0.954102 7.30322H17.7841" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" className='group-hover:stroke-primary transition-all duration-300' />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className='relative col-span-3 overflow-hidden rounded-2xl p-8 flex flex-col group'>
                                <div className='absolute top-0 left-0 h-full w-full overflow-hidden'>
                                    <Image src="/assets/home/service-2.jpg" alt="Services" width={500} height={500} className='h-full w-full' />
                                </div>
                                <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black/50 to-100% group-hover:to-primary/75 transition-all duration-300 z-20'></div>
                                <div className='relative z-20 w-[53px] h-[53px] flex items-center justify-center bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8472 1.14795L0.820141 11.175" stroke="white" strokeWidth="1.07432" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10.8472 8.50349V1.14795H3.49163" stroke="white" strokeWidth="1.07432" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className='relative z-30 mt-auto'>
                                    <h3 className='text-33 leading-[1.212121212121212] mb-25px'>Cuplock Scaffolding & Aluminum Mobile Tower Rental & Sales</h3>
                                    <Link href="/" className="flex items-center gap-2 group cursor-pointer" >
                                        <span>Explore</span> <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg" 
                                        className='group-hover:translate-x-2 transition-all duration-300'>
                                            <path d="M11.8843 1.2334L17.9543 7.3034L11.8843 13.3734" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" className='group-hover:stroke-primary transition-all duration-300' />
                                            <path d="M0.954102 7.30322H17.7841" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" className='group-hover:stroke-primary transition-all duration-300' />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            <div className='col-span-3 relative overflow-hidden rounded-2xl p-8 flex flex-col   group'>
                                <div className='absolute top-0 left-0 h-full w-full overflow-hidden'>
                                    <Image src="/assets/home/service-3.jpg" alt="Services" width={500} height={500} className='h-full w-full' />
                                </div>
                                <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black/50 to-100% group-hover:to-primary/75 transition-all duration-300 z-20'></div>
                                <div className='relative z-20 w-[53px] h-[53px] flex items-center justify-center bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8472 1.14795L0.820141 11.175" stroke="white" strokeWidth="1.07432" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10.8472 8.50349V1.14795H3.49163" stroke="white" strokeWidth="1.07432" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className='relative z-30 mt-auto'>
                                    <h3 className='text-33 leading-[1.212121212121212] mb-25px'>Scaffolding <br /> Formwork</h3>
                                    <Link href="/" className="flex items-center gap-2 group cursor-pointer">
                                        <span>Explore</span> 
                                        <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg" 
                                        className='group-hover:translate-x-2 transition-all duration-300'>
                                            <path d="M11.8843 1.2334L17.9543 7.3034L11.8843 13.3734" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" className='group-hover:stroke-primary transition-all duration-300' />
                                            <path d="M0.954102 7.30322H17.7841" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" className='group-hover:stroke-primary transition-all duration-300' />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-span-2 relative overflow-hidden rounded-2xl p-8 flex flex-col group'>
                                <div className='absolute top-0 left-0 h-full w-full overflow-hidden'>
                                    <Image src="/assets/home/service-4.jpg" alt="Services" width={500} height={500} className='h-full w-full' />
                                </div>
                                <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black/50 to-100% group-hover:to-primary/75 transition-all duration-300 z-20'></div>
                                <div className='relative z-20 w-[53px] h-[53px] flex items-center justify-center bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8472 1.14795L0.820141 11.175" stroke="white" strokeWidth="1.07432" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10.8472 8.50349V1.14795H3.49163" stroke="white" strokeWidth="1.07432" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className='relative z-30 mt-auto'>
                                    <h3 className='text-33 leading-[1.212121212121212] mb-25px'>Equipment Rentals</h3>
                                    <Link href="/" className="flex items-center gap-2 group cursor-pointer">
                                        <span>Explore</span> <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg" 
                                        className='group-hover:translate-x-2 transition-all duration-300'>
                                            <path d="M11.8843 1.2334L17.9543 7.3034L11.8843 13.3734" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" className='group-hover:stroke-primary transition-all duration-300' />
                                            <path d="M0.954102 7.30322H17.7841" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" className='group-hover:stroke-primary transition-all duration-300' />
                                        </svg>
                                    </Link>
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