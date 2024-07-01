"use client"
import { useAllBlogQuery } from '@/redux/blog/blogApi'
import Image from 'next/image';
import React from 'react'

const Blogs = () => {
      const {data,isLoading}=useAllBlogQuery('');
      if(isLoading){
            return (<div>Data Loading...</div>)
      }
  return (
    <div className="my-20">
      { 
            data?.data?.map((blog)=>
            <div key={blog._id}>
                  <h1>{blog.name}</h1>
                  <h1>{blog.overview}</h1>
                  
            </div>
            )
      }
    </div>
  )
}

export default Blogs