'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay, Mousewheel } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import Link from 'next/link'

import { motion } from 'motion/react';
import { moveUp, containerStagger, paragraphItem } from '../../motionVarients';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

type Project = {
  id: number;
  title: string;
  location: string;
  imageUrl: string;
  badge: string;
}
type ProjectSwiperProps = {
  title?: string;
  buttonText?: string;
  buttonLink?: string;
  projects: Project[];
};

const PortfolioSwiperSlider: React.FC<ProjectSwiperProps> = ({ title, buttonLink, buttonText, projects }) => {




  // ---- Scroll lock + sticky logic ----
  // --- refs & state (put at top of component) ---
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentBoxRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const [stickyActive, setStickyActive] = useState(false);
  // const [loopStarted, setLoopStarted] = useState(false);
  const loopStartedRef = useRef(false);

  // stable code start

  // useEffect(() => {
  //   const handleWheel = (e: WheelEvent) => {
  //     if (!contentBoxRef.current) return;

  //     const rect = contentBoxRef.current.getBoundingClientRect();
  //     const fullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

  //     if (fullyVisible && swiperRef.current) {
  //       const swiper = swiperRef.current;

  //       setStickyActive(true);

  //       if (e.deltaY > 0) {
  //         // Down
  //         if (swiper.isEnd) {
  //           if (loopStartedRef.current) {
  //             console.log("🔓 Unlock scroll after loop");
  //             setStickyActive(false);
  //             loopStartedRef.current = false;
  //             return; // ✅ Let browser handle scroll to next section
  //           }
  //         } else {
  //           swiper.slideNext();
  //           loopStartedRef.current = true;
  //         }
  //       } else {
  //         // Up
  //         if (swiper.isBeginning) {
  //           if (loopStartedRef.current) {
  //             console.log("🔓 Unlock scroll after loop");
  //             setStickyActive(false);
  //             loopStartedRef.current = false;
  //             return; // ✅ Let browser handle scroll to previous section
  //           }
  //         } else {
  //           swiper.slidePrev();
  //           loopStartedRef.current = true;
  //         }
  //       }

  //       // ✅ Only prevent default if still sticky
  //       if (stickyActive) {
  //         e.preventDefault();
  //       }
  //     }
  //   };

  //   window.addEventListener("wheel", handleWheel, { passive: false });
  //   return () => window.removeEventListener("wheel", handleWheel);
  // }, [stickyActive]);

  // stable code end

  // stable code 2 start

  const goingDownRef = useRef(false);

  // useEffect(() => {
  //   const handleWheel = (e: WheelEvent) => {
  //     if (!contentBoxRef.current || !swiperRef.current) return;

  //     const rect = contentBoxRef.current.getBoundingClientRect();
  //     const fullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
  //     const swiper = swiperRef.current;

  //     if (fullyVisible) {
  //       setStickyActive(true);

  //       if (e.deltaY > 0) {
  //         // Down
  //         if (!swiper.isEnd) {
  //           goingDownRef.current = true;
  //           swiper.slideNext();
  //           loopStartedRef.current = true;
  //         }
  //       } else {
  //         // Up
  //         if (!swiper.isBeginning) {
  //           goingDownRef.current = false;
  //           swiper.slidePrev();
  //           loopStartedRef.current = true;
  //         }
  //       }

  //       e.preventDefault();
  //     }
  //   };

  //   window.addEventListener("wheel", handleWheel, { passive: false });
  //   return () => window.removeEventListener("wheel", handleWheel);
  // }, []);


  // useEffect(() => {
  //   if (!swiperRef.current) return;

  //   swiperRef.current.on("slideChange", (sw) => {
  //     if (goingDownRef.current && sw.isEnd && loopStartedRef.current) {
  //       console.log("🔓 Unlock scroll after LAST slide fully visible");
  //       setStickyActive(false);
  //       loopStartedRef.current = false;
  //     }
  //     if (!goingDownRef.current && sw.isBeginning && loopStartedRef.current) {
  //       console.log("🔓 Unlock scroll after FIRST slide fully visible");
  //       setStickyActive(false);
  //       loopStartedRef.current = false;
  //     }
  //   });
  // }, []);

// stable code 2 end

  // const goingDownRef = useRef(false);
  // const loopStartedRef = useRef(false);

  // useEffect(() => {
  //   const handleWheel = (e: WheelEvent) => {
  //     if (!contentBoxRef.current || !swiperRef.current) return;

  //     const rect = contentBoxRef.current.getBoundingClientRect();
  //     const fullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
  //     const swiper = swiperRef.current;

  //     // Reset sticky when scrolling away from the section
  //     if (!fullyVisible && stickyActive) {
  //       setStickyActive(false);
  //       loopStartedRef.current = false;
  //       return; // Let normal scroll behavior take over
  //     }

  //     // Only handle wheel events when section is fully visible AND we want sticky behavior
  //     if (fullyVisible) {
  //       // Check if we should activate sticky mode
  //       if (!stickyActive) {
  //         setStickyActive(true);
  //       }

  //       // Only prevent default and handle swiper navigation when sticky is active
  //       if (stickyActive || !loopStartedRef.current) {
  //         if (e.deltaY > 0) {
  //           // Scrolling Down
  //           if (!swiper.isEnd) {
  //             goingDownRef.current = true;
  //             swiper.slideNext();
  //             loopStartedRef.current = true;
  //             e.preventDefault(); // Prevent default only when handling swiper
  //           }
  //           // If at end, don't prevent default - let normal scroll happen
  //         } else {
  //           // Scrolling Up
  //           if (!swiper.isBeginning) {
  //             goingDownRef.current = false;
  //             swiper.slidePrev();
  //             loopStartedRef.current = true;
  //             e.preventDefault(); // Prevent default only when handling swiper
  //           }
  //           // If at beginning, don't prevent default - let normal scroll happen
  //         }
  //       }
  //     }
  //     // When not fully visible or sticky not active, don't prevent default - allow normal scrolling
  //   };

  //   window.addEventListener("wheel", handleWheel, { passive: false });
  //   return () => window.removeEventListener("wheel", handleWheel);
  // }, [stickyActive]); // Include stickyActive as dependency

  // useEffect(() => {
  //   if (!swiperRef.current) return;

  //   const swiper = swiperRef.current;

  //   const handleSlideChange = (sw: any) => {
  //     // When going down and reached the last slide
  //     if (goingDownRef.current && sw.isEnd && loopStartedRef.current) {
  //       console.log("🔓 Unlock scroll after LAST slide fully visible");
  //       setStickyActive(false);
  //       loopStartedRef.current = false;
  //       // Small delay to ensure state is updated before next wheel event
  //       setTimeout(() => {
  //         goingDownRef.current = false;
  //       }, 50);
  //     }

  //     // When going up and reached the first slide
  //     if (!goingDownRef.current && sw.isBeginning && loopStartedRef.current) {
  //       console.log("🔓 Unlock scroll after FIRST slide fully visible");
  //       setStickyActive(false);
  //       loopStartedRef.current = false;
  //       // Small delay to ensure state is updated before next wheel event
  //       setTimeout(() => {
  //         goingDownRef.current = false;
  //       }, 50);
  //     }
  //   };

  //   swiper.on("slideChange", handleSlideChange);

  //   // Cleanup
  //   return () => {
  //     swiper.off("slideChange", handleSlideChange);
  //   };
  // }, []);



  // *************

  // const goingDownRef = useRef(false);
  // const loopStartedRef = useRef(false);
  const unlockTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const canUnlockRef = useRef(false);

  // const goingDownRef = useRef(false);
  // const loopStartedRef = useRef(false);
  // const unlockTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  // const canUnlockRef = useRef(false);


  const stickyActiveRef = useRef(true); // Use ref instead of state for immediate updates

  const mousewheelDisabledRef = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!contentBoxRef.current || !swiperRef.current) return;

      const rect = contentBoxRef.current.getBoundingClientRect();
      const fullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      const swiper = swiperRef.current;

      // Reset sticky when scrolling away from the section
      if (!fullyVisible && stickyActiveRef.current) {
        stickyActiveRef.current = false;
        setStickyActive(false);
        loopStartedRef.current = false;
        canUnlockRef.current = false;
        mousewheelDisabledRef.current = false;
        // Re-enable mousewheel when leaving section
        if (swiper.mousewheel) {
          swiper.mousewheel.enable();
        }
        return;
      }

      // Only handle wheel events when section is fully visible
      if (fullyVisible) {
        // Activate sticky mode if not already active
        if (!stickyActiveRef.current) {
          stickyActiveRef.current = true;
          setStickyActive(true);
        }

        if (e.deltaY > 0) {
          // Scrolling Down
          if (!swiper.isEnd) {
            goingDownRef.current = true;
            swiper.slideNext();
            loopStartedRef.current = true;
            canUnlockRef.current = false;
            mousewheelDisabledRef.current = false;
            e.preventDefault();
          } else {
            // At the end slide
            if (canUnlockRef.current) {
              // Second scroll attempt - unlock and allow normal scroll
              console.log("🔓 Unlocking scroll - user scrolled down at last slide");
              stickyActiveRef.current = false;
              setStickyActive(false);
              loopStartedRef.current = false;
              canUnlockRef.current = false;
              goingDownRef.current = false;
              mousewheelDisabledRef.current = false;
              // Re-enable mousewheel for future use
              if (swiper.mousewheel) {
                swiper.mousewheel.enable();
              }
              // Don't prevent default - let scroll continue to next section
              return;
            } else if (!mousewheelDisabledRef.current) {
              // First time at end - prepare to unlock on next scroll
              console.log("🔓 Preparing to unlock scroll after LAST slide - waiting for additional scroll attempt...");
              canUnlockRef.current = true;
              mousewheelDisabledRef.current = true;
              // Keep mousewheel enabled so we can catch the next scroll
              if (swiper.mousewheel) {
                swiper.mousewheel.enable();
              }
              e.preventDefault();
            } else {
              // Already prepared, waiting for unlock
              e.preventDefault();
            }
          }
        } else {
          // Scrolling Up
          if (!swiper.isBeginning) {
            goingDownRef.current = false;
            swiper.slidePrev();
            loopStartedRef.current = true;
            canUnlockRef.current = false;
            mousewheelDisabledRef.current = false;
            e.preventDefault();
          } else {
            // At the beginning slide
            if (canUnlockRef.current) {
              // Second scroll attempt - unlock and allow normal scroll
              console.log("🔓 Unlocking scroll - user scrolled up at first slide");
              stickyActiveRef.current = false;
              setStickyActive(false);
              loopStartedRef.current = false;
              canUnlockRef.current = false;
              goingDownRef.current = false;
              mousewheelDisabledRef.current = false;
              // Don't prevent default - let scroll continue to previous section
              return;
            } else if (!mousewheelDisabledRef.current) {
              // First time at beginning - prepare to unlock on next scroll
              console.log("🔓 Preparing to unlock scroll after FIRST slide - waiting for additional scroll attempt...");
              canUnlockRef.current = true;
              mousewheelDisabledRef.current = true;
              e.preventDefault();
            } else {
              // Already prepared, waiting for unlock
              e.preventDefault();
            }
          }
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;

    const handleSlideChange = (sw: SwiperType) => {
      // When going down and reached the last slide
      if (goingDownRef.current && sw.isEnd && loopStartedRef.current) {
        console.log("🔓 Preparing to unlock scroll after LAST slide - waiting for additional scroll attempt...");
        canUnlockRef.current = true;
        // Don't disable mousewheel here - we need it for the unlock mechanism
        // Override the original onSlideChange behavior
        mousewheelDisabledRef.current = true;
      }

      // When going up and reached the first slide
      if (!goingDownRef.current && sw.isBeginning && loopStartedRef.current) {
        console.log("🔓 Preparing to unlock scroll after FIRST slide - waiting for additional scroll attempt...");
        canUnlockRef.current = true;
        mousewheelDisabledRef.current = true;
      }
    };

    swiper.on("slideChange", handleSlideChange);

    // Cleanup
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, []);

  // *******************

  

  // add:
  // const goingDownRef = useRef<boolean | null>(null);
 
  // const justUnlockedRef = useRef(false);
  // const transitionEndHandlerRef = useRef<((sw: SwiperType) => void) | null>(null);

  // useEffect(() => {
  //   const handleWheel = (e: WheelEvent) => {
  //     const box = contentBoxRef.current;
  //     const swiper = swiperRef.current;
  //     if (!box || !swiper) return;

  //     const rect = box.getBoundingClientRect();
  //     const fullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

  //     if (!fullyVisible) return;            // only act when box fully visible

  //     // if we just unlocked, let THIS wheel event pass to scroll page
  //     if (justUnlockedRef.current) {
  //       justUnlockedRef.current = false;
  //       return;
  //     }

  //     // lock/stick while we drive slides
  //     if (!stickyActive) setStickyActive(true);

  //     if (e.deltaY > 0) {
  //       // scrolling down
  //       goingDownRef.current = true;

  //       if (!swiper.isEnd) {
  //         swiper.slideNext();
  //         loopStartedRef.current = true;
  //         e.preventDefault();               // block page scroll while sliding
  //       } else {
  //         // already on last slide
  //         if (loopStartedRef.current) {
  //           // cycle done, unlock now and let next wheel pass
  //           setStickyActive(false);
  //           loopStartedRef.current = false;
  //           justUnlockedRef.current = true;
  //           return;
  //         } else {
  //           // no loop yet; start a loop forward
  //           // (optional) keep blocking until we move at least once
  //           e.preventDefault();
  //         }
  //       }
  //     } else {
  //       // scrolling up
  //       goingDownRef.current = false;

  //       if (!swiper.isBeginning) {
  //         swiper.slidePrev();
  //         loopStartedRef.current = true;
  //         e.preventDefault();
  //       } else {
  //         if (loopStartedRef.current) {
  //           // cycle done, unlock now and let next wheel pass
  //           setStickyActive(false);
  //           loopStartedRef.current = false;
  //           justUnlockedRef.current = true;
  //           return;
  //         } else {
  //           // no loop yet; keep blocking to start loop on first move
  //           e.preventDefault();
  //         }
  //       }
  //     }
  //   };

  //   window.addEventListener("wheel", handleWheel, { passive: false });
  //   return () => window.removeEventListener("wheel", handleWheel);
  // }, [stickyActive]);






  return (
    <section ref={sectionRef} className={`bg-white py-150 overflow-hidden `}>
      {/* Header with left padding to match container */}
      <div ref={contentBoxRef} className={`content-box ${stickyActive ? "sticky top-[0px] " : ""} `}>
        <div className="container ">
          <div className="flex  justify-between items-center mb-10">
            <motion.h2 className="text-80" variants={moveUp(0.2)} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ amount: 0.1, once: true }}>{title}</motion.h2>
            <motion.div className="flex items-center space-x-4" variants={moveUp(0.5)} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ amount: 0.1, once: true }}>
              {/* Navigation buttons */}
              {buttonLink && (
                <Link href={buttonLink} className='flex items-center gap-2 cursor-pointer text-16 border-1 border-black py-[5px] md:py-[10px] px-[10px] md:px-[20px] rounded-[60px] w-fit z-10 group font-normal'>
                  <span>{buttonText}</span>
                  <span className='bg-primary w-[51.7px] h-[51.7px] flex items-center justify-center rounded-full block group-hover:translate-x-[10px] transition-all duration-300 '>
                    <Image src="/assets/images/home/arrow-right.svg" alt="Arrow" width={30} height={30} className='w-[24px] h-[24px]' />
                  </span>
                </Link>
              )}
              {/* <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="p-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors duration-200 hidden md:block"
              >
                &larr;
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="p-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors duration-200 hidden md:block"
              >
                &rarr;
              </button> */}
            </motion.div>
          </div>
        </div>


        {/* Full-width slider container with left margin */}
        <div className="relative">
          <div className="xl:max-w-[80%] mx-auto">
            <div className="ml-0"> {/* This creates the left space matching the header */}
              <Swiper
                onSwiper={(instance) => {
                  swiperRef.current = instance; // ✅ now swiperRef.current is the Swiper instance
                }}
                // onSlideChange={(swiper) => {
                //   if (swiper.realIndex === projects.length - 1) {
                //     // disable after one loop
                //     swiper.mousewheel.disable();
                //   }
                // }}
                spaceBetween={20}
                slidesPerView={1}
                centeredSlides={false}
                loop={false}
                loopAdditionalSlides={3}
                speed={1000}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  1280: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                }}
                className="!overflow-visible"
                style={{
                  paddingRight: 0, // No right padding to make it full-width
                }}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={project.id} className="!w-auto">
                    <div className="relative rounded-[12px] overflow-hidden shadow-lg h-[300px] w-[350px] lg:h-[542px] lg:w-[757.67px] cursor-pointer">
                      <Image src={project.imageUrl} alt={project.title} layout="fill" objectFit="cover" className="transition-transform duration-300 hover:scale-105" />
                      <div className="absolute top-[33px] left-[43px] bg-[#fafafa70] text-white px-[10px] py-[11px] rounded-full text-19 font-light flex items-center
                       backdrop-blur-[18px] w-[250px] h-[53px]">
                        <span className=" mr-[15px]"> <Image src="/assets/images/home/portfolio/location.svg" width={30} height={30} alt='' /></span>
                        {project.badge}
                      </div>
                      <motion.div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/50 to-transparent text-white" variants={containerStagger} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ amount: 0.1, once: false }}>
                        <motion.h3 className="text-33 leading-[1.2] capitalize" variants={paragraphItem} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ amount: 0.1, once: false }}>{project.title}</motion.h3>
                        <motion.p className="text-33  leading-[1.2] capitalize" variants={paragraphItem} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ amount: 0.1, once: false }}>{project.location}</motion.p>
                      </motion.div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioSwiperSlider;