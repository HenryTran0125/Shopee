/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const editQuantityInCart = createSlice({
  name: "numberOfProducts",
  initialState: {
    value: 0,
    quantityOfUnit: 0,
  },
  reducers: {
    addToCart: (state) => {
      state.value += 1;
    },
    increaseQuantityInCart: (state) => {
      state.quantityOfUnit += 1;
    },
    decreaseQuantityInCart: (state) => {
      if (state.quantityOfUnit > 0) state.quantityOfUnit -= 1;
    },
  },
});

export const { addToCart, increaseQuantityInCart, decreaseQuantityInCart } =
  editQuantityInCart.actions;
export default editQuantityInCart.reducer;
