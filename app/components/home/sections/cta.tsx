import Image from "next/image";
import Link from "next/link";
export default function CTA() {
  return (
    <section
      className="relative  flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/assets/images/home/cta-bg-image.jpg')", // replace with your actual image path
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
      <div className="relative z-10 lg:max-w-4xl px-4 py-150">
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
         
          <Link href="" className='flex items-center gap-2 cursor-pointer text-16 border-2 border-white py-[10px] px-[20px] rounded-[60px] w-fit z-10 group'>
                        <span>Get in Touch</span>
                        <span className='bg-primary p-[14px] rounded-full block group-hover:translate-x-[10px] transition-all duration-300'>
                            <Image src="/assets/images/home/arrow-right.svg" alt="Arrow" width={30} height={30} />
                        </span>
                      </Link>
        </div>
      </div>
    </section>
  );
}
