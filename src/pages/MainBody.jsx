import { useState, useEffect } from "react";

import "../styles/pagesStyles/MainBody.css";
import CharacterCard from "../components/CharacterCard";
import OutcomeCard from "../components/OutcomeCard.jsx";
import { shuffleArray } from "/src/utils.js";
import { playSound } from "/src/utils.js";
import defeatSound from "/src/assets/audio/defeatSound.mp3";
import victorySound from "/src/assets/audio/victorySound.mp3";
import CharacterCardFlipSound from "/src/assets/audio/CharacterCardFlipSound.mp3";
import logoClickSound from "/src/assets/audio/logoClickSound.mp3";
import buttonClickSound from "/src/assets/audio/buttonClickSound.mp3";

function MainBody({
  characters,
  setIsMainMenuShowing,
  currentScore,
  setCurrentScore,
  bestScore,
  setBestScore,
  isAudioOn,
}) {
  // State to track the wether or not to display the OutcomeCard component or not
  const [outcomeStatus, setOutcomeStatus] = useState("");
  // State to store the shuffled list of characters
  const [shuffledCharacters, setShuffledCharacters] = useState([]);

  // Each time the cards are rendered or rerendered (by clicking on the cards or by selecting the difficulty level), the order of the cards will be shuffled (randomized)
  useEffect(() => {
    setShuffledCharacters(shuffleArray(characters));
  }, [characters]);

  // Disable scrolling when OutcomeCard is visible
  useEffect(() => {
    document.body.style.overflow = outcomeStatus ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [outcomeStatus]);

  function handleDefeat() {
    setCurrentScore(0);
    setOutcomeStatus("Defeat");

    if (isAudioOn) {
      playSound(defeatSound);
    }
  }

  function handleVictory() {
    setCurrentScore(0);
    setOutcomeStatus("Victory");

    if (isAudioOn) {
      playSound(victorySound);
    }
  }

  function updateScores(newScore) {
    // Update the current score state with the new score
    setCurrentScore(newScore);

    // If the new score is higher than the best score, update the best score state
    if (newScore > bestScore) {
      setBestScore(newScore);
    }

    if (isAudioOn) {
      playSound(CharacterCardFlipSound);
    }
  }

  // Update the status of a character to indicate it has been clicked
  function updateCharacterStatus(character, wasClicked) {
    return { ...character, wasClicked };
  }

  // Get the updated list of characters after a character has been clicked
  function getUpdatedCharacters(prevCharacters, clickedCharacterName) {
    // Iterate through the previous list of characters
    return prevCharacters.map((character) => {
      // Check if the current character is the one that was clicked
      if (character.name === clickedCharacterName) {
        // If the character was already clicked, handle defeat
        if (character.wasClicked) {
          handleDefeat();
        } else {
          // If the character was not clicked before, increment the score
          const newScore = currentScore + 1;
          // Update the scores with the new score
          updateScores(newScore);
        }
        // Update the character's status to indicate it has been clicked
        return updateCharacterStatus(character, true);
      }
      // If the character is not the one that was clicked, return it unchanged
      return character;
    });
  }

  function handleCardClick(clickedCharacterName) {
    // Update the shuffled characters state with a new array based on the previous state
    setShuffledCharacters((prevCharacters) => {
      // Get the updated list of characters after processing the click event
      const updatedCharacters = getUpdatedCharacters(
        prevCharacters,
        clickedCharacterName
      );

      // Count the number of characters that have been clicked
      const newClickedCount = updatedCharacters.filter(
        (character) => character.wasClicked
      ).length;

      // If all characters have been clicked and the outcome is not a defeat, trigger a victory
      if (newClickedCount === characters.length && outcomeStatus !== "Defeat") {
        handleVictory();
      }

      // Shuffle the updated characters array to randomize the order and return it to update the state
      return shuffleArray(updatedCharacters);
    });
  }

  function handleRestart() {
    setOutcomeStatus("");
    setShuffledCharacters(
      shuffleArray(
        characters.map((character) => ({ ...character, wasClicked: false }))
      )
    );
    setCurrentScore(0);

    if (isAudioOn) {
      playSound(buttonClickSound);
    }
  }

  function handleBackToMainMenu() {
    setOutcomeStatus("");
    setIsMainMenuShowing(true);

    if (isAudioOn) {
      playSound(logoClickSound);
    }
  }

  // Count the number of clicked characters
  const clickedCount = shuffledCharacters.filter(
    (character) => character.wasClicked
  ).length;

  return (
    <>
      {outcomeStatus === "Victory" || outcomeStatus === "Defeat" ? (
        <OutcomeCard
          outcomeStatus={outcomeStatus}
          handleBackToMainMenu={handleBackToMainMenu}
          handleRestart={handleRestart}
        />
      ) : null}

      <main className="MainBody">
        <div className="MainBody__characters-container">
          {shuffledCharacters.map((character) => (
            <CharacterCard
              key={character.id}
              characterImageLocation={character.imageLocation}
              characterName={character.name}
              onClick={() => {
                handleCardClick(character.name);
              }}
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
