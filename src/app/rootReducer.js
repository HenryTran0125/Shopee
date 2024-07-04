/* eslint-disable no-unused-vars */
import { combineReducers } from "@reduxjs/toolkit";
import featureReducer from "../features/featureName/featureSlice";

const rootReducer = combineReducers({
  numberOfProducts: featureReducer,
});

export default rootReducer;
