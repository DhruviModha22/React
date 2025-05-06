import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateQuantity, removeFromCart } from '../store/cartSlice';

const CartDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);
  const products = useSelector(state => state.products.items);
  const dispatch = useDispatch();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  const handleQuantityChange = (id, newQuantity) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    setIsOpen(false);
    navigate('/checkout-confirmation');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 transition-colors relative"
      >
        <span className="material-icons">shopping_cart</span>
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50">
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Shopping Cart</h3>
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4 max-h-96 overflow-auto">
                  {cartItems.map(item => {
                    const product = products.find(p => p.id === item.id);
                    if (!product) return null;
                    
                    return (
                      <div key={item.id} className="flex items-center space-x-4">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900 line-clamp-1">
                            {product.title}
                          </h4>
                          <p className="text-sm text-gray-500">
                            ${product.price.toFixed(2)}
                          </p>
                          <div className="flex items-center space-x-2 mt-1">
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <span className="material-icons text-sm">remove</span>
                            </button>
                            <span className="text-sm text-gray-600">{item.quantity}</span>
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <span className="material-icons text-sm">add</span>
                            </button>
                            <button
                              onClick={() => handleRemove(item.id)}
                              className="text-red-500 hover:text-red-700 ml-2"
                            >
                              <span className="material-icons text-sm">delete</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Total</p>
                    <p>${totalPrice.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span className="material-icons">shopping_bag</span>
                    <span>Checkout</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
