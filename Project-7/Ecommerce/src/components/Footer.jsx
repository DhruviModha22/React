import React from 'react'


import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-rose-500 text-white py-4 mt-2">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-6">
        {/* Left Section - Brand */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold">ShopEase</h2>
          <p className="text-gray-200 mt-2">
            Your one-stop shop for quality products.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link to="/" className="text-gray-200 hover:text-gray-50 transition">Home</Link></li>
            <li><Link to="/products" className="text-gray-200 hover:text-gray-50 transition">Products</Link></li>
            <li><Link to="/cart" className="text-gray-200 hover:text-gray-50 transition">Cart</Link></li>
            <li><Link to="/login" className="text-gray-200 hover:text-gray-50 transition">Login</Link></li>
          </ul>
        </div>

        {/* Right Section - Social Icons */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-200 hover:text-blue-300 transition text-2xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-200 hover:text-blue-400 transition text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-200 hover:text-pink-300 transition text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-100 mt-6 border-t border-gray-300 pt-4">
        <p>© {new Date().getFullYear()} ShopEase. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
