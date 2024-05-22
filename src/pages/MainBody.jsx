import { useState, useEffect } from "react";
import "../styles/pagesStyles/MainBody.css";
import CharacterCard from "../components/CharacterCard";
import OutcomeCard from "../components/OutcomeCard.jsx";
import { shuffleArray } from "/src/utils.js";
import { playSound } from "/src/utils.js";
import defeatSound from "/src/assets/audio/defeatSound.mp3";
import victorySound from "/src/assets/audio/victorySound.mp3";
import CharacterCardFlipSound from "/src/assets/audio/CharacterCardFlipSound.mp3";

function MainBody({
  characters,
  setIsMainMenuShowing,
  currentScore,
  setCurrentScore,
  bestScore,
  setBestScore,
  isAudioOn,
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

            if (isAudioOn) {
              playSound(defeatSound);
            }
          } else {
            const newScore = currentScore + 1;
            if (isAudioOn) {
              playSound(CharacterCardFlipSound);
            }

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

        if (isAudioOn) {
          playSound(victorySound);
        }
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
          isAudioOn={isAudioOn}
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
