import Index from "@/app/components/service-details";
import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/schema/breadcrumbSchema";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getService(slug: string) {
  const url = `${process.env.BASE_URL}/api/admin/services?slug=${slug}`;
  console.log("Fetching service from:", url);
  const res = await fetch(url, { cache: "no-store" });
  return res.json();
}

async function getWhatyougetData() {
  const url = `${process.env.BASE_URL}/api/admin/services/second-section`;
  console.log("Fetching service from:", url);
  const res = await fetch(url, { cache: "no-store" });
  return res.json();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const response = await fetch(`${process.env.BASE_URL}/api/admin/services?slug=${slug}`, { next: { revalidate: 60 } });
  const data = await response.json();

  console.log(data);

  const metadataTitle = data?.data?.metaTitle || "Quad Dream";
  const metadataDescription = data?.data?.metaDescription || "Quad Dream";

  return {
    title: metadataTitle,
    description: metadataDescription,
    alternates: {
      canonical: `/products-and-services/${slug}`,
    },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      url: process.env.BASE_URL,
      siteName: "Quad Dream",
    },
  };
}

export default async function ServiceDetailsPage({ params }: Props) {
  const { slug } = await params;
  const service = await getService(slug as string);
  const whatyouget = await getWhatyougetData();

  return (
    <>
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(`/products-and-services/${slug}`)),
        }}
      />
      <Index service={service.data} whatyougetData={whatyouget.data} />
    </>
  );
}
