"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { moveUp, containerStagger } from "../../motionVarients";
import { Home } from "../type";

const Services = ({ data }: { data: Home["servicesSection"] }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isTouch, setIsTouch] = useState(false);

    // Triple the items to ensure enough "runway" for the loop
    const loopedItems = [...data.items, ...data.items, ...data.items];
    const originalLength = data.items.length;

    const sliderRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const isHovered = useRef(false);

    useEffect(() => {
        setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);

        // Start in the middle set of items for seamless left/right scrolling
        if (sliderRef.current) {
            const el = sliderRef.current;
            const cardWidth = (el.firstElementChild as HTMLElement).offsetWidth + 12;
            el.scrollLeft = cardWidth * originalLength;
        }
    }, [originalLength]);

    // ── Loop Logic ──────────────────────────────────────────────────
    const handleInfiniteScroll = useCallback(() => {
        if (!sliderRef.current) return;
        const el = sliderRef.current;
        const cardWidth = (el.firstElementChild as HTMLElement).offsetWidth + 12;
        const scrollWidth = cardWidth * originalLength;

        // If we scroll too far right (into the 3rd set), snap back to 2nd set
        if (el.scrollLeft >= scrollWidth * 2) {
            el.scrollLeft = el.scrollLeft - scrollWidth;
        }
        // If we scroll too far left (into the 1st set), snap forward to 2nd set
        else if (el.scrollLeft <= 0) {
            el.scrollLeft = scrollWidth;
        }
    }, [originalLength]);

    // ── Autoplay ──────────────────────────────────────────────────
    const stopAutoplay = useCallback(() => {
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
            autoplayRef.current = null;
        }
    }, []);

    const startAutoplay = useCallback(() => {
        stopAutoplay();
        autoplayRef.current = setInterval(() => {
            if (!sliderRef.current || isHovered.current || isDragging.current) return;
            const el = sliderRef.current;
            const cardWidth = (el.firstElementChild as HTMLElement).offsetWidth + 12;

            el.scrollBy({ left: cardWidth, behavior: "smooth" });
        }, 3000);
    }, [stopAutoplay]);

    useEffect(() => {
        startAutoplay();
        return () => stopAutoplay();
    }, [startAutoplay, stopAutoplay]);

    // ── Mouse drag ────────────────────────────────────────────────
    const onMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
        startX.current = e.pageX - (sliderRef.current?.offsetLeft ?? 0);
        scrollLeft.current = sliderRef.current?.scrollLeft ?? 0;
        if (sliderRef.current) sliderRef.current.style.cursor = "grabbing";
        stopAutoplay();
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        sliderRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.2;
        handleInfiniteScroll(); // Check for loop boundary during drag
    };

    const onMouseUp = () => {
        isDragging.current = false;
        if (sliderRef.current) sliderRef.current.style.cursor = "grab";
        startAutoplay();
    };

    // ── Touch drag ────────────────────────────────────────────────
    const onTouchMove = (e: React.TouchEvent) => {
        if (!sliderRef.current) return;
        const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
        sliderRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.2;
        handleInfiniteScroll();
    };

    // ── Meta Data Mapping ─────────────────────────────────────────
    // Map the looped index back to the original index for itemsMeta
    const getMeta = (index: number) => itemsMeta[index % originalLength];

    const itemsMeta = [
        { href: "products-and-services/scaffolding-contracting", description: "Complete construction scaffolding solutions including design, erection, supervision, and dismantling." },
        { href: "products-and-services/scaffolding-rental-dubai-uae", description: "Scaffolding rental for construction & maintenance work, supported by certified scaffolders." },
        { href: "products-and-services/cuplock-scaffolding-rental-dubai", description: "Quality formwork systems for slabs, beams, and columns." },
        { href: "products-and-services/aluminum-mobile-scaffolding-tower-rental", description: "Lightweight, mobile scaffolding towers designed for safe indoor and outdoor access at height." },
        { href: "products-and-services/formwork-rental-in-dubai-uae", description: "Quality formwork systems for slabs, beams, and columns." },
        { href: "products-and-services/construction-equipment-rental-in-dubai", description: "Heavy construction equipment offered through flexible rental plans." },
    ];

    return (
        <section className="py-150 overflow-hidden bg-black">
            <div className="container">
                <div className="text-white gap-y-8 lg:gap-y-5">
                    {/* Header code remains identical to your original */}
                    <motion.div variants={containerStagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <motion.h2 className="text-80 leading-[1.125] mb-12" variants={moveUp(0.2)}>
                            {data.mainTitle}
                        </motion.h2>
                        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 py-[50px]">
                            <motion.p
                                className="text-19 leading-[32px] text-[#BCBCBC] lg:max-w-[1180px] "
                                variants={moveUp(0.8)}
                                dangerouslySetInnerHTML={{ __html: data.description }}
                            />
                            <Link href="/products-and-services" className="shrink-0 border border-white pr-5  rounded-[60px] flex items-center gap-4 group">
                                <span className="text-white whitespace-nowrap pt-5 pb-5 pl-5 text-16">Our Services</span>
                                <span className="bg-primary w-12 h-12 flex items-center justify-center rounded-full group-hover:translate-x-2 transition-transform">
                                    <Image src="/assets/images/home/arrow-right.svg" alt="Arrow" width={24} height={24} />
                                </span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Slider */}
                    <motion.div variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ once: true }} className="">
                        <div className="overflow-hidden" style={{ marginRight: "calc(-1 * (100vw - 100%) / 2 )" }}>
                            <div
                                ref={sliderRef}
                                onScroll={handleInfiniteScroll} // Critical for smooth/auto loop
                                className="flex gap-3 overflow-x-auto pb-2 no-scrollbar"
                                style={{
                                    cursor: "grab",
                                    scrollbarWidth: "none",
                                    msOverflowStyle: "none",
                                    WebkitOverflowScrolling: "touch",
                                    scrollSnapType: isDragging.current ? "none" : "x mandatory",
                                }}
                                onMouseDown={onMouseDown}
                                onMouseMove={onMouseMove}
                                onMouseUp={onMouseUp}
                                onMouseLeave={onMouseUp}
                                onMouseEnter={() => { isHovered.current = true; }}
                                onMouseOut={(e) => { if (!sliderRef.current?.contains(e.relatedTarget as Node)) isHovered.current = false; }}
                                onTouchStart={(e) => {
                                    startX.current = e.touches[0].pageX - (sliderRef.current?.offsetLeft ?? 0);
                                    scrollLeft.current = sliderRef.current?.scrollLeft ?? 0;
                                    stopAutoplay();
                                }}
                                onTouchMove={onTouchMove}
                                onTouchEnd={() => startAutoplay()}
                            >
                                {loopedItems.map((item, i) => { 
                                    const isActive = activeIndex === i;
                                    const isOriginalItem = i < originalLength; // Check if this is from the first/original set

                                    return (
                                        <div
                                            key={i}
                                            onMouseEnter={() => !isTouch && setActiveIndex(i)}
                                            onMouseLeave={() => !isTouch && setActiveIndex(null)}
                                            onClick={() =>
                                                isTouch &&
                                                setActiveIndex(activeIndex === i ? null : i)
                                            }
                                            className="relative overflow-hidden rounded-2xl flex flex-col flex-shrink-0 group"
                                            style={{
                                                /*
                                                 * Desktop: show exactly 3 full cards + ~half of the 4th.
                                                 * Formula: (container - gaps) / 3.5
                                                 * gap-3 = 12px, there are 3 gaps across 3.5 cards.
                                                 *
                                                 * On tablet (md): 2.5 visible
                                                 * On mobile (sm): 1.3 visible
                                                 */
                                                width: "clamp(220px, calc((100% - 3 * 12px) / 3.5), 459px)",
                                                height: "clamp(260px, 30vw, 541px)",
                                                scrollSnapAlign: "start",
                                                userSelect: "none",
                                            }}
                                        >
                                            <Image src={item.image} alt={item.imageAlt} fill className={`object-cover transition-transform duration-500 w-full h-full ${isActive ? "scale-110" : "scale-100"}`} draggable={false} />

                                            {/* Gradients & Hover Effects */}
                                            <div className="absolute inset-0 z-20 transition-opacity duration-300" style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.82))", opacity: isActive ? 0 : 1 }} />
                                            <div className="absolute bottom-0 left-0 w-full z-20 transition-all duration-500" style={{ height: isActive ? "100%" : "0%", background: "linear-gradient(to bottom, transparent, rgba(180,20,20,0.78))" }} />
                                            <div className="absolute top-4 right-4 z-20 w-[53px] h-[53px] flex items-center justify-center bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ml-auto">
                                                <Image
                                                    src="/assets/images/arrow-top-right.svg"
                                                    alt="Arrow"
                                                    width={30}
                                                    height={30}
                                                    className="w-[24px] h-[24px] -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-300"
                                                />
                                            </div>
                                            <div className="relative z-30 mt-auto p-[30px]">
                                                {/* Only wrap the title in Link if it's from the original set */}
                                                {isOriginalItem ? (
                                                    <Link href={getMeta(i)?.href ?? "#"} className="block">
                                                        <h3 className="text-33 mb-3">{item.title}</h3>
                                                    </Link>
                                                ) : (
                                                    <p className="text-33 mb-3">{item.title}</p>
                                                )}
                                                <p className={` text-19 leading-[32px] transition-all duration-500 ${isActive ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}>
                                                    {getMeta(i)?.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;