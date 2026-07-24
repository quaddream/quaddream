"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { moveUp, moveRight } from "../../motionVarients";

const ThankYou = () => {
    return (
        <section className="relative z-10 bg-background bg-gray-100 pt-[50px] md:pt-[150px] lg:pt-[220px] xxl:pt-[300px] pb-[150px] md:pb-124 xl:pb-150 overflow-hidden">
            <div className="container">
                <div className="flex flex-col items-center text-center max-w-[70ch] mx-auto">
                    {/* Tick Icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mb-6 md:mb-8"
                    >
                        <svg
                            width="88"
                            height="88"
                            viewBox="0 0 88 88"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <motion.circle
                                cx="44"
                                cy="44"
                                r="40"
                                stroke="#ec1c24"
                                strokeWidth="2"
                                pathLength="1"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                            />
                            <motion.path
                                d="M27 45L38.5 56.5L61 32"
                                stroke="#ec1c24"
                                strokeWidth="2"
                                strokeLinecap="butt"
                                strokeLinejoin="round"
                                pathLength="1"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
                            />
                        </svg>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        variants={moveUp(0.1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-80 leading-[1.12] mb-6 md:mb-8 text-black"
                    >
                        Thank You
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={moveUp(0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-gray-para text-19 leading-[1.7] mb-8 md:mb-12"
                    >
                        Your submission has been received. Our team will get back to you
                        shortly. In the meantime, feel free to explore more about our
                        services.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        variants={moveRight(0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            href="/"
                            className="flex items-center gap-2 cursor-pointer text-16 font-normal border-1 border-black py-2 px-4 md:px-5 rounded-[60px] w-fit z-10 group"
                        >
                            <span>Back to Home</span>
                            <span className="bg-primary w-[35px] h-[35px] lg:w-[51.7px] lg:h-[51.7px] flex items-center justify-center rounded-full group-hover:translate-x-[10px] transition-all duration-300">
                                <Image
                                    src="/assets/images/home/arrow-right.svg"
                                    alt="Arrow"
                                    width={30}
                                    height={30}
                                    className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]"
                                />
                            </span>
                        </Link>

                        
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ThankYou;