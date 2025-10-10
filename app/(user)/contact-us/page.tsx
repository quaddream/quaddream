import Index from "../../components/ContactUs/Index";

export default async function ContactUs() {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/contact`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();

  const serviceResponse = await fetch(`${process.env.BASE_URL}/api/admin/services`, {
    next: { revalidate: 60 },
  });
  const serviceData = await serviceResponse.json();

  return (
    <>
      <Index data={data.data} serviceData={serviceData.data.thirdSection.items.map((item: {firstSection:{title:string}}) => item.firstSection.title)} />
    </>
  );
}
