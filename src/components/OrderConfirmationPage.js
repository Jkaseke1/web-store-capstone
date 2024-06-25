import React from 'react';
import './OrderConfirmationPage.css';

function OrderConfirmationPage() {
  return (
    <div className="order-confirmation-page">
      <h2>Order Confirmation</h2>
      <p>Thank you for your order!</p>
      <p>An email with your order details has been sent to your registered email address.</p>
      <p>Order ID: 1234567890</p>
      <p>Estimated Delivery Date: June 25, 2024</p>
    </div>
  );
}

export default OrderConfirmationPage;