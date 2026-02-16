export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "LocalBusiness",
    "name": "Quad Dream",
    "image": "https://www.quaddream.com/assets/images/logo-main.svg"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "ratingCount": "3",
    "reviewCount": "3"
  },
  "review": {
    "@type": "Review",
    "name": "AGNEL PIUS K",
    "reviewBody": "Professional",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5"
    }
  }
};
