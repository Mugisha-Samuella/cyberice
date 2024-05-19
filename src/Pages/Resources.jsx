import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ResourcesCards from '../Components/Resources/ResourcesCards'
import { FaStar } from "react-icons/fa";
import Book1 from '../../public/Assets/Images/managingrisks.jpg'
import { FaStarHalfAlt } from "react-icons/fa";

const Resources = () => {
  return (
    <div>
      <Navbar/>
      <ResourcesCards      
        id={1}
        img={Book1}
        name="CyberSecurity Threats 101"
        description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
        star={<FaStar />}
        halfStar={ <FaStarHalfAlt />}
      />
    </div>
  )
}

export default Resources
