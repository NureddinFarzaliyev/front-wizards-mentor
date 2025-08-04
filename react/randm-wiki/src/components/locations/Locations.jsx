import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./../Pagination";
import LocationCard from "./LocationCard";

const Characters = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchCharacters = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/location?page=${page}`,
      );
      setLocations(response.data.results);
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
      <h1>Locations</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="character-list">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
      )}
    </div>
  );
};

export default Characters;
