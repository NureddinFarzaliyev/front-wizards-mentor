import { combineReducers, createStore } from "redux";
import { wishlistReducer } from "./wishlistStore";

export const store = createStore(
  combineReducers({ wishlist: wishlistReducer }),
);
