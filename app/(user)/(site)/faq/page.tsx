import React from 'react'
import Index from '@/app/components/faq/Index'
import { Metadata } from 'next';
import { generateBreadcrumbSchema } from "@/lib/schema/breadcrumbSchema";

export async function generateMetadata(): Promise<Metadata> {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/faq`, { next: { revalidate: 60 } });
  const data = await response.json();

  const metadataTitle = data?.data?.metaTitle || "Quad Dream";
  const metadataDescription =
    data?.data?.metaDescription || "Quad Dream";

  return {
    title: "Frequently Asked Questions | Quad Dream",
    description: "Have questions about scaffolding rental in UAE? Our FAQ covers pricing, safety compliance, contracts, and service details. Learn more! ",
    alternates: {
      canonical: "/faq",
    },
    openGraph: {
      title: "Frequently Asked Questions | Quad Dream",
      description: "Have questions about scaffolding rental in UAE? Our FAQ covers pricing, safety compliance, contracts, and service details. Learn more! ",
      url: "/faq",
      siteName: "Quad Dream",
    },
  };
}

export default async function Faq() {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/faq`);
  const data = await response.json();

  return (
    <>
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema("/faq")),
        }}
      />
      <Index data={data.data} />
    </>
  )
}
