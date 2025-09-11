"use client";
import React, { useState, Fragment, useRef } from "react";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import Pagination from "@/app/components/common/Pagination";
import { motion } from "motion/react";
import { moveUp } from "../../motionVarients";
import { Projects, Location, sector, StatusOption, BaseOption } from "../type";
import { statusData } from "@/app/components/AdminProject/statusData";

type PjtProps = {
  firstSection: Projects["firstSection"];
  projectlist: Projects["projects"];
  locationdata: Location;
  sectordata: sector;
};

const FeaturedPjt: React.FC<PjtProps> = ({
  firstSection,
  projectlist,
  locationdata,
  sectordata,
}) => {
  const router = useRouter();
  // Create filter options with proper types
  const statusOptions: StatusOption[] = [
    { id: 0, name: "Status", value: -1 },
    ...(Array.isArray(statusData)
      ? statusData.map(
          (sta, index) =>
            ({
              id: index + 1,
              name: sta.name,
              value: sta.value,
            }) as StatusOption
        )
      : []),
  ];

  const locationOptions: BaseOption[] = [
    { id: 1, name: "Location" },
    ...(Array.isArray(locationdata)
      ? locationdata.map((city, index) => ({
          id: index + 2,
          name: city.name || String(city),
        }))
      : []),
  ];

  const sectorOptions: BaseOption[] = [
    { id: 1, name: "Sector" },
    ...(Array.isArray(sectordata)
      ? sectordata.map((sector, index) => ({
          id: index + 2,
          name: sector.name || String(sector),
        }))
      : []),
  ];
  // Filters state with proper types
  const [sectorSelected, setSectorSelected] = useState<BaseOption>(
    sectorOptions[0]
  );
  const [statusSelected, setStatusSelected] = useState<StatusOption>(
    statusOptions[0]
  );
  const [locationSelected, setLocationSelected] = useState<BaseOption>(
    locationOptions[0]
  );
  const [searchQuery, setSearchQuery] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Filter items
  const filteredItems = projectlist.filter((item) => {
    const sectorMatch =
      sectorSelected.name === "Sector" ||
      item.firstSection.sector.name === sectorSelected.name;
    const statusMatch =
      statusSelected.name === "Status" ||
      (statusSelected.value !== -1 &&
        item.firstSection.status === statusSelected.value.toString());
    const locationMatch =
      locationSelected.name === "Location" ||
      item.firstSection.location.name === locationSelected.name;

    const searchMatch =
      !searchQuery ||
      item.firstSection.title.toLowerCase().includes(searchQuery.toLowerCase());

    return sectorMatch && statusMatch && locationMatch && searchMatch;
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
          <motion.h2
            className="text-80 leading-[1.125] mb-5 md:mb-8 lg:mb-10 text-black"
            variants={moveUp()}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.1, once: true }}
          >
            {firstSection.title}
          </motion.h2>
          <motion.p
            variants={moveUp(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.1, once: true }}
            className="text-19 leading-[1.684] mb-0 max-w-[65ch] text-gray-para"
          >
            {firstSection.description}
          </motion.p>
        </div>

        {/* Filters */}
        {/* <div className="flex md:flex-row flex-col items-center justify-between gap-5 lg:gap-8 my-7 mb-7 pb-7 md:mb-12 md:pb-12 border-b border-lite-gray">
          <div className="md:grid md:grid-cols-3 gap-5 lg:gap-8 w-full md:w-5/7 2xl:w-6/7 justify-between">
            {[
              {
                state: sectorSelected,
                setState: setSectorSelected as (value: BaseOption) => void,
                options: sectorOptions,
              },
              {
                state: statusSelected,
                setState: setStatusSelected as (value: StatusOption) => void,
                options: statusOptions,
              },
              {
                state: locationSelected,
                setState: setLocationSelected as (value: BaseOption) => void,
                options: locationOptions,
              },
            ].map((filter, idx) => (
              <motion.div
                variants={moveUp(idx * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.1, once: true }}
                key={idx}
                className="mb-5 md:mb-0"
              >
                <Listbox
                  value={filter.state}
                  onChange={filter.setState}
                  as="div"
                  className="relative w-full lg:w-auto"
                >
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
                        {filter.options.map(
                          (option: BaseOption | StatusOption) => (
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
                          )
                        )}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={moveUp(0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.1, once: true }}
            className="w-full md:w-2/7 2xl:w-1/7 flex items-center justify-center"
          >
            <div
              className="group bg-primary text-white border-2 border-transparent
               p-5 lg:p-7 rounded-full w-full flex items-center justify-between
               cursor-pointer transition-all duration-300 ease-in-out
               hover:bg-white hover:text-primary hover:border-primary"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="bg-transparent placeholder-white group-hover:placeholder-primary focus:outline-none w-full text-white
                 group-hover:text-primary transition-colors duration-300"
              />
              <button className="ml-4 flex-shrink-0 text-white group-hover:text-primary transition-colors duration-300">
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
          </motion.div>
        </div> */}

        <div className="flex md:flex-row flex-col items-center justify-between gap-5 lg:gap-8 my-7 mb-7 pb-7 md:mb-12 md:pb-12 border-b border-lite-gray">
          {/* Filters */}
          <div className="md:flex md:flex-1 md:gap-5 lg:gap-8 w-full md:w-auto transition-all duration-300 flex-col md:flex-row">
            {[
              {
                state: sectorSelected,
                setState: setSectorSelected as (value: BaseOption) => void,
                options: sectorOptions,
              },
              {
                state: statusSelected,
                setState: setStatusSelected as (value: StatusOption) => void,
                options: statusOptions,
              },
              {
                state: locationSelected,
                setState: setLocationSelected as (value: BaseOption) => void,
                options: locationOptions,
              },
            ].map((filter, idx) => (
              <motion.div
                key={idx}
                variants={moveUp(idx * 0.15)}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.1, once: true }}
                className="w-full md:flex-1 transition-colors duration-300"
              >
                <Listbox
                  value={filter.state}
                  onChange={filter.setState}
                  as="div"
                  className="relative w-full"
                >
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
                        {filter.options.map(
                          (option: BaseOption | StatusOption) => (
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
                          )
                        )}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </motion.div>
            ))}
          </div>

          {/* Search (expands only on md and above) */}
          <motion.div
            variants={moveUp(0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.1, once: true }}
            style={{ flexGrow: 0.4, flexShrink: 1, flexBasis: "0%" }}
            animate={{
              flexGrow: searchQuery ? 0.6 : 0.4,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            whileHover={{
              flexGrow: 0.6,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full flex items-center justify-center"
          >
            <div
              onClick={() => searchInputRef.current?.focus()}
              className="group bg-primary text-white border-2 border-transparent
                   p-5 lg:p-7 rounded-full w-full flex items-center justify-between
                   cursor-pointer transition-all duration-300 ease-in-out
                   hover:bg-white hover:text-primary hover:border-primary"
            >
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="bg-transparent placeholder-white group-hover:placeholder-primary focus:outline-none w-full text-white
                   group-hover:text-primary transition-colors duration-300"
              />
              <button className="ml-4 flex-shrink-0 text-white group-hover:text-primary transition-colors duration-300">
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
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {paginatedItems.map((item, index) => (
            <motion.div
              variants={moveUp(index * 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.1, once: true }}
              className="cursor-pointer h-[300px] lg:h-[408px] xl:h-[502px] overflow-hidden rounded-xl bg-cover bg-center relative group bgrd"
              style={{ backgroundImage: `url(${item.thumbnail})` }}
              key={index}
              onClick={() => router.push(`/projects/${item.slug}`)}
            >
              <div className="absolute bottom-0 w-full p-7 lg:p-10 z-10">
                <div className="relative flex items-center justify-between lg:mb-7 lg:pb-7 mb-3 pb-3 border-b-3 border-white transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/assets/images/projects/location.svg"}
                      alt={item.firstSection.title}
                      width={20}
                      height={20}
                    />
                    <p className="transition-all duration-300 text-white">
                      {item.firstSection.location.name}
                    </p>
                  </div>
                  <div>
                    <p className="transition-all duration-300 text-white">
                      {
                        statusData.find(
                          (status) =>
                            status.value.toString() === item.firstSection.status
                        )?.name
                      }
                    </p>
                  </div>
                  <div className="absolute bottom-[-3px] w-0 h-[3px] group-hover:w-full bg-primary transition-all duration-300"></div>
                </div>
                <div>
                  <p className="text-33 leading-[1.2] uppercase text-white">
                    {item.firstSection.title}
                  </p>
                </div>
              </div>
              <div className="absolute top-0 w-full h-full bg-black opacity-50 rounded-xl transition-all duration-300"></div>
              <div className="absolute bottom-0 w-full h-0 group-hover:h-full rounded-xl hrbg transition-all duration-300"></div>
            </motion.div>
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
