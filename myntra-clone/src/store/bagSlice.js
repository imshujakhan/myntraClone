import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: {},
  reducers: {
    addToBag: (state, action) => {
      state[action.payload] = 1;
    },
    removeToBag: (state, action) => {
      delete state[action.payload];
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      state[id] = quantity;
    },
  },
});
export const bagActions = bagSlice.actions;
export default bagSlice;
