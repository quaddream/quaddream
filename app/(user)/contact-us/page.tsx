import Index from "../../components/ContactUs/Index";

export default async function ContactUs() {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/contact`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();

  return (
    <>
      <Index data={data.data} />
    </>
  );
}
