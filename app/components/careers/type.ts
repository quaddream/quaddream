
export interface careerType {
  metaTitle: string;
  metaDescription: string;
  bannerSection: {
    image: string;
    imageAlt: string;
    title: string;
  },
  firstSection: {
    title: string;
    description: string;
    buttonText: string;
  },
  secondSection: {
    title: string;
    items: {
      logo: string;
      logoAlt: string;
      title: string;
    }[]
  },
  thirdSection: {
    title: string;
  },
  careers: {
    firstSection: {
      title: string;
      department: { _id: string, name: string },
      jobType: { _id: string, name: string },
      experience: string;
      location: string;
    },
    secondSection: {
      title: string;
      items: {
        title: string;
      }[]
    },
    thirdSection: {
      title: string;
      items: {
        title: string;
      }[]
    },
    fourthSection: {
      title: string;
      description: string;
    },
    slug: string;
    metaTitle: string;
    metaDescription: string;
  }[],
  lastSection: {
    image: string,
    imageAlt: string,
    mainTitle: string,
    subTitle: string,
    email: string,
    phone: string
  }
}


export type Home = {
  seventhSection: {
    mainTitle: string;
    subTitle: string;
    imageAlt: string;
    maxwidth?: string;
    image: string;
    email: string;
    whatsapp: string;
  };
};
export interface QhseData {
  metaTitle: string;
  metaDescription: string;
  bannerSection: {
    image: string;
    imageAlt: string;
    title: string;
  };
  firstSection: {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
  };
  secondSection: {
    mainTitle: string;
    subTitle: string;
    description: string;
    items: [
      {
        logo: string;
        logoAlt: string;
        title: string;
      },
    ];
  };
  thirdSection: {
    mainTitle: "string";
    subTitle: "string";
    description: "string";
    items: [
      {
        title: "string";
        logo: "string";
        logoAlt: "string";
      },
    ];
  };
  fourthSection: {
    mainTitle: "string";
    subTitle: "string";
    description: "string";
    items: [
      {
        logo: "string";
        logoAlt: "string";
        title: "string";
      },
    ];
  };
  fifthSection: {
    title: "string";
    items: [
      {
        logo: "string";
        logoAlt: "string";
        title: "string";
      },
    ];
  };
}
