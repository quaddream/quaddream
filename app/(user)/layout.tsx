import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/footer";

const poppins = Poppins({
  weight: ["100","200", "300","400", "500", "600", "700", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});
const inter = Inter({
  weight: ["100", "300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QUAD DREAM GROUP",
  description: "Reliable Access Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`} >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
