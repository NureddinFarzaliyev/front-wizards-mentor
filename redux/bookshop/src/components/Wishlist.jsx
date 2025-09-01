import { useDispatch, useSelector } from "react-redux";
import { removefromwishlist } from "../features/wishlistActions";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();
  console.log("current wishlist:", wishlist);

  return (
    <div className="wishlist">
      <h2>Wishlist</h2>
      {wishlist?.length > 0 ? (
        wishlist.map(({ title, id, downloadUrl }, index) => (
          <div key={index} className="wishlist-item">
            <h3>{title}</h3>
            <div>
              <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                <button disabled={!downloadUrl}>⬇️ Download</button>
              </a>
              <button
                onClick={() => {
                  dispatch(removefromwishlist(id));
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
