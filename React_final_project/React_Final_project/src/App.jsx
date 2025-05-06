import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import Login from './components/Login';
import CheckoutConfirmation from './components/CheckoutConfirmation';

const PrivateRoute = ({ element: Element, adminOnly = false }) => {
  const user = useSelector((state) => state.auth.user);
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && user.role !== 'admin') {
    return <Navigate to="/products" replace />;
  }

  return Element;
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className="py-8">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Navigate to="/products" replace />} />
              <Route 
                path="/products" 
                element={<PrivateRoute element={<ProductList />} />} 
              />
              <Route 
                path="/add-product" 
                element={<PrivateRoute element={<ProductForm />} adminOnly={true} />} 
              />
              <Route 
                path="/edit-product/:id" 
                element={<PrivateRoute element={<ProductForm />} adminOnly={true} />} 
              />
              <Route 
                path="/checkout-confirmation" 
                element={<PrivateRoute element={<CheckoutConfirmation />} />} 
              />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;