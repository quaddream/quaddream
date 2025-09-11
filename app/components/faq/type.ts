export interface FaqData {
  bannerSection: {
    image: string;
    imageAlt: string;
    title: string;
  };
  firstSection: {
    title: string;
    description: string;
  };
  faq: [
    {
      title: string;
      items: [
        {
          question: string;
          answer: string;
        },
      ];
    },
  ];
}
