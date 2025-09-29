import React from "react";
import Index from "@/app/components/media-gallery/Index";

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
      <Index data={data.data} />
    </>
  );
}