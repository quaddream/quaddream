"use client"
import { serviceDetails } from "./data";
import Image from "next/image";
const SaftySection = () => {
  return ( 
    <section className="py-150 bg-[#f9f9f9]">
      <div className="container">
        <h2 className="text-80 leading-[1.125] mb-5 lg:mb-8 2xl:mb-12 text-black">{serviceDetails.safetySection.title}</h2>
        <p className="text-19 leading-text19 mb-4">{serviceDetails.safetySection.description}</p>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-8 2xl:mt-12">
            {serviceDetails.safetySection.items.map((item, index) => (
              <div key={index} className="border-r border-[#bebebe] last:border-r-0 group xl:pl-10 first:pl-0 first:pr-10 ">
                <div className="bg-primary p-3 rounded-lg w-fit mb-4 xl:mb-[30px] group-hover:bg-black group-hover:-translate-y-2 transition-all duration-300">
                  <Image src={item.icon} alt="" width={100} height={100} className="w-10 h-10 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-25 leading-[1.212121212121212] text-black group-hover:text-primary transition-all duration-300">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default SaftySection;