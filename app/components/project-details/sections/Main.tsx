import { projectDetails } from "@/app/components/project-details/data";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
const Main = () => {
  return (
    <section className="py-150 rounded-t-[20px] xl:rounded-tl-[40px] xl:rounded-tr-[40px] 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative z-[50] mt-[-4.5%] bg-white">
      <div className="container">
        <h2 className="text-80 leading-[1.125] mb-5 lg:mb-8 2xl:mb-30px text-black border-b border-lite-gray pb-5 md:pb-8 xl:pb-12">
          {projectDetails.project.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center mb-6 md:mb-12 gap-y-5 lg:gap-y-0">
          <div className="flex items-center gap-4 xl:gap-5">
            <div className="flex items-center justify-center rounded-full border border-lite-gray w-10 h-10 xl:w-[78px] xl:h-[78px]">
              <Image
                src={assets.clientIcon}
                alt=""
                width={24}
                height={24}
                className="w-5 xl:w-8 h-auto object-contain"
              />
            </div>
            <div className="flex flex-col gap-1 md:gap-3 ">
              <h3 className="text-19 leading-lh-text19 text-gray-para ">
                Client
              </h3>
              <h4 className="text-19 leading-lh-text19 text-black">
                {projectDetails.project.client}
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-4 xl:gap-5">
            <div className="flex items-center justify-center rounded-full border border-lite-gray w-10 h-10 xl:w-[78px] xl:h-[78px]">
              <Image
                src={assets.statusIcon}
                alt=""
                width={24}
                height={24}
                className="w-5 xl:w-8 h-auto object-contain"
              />
            </div>
            <div className="flex flex-col gap-1 md:gap-3 ">
              <h3 className="text-19 leading-lh-text19 text-gray-para ">
                Status
              </h3>
              <h4 className="text-19 leading-lh-text19 text-black">
                {projectDetails.project.status}
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-4 xl:gap-5">
            <div className="flex items-center justify-center rounded-full border border-lite-gray w-10 h-10 xl:w-[78px] xl:h-[78px]">
              <Image
                src={assets.sectorIcon}
                alt=""
                width={24}
                height={24}
                className="w-5 xl:w-8 h-auto object-contain"
              />
            </div>
            <div className="flex flex-col gap-1 md:gap-3 ">
              <h3 className="text-19 leading-lh-text19 text-gray-para ">
                Sector
              </h3>
              <h4 className="text-19 leading-lh-text19 text-black">
                {projectDetails.project.sector}
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-4 xl:gap-5">
            <div className="flex items-center justify-center rounded-full border border-lite-gray w-10 h-10 xl:w-[78px] xl:h-[78px]">
              <Image
                src={assets.locationIcon}
                alt=""
                width={24}
                height={24}
                className="w-5 xl:w-8 h-auto object-contain"
              />
            </div>
            <div className="flex flex-col gap-1 md:gap-3 ">
              <h3 className="text-19 leading-lh-text19 text-gray-para ">
                Location
              </h3>
              <h4 className="text-19 leading-lh-text19 text-black">
                {projectDetails.project.location}
              </h4>
            </div>
          </div>
        </div>
        <Image
          src={projectDetails.project.image}
          alt=""
          width={1920}
          height={1280}
          className="object-cover w-full mb-5 lg:mb-8 2xl:mb-50px h-[260px] md:h-[400px] xl:h-[601px] rounded-2xl"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 2xl:gap-25">
          <div>
            <h2 className="text-80 leading-[1.125] text-black mb-5 md:mb-8 xl:mb-12">
              Project Description
            </h2>
            <p className="text-19 leading-lh-text19 text-gray-para">
              {projectDetails.project.description}
            </p>
          </div>
          <div className="mt-0 lg:mt-5">
            <h3 className="text-30 leading-text25 text-black mb-5 md:mb-8 xl:mb-12 border-b border-lite-gray pb-4">
              Services Delivered
            </h3>
            <ul className="list-disc list-inside marker:text-primary">
              {projectDetails.project.servicesDelivered.map(
                (service, index) => (
                  <li
                    key={index}
                    className="text-19 leading-lh-text19 text-gray-para "
                  >
                    {service}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
