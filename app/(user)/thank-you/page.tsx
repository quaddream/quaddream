import React from 'react'
import Index from '../../components/ThankYou/index'
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Thank You | Quad Dream",
    description: "Thank you for reaching out to Quad Dream. Our team will get back to you shortly.",
    robots: "noindex, follow",
    alternates: {
      canonical: "/thank-you",
    },
    openGraph: {
      title: "Thank You | Quad Dream",
      description: "Thank you for reaching out to Quad Dream. Our team will get back to you shortly.",
      url: "/thank-you",
      siteName: "Quad Dream",
    },
  };
}

export default function ThankYouPage() {
  return (
    <>
      <Index />
    </>
  )
}