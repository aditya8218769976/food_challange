import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../slice/CartSlice";

import loginSlice from "../slice/LoginSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    cart: CartSlice,
  },
});
