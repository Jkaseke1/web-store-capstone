
import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, selectProducts } from '../store';
import { addToCart } from '../cartSlice';
import Product from './Product';
import ProductFilter from './ProductFilter';
import Pagination from './Pagination';
import LoadingIndicator from './LoadingIndicator';
import ErrorMessage from './ErrorMessage';
import './StorePage.css';
import { createSelector } from 'reselect';

// Input selector: Extracts the products from the state
const selectProductsFromState = state => state.products.items;

// Result function: Applies transformation logic on the extracted products
const selectTransformedProducts = createSelector(
  [selectProductsFromState],
  (products) => {
    // Example transformation: Ensure transformation logic is applied here
    return products.map(product => ({
      ...product,
      transformed: true // Example transformation
    }));
  }
);

function StorePage() {
  const dispatch = useDispatch();

  const productsFromState = useSelector(selectTransformedProducts);
  const products = useMemo(() => productsFromState, [productsFromState]);

  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({ category: null, priceRange: null });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const uniqueCategories = Array.from(new Set(products.map(product => product.category)));
    setCategories(uniqueCategories);
  }, [products]);

  useEffect(() => {
    const filtered = filterProducts(products, filters);
    setFilteredProducts(filtered);
  }, [products, filters]);
  
  const filterProducts = (products, filters) => {
    let filtered = products;
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }
    if (filters.priceRange) {
      const [minPrice, maxPrice] = filters.priceRange;
      filtered = filtered.filter(product => product.price >= minPrice && product.price <= maxPrice);
    }
    return filtered;
  };

  const memoizedFilteredProducts = useMemo(() => {
    return filterProducts(products, filters);
  }, [products, filters]);
  
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedProducts = memoizedFilteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="store-page">
      <h2>Our Products</h2>
      <ProductFilter
        categories={categories}
        onFilterChange={handleFilterChange}
      />
      {loading ? (
        <LoadingIndicator />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <div>
          {products.length === 0 ? (
            <p>No products found.</p>
          ) : (
            <div className="product-list">
              {paginatedProducts.map(product => (
                <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
              ))}
            </div>
          )}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(memoizedFilteredProducts.length / productsPerPage)}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}

export default StorePage;
