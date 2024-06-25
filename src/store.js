
import { configureStore, createSlice, createSelector } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { thunk } from 'redux-thunk';

// Create products slice
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setProducts, setLoading, setError } = productsSlice.actions;

// Memoized selector to get products from the state
export const selectProducts = createSelector(
  state => state.products.items,
  items => items
);

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export const fetchProducts = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const products = await response.json();
    dispatch(setProducts(products));
  } catch (error) {
    dispatch(setError(error.message));
    console.error('Error fetching product data:', error);
  } finally {
    dispatch(setLoading(false));
  }
};

export default store;
