const localBusinessSchemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Quad Dream",
  "url": "https://www.quaddream.com/",
  "logo": "https://www.quaddream.com/assets/images/logo-main.svg",
  "description": "Quad Dream is a professional scaffolding company in Dubai and the UAE offering reliable scaffolding solutions for commercial, industrial, and construction projects.",
  "email": "info@quaddream.com",
  "telephone": "+97142637784",
  "sameAs": [
    "https://www.instagram.com/quaddreamscaffolding",
    "https://www.facebook.com/people/QUAD-DREAM-Scaffolding/100063819893627",
    "https://www.linkedin.com/company/quaddream-scaffolding-contracting"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+97142637784",
      "email": "info@quaddream.com",
      "contactType": "customer service"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+971565445987",
      "email": "enquiries@quaddream.com",
      "contactType": "sales"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+971505452385",
      "contactType": "customer service"
    }
  ],
  "department": [
    {
      "@type": "LocalBusiness",
      "name": "Quad Dream – Dubai Head Office",
      "telephone": "+97142637784",
      "email": "info@quaddream.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office No. 110, Al Mansour Building, Damascus Street",
        "addressLocality": "Al Qusais Industrial Area 2",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.2805683,
        "longitude": 55.3847372
      },
      "hasMap": "https://www.google.com/maps/place/Quad+Dream+Scaffolding+%26+Trading+LLC/@25.2805683,55.3847372,796m/data=!3m1!1e3!4m6!3m5!1s0x3e5f5d0256c252a5:0x5df3bfe1132f1251!8m2!3d25.2805683!4d55.3873121!16s%2Fg%2F11h3k941kd!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      "@type": "LocalBusiness",
      "name": "Quad Dream – Yard",
      "telephone": "+971504518609",
      "email": "yard-2@quaddream.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Quoz Industrial Area – 2",
        "addressLocality": "Near Bartawi",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      }
    },
    {
      "@type": "LocalBusiness",
      "name": "Quad Dream – Canada",
      "telephone": "+14169701617",
      "email": "info@quaddream.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bradford",
        "addressRegion": "Ontario",
        "addressCountry": "CA"
      }
    },
    {
      "@type": "LocalBusiness",
      "name": "Quad Dream – Abu Dhabi",
      "telephone": "+971503525314",
      "email": "info@quaddream.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office No: 27, 7th Floor, Tower 1 Business Center",
        "addressLocality": "Mazyad Mall, Musaffah",
        "addressRegion": "Abu Dhabi",
        "addressCountry": "AE"
      }
    },
    {
      "@type": "LocalBusiness",
      "name": "Quad Dream – SHJ Branch",
      "telephone": "+971565445987",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Sharjah",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.3264362,
        "longitude": 55.627109
      },
      "hasMap": "https://www.google.com/maps/place/QUAD+DREAM+SCAFFOLDING+CONTRACTING+LLC+-SHJ+BR+1/@25.3264362,55.627109,787m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ef5f3007850bbb9:0x12542d2ba14ba8c1!8m2!3d25.3264362!4d55.627109!16s%2Fg%2F11yfkfjxsb?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
    }
  ]
};

// ✅ Stringified once at module level — prevents hydration mismatch
export const localBusinessSchema = JSON.stringify(localBusinessSchemaData);