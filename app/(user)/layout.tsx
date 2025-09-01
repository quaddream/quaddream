import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "variable",   // loads all weights
  variable: "--font-open-sans",
});


// const inter = Inter({
//   weight: ["100", "300", "400", "500", "600", "700", "800"],
//   variable: "--font-inter",
//   subsets: ["latin"],
// });

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
      <body className={`${openSans.variable} antialiased`} >
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
