import React from "react";
import Index from "@/app/components/blog/Index";

const Blog = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/blog`, {
    // next: { revalidate: 60 },
  });
  const data = await response.json();
  return (
    <>
      <Index data={data.data} />
    </>
  );
};

export default Blog;
