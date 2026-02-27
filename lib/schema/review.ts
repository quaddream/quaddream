export const reviewSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "Quad Dream",
  image: "https://www.quaddream.com/assets/images/logo-main.svg",
  description:
    "Quad Dream delivers professional scaffolding solutions across Dubai and the UAE for commercial and industrial construction projects.",

  brand: {
    "@type": "LocalBusiness",
    name: "Quad Dream"
  },

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    ratingCount: "3",
    reviewCount: "3"
  },

  review: {
    "@type": "Review",
    name: "AGNEL PIUS K",
    reviewBody: "Professional",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5"
    },
    author: {
      "@type": "Person",
      name: "AGNEL PIUS K"
    }
  }
};