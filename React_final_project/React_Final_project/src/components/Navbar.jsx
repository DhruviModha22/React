import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import CartDropdown from './CartDropdown';

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="material-icons text-2xl mr-2">shopping_cart</span>
              <span className="font-bold text-xl">Product Store</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  to="/products"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 transition-colors"
                >
                  <span className="material-icons text-xl mr-1">inventory_2</span>
                  Products
                </Link>
                {user.role === 'admin' && (
                  <Link
                    to="/add-product"
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 transition-colors"
                  >
                    <span className="material-icons text-xl mr-1">add_circle</span>
                    Add Product
                  </Link>
                )}
                {user.role !== 'admin' && <CartDropdown />}
                <div className="flex items-center px-3 py-2 text-sm font-medium">
                  <span className="material-icons text-xl mr-1">person</span>
                  {user.name}
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 transition-colors"
                >
                  <span className="material-icons text-xl mr-1">logout</span>
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 transition-colors"
              >
                <span className="material-icons text-xl mr-1">login</span>
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
