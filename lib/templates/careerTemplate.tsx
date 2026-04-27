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

export type CareerProps = {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  nationality?: string;
  currentLocation?: string;
  jobTitle?: string;
  resumeLink?: string; // optional (Dropbox link)
};

export function CareerTemplate({
  firstName,
  lastName,
  email,
  phone,
  nationality,
  currentLocation,
  jobTitle,
  resumeLink,
}: CareerProps): ReactElement {
  return (
    <Html>
      <Head />
      <Preview>
        New job application from {firstName} {lastName || ""}
      </Preview>

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
            New Job Application Received
          </Text>

          {/* Applicant Info */}
          <Text style={{ fontSize: "16px", marginBottom: "10px" }}>
            <strong>Name:</strong> {firstName} {lastName}
          </Text>

          <Text style={{ fontSize: "16px", marginBottom: "10px" }}>
            <strong>Email:</strong> {email}
          </Text>

          {phone && (
            <Text style={{ fontSize: "16px", marginBottom: "10px" }}>
              <strong>Phone:</strong> {phone}
            </Text>
          )}

          {jobTitle && (
            <Text style={{ fontSize: "16px", marginBottom: "10px" }}>
              <strong>Applied Position:</strong> {jobTitle}
            </Text>
          )}

          {nationality && (
            <Text style={{ fontSize: "16px", marginBottom: "10px" }}>
              <strong>Nationality:</strong> {nationality}
            </Text>
          )}

          {currentLocation && (
            <Text style={{ fontSize: "16px", marginBottom: "20px" }}>
              <strong>Current Location:</strong> {currentLocation}
            </Text>
          )}

          {/* Resume Link */}
          {resumeLink && (
            <Text style={{ fontSize: "16px", marginBottom: "20px" }}>
              <strong>Resume:</strong>{" "}
              <a href={resumeLink} target="_blank">
                View Uploaded Resume
              </a>
            </Text>
          )}

          <Hr style={{ borderColor: "#e0e0e0", margin: "20px 0" }} />

          {/* Footer */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Img
              src="https://quaddream.vercel.app/assets/logo-quad.jpg"
              alt="Company Logo"
              width="170"
              height="60"
              style={{ display: "block", margin: "0 auto 15px" }}
            />

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
                />
              </a>
            </div>

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