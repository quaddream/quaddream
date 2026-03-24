"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { moveUp, containerStagger, paragraphItem } from "../../motionVarients";

gsap.registerPlugin(ScrollTrigger);

import { Projects } from "../../projects/type";

type ProjectSwiperProps = {
  projectsdata: Projects;
  title?: string;
  /** true = GSAP horizontal scroll (default), false = Swiper autoplay + touch */
  scrollMode?: boolean;
};

const PortfolioHorizontalScroll: React.FC<ProjectSwiperProps> = ({
  projectsdata,
  title = "Portfolio",
  scrollMode = true,
}) => {
  const projects = (projectsdata.projects || []).slice(0, 5);

  const sectionRef = useRef<HTMLElement | null>(null);
  const horizontalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollMode) return; // skip GSAP if swiper mode

    const section = sectionRef.current;
    const horizontal = horizontalRef.current;
    if (!section || !horizontal) return;

    const totalScrollWidth = horizontal.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalScrollWidth - viewportWidth;

    gsap.to(horizontal, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [projects, scrollMode]);

  // ─── Shared card renderer ────────────────────────────────────────────────
  const ProjectCard = ({ project }: { project: Projects["projects"][0] }) => (
    <Link href={`/projects/${project.slug}`}>
      <div className="relative rounded-[12px] overflow-hidden group shadow-lg h-[300px] w-[350px] lg:h-[500px] 2xl:h-[542px] lg:w-[630px] 2xl:w-[757.67px] flex-shrink-0">
        <Image
          src={project.thumbnail}
          alt={project.thumbnailAlt || project.firstSection.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="relative z-10 h-full w-full">
          <div className="absolute top-[33px] left-[43px] bg-[#fafafa70] px-[10px] py-[11px] rounded-full text-19 font-light flex items-center backdrop-blur-[18px] w-[250px] h-[53px]">
            <Image
              src="/assets/images/home/portfolio/location.svg"
              width={30}
              height={30}
              alt=""
              className="mr-[15px]"
            />
            {project.firstSection.location?.name || ""}
          </div>
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6 to-transparent text-white"
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
              {project.firstSection.title}
            </motion.h3>
            <motion.p
              className="text-33 leading-[1.2] capitalize"
              variants={paragraphItem}
            >
              {project.firstSection.location?.name || ""}
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute h-full w-full z-[1] bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/20 to-transparent text-white" />
      </div>
    </Link>
  );

  return (
    <section
      ref={sectionRef}
      className="bg-white py-150 overflow-hidden"
    >
      {/* Header */}
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
        <motion.div
          variants={moveUp(0.5)}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.1, once: true }}
        >
          <Link
            href={"/projects"}
            className="flex items-center gap-2 cursor-pointer text-16 border border-black py-[5px] md:py-[10px] px-[10px] md:px-[20px] rounded-[60px] w-fit z-10 group font-normal"
          >
            <span>View Projects</span>
            <span className="bg-primary w-8 h-8 md:w-[51.7px] md:h-[51.7px] flex items-center justify-center rounded-full group-hover:translate-x-[10px] transition-all duration-300">
              <Image
                src="/assets/images/home/arrow-right.svg"
                alt="Arrow"
                width={24}
                height={24}
                className="w-4 h-4 md:w-[24px] md:h-[24px]"
              />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* ── GSAP horizontal scroll mode ── */}
      {scrollMode && (
        <div className="container">
          <div
            ref={horizontalRef}
            className="flex gap-6 will-change-transform"
            style={{ width: `${projects.length * 44}vw` }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* ── Swiper autoplay + touch mode ── */}
      {!scrollMode && (
        <div className="container">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            grabCursor={true}
            className="!overflow-visible"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.slug} style={{ width: "auto" }}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default PortfolioHorizontalScroll;