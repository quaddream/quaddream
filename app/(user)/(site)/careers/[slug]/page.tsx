import Index from "@/app/components/careers-details/Index";
import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/schema/breadcrumbSchemaCareers";
import { redirect } from "next/navigation";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {

    const slug = (await params).slug;  // ✅ get slug from params

    const response = await fetch(
        `${process.env.BASE_URL}/api/admin/careers?slug=${slug}`,  // ✅ pass slug here
        { next: { revalidate: 60 } }
    );
    const data = await response.json();

    const metadataTitle = data?.data?.metaTitle || "Quad Dream";
    const metadataDescription = data?.data?.metaDescription || "Quad Dream";

    return {
        title: metadataTitle,
        description: metadataDescription,
        robots: "index, follow",
        alternates: {
            canonical: `/careers/${slug}`,          // ✅ was `/careers` before
        },
        openGraph: {
            title: metadataTitle,
            description: metadataDescription,
            url: `${process.env.BASE_URL}/careers/${slug}`,  // ✅ was BASE_URL only before
            siteName: "Quad Dream",
        },
    };
}

export default async function Qhse({
    params,
}: {
        params: { slug: string };
}) {

    const slug = (await params).slug;
    const response = await fetch(
        `${process.env.BASE_URL}/api/admin/careers?slug=${slug}`,
        { next: { revalidate: 60 } }
    );
    const data = await response.json();
      if (!data?.data) {
        redirect("/404");
      }
    const breadcrumbSchema = generateBreadcrumbSchema(`/careers/${slug}`);

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
