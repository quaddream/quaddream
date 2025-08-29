"use client";

import React, { FC, ReactNode } from "react";
import Image from "next/image";

interface SliderViewAllBtnProps {
  text: string | ReactNode;
  onClick?: () => void;
  className?: string;
}

const SliderViewAllBtn: FC<SliderViewAllBtnProps> = ({
  text,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center border text-16 border-black lg:px-[20px] px-[15px] lg:py-[10px] py-[8px] rounded-full  ${
        className || ""
      }`}
    >
      {text}
      <div className="xl:w-[52px] w-[42px] xl:ml-[20px] lg:ml-[15px] ml-[10px] xl:h-[52px] h-[42px] flex items-center justify-center bg-primary text-white rounded-full group-hover:translate-x-[10px] transition-all duration-300">
        <span>
          <Image
            src="/assets/images/home/arrow-right.svg"
            alt="Arrow"
            width={24}
            height={24}
          />
        </span>
      </div>
    </button>
  );
};

export default SliderViewAllBtn;
