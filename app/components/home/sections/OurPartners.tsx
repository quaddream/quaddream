'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination' // Keep this import
import { Autoplay, Pagination } from 'swiper/modules' // Ensure Pagination is imported
import Image from 'next/image'

const partners = [
  { src: '/assets/images/home/partners/jel.png', alt: 'JEL' },
  { src: '/assets/images/home/partners/bhatla.png', alt: 'Bhatia' },
  { src: '/assets/images/home/partners/bam.png', alt: 'BAM' },
  { src: '/assets/images/home/partners/darwish.png', alt: 'Darwish' },
  { src: '/assets/images/home/partners/kabri.png', alt: 'Kabri' },
  { src: '/assets/images/home/partners/green-oasis.png', alt: 'Green Oasis' },
  { src: '/assets/images/home/partners/jlw.png', alt: 'JLW' },
  { src: '/assets/images/home/partners/al-tayer.png', alt: 'Al Tayer Stocks' },
  { src: '/assets/images/home/partners/jel.png', alt: 'JEL' },
  { src: '/assets/images/home/partners/bhatla.png', alt: 'Bhatia' },
  { src: '/assets/images/home/partners/bam.png', alt: 'BAM' },
  { src: '/assets/images/home/partners/darwish.png', alt: 'Darwish' },
  { src: '/assets/images/home/partners/kabri.png', alt: 'Kabri' },
  { src: '/assets/images/home/partners/green-oasis.png', alt: 'Green Oasis' },
  { src: '/assets/images/home/partners/jlw.png', alt: 'JLW' },
  { src: '/assets/images/home/partners/al-tayer.png', alt: 'Al Tayer Stocks' },
]

export default function PartnersSection() {
  return (
    <section className="pt-[100px] bg-[#F9F9F9] swiper-partners relative z-[50]">
      
        <Image
          src="/assets/images/home/partners/partner-bg.png"
          alt="Partners Background"
          width={1000} height={500}
          className="bg-img h-[92%]"
        />
    
      <div className="container pb-[150px] text-left">
        <h2 className="text-80 mb-4">Our Partners</h2>
        <p className="text-19 text-[#696969] leading-[32px] lg:max-w-[758px] mb-10">
          At Quaddream, we believe strong partnerships are the foundation of every successful journey.
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={4}
          autoplay={false }
          loop={true}
          pagination={{ clickable: true }} // Keep this
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiperPartners" // Add a custom class for specific styling if needed
        >
          {partners.map((_, i) => {
            if (i % 2 !== 0) return null

            const first = partners[i]
            const second = partners[i + 1]

            return (
              <SwiperSlide
                key={i}
                className={i + 2 >= partners.length ? '' : 'border-r border-solid border-[#BCBCBC] mr-0'}
              >
                <div className="flex gap-4 flex-col ">
                  <div className='ml-[20px] xl:ml-[85px] mr-[20px] xl:mr-0'>
                  <Image
                    src={first.src}
                    alt={first.alt}
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                   </div>
                  <div className="border-t border-[#BCBCBC]" />
                  {second && (
                     <div className='ml-[20px] xl:ml-[85px] mr-[20px] xl:mr-0'>
                    <Image
                      src={second.src}
                      alt={second.alt}
                      width={200}
                      height={100}
                      className="object-contain"
                    />
                    </div>
                  )}
                 
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}