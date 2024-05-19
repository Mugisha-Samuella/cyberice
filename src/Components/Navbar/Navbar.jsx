import React from 'react'

const Navbar = () => {
  return (
    <div className='w-screen flex flex-col md:flex-row md:justify-between shadow-md p-4'>
      <div>
      <h1 className='text-2xl'>CyberIce</h1>
      </div>
      <div className='hidden md:flex md:flex-row gap-6'>
      <div>
        <ul className='flex md:flex-row md:gap-5'>
          <li><a href="">Home</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Resources</a></li>
          <li className='relative'><a href="">Blog
          <span className='animate-ping absolute h-2 w-2 inline-flex rounded-full bg-blue-500 '></span>
          </a></li>
          <li><a href=""  className='bg-blue-900 p-2 px-3 rounded-3xl text-white hover:bg-blue-600'>Sign Up</a></li>
        </ul>
      </div>
      
      </div>
    </div>
  )
}

export default Navbar
