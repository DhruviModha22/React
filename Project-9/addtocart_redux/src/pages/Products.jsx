import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); // State for category filter
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetching products data from your db.json
    axios.get('http://localhost:3000/products')
      .then(res => {
        setProducts(res.data.products);  // Adjusted to your structure
        setDisplayProducts(res.data.products);
      });
  }, []);

  // Sort Handler
  const handleSort = (value) => {
    setSortOption(value);
    let sorted = [...displayProducts];
    if (value === 'low') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === 'high') {
      sorted.sort((a, b) => b.price - a.price);
    }
    setDisplayProducts(sorted);
  };

  // Search Handler
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = products.filter((item) =>
      item.name.toLowerCase().includes(term)
    );
    setDisplayProducts(filtered);
  };

  // Category Filter Handler
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === '') {
      setDisplayProducts(products);
    } else {
      const filtered = products.filter(item => item.category === category);
      setDisplayProducts(filtered);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      {/* Filter, Sort, Search */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchTerm}
          onChange={handleSearch}
          className="border px-3 py-1 rounded"
        />
        <select
          value={sortOption}
          onChange={(e) => handleSort(e.target.value)}
          className="border px-3 py-1 rounded"
        >
          <option value="">Sort by</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryFilter(e.target.value)}
          className="border px-3 py-1 rounded"
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Computers">Computers</option>
          <option value="Accessories">Accessories</option>
          <option value="Wearables">Wearables</option>
          <option value="Cameras">Cameras</option>
          <option value="Furniture">Furniture</option>
          <option value="Storage">Storage</option>
          <option value="Home Automation">Home Automation</option>
          <option value="Personal Care">Personal Care</option>
          <option value="Home Appliances">Home Appliances</option>
          <option value="Gadgets">Gadgets</option>
          <option value="Gaming">Gaming</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <img src={product.image} alt={product.name} className="h-48 mx-auto" />
            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
            <p className="text-gray-600 mt-1">${product.price}</p>
            <p className="text-gray-600 mt-1">{product.description}</p>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
