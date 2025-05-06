import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setEditingProduct } from '../store/productSlice';
import { addToCart, updateQuantity } from '../store/cartSlice';
import PropTypes from 'prop-types';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);
  const cartItem = useSelector(state => 
    state.cart.items.find(item => item.id === product.id)
  );

  const handleEdit = () => {
    dispatch(setEditingProduct(product));
    navigate(`/edit-product/${product.id}`);
  };

  const handleDelete = () => {
    // Will implement delete functionality later
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleUpdateQuantity = (newQuantity) => {
    dispatch(updateQuantity({ id: product.id, quantity: newQuantity }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="mb-3">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">{product.title}</h3>
          <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            {product.category}
          </span>
        </div>
        
        <div className="flex flex-col space-y-3">
          {user && user.role !== 'admin' && (
            <div className="flex items-center justify-between">
              {cartItem ? (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleUpdateQuantity(cartItem.quantity - 1)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <span className="material-icons text-gray-600">remove</span>
                  </button>
                  <span className="text-gray-700 font-medium w-8 text-center">
                    {cartItem.quantity}
                  </span>
                  <button
                    onClick={() => handleUpdateQuantity(cartItem.quantity + 1)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <span className="material-icons text-gray-600">add</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span className="material-icons">shopping_cart</span>
                  <span>Add to Cart</span>
                </button>
              )}
            </div>
          )}
          
          {user?.role === 'admin' && (
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleEdit}
                className="flex items-center px-3 py-1 rounded bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
              >
                <span className="material-icons text-sm mr-1">edit</span>
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="flex items-center px-3 py-1 rounded bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
              >
                <span className="material-icons text-sm mr-1">delete</span>
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default ProductItem;
