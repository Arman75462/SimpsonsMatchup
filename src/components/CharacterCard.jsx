import "../styles/componentsStyles/CharacterCard.css";

function CharacterCard({ characterImageLocation, characterName, onClick }) {
  return (
    <div className="CharacterCard" onClick={onClick}>
      <img
        src={characterImageLocation}
        alt={`image of ${characterName} in the Simpsons`}
      />
      <p>{characterName}</p>
    </div>
  );
}

export default CharacterCard;
