export const generateBreadcrumbSchema = ({
    baseUrl,
    slug,
    title,
}: {
    baseUrl: string;
    slug: string;
    title: string;
}) => {
    const cleanTitle = title?.replace(/<[^>]*>?/gm, "") || "Service";

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${baseUrl}/`,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Products and Services",
                item: `${baseUrl}/products-and-services`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: cleanTitle,
                item: `${baseUrl}/products-and-services/${slug}`,
            },
        ],
    };
};