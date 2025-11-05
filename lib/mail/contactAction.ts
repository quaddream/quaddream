"use server";

import { sendMail } from "./sendMail";
import { ContactUsEmail, ContactUsProps } from "../templates/contactUsTemplate";
import { LetstalkFormValues } from "../validation/letstalkSchema";

export async function sendContactAction(data: LetstalkFormValues) {
  const props: ContactUsProps = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    sector: data.sector,
    message: data.message || "",
  };

  await sendMail<ContactUsProps>({
    to: "info@quaddream.com",
    subject: `New Contact from ${data.name}`,
    template: (p) => ContactUsEmail(p),
    props,
  });
}
