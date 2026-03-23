export interface ScaffoldingRentalsDubaiData {
  bannerSection: {
    title: string;
    bgImg: string;
    image: string;
    imageAlt: string;
    navigation: { title: string; slug: string }[];
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

  scaffoldingSystems: {
    title: string;
    items: {
      title: string;
      image: string;
      imageAlt: string;
      points?: string[];
    }[];
  };

  howToRent: {
    title: string;
    image: string;
    steps: { title: string; description: string }[];
  };

  industriesSection: {
    title: string;
    items: {
      logo: string;
      logoAlt: string;
      title: string;
      image: string;
      imageAlt: string;
    }[];
  };
 ctaSection: {
    title: string;
    bgImg: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };

  portfolioSection: PortfolioSection;
  faqContent: FaqData;
}


export interface PortfolioProject {
  id: number;
  title: string;
  location: string;
  imageUrl: string;
  badge: string;
}

export interface PortfolioSection {
  title: string;
  buttonText: string;
  buttonLink: string;
  projects: PortfolioProject[];
}
export interface FaqData {
  heading: string;
  description?: string;
  categories: {
    category: string;
    items: {
      question: string;
      answer: string;
    }[];
  }[];
}