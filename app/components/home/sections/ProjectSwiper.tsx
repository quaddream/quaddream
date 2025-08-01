'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules' 
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import Link from 'next/link'

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

const PortfolioSwiperSlider: React.FC<ProjectSwiperProps> = ({ title,buttonLink,buttonText,projects }) => {
  const swiperRef = React.useRef<SwiperType | null>(null);

  return (
    <section className="bg-white py-150 overflow-hidden">
      {/* Header with left padding to match container */}
      <div className="">
        <div className="container ">
          <div className="flex  justify-between items-center mb-10">
            <h2 className="text-80">{title}</h2>
            <div className="flex items-center space-x-4">
              {/* Navigation buttons */}
              {buttonLink && (
               <Link href={buttonLink} className='flex items-center gap-2 cursor-pointer text-16 border-2 border-black py-[5px] md:py-[10px] px-[10px] md:px-[20px] rounded-[60px] w-fit z-10 group'>
                            <span>{buttonText}</span>
                            <span className='bg-primary p-[10px] md:p-[14px] rounded-full block group-hover:translate-x-[10px] transition-all duration-300'>
                                <Image src="/assets/images/home/arrow-right.svg" alt="Arrow" width={30} height={30} />
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
            </div>
          </div>
        </div>
      </div>

      {/* Full-width slider container with left margin */}
      <div className="relative">
        <div className="">
          <div className="xl:max-w-[80%] mx-auto">
            <div className="ml-0"> {/* This creates the left space matching the header */}
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={20}
                slidesPerView={2.5}
                centeredSlides={false}
                loop={true}
                // autoplay={{
                //   delay: 3000,
                //   disableOnInteraction: false,
                // }}
                modules={[Autoplay, Navigation]}
                breakpoints={{
                  640: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1.8,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  1280: {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                  },
                }}
                className="!overflow-visible"
                style={{
                  paddingRight: 0, // No right padding to make it full-width
                }}
              >
                {projects.map((project) => (
                  <SwiperSlide key={project.id} className="!w-auto">
                    <div className="relative rounded-[12px] overflow-hidden shadow-lg h-[300px] w-[350px] lg:h-[542px] lg:w-[757.67px] cursor-pointer" >
                       <div >
                       </div>
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-105 " 
                      />
                    <div className="absolute top-[33px]  left-[43px] bg-[#fafafa70] text-white px-[10px] py-[11px] rounded-full text-19 font-light flex items-center backdrop-blur-md w-[250px] h-[53px]">
    <span className=" mr-[15px]"> <Image src="/assets/images/home/portfolio/location.svg" width={30} height={30} alt=''/></span>
    {project.badge}
</div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/50 to-transparent text-white" >
                        <h3 className="text-33 leading-[1.2] capitalize">{project.title}</h3>
                        <p className="text-33  leading-[1.2] capitalize">{project.location}</p>
                      </div>
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