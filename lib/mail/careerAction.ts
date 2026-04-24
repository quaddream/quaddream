"use server";

import CareerEnquiry from "@/app/models/CareerEnquiry"; // create this model
import { uploadToDropbox } from "@/lib/connectDropbox"; // if using dropbox

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

        // 2. Validation
        if (!firstName || !email || !resume) {
            return { success: false, message: "Missing required fields" };
        }

        let filePath;
        if (resume && resume.size > 0) {
            const filename = `${Date.now()}-${resume.name || "resume"}`;
            const dropboxPath = `/resume/${formData.get("SingleLine")}/${filename}`;
            filePath = await uploadToDropbox(resume, dropboxPath);
        }

        // 4. Save to DB
        await CareerEnquiry.create({
            firstName,
            lastName,
            email,
            phone,
            nationality,
            currentLocation,
            jobTitle,
            resume: filePath,
        });

        // 5. (Optional) Send Email
        /*
        await sendMail({
          to: "hr@yourcompany.com",
          subject: `New Application - ${firstName}`,
          ...
        });
        */

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