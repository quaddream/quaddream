export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Quad Dream Group",
  "alternateName": "Quad Dream Scaffolding",
  "url": "https://www.quaddream.com",
  "logo": "https://www.quaddream.com/assets/images/logo-main.svg",
  "description": "Leading ISO-certified scaffolding company in Dubai, UAE, delivering certified and engineered scaffolding services including rental, sales, and contracting across Dubai and the wider UAE since 2012.",

  "email": [
    "info@quaddream.com",
    "enquiries@quaddream.com"
  ],

  "telephone": [
    "+97142637784",
    "+971565445987",
    "+971505452385"
  ],

  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office No. 110, Al Mansour Building, Damascus Street 3, Al Qusais Industrial Area 2",
    "addressLocality": "Dubai",
    "addressCountry": "UAE"
  },

  "areaServed": [
    {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    {
      "@type": "Country",
      "name": "Canada"
    }
  ],

  "sameAs": [
    "https://www.instagram.com/quaddreamscaffolding",
    "https://www.facebook.com/people/QUAD-DREAM-Scaffolding/100063819893627",
    "https://www.linkedin.com/company/quaddream-scaffolding-contracting"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Quad Dream",
  "url": "https://www.quaddream.com/",

  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Office No. 110, Al Mansour Building, Damascus Street 3, Al Qusais Industrial Area 2",
      "addressLocality": "Dubai",
      "addressCountry": "UAE",
      "telephone": [
        "+97142637784",
        "+971565445987",
        "+971505452385"
      ],
      "email": "enquiries@quaddream.com"
    },
    {
      "@type": "PostalAddress",
      "description": "Yard",
      "streetAddress": "Al Quoz Industrial Area – 2, Near Bartawi",
      "addressLocality": "Dubai",
      "addressCountry": "UAE",
      "telephone": [
        "+971504518609",
        "+971545146495"
      ],
      "email": [
        "yard-2@quaddream.com",
        "john@quaddream.com"
      ]
    },
    {
      "@type": "PostalAddress",
      "description": "Quaddream Branch Office",
      "addressLocality": "Sharjah",
      "addressCountry": "UAE",
      "telephone": [
        "+971504518609",
        "+971545146495"
      ]
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Office No: 27, 7th Floor, Tower 1 Business Center, Mazyad Mall, Musaffah",
      "addressLocality": "Abu Dhabi",
      "addressCountry": "UAE",
      "telephone": "+971503525314"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Bradford",
      "addressLocality": "Ontario",
      "addressCountry": "Canada",
      "telephone": [
        "+971504518609",
        "+971545146495"
      ]
    }
  ],

  "areaServed": [
    {
      "@type": "Place",
      "hasMap": "https://www.google.com/maps/place/Quad+Dream+Scaffolding+%26+Trading+LLC/@25.2805683,55.3847372,796m/data=!3m1!1e3!4m6!3m5!1s0x3e5f5d0256c252a5:0x5df3bfe1132f1251!8m2!3d25.2805683!4d55.3873121!16s%2Fg%2F11h3k941kd!5m1!1e4?entry=ttu",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.2805683",
        "longitude": "55.3847372"
      }
    },
    {
      "@type": "Place",
      "hasMap": "https://www.google.com/maps/place/QUAD+DREAM+SCAFFOLDING+CONTRACTING+LLC+-SHJ+BR+1/@25.3264362,55.627109,875m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ef5f3007850bbb9:0x12542d2ba14ba8c1!8m2!3d25.3264362!4d55.627109!16s%2Fg%2F11yfkfjxsb?entry=ttu",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.3264362",
        "longitude": "55.627109"
      }
    }
  ]
};