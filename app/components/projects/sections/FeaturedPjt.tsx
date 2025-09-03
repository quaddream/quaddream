// "use client";
// import React, { useState, Fragment } from "react";
// import Image from "next/image";
// import { Listbox, Transition } from "@headlessui/react";
// import { useRouter } from "next/navigation";

// type items = {
//   title: string;
//   image: string;
//   city: string;
//   status: string;
//   icon: string;
// };
// type datapop = {
//   heading: string;
//   desc: string;
//   items: items[];
// };
// type PjtProps = {
//   Data: datapop[];
// };
// const sector = [
//   { id: 1, name: "Sector" },
//   { id: 2, name: "Sector 2" },
//   { id: 3, name: "Sector 3" },
// ];
// const Status = [
//   { id: 1, name: "Status" },
//   { id: 2, name: "Completed" },
//   { id: 3, name: "In Progress" },
//   { id: 4, name: "Upcoming" },
// ];
// const Location = [
//   { id: 1, name: "Location" },
//   { id: 2, name: "Abu Dhabi" },
//   { id: 3, name: "Dubai" },
//   { id: 4, name: "Sharjah" },
// ];
// const FeaturedPjt: React.FC<PjtProps> = ({ Data }) => {
//   const [sectorselected, setsectorSelected] = useState(sector[0]);
//   const [Statusselected, setStatusSelected] = useState(Status[0]);
//   const [Locationselected, setLocationSelected] = useState(Location[0]);
//   const router = useRouter();

//   return (
//     <section className="py-150 rounded-t-2xl 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative z-10  bg-white mt-[-4.5%] ">
//       <div className="container ">
//         <div>
//           <h2 className="text-80 leading-[1.125] mb-5 md:mb-8 lg:mb-10  text-black">
//             {Data[0].heading}
//           </h2>
//           <p className="text-19 leading-[1.684210526315789] mb-0 max-w-[65ch] text-gray-para">
//             {Data[0].desc}
//           </p>
//         </div>
//         <div className="flex md:flex-row flex-col items-center justify-between gap-5 lg:gap-8 my-7 mb-7 pb-7 md:mb-12 md:pb-12 border-b border-lite-gray">
//           <div className="md:grid md:grid-cols-3 gap-5 lg:gap-8 w-full md:w-5/7 2xl:w-6/7 justify-between">
//             <div className="mb-5 md:mb-0">
//               <Listbox value={sectorselected} onChange={setsectorSelected}>
//                 <div className="relative">
//                   <Listbox.Button className="cursor-pointer focus:outline-none flex w-full items-center justify-between rounded-full    bg-[#F9F9F9]  p-5 lg:p-7 text-left   border-0  ">
//                     <span>{sectorselected.name}</span>
//                     <Image
//                       src="/assets/images/arrow-down.svg"
//                       alt="arrow-down"
//                       width={20}
//                       height={8}
//                       className="md:w-[18px] md:h-[12px]"
//                     />
//                   </Listbox.Button>

//                   <Transition
//                     as={Fragment}
//                     leave="transition ease-in duration-150"
//                     leaveFrom="opacity-100"
//                     leaveTo="opacity-0"
//                   >
//                     <Listbox.Options className="focus:outline-none absolute mt-1 max-h-60 w-full overflow-auto rounded-xl border border-gray-200  z-10 bg-white ">
//                       {sector.map((option) => (
//                         <Listbox.Option
//                           key={option.id}
//                           value={option}
//                           className={({ active }) =>
//                             `cursor-pointer px-4 py-2 ${
//                               active ? "bg-primary text-white" : "text-gray-700"
//                             }`
//                           }
//                         >
//                           <div className="flex items-center justify-between">
//                             <span>{option.name}</span>
//                           </div>
//                         </Listbox.Option>
//                       ))}
//                     </Listbox.Options>
//                   </Transition>
//                 </div>
//               </Listbox>
//             </div>
//             <div className="mb-5 md:mb-0">
//               <Listbox value={Statusselected} onChange={setStatusSelected}>
//                 <div className="relative">
//                   <Listbox.Button className="cursor-pointer focus:outline-none flex w-full items-center justify-between rounded-full    bg-[#F9F9F9]  p-5 lg:p-7 text-left  border-0 ">
//                     <span>{Statusselected.name}</span>
//                     <Image
//                       src="/assets/images/arrow-down.svg"
//                       alt="arrow-down"
//                       width={20}
//                       height={8}
//                       className="md:w-[18px] md:h-[12px]"
//                     />
//                   </Listbox.Button>

//                   <Transition
//                     as={Fragment}
//                     leave="transition ease-in duration-150"
//                     leaveFrom="opacity-100"
//                     leaveTo="opacity-0"
//                   >
//                     <Listbox.Options className="cursor-pointer focus:outline-none absolute mt-1 max-h-60 w-full overflow-auto rounded-xl border border-gray-200 z-10  bg-white ">
//                       {Status.map((option) => (
//                         <Listbox.Option
//                           key={option.id}
//                           value={option}
//                           className={({ active }) =>
//                             `cursor-pointer px-4 py-2 ${
//                               active ? "bg-primary text-white" : "text-gray-700"
//                             }`
//                           }
//                         >
//                           <div className="flex items-center justify-between">
//                             <span>{option.name}</span>
//                           </div>
//                         </Listbox.Option>
//                       ))}
//                     </Listbox.Options>
//                   </Transition>
//                 </div>
//               </Listbox>
//             </div>
//             <div>
//               <Listbox value={Locationselected} onChange={setLocationSelected}>
//                 <div className="relative">
//                   <Listbox.Button className="cursor-pointer focus:outline-none flex w-full items-center justify-between rounded-full    bg-[#F9F9F9]  p-5 lg:p-7 text-left  border-0 ">
//                     <span>{Locationselected.name}</span>
//                     <Image
//                       src="/assets/images/arrow-down.svg"
//                       alt="arrow-down"
//                       width={20}
//                       height={8}
//                       className="md:w-[18px] md:h-[12px]"
//                     />
//                   </Listbox.Button>

//                   <Transition
//                     as={Fragment}
//                     leave="transition ease-in duration-150"
//                     leaveFrom="opacity-100"
//                     leaveTo="opacity-0"
//                   >
//                     <Listbox.Options className="focus:outline-none absolute mt-1 max-h-60 w-full overflow-auto rounded-xl border border-gray-200 z-10  bg-white ">
//                       {Location.map((option) => (
//                         <Listbox.Option
//                           key={option.id}
//                           value={option}
//                           className={({ active }) =>
//                             `cursor-pointer px-4 py-2 ${
//                               active ? "bg-primary text-white" : "text-gray-700"
//                             }`
//                           }
//                         >
//                           <div className="flex items-center justify-between ">
//                             <span>{option.name}</span>
//                           </div>
//                         </Listbox.Option>
//                       ))}
//                     </Listbox.Options>
//                   </Transition>
//                 </div>
//               </Listbox>
//             </div>
//           </div>
//           <div className="w-full md:w-2/7 2xl:w-1/7">
//             <div className="flex items-center justify-center">
//               <button
//                 className="group bg-primary text-white border-2 border-transparent
//                p-5 lg:p-7 rounded-full w-full md:w-[219px] flex items-center justify-between
//                cursor-pointer transition-all duration-300 ease-in-out
//                hover:bg-white hover:text-primary hover:border-primary"
//               >
//                 <p className="transition-colors duration-300">Search</p>

//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   className="transition-transform duration-300 group-hover:scale-110 group-hover:stroke-primary"
//                 >
//                   <path
//                     d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M22 22L20 20"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
//           {Data[0].items.map((item, index) => (
//             <div
//               className="cursor-pointer h-[300px] lg:h-[408px] xl:h-[502px] overflow-hidden rounded-xl bg-cover bg-center relative group bgrd"
//               style={{ backgroundImage: `url(${item.image})` }}
//               key={index}
//               onClick={() => router.push(`/projects/1`)}
//             >
//               <div className="absolute bottom-0 w-full p-7 lg:p-10 z-10 ">
//                 <div className="relative flex items-center justify-between lg:mb-7 lg:pb-7 mb-3 pb-3 border-b-3  border-white  transition-all duration-300">
//                   <div className="flex items-center gap-2">
//                     <Image
//                       src={item.icon}
//                       alt={item.title}
//                       width={20}
//                       height={20}
//                     />
//                     <p className="transition-all duration-300 text-white">
//                       {item.city}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="transition-all duration-300 text-white">
//                       {item.status}
//                     </p>
//                   </div>
//                   <div className="absolute bottom-[-3px] w-0 h-[3px] group-hover:w-full bg-primary  transition-all duration-300"></div>
//                 </div>
//                 <div>
//                   <p className=" text-33 leading-[1.2] uppercase text-white">
//                     {item.title}
//                   </p>
//                 </div>
//               </div>
//               <div className="absolute top-0 w-full h-full bg-black opacity-50  rounded-xl  transition-all duration-300"></div>
//               <div className="absolute bottom-0 w-full h-0 group-hover:h-full rounded-xl   hrbg transition-all duration-300"></div>
//             </div>
//           ))}
//         </div>
//         <div className="flex items-center justify-center gap-2 mt-12">
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedPjt;

"use client";
import React, { useState, Fragment } from "react";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import Pagination from "@/app/components/common/Pagination"; // your pagination component

type Item = {
  title: string;
  image: string;
  city: string;
  status: string;
  icon: string;
  sector?: string;
};

type DataPop = {
  heading: string;
  desc: string;
  items: Item[];
};

type PjtProps = {
  Data: DataPop[];
};

// Filter options
const sectorOptions = [
  { id: 1, name: "Sector" },
  { id: 2, name: "Construction & Scaffolding" },
  { id: 3, name: "Hospitality" },
  { id: 4, name: "Commercial" },
];

const statusOptions = [
  { id: 1, name: "Status" },
  { id: 2, name: "Completed" },
  { id: 3, name: "In Progress" },
  { id: 4, name: "Upcoming" },
];

const locationOptions = [
  { id: 1, name: "Location" },
  { id: 2, name: "Abu Dhabi" },
  { id: 3, name: "Dubai" },
  { id: 4, name: "Sharjah" },
];

const FeaturedPjt: React.FC<PjtProps> = ({ Data }) => {
  const router = useRouter();

  // Filters state
  const [sectorSelected, setSectorSelected] = useState(sectorOptions[0]);
  const [statusSelected, setStatusSelected] = useState(statusOptions[0]);
  const [locationSelected, setLocationSelected] = useState(locationOptions[0]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Filter items
  const filteredItems = Data[0].items.filter((item) => {
    const sectorMatch =
      sectorSelected.name === "Sector" || item.sector === sectorSelected.name;
    const statusMatch =
      statusSelected.name === "Status" || item.status === statusSelected.name;
    const locationMatch =
      locationSelected.name === "Location" ||
      item.city === locationSelected.name;

    return sectorMatch && statusMatch && locationMatch;
  });

  // Pagination calculations
  const totalItems = filteredItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, endIndex);

  return (
    <section className="py-150 rounded-t-[20px] xl:rounded-tl-[40px] xl:rounded-tr-[40px] 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative z-10 bg-white mt-[-4.5%]">
      <div className="container">
        {/* Heading & Description */}
        <div>
          <h2 className="text-80 leading-[1.125] mb-5 md:mb-8 lg:mb-10 text-black">
            {Data[0].heading}
          </h2>
          <p className="text-19 leading-[1.684] mb-0 max-w-[65ch] text-gray-para">
            {Data[0].desc}
          </p>
        </div>

        {/* Filters */}
        <div className="flex md:flex-row flex-col items-center justify-between gap-5 lg:gap-8 my-7 mb-7 pb-7 md:mb-12 md:pb-12 border-b border-lite-gray">
          <div className="md:grid md:grid-cols-3 gap-5 lg:gap-8 w-full md:w-5/7 2xl:w-6/7 justify-between">
            {[
              {
                state: sectorSelected,
                setState: setSectorSelected,
                options: sectorOptions,
              },
              {
                state: statusSelected,
                setState: setStatusSelected,
                options: statusOptions,
              },
              {
                state: locationSelected,
                setState: setLocationSelected,
                options: locationOptions,
              },
            ].map((filter, idx) => (
              <div key={idx} className="mb-5 md:mb-0">
                <Listbox value={filter.state} onChange={filter.setState}>
                  <div className="relative">
                    <Listbox.Button className="cursor-pointer focus:outline-none flex w-full items-center justify-between rounded-full bg-[#F9F9F9] p-5 lg:p-7 text-left border-0">
                      <span>
                        {filter.state.name.length > 12
                          ? filter.state.name.slice(0, 12) + "..."
                          : filter.state.name}
                      </span>
                      <Image
                        src="/assets/images/arrow-down.svg"
                        alt="arrow-down"
                        width={20}
                        height={8}
                        className="md:w-[18px] md:h-[12px]"
                      />
                    </Listbox.Button>

                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="focus:outline-none absolute mt-1 max-h-60 w-full overflow-auto rounded-xl border border-gray-200 z-10 bg-white">
                        {filter.options.map((option) => (
                          <Listbox.Option
                            key={option.id}
                            value={option}
                            className={({ active }) =>
                              `cursor-pointer px-4 py-2 ${
                                active
                                  ? "bg-primary text-white"
                                  : "text-gray-700"
                              }`
                            }
                          >
                            <span>{option.name}</span>
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            ))}
          </div>

          {/* Search button (optional, can trigger a function if needed) */}
          <div className="w-full md:w-2/7 2xl:w-1/7 flex items-center justify-center">
            <button
              className="group bg-primary  text-white border-2 border-transparent 
               p-5 lg:p-7 rounded-full w-full  flex items-center justify-between 
               cursor-pointer transition-all duration-300 ease-in-out
               hover:bg-white hover:text-primary hover:border-primary"
              onClick={() => setCurrentPage(1)} // reset page on filter change
            >
              <p className="transition-colors duration-300">Search</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform duration-300 group-hover:scale-110 group-hover:stroke-primary"
              >
                <path
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 22L20 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {paginatedItems.map((item, index) => (
            <div
              className="cursor-pointer h-[300px] lg:h-[408px] xl:h-[502px] overflow-hidden rounded-xl bg-cover bg-center relative group bgrd"
              style={{ backgroundImage: `url(${item.image})` }}
              key={index}
              onClick={() => router.push(`/projects/1`)}
            >
              <div className="absolute bottom-0 w-full p-7 lg:p-10 z-10">
                <div className="relative flex items-center justify-between lg:mb-7 lg:pb-7 mb-3 pb-3 border-b-3 border-white transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={20}
                      height={20}
                    />
                    <p className="transition-all duration-300 text-white">
                      {item.city}
                    </p>
                  </div>
                  <div>
                    <p className="transition-all duration-300 text-white">
                      {item.status}
                    </p>
                  </div>
                  <div className="absolute bottom-[-3px] w-0 h-[3px] group-hover:w-full bg-primary transition-all duration-300"></div>
                </div>
                <div>
                  <p className="text-33 leading-[1.2] uppercase text-white">
                    {item.title}
                  </p>
                </div>
              </div>
              <div className="absolute top-0 w-full h-full bg-black opacity-50 rounded-xl transition-all duration-300"></div>
              <div className="absolute bottom-0 w-full h-0 group-hover:h-full rounded-xl hrbg transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default FeaturedPjt;
