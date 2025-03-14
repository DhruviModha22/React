import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-8 flex items-center justify-between z-50 font-bold">
      <h1 className="text-2xl font-bold">CryptoM5</h1>
      <ul className="flex space-x-8">
        <li><a href="#home" className="text-gray-800 hover:text-purple-700">Home</a></li>
        <li><a href="#about" className="text-gray-800 hover:text-purple-700">About</a></li>
        <li><a href="#features" className="text-gray-800 hover:text-purple-700">Features</a></li>
        <li><a href="#contacts" className="text-gray-800 hover:text-purple-700">Contacts</a></li>
      </ul>
      <a href="#get-started" className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700">
        Get Started
      </a>
    </nav>
    </>
  );
};

export default Navbar;
