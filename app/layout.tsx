import type { Metadata } from "next";
import "@/app/globals.css";

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
      <body className={``}>{children}</body>
    </html>
  );
}