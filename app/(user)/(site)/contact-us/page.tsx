import Index from "@/app/components/ContactUs/Index";
import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/schema/breadcrumbSchema";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/contact`, { next: { revalidate: 60 } });
  const data = await response.json();

  const metadataTitle = data?.data?.metaTitle || "Quad Dream";
  const metadataDescription =
    data?.data?.metaDescription || "Quad Dream";

  return {
    title: metadataTitle,
    description: metadataDescription,
    alternates: {
      canonical: "/contact-us",
    },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      url: process.env.BASE_URL,
      siteName: "Quad Dream",
    },
  };
}

export default async function ContactUs() {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/contact`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();

  const serviceResponse = await fetch(`${process.env.BASE_URL}/api/admin/services`, {
    next: { revalidate: 60 },
  });
  const serviceData = await serviceResponse.json();

  return (
    <>
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema("/contact-us")),
        }}
      />
      <Index data={data.data} serviceData={serviceData.data.thirdSection.items.map((item: { firstSection: { title: string } }) => item.firstSection.title)} />
    </>
  );
}
