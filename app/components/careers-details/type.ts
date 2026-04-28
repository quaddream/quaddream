
export interface careerType {
heading:string;
description:string;
buttonText:string;
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
