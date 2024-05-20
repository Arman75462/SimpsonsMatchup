import { useState } from "react";
import "../styles/pagesStyles/MainMenu.css";
import Logo from "../components/Logo.jsx";
import DifficultyLevelButton from "../components/DifficultyLevelButton.jsx";
import buttonClickSound from "/src/assets/audio/buttonClickSound.mp3";

function MainMenu({ isAudioOn }) {
  const playButtonClickSound = () => {
    if (isAudioOn) {
      // Create an audio element and play it
      const audio = new Audio(buttonClickSound);
      audio.play();
    }
  };

  return (
    <div className="MainMenu">
      <Logo isAudioOn={isAudioOn} className="LogoMainMenu" />

      <p>Memory Game</p>

      <div className="MainMenu__button-difficulty-container">
        <DifficultyLevelButton
          difficultyLevel="Nightmare"
          onClick={playButtonClickSound}
        />
        <DifficultyLevelButton
          difficultyLevel="Hard"
          onClick={playButtonClickSound}
        />
        <DifficultyLevelButton
          difficultyLevel="Medium"
          onClick={playButtonClickSound}
        />
        <DifficultyLevelButton
          difficultyLevel="Easy"
          onClick={playButtonClickSound}
        />
        <DifficultyLevelButton
          difficultyLevel="Easiest"
          onClick={playButtonClickSound}
        />
      </div>
    </div>
  );
}

export default MainMenu;
