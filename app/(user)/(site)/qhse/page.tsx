import Index from "@/app/components/qhse/Index";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const response = await fetch(`${process.env.BASE_URL}/api/admin/qhse`, { next: { revalidate: 60 } });
    const data = await response.json();

    const metadataTitle = data?.data?.metaTitle || "Quad Dream";
    const metadataDescription = data?.data?.metaDescription || "Quad Dream";

    return {
        title: metadataTitle,
        description: metadataDescription,
        alternates: {
            canonical: `/qhse`,
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
    const response = await fetch(`${process.env.BASE_URL}/api/admin/qhse`, { next: { revalidate: 60 } });
    const data = await response.json();

    return (
        <>
            <Index data={data.data} />
        </>
    );
}
