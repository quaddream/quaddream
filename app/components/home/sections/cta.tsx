import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CTA() {
  return (
    <section
      className="relative  flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/assets/home/cta-bg-image.jpg')", // replace with your actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "linear-gradient(0deg, rgb(0 0 0 / 77%) 0%, rgb(0 0 0 / 72%) 100%)",
       
      }}
    ></div>

      {/* Content */}
      <div className="relative z-10 lg:max-w-4xl px-4 py-[146px]">
        <h1 className="text-80 font-400 leading-[67px] lg:leading-[90px]">
          Let’s Build Something
          <br />
          Safe — Together.
        </h1>
        <p className="my-[39px] text-19 text-[#BCBCBC] leading-[32px]">
          Need scaffolding support for your next project? Contact us today to discuss your requirements.
        </p>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <button className="flex items-center gap-3 text-white text-16 px-6 py-3 rounded-[60px] font-medium cursor-pointer transition border border-white" >
            Get in Touch
            <span className="bg-red-600 text-white p-2 rounded-full">
              <Image src="/assets/home/arrow-right.svg" alt="Arrow" width={24} height={24} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
