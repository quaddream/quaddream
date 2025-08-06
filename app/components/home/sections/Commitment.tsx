'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import Counter from './Counter' // auto-incrementing counter Component.
const Commitment = () => {
    const containerRef = useRef<HTMLUListElement | null>(null);
    const contentRef = useRef<HTMLLIElement | null>(null);
    useEffect(() => {
        const container = containerRef.current;
        const content = contentRef.current;

        if (container && content) {
            const contentWidth = content.offsetWidth;

            // Clone 10 times
            for (let i = 0; i < 9; i++) {
                const clone = content.cloneNode(true) as HTMLLIElement;
                clone.setAttribute('aria-hidden', 'true');
                container.appendChild(clone);
            }

            // Total scroll width based on all clones
            const totalWidth = contentWidth * 1000;
            container.style.setProperty('--scroll-width', `${totalWidth}px`);

            // Adjust speed as needed
            const duration = totalWidth / 60; // tweak speed here
            container.style.setProperty('--duration', `${duration}s`);
        }
    }, []);
    return (
        <section className='py-150 rounded-t-2xl 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative z-[50] bg-white mt-[-4.5%] overflow-hidden'>
            <Image src="/assets/images/home/commitment-bg.png" alt="Commitment" width={900} height={500} className='absolute bottom-0 2xl:top-[150px] -left-[60px] h-[80%] z-[-1]' />
            <div className='container flex flex-col gap-150'>
                <div className='grid 2xl:grid-cols-5 w-full gap-y-4'>
                    <div className='2xl:col-span-1 mt-6'>
                        <Link href="/about" className='border border-primary rounded-full py-[5px] px-[12px] text-nowrap cursor-pointer flex items-center gap-2 text-19 w-[163px] overflow-x-hidden'>
                            <ul className='flex items-center list-inside list-disc animate-ticker gap-2' ref={containerRef}>
                                <li className="ticker ml-[5px] text-19" id="tickerList" ref={contentRef}>About Us</li>
                            </ul>
                        </Link>
                    </div>
                    <div className='2xl:col-span-4 flex flex-col gap-10'>
                        <h2 className='text-65 leading-[1.153846153846154]'>With a commitment to safety, reliability, <span className='text-[#bebebe]'>and technical excellence.</span></h2>
                        <p className='text-19 text-[#7f7f7f] leading-[1.684210526315789]'>Quad Dream Scaffolding LLC offers reliable, high-quality scaffolding solutions across the UAE,
                            supporting construction and industrial projects with safe, flexible, and fully compliant services — from design to dismantling.
                        </p>
                        <Link href="/about" className='flex items-center gap-2 cursor-pointer text-16 border-2 border-black py-[10px] px-[20px] rounded-[60px] w-fit z-10 group'>
                            <span>Learn More About Us</span>
                            <span className='bg-primary p-[14px] rounded-full block group-hover:translate-x-[10px] transition-all duration-300'>
                                <Image src="/assets/images/home/arrow-right.svg" alt="Arrow" width={30} height={30} />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-between w-full items-center flex-wrap 2xl:flex-nowrap gap-6 2xl:gap-0'>
                    <div className='flex flex-col gap-2'>
                        <Image src="/assets/images/home/cmt-1.svg" alt="Commitment" width={50} height={50} />
                        {/* Use the <Counter end={number} /> component to animate numbers from 0 to your target value. Simply replace static numbers with <Counter end={TargetNumber} />*/}
                        <h3 className='text-75'>21,000<span className='text-primary'>+</span></h3>
                        <p className='text-19'>Work Completed</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Image src="/assets/images/home/cmt-2.svg" alt="Commitment" width={50} height={50} />
                        <h3 className='text-75'>110<span className='text-primary'>+</span></h3>
                        <p className='text-19'>Employees</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Image src="/assets/images/home/cmt-3.svg" alt="Commitment" width={50} height={50} />
                        <h3 className='text-75'>100<span className='text-primary'>+</span></h3>
                        <p className='text-19'>Clients</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Image src="/assets/images/home/cmt-4.svg" alt="Commitment" width={50} height={50} />
                        <h3 className='text-75'>2012</h3>
                        <p className='text-19'>Year Established</p>
                    </div>
                </div>
            </div>
            <div className="2xl:h-[230px] w-full bg-[linear-gradient(to_top,_white_50%,_transparent_90%)] absolute bottom-0 z-30"></div>
        </section>
    )
}

export default Commitment