import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../contexts/ApiContext";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addtowishlist, removefromwishlist } from "../features/wishlistActions";

const BookPage = () => {
  const { id: bookId } = useParams();
  const { bookDetailsBaseUrl } = useContext(ApiContext);

  const [bookData, setBookData] = useState(null);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await axios.get(`${bookDetailsBaseUrl}/${bookId}`);
        setBookData(response.data);
      } catch (error) {
        console.error("Failed to fetch book data:", error);
      }
    };

    fetchBookData();
  }, [bookId, bookDetailsBaseUrl]);

  const {
    title,
    description,
    authors,
    pages,
    publisher,
    image,
    year,
    download,
  } = bookData || {};

  const AddToWishlistButton = () => {
    const isInWishlist = wishlist.some((item) => item.id === bookId); // checkIfInWishlist(bookId);

    const handleClick = () => {
      if (isInWishlist) {
        dispatch(removefromwishlist(bookId));
      } else {
        dispatch(addtowishlist({ id: bookId, title, downloadUrl: download }));
      }
    };

    return (
      <button onClick={handleClick} className="wishlist-button">
        {isInWishlist ? "❌ Remove from Wishlist" : "❤️ Add to Wishlist"}
      </button>
    );
  };

  return (
    <div className="book-page">
      {bookData ? (
        <div className="book-details">
          <img src={image} alt={title} />
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>
              <strong>Authors:</strong> {authors}
            </p>
            <p>
              <strong>Publisher:</strong> {publisher}
            </p>
            <p>
              <strong>Year:</strong> {year}
            </p>
            <p>
              <strong>Pages:</strong> {pages}
            </p>
            <AddToWishlistButton />
          </div>
        </div>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
};

export default BookPage;
