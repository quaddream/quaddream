'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { StaticImageData } from 'next/image'

type Partner = {
  src: string
  alt: string
}

type PartnersSectionProps = {
  title: string
  description: string
  bgImg?: string | StaticImageData;
  items: Partner[]
}

export default function PartnersSection({ title, description, items,bgImg }: PartnersSectionProps) {
  return (
    <section className="pt-[47px] lg:pt-[100px] bg-[#F9F9F9] swiper-partners relative z-[50] overflow-hidden">
      {bgImg && (
      <Image
        src={bgImg}
        alt="Partners Background"
        width={1000}
        height={500}
        className="bg-img h-[92%]"
      />
      )}

      <div className="container pb-[47px] lg:pb-[150px] text-left">
        <h2 className="text-80 mb-5 lg:mb-[50px]">{title}</h2>
        <p className="text-19 text-[#696969] leading-[1.7] lg:max-w-[758px] mb-[29px] font-normal">{description}</p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={4}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={false}
          loop={false}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiperPartners"
        >
          {items.map((_, i) => {
            if (i % 2 !== 0) return null
            const first = items[i]
            const second = items[i + 1]

            return (
              <SwiperSlide
                key={i}
                className={i + 2 >= items.length ? '' : 'border-r border-solid border-[#BCBCBC] mr-0'}
              >
                <div className="flex gap-4 flex-col">
                  <div className="ml-[20px] xl:ml-[85px] mr-[20px] xl:mr-0">
                    <Image src={first.src} alt={first.alt} width={200} height={100} className="object-contain" />
                  </div>
                  <div className="border-t border-[#BCBCBC]" />
                  {second && (
                    <div className="ml-[20px] xl:ml-[85px] mr-[20px] xl:mr-0">
                      <Image src={second.src} alt={second.alt} width={200} height={100} className="object-contain" />
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
