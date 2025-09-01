import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ApiContext } from "../contexts/ApiContext";
import axios from "axios";
import BookCard from "./BookCard";

const SearchResuts = () => {
  const [query] = useSearchParams();
  const searchQuery = query.get("query");

  const { searchBaseUrl } = useContext(ApiContext);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery) {
        try {
          const response = await axios.get(
            `${searchBaseUrl}/search/${searchQuery}`,
          );
          if (response.data && response.data.books) {
            setSearchResults(response.data.books);
          } else {
            setSearchResults([]);
          }
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      } else {
        setSearchResults([]);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  return (
    <div className="search-results">
      <h2>Search Results for "{searchQuery}"</h2>
      <div className="book-list">
        {searchResults.length > 0 ? (
          searchResults.map((book, index) => (
            <BookCard
              title={book.title}
              coverUrl={book.image}
              author={book.authors}
              id={book.id}
              key={index}
            />
          ))
        ) : (
          <p>No results found for "{searchQuery}"</p>
        )}
      </div>
    </div>
  );
};

export default SearchResuts;
