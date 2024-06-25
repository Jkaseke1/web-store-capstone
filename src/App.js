
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import LandingPage from './components/LandingPage';
import CartPage from './components/CartPage';
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import ProductDetailsPage from './components/ProductDetailsPage';
import CheckoutPage from './components/CheckoutPage';
import OrderConfirmationPage from './components/OrderConfirmationPage';
import Footer from './components/Footer';
import UserAccountPage from './components/UserAccountPage';
import StorePage from './components/StorePage';
import store, { fetchProducts } from './store';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<StorePage products={products} />} />
            <Route path="/store" element={<StorePage products={products} />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
            <Route path="/login" element={<LoginForm setUsername={setUsername} />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/account" element={<UserAccountPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
