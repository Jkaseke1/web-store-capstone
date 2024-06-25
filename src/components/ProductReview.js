import React from 'react';
import './ProductReview.css';

function ProductReview({ review }) {
  return (
    <div className="product-review">
      <h3 className="review-title">{review.title}</h3>
      <p className="review-rating">Rating: {review.rating}/5</p>
      <p className="review-content">{review.content}</p>
      <p className="review-author">By: {review.author}</p>
    </div>
  );
}

export default ProductReview;