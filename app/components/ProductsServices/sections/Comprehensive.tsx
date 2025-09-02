'use client'
import React, { useEffect, useRef } from 'react'  
import { motion } from 'motion/react'
import { containerStagger, paragraphItem } from '../../motionVarients' 
import { gsap } from "gsap"
type ServicesItem = {
  title: string;
  bgImg: string;  
  description:string
}
 
type BannerProps = {
 Data: ServicesItem[]; 
 titlewidth?:number
};
  const Comprehensive: React.FC<BannerProps> = ({   Data,titlewidth }) => { 
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
  return (
    <section className='py-150 rounded-t-2xl 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative z-10  bg-white mt-[-4.5%] '>
            <div className='container flex flex-col gap-5 lg:gap-12'>
                    <div className=' w-full gap-y-4'>
                    
                    <motion.div className='flex flex-col' variants={containerStagger} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ amount: 0.1, once: true }}>
                        <motion.h2
                            ref={textRef}
                            variants={paragraphItem}
                            initial="hidden"
                            whileInView="show"
                            transition={{ duration: 0.6 }}
                            viewport={{ amount: 0.1, once: true }}
                            className='text-80 leading-[1.153846153846154] mb-5 lg:mb-12'
                        >
                            Comprehensive Scaffolding Solutions Under One Roof
                        </motion.h2>
                        <motion.p
                            variants={paragraphItem}
                            initial="hidden"
                            whileInView="show"
                            transition={{ duration: 0.6 }}
                            viewport={{ amount: 0.1, once: true }}
                            className='text-19 text-[#7f7f7f] leading-[1.684210526315789] mb-0 max-w-[107ch]'
                        >
                            From contracting and rentals to mobile towers and equipment — Quad Dream delivers safe, certified scaffolding services tailored to your project.
                        </motion.p>
                        
                         
                    </motion.div>
                </div>
    <div style={{backgroundImage: `url(${Data[0].bgImg})`}} className='bg-top-center bg-center p-5 pt-30 md:p-8 md:pt-35 lg:p-17  lg:pt-[237px] relative rounded-xl z-10'>
    <div className='relative z-10  ' >
    <h2 className={`text-white text-80 leading-[1.07] pb-6 md:pb-12 `}
  style={{ maxWidth: titlewidth ? `${titlewidth}ch` : "none" }}>{Data[0].title}</h2>
    <p className='text-lite-gray text-19 leading-[1.684210526315789] mb-0'>{Data[0].description}</p>
    </div>
    <div className='rounded-xl overflow-hidden'>
    <div className='overlayimage rounded-xl'></div> 
    </div>
    </div>
   </div>
      
    </section>
  )
}

export default Comprehensive