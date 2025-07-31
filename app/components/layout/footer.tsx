'use client';
import Image from 'next/image';
import AddressSection from './addressSec';
import Link from 'next/link';
import { quickLinks, socialLinks } from './footerItems';

const Footer = () => {
  return (
    <footer className="bg-black text-white relative z-[99] py-[50px]">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-row justify-between items-center mb-8 gap-6">
          <Image
            src="/assets/QDGrouplogo_white.png"
            alt="Logo"
            width={339.02}
            height={102.43}
          />
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white/20 hover:bg-white/30 transition rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
          >
            <Image
              src="/assets/up_arrow.svg"
              alt="Scroll to Top"
              width={12}
              height={11}
            />
          </button>
        </div>
        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 md:gap-[170px] mb-[93px]">
          {/* Quick Links */}
          <div>
            <h3 className="text-[16px] text-[#828D91] uppercase mb-[36px]">Quick Link</h3>
            <div className="grid grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-3 md:gap-[25px]">

              {quickLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.qLLink}
                  className="text-30 font-light hover:text-[#EC1C24] cursor-pointer leading-[1.3] transition-all duration-300"
                >
                  {item.qLTitle}
                </Link>
              ))}
            </div>
          </div>

          {/* Address & Social */}
          <div className="flex justify-between gap-10 lg:gap-0 flex-col lg:flex-row">
            <div>
              <h3 className="text-[16px] text-[#828D91] uppercase mb-[36px]">Address</h3>
              <AddressSection />
            </div>
            <div>
              <h3 className="text-[16px] text-[#828D91] uppercase mb-[36px]">Follow us</h3>
              <div className="flex space-x-4 gap-3">
                {socialLinks.map((item, index) => (
                  <Link key={index} href={item.socialmediaLink} className="group">
                    <Image
                      src={item.socialmediaIcon}
                      alt={item.socialmediaalt}
                      width={30}
                      height={30}
                      className="invert brightness-0 group-hover:invert-0 group-hover:brightness-100 transition-all duration-300"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-400 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex gap-4 justify-left items-baseline mb-4 md:mb-0">
            <Link href="/" className="hover:text-white text-[#9CA3AF] text-16">Privacy Policy</Link>
            <Link href="/" className="hover:text-white text-[#9CA3AF] text-16">Terms of Service</Link>
          </div>
          <p className="text-16 text-[#9CA3AF] text-left">
            &copy; {new Date().getFullYear()} My Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
