import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Hr,
  Img,
} from "@react-email/components";
import { ReactElement } from "react";

export type ContactUsProps = {
  name: string;
  email: string;
  phone: string;
  sector: string;
  message: string;
};

export function ContactUsEmail({
  name,
  email,
  phone,
  sector,
  message,
}: ContactUsProps): ReactElement {
  return (
    <Html>
      <Head />
      <Preview>New contact request from {name}</Preview>
      <Body
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f4f4f7",
          margin: 0,
          padding: 0,
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "30px",
            borderRadius: "10px",
            maxWidth: "600px",
            margin: "30px auto",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <Section>
            <Text
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#111111",
                textAlign: "center",
              }}
            >
              📩 New Contact Submission
            </Text>

            <Text style={{ fontSize: "16px", marginBottom: "10px" }}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={{ fontSize: "16px", marginBottom: "10px" }}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={{ fontSize: "16px", marginBottom: "10px" }}>
              <strong>Phone:</strong> {phone}
            </Text>
            <Text style={{ fontSize: "16px", marginBottom: "10px" }}>
              <strong>Sector:</strong> {sector}
            </Text>
            <Text style={{ fontSize: "16px", marginBottom: "20px" }}>
              <strong>Message:</strong> {message}
            </Text>

            <Hr style={{ borderColor: "#e0e0e0", margin: "20px 0" }} />

            {/* Footer */}
            <Section style={{ textAlign: "center", marginTop: "20px" }}>
              {/* Logo */}
              <Img
                src="https://quaddream.vercel.app/assets/logo-quad.jpg"
                alt="Company Logo"
                width="120"
                height="40"
                style={{ display: "block", margin: "0 auto 15px" }}
              />

              {/* Social Icons */}
              <Section style={{ display: "inline-block", textAlign: "center" }}>
                <a
                  href="https://www.linkedin.com/yourpage"
                  target="_blank"
                  style={{ margin: "0 5px" }}
                >
                  <Img
                    src="https://quaddream.vercel.app/assets/images/emailTemplateFooter/linkedin.png"
                    alt="LinkedIn"
                    width="24"
                    height="24"
                    style={{ display: "inline-block" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/yourpage"
                  target="_blank"
                  style={{ margin: "0 5px" }}
                >
                  <Img
                    src="https://quaddream.vercel.app/assets/images/emailTemplateFooter/insta.png"
                    alt="Instagram"
                    width="24"
                    height="24"
                    style={{ display: "inline-block" }}
                  />
                </a>
                <a
                  href="https://www.facebook.com/yourpage"
                  target="_blank"
                  style={{ margin: "0 5px" }}
                >
                  <Img
                    src="https://quaddream.vercel.app/assets/images/emailTemplateFooter/fb.png"
                    alt="Facebook"
                    width="24"
                    height="24"
                    style={{ display: "inline-block" }}
                  />
                </a>
              </Section>

              {/* Copyright */}
              <Text
                style={{
                  fontSize: "12px",
                  color: "#999999",
                  marginTop: "15px",
                }}
              >
                © {new Date().getFullYear()} Your Company. All rights reserved.
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
