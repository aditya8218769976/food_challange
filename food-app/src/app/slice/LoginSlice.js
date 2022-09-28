import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
  },

  reducers: {
    userIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },

    userIsNotLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { userIsLoggedIn, userIsNotLoggedIn } = LoginSlice.actions;

export default LoginSlice.reducer;
