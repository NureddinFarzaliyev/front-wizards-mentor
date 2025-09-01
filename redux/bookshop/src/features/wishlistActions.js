import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./wishlistStore";

export function addtowishlist({ title, id, downloadurl }) {
  return {
    type: ADD_TO_WISHLIST,
    payload: { title, id, downloadurl },
  };
}

export function removefromwishlist(id) {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: { id },
  };
}
