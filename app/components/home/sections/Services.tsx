'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import {moveUp, containerStagger,paragraphItem} from '../../motionVarients'
const Services = () => {
    return (
        <section className='py-150 overflow-hidden bg-black'>
            <div className='container'>
                <div className='grid grid-cols-1 2xl:grid-cols-[auto_866.89px] 2xl:gap-[97.23px] text-white gap-y-5'>
                    <motion.div className='flex flex-col' variants={containerStagger} initial="hidden" whileInView="show" transition={{duration: 0.6}} viewport={{amount: 0.1, once: true}}>
                        <motion.h2 className='text-80 leading-[1.125] mb-50px' variants={moveUp(0.2)} initial="hidden" whileInView="show" transition={{duration: 0.6}} viewport={{amount: 0.1, once: true}}>Our Services</motion.h2>
                        <motion.h4 className='text-30 leading-[1.333333333333333] mb-4 xl:mb-[29.7px]' variants={moveUp(0.6)} initial="hidden" whileInView="show" transition={{duration: 0.6}} viewport={{amount: 0.1, once: true}}>At Quaddream, We offer Rentals and Sales to suit your requirement and Budget.</motion.h4>
                        <motion.p className='text-19 leading-[1.684210526315789] text-[#bcbcbc]' variants={moveUp(0.8)} initial="hidden" whileInView="show" transition={{duration: 0.6}} viewport={{amount: 0.1, once: true}}>Quaddream is committed to your project’s success and budget. With flexible rental and sales
                            options for high-quality materials, we ensure smooth execution—whether you need temporary equipment
                            or a permanent solution. Partner with us for reliable results within your financial goals.
                        </motion.p>
                    </motion.div>
                    <div className='flex flex-col w-full gap-3 h-fit'>
                        <motion.div className='grid grid-cols-2 xl:grid-cols-5 2xl:grid-rows-[336px_339px] gap-3' variants={containerStagger} initial="hidden" whileInView="show" transition={{duration: 0.6}} viewport={{amount: 0.1, once: true}}>
                            <motion.div className='relative col-span-2 overflow-hidden rounded-2xl p-8 flex flex-col group cursor-pointer' variants={moveUp(0.2)} initial="hidden" whileInView="show" transition={{duration: 0.6}} viewport={{amount: 0.1, once: true}}>
                                <div className='absolute top-0 left-0 h-full w-full overflow-hidden'>
                                    <Image src="/assets/images/home/service-1.jpg" alt="Services" width={500} height={300} className='object-cover h-full w-full group-hover:scale-110 transition-all duration-300' />
                                </div>
                                <div className='absolute bottom-0 left-0 h-full  w-full bg-gradient-to-b from-transparent to-black/50 to-100% group-hover:opacity-0 transition-all duration-300 z-20'></div>
                                <div className='absolute bottom-0 left-0 h-0 w-full bg-gradient-to-b from-transparent to-black/50 to-100% group-hover:to-primary/75 group-hover:h-full transition-all duration-300 z-20'></div>
                                <div className='relative z-20 w-[53px] h-[53px] flex items-center justify-center bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                    <Image src="/assets/images/arrow-top-right.svg" alt="Arrow" width={30} height={30} className='w-[24px] h-[24px] -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-300' />
                                </div>
                                <div className='relative z-30 mt-auto'>
                                    <h3 className='text-33 leading-[1.212121212121212] mb-25px'>High-Quality Materials</h3>
                                    <Link href="/" className="flex items-center gap-2 group cursor-pointer">
                                        <span>Explore</span> <Image src="/assets/images/bold-arrow-white.svg" alt="Arrow" width={30} height={30} className='w-[24px] h-[24px] group-hover:translate-x-2 transition-all duration-300' />
                                    </Link>
                                </div>
                            </motion.div>
                            <motion.div className='relative col-span-3 overflow-hidden rounded-2xl p-8 flex flex-col group cursor-pointer' variants={moveUp(0.4)} initial="hidden" whileInView="show" transition={{duration: 0.6}} viewport={{amount: 0.1, once: true}}>
                                <div className='absolute top-0 left-0 h-full w-full overflow-hidden'>
                                    <Image src="/assets/images/home/service-2.jpg" alt="Services" width={500} height={500} className='object-cover h-full w-full group-hover:scale-110 transition-all duration-300' />
                                </div>
                                <div className='absolute bottom-0 left-0 h-full  w-full bg-gradient-to-b from-transparent to-black/50 to-100% group-hover:opacity-0 transition-all duration-300 z-20'></div>
                                <div className='absolute bottom-0 left-0 h-0 w-full bg-gradient-to-b from-transparent to-black/50 to-100% group-hover:to-primary/75 group-hover:h-full transition-all duration-300 z-20'></div>
                                <div className='relative z-20 w-[53px] h-[53px] flex items-center justify-center bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                    <Image src="/assets/images/arrow-top-right.svg" alt="Arrow" width={30} height={30} className='w-[24px] h-[24px] -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-300' />
                                </div>
                                <div className='relative z-30 mt-auto'>
                                    <h3 className='text-33 leading-[1.212121212121212] mb-25px'>Cuplock Scaffolding & Aluminum Mobile Tower Rental & Sales</h3>
                                    <Link href="/" className="flex items-center gap-2 group cursor-pointer" >
                                        <span>Explore</span> 
                                        <Image src="/assets/images/bold-arrow-white.svg" alt="Arrow" width={30} height={30} className='w-[24px] h-[24px] group-hover:translate-x-2 transition-all duration-300' />
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div className='col-span-3 relative overflow-hidden rounded-2xl p-8 flex flex-col   group cursor-pointer' variants={moveUp(0.6)} initial="hidden" whileInView="show" transition={{duration: 0.6}} viewport={{amount: 0.1, once: true}}>
                                <div className='absolute top-0 left-0 h-full w-full overflow-hidden'>
                                    <Image src="/assets/images/home/service-3.jpg" alt="Services" width={500} height={500} className='object-cover h-full w-full group-hover:scale-110 transition-all duration-300' />
                                </div>
                                <div className='absolute bottom-0 left-0 h-full  w-full bg-gradient-to-b from-transparent to-black/50 to-100% group-hover:opacity-0 transition-all duration-300 z-20'></div>
                                <div className='absolute bottom-0 left-0 h-0 w-full bg-gradient-to-b from-transparent to-black/50 to-100% group-hover:to-primary/75 group-hover:h-full transition-all duration-300 z-20'></div>
                                <div className='relative z-20 w-[53px] h-[53px] flex items-center justify-center bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                    <Image src="/assets/images/arrow-top-right.svg" alt="Arrow" width={30} height={30} className='w-[24px] h-[24px] -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-300' />
                                </div>
                                <div className='relative z-30 mt-auto'>
                                    <h3 className='text-33 leading-[1.212121212121212] mb-25px'>Scaffolding <br /> Formwork</h3>
                                    <Link href="/" className="flex items-center gap-2 group cursor-pointer">
                                        <span>Explore</span>
                                        <Image src="/assets/images/bold-arrow-white.svg" alt="Arrow" width={30} height={30} className='w-[24px] h-[24px] group-hover:translate-x-2 transition-all duration-300' />
                                    </Link>
                                </div>
                            </motion.div>
                            <motion.div className='col-span-2 relative overflow-hidden rounded-2xl p-8 flex flex-col group cursor-pointer' variants={moveUp(0.8)} initial="hidden" whileInView="show" transition={{duration: 0.6}} viewport={{amount: 0.1, once: true}}>
                                <div className='absolute top-0 left-0 h-full w-full overflow-hidden'>
                                    <Image src="/assets/images/home/eqp.jpg" alt="Services" width={500} height={500} className='object-cover h-full w-full group-hover:scale-110 transition-all duration-300' />
                                </div>
                                <div className='absolute bottom-0 left-0 h-full  w-full bg-gradient-to-b from-transparent to-black/50 to-100% group-hover:opacity-0 transition-all duration-300 z-20'></div>
                                <div className='absolute bottom-0 left-0 h-0 w-full bg-gradient-to-b from-transparent to-black/50 to-100% group-hover:to-primary/75 group-hover:h-full transition-all duration-300 z-20'></div>
                                <div className='relative z-20 w-[53px] h-[53px] flex items-center justify-center bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                    <Image src="/assets/images/arrow-top-right.svg" alt="Arrow" width={30} height={30} className='w-[24px] h-[24px] -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-300' />
                                </div>
                                <div className='relative z-30 mt-auto'>
                                    <h3 className='text-33 leading-[1.212121212121212] mb-25px'>Equipment Rentals</h3>
                                    <Link href="/" className="flex items-center gap-2 group cursor-pointer">
                                        <span>Explore</span> 
                                        <Image src="/assets/images/bold-arrow-white.svg" alt="Arrow" width={30} height={30} className='w-[24px] h-[24px] group-hover:translate-x-2 transition-all duration-300' />
                                    </Link>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services