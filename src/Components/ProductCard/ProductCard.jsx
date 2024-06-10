// src/components/ProductCard.jsx

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <img className="w-full h-48 object-cover" src={product.img} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">
          {product.description}
        </p>
        <div className="flex items-center mt-4">
          {Array(5).fill(0).map((_, i) => {
            const ratingValue = i + 1;
            return (
              <label key={i}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                  className="hidden"
                />
                <FaStar
                  className="star"
                  color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                  size={20}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(0)}
                />
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
