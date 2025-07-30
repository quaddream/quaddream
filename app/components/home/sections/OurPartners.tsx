'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'

const partners = [
  { src: '/assets/partners/jel.png', alt: 'JEL' },
  { src: '/assets/partners/bhatla.png', alt: 'Bhatia' },
  { src: '/assets/partners/bam.jpg', alt: 'BAM' },
  { src: '/assets/partners/darwish.jpg', alt: 'Darwish' },
  { src: '/assets/partners/kabri.jpg', alt: 'Kabri' },
  { src: '/assets/partners/green-oasis.jpg', alt: 'Green Oasis' },
  { src: '/assets/partners/hlw.jpg', alt: 'JLW' },
  { src: '/assets/partners/al-tayer.jpg', alt: 'Al Tayer Stocks' }
]

export default function PartnersSection() {
  return (
    <section className="py-20 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 text-left">
        <h2 className="text-80 mb-4">Our Partners</h2>
        <p className="text-19 text-[#696969] leading-[32px] lg:max-w-[758px] mb-10">
          At Quaddream, we believe strong partnerships are the foundation of every successful journey.
        </p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={4}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        
        >
          {partners.map((_, i) => {
            if (i % 2 !== 0) return null // skip even indices (we handle in i-1)

            const first = partners[i]
            const second = partners[i + 1]

            return (
            <SwiperSlide
                key={i}
                className={i + 2 >= partners.length ? '' : 'border-r border-solid border-[#e5e5e5] mr-0'}
            >
                <div className="flex gap-4 flex-col ">
                    <Image
                        src={first.src}
                        alt={first.alt}
                        width={200}
                        height={100}
                        className="object-contain  "
                    />
                    <div className="border-t border-[#e5e5e5]" />
                    {second && (
                        <Image
                            src={second.src}
                            alt={second.alt}
                             width={200}
                        height={100}
                        className="object-contain "
                        />
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
