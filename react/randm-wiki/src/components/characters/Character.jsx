import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams();

  const [char, setChar] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`,
        );
        setChar(response.data);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };

    fetchCharacter();
  }, [id]);

  return (
    <div className="char-page">
      {char ? (
        <>
          <img src={char.image} alt={char.name} />
          <div>
            <h1>{char.name}</h1>
            <ul>
              <li>
                <strong>Status:</strong> {char.status}
              </li>
              <li>
                <strong>Species:</strong> {char.species}
              </li>
              <li>
                <strong>Gender:</strong> {char.gender}
              </li>
              <li>
                <strong>Origin: </strong>
                <a
                  href={`/locations/${char.origin.url.split("/").slice(-1)[0]}`}
                >
                  {char.origin.name}
                </a>
              </li>
              <li>
                <strong>Location: </strong>
                <a
                  href={`/locations/${char.location.url.split("/").slice(-1)[0]}`}
                >
                  {char.location.name}
                </a>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Character;
