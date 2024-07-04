/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const featureSlice = createSlice({
  name: "numberOfProducts",
  initialState: {
    value: 0,
  },
  reducers: {
    addToCart: (state) => {
      state.value += 1;
    },
  },
});

export const { addToCart } = featureSlice.actions;
export default featureSlice.reducer;
