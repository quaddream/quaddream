import { homeData } from "../data";
import Image from "next/image";
const IndustriesList = () => {
  return (
    <section className="py-150 bg-white">
      <div className="container">
        <h2 className="text-80 leading-[1.125] mb-10 2xl:mb-50px">Industries We Serve</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[1px] relative">
          <div className="absolute top-[50%] left-0 translate-y-[-50%] h-[0.5px] w-full bg-black z-40 hidden 2xl:block"></div>
          {homeData.industriesList.items.map((item, index) => (
            <div key={index} className="bg-theme-pink overflow-hidden rounded-2xl relative flex flex-col justify-between group">
              <div className="absolute top-0 left-0 w-full h-full bg-white z-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Image src={item.image} alt={item.title} width={500} height={500} className="h-full w-full object-cover" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/40 to-100% z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute top-[50%] translate-y-[-50%] left-0 w-0 h-[3px] bg-white z-40 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-300"></div>
              <div className="absolute top-[50%] translate-y-[-50%] left-0 w-[51px] h-[51px] bg-white rounded-full
               z-40 opacity-0 group-hover:opacity-100 group-hover:left-[75%] transition-all duration-500 flex items-center justify-center">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.9283 6.32861L21.0144 12.3986L14.9283 18.4686" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.96924 12.3979H20.8437" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="pb-5 2xl:pb-[57.7px] px-30px pt-30px relative z-10">
                <Image src={item.icon} alt={item.title} width={50} height={50} className=" group-hover:invert group-hover:brightness-0 transition-all duration-300" />
              </div>
              <div className="px-30px 2xl:pt-[33.3x] pb-4 2xl:pb-[28px] relative z-10">
                <h3 className="text-25 leading-[1.6] font-light group-hover:text-white transition-all duration-300">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesList;