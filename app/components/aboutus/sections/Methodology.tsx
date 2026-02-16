'use client'
import React from 'react' 
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"  
import { motion } from "framer-motion"; 
import { moveUp, moveRight } from '../../motionVarients'  
 import { aboutus } from '../type'
  
  const Methodology = ({data}: {data: aboutus["secondSection"]}) => {
    
  return (
    <section >
   <div className="container">
   <motion.div
      style={{ backgroundImage: `url(${data.image})` }}
      className="bg-top-right p-6 pt-32 md:p-8 md:pt-35 lg:p-17 lg:pt-[237px] relative rounded-xl z-10"
      variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} 
    >
      <div className="relative z-10">
        {/* Title */}
        <motion.h2
          className="text-white text-80 leading-[1.07] pb-6 md:pb-12"
      variants={moveRight(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}
        >
          {data.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lite-gray text-19 leading-[1.684210526315789] mb-0"
      variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} 
        >
          {data.description}
        </motion.p>
      </div>

      {/* Overlay image (optional animation) */}
      <div className="rounded-xl overflow-hidden">
        <div className="overlayimage rounded-xl"></div>
      </div>
    </motion.div>
   </div>
      
    </section>
  )
}

export default Methodology