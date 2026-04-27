import { resend } from "./mailer";
import type { ReactElement } from "react";

type Attachment = {
  filename: string;
  content: Buffer;
  contentType?: string;
};

export async function sendMail<T>({
  to,
  subject,
  template,
  props,
  attachments,
}: {
  to: string | string[];
  subject: string;
  template: (props: T) => ReactElement;
  props: T;
  attachments?: Attachment[];
}) {
  const reactElement = template(props);

  const { data, error } = await resend.emails.send({
    from: "Enquiry <enquiry@quaddream.com>",
    to,
    subject,
    react: reactElement,

    // ✅ THIS is what you were missing
    attachments: attachments?.map((file) => ({
      filename: file.filename,
      content: file.content, // Buffer works fine
      content_type: file.contentType, // note: snake_case for Resend
    })),
  });

  if (error) {
    console.error("Resend API error:", error);
    throw new Error(`Email sending failed: ${JSON.stringify(error)}`);
  }

  return data;
}