"use client";
import { serviceDetails } from "./data";
import Image from "next/image";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
import { ProductsServicesData } from "../ProductsServices/type";

type SaftySectionProps = {
  Data: ProductsServicesData["thirdSection"]["items"][number]["fourthSection"];
};

const SaftySection = ({ Data }: SaftySectionProps) => {
  return (
    <section className="py-150 bg-[#f9f9f9]">
      <div className="container">
        <motion.h2
          variants={moveUp()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-80 leading-[1.125] mb-5 lg:mb-8 2xl:mb-12 "
        >
          {Data.title}
        </motion.h2>
        <motion.p
          variants={moveUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-19 leading-text19   text-gray-para mb-0"
        >
          {Data.description}
        </motion.p>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-between gap-8 lg:gap-0 mt-8 2xl:mt-12">
            {Data.items.map((item, index) => (
              <motion.div
                variants={moveUp(index * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                key={index}
                className="lg:border-r border-[#bebebe] last:border-r-0 group lg:pl-10 xl:pl-10 first:pl-0 pr-10 last:pr-0 lg:last:w-[35%] xl:last:w-[38%]  2xl:last:w-[27%]"
              >
                <div className="bg-primary p-3 rounded-lg w-fit mb-4 xl:mb-[30px] group-hover:bg-black group-hover:-translate-y-2 transition-all duration-300">
                  <Image
                    src={item.logo}
                    alt={item.logoAlt}
                    width={100}
                    height={100}
                    className="w-10 h-10 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-33 lg:text-19 xl:text-33 leading-[1.212121212121212] max-w-[22ch] lg:max-w-[18ch] text-black group-hover:text-primary transition-all duration-300">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaftySection;
