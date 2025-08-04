const CharacterCard = ({ char }) => {
  console.log(char);
  return (
    <a href={`/characters/${char.id}`}>
      <div className="char-card">
        <img src={char.image} alt={char.name} />
        <h2>{char.name}</h2>
        <div>
          <p>{char.status === "Alive" ? "🫀" : "☠️"} </p>
          <p>{char.species}</p>
        </div>
      </div>
    </a>
  );
};

export default CharacterCard;
