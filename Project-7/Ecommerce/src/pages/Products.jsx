import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3004/products")
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data); // Initially display all products
      })
      .catch((err) => console.log(err));
  }, []);

  // Function to filter and sort products
  const applyFilters = () => {
    let updatedProducts = [...products];

    if (search) {
      updatedProducts = updatedProducts.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }

    if (sortOrder === "low-to-high") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-to-low") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 ">
      {/* Search, Filter & Sort */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3">
        <input
          type="text"
          placeholder="Search products..."
          className="p-2 border rounded-md w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-2 border rounded-md w-full md:w-1/4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="Computers">Computers</option>
          <option value="Accessories">Accessories</option>
          <option value="Storage">Storage</option>
          <option value="Wearables">Wearables</option>
          <option value="Cameras">Cameras</option>
          <option value="Furniture">Furniture</option>
          <option value="Home Automatio">Home Automation</option>
          <option value="Personal Care">Personal Care</option>
          <option value="Home Appliances">Home Appliances</option>
          <option value="Gadgets">Gadgets</option>
          <option value="Gaming">Gaming</option>
        </select>
        <select
          className="p-2 border rounded-md w-full md:w-1/4"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
        <button
          className="bg-rose-400 text-white px-4 py-2 rounded-md"
          onClick={applyFilters}
        >
          Apply Filters
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-100 h-40 object-full"
              />
              <h3 className="text-lg font-bold mt-2">{product.title}</h3>
              <p className="text-gray-600">${product.price}</p>
              <Link
                to={`/product/${product.id}`}
                className="block text-center mt-3 bg-rose-400 text-white p-2 rounded-lg"
              >
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-3">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;
