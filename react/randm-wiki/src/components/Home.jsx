import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character",
        );
        setData(response.data.results);
        setTotalPages(response.data.info.pages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.length !== 0 ? <p>{data.map((i) => i.name)}</p> : <p>Loading</p>}
    </div>
  );
};

export default Home;
