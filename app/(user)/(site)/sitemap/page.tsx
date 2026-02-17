import Index from "@/app/components/Sitemap/index";
import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/schema/breadcrumbSchema";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
    const response = await fetch(`${process.env.BASE_URL}/api/admin/sitemap`, { next: { revalidate: 60 } });
    const data = await response.json();

    const metadataTitle = data?.data?.metaTitle || "Quad Dream";
    const metadataDescription = data?.data?.metaDescription || "Quad Dream";

    return {
        title: metadataTitle,
        description: metadataDescription,
        openGraph: {
            title: metadataTitle,
            description: metadataDescription,
            url: process.env.BASE_URL,
            siteName: "Quad Dream",
        },
    };
}

export default async function Sitemap() {
    const response = await fetch(`${process.env.BASE_URL}/api/admin/sitemap`, { next: { revalidate: 60 } });
    const data = await response.json();
    return (
        <>
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateBreadcrumbSchema("/sitemap")),
                }}
            />
            <Index data={data.data} />
        </>
    );
}
