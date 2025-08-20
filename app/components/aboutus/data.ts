import { data } from "motion/react-client";

 
export const partnersSection= {
    title: "Our Partners",
    description:
      "At Quaddream, we believe strong partnerships are the foundation of every successful journey.",
      bgImg: "/assets/images/home/partners/partner-bg.svg",
    items: [
      { src: "/assets/images/home/partners/jel.png", alt: "JEL" },
      { src: "/assets/images/home/partners/bhatla.png", alt: "Bhatia" },
      { src: "/assets/images/home/partners/bam.png", alt: "BAM" },
      { src: "/assets/images/home/partners/darwish.png", alt: "Darwish" },
      { src: "/assets/images/home/partners/kabri.png", alt: "Kabri" },
      { src: "/assets/images/home/partners/green-oasis.png", alt: "Green Oasis" },
      { src: "/assets/images/home/partners/jlw.png", alt: "JLW" },
      { src: "/assets/images/home/partners/al-tayer.png", alt: "Al Tayer Stocks" }, 
    ],
  };
  export const bannersection = {
    data:[
      {
      title: "About Us",
      bgImg: "/assets/images/aboutus/banner.jpg", 
      navigation: [
        { title: "Home", slug: "" },
        { title: "About Us", slug: "" }, 
      ],
    }
  ]
  };
  export const projects = {
  portfolio: {
    title: "Portfolio",
    buttonText: "View Projects",
    buttonLink: "#",
    projects: [
      {
        id: 1,
        title: 'ADC ',
        location: 'Abu Dhabi ',
        imageUrl: '/assets/images/home/portfolio/port_1.jpg',
        badge: 'Abu Dhabi',
      },
      {
        id: 2,
        title: 'Nakheel Mall',
        location: 'Dubai',
        imageUrl: '/assets/images/home/portfolio/port_2.jpg',
        badge: 'Dubai',
      },
      {
        id: 3,
        title: 'EXPO 2020',
        location: 'Sweden',
        imageUrl: '/assets/images/home/portfolio/port_3.jpg',
        badge: 'Dubai',
      },
      {
        id: 4,
        title: 'ADC ',
        location: 'Abu Dhabi ',
        imageUrl: '/assets/images/home/portfolio/port_1.jpg',
        badge: 'Abu Dhabi',
      },
      {
        id: 5,
        title: 'Nakheel Mall',
        location: 'Dubai',
        imageUrl: '/assets/images/home/portfolio/port_2.jpg',
        badge: 'Dubai',
      },
      {
        id: 6,
        title: 'EXPO 2020',
        location: 'Sweden',
        imageUrl: '/assets/images/home/portfolio/port_3.jpg',
        badge: 'Dubai',
      },
    ],
  },
};


