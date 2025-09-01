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
        <h1 className="text-80   leading-[1.14] mb-[25px] xl:mb-[50px] text-black">
          {heading}
        </h1>
        <h2 className="text-30 xl:leading-[40px] mb-[15px] xl:mb-[30px] text-black">
          {subheading}
        </h2>
        <p className="text-19 leading-[1.7] text-gray-para">{description}</p>

        <div>
          {items?.map((item, index) => (
            <div
              key={index}
              className="flex lg:items-center group py-[15px] xl:py-[50px] gap-[25px] lg:gap-[30px] border-b border-lite-gray hover:border-primary transition duration-300"
            >
              <div className="flex-shrink-0 mt-3 md:mt-0 w-[42px] h-[42px] flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.text}
                  width={42}
                  height={42}
                  className="w-[42px] h-[42px] brightness-0 group-hover:invert-0 group-hover:brightness-100 transition-all duration-300"
                />
              </div>

              <p className="text-25 lg:leading-[40px] leading-[36px] text-black">
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
