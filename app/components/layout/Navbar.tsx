
"use client"

import React, { use, useState,useEffect } from 'react'
import { menuItems } from './menuItems'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrolled ,setScrolled] = useState(false);

 useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50) // Change to any value that makes sense
  }

  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
}, [])

  return (
    <>
      <header className={`fixed w-full z-[100]  hidden lg:block transition-all duration-300 ${scrolled ? 'top-[30px]':'top-[95px]'}`}>
        <div className="container w-full">
          <div className='bg-white rounded-full shadow-md pr-[37px] pl-[20px] py-[25px] flex items-center justify-between w-fit gap-[58px]'>
            <div className=''>
              <Image src="/assets/logo-quad.png" alt="Logo" width={550} height={550} />
            </div>
            <ul className='flex w-full justify-between gap-5'>
              {menuItems.map((item, index) => {
                const isActive = activeIndex === index;
                const textColorClass = isActive ? 'text-[#1E1E1E]' : 'opacity-50';
                const spanWidthClass = isActive ? 'w-full' : 'w-[0px] group-hover:w-full';
                return (
                  <div
                    className='flex flex-col group cursor-pointer'
                    key={index}
                    onClick={() => setActiveIndex(index)}
                  >
                    <li className={`text-nowrap text-19 ${textColorClass}`}>{item.name}</li>
                    <span className={`bg-primary h-[2px] transition-all duration-300 ${spanWidthClass}`}></span>
                  </div>
                )
              })}
            </ul>
            <button className='bg-primary text-white rounded-full py-[30px] px-[50px] text-nowrap cursor-pointer text-19'>
              Contact Us
            </button>
          </div>
        </div>
      </header>



      <div className='relative z-1000'>
        {/* Navbar */}
        <nav className="w-full bg-white text-white tanspheader py-4  top-0 z-[1000] lg:hidden">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/assets/logo-quad.png"
                  alt="Assent"
                  width={80}
                  height={40}
                  className="h-[40px] w-auto"
                />
              </Link>
            </div>
            {/* Search Button */}
            <div className="flex items-center">
              {/* //Hamburger Icon */}
              <div
                className="cursor-pointer px-3 py-6"
                onClick={() => setMenuOpen(!menuOpen)}>
                <div
                  className={`relative block h-[2px] w-7 bg-primary transition-all
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
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)} // Clicking outside closes menu
          ></div>
        )}

        {/* Sliding Menu */}
        <div
          className={`fixed top-0 right-0 z-1000 h-full w-[300px] bg-white shadow-2xl transform transition-transform duration-500
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="min-h-full px-6 pt-[30px] pb-[40px] flex flex-col relative">
            {/* Close Button */}
            <button
              className="absolute top-8 right-4 text-[23px] text-primary font-[600]"
              onClick={() => setMenuOpen(false)}>
              ✕
            </button>

            {/* Logo */}
            <div className="text-left mb-[50px]">
              <Link href="/">
                <Image
                  src="/assets/logo-quad.png"
                  alt="Assent"
                  width={80}
                  height={50}
                  className="h-[40px] w-auto"
                />
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
                <FaFacebookF className="cursor-pointer w-6 h-6 hover:text-primary transition-all duration-500" />
                <FaLinkedinIn className="cursor-pointer w-6 h-6 hover:text-primary transition-all duration-500" />
                <FaInstagram className="cursor-pointer w-6 h-6 hover:text-primary transition-all duration-500" />
                <FaYoutube className="cursor-pointer w-6 h-6 hover:text-primary transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Navbar 