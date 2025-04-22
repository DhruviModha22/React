import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link, useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    dispatch(addToCart(product));
  };

  return (
    <div className="border rounded-lg p-4 flex flex-col items-center shadow-md">
      <img src={product.image} alt={product.title} className="w-40 h-40 object-cover mb-2" />
      <h2 className="font-bold text-lg">{product.title}</h2>
      <p className="text-gray-600">₹{product.price}</p>
      <div className="flex gap-2 mt-3">
        <button
          onClick={handleAddToCart}
          className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
        >
          Add to Cart
        </button>
        <Link
          to={`/product/${product.id}`}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
