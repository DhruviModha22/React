import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, totalAmount, totalGST, finalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Price: ₹{item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-gray-600">Base Total: ₹{item.basePrice.toFixed(2)}</p>
                  <p className="text-gray-600">GST (18%): ₹{item.gst.toFixed(2)}</p>
                  <p className="text-gray-600 font-semibold">Final Total: ₹{item.totalPrice.toFixed(2)}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6 text-right space-y-2">
            <p className="text-lg">Base Amount: ₹{totalAmount.toFixed(2)}</p>
            <p className="text-lg">GST (18%): ₹{totalGST.toFixed(2)}</p>
            <p className="text-xl font-bold">Final Amount: ₹{finalAmount.toFixed(2)}</p>
            <Link
              to="/checkout"
              className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600 mt-4 inline-block"
            >
              Go to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
