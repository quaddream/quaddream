import Index from "@/app/components/ProductsServices/Index";
import { Metadata } from "next";
import Script from "next/script";
import { serviceSchema } from "@/lib/schema/service";

export async function generateMetadata(): Promise<Metadata> {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/services`, { next: { revalidate: 60 } });
  const data = await response.json();

  const metadataTitle = data?.data?.metaTitle || "Quad Dream";
  const metadataDescription =
    data?.data?.metaDescription || "Quad Dream";

  return {
    title: metadataTitle,
    description: metadataDescription,
    alternates: {
      canonical: "/products-and-services",
    },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      url: process.env.BASE_URL,
      siteName: "Quad Dream",
    },
  };
}

export default async function ProductsAndServices() {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/services`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();
  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Index data={data.data} />
    </>
  );
}
