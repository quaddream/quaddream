
"use client"

import React, { useState,useEffect } from 'react'
import { menuItems } from './menuItems'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0)

//  useEffect(() => {
//   const handleScroll = () => {
//     setScrolled(window.scrollY > 50) // Change to any value that makes sense
//   }

//   window.addEventListener("scroll", handleScroll)
//   return () => window.removeEventListener("scroll", handleScroll)
// }, [])

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY) {
        console.log("down");
      } else if (currentY < lastScrollY) {
        console.log("up");
      }

      setScrollY(currentY);
      lastScrollY = currentY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const renderHeader = ()=>{
  return (
    <motion.header className={`w-full z-[100] hidden lg:block  absolute ${scrollY > 550 ? 'top-0 bg-white border-b-gray-100 border-b' : 'top-15'}`}>
      <div className={`w-full container`}>  
      <motion.div
        initial={{ y: -20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }}    
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`px-3 2xl:pr-[37px] flex items-center justify-between w-full bg-white 
          ${scrollY > 550 ? 'py-3 xl:py-2 shadow-none' : 'rounded-full shadow-md py-[12px]'}`}
      >
        <div className={`mr-4 ${scrollY > 550 ? 'xl:w-[250px]' : 'xl:w-[404px] xl:pl-[1em] 2xl:pl-[2em]'}`}>
          <Link href="/">
            <Image 
              src="/assets/images/logo-main.svg" 
              alt="Logo" 
              width={550} 
              height={550} 
              className="h-auto w-auto lg:h-[53px] xl:h-[65px] 2xl:h-[107px] object-contain" 
            />
          </Link>
        </div>

        <ul className="flex w-fit lg:gap-3 xl:gap-7 2xl:gap-[43px] 2xl:pr-[37px] 2xl:ml-auto">
          {menuItems.map((item, index) => {
            const isActive = activeIndex === index;
            const textColorClass = isActive ? 'text-[#1E1E1E]' : 'opacity-50';
            const spanWidthClass = isActive ? 'w-full' : 'w-[0px] group-hover:w-full';
            return (
              <div
                className="flex flex-col group cursor-pointer"
                key={index}
                onClick={() => setActiveIndex(index)}
              >
                <li className={`text-nowrap font-16 xl:text-19 ${textColorClass}`}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
                <span className={`bg-primary h-[1px] transition-all duration-300 ${spanWidthClass}`} />
              </div>
            );
          })}
        </ul>

        <div className="ml-6">
          <button
            className={`bg-primary text-white rounded-full text-nowrap cursor-pointer transition-all duration-300 border border-primary
              ${scrollY > 550 
                ? "py-[10px] px-4 text-19" 
                : "py-[30px] px-[50px] xl:py-[30px] xl:px-[58.5px] text-19"}
              hover:bg-white hover:text-primary hover:border-primary hover:translate-x-1 active:scale-95`}
          >
            <Link href="/contact-us">Contact Us</Link>
          </button>
        </div>
      </motion.div> 
      </div>
    </motion.header>
  )
}

  return (
    <>
      {/* <motion.header className={`fixed w-full z-[100] hidden lg:block transition-all duration-300 ${scrolled ? 'top-0 bg-white':'top-[95px]'}`} variants={fadeIn(0.5)} initial="hidden" whileInView="show">
        <div className={`w-full container ${scrolled ? '' :''}`}>
          <div className={`bg-white pr-[37px] flex items-center justify-between w-full ${scrolled ? 'py-2' :'rounded-full shadow-md py-[12px]'}`}>
            <div className={`mr-4 ${scrolled ? 'xl:w-[250px]' :'xl:w-[404px] xl:pl-[2em]'}`}>
              <Image src="/assets/images/logo-main.svg" alt="Logo" width={550} height={550} className='h-auto w-auto xl:h-[107px] object-contain' />
            </div>
            <ul className='flex w-fit xl:gap-[43px] xl:pr-[37px] ml-auto'>
              {menuItems.map((item, index) => {
                const isActive = activeIndex === index;
                const textColorClass = isActive ? 'text-[#1E1E1E]' : 'opacity-50';
                const spanWidthClass = isActive ? 'w-full' : 'w-[0px] group-hover:w-full';
                return (
                  <div className='flex flex-col group cursor-pointer' key={index} onClick={() => setActiveIndex(index)}>
                    <li className={`text-nowrap text-19 ${textColorClass}`}>{item.name}</li>
                    <span className={`bg-primary h-[1px] transition-all duration-300 ${spanWidthClass}`}></span>
                  </div>
                )
              })}
            </ul>
            <div className={`ml-6`}>
              <button className={`bg-primary text-white rounded-full  text-nowrap cursor-pointer  ${scrolled ? 'py-2 px-4 text-sm' :'py-[30px] px-[50px] xl:py-[30px] xl:px-[58.5px] text-19'}`}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </motion.header> */}
      <AnimatePresence>
      {renderHeader()}
        {scrollY > 550 && (
          <motion.header
            key="navbar"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`fixed top-0 left-0 w-full z-[999] bg-white text-black shadow-md`}
          >
            {renderHeader()}
          </motion.header>
        )}
      </AnimatePresence>

      <div className='relative z-1000'>
        {/* Navbar */}
        <nav className="w-full bg-white text-white tanspheader py-2 md:py-4  top-0 z-[1000] lg:hidden">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/">
                <Image src="/assets/logo-quad.png" alt="Assent" width={300} height={300} className="h-[60px] w-auto object-contain" />
              </Link>
            </div>
            {/* Search Button */}
            <div className="flex items-center">
              {/* //Hamburger Icon */}
              <div
                className="cursor-pointer px-3 py-6"
                onClick={() => setMenuOpen(!menuOpen)}>
                <div className={`relative block h-[2px] w-7 bg-primary transition-all
                before:absolute before:top-[-0.35rem] before:block before:h-full before:w-full before:bg-primary before:transition-all
                after:absolute after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-primary after:transition-all
                ${menuOpen
                      ? "bg-transparent before:rotate-45 before:top-0 after:-rotate-45 after:bottom-0"
                      : ""
                    }`}></div>
              </div>
            </div>
          </div>
        </nav>

        {/* Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)} // Clicking outside closes menu
          ></div>
        )}

        {/* Sliding Menu */}
        <div className={`fixed top-0 right-0 z-1000 h-full w-[300px] bg-white shadow-2xl transform transition-transform duration-500
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="min-h-full px-6 pt-[30px] pb-[25px] flex flex-col relative">
            {/* Close Button */}
            <button className="absolute top-8 right-4 text-[23px] text-primary font-[600]" onClick={() => setMenuOpen(false)}>
              ✕
            </button>

            {/* Logo */}
            <div className="text-left mb-[50px]">
              <Link href="/">
                <Image src="/assets/logo-quad.png" alt="Assent" width={80} height={50} className="h-[60px] w-auto" />
              </Link>
            </div>

            {/* Navigation Items */}
            <ul className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <li key={index} className="pb-2">
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-semibold">
                    {item.name}
                  </Link>
                </li>
              )
              )}

              {/* Contact Link */}
              <li>
                <Link
                  href="/contact-us"
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold">
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-auto">
              <hr />
              <div className="flex space-x-4 mt-4">
                <FaFacebookF className="cursor-pointer w-5 h-5 hover:text-primary transition-all duration-500" />
                <FaLinkedinIn className="cursor-pointer w-5 h-5 hover:text-primary transition-all duration-500" />
                <FaInstagram className="cursor-pointer w-5 h-5 hover:text-primary transition-all duration-500" />
                <FaYoutube className="cursor-pointer w-5 h-5 hover:text-primary transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Navbar 