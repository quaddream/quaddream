'use client';

import { useEffect, useRef } from 'react';

export default function HomeTicker() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (container && content) {
      const contentWidth = content.offsetWidth;

      // Clone 10 times
      for (let i = 0; i < 9; i++) {
        const clone = content.cloneNode(true) as HTMLElement;
        clone.setAttribute('aria-hidden', 'true');
        container.appendChild(clone);
      }

      // Total scroll width based on all clones
      const totalWidth = contentWidth * 1000;
      container.style.setProperty('--scroll-width', `${totalWidth}px`);

      // Adjust speed as needed
      const duration = totalWidth / 60; // tweak speed here
      container.style.setProperty('--duration', `${duration}s`);
    }
  }, []);

  return (
    <div className="ticker-wrapper overflow-hidden bg-primary text-white py-4 2xl:py-[26px]">
      <div ref={containerRef} className="ticker-inner flex gap-8 w-max animate-scroll whitespace-nowrap">
        <div ref={contentRef} className="flex pr-8 border-r-[0.5px] border-white">
          <div className="border-[0.5px] border-white rounded-3xl px-[11px] py-[3px]"><span className='text-30 leading-[1.333333333333333] font-semibold'>QUAD</span></div>
          <div className="border-[0.5px] border-white rounded-3xl px-[11px] py-[3px] flex gap-2">
           <div className='flex items-center gap-2'>
              <span className='text-30 leading-[1.333333333333333] font-semibold'>Q - </span>
              <span className='text-19 font-normal leading-[1.333333333333333] text-white/87'>Quality</span>
           </div>
           <div className='flex items-center gap-2'>
              <span className='text-30 leading-[1.333333333333333] font-semibold'>U - </span>
              <span className='text-19 font-normal leading-[1.333333333333333] text-white/87'>Uncompromised Safety</span>
           </div>
           <div className='flex items-center gap-2'>
              <span className='text-30 leading-[1.333333333333333] font-semibold'>A - </span>
              <span className='text-19 font-normal leading-[1.333333333333333] text-white/87'>Advanced Solution</span>
           </div>
           <div className='flex items-center gap-2'>
              <span className='text-30 leading-[1.333333333333333] font-semibold'>D - </span>
              <span className='text-19 font-normal leading-[1.333333333333333] text-white/87'> Dependability</span>
           </div>

            </div>

        </div>
      </div>
    </div>
  );
}
