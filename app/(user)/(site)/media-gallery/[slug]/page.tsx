import React from "react";
import Index from "@/app/components/media-gallery/Index";
import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/schema/breadcrumbSchema";
import Script from "next/script";

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const slug = (await params).slug;
  const response = await fetch(`${process.env.BASE_URL}/api/admin/gallery?slug=${slug}`, { next: { revalidate: 60 } });
  const data = await response.json();

  console.log(data)

  const metadataTitle = data?.data?.metaTitle || "Quad Dream";
  const metadataDescription =
    data?.data?.metaDescription || "Quad Dream";

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

export default async function MediaGallery({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }) {
  const response = await fetch(
    `${process.env.BASE_URL}/api/admin/gallery?slug=${(await params).slug}`,
    { next: { revalidate: 60 } }
  );
  const data = await response.json();
console.log(data.data);
  return (
    <>
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema(`/media-gallery/${(await params).slug}`)
          ),
        }}
      />
      <Index data={data.data} />
    </>
  );
}