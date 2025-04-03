import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Calculate grand total
  const grandTotal = cart.reduce((acc, item) => acc + parseFloat(item.totalPrice), 0).toFixed(2);

  const handleRemoveItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          {cart.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between items-center border-b pb-4 mb-4">
              {/* Product Image */}
              <img src={item.image} alt={item.name} className="w-24 h-30 object-cover rounded-md" />

              {/* Product Details */}
              <div className="flex-1 ml-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">Price: <span className="font-bold">${item.price}</span></p>
                <p className="text-gray-500">GST (18%): <span className="font-bold">${item.gstAmount}</span></p>
                <p className="text-blue-600 font-bold">Total: ${item.totalPrice}</p>
              </div>

              {/* Remove Button */}
              <button 
                onClick={() => handleRemoveItem(index)} 
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 mt-3 md:mt-0"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Grand Total Section */}
          <div className="text-right mt-6">
            <h3 className="text-2xl font-bold">Grand Total: ${grandTotal}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
