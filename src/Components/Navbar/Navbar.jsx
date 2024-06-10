import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-screen flex flex-col md:flex-row md:justify-between shadow-md p-4'>
      <div>
        <h1 className='text-2xl'>CyberIce</h1>
      </div>
      <div className='hidden md:flex md:flex-row gap-6'>
        <ul className='flex md:flex-row md:gap-5'>
          <li>
            <Link to='/' className='hover:text-blue-500'>Home</Link>
          </li>
          <li>
            <Link to='/services' className='hover:text-blue-500'>Services</Link>
          </li>
          <li>
            <Link to='/resources' className='hover:text-blue-500'>Resources</Link>
          </li>
          <li className='relative'>
            <Link to='/blog' className='hover:text-blue-500'>
              <span className='animate-ping absolute h-2 w-2 rounded-full bg-blue-500 top-0 right-0'></span>
              Blog
            </Link>
          </li>
          <li>
            <a href="" className='bg-blue-900 p-2 px-3 rounded-3xl text-white hover:bg-blue-600'>Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
