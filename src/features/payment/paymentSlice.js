import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subtotal: 0,
  discount: 0,
  deliveryFee:0, // Fixed delivery fee
  total: 0,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    calculateTotal: (state, action) => {
      const { subtotal, discount } = action.payload;
      state.subtotal = subtotal;
      state.discount = discount;
      state.total = subtotal + state.deliveryFee - discount;
    },
    applyDiscount: (state, action) => {
      state.discount = action.payload;
      state.total = state.subtotal + state.deliveryFee - state.discount;
    },
  },
});

export const { calculateTotal, applyDiscount } = paymentSlice.actions;
export default paymentSlice.reducer;
