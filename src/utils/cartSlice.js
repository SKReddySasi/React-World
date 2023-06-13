import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cartItems: [],
    cartTotal: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      state.cartItems.push(item);

      state.cartTotal += item.price / 100;
    },

    removeFromCart: (state, action) => {
      const idToRemove = action.payload; // in action.payload we will get the id of the particular item
      const itemIndex = state.cartItems.findIndex( // in itemIndex we will get the matched Index 
        (item) => item.id === idToRemove
      );
      if (itemIndex !== -1) { // If no match is found, itemIndex will be -1. So if that is not equal to -1, the block of code inside if executed.
        const removedItem = state.cartItems[itemIndex]; 
        state.cartItems.splice(itemIndex, 1);
        state.cartTotal -= removedItem.price / 100;
      }
    },

    clearCartItems: (state) => {
      state.cartItems = [];
      state.cartTotal = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCartItems } = cartSlice.actions;

export default cartSlice.reducer;

// Below code i have written

// addToCart: (state, action) => {
//   const item = action.payload;

//   state.cartItems.push(item);

//  // from "cartItems" array, we will map and get the price from each "item" and will store in "priceArray"
// const priceArray = state.cartItems.map((item) => item.price / 100);

// // by using "reduce" method, we will be adding of all the values in the "priceArray"
// state.cartTotal = priceArray.reduce((total, curr) => total + curr, 0);
// },

// removeFromCart: (state, action) => {
//   state.cartItems = state.cartItems.filter(
//     (item) => item.id !== action.payload
//   );

//   const priceArray = state.cartItems.map((item) => item.price / 100);
//   state.cartTotal = priceArray.reduce((total, curr) => total + curr, 0);
// },
