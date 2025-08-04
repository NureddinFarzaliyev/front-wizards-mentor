import axios from "axios";
import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import Pagination from "./../Pagination";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchCharacters = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}`,
      );
      setCharacters(response.data.results);
      setTotalPages(response.data.info.pages);
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  return (
    <div className="characters-container">
      <h1>Characters</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="character-list">
            {characters.map((character) => (
              <CharacterCard key={character.id} char={character} />
            ))}
          </div>
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
      )}
    </div>
  );
};

export default Characters;
