export function generateBreadcrumbSchema(pathname: string) {
  const baseUrl = process.env.BASE_URL || "https://www.quaddream.com";

  const segments = pathname.split("/").filter(Boolean);

  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${baseUrl}/`,
    },
  ];

  segments.forEach((segment, index) => {
    const url = `${baseUrl}/${segments.slice(0, index + 1).join("/")}`;

    itemListElement.push({
      "@type": "ListItem",
      position: index + 2,
      name: decodeURIComponent(
        segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase())
      ),
      item: url,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}
