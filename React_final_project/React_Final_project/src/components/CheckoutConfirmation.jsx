import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../store/cartSlice';

const CheckoutConfirmation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const products = useSelector(state => state.products.items);

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/');
    }
  }, [cartItems, navigate]);

  const totalPrice = cartItems.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  const handleBackToShopping = () => {
    dispatch(clearCart());
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center mb-8">
            <span className="material-icons text-green-500 text-6xl mb-4">
              check_circle
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Thank You for Shopping!
            </h1>
            <p className="text-gray-600">
              Your order has been confirmed.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
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
                      <h3 className="text-sm font-medium text-gray-900">
                        {product.title}
                      </h3>
                      <div className="mt-1 flex items-center text-sm text-gray-500">
                        <span>${product.price.toFixed(2)} × {item.quantity}</span>
                        <span className="mx-2">•</span>
                        <span className="font-medium text-gray-900">
                          ${(product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 border-t border-gray-200 pt-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Total</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={handleBackToShopping}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span className="material-icons">shopping_bag</span>
                <span>Back to Shopping</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutConfirmation;
