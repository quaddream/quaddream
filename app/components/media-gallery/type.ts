export interface MediaGalleryData {
  bannerSection: {
    image: string;
    imageAlt: string;
    title: string;
  };
  firstSection: {
    title: string;
    description: string;
  };
  gallery: [
    {
      title: string;
      images: string[];
    },
  ];
  metaTitle: string;
  metaDescription: string;
}
