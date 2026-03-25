type BottomStat = {
  icon: string;
  label: string;
  sublabel: string;
};
export interface ScaffoldingRentalsDubaiData {
  bannerSection: {
    title: string;
    bgImg: string;
    image: string;
    imageAlt: string;
    navigation: { title: string; slug: string }[];
  };
  secondSection: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  bottomDescription?: string;
  bottomStats?: BottomStat[];

  scaffoldingSystems: {
    title: string;
    items: {
      title: string;
      image: string;
      imageAlt: string;
      points?: string[];
      description?: string;
    }[];
  };

  howToRent: {
    title: string;
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

export interface NewDesignType {
  type: string;
  isHidden: boolean;

  thumbnail: string;
  thumbnailAlt: string;
  thumbnailTitle: string;
  slug: string;

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
    image: string;
    imageAlt: string;
    items: {
      label: string;
      value: string;
      image: string;
      imageAlt: string;
    }[];
  };

  secondSection: {
    title: string;
    items: {
      image: string;
      imageAlt: string;
      title: string;
      description: string;
    }[];
  };

  thirdSection: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };

  productSection: {
    title: string;
    items: {
      _id: string;
    }[];
  };

  productSection2: {
    title: string;
    sections: {
      title: string;
      items: {
        _id: string;
      }[];
    }[];
  };

  fourthSection: {
    title: string;
    description: string;
    items: {
      logo: string;
      logoAlt: string;
      image: string;
      imageAlt: string;
      title: string;
    }[];
  };

  fifthSection: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };

  sixthSection: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    buttonText: string;
  };
}