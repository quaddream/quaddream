'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import { moveUp, containerStagger, paragraphItem } from '../../motionVarients';

gsap.registerPlugin(ScrollTrigger);

type Project = {
  id: number;
  title: string;
  location: string;
  imageUrl: string;
  badge: string;
};

type ProjectSwiperProps = {
  title?: string;
  buttonText?: string;
  buttonLink?: string;
  projects: Project[];
};

const PortfolioHorizontalScroll: React.FC<ProjectSwiperProps> = ({ title, buttonLink, buttonText, projects }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const horizontalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
  const section = sectionRef.current;
  const horizontal = horizontalRef.current;

  if (!section || !horizontal) return;

  const totalScrollWidth = horizontal.scrollWidth;
  const viewportWidth = window.innerWidth;
  const scrollDistance = totalScrollWidth - viewportWidth;

  gsap.to(horizontal, {
    x: -scrollDistance,
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: () => `+=${scrollDistance}`,
      pin: true,
      scrub: true, // no delay
      anticipatePin: 1,
    },
  });

  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, [projects]);


  return (
    <section ref={sectionRef} className="bg-white py-150 overflow-hidden">
      <div className="container mb-10 flex justify-between items-center">
        <motion.h2
          className="text-80"
          variants={moveUp(0.2)}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.1, once: true }}
        >
          {title}
        </motion.h2>
        {buttonLink && (
          <motion.div
            variants={moveUp(0.5)}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.1, once: true }}
          >
            <Link
              href={buttonLink}
              className="flex items-center gap-2 cursor-pointer text-16 border border-black py-[5px] md:py-[10px] px-[10px] md:px-[20px] rounded-[60px] w-fit z-10 group font-normal"
            >
              <span>{buttonText}</span>
              <span className="bg-primary w-[51.7px] h-[51.7px] flex items-center justify-center rounded-full group-hover:translate-x-[10px] transition-all duration-300">
                <Image
                  src="/assets/images/home/arrow-right.svg"
                  alt="Arrow"
                  width={24}
                  height={24}
                />
              </span>
            </Link>
          </motion.div>
        )}
      </div>
        <div className="container">
      <div
        ref={horizontalRef}
        className="flex gap-6 will-change-transform"
        style={{ width: `${projects.length * 44}vw` }}
      >
        {projects.map(project => (
          <div
            key={project.id}
            className="relative rounded-[12px] overflow-hidden shadow-lg h-[300px] w-[350px] lg:h-[542px] lg:w-[757.67px] flex-shrink-0"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute top-[33px] left-[43px] bg-[#fafafa70] px-[10px] py-[11px] rounded-full text-19 font-light flex items-center backdrop-blur-[18px] w-[250px] h-[53px]">
              <Image
                src="/assets/images/home/portfolio/location.svg"
                width={30}
                height={30}
                alt=""
                className="mr-[15px]"
              />
              {project.badge}
            </div>
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/50 to-transparent text-white"
              variants={containerStagger}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: false }}
            >
              <motion.h3
                className="text-33 leading-[1.2] capitalize"
                variants={paragraphItem}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="text-33 leading-[1.2] capitalize"
                variants={paragraphItem}
              >
                {project.location}
              </motion.p>
            </motion.div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default PortfolioHorizontalScroll;
