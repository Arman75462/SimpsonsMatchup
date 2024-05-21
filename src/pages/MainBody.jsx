import { useState, useEffect } from "react";
import "../styles/pagesStyles/MainBody.css";
import CharacterCard from "../components/CharacterCard";
import OutcomeCard from "../components/OutcomeCard.jsx";
import { shuffleArray } from "/src/utils.js";

function MainBody({ characters, setIsMainMenuShowing }) {
  const [outcomeStatus, setOutcomeStatus] = useState();
  const [shuffledCharacters, setShuffledCharacters] = useState([]);

  useEffect(() => {
    setShuffledCharacters(shuffleArray(characters));
  }, [characters]);

  useEffect(() => {
    console.log(shuffledCharacters);
  }, [shuffledCharacters]);

  const handleCardClick = (clickedCharacterName) => {
    setShuffledCharacters((prevCharacters) => {
      let defeat = false;
      let victory = false;

      const updatedCharacters = prevCharacters.map((character) => {
        if (character.name === clickedCharacterName) {
          if (character.wasClicked) {
            defeat = true;
          }
          return { ...character, wasClicked: true };
        }
        return character;
      });

      const clickedCount = updatedCharacters.filter(
        (character) => character.wasClicked
      ).length;
      if (clickedCount === characters.length) {
        victory = true;
      }

      if (defeat) {
        setOutcomeStatus("Defeat");
      } else if (victory) {
        setOutcomeStatus("Victory");
      }

      return shuffleArray(updatedCharacters);
    });
  };

  const clickedCount = shuffledCharacters.filter(
    (character) => character.wasClicked
  ).length;

  return (
    <>
      {outcomeStatus === "Victory" || outcomeStatus === "Defeat" ? (
        <OutcomeCard
          outcomeStatus={outcomeStatus}
          setOutcomeStatus={setOutcomeStatus}
          setIsMainMenuShowing={setIsMainMenuShowing}
        />
      ) : null}

      <main className="MainBody">
        <div className="MainBody__characters-container">
          {shuffledCharacters.map((character) => (
            <CharacterCard
              key={character.name}
              characterImageLocation={character.imageLocation}
              characterName={character.name}
              onClick={() => handleCardClick(character.name)}
            />
          ))}
        </div>

        <p className="MainBody__click-counter">
          {clickedCount}/{characters.length}
        </p>
      </main>
    </>
  );
}

export default MainBody;
