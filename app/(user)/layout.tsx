import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/footer";
import Script from "next/script";
import { localBusinessSchema } from "@/lib/schema/locaBusiness";
import { reviewSchema } from "@/lib/schema/review";

const openSans = Open_Sans({
    subsets: ["latin"],
    weight: "variable", // loads all weights
    variable: "--font-open-sans",
});

// const inter = Inter({
//   weight: ["100", "300", "400", "500", "600", "700", "800"],
//   variable: "--font-inter",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: "Scaffolding Rental & Sales in UAE | Quad Dream",
    description:
        "Looking for scaffolding rental or sales in the UAE? Quad Dream offers durable, certified cuplock, tower, & formwork systems tailored to meet your project needs.",
    metadataBase: new URL(process.env.BASE_URL!),
};

export const dynamic = "force-dynamic";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Google Tag Manager Script */}
                <Script
                    id="gtm-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: ` (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NBV7RRSH');`,
                    }}
                />
  
                <Script
                    id="local-business-schema"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(localBusinessSchema),
                    }}
                />
                <Script
                    id="review-schema"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(reviewSchema),
                    }}
                />

            </head>
            <body className={`${openSans.variable} antialiased`}>
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-NBV7RRSH"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
