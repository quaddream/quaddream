import type { Metadata } from "next";
import "../../../app/globals.css";
import { RefetchServicesProvider } from "@/app/contexts/refetchServices";

export const metadata: Metadata = {
  title: "Assent | Backend Console",
  description: "Assent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <RefetchServicesProvider>
      <body className={`antialiased overflow-x-hidden overflow-y-hidden`}>{children}</body>
      </RefetchServicesProvider>
    </html>
  );
}