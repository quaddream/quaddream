import Index from "../../components/qhse/Index";

export default async function Qhse() {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/qhse`, { next: { revalidate: 60 } });
  const data = await response.json();

  return (
    <>
      <Index data={data.data}/>
    </>
  );
}
