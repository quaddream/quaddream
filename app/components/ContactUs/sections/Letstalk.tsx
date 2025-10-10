"use client";
import React, { useState, Fragment, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "swiper/css";
import Image from "next/image";
import { motion } from "framer-motion";
import { Listbox, Transition } from "@headlessui/react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { moveUp, containerStagger, paragraphItem } from "../../motionVarients";
import {
  letstalkSchema,
  LetstalkFormValues,
} from "@/lib/validation/letstalkSchema";
import { sendContactAction } from "@/lib/mail/contactAction";
import { ContactUs } from "../type";

type BannerProps = {
  Data: ContactUs["secondSection"];
  serviceData: string[];
};

// const sector = [
//   { id: 1, name: "Service Looking For" },
//   { id: 2, name: "Scaffolding Contracting" },
//   { id: 3, name: "Scaffolding & Formwork Rentals" },
//   { id: 4, name: "Mobile Tower Sale & Rentals" },
// ];

const Letstalk: React.FC<BannerProps> = ({ Data, serviceData }) => {
  const [sectorselected, setsectorSelected] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<LetstalkFormValues>({
    resolver: zodResolver(letstalkSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      sector: sectorselected,
      message: "",
    },
  });

  const onSubmit: SubmitHandler<LetstalkFormValues> = async (data) => {
    if (!recaptchaRef.current?.getValue()) {
      alert("Please complete the captcha verification");
      return;
    }

    try {
      await sendContactAction(data);
      alert("Your message has been sent successfully!");
      recaptchaRef.current?.reset();
      reset();
    } catch (error) {
      console.error("Mail send failed:", error);
      alert("Failed to send your message. Please try again.");
    }
  };

  return (
    <section className="pb-150 rounded-t-2xl 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative z-10">
      <div className="container flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 border-b border-[#BEBEBE] pb-12 lg:pb-31">
          <div>
            <motion.div
              className="flex flex-col"
              variants={containerStagger}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
            >
              <motion.h2
                variants={paragraphItem}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.1, once: true }}
                className="text-80 leading-[1.153846153846154] mb-5 mb:mb-10 text-black"
              >
                {Data.title}
              </motion.h2>
              <motion.p
                variants={paragraphItem}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.1, once: true }}
                className="text-19 text-gray-para leading-[1.684210526315789] mb-0 max-w-[107ch]"
              >
                {Data.description}
              </motion.p>
            </motion.div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <motion.div
              variants={moveUp(0.1)}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
              className="flex w-full items-center justify-between rounded-full mb-5 lg:mb-7 bg-[#F9F9F9] p-5 md:p-7"
            >
              <input
                {...register("name")}
                placeholder={
                  errors.name
                    ? (errors.name.message as string)
                    : "Enter Your Name *"
                }
                className={`w-full focus:outline-none placeholder-gray-400 ${
                  errors.name ? "placeholder-primary" : "placeholder-[#7F7F7F]"
                }`}
              />
            </motion.div>

            {/* Email */}
            <motion.div
              variants={moveUp(0.2)}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
              className="flex w-full items-center justify-between rounded-full mb-5 lg:mb-7 bg-[#F9F9F9] p-5 md:p-7"
            >
              <input
                {...register("email")}
                type="email"
                placeholder={
                  errors.email
                    ? (errors.email.message as string)
                    : "Enter Your Email *"
                }
                className={`w-full focus:outline-none placeholder-gray-400 ${
                  errors.email ? "placeholder-primary" : "placeholder-[#7F7F7F]"
                }`}
              />
            </motion.div>

            {/* Phone */}
            <motion.div
              variants={moveUp(0.3)}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
              className="flex w-full items-center justify-between rounded-full mb-5 lg:mb-7 bg-[#F9F9F9] p-5 md:p-7"
            >
              <input
                {...register("phone")}
                placeholder={
                  errors.phone
                    ? (errors.phone.message as string)
                    : "Enter Your Phone Number *"
                }
                className={`w-full focus:outline-none placeholder-gray-400 ${
                  errors.phone ? "placeholder-primary" : "placeholder-[#7F7F7F]"
                }`}
              />
            </motion.div>

            {/* Sector */}
            <motion.div
              variants={moveUp(0.4)}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
              className="mb-5 lg:mb-7"
            >
              <Controller
                control={control}
                name="sector"
                render={({ field }) => (
                  <Listbox
                    value={field.value}
                    onChange={(val) => {
                      field.onChange(val);
                      setsectorSelected(val);
                    }}
                  >
                    <div className="relative">
                      <Listbox.Button className="flex w-full focus:outline-none items-center justify-between rounded-full text-[#7F7F7F] bg-[#F9F9F9] p-5 md:p-7 text-left border-0">
                      <span
  className={`${
    sectorselected ? "text-[#7F7F7F]" : "text-gray-400"
  }`}
>
  {sectorselected || "Select Service *"}
</span>
                        <Image
                          src="/assets/images/arrow-down.svg"
                          alt="arrow-down"
                          width={24}
                          height={11}
                          className="opacity-70"
                        />
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute focus:outline-none mt-1 max-h-60 w-full overflow-auto rounded-xl border border-gray-200 z-10 bg-white">
                          {serviceData.map((option) => (
                            <Listbox.Option
                              key={option}
                              value={option}
                              className={({ active }) =>
                                `cursor-pointer px-4 py-2 ${
                                  active
                                    ? "bg-primary text-white"
                                    : "text-[#7F7F7F]"
                                }`
                              }
                            >
                              {option}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                      {errors.sector && (
            <span className="text-primary text-md mt-2 block lg:pl-7 pl-5">
              {errors.sector.message}
            </span>
          )}
                    </div>
                  </Listbox>
                )}
              />
            </motion.div>

            {/* Message */}
            <motion.div
              variants={moveUp(0.5)}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
              className="flex w-full items-center justify-between rounded-3xl bg-[#F9F9F9] p-5 md:p-7 text-left shadow-sm border-0"
            >
              <textarea
                {...register("message")}
                placeholder={
                  errors.message
                    ? (errors.message.message as string)
                    : "Message..."
                }
                className={`w-full focus:outline-none h-40 placeholder-[#7F7F7F] ${
                  errors.message
                    ? "placeholder-primary"
                    : "placeholder-[#7F7F7F]"
                }`}
              />
            </motion.div>

            {/* Submit */}
            <motion.div
              variants={paragraphItem}
              className="mt-5"
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
            >
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                ref={recaptchaRef}
                className="mb-4"
              />
              <button
                type="submit"
                className="flex items-center gap-2 hover:bg-primary hover:border-primary cursor-pointer text-16 font-normal border-1 border-black py-2 px-4 md:px-5 rounded-[60px] w-fit z-10 group transition-all duration-300"
              >
                <span className="group-hover:text-white transition-all duration-300">
                  Submit
                </span>
                <span className="bg-primary group-hover:bg-white w-[35px] h-[35px] lg:w-[51.7px] lg:h-[51.7px] flex items-center justify-center rounded-full group-hover:translate-x-[10px] transition-all duration-300">
                  <Image
                    src="/assets/images/icons/arrow-right.svg"
                    alt="Arrow"
                    width={30}
                    height={30}
                    className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px] brightness-0 invert-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                  />
                </span>
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Letstalk;
