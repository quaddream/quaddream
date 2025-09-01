"use client";
import Image from "next/image";

type SafetyItem = {
  icon: string;
  title: string;
  highlight?: boolean;
};

type HealthSafetyProps = {
  safetyData: {
    heading: string;
    subheading: string;
    description: string;
    items: SafetyItem[];
  };
};

const HealthSafety = ({ safetyData }: HealthSafetyProps) => {
  return (
    <section className="bg-black py-124 xl:py-150">
      <div className="container">
        {/* Heading */}
        <div>
          <h2 className="text-80  leading-[1.13] mb-[15px] xl:mb-[50px] text-white">
            {safetyData.heading}
          </h2>
          <p className="text-33 leading-[1.21] mb-[15px] xl:mb-[30px] text-white">
            {safetyData.subheading}
          </p>
          <p className="text-19 leading-[1.7] text-lite-gray mb-[15px] xl:mb-[30px]">
            {safetyData.description}
          </p>
        </div>
        {/* Cards */}
        <div className="grid gap-[15px] xl:gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
          {safetyData.items.map((item, idx) => (
            <div
              key={idx}
              className={`relative group flex flex-col xl:p-[40px] p-[25px] rounded-[16px] bg-[#111111] transition-all duration-300 hover:bg-[linear-gradient(138deg,rgba(17,17,17,1)_22%,rgba(108,0,4,1)_100%)]`}
            >
              <div className="w-[67px] h-[67px] bg-[#1B1B1B] rounded-[8px] flex items-center justify-center mb-[15px] xl:mb-[30px] group-hover:bg-primary transition-all duration-200">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={34}
                  height={34}
                  className="group-hover:invert group-hover:brightness-0 transition-all duration-300"
                />
              </div>
              <p className="text-25   leading-[1.6]  text-white">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthSafety;
