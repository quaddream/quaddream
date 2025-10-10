import Index from "../../components/projects/Index";

export default async function Home() {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/project`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();

  const location = await fetch(
    `${process.env.BASE_URL}/api/admin/project/location`,
    { next: { revalidate: 60 } }
  );
  const locationdata = await location.json();

  // const sector = await fetch(
  //   `${process.env.BASE_URL}/api/admin/project/sector`,
  //   { next: { revalidate: 60 } }
  // );
  // const sectordata = await sector.json();

  return (
    <>
      <Index
        data={data.data}
        locationdata={locationdata.data}
        // sectordata={sectordata.data}
      />
    </>
  );
}
