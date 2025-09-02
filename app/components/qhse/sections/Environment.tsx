import React from "react";
import Image from "next/image";

type Item = {
  icon: string;
  text: string;
};

type EnvironmentalResponsibilityProps = {
  environmentalData: {
    heading: string;
    subheading: string;
    description: string;
    items: Item[];
  };
};

const EnvironmentalResponsibility: React.FC<
  EnvironmentalResponsibilityProps
> = ({ environmentalData }) => {
  const { heading, subheading, description, items } = environmentalData;

  return (
    <section className="py-124 xl:py-150 bg-[#F9F9F9]">
      <div className="container">
        <h1 className="text-80   leading-[1.14] mb-5 md:mb-8 lg:mb-12 text-black">
          {heading}
        </h1>
        <h2 className="text-25 md:text-30 leading-[1.34] mb-[15px] xl:mb-[30px] text-black">
          {subheading}
        </h2>
        <p className="text-19 leading-[1.7] text-gray-para">{description}</p>

        <div className="mt-3 md:mt-4 lg:mt-0">
          {items?.map((item, index) => (
            <div
              key={index}
              className="flex items-center group py-[15px] xl:py-[50px] gap-2 lg:gap-[30px] border-b border-lite-gray hover:border-primary transition duration-300"
            >
              <div className="flex-shrink-0  md:mt-0 w-[42px] h-[42px] flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.text}
                  width={42}
                  height={42}
                  className="w-[25px] h-[25px]  md:w-[42px] md:h-[42px] brightness-0 group-hover:invert-0 group-hover:brightness-100 transition-all duration-300"
                />
              </div>

              <p className="text-19 md:text-25 leading-[1.6] text-black">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalResponsibility;
