

export type aboutus =  
{
  metaTitle: string,
  metaDescription: string,
  bannerSection: {
    image: string,
    imageAlt: string,
    title: string
  },
  firstSection: {
    movingText: string,
    title: string,
    description: string,
    buttonText: string
  },
  secondSection: {
    title: string,
    description: string,
    image: string,
    imageAlt: string
  },
  thirdSection: {
    title: string,
    items: [
      {
        title: string,
        description: string,
        logo: string,
        logoAlt: string
      }
    ]
  },
  fourthSection: {
    title: string,
    description: string,
    items: [
      {
        logo: string,
        logoAlt: string,
        title: string
      }
    ]
  },
  historySection: {
    title: string,
    items: [
      {
        image: string,
        imageAlt: string,
        title: string,
        description: string,
        year: string
      }
    ]
  },
  sixthSection: {    
    mainTitle: string,
          subTitle: string,
          buttonText: string,
          image: string,
          imageAlt: string,
          maxwidth?: number | undefined;
  }
}