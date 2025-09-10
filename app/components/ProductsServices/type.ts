export interface ProductsServicesData {
  metaTitle: string;
  metaDescription: string;
  bannerSection: {
    image: string;
    imageAlt: string;
    title: string;
  };
  firstSection: {
    title: string;
    description: string;
  };
  secondSection: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  thirdSection: {
    title: string;
    items: [
      {
        thumbnail: string;
        thumbnailAlt: string;
        thumbnailTitle: string;
        slug: string;
        metaTitle: string;
        metaDescription: string;
        bannerSection: {
          image: string;
          imageAlt: string;
        };
        firstSection: {
          title: string;
          description: string;
          image: string;
          imageAlt: string;
        };
        secondSection: {
          title: string;
          items: [
            {
              logo: string;
              logoAlt: string;
              title: string;
            },
          ];
        };
        productSection: {
          title: string;
          items: [
            {
              image: string;
              imageAlt: string;
              title: string;
              description: string;
            },
          ];
        };
        fourthSection: {
          title: string;
          description: string;
          items: [
            {
              logo: string;
              logoAlt: string;
              title: string;
            },
          ];
        };
      },
    ];
  };
}
