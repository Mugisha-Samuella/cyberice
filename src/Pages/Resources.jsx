import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import ResourcesCards from "../Components/Resources/ResourcesCards";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import ResourcesData from "../Components/Resources/ResourcesData";
import Sidebar from "../Components/Resources/Sidebar";
const Resources = () => {
  const books = ResourcesData.map((book) => {
    return (
      <ResourcesCards
        name={book.name}
        img={book.img}
        author={book.author}
        description={book.description}
        star={<FaStar />}
        halfStar={<FaStarHalfAlt />}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Sidebar/>
      <div>
        <div className="w-screen justify-center items-center flex flex-col md:flex-row">
      {books}
      </div>
      </div>
      
    </div>
  );
};

export default Resources;
