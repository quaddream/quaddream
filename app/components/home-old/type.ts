

export type Home =  
      {
        metaTitle: string,
        metaDescription: string,
        bannerSection: {
          video: string,
          poster: string,
          items: [
            {
              title: string
            }
          ]
        },
        firstSection: {
          movingText: string,
          title: string,
          description: string,
          buttonText: string,
          items: [
            {
              logo: string,
              logoAlt: string,
              number: string,
              value: string
            }
          ]
        },
        servicesSection: {
          mainTitle: string,
          subTitle: string,
          description: string,
          items: Array<{
            title: string,
            image: string,
            imageAlt: string,
            slug: string
          }>
        },
        industriesSection: {
          title: string,
          items: [
            {
              logo: string,
              logoAlt: string,
              title: string,
              image: string,
              imageAlt: string
            }
          ]
        },
        fourthSection: {
          title: string,
          items: [
            {
              logo: string,
              logoAlt: string,
              mainTitle: string,
              subTitle: string,
              description: string,
              image: string,
              imageAlt: string
            }
          ]
        },
        partnersSection: {
          title: string,
          description: string,
          items: [
            {
              logo: string,
              logoAlt: string
            }
          ]
        },
        seventhSection: {
          mainTitle: string,
          subTitle: string,
          buttonText: string,
          image: string,
          imageAlt: string,
          maxwidth?: number | undefined;
        }
      }
    
    
    