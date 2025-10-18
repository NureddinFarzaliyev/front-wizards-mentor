import { Place } from "@/app/search/types/data.types";

const PlaceCard = ({ places, title }: { places: Place[]; title: string }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-5">{title}</h1>
      {places.map((place, idx) => (
        <div
          key={`place-${idx}`}
          className="my-3 p-3 border border-white rounded-md"
        >
          <h2 className="text-lg font-bold mb-2">
            {place.properties.name} - {place.properties.rate}/10{" "}
          </h2>
          <div className="flex gap-2">
            {place.properties.kinds.split(",").map((kind, kidx) => (
              <span
                className="w-fit bg-blue-900/50 text-white p-1 rounded-md text-sm"
                key={`place-prop-tag-${kidx}`}
              >
                {kind.split("_").join(" ")}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaceCard;
