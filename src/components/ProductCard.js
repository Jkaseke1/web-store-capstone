import React from 'react';
import './ProductCard.css';

function ProductCard({ title, description, price }) {
  return (
    <div className="product-card">
      <h2 className="product-card__title">{title}</h2>
      <p className="product-card__description">{description}</p>
      <p className="product-card__price">${price}</p>
    </div>
  );
}

export default ProductCard;