import React from "react";
import Index from "@/app/components/blog-detail/Index";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getBlog(slug: string) {
  const url = `${process.env.BASE_URL}/api/admin/blog?slug=${slug}`;
  const res = await fetch(url, { cache: "no-store" });
  return res.json();
}

async function getAllBlogs() {
  const url = `${process.env.BASE_URL}/api/admin/blog`;
  const res = await fetch(url, { cache: "no-store" });
  return res.json();
}

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug as string);
  const allBlogs = await getAllBlogs();

  return <Index blogDetail={blog.data} allBlogs={allBlogs.data.blogs} />;
}
