import {
  Html,
  Head,
  Preview,
  Body,
  Container,
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
          {/* Header */}
          <Text
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "40px",
              color: "#111111",
              textAlign: "center",
            }}
          >
            A Client Wants to Talk!
          </Text>

          {/* Body Content */}
          <Text
            style={{ fontSize: "16px", marginBottom: "10px", color: "#111111" }}
          >
            <strong>Name:</strong> {name}
          </Text>
          <Text
            style={{ fontSize: "16px", marginBottom: "10px", color: "#111111" }}
          >
            <strong>Email:</strong> {email}
          </Text>
          <Text
            style={{ fontSize: "16px", marginBottom: "10px", color: "#111111" }}
          >
            <strong>Phone:</strong> {phone}
          </Text>
          <Text
            style={{ fontSize: "16px", marginBottom: "10px", color: "#111111" }}
          >
            <strong>Sector:</strong> {sector}
          </Text>
          <Text
            style={{ fontSize: "16px", marginBottom: "20px", color: "#111111" }}
          >
            <strong>Message:</strong> {message}
          </Text>

          <Hr style={{ borderColor: "#e0e0e0", margin: "20px 0" }} />

          {/* Footer */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            {/* Logo */}
            <Img
              src="https://quaddream.vercel.app/assets/logo-quad.jpg"
              alt="Company Logo"
              width="170"
              height="60"
              style={{ display: "block", margin: "0 auto 15px" }}
            />

            {/* Social Icons */}
            <div style={{ textAlign: "center", marginBottom: "10px" }}>
              <a
                href="https://www.linkedin.com/company/quaddream-scaffolding-contracting"
                target="_blank"
                style={{ margin: "0 5px" }}
              >
                <Img
                  src="https://quaddream.vercel.app/assets/images/emailTemplateFooter/linkedin.png"
                  alt="LinkedIn"
                  width="16"
                  height="16"
                  style={{ display: "inline-block" }}
                />
              </a>
              <a
                href="https://www.instagram.com/quaddreamscaffolding"
                target="_blank"
                style={{ margin: "0 5px" }}
              >
                <Img
                  src="https://quaddream.vercel.app/assets/images/emailTemplateFooter/insta.png"
                  alt="Instagram"
                  width="16"
                  height="16"
                  style={{ display: "inline-block" }}
                />
              </a>
              <a
                href="https://www.facebook.com/people/QUAD-DREAM-Scaffolding/100063819893627"
                target="_blank"
                style={{ margin: "0 5px" }}
              >
                <Img
                  src="https://quaddream.vercel.app/assets/images/emailTemplateFooter/fb.png"
                  alt="Facebook"
                  width="16"
                  height="16"
                  style={{ display: "inline-block" }}
                />
              </a>
            </div>

            {/* Copyright */}
            <Text
              style={{ fontSize: "12px", color: "#999999", marginTop: "15px" }}
            >
              © {new Date().getFullYear()} Quad Dream. All rights reserved.
            </Text>
          </div>
        </Container>
      </Body>
    </Html>
  );
}
