"use client";
import React, { useEffect, useRef ,useState} from "react";
 
import Image from "next/image";
import { motion } from "motion/react";
import { containerStagger, paragraphItem } from "../../motionVarients";
import { gsap } from "gsap";
type ServicesItem = {
  title: string;
  description: string;
  items: {
    address: string;
    location: string;
    contact: string[];
    mail: string[];
    image: string;
  }[];
};

type BannerProps = {
  Data: ServicesItem[];
  titlewidth?: number;
};
const GetInTouch: React.FC<BannerProps> = ({ Data }) => {
  
  const [activeIndex, setActiveIndex] = useState(0);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  // Animate heading words from grey to black
  useEffect(() => {
    if (!textRef.current) return;

    const originalText = textRef.current.textContent || "";

    // Split into words and wrap each in a span
    textRef.current.innerHTML = originalText
      .split(" ")
      .map(
        (word) =>
          `<span class="inline-block" style="color:#BEBEBE">${word}&nbsp;</span>`
      )
      .join("");

    const words = textRef.current.querySelectorAll<HTMLSpanElement>("span");

    gsap.fromTo(
      words,
      { color: "#BEBEBE" },
      {
        color: "#000000",
        stagger: 0.2,
        ease: "none", // smoother for scrub
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "top 30%",
          scrub: true, // progress ties to scroll
          markers: false,
        },
      }
    );
  }, []);
  return (
    <section className="py-150 rounded-t-2xl 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative z-10  bg-white mt-[-4.5%] ">
      <div className="container flex flex-col gap-12">
        <div className=" w-full gap-y-4">
          <motion.div
            className="flex flex-col"
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.1, once: true }}
          >
            <motion.h2
              ref={textRef}
              variants={paragraphItem}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
              className="text-80 leading-[1.153846153846154] mb-50px"
            >
              {Data[0].title}
            </motion.h2>
            <motion.p
              variants={paragraphItem}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
              className="text-19 text-[#7f7f7f] leading-[1.684210526315789] mb-0 max-w-[107ch]"
            >
              {Data[0].description}
            </motion.p>
          </motion.div>
        </div>




        <div> 
      <div className="flex gap-8 border-b border-[#BEBEBE]">
        {Data[0].items.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`group flex items-center gap-10 sm:gap-20 border-b-3 
              ${activeIndex === index ? "border-primary text-black" : "border-transparent text-[#696969]"} 
              hover:text-black relative top-[1.5px] transition-all duration-300 cursor-pointer`}
          >
            <h3 className="relative text-20 md:text-25 leading-[1.6] pb-5 font-light transition-all duration-300 max-w-[15ch]">
              {item.location}
            </h3>
          </button>
        ))}
      </div>
 
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 lg:mt-12">
        <div> 
          <div className="border rounded-2xl mb-5 lg:mb-7 p-7 border-lite-gray hover:border-primary transition-all duration-300">
            <div className="flex items-center gap-5 border-b border-lite-gray mb-5 pb-5">
              <div className="w-[45px] lg:w-[86px] h-[45px] lg:h-[86px] flex items-center justify-center bg-white rounded-full border border-[#BEBEBE]">
                <Image
                  src="/assets/images/contactus/call-calling.svg"
                  alt="call"
                  width={42}
                  height={42}
                  className="w-[25px] h-[25px] lg:w-[42px] lg:h-[42px]"
                />
              </div>
              <div>
                <p className="text-30 text-black">Call Us</p>
                <p className="text-19">Need Help? Give Us a Ring.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 lg:gap-7  flex-wrap">
              {Data[0].items[activeIndex].contact.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Image
                    src="/assets/images/contactus/call.svg"
                    alt="call"
                    width={24}
                    height={24}
                     className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]"
                  />
                  <p className="text-19 text-black">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border rounded-2xl p-7 border-lite-gray hover:border-primary transition-all duration-300">
            <div className="flex items-center gap-5 border-b border-lite-gray mb-5 pb-5">
              <div className="w-[45px] lg:w-[86px] h-[45px] lg:h-[86px] flex items-center justify-center bg-white rounded-full border border-[#BEBEBE]">
                <Image
                  src="/assets/images/contactus/msg.svg"
                  alt="msg"
                  width={42}
                  height={42}
                  className="w-[25px] h-[25px] lg:w-[42px] lg:h-[42px]"
                />
              </div>
              <div>
                <p className="text-30 text-black">Email Us</p>
                <p className="text-19">We usually reply in 24 hours.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 lg:gap-7 flex-wrap">
              {Data[0].items[activeIndex].mail?.map((email, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Image
                    src="/assets/images/contactus/msg.svg"
                    alt="email"
                    width={24}
                    height={24}
                    className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]"
                  />
                  <p className="text-19 text-black">{email}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex mt-5 md:mt-7 gap-2 cursor-pointer group w-fit">
            <p className="text-30 mb-0 text-primary border-b border-primary transition-all duration-300 group-hover:pb-1 group-hover:border-b-2">
              GET DIRECTION
            </p>
            <Image
              src="/assets/images/arrred.svg"
              alt="direction"
              width={19}
              height={19}
              className="border-b border-primary transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>

        <div>
          <div className="mb-7">
            <Image
              src={Data[0].items[activeIndex].image}
              alt={Data[0].items[activeIndex].location}
              className="rounded-2xl"
              width={721}
              height={466}
            />
          </div>
          <p>{Data[0].items[activeIndex].address}</p>
        </div>
      </div>
    </div>




      </div>
    </section>
  );
};

export default GetInTouch;
