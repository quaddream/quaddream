"use server";

import CareerEnquiry from "@/app/models/CareerEnquiry";
import { uploadToDropbox } from "@/lib/connectDropbox";
import { sendMail } from "./sendMail";
import { CareerTemplate } from "../templates/careerTemplate";
import { getToEmail } from "../getToEmail";
// import { CareerTemplate } from "@/templates/careerTemplate";

export async function submitCareer(formData: FormData) {
  try {
    // 1. Extract fields
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const nationality = formData.get("nationality") as string;
    const currentLocation = formData.get("currentLocation") as string;
    const jobTitle = formData.get("jobTitle") as string;
    const resume = formData.get("resume") as File;

    const props = {
      firstName,
      lastName,
      email,
      phone,
      nationality,
      currentLocation,
      jobTitle,
    };

    // 2. Validation
    if (!firstName || !email || !resume) {
      return { success: false, message: "Missing required fields" };
    }

    // 3. Convert file → buffer (for email)
    let attachment;

    if (resume && resume.size > 0) {
      const bytes = await resume.arrayBuffer();
      const buffer = Buffer.from(bytes);

      attachment = {
        filename: resume.name,
        content: buffer,
        contentType: resume.type,
      };
    }

    // 4. Upload to Dropbox (optional but good for storage)
    let filePath = "";
    if (resume && resume.size > 0) {
      const filename = `${Date.now()}-${resume.name}`;
      const dropboxPath = `/resume/${jobTitle}/${filename}`;
      filePath = await uploadToDropbox(resume, dropboxPath);
    }

    // 5. Save to DB
    await CareerEnquiry.create({
      ...props,
      resume: filePath,
    });

    const toEmail = await getToEmail("career");

    // 6. Send email WITH attachment
    await sendMail({
      to: toEmail, // change this
      subject: `New Application from ${firstName} ${lastName}`,
      template: (p) => CareerTemplate(p),
      props,
      attachments: attachment ? [attachment] : [],
    });

    return {
      success: true,
      message: "Application submitted successfully",
    };

  } catch (error: any) {
    console.error("Career Action Error:", error);

    return {
      success: false,
      message: error.message || "Something went wrong",
    };
  }
}