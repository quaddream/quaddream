import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/footer";
import { reviewSchema } from "@/lib/schema/review";
import { localBusinessSchema, organizationSchema } from "@/lib/schema/CommonSchema";
import HeadInjector from "../components/common/HeadInjector";

/**
 * NOTE FOR FUTURE DEVS:
 * This is a NESTED layout for the (user) route group — NOT the app root layout.
 * The single <html> and <body> tags live ONLY in app/layout.tsx.
 *
 * Do NOT add <html>, <head>, or <body> tags here (or the font / globals.css
 * imports). Doing so will nest a second <html>/<body> shell inside the root
 * layout's shell, which:
 *   - renders multiple <head>/<body> tags in the actual DOM
 *   - causes metadata (title, description, OG tags, etc.) to conflict/duplicate
 *     between this layout and the root layout
 *   - breaks hydration and SEO tag resolution
 *
 * If you need section-specific scripts/schema/metadata, add them here as
 * fragments (like localBusinessSchema/organizationSchema below) — Next.js
 * merges nested `metadata` exports with the root automatically.
 */

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