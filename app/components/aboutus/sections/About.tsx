'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { containerStagger, paragraphItem, moveRight, moveLeft } from '../../motionVarients' 
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
        <section className='py-150 rounded-t-[20px] xl:rounded-tl-[40px] xl:rounded-tr-[40px] 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative z-10  bg-white mt-[-4.5%] '>
            <div className='container flex flex-col gap-150'>
                <div className='grid 2xl:grid-cols-5 w-full gap-y-4'>
                    <motion.div className='2xl:col-span-1 mt-6' variants={moveRight(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}>
                        <Link href="/about" className='border border-primary rounded-full py-[5px] px-[12px] text-nowrap cursor-pointer flex items-center gap-2 text-19 w-[163px] overflow-x-hidden'>
                            <ul className='flex items-center list-inside list-disc animate-ticker gap-2' ref={containerRef}>
                                <li className="ticker ml-[5px] text-19" id="tickerList" ref={contentRef}>Who we are</li>
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
                            className='text-65 leading-[1.153846153846154]  mb-5 md:mb-8 lg:mb-12'
                        >
                            Quaddream Scaffolding, leading suppliers of scaffolding solutions since 2012.
                        </motion.h2>
                        <motion.p
                            variants={paragraphItem}
                            initial="hidden"
                            whileInView="show"
                            transition={{ duration: 0.6 }}
                            viewport={{ amount: 0.1, once: true }}
                            className='text-19 text-[#7f7f7f] leading-[1.684210526315789] mb-3'
                        >
                            Representing a large number of companies in UAE for products and services of hire and sales of Cuplock Scaffoldings Components, Aluminium mobile access towers, Aluminium Scaffolding Components & Scaffolding Accessories.
                        </motion.p>
                        
                        <motion.p
                            variants={paragraphItem}
                            initial="hidden"
                            whileInView="show"
                            transition={{ duration: 0.6 }}
                            viewport={{ amount: 0.1, once: true }}
                            className='text-19 text-[#7f7f7f] leading-[1.684210526315789] mb-0'
                        > 
                            In this new millennium where construction activities are significant across the globe it is essential to source materials and other such construction related equipments from experienced , trusted, time tested and quality conscious manufacturers complying with international safety norms and standards.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Counter Section */}
                
            </div> 
            <motion.div className='absolute bottom-0 2xl:top-[150px] right-0   w-fit z-[0]' variants={moveLeft(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}>
             <Image src="/assets/images/overlay-rt.png" alt="rtimage" width={924} height={1100} />
            </motion.div>
        </section>
    )
}

export default About
