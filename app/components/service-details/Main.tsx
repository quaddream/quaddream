
import { serviceDetails } from "./data";
import Image from "next/image";
const Main = () => {
  return ( 
    <section className="py-150 relative z-10 rounded-t-[20px] xl:rounded-tl-[40px] xl:rounded-tr-[40px] 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] mt-[-4.5%] bg-white">
      <div className="container">
        <h2 className="text-80 leading-[1.125] mb-5 lg:mb-8 2xl:mb-12 text-black">{serviceDetails.firstSection.title}</h2>
        <Image src={serviceDetails.firstSection.image} alt="" width={1920} height={1280} className="object-cover w-full mb-5 lg:mb-8 2xl:mb-12 h-[280px]  md:h-[400px] xl:h-[601px]  rounded-2xl" />
        {
          serviceDetails.firstSection.description.map((item, index) => (
            <p key={index} className="  text-19 leading-text19 mb-4 md:mb-5 last:mb-0 text-gray-para">{item}</p>
          ))
        }
      </div>
    </section>
   );
}
 
export default Main;