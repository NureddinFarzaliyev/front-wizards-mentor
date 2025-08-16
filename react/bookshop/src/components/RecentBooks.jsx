import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../contexts/ApiContext";
import axios from "axios";
import BookCard from "./BookCard";

const RecentBooks = () => {
  const { recentBooksUrl } = useContext(ApiContext);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchRecentBooks = async () => {
      try {
        const response = await axios.get(recentBooksUrl);
        if (response.status === 200) {
          setBooks(response.data.books);
        } else {
          console.error("Failed to fetch recent books:", response.statusText);
        }
      } catch (error) {
        console.error("Failed to fetch recent books:", error);
      }
    };

    fetchRecentBooks();
  }, []);

  return (
    <div className="recent-books">
      <h2>Recent Books</h2>
      <div className="book-list">
        {books.length > 0 ? (
          books.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              id={book.id}
              author={book.authors}
              coverUrl={book.image}
            />
          ))
        ) : (
          <p>Loading recent books...</p>
        )}
      </div>
    </div>
  );
};

export default RecentBooks;
