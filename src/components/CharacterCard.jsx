import { useState } from "react";
import "../styles/componentsStyles/CharacterCard.css";

function CharacterCard({ characterImage, characterName }) {
  return (
    <div className="CharacterCard">
      <img
        src={characterImage}
        alt={`image of ${characterName} in the Simpsons`}
      />
      <p>{characterName}</p>
    </div>
  );
}

export default CharacterCard;
