import { useState } from "react";
import "../styles/componentsStyles/CharacterCard.css";

function CharacterCard({ characterImageLocation, characterName }) {
  return (
    <div className="CharacterCard">
      <img
        src={characterImageLocation}
        alt={`image of ${characterName} in the Simpsons`}
      />
      <p>{characterName}</p>
    </div>
  );
}

export default CharacterCard;
