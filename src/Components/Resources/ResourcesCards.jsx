import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const products = [
  {
    name: "Product 1",
    img: "https://via.placeholder.com/150",
    description: "This is a great product.",
  },
  {
    name: "Product 2",
    img: "https://via.placeholder.com/150",
    description: "This is another great product.",
  },
  // Add more products as needed
];

const ResourcesCards = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ResourcesCards;
