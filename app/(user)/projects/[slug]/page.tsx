import Index from "@/app/components/project-details";

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const response = await fetch(
    `${process.env.BASE_URL}/api/admin/project?slug=${slug}`,
    { next: { revalidate: 60 } }
  );
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
