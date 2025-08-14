'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { containerStagger, moveUp, paragraphItem, moveRight } from '../../motionVarients'
import Counter from './Counter'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const Commitment = () => {
    const containerRef = useRef<HTMLUListElement | null>(null);
    const contentRef = useRef<HTMLLIElement | null>(null);
    const textRef = useRef<HTMLHeadingElement | null>(null);

    // Animate heading words from grey to black
   useEffect(() => {
    if (!textRef.current) return;

    const originalText = textRef.current.textContent || "";

    // Split into words and wrap each in a span
    textRef.current.innerHTML = originalText
        .split(" ")
        .map(word => `<span class="inline-block" style="color:#BEBEBE">${word}&nbsp;</span>`)
        .join("");

    const words = textRef.current.querySelectorAll<HTMLSpanElement>("span");

    gsap.fromTo(
        words,
        { color: "#BEBEBE" },
        {
            color: "#000000",
            stagger: 0.2,
            ease: "none", // smoother for scrub
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 90%",
                end: "top 30%",
                scrub: true, // progress ties to scroll
                markers: false
            }
        }
    );
}, []);


    // Infinite ticker animation clones
    useEffect(() => {
        const container = containerRef.current;
        const content = contentRef.current;

        if (container && content) {
            const contentWidth = content.offsetWidth;

            // Clone 9 more times
            for (let i = 0; i < 9; i++) {
                const clone = content.cloneNode(true) as HTMLLIElement;
                clone.setAttribute('aria-hidden', 'true');
                container.appendChild(clone);
            }

            const totalWidth = contentWidth * 1000;
            container.style.setProperty('--scroll-width', `${totalWidth}px`);

            const duration = totalWidth / 60; 
            container.style.setProperty('--duration', `${duration}s`);
        }
    }, []);

    return (
        <section className='py-150 rounded-t-2xl 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative z-[50] bg-white mt-[-4.5%] overflow-hidden'>
            <Image src="/assets/images/home/commitment-bg.png" alt="Commitment" width={900} height={500} className='absolute bottom-0 2xl:top-[150px] -left-[60px] h-[80%] z-[-1]' />
            <div className='container flex flex-col gap-150'>
                <div className='grid 2xl:grid-cols-5 w-full gap-y-4'>
                    <motion.div className='2xl:col-span-1 mt-6' variants={moveRight(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}>
                        <Link href="/about" className='border border-primary rounded-full py-[5px] px-[12px] text-nowrap cursor-pointer flex items-center gap-2 text-19 w-[163px] overflow-x-hidden'>
                            <ul className='flex items-center list-inside list-disc animate-ticker gap-2' ref={containerRef}>
                                <li className="ticker ml-[5px] text-19" id="tickerList" ref={contentRef}>About Us</li>
                            </ul>
                        </Link>
                    </motion.div>
                    <motion.div className='2xl:col-span-4 flex flex-col' variants={containerStagger} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ amount: 0.1, once: true }}>
                        <motion.h2
                            ref={textRef}
                            variants={paragraphItem}
                            initial="hidden"
                            whileInView="show"
                            transition={{ duration: 0.6 }}
                            viewport={{ amount: 0.1, once: true }}
                            className='text-65 leading-[1.153846153846154] mb-50px'
                        >
                            With a commitment to safety, reliability and technical excellence.
                        </motion.h2>
                        <motion.p
                            variants={paragraphItem}
                            initial="hidden"
                            whileInView="show"
                            transition={{ duration: 0.6 }}
                            viewport={{ amount: 0.1, once: true }}
                            className='text-19 text-[#7f7f7f] leading-[1.684210526315789] xl:mb-10'
                        >
                            Quad Dream Scaffolding LLC offers reliable, high-quality scaffolding solutions across the UAE,
                            supporting construction and industrial projects with safe, flexible, and fully compliant services — from design to dismantling.
                        </motion.p>
                        <motion.div
                            variants={paragraphItem}
                            initial="hidden"
                            whileInView="show"
                            transition={{ duration: 0.6 }}
                            viewport={{ amount: 0.1, once: true }}
                        >
                            <Link href="/about" className='flex items-center gap-2 cursor-pointer text-16 font-normal border-2 border-black py-[10px] px-[20px] rounded-[60px] w-fit z-10 group'>
                                <span>Learn More About Us</span>
                                <span className='bg-primary w-[51.7px] h-[51.7px] flex items-center justify-center rounded-full  group-hover:translate-x-[10px] transition-all duration-300'>
                                    <Image src="/assets/images/home/arrow-right.svg" alt="Arrow" width={30} height={30} className="w-[24px] h-[24px]" />
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Counter Section */}
                <motion.div
                    className='flex justify-between w-full items-center flex-wrap 2xl:flex-nowrap gap-6 2xl:gap-0'
                    variants={containerStagger}
                    initial="hidden"
                    whileInView="show"
                    transition={{ duration: 0.6 }}
                    viewport={{ amount: 0.1, once: true }}
                >
                    <motion.div className='flex flex-col gap-2 xl:min-w-[300px]' variants={moveUp(0.2)} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ amount: 0.1, once: true }}>
                        <Image src="/assets/images/home/building-icon.svg" alt="Commitment" width={50} height={50} />
                        <h3 className='text-75 xl:min-w-max'><Counter from={0} to={Number(21000)} duration={2} /><span className='text-primary'>+</span></h3>
                        <p className='text-19'>Work Completed</p>
                    </motion.div>
                    <motion.div className='flex flex-col gap-2 xl:min-w-[300px]' variants={moveUp(0.4)} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ amount: 0.1, once: true }}>
                        <Image src="/assets/images/home/emp-icon.svg" alt="Commitment" width={50} height={50} />
                        <h3 className='text-75'><Counter from={0} to={Number(110)} duration={2} /><span className='text-primary'>+</span></h3>
                        <p className='text-19'>Employees</p>
                    </motion.div>
                    <motion.div className='flex flex-col gap-2 xl:min-w-[300px]' variants={moveUp(0.6)} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ amount: 0.1, once: true }}>
                        <Image src="/assets/images/home/clients-icon.svg" alt="Commitment" width={50} height={50} />
                        <h3 className='text-75'><Counter from={0} to={Number(100)} duration={2} /><span className='text-primary'>+</span></h3>
                        <p className='text-19'>Clients</p>
                    </motion.div>
                    <motion.div className='flex flex-col gap-2 xl:min-w-[300px]' variants={moveUp(0.8)} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ amount: 0.1, once: true }}>
                        <Image src="/assets/images/home/calender-icon.svg" alt="Commitment" width={50} height={50} />
                        <h3 className='text-75'><Counter from={0} to={Number(2012)} duration={2} /></h3>
                        <p className='text-19'>Year Established</p>
                    </motion.div>
                </motion.div>
            </div>
            <div className="2xl:h-[230px] w-full bg-[linear-gradient(to_top,_white_50%,_transparent_90%)] absolute bottom-0 z-30"></div>
        </section>
    )
}

export default Commitment
