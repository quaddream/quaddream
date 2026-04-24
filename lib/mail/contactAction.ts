"use server";

import { sendMail } from "./sendMail";
import { ContactUsEmail, ContactUsProps } from "../templates/contactUsTemplate";
import { LetstalkFormValues } from "../validation/letstalkSchema";
import ContactEnquiry from "@/app/models/ContactEnquiry";
import { getToEmail } from "../getToEmail";

export async function sendContactAction(data: LetstalkFormValues) {
  try {
    // Optional: basic validation safety
    if (!data.email || !data.name) {
      return { success: false, message: "Missing required fields" };
    }

    const props: ContactUsProps = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      sector: data.sector,
      message: data.message || "",
    };

    // 1. Save to DB
    await ContactEnquiry.create(data);

    const toEmail = await getToEmail("contact");

    // 2. Send email
    await sendMail<ContactUsProps>({
      to: toEmail,
      subject: `New Contact from ${data.name}`,
      template: (p) => ContactUsEmail(p),
      props,
    });

    return {
      success: true,
      message: "Message sent successfully",
    };

  } catch (error: any) {
    console.error("Contact Action Error:", error);

    return {
      success: false,
      message: error.message || "Something went wrong",
    };
  }
}