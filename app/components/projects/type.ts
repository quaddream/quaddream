

export type Projects =  
{
  metaTitle: string,
  metaDescription: string,
  bannerSection: {
    image: string,
    imageAlt: string,
    title: string,
    
  },
  firstSection: {
    title: string,
    description: string
  },
  projects: [ 
      
    {
      bannerSection: {
        image: string,
        imageAlt: string
      },
      firstSection: {
        title: string,
        sector: {
          name: string
        },
        location: {
          name: string
        },
        status: string,
        client: string,
        coverImage: string,
        coverImageAlt: string
      },
      secondSection: {
        title: string,
        description: string
      },
      thirdSection: {
        title: string,
        items: [
          {
            title: string
          }
        ]
      },
      fourthSection: {
        title: string,
        description: string,
        items: [
          {
            title: string,
            logo: string,
            logoAlt: string
          }
        ]
      },
      images: [
        string
      ],
      slug: string,
      thumbnail: string,
      thumbnailAlt: string,
      metaTitle: string,
      metaDescription: string
    }
  ],
  lastSection: { 
    mainTitle: string,
    subTitle: string,
    buttonText: string,
    image: string,
    imageAlt: string,
    maxwidth?: number | undefined;

  }
}

export type Location = 
{ 
    name: string 
}
export type sector = 
{ 
    name: string 
}
