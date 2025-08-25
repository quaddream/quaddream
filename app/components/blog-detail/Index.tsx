import React from 'react'
import BlogDetail from './sections/BlogDetail'
import BannerInner from '../common/BannerInner'
import {bannersection} from "./data";

const Index = () => {
  return (
    <>
    <BannerInner bannerData={bannersection.data}/>
    <BlogDetail />
    </>
  )
}

export default Index