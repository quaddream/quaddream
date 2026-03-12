import type { Metadata } from "next";
import "@/app/globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
    subsets: ["latin"],
    weight: "variable", // loads all weights
    variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Quad Dream | Backend Console",
  description: "Quad Dream",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.variable}>{children}</body>
    </html>
  );
}