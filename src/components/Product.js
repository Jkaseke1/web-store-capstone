
import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

function Product({ product, onAddToCart }) {
  if (typeof onAddToCart !== 'function') {
    console.error('onAddToCart is not a function');
    return null;
  }

  const { image, title, price, description, id } = product;

  return (
    <div className="product">
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className="product__image" />
      </Link>
      <div className="product__info">
        <h3 className="product__title">{title}</h3>
        <p className="product__price">${price}</p>
        <p className="product__description">{description}</p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
