"use client";

import Image from "next/image";
import { useState } from "react";

interface Region {
  id: string;
  label: string;
  /** Exact center of each red dot already drawn in the SVG (viewBox 870 × 628) */
  pinX: number;
  pinY: number;
}

// All 7 red dot centers taken directly from the SVG paths:
//  Dubai        → plain dot  cx=636.389, cy=160.104  ← large dot, represents Dubai area
//  Abu Dhabi    → filter0    cx=381.632, cy=488.368  ← lower-left, Abu Dhabi
//  Sharjah      → filter1    cx=669.618, cy=109.757
//  Ajman        → filter2    cx=684.722, cy=94.652
//  Ras Al Khaimah → filter3  cx=728.021, cy=69.480
//  Fujairah     → filter4    cx=701.841, cy=81.563
//  Umm Al Quwain → filter5   cx=805.556, cy=215.486
//
// Order: Dubai first, then north → east order for the rest.

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
    pinX: (701.841 / 870) * 100,
    pinY: (81.563 / 628) * 100,
  },
  {
    id: "umm-al-quwain",
    label: "Umm Al Quwain",
    pinX: (805.556 / 870) * 100,
    pinY: (215.486 / 628) * 100,
  },
];

export default function ServiceAreas() {
  const [activeId, setActiveId] = useState<string>("dubai");

  return (
    <section className="w-full bg-white py-14">
      <div className="container mx-auto px-4">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-7">
          Service Areas
        </h2>

        {/* Tab Buttons */}
        <div
          className="flex flex-wrap gap-2 mb-10"
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
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 outline-none cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-[#EC1C24] border-[#EC1C24] text-white"
                    : "bg-white border-gray-300 text-gray-500 hover:border-[#EC1C24] hover:text-[#EC1C24]"
                }`}
              >
                {region.label}
              </button>
            );
          })}
        </div>

        {/* Map + Stats — two equal columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">

          {/* Left — Map */}
          <div
            className="relative w-full"
            role="tabpanel"
            id={`panel-${activeId}`}
          >
            {/* The SVG already has all red dots drawn inside it — we just overlay
                the ripple animation on top of whichever dot is active */}
            <Image
              src="/assets/images/scaffoldingSolutions/countrymap.svg"
              alt="UAE map showing service areas"
              width={870}
              height={628}
              priority
              className="w-full h-auto"
            />

            {/* Ripple-only overlay — no extra dot rendered, just the pulse rings */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              {REGIONS.map((region) => {
                const isActive = activeId === region.id;
                return (
                  <span
                    key={region.id}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      left: `${region.pinX}%`,
                      top: `${region.pinY}%`,
                    }}
                  >
                    {/* Rings only — the red dot underneath is already in the SVG */}
                    <span className="relative flex items-center justify-center w-12 h-12">
                      <span className="absolute w-12 h-12 rounded-full border border-[#EC1C24]/35 animate-ping" />
                      <span
                        className="absolute w-8 h-8 rounded-full border border-[#EC1C24]/50 animate-ping"
                        style={{ animationDelay: "0.35s" }}
                      />
                      <span
                        className="absolute w-4 h-4 rounded-full border border-[#EC1C24]/65 animate-ping"
                        style={{ animationDelay: "0.7s" }}
                      />
                    </span>
                  </span>
                );
              })}
            </div>
          </div>

          {/* Right — Stats */}
          <div className="flex flex-col gap-8 pb-4">
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-gray-900 tracking-tight">
                180+
              </span>
              <span className="text-sm text-gray-500">Trained Scaffolders</span>
            </div>

            <div className="w-full h-px bg-gray-200" />

            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-[#EC1C24] tracking-tight leading-tight">
                Completed 33600+
              </span>
              <span className="text-sm text-gray-500">Projects across the UAE</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}