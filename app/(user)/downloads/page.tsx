import React from "react";
import Index from "@/app/components/downloads/Index";

export default async function Downloads() {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/downloads`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();

  return (
    <>
      <Index data={data.data} />
    </>
  );
}
