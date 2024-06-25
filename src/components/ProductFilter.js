
import React from 'react';
import './ProductFilter.css'; // Import CSS for styling

function ProductFilter({ categories, onFilterChange }) {
  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    onFilterChange({ category: newCategory });
  };

  return (
    <div className="product-filter">
      <select onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ProductFilter;
