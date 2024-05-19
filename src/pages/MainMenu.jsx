import { useState } from "react";
import "../styles/pagesStyles/MainMenu.css";
import Logo from "../components/Logo.jsx";
import DifficultyLevelButton from "../components/DifficultyLevelButton.jsx";

function MainMenu({ isAudioOn }) {
  return (
    <div className="MainMenu">
      <Logo isAudioOn={isAudioOn} className="LogoMainMenu" />
      <p>Memory Game</p>
      <div className="MainMenu__button-difficulty-container">
        <DifficultyLevelButton difficultyLevel="Nightmare" />
        <DifficultyLevelButton difficultyLevel="Hard" />
        <DifficultyLevelButton difficultyLevel="Medium" />
        <DifficultyLevelButton difficultyLevel="Easy" />
        <DifficultyLevelButton difficultyLevel="Easiest" />
      </div>
    </div>
  );
}

export default MainMenu;
