"use client";
import React, { useState, Fragment } from "react";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";

type items = {
  title: string;
  image: string;
  city: string;
  status: string;
  icon: string;
};
type datapop = {
  heading: string;
  desc: string;
  items: items[];
};
type PjtProps = {
  Data: datapop[];
};
const sector = [
  { id: 1, name: "Sector" },
  { id: 2, name: "Sector 2" },
  { id: 3, name: "Sector 3" },
];
const Status = [
  { id: 1, name: "Completed" },
  { id: 2, name: "In Progress" },
  { id: 3, name: "Upcoming" },
];
const Location = [
  { id: 1, name: "Abu Dhabi" },
  { id: 2, name: "Dubai" },
  { id: 3, name: "Sharjah" },
];
const FeaturedPjt: React.FC<PjtProps> = ({ Data }) => {
  const [sectorselected, setsectorSelected] = useState(sector[0]);
  const [Statusselected, setStatusSelected] = useState(Status[0]);
  const [Locationselected, setLocationSelected] = useState(Location[0]);

  return (
    <section className="py-150 rounded-t-2xl 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative  ">
      <div className="container ">
        <div>
          <h2 className="text-80 leading-[1.125] mb-10  ">{Data[0].heading}</h2>
          <p className="text-19 leading-[1.684210526315789] mb-0 max-w-[65ch] text-[#696969]">
            {Data[0].desc}
          </p>
        </div>
        <div className="flex items-center justify-between gap-5 my-7 mb-12 pb-12 border-b border-[#BCBCBC]">
            <div className="grid grid-cols-3 gap-5 w-6/7">
                <div >
                    <Listbox value={sectorselected} onChange={setsectorSelected}>
                    <div className="relative">
                        <Listbox.Button className="flex w-full items-center justify-between rounded-full    bg-[#F9F9F9]  p-7 text-left shadow-sm border-0  ">
                        <span>{sectorselected.name}</span>
                        <ChevronDown size={18} />
                        </Listbox.Button>

                        <Transition
                        as={Fragment}
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        >
                        <Listbox.Options
                            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-xl border border-gray-200  z-10 bg-white shadow-lg"
                        >
                            {sector.map((option) => (
                            <Listbox.Option
                                key={option.id}
                                value={option}
                                className={({ active }) =>
                                `cursor-pointer px-4 py-2 ${
                                    active ? "bg-blue-500 text-white" : "text-gray-700"
                                }`
                                }
                            >
                                {({ selected }) => (
                                <div className="flex items-center justify-between">
                                    <span>{option.name}</span>
                                    {selected && <Check size={16} />}
                                </div>
                                )}
                            </Listbox.Option>
                            ))}
                        </Listbox.Options>
                        </Transition>
                    </div>
                    </Listbox>
                </div>
                <div >
                    <Listbox value={Statusselected} onChange={setStatusSelected}>
                    <div className="relative">
                        <Listbox.Button className="flex w-full items-center justify-between rounded-full    bg-[#F9F9F9]  p-7 text-left shadow-sm border-0 ">
                        <span>{Statusselected.name}</span>
                        <ChevronDown size={18} />
                        </Listbox.Button>

                        <Transition
                        as={Fragment}
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        >
                        <Listbox.Options
                            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-xl border border-gray-200 z-10  bg-white shadow-lg"
                        >
                            {Status.map((option) => (
                            <Listbox.Option
                                key={option.id}
                                value={option}
                                className={({ active }) =>
                                `cursor-pointer px-4 py-2 ${
                                    active ? "bg-blue-500 text-white" : "text-gray-700"
                                }`
                                }
                            >
                                {({ selected }) => (
                                <div className="flex items-center justify-between">
                                    <span>{option.name}</span>
                                    {selected && <Check size={16} />}
                                </div>
                                )}
                            </Listbox.Option>
                            ))}
                        </Listbox.Options>
                        </Transition>
                    </div>
                    </Listbox>
                </div>
                <div >
                    <Listbox value={Locationselected} onChange={setLocationSelected}>
                    <div className="relative">
                        <Listbox.Button className="flex w-full items-center justify-between rounded-full    bg-[#F9F9F9]  p-7 text-left shadow-sm border-0 ">
                        <span>{Locationselected.name}</span>
                        <ChevronDown size={18} />
                        </Listbox.Button>

                        <Transition
                        as={Fragment}
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        >
                        <Listbox.Options
                            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-xl border border-gray-200 z-10  bg-white shadow-lg"
                        >
                            {Location.map((option) => (
                            <Listbox.Option
                                key={option.id}
                                value={option}
                                className={({ active }) =>
                                `cursor-pointer px-4 py-2 ${
                                    active ? "bg-blue-500 text-white" : "text-gray-700"
                                }`
                                }
                            >
                                {({ selected }) => (
                                <div className="flex items-center justify-between ">
                                    <span>{option.name}</span>
                                    {selected && <Check size={16} />}
                                </div>
                                )}
                            </Listbox.Option>
                            ))}
                        </Listbox.Options>
                        </Transition>
                    </div>
                    </Listbox>
                </div>
            </div>
            <div className="w-1/7">
                <div>
                <button className="bg-primary text-white p-7 rounded-full w-[219px] flex items-center justify-between"><p>search</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 22L20 20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>
                </div>
            </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5 ">
            {Data[0].items.map((item,index)=>(
            <div className="h-[502px] overflow-hidden rounded-xl bg-cover bg-center relative group bgrd" style={{backgroundImage: `url(${item.image})`,}} key={index}>
                    <div className="absolute bottom-0 w-full p-10 z-10 ">
                    <div className=" flex items-center justify-between mb-7 pb-7 border-b-3  border-white group-hover:border-primary transition-all duration-300">
                        <div className="flex items-center gap-2">
                        <Image src={item.icon} alt={item.title} width={20} height={20}  /> 
                            <p className="transition-all duration-300 text-white">{item.city}</p> 
                        </div>
                        <div>
                            <p className="transition-all duration-300 text-white">{item.status}</p>
                        </div>
                    </div>
                    <div>
                        <p className=" text-33 uppercase text-white">{item.title}</p>
                    </div>
                    </div>
                    <div className="absolute top-0 w-full h-full bg-black opacity-50  rounded-xl  transition-all duration-300"></div>
                    <div className="absolute bottom-0 w-full h-0 group-hover:h-full rounded-xl   hrbg transition-all duration-300"></div>
            </div>
            ))}
        </div>
        <div className="flex items-center justify-center gap-2 mt-12">
            <div className="w-8 h-9 md:w-12 md:h-12 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer">
                <p className="mb-0 ">1</p>
            </div>
            <div className="w-8 h-9 md:w-12 md:h-12 rounded-full hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer">
                <p className="mb-0 ">2</p>
            </div>
            <div className="w-8 h-9 md:w-12 md:h-12 rounded-full hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer">
                <p className="mb-0 ">3</p>
            </div>  
        </div>
      </div>
    </section>
  );
};

export default FeaturedPjt;
