"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { SitemapResponse } from "./SiteType";
import { moveUp } from "../motionVarients";

export default function SitemapPage({ data }: { data: SitemapResponse }) {
    return (
        <section className="py-150 rounded-t-[20px] xl:rounded-tl-[40px] xl:rounded-tr-[40px] 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative z-10  bg-white mt-[-4.5%] ">
            <div className="container">
                <ul className="space-y-6">
                    {data.sitemap.map((item, index) => (
                        <motion.li key={index} variants={moveUp(index * 0.3)} initial="hidden" whileInView="show" viewport={{ once: true }}>
                            {/* Parent */}
                            <div className="flex items-center gap-2">
                                <span className="text-black text-3xl ">•</span>

                                {item.link ? (
                                    <Link
                                        href={item.link}
                                        className="font-semibold text-gray-900 text-xl hover:translate-x-1 transition-transform duration-300"
                                    >
                                        {item.label}
                                    </Link>
                                ) : item.href ? (
                                    <Link
                                        href={item.href}
                                        className="font-semibold text-gray-900 hover:translate-x-1 transition-transform duration-300 text-xl"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="font-semibold text-gray-900 text-lg">
                                        {item.label}
                                    </span>
                                )}
                            </div>

                            {/* Children */}
                            {item.children?.length > 0 && (
                                <ul className="mt-3 ml-5 pl-4 border-l border-gray-300 space-y-2">
                                    {item.children.map((child, childIndex) => (
                                        <li key={childIndex}>
                                            <Link
                                                href={child.href}
                                                className="inline-block text-gray-700 hover:translate-x-1 transition-all duration-300 text-lg"
                                            >
                                                {child.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
