"use client"

import ClientSideLink from '@/app/(admin)/admin/client-side-link';
import React, { useState } from 'react'
import {
    HomeIcon,
    UserGroupIcon,
    EnvelopeIcon,
    QuestionMarkCircleIcon,
  } from "@heroicons/react/24/outline";
import { GalleryThumbnails, HeartHandshake, Workflow } from 'lucide-react';
import { useEffect } from 'react';
import { useRefetchServices } from '@/app/contexts/refetchServices';



const AdminNavbar = () => {

    const [openLink, setOpenLink] = useState<string | null>(null);
    const {refetchServices} = useRefetchServices();
    
    useEffect(() => {
      fetchServiceData()
  },[refetchServices])
  
  const [serviceData, setServiceData] = useState([])


  const fetchServiceData = async () => {
    try {
        const response = await fetch(`/api/admin/services`);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            setServiceData(data.data.thirdSection.items);
        } else {
            const data = await response.json();
            alert(data.message);
        }
    } catch (error) {
        console.log("Error in fetching service data", error);
    }
}



    const navItems = [
        { name: "Home", href: "/admin/home", icon: HomeIcon },
        { name: "About", href: "/admin/about", icon: UserGroupIcon },
        { name: "Services", href: "#", icon: EnvelopeIcon,hasChild:true,children: [
          { name: "Main Page", href: "/admin/services" },
            ...serviceData.map((service: { _id: string,thumbnailTitle:string }) => (
              { name: service.thumbnailTitle.split(" ").slice(0,2).join(" ") + "...", href: `/admin/services/${service._id}` }
            )),
          ] },
        { name: "Projects", href: "/admin/projects", icon: Workflow },
        { name: "Gallery", href: "/admin/gallery", icon: GalleryThumbnails },
        { name: "Contact", href: "###", icon: EnvelopeIcon,hasChild:true,children: [
          { name: "Main Page", href: "/admin/contact" },
          {name:"Enquiries",href:"/admin/contact/enquiries"}
        ] },
        { name: "Faq", href: "/admin/faq", icon: QuestionMarkCircleIcon },
        { name: "QHSE", href: "/admin/qhse", icon: HeartHandshake },
      ];

  return (
    navItems.map((item) => {
        const Icon = item.icon;
        return (
          <ClientSideLink
            key={item.href}
            href={item.href}
            name={item.name}
            icon={<Icon className="h-5 w-5" />}
            isOpen={openLink === item.href}
            setOpenLink={setOpenLink}
            hasChild={item.hasChild}
          >
            {item.children}
          </ClientSideLink>
        );
      })
  )
}

export default AdminNavbar