import { useEffect, useState } from "react";
import { WishlistContext } from "./WishlistContext";

const WishlistContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (title, id, downloadUrl) => {
    const newItem = { title, id, downloadUrl };
    setWishlist((prevWishlist) => [...prevWishlist, newItem]);
  };

  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== id),
    );
  };

  const checkIfInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, checkIfInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContextProvider;
