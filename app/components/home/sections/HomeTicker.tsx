"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { fadeIn } from "../../motionVarients";

export default function HomeTicker() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (container && content) {
      const contentWidth = content.offsetWidth;

      // Clone 10 times
      for (let i = 0; i < 2; i++) {
        const clone = content.cloneNode(true) as HTMLElement;
        clone.setAttribute("aria-hidden", "true");
        container.appendChild(clone);
      }

      // Total scroll width based on all clones
      const totalWidth = contentWidth * 1500;
      container.style.setProperty("--scroll-width", `${totalWidth}px`);

      // Adjust speed as needed
      const duration = totalWidth / 1500; // tweak speed here
      container.style.setProperty("--duration", `${duration}s`);
    }
  }, []);

  return (
    <motion.div
      className="ticker-wrapper overflow-hidden bg-primary text-white py-4 2xl:py-[26px]"
      variants={fadeIn(1)}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.6 }}
      viewport={{ amount: 0.1, once: true }}
    >
      <div className="overflow-hidden w-full">
        <div
          ref={containerRef}
          className="ticker-inner flex gap-8 w-max whitespace-nowrap [animation:scrollmar_80s_linear_infinite]"
        >
          <div
            ref={contentRef}
            className="flex pr-8 border-r-[0.5px] border-white"
          >
            <div className="border-[0.5px] border-white rounded-3xl px-[11px] py-[3px]">
              <span className="text-30 leading-[1.333] font-semibold">
                QUAD
              </span>
            </div>
            <div className="border-[0.5px] border-white rounded-3xl px-[11px] py-[3px] flex gap-2">
              <div className="flex items-center gap-2">
                <span className="text-30 font-semibold">Q -</span>
                <span className="text-19 text-white/87">Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-30 font-semibold">U -</span>
                <span className="text-19 text-white/87">
                  Uncompromised Safety
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-30 font-semibold">A -</span>
                <span className="text-19 text-white/87">Advanced Solution</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-30 font-semibold">D -</span>
                <span className="text-19 text-white/87">Dependability</span>
              </div>
            </div>
          </div>

          {/* duplicate once for smooth loop */}
          <div
            aria-hidden="true"
            className="flex pr-8 border-r-[0.5px] border-white"
          >
            <div className="border-[0.5px] border-white rounded-3xl px-[11px] py-[3px]">
              <span className="text-30 font-semibold">QUAD</span>
            </div>
            <div className="border-[0.5px] border-white rounded-3xl px-[11px] py-[3px] flex gap-2">
              <div className="flex items-center gap-2">
                <span className="text-30 font-semibold">Q -</span>
                <span className="text-19 text-white/87">Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-30 font-semibold">U -</span>
                <span className="text-19 text-white/87">
                  Uncompromised Safety
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-30 font-semibold">A -</span>
                <span className="text-19 text-white/87">Advanced Solution</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-30 font-semibold">D -</span>
                <span className="text-19 text-white/87">Dependability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
