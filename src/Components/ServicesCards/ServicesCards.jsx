import React from 'react'
import Services from '../../Pages/Services'

const ServicesCards = (props) => {
  return (
    <div className='shadow-md'>
      <h1>{props.setup}</h1>
      <h2>{props.servicedescription}</h2>
    </div>
  )
}

export default ServicesCards
