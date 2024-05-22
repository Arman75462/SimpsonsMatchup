import { useState } from "react";
import "../styles/pagesStyles/MainMenu.css";
import Logo from "../components/Logo.jsx";
import DifficultyLevelButton from "../components/DifficultyLevelButton.jsx";
import buttonClickSound from "/src/assets/audio/buttonClickSound.mp3";
import { playSound } from "/src/utils.js";

function MainMenu({
  isAudioOn,
  setIsMainMenuShowing,
  setCharacters,
  charactersLists,
}) {
  const playButtonClickSound = () => {
    if (isAudioOn) {
      playSound(buttonClickSound);
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
    } else if (difficultyLevel === "Impossible") {
      setCharacters(charactersLists.impossibleMode);
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

        <DifficultyLevelButton
          difficultyLevel="Impossible"
          onClick={() => handleButtonClick("Impossible")}
        />
      </div>
    </div>
  );
}

export default MainMenu;
