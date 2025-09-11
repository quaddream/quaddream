export interface BlogType {
  metaTitle: string;
  metaDescription: string;
  bannerSection: {
    image: string;
    imageAlt: string;
    title: string;
  };
  blogs: [
    {
      bannerSection: {
        image: string;
        imageAlt: string;
      };
      title: string;
      content: string;
      slug: string;
      category: {
        name: string;
      };
      thumbnail:string;
      thumbnailAlt:string;
      description?:string;
      date: string;
      metaTitle: string;
      metaDescription: string;
    },
  ];
}
