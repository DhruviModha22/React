import React from 'react'

import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div>
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-green-500 text-white text-center py-24">
      {/* Background Overlay (Optional for better readability) */}
      <div className="absolute inset-0 bg-rose-400 bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold">
          Welcome to <span className="from-purple-600">ShopEase</span>
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Discover the best deals on high-quality products. Shop smart, shop easy!
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="/products"
            className="border border-white hover:bg-white hover:text-blue-600 font-semibold px-6 py-3 rounded-lg transition"
          >
            Shop Now
          </a>
          <a
            href="/"
            className="border border-white hover:bg-white hover:text-blue-600 font-semibold px-6 py-3 rounded-lg transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  
        {/* Featured Products */}
        <section className="max-w-6xl mx-auto py-10 px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Product" className="w-full" />
              <h3 className="text-xl font-bold mt-2">Product 1</h3>
              <p className="text-gray-600">$19.99</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="Product" className="w-full" />
              <h3 className="text-xl font-bold mt-2">Product 2</h3>
              <p className="text-gray-600">$29.99</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="Product" className="w-full" />
              <h3 className="text-xl font-bold mt-2">Product 3</h3>
              <p className="text-gray-600">$39.99</p>
            </div>
          </div>
        </section>
  
        {/* About Us */}
        <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h2>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div>
            <img 
              src="https://img.freepik.com/free-vector/online-shopping-concept-landing-page_52683-20156.jpg?t=st=1743360921~exp=1743364521~hmac=ae04b1a9539ec32d5b6b71efe3830ceb5b0169e2835201ed5928edc9af095bde&w=826"
              alt="About Us"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          {/* Right Side - Text Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700">Who We Are</h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Welcome to **ShopEase**, your one-stop destination for all your shopping needs. 
              We provide high-quality products, a seamless shopping experience, and excellent 
              customer service to ensure you get the best deals every time.
            </p>

            <h3 className="text-2xl font-semibold text-gray-700 mt-5">Our Mission</h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Our mission is to make online shopping easy, accessible, and enjoyable. 
              We strive to offer **top-notch products** at competitive prices while ensuring 
              fast delivery and hassle-free returns.
            </p>

            <h3 className="text-2xl font-semibold text-gray-700 mt-5">Why Choose Us?</h3>
            <ul className="text-gray-600 mt-3 list-disc pl-5 space-y-2">
              <li>🛍️ Wide range of high-quality products</li>
              <li>🚀 Fast & reliable shipping</li>
              <li>💳 Secure payment options</li>
              <li>📞 24/7 customer support</li>
              <li>🔄 Easy returns & refunds</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
      </div>
    );
  };
  
  export default Home;
  