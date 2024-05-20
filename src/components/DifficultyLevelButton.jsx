import { useState } from "react";
import "../styles/componentsStyles/DifficultyLevelButton.css";

function DifficultyLevelButton({ difficultyLevel, onClick }) {
  return (
    <button className="DifficultyLevelButton" onClick={onClick}>
      {difficultyLevel}
    </button>
  );
}

export default DifficultyLevelButton;
