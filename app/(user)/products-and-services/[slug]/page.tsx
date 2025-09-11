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

async function getWhatyougetData() {
  const url = `${process.env.BASE_URL}/api/admin/services/second-section`;
  console.log("Fetching service from:", url);
  const res = await fetch(url, { cache: "no-store" });
  return res.json();
}

export default async function ServiceDetailsPage({ params }: Props) {
  const { slug } = await params;
  const service = await getService(slug as string);
  const whatyouget = await getWhatyougetData();

  return <Index service={service.data} whatyougetData={whatyouget.data} />;
}
