export const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href:"/about-us",
    children: [
      { name: "Faq", href: "/faq" },
      
    ],
  },
  {
    name: "Products & Services",
    href: "/products-and-services",
    children: [
      { name: "Scaffolding Contracting", href: "/products-and-services/scaffolding-contracting" },
      { name: "Cuplock Scaffolding", href: "/products-and-services/cuplock-scaffolding-aluminum-mobile-tower-rental-sales" },
      { name: "Formwork Rentals", href: "/products-and-services/scaffolding-formwork-rental" },
      { name: "Equipment Rentals", href: "/products-and-services/construction-equipment-rentals" },
    ],
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "QHSE",
    href: "/qhse",
  },
  {
    name: "Media Center",
    href:"/media-gallery",
    children: [
      { name: "Media Gallery", href: "/media-gallery" },
      { name: "Blogs", href: "/blog" },
    ],
  },
];
