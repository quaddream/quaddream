"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
import { ProductsServicesData } from "../ProductsServices/type";

type SIngleServiceProps = {
  Data: ProductsServicesData["thirdSection"]["items"][number]["firstSection"];
};

const Main = ({ Data }: SIngleServiceProps) => {
  return (
    <section className="py-150 relative z-10 rounded-t-[20px] xl:rounded-tl-[40px] xl:rounded-tr-[40px] 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] mt-[-4.5%] bg-white">
      <div className="container">
        <motion.h2
          variants={moveUp()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-80 leading-[1.125] mb-5 lg:mb-[44px] 2xl:mb-[50px] text-black"
        >
          {Data.title}
        </motion.h2>
        <motion.div
          variants={moveUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Image
            src={Data.image}
            alt=""
            width={1920}
            height={1280}
            className="object-cover w-full mb-5 lg:mb-8 2xl:mb-12 h-[280px]  md:h-[400px] xl:h-[601px]  rounded-2xl"
          />
        </motion.div>

        {Data.description
          .split("\n")
          .filter(Boolean)
          .map((para, idx) => (
            <motion.p
              variants={moveUp(idx * 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={idx}
              className="  text-19 leading-text19 mb-4 md:mb-5 last:mb-0 text-gray-para"
            >
              {para}
            </motion.p>
          ))}
      </div>
    </section>
  );
};

export default Main;
