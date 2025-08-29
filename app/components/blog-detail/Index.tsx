import React from 'react'
import BlogDetail from './sections/BlogDetail'
import BannerInner from '../common/BannerInner'
import {bannersection} from "./data";
import { blogDetail } from "./data";

const Index = () => {
  return (
    <>
    <BannerInner bannerData={bannersection.data}/>
    <BlogDetail blogDetail={blogDetail}/>
    </>
  )
}

export default Index