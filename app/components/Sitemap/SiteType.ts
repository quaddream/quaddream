export interface SitemapBannerSection {
  image: string;
  imageAlt: string;
  title: string;
}

export interface SitemapChild {
  label: string;
  href: string;
}

export interface SitemapItem {
  _id?: string;
  label: string;
  link?: string;
  href?: string;
  children: SitemapChild[];
}

export interface SitemapResponse {
  _id: string;
  metaTitle: string;
  metaDescription: string;
  bannerSection: SitemapBannerSection;
  sitemap: SitemapItem[];
  __v?: number;
}
