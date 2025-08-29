
import { serviceDetails } from "./data";
import Image from "next/image";
const Main = () => {
  return ( 
    <section className="py-150 rounded-t-2xl xl:rounded-t-[100px] relative z-[50] mt-[-4.5%] bg-white">
      <div className="container">
        <h2 className="text-80 leading-[1.125] mb-5 lg:mb-8 2xl:mb-12 text-black">{serviceDetails.firstSection.title}</h2>
        <Image src={serviceDetails.firstSection.image} alt="" width={1920} height={1280} className="object-cover w-full mb-5 lg:mb-8 2xl:mb-12 h-400 xl:h-[601px] rounded-t-2xl" />
        {
          serviceDetails.firstSection.description.map((item, index) => (
            <p key={index} className="mb-4 text-19 leading-text19">{item}</p>
          ))
        }
      </div>
    </section>
   );
}
 
export default Main;