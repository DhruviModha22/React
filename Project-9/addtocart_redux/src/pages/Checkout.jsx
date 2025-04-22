import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    dispatch(clearCart());
    navigate('/');
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-10 text-xl">Your cart is empty 😶</div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-500">Qty: {item.quantity}</p>
            </div>
            <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        <div className="text-right text-2xl font-bold mt-6">
          Total: ${totalPrice.toFixed(2)}
        </div>
        <button
          onClick={handlePlaceOrder}
          className="w-full mt-4 bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
