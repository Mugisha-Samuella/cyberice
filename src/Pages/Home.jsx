import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Clients from '../Components/Clients/page'
import Services from '../Components/Services/page'

const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Clients/>
      <Services/>
    </div>
  )
}

export default Home
