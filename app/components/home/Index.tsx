'use client'
import React, { useRef, useEffect } from 'react'
import Banner from './sections/Banner'
import Commitment from './sections/Commitment'
import Services from './sections/Services'
import HomeTicker from './sections/HomeTicker'
import CTA from '../common/cta'
import IndustriesList from './sections/IndustriesList'
import WhyChoose from './sections/WhyChoose'
import OurPartners from './sections/OurPartners'
import { partnersSection, ctaSection, projects } from "./data";
import PortfolioHorizontalScroll from './sections/PortfolioHorizontalScroll'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Index = () => {
  const commitmentRef = useRef(null)

  useEffect(() => {
    if (commitmentRef.current) {
      ScrollTrigger.matchMedia({ 
        "(max-width: 767px)": function () {
          gsap.fromTo(
            commitmentRef.current,
            { borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }, // smaller radius for mobile
            {
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px",
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: commitmentRef.current,
                start: "top bottom",
                end: "top -100px",
                scrub: true,
              },
            }
          );
        },
   
        "(min-width: 768px)": function () {
          gsap.fromTo(
            commitmentRef.current,
            { borderTopLeftRadius: "120px", borderTopRightRadius: "120px" },
            {
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px",
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: commitmentRef.current,
                start: "top bottom",
                end: "top -100px",
                scrub: true,
              },
            }
          );
        },
      });
    }
  }, []);
  

  return (
    <div >
      <div className='frtsn'>
        {/* Sticky Banner */}
        <div className="lg:sticky top-0 lg:h-screen z-10">
          <Banner />
        </div>

        {/* Commitment with GSAP animated border radius */}
        <div ref={commitmentRef} className="relative z-20 bg-white overflow-hidden ">
          <Commitment />
        </div>
      </div>

      <HomeTicker />
      <Services />
      <IndustriesList />
      <WhyChoose />
      <PortfolioHorizontalScroll
        projects={projects.portfolio.projects}
        title={projects.portfolio.title}
        buttonLink={projects.portfolio.buttonLink}
        buttonText={projects.portfolio.buttonText}
      />
      <OurPartners
        title={partnersSection.title}
        description={partnersSection.description}
        items={partnersSection.items}
        bgImg={partnersSection.bgImg}
      />
      <CTA
       maxwidth={19}
        title={ctaSection.title}
        description={ctaSection.description}
        buttonLink={ctaSection.buttonLink}
        buttonText={ctaSection.buttonText}
        bgImg={ctaSection.bgImg}
      />
    </div>
  )
}

export default Index
