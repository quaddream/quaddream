export interface ContactUs {
  bannerSection: {
    image: string;
    imageAlt: string;
    title: string;
  };
  firstSection: {
    title: string;
    description: string;
    items: [
      {
        title: string;
        map: string;
        address: string;
        image: string;
        imageAlt: string;
        contact: [
          {
            value: string;
          },
        ];
        mail: [
          {
            value: string;
          },
        ];
      },
    ];
  };
  secondSection: {
    title: string;
    description: string;
  };
  metaTitle: string;
  metaDescription: string;
}
