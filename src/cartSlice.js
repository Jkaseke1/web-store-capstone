
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array of objects representing cart items 
  totalCost: 0, // Total cost of all items in the cart
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalCost = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
    removeFromCart(state, action) {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1) {
        const removedItem = state.items[itemIndex];
        state.items.splice(itemIndex, 1);
        state.totalCost -= removedItem.price * removedItem.quantity;
      }
    },
    updateQuantity(state, action) {
      const { itemId, newQuantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity = newQuantity;
        state.totalCost = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
