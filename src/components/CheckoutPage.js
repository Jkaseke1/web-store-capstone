import React from 'react';
import './CheckoutPage.css';

function CheckoutPage() {
  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="checkout-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" />
        </div>
        <div className="form-group">
          <label htmlFor="zip">ZIP Code:</label>
          <input type="text" id="zip" />
        </div>
        <button className="checkout-button">Place Order</button>
      </div>
    </div>
  );
}

export default CheckoutPage;