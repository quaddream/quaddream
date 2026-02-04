import Index from "../components/home/Index";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/home`, { next: { revalidate: 60 } });
  const data = await response.json();

  const metadataTitle = data?.data?.metaTitle || "Quad Dream";
  const metadataDescription =
    data?.data?.metaDescription || "Quad Dream";

  return {
    title: metadataTitle,
    description: metadataDescription,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      url: process.env.BASE_URL,
      siteName: "Quad Dream",
    },
  };
}

export default async function Home() {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/home`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();

  const pjt = await fetch(`${process.env.BASE_URL}/api/admin/project`, {
    next: { revalidate: 60 },
  });
  const pjtdata = await pjt.json();

  return (
    <>
      <Index data={data.data} pjtdata={pjtdata.data} />
    </>
  );
}
