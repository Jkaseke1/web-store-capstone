
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CartPage.css';
import CartItem from './CartItem';
import { addToCart, removeFromCart, updateQuantity } from '../cartSlice';

function CartPage() {
  const dispatch = useDispatch();
  const { cartItems, totalCost, error } = useSelector((state) => state.cart);
  const [showHelp, setShowHelp] = useState(false);
  const [shippingMethod, setShippingMethod] = useState('free');

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateQuantity({ itemId, newQuantity }));
  };

  const toggleHelp = () => {
    setShowHelp((prevShowHelp) => !prevShowHelp);
  };

  const handleShippingChange = (event) => {
    setShippingMethod(event.target.value);
  };

  return (
    <div className="cart-page">
      <header className="cart-page__header">
        <h1>Cart</h1>
      </header>
      {cartItems && cartItems.length > 0 ? (
        <section className="cart-page__items">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              quantity={item.quantity}
              onRemoveItem={() => handleRemoveItem(item.id)}
              onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
            />
          ))}
        </section>
      ) : (
        <p className="cart-page__empty-message">Your cart is empty.</p>
      )}

      {error && <p className="cart-page__error">Error: {error.message}</p>}

      <footer className="cart-page__footer">
        <div className="cart-page__summary">
          <p>Total: ${totalCost.toFixed(2)}</p>
          <div className="cart-page__shipping">
            <label>
              <input
                type="radio"
                value="free"
                checked={shippingMethod === 'free'}
                onChange={handleShippingChange}
              />
              Free shipping (5-7 business days)
            </label>
            <label>
              <input
                type="radio"
                value="express"
                checked={shippingMethod === 'express'}
                onChange={handleShippingChange}
              />
              Express shipping ($10, 2-3 business days)
            </label>
          </div>
          <p>
            Shipping details:
            <button onClick={toggleHelp}>Need help?</button>
          </p>
          {showHelp && (
            <div>
              <p>We offer the following shipping options:</p>
              <ul>
                <li>Free shipping: Delivered in 5-7 business days.</li>
                <li>Express shipping: Delivered in 2-3 business days for an additional $10.</li>
              </ul>
              <p>If you have any questions, please contact us for further assistance.</p>
            </div>
          )}
        </div>
        <button className="cart-page__checkout-button" disabled={cartItems && cartItems.length === 0}>
          Checkout
        </button>
      </footer>
    </div>
  );
}

export default CartPage;
