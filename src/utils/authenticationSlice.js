import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      console.log("payload : ", action.payload);
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;
