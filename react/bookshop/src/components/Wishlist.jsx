import { useContext } from "react";
import { WishlistContext } from "../contexts/WishlistContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="wishlist">
      <h2>Wishlist</h2>
      {wishlist.length > 0 ? (
        wishlist.map(({ title, id, downloadUrl }, index) => (
          <div key={index} className="wishlist-item">
            <h3>{title}</h3>
            <div>
              <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                <button disabled={!downloadUrl}>⬇️ Download</button>
              </a>
              <button
                onClick={() => {
                  removeFromWishlist(id);
                }}
              >
                ❌ Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Your wishlist is empty. Add some items to it!</p>
      )}
    </div>
  );
};

export default Wishlist;
