import React from 'react';

const CartItem = ({ item, quantity, onRemoveItem, onQuantityChange }) => {
  // Handle potential changes in quantity
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > 0) {
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="cart-item">
      <img src={item.imageUrl || "product-image.jpg"} alt={item.name} />
      <div className="item-details">
        <span className="item-name">{item.name}</span>
        <span className="item-price">$ {item.price.toFixed(2)}</span>
        <span className="item-quantity">
          Quantity:
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={handleQuantityChange}
          />
        </span>
        <button className="item-remove-button" onClick={onRemoveItem}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
