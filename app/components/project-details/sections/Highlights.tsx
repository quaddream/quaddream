import { projectDetails } from "@/app/components/project-details/data";
import Image from "next/image";
const Highlights = () => {
  return (
    <section className="py-150 bg-black">
      <div className="container">
        <h2 className="text-80 leading-[1.125] mb-5 lg:mb-8 2xl:mb-12 text-white">{projectDetails.project.highlights.title}</h2>
        <p className="text-19 leading-text19 mb-4 text-lite-gray xl:max-w-3xl">{projectDetails.project.highlights.description}</p>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 2xl:mt-12 justify-between">
            {projectDetails.project.highlights.items.map((item, index) => (
              <div key={index} className="border-r border-[#bebebe] last:border-r-0 group xl:pl-20 first:pl-0 pr-20 last:pr-0  ">
                <div className="bg-primary p-3 rounded-lg w-fit mb-4 xl:mb-[30px] group-hover:-translate-y-2 transition-all duration-300">
                  <Image src={item.icon} alt="" width={100} height={100} className="w-10 h-10 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-33 leading-[1.212121212121212] text-white transition-all duration-300">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;