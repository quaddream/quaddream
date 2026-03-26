import { Metadata } from "next";
import { serviceSchema } from "@/lib/schema/service";
import { generateBreadcrumbSchema } from "@/lib/schema/breadcrumbSchema";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Scaffolding Rental in Dubai & Across the UAE",
  description: "Scaffolding Rental in Dubai & Across the UAE",
  robots: "noindex, nofollow",
  alternates: {
    canonical: "/scaffolding-rental-in-dubai",
  },
  openGraph: {
    title: "Scaffolding Rental in Dubai & Across the UAE",
    description: "Scaffolding Rental in Dubai & Across the UAE",
    url: process.env.BASE_URL,
    siteName: "Quad Dream",
  },
};

export default async function ScaffoldingRentalsDubai() { // 👈 async
  // const pjt = await fetch(`${process.env.BASE_URL}/api/admin/project`, {
  //   next: { revalidate: 60 },
  // });
  // const pjtdata = await pjt.json();

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema("/scaffolding-rental-in-dubai")
          ),
        }}
      />
      {/* <Index data={scaffoldingRentalsDubaiData} projectsdata={pjtdata.data} />  */}
    </>
  );
}