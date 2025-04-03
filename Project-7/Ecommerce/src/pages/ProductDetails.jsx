import React from 'react'

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3004/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleAddToCart = () => {
    if (!localStorage.getItem("auth")) {
      navigate("/login");
    } else {
      let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  
      // Calculate price with 18% GST
      const gstAmount = product.price * 0.18;
      const totalPrice = product.price + gstAmount;
  
      // Add product with updated price to cart
      cart.push({
        ...product,
        gstAmount: gstAmount.toFixed(2), // Store GST separately
        totalPrice: totalPrice.toFixed(2), // Store final price with GST
      });
  
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`Product added to cart! Total: $${totalPrice.toFixed(2)} (including 18% GST)`);
    }
  };
  

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-64 object-cover rounded-md" />
        <div className="md:ml-6 mt-4 md:mt-0">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-gray-500 mt-2">{product.description}</p>
          <p className="text-xl font-semibold mt-4">${product.price}</p>
          <button onClick={handleAddToCart} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
