import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("auth");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="bg-rose-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-white text-3xl font-extrabold tracking-wide">
            ShopEase
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white ">Home</Link>
            <Link to="/products" className="text-white">Products</Link>
          </div>

          {/* Cart & Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            {isLoggedIn ? (
              <>
                <Link to="/cart" className="text-white hover:text-white-300 transition">Cart</Link>
                <button 
                  onClick={handleLogout} 
                  className="bg-red-900 px-5 py-2 rounded-lg text-white "
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="bg-rose-400 px-5 py-2 rounded-lg text-white"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="bg-rose-400 px-5 py-2 rounded-lg text-white"
                >
                  Signup
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white text-2xl">
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col bg-blue-800 py-4 space-y-4 rounded-lg shadow-md">
            <Link to="/" className="text-white text-center">Home</Link>
            <Link to="/products" className="text-white text-center">Products</Link>
            {isLoggedIn ? (
              <>
                <Link to="/cart" className="text-white text-center">Cart</Link>
                <button 
                  onClick={handleLogout} 
                  className="bg-red-100 px-5 py-2 mx-auto rounded-lg text-white hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="bg-rose-500 px-5 py-2 mx-auto rounded-lg text-white "
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="bg-rose-500 px-5 py-2 mx-auto rounded-lg text-white "
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
