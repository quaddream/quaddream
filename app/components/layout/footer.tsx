'use client';
import Image from 'next/image';
import AddressSection from './addressSec';

const Footer = () => {
  return (
    <footer className="bg-black text-white relative z-[99] py-[50px] ">
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
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 md:gap-[170px]  mb-8">

          {/* Quick Links */}
          <div>
            <h3 className=" text-[16px] text-[#828D91] uppercase font-inter mb-[36px]">Quick Link</h3>
            <div className="grid grid-cols-2 gap-[20px] ">
              <div>
                <a
                  className=" text-30 font-light font-inter hover:text-[#EC1C24] cursor-pointer"

                >
                  Home
                </a>
              </div>
              <div>
                <a

                  className=" text-30 font-light font-inter hover:text-[#EC1C24] cursor-pointer"
                >
                  Projects
                </a>
              </div>
              <div>
                <a

                  className=" text-30 font-light font-inter hover:text-[#EC1C24] cursor-pointer"
                >
                  About
                </a>
              </div>
              <div>
                <a

                  className=" text-30 font-light font-inter hover:text-[#EC1C24] cursor-pointer"
                >
                  Contact
                </a>
              </div>
              <div>
                <a

                  className=" text-30 font-light font-inter hover:text-[#EC1C24] cursor-pointer"
                >
                  Services
                </a>
              </div>
              <div>
                <a

                  className=" text-30 font-light font-inter hover:text-[#EC1C24] cursor-pointer"
                >
                  Downloads
                </a>
              </div>
              <div>
                <a

                  className=" text-30 font-light font-inter hover:text-[#EC1C24] cursor-pointer"
                >
                  FAQ
                </a>
              </div>
            </div>

          </div>

          {/* Address */}
          <div className='flex  justify-between gap-10 lg:gap-0 flex-col lg:flex-row'>
            <div>
              <h3 className="text-[16px] text-[#828D91] uppercase mb-[36px] font-inter">Address</h3>
              <AddressSection />
            </div>
            {/* Social Media */}
            <div>
              <h3 className="text-[16px] text-[#828D91]  uppercase mb-[36px] font-inter">Follow Us</h3>
              <div className="flex space-x-4 gap-3">
                <a href="#" className="hover:text-gray-300"><Image src="/assets/insta.svg" alt='' width={30} height={30} /></a>
                <a href="#" className="hover:text-gray-300"><Image src="/assets/fb.svg" alt='' width={30} height={30} /></a>
                <a href="#" className="hover:text-gray-300"><Image src="/assets/linkedin.svg" alt='' width={30} height={30} /></a>
              </div>
            </div>
          </div>


        </div>

        {/* Bottom Section */}
        <div className=" pt-6 text-center text-sm text-gray-400 flex justify-between items-center">

          <div className="mt-2 space-x-4">
            <a href="" className="hover:text-white text-[#9CA3AF] text-[16px]  font-inter">Privacy Policy</a>
            <a href="" className="hover:text-white text-[#9CA3AF]  text-[16px] font-inter">Terms of Service</a>
          </div>
          <p className='text-[16px] text-[#9CA3AF]'>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
