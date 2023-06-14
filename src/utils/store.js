import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import authenticationSlice from "./authenticationSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authenticationSlice,
  },
});

export default store;
