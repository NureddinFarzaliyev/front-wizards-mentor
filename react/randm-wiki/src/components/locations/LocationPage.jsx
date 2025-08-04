import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterCard from "../characters/CharacterCard";

const LocationPage = () => {
  const { id } = useParams();

  const [locationData, setLocationData] = useState(null);
  const [residents, setResidents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/location/${id}`,
        );
        setLocationData(response.data);

        const residentIds = response.data.residents.map((url) => {
          const parts = url.split("/");
          return parts[parts.length - 1];
        });

        const residentsResponse = await axios.get(
          `https://rickandmortyapi.com/api/character/${residentIds.join(",")}`,
        );

        setResidents(
          Array.isArray(residentsResponse.data)
            ? residentsResponse.data
            : [residentsResponse.data],
        );
      } catch (error) {
        console.error("Failed to fetch location:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocation();
  }, [id]);

  // useEffect(() => {
  //   const fetchLocation = async () => {
  //     const response = await axios.get(
  //       `https://rickandmortyapi.com/api/location/${id}`,
  //     );
  //     setLocationData(response.data);
  //     console.log("Location data fetched:", response.data);
  //   };
  //
  //   fetchLocation();
  // }, [id]);
  //
  // useEffect(() => {
  //   if (locationData) {
  //     const ids = locationData.residents.map((resident) => {
  //       const splittedResident = resident.split("/");
  //       const length = splittedResident.length;
  //       return splittedResident[length - 1];
  //     });
  //
  //     console.log(ids);
  //     // fetch data based on ids
  //   }
  // }, [locationData]);

  return (
    <div className="char-page">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="loc-page">
          <h1>{locationData?.name}</h1>
          <ul>
            <li>
              <strong>Type:</strong> {locationData?.type}
            </li>
            <li>
              <strong>Dimension:</strong> {locationData?.dimension}
            </li>
          </ul>
          <h2>Residents:</h2>
          {residents.length === 0 ? (
            <p>No residents found.</p>
          ) : (
            <div className="residents-list">
              {residents?.map((resident, index) => (
                <CharacterCard key={index} char={resident} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationPage;
