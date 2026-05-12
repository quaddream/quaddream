import Index from "@/app/components/careers/Index";
import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/schema/breadcrumbSchemaCareers";

export async function generateMetadata(): Promise<Metadata> {
    const response = await fetch(`${process.env.BASE_URL}/api/admin/careers`, { next: { revalidate: 60 } });
    const data = await response.json();

    const metadataTitle = data?.data?.metaTitle || "Quad Dream";
    const metadataDescription = data?.data?.metaDescription || "Quad Dream";

    return {
        title: metadataTitle,
        description: metadataDescription,
        robots: "index, follow",
        alternates: {
            canonical: `/careers`,
        },
        openGraph: {
            title: metadataTitle,
            description: metadataDescription,
            url: process.env.BASE_URL,
            siteName: "Quad Dream",
        },
    };
}

export default async function Qhse() {
    const response = await fetch(`${process.env.BASE_URL}/api/admin/careers`, {
        next: { revalidate: 60 },
    });
    const data = await response.json();

    const breadcrumbSchema = generateBreadcrumbSchema("/careers");
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />

            <Index data={data.data}/>
        </>
    );
}
