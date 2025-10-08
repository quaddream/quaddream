"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
import { ProductsServicesData } from "../ProductsServices/type";

type ProductsListProps = {
  Data: ProductsServicesData["thirdSection"]["items"][number]["productSection2"]["sections"];
  title: string;
};

const ProductsList = ({ Data,title }: ProductsListProps) => {
  console.log("Data", Data)
  return (
    <section className="py-150">
      <div className="container">
      <motion.h2
          variants={moveUp()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-80 leading-[1.125] mb-5 lg:mb-8 2xl:mb-12 text-black"
        >
          {title}
        </motion.h2>
        {Data.map((section,index)=>{
          return(
            <div key={index}>
            <motion.p
          variants={moveUp()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-30 leading-[1.125] mb-5 lg:mb-8 2xl:mb-12 mt-8 font-bold text-black"
        >
          {section.title}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10 items-stretch">
          {section.items.map((product, index) => (
            <motion.div
              variants={moveUp(index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={index}
              className="bg-white rounded-xl border border-lite-gray  group grid grid-cols-1 grid-rows-[3fr_auto] justify-between h-full relative overflow-hidden"
            >
              <div className="relative py-[22.85px]">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  width={100}
                  height={100}
                  className="w-full h-auto object-contain max-h-[278.56px]"
                />
              </div>
              <div className="bg-[#f9f9f9] p-5 xl:p-9 rounded-t-[15px] group-hover:bg-primary transition-all duration-300">
                <h3 className="text-33 leading-[1.212121212121212] text-black group-hover:text-white transition-all duration-300">
                  {product.title}
                </h3>
              </div>
              <div
                className="translate-y-full rounded-lg bg-primary absolute tranlate-y-full w-full h-full group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100
              flex flex-col justify-end p-5 xl:p-[43.94px]"
              >
                <h3 className="text-33 leading-[1.212121212121212] text-white pb-4 xl:pb-[43.94px] border-b border-white">
                  {product.title}
                </h3>
                <div className="mt-3">
                  <p className="text-19 leading-text19 text-white">
                    {product.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      )
    })}
      </div>
    </section>
  );
};

export default ProductsList;
