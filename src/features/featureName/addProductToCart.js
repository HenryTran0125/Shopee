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
          nameOfProductInCart: action.payload.nameOfProductInCart,
          storageOfProductInCart: action.payload.storageOfProductInCart,
          quantityOfProductInCart: action.payload.quantityOfProductInCart,
          imageOfProductInCart: action.payload.imageOfProductInCart,
          originPriceOfProductInCart: action.payload.originPriceOfProductInCart,
          salePriceOfProductInCart: action.payload.salePriceOfProductInCart,
        });
      }
    },
  },
});

export const { addProduct, updateProductDetails } = addProductToCart.actions;
export default addProductToCart.reducer;
