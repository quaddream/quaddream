export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.quaddream.com/#service",
  serviceType: "Scaffolding Services",
  name: "Scaffolding Services in UAE",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.quaddream.com/#localbusiness",
    name: "Quad Dream",
    url: "https://www.quaddream.com/"
  },
  areaServed: [
    {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    {
      "@type": "Country",
      name: "Canada"
    }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Scaffolding Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cuplock Scaffolding & Aluminum Mobile Tower Rental & Sales"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Aluminum Mobile Tower Rental"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Scaffolding Contracting"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Scaffolding Formwork Rental"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Scaffolding Rental"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Construction Equipment Rental"
        }
      }
    ]
  }
};



