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

    // ── Single set — no cloning ───────────────────────────────────
    const items = data.items;
    const count = items.length;

    const trackRef = useRef<HTMLDivElement>(null);

    // Continuous offset in pixels (not clamped — wraps virtually)
    const offsetRef = useRef(0);
    // Card width + gap, measured once and cached
    const cardWidthRef = useRef(0);

    const isDragging = useRef(false);
    const dragStartX = useRef(0);
    const dragStartOffset = useRef(0);
    const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const isHovered = useRef(false);
    const rafRef = useRef<number | null>(null);

    // ── Measure card width ────────────────────────────────────────
    const measureCard = useCallback(() => {
        const track = trackRef.current;
        if (!track) return;
        const card = track.firstElementChild as HTMLElement | null;
        if (!card) return;
        // gap-3 = 12px
        cardWidthRef.current = card.offsetWidth + 12;
    }, []);

    useEffect(() => {
        measureCard();
        const ro = new ResizeObserver(measureCard);
        if (trackRef.current) ro.observe(trackRef.current);
        return () => ro.disconnect();
    }, [measureCard]);

    // ── Apply transform to every card ─────────────────────────────
    // Each card i sits at a "natural" position: i * cardWidth.
    // We subtract the current offset and then wrap each card so it
    // always appears within one full "track width" of the viewport,
    // giving the illusion of infinite content from a finite node set.
    const applyPositions = useCallback(() => {
        const track = trackRef.current;
        if (!track || cardWidthRef.current === 0) return;

        const cw = cardWidthRef.current;
        const totalWidth = cw * count;
        const cards = track.children;

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i] as HTMLElement;
            // Raw position before wrapping
            let pos = i * cw - offsetRef.current;
            // Wrap so every card is always within [-totalWidth, totalWidth)
            pos = ((pos % totalWidth) + totalWidth) % totalWidth;
            // Re-center: shift cards that are too far right back by totalWidth
            // so they wrap around to the left side
            if (pos > totalWidth - cw * 0.5) pos -= totalWidth;
            card.style.transform = `translateX(${pos}px)`;
        }
    }, [count]);

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
            if (isHovered.current || isDragging.current) return;
            const cw = cardWidthRef.current;
            if (!cw) return;

            // Animate smoothly over ~400 ms
            const start = offsetRef.current;
            const target = start + cw;
            const duration = 400;
            const startTime = performance.now();

            const animate = (now: number) => {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // ease-in-out cubic
                const ease = progress < 0.5
                    ? 4 * progress ** 3
                    : 1 - (-2 * progress + 2) ** 3 / 2;

                offsetRef.current = start + cw * ease;
                applyPositions();

                if (progress < 1) {
                    rafRef.current = requestAnimationFrame(animate);
                }
            };

            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(animate);
        }, 3000);
    }, [stopAutoplay, applyPositions]);

    useEffect(() => {
        // Initial paint
        applyPositions();
        startAutoplay();
        return () => {
            stopAutoplay();
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [applyPositions, startAutoplay, stopAutoplay]);

    // ── Mouse drag ────────────────────────────────────────────────
    const onMouseDown = useCallback((e: React.MouseEvent) => {
        isDragging.current = true;
        dragStartX.current = e.clientX;
        dragStartOffset.current = offsetRef.current;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        stopAutoplay();
        if (trackRef.current) trackRef.current.style.cursor = "grabbing";
    }, [stopAutoplay]);

    const onMouseMove = useCallback((e: React.MouseEvent) => {
        if (!isDragging.current) return;
        const delta = dragStartX.current - e.clientX;
        offsetRef.current = dragStartOffset.current + delta;
        applyPositions();
    }, [applyPositions]);

    const onMouseUp = useCallback(() => {
        if (!isDragging.current) return;
        isDragging.current = false;
        if (trackRef.current) trackRef.current.style.cursor = "grab";
        startAutoplay();
    }, [startAutoplay]);

    // ── Touch drag ────────────────────────────────────────────────
    const onTouchStart = useCallback((e: React.TouchEvent) => {
        dragStartX.current = e.touches[0].clientX;
        dragStartOffset.current = offsetRef.current;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        stopAutoplay();
    }, [stopAutoplay]);

    const onTouchMove = useCallback((e: React.TouchEvent) => {
        const delta = dragStartX.current - e.touches[0].clientX;
        offsetRef.current = dragStartOffset.current + delta;
        applyPositions();
    }, [applyPositions]);

    const onTouchEnd = useCallback(() => {
        startAutoplay();
    }, [startAutoplay]);

    // ── Meta Data ─────────────────────────────────────────────────
    const itemsMeta = [
        { href: "products-and-services/scaffolding-contracting-in-dubai-uae", description: "Complete construction scaffolding solutions including design, erection, supervision, and dismantling." },
        { href: "products-and-services/scaffolding-rental-dubai-uae", description: "Scaffolding rental for construction & maintenance work, supported by certified scaffolders." },
        { href: "products-and-services/cuplock-scaffolding-rental-dubai-uae", description: "High-load cuplock system scaffolding supplied, delivered, and installed for construction and industrial projects across the UAE." },
        { href: "products-and-services/aluminum-mobile-scaffolding-tower-rental-dubai-uae", description: "Lightweight, mobile scaffolding towers designed for safe indoor and outdoor access at height." },
        { href: "products-and-services/formwork-rental-in-dubai-uae", description: "Quality formwork systems for slabs, beams, and columns." },
        { href: "products-and-services/construction-equipment-rental-dubai-uae", description: "Heavy construction equipment offered through flexible rental plans." },
    ];

    return (
        <section className="py-150 overflow-hidden bg-black">
            <div className="container">
                <div className="text-white gap-y-8 lg:gap-y-5">
                    {/* Header */}
                    <motion.div variants={containerStagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <motion.h2 className="text-80 leading-[1.125] " variants={moveUp(0.2)}>
                            {data.mainTitle}
                        </motion.h2>
                        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 py-[50px]">
                            <motion.p
                                className="text-19 leading-[32px] text-[#BCBCBC] lg:max-w-[1180px]"
                                variants={moveUp(0.8)}
                                dangerouslySetInnerHTML={{ __html: data.description }}
                            />
                            <Link href="/products-and-services" className="shrink-0 border border-white pr-5 rounded-[60px] flex items-center gap-4 group">
                                <span className="text-white whitespace-nowrap pt-5 pb-5 pl-5 text-16">Our Services</span>
                                <span className="bg-primary w-12 h-12 flex items-center justify-center rounded-full group-hover:translate-x-2 transition-transform">
                                    <Image src="/assets/images/home/arrow-right.svg" alt="Arrow" width={24} height={24} />
                                </span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Slider — single DOM instance per card */}
                    <motion.div variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <div
                            className="overflow-hidden"
                            style={{ marginRight: "calc(-1 * (100vw - 100%) / 2)" }}
                        >
                            {/*
                             * The track has `position: relative` and a fixed height.
                             * Each card is `position: absolute` and moves via translateX.
                             * No clones — count === data.items.length exactly.
                             */}
                            <div
                                ref={trackRef}
                                className="relative no-scrollbar"
                                style={{
                                    height: "clamp(260px, 30vw, 541px)",
                                    cursor: "grab",
                                    userSelect: "none",
                                    // Reserve horizontal space so the container doesn't collapse
                                    minWidth: "100%",
                                }}
                                onMouseDown={onMouseDown}
                                onMouseMove={onMouseMove}
                                onMouseUp={onMouseUp}
                                onMouseLeave={onMouseUp}
                                onMouseEnter={() => { isHovered.current = true; }}
                                onMouseOut={(e) => {
                                    if (!trackRef.current?.contains(e.relatedTarget as Node)) {
                                        isHovered.current = false;
                                    }
                                }}
                                onTouchStart={onTouchStart}
                                onTouchMove={onTouchMove}
                                onTouchEnd={onTouchEnd}
                            >
                                {items.map((item, i) => {
                                    const isActive = activeIndex === i;
                                    const meta = itemsMeta[i];

                                    return (
                                        <div
                                            key={item.title}        // stable key — no index-from-clone issues
                                            onMouseEnter={() => !isTouch && setActiveIndex(i)}
                                            onMouseLeave={() => !isTouch && setActiveIndex(null)}
                                            onClick={() => isTouch && setActiveIndex(activeIndex === i ? null : i)}
                                            className="absolute top-0 left-0 overflow-hidden rounded-2xl flex flex-col group"
                                            style={{
                                                // Width matches the old inline calc; height fills the track
                                                width: "clamp(220px, calc((100% - 3 * 12px) / 3.5), 459px)",
                                                height: "100%",
                                                // translateX is injected imperatively via applyPositions()
                                                willChange: "transform",
                                            }}
                                        >
                                            <Link href={meta?.href ?? "#"} className="absolute inset-0 z-40" aria-label={item.title} />

                                            <Image
                                                src={item.image}
                                                alt={item.imageAlt}
                                                fill
                                                className={`object-cover transition-transform duration-500 w-full h-full ${isActive ? "scale-110" : "scale-100"}`}
                                                draggable={false}
                                            />

                                            {/* Gradients */}
                                            <div
                                                className="absolute inset-0 z-20 transition-opacity duration-300"
                                                style={{
                                                    background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.82))",
                                                    opacity: isActive ? 0 : 1,
                                                }}
                                            />
                                            <div
                                                className="absolute bottom-0 left-0 w-full z-20 transition-all duration-500"
                                                style={{
                                                    height: isActive ? "100%" : "0%",
                                                    background: "linear-gradient(to bottom, transparent, rgba(180,20,20,0.78))",
                                                }}
                                            />

                                            {/* Arrow button */}
                                            <Link href={meta?.href ?? "#"} className="block">
                                                <div className="absolute top-4 right-4 z-20 w-[53px] h-[53px] flex items-center justify-center bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ml-auto">
                                                    <Image
                                                        src="/assets/images/arrow-top-right.svg"
                                                        alt="Arrow"
                                                        width={30}
                                                        height={30}
                                                        className="w-[24px] h-[24px] -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-300"
                                                    />
                                                </div>
                                            </Link>

                                            {/* Title + description */}
                                            <div className="relative z-30 mt-auto p-[30px]">
                                                <Link href={meta?.href ?? "#"} className="block">
                                                    <h3 className="text-33 mb-3">{item.title}</h3>
                                                </Link>
                                                <p
                                                    className={`text-19 leading-[32px] transition-all duration-500 ${isActive ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                                                        }`}
                                                >
                                                    {meta?.description}
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