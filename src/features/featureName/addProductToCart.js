/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const addProductToCart = createSlice({
  name: "addProductToCart",
  initialState: {
    currentQuantityOfUnit: 0,
    productsInCart: [],
  },
  reducers: {
    addProduct: (state) => {
      state.currentQuantityOfUnit += 1;
    },

    updateProductDetails: (state, action) => {
      state.productsInCart.push({
        nameProductInCart: action.payload.nameProductInCart,
        storageProductInCart: action.payload.storageProductInCart,
      });
    },
  },
});

export const { addProduct, updateProductDetails } = addProductToCart.actions;
export default addProductToCart.reducer;
