import Index from "../../components/ProductsServices/Index";

export default async function ProductsAndServices() {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/services`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();
  return (
    <>
      <Index data={data.data} />
    </>
  );
}
