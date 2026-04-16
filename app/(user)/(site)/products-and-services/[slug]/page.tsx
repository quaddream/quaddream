import IndexOld from "@/app/components/service-details";
import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/schema/breadcrumbSchema";
import { generateFaqSchema } from "@/lib/schema/faqSchemaServices";
import Script from "next/script";
import { serviceSchema } from "@/lib/schema/service";
import Index from "@/app/components/ScaffoldingRentalsDubai/Index";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getService(slug: string) {
  console.log("slug", slug);

  if (!slug) return;
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

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const slug = (await params).slug;

  const response = await fetch(
    `${process.env.BASE_URL}/api/admin/services?slug=${slug}`,
    { next: { revalidate: 60 } }
  );
  const data = await response.json();

  const metadataTitle = data?.data?.metaTitle || "Quad Dream";
  const metadataDescription = data?.data?.metaDescription || "Quad Dream";

  // Slugs that should be noindex
  // const noIndexSlugs = [
  //   "scaffolding-rental-dubai-uae",
  //   "aluminum-mobile-scaffolding-tower-rental",
  //   "cuplock-scaffolding-rental-dubai",
  // ];

  // const isNoIndexPage = noIndexSlugs.includes(slug);

  return {
    title: metadataTitle,
    description: metadataDescription,
    robots: "index, follow",
    alternates: {
      canonical: `/products-and-services/${slug}`,
    },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      url: `${process.env.BASE_URL}/products-and-services/${slug}`,
      siteName: "Quad Dream",
    },
  };
}

export default async function ServiceDetailsPage({ params }: Props) {
  const { slug } = await params;
  const service = await getService(slug as string);
  console.log(service.data.type)
  if (service.data.type == "new-design") {
    const pjt = await fetch(`${process.env.BASE_URL}/api/admin/project`, {
      next: { revalidate: 60 },
    });
    const pjtdata = await pjt.json();
    const faqSchema = generateFaqSchema(service.data?.fifthSection);
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
        {faqSchema && (
          <Script
            id="faq-schema"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqSchema),
            }}
          />
        )}
        {/* <script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateBreadcrumbSchema("/scaffolding-rental-in-dubai")
            ),
          }}
        /> */}
        <Index data={service.data} projectsdata={pjtdata.data} />
      </>
    );

  } else {

    const whatyouget = await getWhatyougetData();
    return (
      <>
        <script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBreadcrumbSchema(`/products-and-services/${slug}`)),
          }}
        />
        <IndexOld service={service.data} whatyougetData={whatyouget.data} />
      </>
    );
  }

}
