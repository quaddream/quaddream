import Index from "@/app/components/project-details";
import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/schema/breadcrumbSchema";


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const response = await fetch(`${process.env.BASE_URL}/api/admin/project?slug=${slug}`, { next: { revalidate: 60 } });
  const data = await response.json();

  console.log(data)

  const metadataTitle = data?.data?.metaTitle || "Quad Dream";
  const metadataDescription =
    data?.data?.metaDescription || "Quad Dream";

  return {
    title: metadataTitle,
    description: metadataDescription,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      url: process.env.BASE_URL,
      siteName: "Quad Dream",
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const response = await fetch(
    `${process.env.BASE_URL}/api/admin/project?slug=${slug}`,
    { next: { revalidate: 60 } }
  );
  const data = await response.json();

  const pjt = await fetch(`${process.env.BASE_URL}/api/admin/project`, {
    next: { revalidate: 60 },
  });
  const pjtdata = await pjt.json();

  return (
    <>
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(`/projects/${slug}`)),
        }}
      />
      <Index data={data.data} pjtdata={pjtdata.data} />
    </>
  );
}
