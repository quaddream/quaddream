import React from "react";
import Index from "@/app/components/media-gallery/Index";

export default async function MediaGallery() {
  const response = await fetch(
    `${process.env.BASE_URL}/api/admin/gallery/meta`,
    { next: { revalidate: 60 } }
  );
  const data = await response.json();

  return (
    <>
      <Index data={data.data} />
    </>
  );
}
