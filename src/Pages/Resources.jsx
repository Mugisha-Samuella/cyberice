import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import ResourcesCards from "../Components/Resources/ResourcesCards";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import ResourcesData from "../Components/Resources/ResourcesData";
import Sidebar from "../Components/Resources/Sidebar";

const Resources = () => {
  const books = ResourcesData.map((book, index) => (
    <ResourcesCards
      key={index}
      name={book.name}
      img={book.img}
      author={book.author}
      description={book.description}
      star={<FaStar />}
      halfStar={<FaStarHalfAlt />}
    />
  ));

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex flex-col items-center w-full">
          <h1 className="text-2xl font-bold my-4">Latest Releases</h1>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {books}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
