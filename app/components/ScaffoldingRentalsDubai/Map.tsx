"use client";

import Image from "next/image";
import { useState } from "react";

interface Region {
  id: string;
  label: string;
  pinX: number;
  pinY: number;
}

const REGIONS: Region[] = [
  {
    id: "dubai",
    label: "Dubai",
    pinX: (636.389 / 870) * 100,
    pinY: (160.104 / 628) * 100,
  },
  {
    id: "abu-dhabi",
    label: "Abu Dhabi",
    pinX: (381.632 / 870) * 100,
    pinY: (488.368 / 628) * 100,
  },
  {
    id: "sharjah",
    label: "Sharjah",
    pinX: (669.618 / 870) * 100,
    pinY: (109.757 / 628) * 100,
  },
  {
    id: "ajman",
    label: "Ajman",
    pinX: (684.722 / 870) * 100,
    pinY: (94.652 / 628) * 100,
  },
  {
    id: "ras-al-khaimah",
    label: "Ras Al Khaimah",
    pinX: (728.021 / 870) * 100,
    pinY: (69.480 / 628) * 100,
  },
  {
    id: "fujairah",
    label: "Fujairah",
    pinX: (805.556 / 870) * 100,
    pinY: (215.486 / 628) * 100,
  },
  {
    id: "umm-al-quwain",
    label: "Umm Al Quwain",
    pinX: (701.841 / 870) * 100,
    pinY: (81.563 / 628) * 100,
  },
];

export default function ServiceAreas() {
  const [activeId, setActiveId] = useState<string>("dubai");

  return (
    <section className="bg-white pb-150">
      <div className="container">

        {/* Title */}
        <h2 className="text-80 font-400 leading-[1.125] text-black mb-[46px]">
          Service Areas
        </h2>

        {/* Tab Buttons */}
        <div
          className="flex flex-wrap gap-2 lg:gap-[20px] mb-[60px]"
          role="tablist"
          aria-label="UAE service regions"
        >
          {REGIONS.map((region) => {
            const isActive = activeId === region.id;
            return (
              <button
                key={region.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${region.id}`}
                onClick={() => setActiveId(region.id)}
                className={`px-4 lg:px-8 lg:py-2 rounded-[70px] text-19  border transition-all duration-200 outline-none cursor-pointer whitespace-nowrap ${isActive
                  ? "bg-[#EC1C24] border-[#EC1C24] text-white"
                  : "bg-[#F5E7E7] border-[#EC1C24] text-black "
                  }`}
              >
                {region.label}
              </button>
            );
          })}
        </div>

        {/* Map + Stats — col-7 / col-5 split */}
        <div className="grid grid-cols-1 lg:grid-cols-[58fr_42fr] gap-2 lg:gap-10 items-end">

          {/* Left — Map (col-7 equivalent) */}
          <div
            className="relative w-full"
            role="tabpanel"
            id={`panel-${activeId}`}
          >
            <Image
              src="/assets/images/scaffoldingSolutions/countrymap.svg"
              alt="UAE map showing service areas"
              width={870}
              height={628}
              priority
              className="w-full h-auto"
            />

            {/* Ripple overlay */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              {REGIONS.map((region) => {
                const isActive = activeId === region.id;
                return (
                  <span
                    key={region.id}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"
                      }`}
                    style={{
                      left: `${region.pinX}%`,
                      top: `${region.pinY}%`,
                    }}
                  >
                    <span className="relative flex items-center justify-center">
                      {/* Outermost ring */}
                      <span
                        className="absolute w-16 h-16 rounded-full bg-[#EC1C24]/10 border-[1.7px] border-[#EC1C24]/40 animate-ping"
                        style={{ animationDuration: "1.5s" }}
                      />
                      {/* Middle ring */}
                      <span
                        className="absolute w-10 h-10 rounded-full bg-[#EC1C24]/20 border-[1.7px] border-[#EC1C24]/55 animate-ping"
                        style={{ animationDuration: "1.5s", animationDelay: "0.4s" }}
                      />
                      {/* Solid center dot */}
                      <span className="relative w-3 h-3 rounded-full bg-[#EC1C24] z-10 shadow-md" />
                    </span>
                  </span>
                );
              })}
            </div>
          </div>

          {/* Right — Stats (col-5 equivalent) */}
          <div className="relative w-full h-full min-h-[160px] lg:min-h-[320px] flex items-end pb-6">

            {/* Background decorative image — anchored to bottom-right, fades at bottom */}
            <div className="absolute inset-0 bottom-[17%] overflow-hidden pointer-events-none ">
              <div className="absolute bottom-0 right-0 w-full h-full hidden lg:block">
                <Image
                  src="assets/images/scaffoldingSolutions/rightmapov.png"
                  width={629}
                  height={549}
                  alt=""
                  className="absolute bottom-0 right-0 w-full h-full  object-bottom object-contain"
                  style={{ opacity: 1 }}
                />
                {/* Bottom fade overlay to replicate the soft fade at the bottom of the image */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-2/5 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgb(255 255 255) 0%, rgb(255 255 255 / 3%) 40%, rgb(255 255 255 / 0%) 100%)",
                  }}
                />
              </div>
            </div>

            {/* Stats content — sits on top of the decorative image */}
            <div className="relative z-10 flex  w-full gap-[20px] lg:gap-[60px] items-end">
              <div className="flex flex-col gap-1">
                <span className="text-33 mb-[20px] text-[#EC1C24] tracking-tight">
                  180+
                </span>
                <span className="text-19 text-black">Trained Scaffolders</span>
              </div>

              <div className="h-[100px] w-[1px] bg-[#BCBCBC]" />

              <div className="flex flex-col gap-1">
                <span className="text-33 mb-[20px] text-[#EC1C24] tracking-tight leading-tight">
                  Completed 33600+
                </span>
                <span className="text-19 text-black">Projects across the UAE</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}