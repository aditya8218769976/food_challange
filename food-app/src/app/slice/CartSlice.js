import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: null,
    // totalAddOn: 0,
    orderedItems: [],
  },

  reducers: {
    addItems(state, actions) {
      const newItem = actions.payload;

      const existingItem = state.cartItems.find(
        (item) => item.name === newItem.name
      );

      state.totalQuantity++;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.name,
          name: newItem.name,
          quantity: 1,
          totalPrice: newItem.price,
          price: newItem.price,
        });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = +existingItem.totalPrice + +newItem.price;
      }
    },
    removeItems(state, action) {
      console.log("removeItems working");

      const id = action.payload;
      const existingItem = state.cartItems?.find((item) => item.name === id);
      state.totalQuantity = state?.totalQuantity - 1;
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.name !== id);
      } else {
        existingItem.quantity = existingItem.quantity - 1;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    checkout(state) {
      // state.orderedItems.push(actions.payload);
      console.log(checkout, "checkout");
      state.cartItems = [];
    },
  },
});

export const { addItems, removeItems, checkout } = CartSlice.actions;

export default CartSlice.reducer;
