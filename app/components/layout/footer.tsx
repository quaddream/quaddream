"use client";
import Image from "next/image";
import AddressSection from "./addressSec";
import Link from "next/link";
import { quickLinks, socialLinks } from "./footerItems";
import { FaDivide } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative z-[99] py-[50px]">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-row justify-between items-center mb-8 xl:mb-10 gap-6">
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            width={600}
            height={600}
            className="h-auto w-auto xl:h-[102.43px] object-contain"
          />
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-white/20 hover:bg-white/30 transition rounded-full w-10 h-10 xl:w-[64px] xl:h-[64px] flex items-center justify-center cursor-pointer"
          >
            <Image
              src="/assets/up_arrow.svg"
              alt="Scroll to Top"
              width={24}
              height={24}
              className="w-[12.99px] h-auto"
            />
          </button>
        </div>
        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 md:gap-[170px] mb-10 md:mb-[93px]">
          {/* Quick Links */}
          <div>
            <h3 className="text-[16px] text-lite-gray uppercase mb-[36px] font-medium">
              Quick Link
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-y-3 md:gap-y-[25px] lg:gap-y-[30px]">
              {quickLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.qLLink}
                  className="text-30 font-light hover:text-[#EC1C24] cursor-pointer leading-[1.333333333333333] transition-all duration-300"
                >
                  {item.qLTitle}
                </Link>
              ))}
            </div>
          </div>

          {/* Address & Social */}
          <div className="flex justify-between gap-10 lg:gap-0 flex-col lg:flex-row">
            <div>
              <h3 className="text-[16px] text-lite-gray uppercase mb-[36px] font-medium">
                Address
              </h3>
              <AddressSection />
            </div>
            <div>
              <h3 className="text-[16px] text-lite-gray uppercase mb-[36px] xl:mb-[41px] font-medium">
                Follow us
              </h3>
              <div className="flex space-x-4 gap-3">
                {socialLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.socialmediaLink}
                    className="group"
                  >
                    <Image
                      src={item.socialmediaIcon}
                      alt={item.socialmediaalt}
                      width={30}
                      height={30}
                      className="invert brightness-0 group-hover:invert-0 group-hover:brightness-100 transition-all duration-300 xl:w-[23.73px] xl:h-[23.73px]"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-400 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex gap-4 xl:gap-10 justify-left items-baseline mb-4 md:mb-0">
            <Link
              href="/"
              className="hover:text-white text-lite-gray text-16 leading-[1.5] font-[400]"
            >
              Terms & conditions
            </Link>
            <Link
              href="/"
              className="hover:text-white text-lite-gray text-16 leading-[1.5] font-[400]"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-16 text-[#9CA3AF] text-left">
            &copy; {new Date().getFullYear()} Quad Dream Scaffolding LLC. All
            rights reserved.
          </p>
        </div>
      </div>
      <div className="fixed bottom-35 right-[2px] w-full z-99999 cursor-pointer">
        <div className="container flex justify-end pointer-events-none">
          <div className="rounded-full">
            <Image
              src="/assets/images/whatsapp.svg"
              alt="WhatsApp"
              width={58}
              height={58}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
