"use client"
import { useAllBlogQuery } from '@/redux/blog/blogApi'
import Image from 'next/image';
import React from 'react'
import Header from './Header';
import {  useSelector } from "react-redux";

const Blogs = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const { data, isLoading } = useAllBlogQuery('');
    if (isLoading) {
        return (<div className="flex justify-center items-center h-screen">Loading...</div>)
    }
    return (
        <div className={`my-20 container mx-auto px-4 ${
            darkMode ? "bg-black text-white" : "bg-slate-300 text-black"
          } `} id="blogs">
            <Header title="Blogs" />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    data?.data?.map((blog) =>
                        <div key={blog._id} className=" rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 border-2 border-purple-500">
                            <div className="relative h-48">
                                <Image 
                                    src={blog.image} 
                                    layout="fill" 
                                    objectFit="cover" 
                                    alt={blog.name} 
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2 text-gray-800">{blog.name}</h2>
                                <p className="text-gray-600 text-sm ">{blog.overview}</p>
                                <a 
                                    href={blog.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="mt-4 inline-block bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors duration-300"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Blogs