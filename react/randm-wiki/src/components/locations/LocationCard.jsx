const LocationCard = ({ location }) => {
  return (
    <a href={`/locations/${location.id}`}>
      <div className="location-card">{location.name}</div>
    </a>
  );
};

export default LocationCard;
