import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import BlogDetails from '../Components/Blog/BlogDetails'
import BlogData from '../Components/Blog/BlogData'

const Blog = () => {
  const Blogs = BlogData.map((blog)=>{
    return <BlogDetails setup={blog.title} subtitle={blog.subtitle} text={blog.text}/>
  })
  return (
    <div>
      <Navbar/>
      {Blogs}
       
    </div>
  )
}

export default Blog
