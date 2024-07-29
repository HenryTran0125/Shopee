/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const addProductToCart = createSlice({
  name: "addProductToCart",
  initialState: {
    currentQuantityOfUnit: 0,
    productsInCart: [],
  },
  reducers: {
    // addProduct: (state) => {
    //   state.currentQuantityOfUnit += 1;
    // },

    updateProductDetails: (state, action) => {
      const index = state.productsInCart.findIndex(
        (index) =>
          index.nameProductInCart == action.payload.nameProductInCart &&
          index.storageProductInCart == action.payload.storageProductInCart
      );

      if (index !== -1) {
        state.productsInCart[index].quantityOfSelectedProduct +=
          action.payload.quantityOfSelectedProduct;
      } else {
        state.productsInCart.push({
          nameProductInCart: action.payload.nameProductInCart,
          storageProductInCart: action.payload.storageProductInCart,
          quantityOfSelectedProduct: action.payload.quantityOfSelectedProduct,
          imageOfSelectedProduct: action.payload.imageOfSelectedProduct,
          salePriceOfSelectedProduct: action.payload.salePriceOfSelectedProduct,
        });
      }
    },
  },
});

export const { addProduct, updateProductDetails } = addProductToCart.actions;
export default addProductToCart.reducer;
