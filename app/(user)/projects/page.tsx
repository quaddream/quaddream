import Index from "../../components/projects/Index";


export default async function Home() {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/project`, { next: { revalidate: 60 } });
  const data = await response.json();
 console.log(data)
  return (
    <>
      <Index data={data.data}/>
    </>
  );
}

 

