
import Index from "../components/home/Index";


export default async function Home() {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/home`, { next: { revalidate: 60 } });
  const data = await response.json();
 
  const pjt = await fetch(`${process.env.BASE_URL}/api/admin/project`, { next: { revalidate: 60 } });
  const pjtdata = await pjt.json();
 
  return (
    <>
      <Index data={data.data} pjtdata={pjtdata.data}  />
    </>
  );
}

 
