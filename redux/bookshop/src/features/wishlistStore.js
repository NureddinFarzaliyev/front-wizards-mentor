const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
};

export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";

export function wishlistReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_WISHLIST: {
      const { title, id, downloadUrl } = action.payload;
      const newItem = { title, id, downloadUrl };
      const updatedWishlist = [...state.wishlist, newItem];
      console.log("Added to wishlist:", newItem);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return {
        ...state,
        wishlist: updatedWishlist,
      };
    }
    case REMOVE_FROM_WISHLIST: {
      const updatedWishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id,
      );
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return {
        ...state,
        wishlist: updatedWishlist,
      };
    }
    default:
      return state;
  }
}
