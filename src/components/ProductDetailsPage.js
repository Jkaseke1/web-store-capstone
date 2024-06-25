import React, { useEffect, useState } from 'react';
import './ProductDetailsPage.css';

function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories') 
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch product details');
        }
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="product-details">
      <h2>Product Details</h2>
      <div className="product-image">
        <img src={product.image} alt="Product" />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetailsPage;