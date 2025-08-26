"use client"

import ClientSideLink from '@/app/(admin)/admin/client-side-link';
import React, { useState } from 'react'
import {
    HomeIcon,
    NewspaperIcon,
    UserGroupIcon,
    EnvelopeIcon,
    BriefcaseIcon,
  } from "@heroicons/react/24/outline";
import { AwardIcon, GalleryThumbnails, HeartHandshake, LeafIcon, Settings, ThumbsUp, Workflow } from 'lucide-react';
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
        // { name: "Clients", href: "/admin/clients", icon: PresentationChartBarIcon },
        { name: "Services", href: "#", icon: EnvelopeIcon,hasChild:true,children: [
          { name: "Main Page", href: "/admin/services" },
            ...serviceData.map((service: { _id: string,thumbnailTitle:string }) => (
              { name: service.thumbnailTitle.split(" ").slice(0,2).join(" ") + "...", href: `/admin/services/${service._id}` }
            )),
          ] },
        // { name: "Industries", href: "/admin/industries", icon: BriefcaseIcon },
        // { name: "Global Presence", href: "##", icon: GlobeAltIcon , hasChild:true,children: [
        //   { name: "Main Page", href: "/admin/global-presence" },
        //   ...countries.map((country: { _id: string,title:string }) => (
        //     { name: country.title, href: `/admin/global-presence/${country._id}` }
        //   )),
        // ] },
        { name: "Projects", href: "/admin/projects", icon: Workflow },
        { name: "News", href: "/admin/news", icon: NewspaperIcon },
        { name: "Gallery", href: "/admin/gallery", icon: GalleryThumbnails },
        { name: "Awards", href: "/admin/awards", icon:AwardIcon },
        { name: "Team", href: "/admin/team", icon:UserGroupIcon },
        { name: "Careers", href: "####", icon:BriefcaseIcon,hasChild:true,children: [
          { name: "Main Page", href: "/admin/careers" },
          {name:"Enquiries",href:"/admin/careers/enquiries"}
        ] },
        { name: "Contact", href: "###", icon: EnvelopeIcon,hasChild:true,children: [
          { name: "Main Page", href: "/admin/contact" },
          {name:"Enquiries",href:"/admin/contact/enquiries"}
        ] },
        { name: "Quality", href: "/admin/quality", icon: ThumbsUp },
        { name: "HSE", href: "/admin/hse", icon: HeartHandshake },
        { name: "Sustainability", href: "/admin/sustainability", icon: LeafIcon },
        { name: "Settings", href: "/admin/settings", icon: Settings},
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