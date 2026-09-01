// types/seo.ts
export interface SeoFormValues {
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  schema:string;
}

// Any page form that wants SEO fields just extends/includes this
export interface WithSeo {
  seo: SeoFormValues;
}