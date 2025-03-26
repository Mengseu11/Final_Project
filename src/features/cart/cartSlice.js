import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, imageUrl, size } = action.payload;
      const existingItem = state.items.find((item) => item.title === title);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id, title, price, imageUrl, size, quantity: 1 });
      }
    },
    updateCartQuantity: (state, action) => {
      const { id, quantityChange,title } = action.payload;
      const item = state.items.find((item) => item.title === title);
      if (item) {
        item.quantity = Math.max(1, item.quantity + quantityChange); 
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, updateCartQuantity,removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;


 

