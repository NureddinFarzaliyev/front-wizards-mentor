import { createSlice } from "@reduxjs/toolkit";
import type {
  AddToCartAction,
  CartSliceState,
  RemoveFromCartAction,
} from "./cartSlice.types";

const initialState: CartSliceState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action: AddToCartAction) => {
      state.cartItems.push(action.payload);
      state.totalItems += 1;
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action: RemoveFromCartAction) => {
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );
      state.cartItems = newCartItems;
      state.totalItems -= 1;
      state.totalPrice -= action.payload.price;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
