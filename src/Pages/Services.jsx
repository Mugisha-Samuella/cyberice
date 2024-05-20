import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ServicesData from '../Components/ServicesCards/ServicesData'
import ServicesCards from '../Components/ServicesCards/ServicesCards'

const Services = () => {
  const services = ServicesData.map((service)=>{
    return <ServicesCards setup={service.title} servicedescription={service.subtitle} text={service.text}/>;
  })
  return (
    <div>
      <Navbar/>
       <div className='w-screen min-h-[80vh] ustify-center items-center flex flex-col'>
        <h1 className='text-center text-2xl font-Inter pt-6'>Our Services</h1>
       <div className="justify-center items-center gap-5 p-6 flex flex-col md:flex-row">
       {services}
       </div>
       </div>
    </div>
  )
}

export default Services
