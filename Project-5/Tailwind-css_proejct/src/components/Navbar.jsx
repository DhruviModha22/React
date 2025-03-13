import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-bold">CryptoM5</span>
        <div className="w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li><a href="#" className="block py-2 px-3  rounded-sm md:bg-transparent md:p-0">Home</a></li>
            <li><a href="#" className="block py-2 px-3 rounded-sm md:border-0 md:p-0">About</a></li>
            <li><a href="#" className="block py-2 px-3 rounded-sm md:border-0 md:p-0">Features</a></li>
            <li><a href="#" className="block py-2 px-3 rounded-sm md:border-0 md:p-0">Contacts</a></li>
            <li>
              <button className="text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-full text-sm px-5 py-2.5 text-center w-30">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
