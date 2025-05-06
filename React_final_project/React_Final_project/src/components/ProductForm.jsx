import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addProduct, updateProduct } from '../store/productSlice';

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const editingProduct = useSelector(state => state.products.editingProduct);

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    image: ''
  });

  useEffect(() => {
    if (id && editingProduct) {
      setFormData({
        title: editingProduct.title,
        price: editingProduct.price.toString(),
        category: editingProduct.category,
        image: editingProduct.image
      });
    }
  }, [id, editingProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.price || !formData.category || !formData.image) {
      alert('Please fill in all fields');
      return;
    }

    const product = {
      ...formData,
      price: parseFloat(formData.price),
    };

    if (editingProduct) {
      dispatch({ type: 'products/updateProduct', payload: product });
    } else {
      dispatch({ type: 'products/addProduct', payload: product });
    }

    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-3">
          <span className="material-icons text-blue-500">
            {editingProduct ? 'edit' : 'add_circle'}
          </span>
          {editingProduct ? 'Edit Product' : 'Add New Product'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
              <span className="material-icons text-sm">label</span>
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter product title"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
              <span className="material-icons text-sm">attach_money</span>
              Price
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter product price"
              step="0.01"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
              <span className="material-icons text-sm">category</span>
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
              <span className="material-icons text-sm">image</span>
              Image URL
            </label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter product image URL"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            <span className="material-icons">
              {editingProduct ? 'update' : 'add_circle'}
            </span>
            {editingProduct ? 'Update Product' : 'Add Product'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
