import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext({
  cartItems: [],
  addToCart: (item) => {},
  removeFromCart: (itemId) => {},
  updateQuantity: (itemId, newQuantity) => {},
});

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity > 0) {
      setCartItems(
        cartItems.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item))
      );
    }
  };

  const value = { cartItems, addToCart, removeFromCart, updateQuantity };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
