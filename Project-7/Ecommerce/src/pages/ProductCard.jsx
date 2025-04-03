import React from 'react'

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h3 className="text-lg font-bold">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>
      <Link to={`/product/${product.id}`} className="bg-blue-500 text-white px-4 py-2 inline-block mt-2">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
