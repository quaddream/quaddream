export interface MediaGalleryData {
  title:string;
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
      slug:string;
      categories: [
        {
          title: string;
          images: string[];
          slug: string;
        },
      ];
    },
  ];
  categories: [
    {
      title: string;
      images: string[];
      slug: string;
      categories:[
        {
          title: string;
          images: string[];
          slug: string;
        },
      ]
    },
  ];
  metaTitle: string;
  metaDescription: string;
}
