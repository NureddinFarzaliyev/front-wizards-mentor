import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../contexts/ApiContext";
import axios from "axios";
import { WishlistContext } from "../contexts/WishlistContext";

const BookPage = () => {
  const { id: bookId } = useParams();
  const { bookDetailsBaseUrl } = useContext(ApiContext);
  const { addToWishlist, removeFromWishlist, checkIfInWishlist } =
    useContext(WishlistContext);

  const [bookData, setBookData] = useState(null);

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
    const isInWishlist = checkIfInWishlist(bookId);

    const handleClick = () => {
      if (isInWishlist) {
        removeFromWishlist(bookId);
      } else {
        addToWishlist(title, bookId, download);
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
