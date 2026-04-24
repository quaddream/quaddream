"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitCareer } from "@/lib/mail/careerAction";

// ── Types ─────────────────────────────────────────────────────────────────────
interface CareerApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  currentLocation: string;
  resume: File | null;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  nationality?: string;
  currentLocation?: string;
  resume?: string;
}

// ── Nationalities ─────────────────────────────────────────────────────────────
const NATIONALITIES = [
  "Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan",
  "Argentine", "Armenian", "Australian", "Austrian", "Azerbaijani",
  "Bahraini", "Bangladeshi", "Belarusian", "Belgian", "Bolivian",
  "Bosnian", "Brazilian", "British", "Bulgarian", "Cambodian", "Cameroonian",
  "Canadian", "Chilean", "Chinese", "Colombian", "Croatian", "Cuban",
  "Czech", "Danish", "Dominican", "Dutch", "Ecuadorian", "Egyptian",
  "Emirati", "Estonian", "Ethiopian", "Filipino", "Finnish", "French",
  "Georgian", "German", "Ghanaian", "Greek", "Guatemalan", "Honduran",
  "Hungarian", "Indian", "Indonesian", "Iranian", "Iraqi", "Irish",
  "Israeli", "Italian", "Jamaican", "Japanese", "Jordanian", "Kazakhstani",
  "Kenyan", "Korean", "Kuwaiti", "Kyrgyz", "Latvian", "Lebanese",
  "Libyan", "Lithuanian", "Luxembourgish", "Malaysian", "Maldivian",
  "Maltese", "Mexican", "Moldovan", "Mongolian", "Moroccan", "Mozambican",
  "Namibian", "Nepalese", "New Zealander", "Nigerian", "Norwegian",
  "Omani", "Pakistani", "Palestinian", "Panamanian", "Peruvian", "Polish",
  "Portuguese", "Qatari", "Romanian", "Russian", "Saudi", "Serbian",
  "Singaporean", "Slovak", "Slovenian", "Somali", "South African",
  "Spanish", "Sri Lankan", "Sudanese", "Swedish", "Swiss", "Syrian",
  "Taiwanese", "Tajik", "Thai", "Tunisian", "Turkish", "Turkmen",
  "Ukrainian", "Uruguayan", "Uzbek", "Venezuelan", "Vietnamese", "Yemeni",
  "Zambian", "Zimbabwean",
];

// ── Icons ─────────────────────────────────────────────────────────────────────
const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);



// ── Input Field ───────────────────────────────────────────────────────────────
interface InputFieldProps {
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  error?: string;
  type?: string;
}

const InputField = ({ placeholder, value, onChange, error, type = "text" }: InputFieldProps) => (
  <div className="flex flex-col gap-1">
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full bg-[#f9f9f9] rounded-full px-6 py-4 2xl:px-[36px] 2xl:py-[27px] text-19 text-gray-700 placeholder-[#7F7F7F] outline-none focus:ring-2 transition-all duration-200 ${error ? "ring-2 ring-red-400 bg-red-50" : "focus:ring-gray-300"
        }`}
    />
    {error && <p className="text-red-500 text-xs pl-4">{error}</p>}
  </div>
);

// ── Main Modal ────────────────────────────────────────────────────────────────
const CareerApplyModal = ({ isOpen, onClose, jobTitle }: CareerApplyModalProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "",
    currentLocation: "",
    resume: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Lock body scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setSubmitted(false);
      setErrors({});
      setForm({ firstName: "", lastName: "", email: "", phone: "", nationality: "", currentLocation: "", resume: null });
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const set = (field: keyof FormData) => (val: string) =>
    setForm((prev) => ({ ...prev, [field]: val }));

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required";
    if (!form.lastName.trim()) errs.lastName = "Last name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email is required";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    if (!form.nationality) errs.nationality = "Please select a nationality";
    if (!form.currentLocation.trim()) errs.currentLocation = "Current location is required";
    if (!form.resume) errs.resume = "Please upload your resume";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const formData = new FormData();

      formData.append("firstName", form.firstName);
      formData.append("lastName", form.lastName);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("nationality", form.nationality);
      formData.append("currentLocation", form.currentLocation);
      formData.append("jobTitle", jobTitle);

      if (form.resume) {
        formData.append("resume", form.resume);
      }

      const result = await submitCareer(formData);

      if (result?.success) {
        setSubmitted(true);

        // reset state
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          nationality: "",
          currentLocation: "",
          resume: null,
        });
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Submission failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowedTypes.includes(file.type)) {
      setErrors((prev) => ({ ...prev, resume: "Only PDF, DOC, DOCX files are allowed" }));
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, resume: "File size must be under 20MB" }));
      return;
    }
    setErrors((prev) => ({ ...prev, resume: undefined }));
    setForm((prev) => ({ ...prev, resume: file }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/60 z-[999] backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 30 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="bg-white rounded-[16px] w-full max-w-4xl xl:max-w-[1469px] max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 md:p-10">

                {/* Header */}
                <div className="flex items-start justify-between mb-4 md:mb-5 lg:mb-[30px]">
                  <motion.h2
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-65 leading-[1.153846153846154]  leading-[1.08] pr-8"
                  >
                    {jobTitle}
                  </motion.h2>
                  <button
                    onClick={onClose}
                    className="flex-shrink-0 w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-500 hover:text-gray-800 transition-all duration-200 mt-1"
                    aria-label="Close"
                  >
                    <CloseIcon />
                  </button>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-200 mb-4 md:mb-5 lg:mb-[30px]" />

                {/* Success State */}
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M6 16l8 8L26 8" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Application Submitted!</h3>
                    <p className="text-gray-500 text-sm max-w-sm">
                      Thank you for applying. We&apos;ll review your application and get back to you soon.
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-8 px-6 py-3 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form id="form" onSubmit={handleSubmit}>
                    {/* Form */}
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="flex flex-col gap-4 lg:gap-[25px]"
                    >
                      {/* Row 1 */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-[30px]">
                        <InputField
                          placeholder="Enter First Name *"
                          value={form.firstName}
                          onChange={set("firstName")}
                          error={errors.firstName}
                        />
                        <InputField
                          placeholder="Enter Last Name *"
                          value={form.lastName}
                          onChange={set("lastName")}
                          error={errors.lastName}
                        />
                      </div>

                      {/* Row 2 */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputField
                          placeholder="Enter Email *"
                          value={form.email}
                          onChange={set("email")}
                          error={errors.email}
                          type="email"
                        />
                        <InputField
                          placeholder="Enter Phone Number *"
                          value={form.phone}
                          onChange={set("phone")}
                          error={errors.phone}
                          type="tel"
                        />
                      </div>

                      {/* Row 3 */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Nationality Select */}
                        <div className="flex flex-col gap-1">
                          <div className={`relative w-full bg-[#f9f9f9] rounded-full px-6 py-4 2xl:px-[36px] 2xl:py-[27px] ${errors.nationality ? "ring-2 ring-red-400 bg-red-50" : ""}`}>
                            <select
                              value={form.nationality}
                              onChange={(e) => set("nationality")(e.target.value)}
                              className="w-full bg-transparent text-19 outline-none appearance-none text-[#7F7F7F] cursor-pointer pr-6"
                            >
                              <option value="" disabled>Nationality *</option>
                              {NATIONALITIES.map((n) => (
                                <option key={n} value={n} className="text-gray-700">{n}</option>
                              ))}
                            </select>
                            <span className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                              <Image src="/assets/images/careers/downicon.svg" alt="downicon" width={24} height={11} />
                            </span>
                          </div>
                          {errors.nationality && <p className="text-red-500 text-xs pl-4">{errors.nationality}</p>}
                        </div>

                        <InputField
                          placeholder="Current Location *"
                          value={form.currentLocation}
                          onChange={set("currentLocation")}
                          error={errors.currentLocation}
                        />
                      </div>

                      {/* Resume Upload */}
                      <div className="flex flex-col gap-1">
                        <div
                          className={`w-full bg-[#f9f9f9] rounded-full px-6 py-4 2xl:px-[36px] 2xl:py-[27px] flex items-center gap-3 cursor-pointer hover:bg-gray-200 transition-colors duration-200 ${errors.resume ? "ring-2 ring-red-400 bg-red-50" : ""
                            }`}
                          onClick={() => fileInputRef.current?.click()}
                        >

                          <Image src="/assets/images/careers/attach.svg" alt="attach" width={24} height={11} />
                          <span className="text-19 text-[#7F7F7F] truncate">
                            {form.resume
                              ? form.resume.name
                              : "Upload Your Resume (Pdf, Docx, Doc | Max File Size: 20 Mb)"}
                          </span>
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={handleFileChange}
                          />
                        </div>
                        {errors.resume && <p className="text-red-500 text-xs pl-4">{errors.resume}</p>}
                      </div>
                    </motion.div>

                    {/* Submit Button */}

                    {/* <button
                        className="inline-flex items-center gap-3 border border-gray-300 text-gray-800 text-sm font-medium pl-5 pr-2 py-2 rounded-full hover:border-[#7F7F7F] transition-all duration-300 group disabled:opacity-60"
                      >
                        <span>{isSubmitting ? "Submitting..." : "Submit Application"}</span>
                        <span className={`w-9 h-9 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-all duration-300 ${isSubmitting ? "" : "group-hover:scale-105"}`}>
                          {isSubmitting ? (
                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeDasharray="40 20" />
                            </svg>
                          ) : (
                            <ArrowRightIcon />
                          )}
                        </span>
                      </button>  */}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mt-8"
                    >
                      <button
                        // onClick={handleSubmit}
                        type="submit"
                        disabled={isSubmitting}
                        className="m-auto md:m-0 flex items-center gap-2 xl:gap-[18px] cursor-pointer text-16 font-normal border-1 border-black py-2 xl:py-[9px] px-4 md:px-5   rounded-[60px] w-fit z-10 group"
                      >
                        <span>{isSubmitting ? "Submitting..." : "Submit Application"}</span>

                        <span className="bg-primary w-[35px] h-[35px] lg:w-[51.7px] lg:h-[51.7px] flex items-center justify-center rounded-full  group-hover:translate-x-[10px] transition-all duration-300">
                          <Image
                            src="/assets/images/home/arrow-right.svg"
                            alt="Arrow"
                            width={30}
                            height={30}
                            className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]"
                          />
                        </span>
                      </button>
                    </motion.div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CareerApplyModal;
