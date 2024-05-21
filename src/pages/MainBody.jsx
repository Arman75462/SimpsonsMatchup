import { useState, useEffect } from "react";
import "../styles/pagesStyles/MainBody.css";
import CharacterCard from "../components/CharacterCard";
import OutcomeCard from "../components/OutcomeCard.jsx";
import { shuffleArray } from "/src/utils.js";
import defeatSound from "/src/assets/audio/defeatSound.mp3";
import victorySound from "/src/assets/audio/victorySound.mp3";

function MainBody({
  characters,
  setIsMainMenuShowing,
  currentScore,
  setCurrentScore,
  bestScore,
  setBestScore,
}) {
  const [outcomeStatus, setOutcomeStatus] = useState();
  const [shuffledCharacters, setShuffledCharacters] = useState([]);

  useEffect(() => {
    setShuffledCharacters(shuffleArray(characters));
  }, [characters]);

  const handleCardClick = (clickedCharacterName) => {
    setShuffledCharacters((prevCharacters) => {
      const updatedCharacters = prevCharacters.map((character) => {
        if (character.name === clickedCharacterName) {
          if (character.wasClicked) {
            setOutcomeStatus("Defeat");
            setCurrentScore(0);

            // Create defeat audio and play it
            const audio = new Audio(defeatSound);
            audio.play();
          } else {
            const newScore = currentScore + 1;
            setCurrentScore(newScore);
            if (newScore > bestScore) {
              setBestScore(newScore);
            }
          }
          return { ...character, wasClicked: true };
        }
        return character;
      });

      const newClickedCount = updatedCharacters.filter(
        (character) => character.wasClicked
      ).length;

      if (newClickedCount === characters.length && outcomeStatus !== "Defeat") {
        setOutcomeStatus("Victory");
        setCurrentScore(0);

        // Create victory audio and play it
        const audio = new Audio(victorySound);
        audio.play();
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
