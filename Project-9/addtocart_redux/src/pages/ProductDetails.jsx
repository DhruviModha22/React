import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    try {
      const res = await api.get(`/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.error('Error fetching product:', err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (!product) return <p className="text-center mt-10 text-xl">Loading Product...</p>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={product.image}
          alt={product.title}
          className="w-72 h-72 object-cover rounded shadow"
        />
        <div>
          <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
          <p className="text-gray-600 mb-4 text-lg">₹{product.price}</p>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ratione quam
            laboriosam sapiente fuga minima.
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
