import { useState } from "react";
import "../styles/pagesStyles/MainMenu.css";
import Logo from "../components/Logo.jsx";
import DifficultyLevelButton from "../components/DifficultyLevelButton.jsx";
import buttonClickSound from "/src/assets/audio/buttonClickSound.mp3";

function MainMenu({
  isAudioOn,
  setIsMainMenuShowing,
  setCharacters,
  charactersLists,
}) {
  const playButtonClickSound = () => {
    if (isAudioOn) {
      // Create an audio element and play it
      const audio = new Audio(buttonClickSound);
      audio.play();
    }
  };

  const handleButtonClick = (difficultyLevel) => {
    setIsMainMenuShowing(false);
    playButtonClickSound();

    if (difficultyLevel === "Easiest") {
      setCharacters(charactersLists.easiestMode);
    } else if (difficultyLevel === "Easy") {
      setCharacters(charactersLists.easyMode);
    } else if (difficultyLevel === "Medium") {
      setCharacters(charactersLists.mediumMode);
    } else if (difficultyLevel === "Hard") {
      setCharacters(charactersLists.hardMode);
    } else if (difficultyLevel === "Nightmare") {
      setCharacters(charactersLists.nightmareMode);
    }
  };

  return (
    <div className="MainMenu">
      <Logo isAudioOn={isAudioOn} className="LogoMainMenu" />

      <p>Memory Game</p>

      <div className="MainMenu__button-difficulty-container">
        <DifficultyLevelButton
          difficultyLevel="Easiest"
          onClick={() => handleButtonClick("Easiest")}
        />

        <DifficultyLevelButton
          difficultyLevel="Easy"
          onClick={() => handleButtonClick("Easy")}
        />

        <DifficultyLevelButton
          difficultyLevel="Medium"
          onClick={() => handleButtonClick("Medium")}
        />

        <DifficultyLevelButton
          difficultyLevel="Hard"
          onClick={() => handleButtonClick("Hard")}
        />

        <DifficultyLevelButton
          difficultyLevel="Nightmare"
          onClick={() => handleButtonClick("Nightmare")}
        />
      </div>
    </div>
  );
}

export default MainMenu;
