/* eslint-disable no-unused-vars */
import { combineReducers } from "@reduxjs/toolkit";
import editQuantityInCart from "../features/featureName/editQuantityInCart";
import addProductToCart from "../features/featureName/addProductToCart";

const rootReducer = combineReducers({
  numberOfProductsInCart: editQuantityInCart,
  productInCart: addProductToCart,
});

export default rootReducer;
