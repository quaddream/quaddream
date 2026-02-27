import React from "react";
import Index from "@/app/components/blog/Index";
import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/schema/breadcrumbSchema";

export async function generateMetadata(): Promise<Metadata> {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/blog`, { next: { revalidate: 60 } });
  const data = await response.json();

  const metadataTitle = data?.data?.metaTitle || "Quad Dream";
  const metadataDescription =
    data?.data?.metaDescription || "Quad Dream";

  return {
    title: metadataTitle,
    description: metadataDescription,
    alternates: {
      canonical: "/blog",
    },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      url: process.env.BASE_URL,
      siteName: "Quad Dream",
    },
  };
}

const Blog = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/blog`, {
    // next: { revalidate: 60 },
  });
  const data = await response.json();
  return (
    <>
      <script
        id="breadcrumb-schema"
        type="application/ld+json"

        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema("/blog")),
        }}
      />
      <Index data={data.data} />
    </>
  );
};

export default Blog;
