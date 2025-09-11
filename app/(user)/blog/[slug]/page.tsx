import React from "react";
import Index from "@/app/components/blog-detail/Index";


type Props = {
  params: Promise<{ slug: string }>;
};

async function getBlog(slug: string) {
  const url = `${process.env.BASE_URL}/api/admin/blog?slug=${slug}`;
  console.log("Fetching service from:", url);
  const res = await fetch(url, { cache: "no-store" });
  return res.json();
}

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug as string);

  return <Index blogDetail={blog.data} />;
};
