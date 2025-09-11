

export type Projectsdetails =  
  { 
  bannerSection: {
    image: string,
    imageAlt: string,
    title: string,
    
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
    client: number,
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
  metaDescription: string,

  
}