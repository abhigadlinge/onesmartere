import React from 'react'
import { BlogCard } from './BlogCard'
import "./Blogs.css"

export const Blogs = () => {
  return (
    <div className='blogs'>
        <div className='blogheading'> 
            <h1> top blogs</h1>
        </div>
        <div className='blogcontent'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
         
        </div>
    </div>
  )
}
