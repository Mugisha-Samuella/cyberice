import React from 'react'
import Blog from '../../Pages/Blog'

const BlogDetails = (props) => {
  return (
    <div className='flex flex-col gap-2 p-4'>
      <h1 className=''>{props.setup}</h1>
      <h3>{props.subtitle}</h3>
      <p>{props.text}</p>
      <hr />
    </div>
  )
}

export default BlogDetails
