import React from 'react'
import Index from '@/app/components/faq/Index'

export default async function Faq() {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/faq`, { next: { revalidate: 60 } });
  const data = await response.json();

  return (
    <>
    <Index data={data.data}/>
    </>
  )
}
