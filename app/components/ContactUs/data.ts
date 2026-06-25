 
 
  export const bannersection = {
    data:[
      {
      title: "Contact Us",
      bgImg: "/assets/images/contactus/contactbanner.jpg", 
      navigation: [
        { title: "Home", slug: "/" },
        { title: "Contact Us", slug: "" }, 
      ],
    }
  ]
  };
  export const getintouch = {
    data:[
      {
      title: "Get in Touch With Us", 
     description:"Whether you need expert advice, a custom scaffolding solution, or want to discuss your next project, our team is ready to assist. Reach out today and let’s build something great together.",
     items: [
      { 
         location: "Head Office", 
         image:"/assets/images/contactus/hoffice.jpg",
         address:"Office No. 110, Al Mansour Building, Damascus Street 3  |   Al Qusais Industrial Area 2, Dubai, UAE",
         contact: 
          [
          "+971 4 263 7784",
          "+971 56 544 5987",
          "+971 50 545 2385"
          ],
          mail: 
          [
          "info@quaddream.com",
          "enquiries@quaddream.com"
          ]

         },
         { 
            location: "Yard", 
            image:"/assets/images/contactus/hoffice.jpg",
            address:"Al Quoz Industrial Area – 2, Near Bartawi Dubai, UAE",
            contact:[
          "+971 56 544 5987",
          "+971 50 545 2385"
          ],
          mail: 
          [
          "sales@quaddream.com"
          ]
         },
         { 
            location: "UAE Branch", 
            image:"/assets/images/contactus/hoffice.jpg",
            address:"Quaddream Branch office, Sharjah.",
            contact:[ "+971 503 525 314"
          ],
          mail: 
          [
          "sales@quaddream.com"
          ]
         },
         { 
            location: "Canada", 
            image:"/assets/images/contactus/hoffice.jpg",
            address:"Bradford , Ontario",
            contact:["+416 970 1617"
          ],
          mail: 
          [
          "sales@quaddream.com"
          ]
         }, 
         
          ]
    }
  ]
  };
  
  export const letstalk = {
    data:[
      {
      title: "Let’s Talk", 
     description:"We’re here to make your scaffolding needs simple and hassle-free. Just complete the form with your details, and our team will reach out to assist you with the right solution—fast, safe, and professional.",
      
    }
  ]
  };
 

  export const features = {
    items: [
    {
      id: 1,
      text: "ISO 9001 | ISO 45001 | ISO 14001 Certified.",
    },
    {
      id: 2,
      text: "14 Years in UAE Scaffolding ",
    },
    {
      id: 3,
      text: "Response Within 4 Business Hours",
    },
  ],
  };


export const faqContent = {
  heading: "FREQUENTLY ASKED QUESTIONS",
  description: "",

  items: [
    {
      question: "How quickly can Quad Dream deliver scaffolding in Dubai?",
      answer: "For scaffolding rental, delivery is typically arranged within 24 to 48 hours subject to fleet availability and project location. For scaffolding contracting scopes requiring design, permit preparation, and certified erection, mobilisation timelines are confirmed at site assessment stage and built into the project programme. Contact our Dubai team with your location and scope for an accurate lead time.",
    },
    {
      question: "Do you provide scaffolding rental for residential projects?",
      answer: "Yes. Quad Dream provides scaffolding rental and contracting services for residential projects across the UAE, including villas, low-rise apartment buildings, and high-rise residential towers. Villa and low-rise work is typically served through our rental fleet, while high-rise residential projects are handled under a full contracting scope with stamped engineering designs and certified erection.",
    },
    {
      question: "What areas do you service in Abu Dhabi and Sharjah?",
      answer: "Quad Dream operates across Abu Dhabi including Musaffah, Khalifa City, Al Reem Island, Al Maryah Island, and KIZAD. In Sharjah we cover Sharjah Industrial Area, Hamriyah Free Zone, and surrounding commercial and residential zones. Our Abu Dhabi and Sharjah branches enable faster mobilisation and on-site response for projects in both emirates.",
    },
    {
      question: "Can I get a scaffolding quote over WhatsApp?",
      answer: "Yes. Send your project details including building address, type of scaffolding required, approximate working height, and project timeline to our team on WhatsApp. Our team will review the information and respond within 4 business hours with an initial recommendation or request a site assessment to confirm the right configuration before issuing a quote. <a href='https://wa.me/971564331753?text=Hi%20there%2C%20I%20need%20help%20with%20your%20product'><span class='italic underline'>WhatsApp Our Team </span></a>",
    },
    {
      question: "What information do I need to provide to get a quote?",
      answer: "To provide an accurate quote, our team needs the project location and access address, the type of scaffolding or equipment required, the approximate working height or facade area, the planned start date and rental or contract duration, and any specific compliance requirements such as DM permit needs or ADNOC zone classification. The more detail provided upfront, the faster we can issue a fully itemised quotation without follow-up delays.",
    },
  ],
};

export interface FaqData {
  heading: string;
  description?: string;
  items: {
    question: string;
    answer: string;
  }[];
}