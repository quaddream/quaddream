export interface DownloadsData {
  metaTitle: string;
  metaDescription: string;
  banner: string;
  bannerAlt: string;
  pageTitle: string;
  categories: [
    {
      category: string;
      files: [
        {
          title: string;
          file: string;
          size: string;
        },
      ];
    },
  ];
}
