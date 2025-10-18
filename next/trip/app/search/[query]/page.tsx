"use client";
import PlaceCard from "@/app/search/components/PlaceCard";
import { Place, Result, SuggestedPlace } from "@/app/search/types/data.types";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const { query } = useParams();
  const decodedQuery = decodeURIComponent(query as string);

  const [result, setResult] = useState<Result>();
  const [places, setPlaces] = useState<Place[]>();
  const [suggestedPlaces, setSuggestedPlaces] = useState<SuggestedPlace[]>();

  const baseUrl = "https://api.opentripmap.com/0.1/en/places";

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${baseUrl}/geoname?name=${decodedQuery}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`,
      );
      setResult(res.data);
    })();
  }, [decodedQuery]);

  const getPlaces = async () => {
    if (!result) return;
    const res = await axios.get(
      `${baseUrl}/radius?radius=500&lon=${result.lon}&lat=${result.lat}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`,
    );
    setPlaces(res.data.features);
  };

  const getSuggestedPlaces = async () => {
    if (!result) return;
    const res = await axios.get(
      `${baseUrl}/autosuggest?name=${decodedQuery}&radius=1000&lon=${result.lon}&lat=${result.lat}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`,
    );
    setSuggestedPlaces(res.data.features);
  };

  return (
    <div className="p-20">
      <b className="text-xl">
        Search reults for: <u>{decodedQuery}</u>
      </b>
      {result && (
        <div className="mb-10">
          <ul className="p-3 rounded-md border border-white mt-10 mb-5 w-fit bg-white/10">
            <li>Name: {result.name}</li>
            <li>Country: {result.country}</li>
            <li>Lat: {result.lat}</li>
            <li>Lon: {result.lon}</li>
          </ul>{" "}
          <button
            className="bg-white text-black p-2 rounded-md"
            onClick={getPlaces}
          >
            Click for places in radius
          </button>
          <button
            className="bg-white text-black p-2 rounded-md ml-3"
            onClick={getSuggestedPlaces}
          >
            Click for suggested places
          </button>
        </div>
      )}
      {places && <PlaceCard title="Places in Radius" places={places} />}
      {suggestedPlaces && (
        <PlaceCard title="Suggested Places" places={suggestedPlaces} />
      )}
    </div>
  );
};

export default page;
