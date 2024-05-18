import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import BlogDetails from '../Components/Blog/BlogDetails'

const Blog = () => {
  return (
    <div>
      <Navbar/>
      <BlogDetails 
       id={1}
       title= "Security Threat Data"
       subtitle= "This is a Subtitle"
       text= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil numquam illum autem, ipsa molestias dicta facere, sequi eveniet earum ducimus quibusdam laboriosam quasi accusamus quo facilis quam voluptatem, non fugiat."/>
       
    </div>
  )
}

export default Blog
