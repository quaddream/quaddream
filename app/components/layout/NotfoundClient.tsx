"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const metadata: Metadata = {
  title: "Page Not Found - Quad Dream",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".digit-left", {
        x: -80,
        y: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".digit-center", {
        y: 60,
        scale: 0.95,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.15,
      });

      gsap.from(".digit-right", {
        x: 80,
        y: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.25,
      });

      gsap.from(".fade-up", {
        y: 20,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.6,
      });

      gsap.to(".digit-center", {
        y: -24,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 0.8,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#fafafa]"
    >
      {/* 404 */}
      <div className="flex items-end leading-none tracking-tight">
        <span className="digit-left text-[130px] md:text-[190px] xl:text-[280px] font-semibold text-primary">
          4
        </span>

        <span className="digit-center text-[170px] md:text-[240px] -ml-6 -mr-8 lg:-ml-10 lg:-mr-14 xl:text-[340px] font-bold text-black">
          0
        </span>

        <span className="digit-right text-[130px] md:text-[190px] xl:text-[280px] -rotate-10 font-semibold text-primary">
          4
        </span>
      </div>

      <div className="fade-up w-16 h-px bg-black/20 mb-8" />

      <p className="fade-up text-black/80 text-18 md:text-20 xl:text-[20px] font-light leading-relaxed mb-8">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      <div className="fade-up flex flex-col sm:flex-row gap-3 lg:gap-6">
        <Link
          href="/contact-us"
          className="rounded-xl px-8 py-3 lg:px-12 lg:py-4 border border-primary text-primary font-semibold transition-all duration-300 hover:bg-primary hover:text-white"
        >
          Contact Us
        </Link>

        <Link
          href="/sitemap"
          className="rounded-xl px-8 py-3 lg:px-12 lg:py-4 border border-black/30 text-black font-semibold transition-all duration-300 hover:bg-black hover:text-white"
        >
          Sitemap
        </Link>
      </div>
    </div>
  );
}
