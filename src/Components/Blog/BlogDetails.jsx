import React from 'react'
import Blog from '../../Pages/Blog'
const BlogDetails = (props) => {
  return (
    <div className='flex flex-col gap-2 p-4'>
      <h1 className=''>{props.title}</h1>
      <h3>{props.subtitle}</h3>
      <p>{props.text}</p>
      <hr />
    </div>
  )
}

export default BlogDetails


// id:1,
// title: "This is a title",
// subtitle: "This is a Subtitle",
// text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil numquam illum autem, ipsa molestias dicta facere, sequi eveniet earum ducimus quibusdam laboriosam quasi accusamus quo facilis quam voluptatem, non fugiat."