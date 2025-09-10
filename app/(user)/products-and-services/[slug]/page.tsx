// import Index from "@/app/components/service-details";
// import { useParams } from "next/navigation";

// const Page = () => {
//   const { params } = useParams();

//   return (
//     <>
//       <Index />
//     </>
//   );
// };

// export default Page;

import Index from "@/app/components/service-details";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getService(slug: string) {
  const url = `${process.env.BASE_URL}/api/admin/services?slug=${slug}`;
  console.log("Fetching service from:", url);
  const res = await fetch(url, { cache: "no-store" });
  return res.json();
}

export default async function ServiceDetailsPage({ params }: Props) {
  const { slug } = await params;
  const service = await getService(slug as string);

  return <Index service={service.data} />;
}
