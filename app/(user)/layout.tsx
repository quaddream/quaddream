import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/footer";
import { reviewSchema } from "@/lib/schema/review";
import { localBusinessSchema, organizationSchema } from "@/lib/schema/CommonSchema";
import HeadInjector from "../components/common/HeadInjector";



export const metadata: Metadata = {
    title: "Scaffolding Rental & Sales in UAE | Quad Dream",
    description:
        "Looking for scaffolding rental or sales in the UAE? Quad Dream offers durable, certified cuplock, tower, & formwork systems tailored to meet your project needs.",
};



export const dynamic = "force-dynamic";



export default async function UserLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const tagResponse = await fetch(`${process.env.BASE_URL}/api/admin/tags`);
    const tagData = await tagResponse.json();



    return (
        <>
            <Script
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />
            <Script
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <HeadInjector html={tagData.tag.headerScript} />
            <Navbar />
            {children}
            <Footer />
        </>
    );
}