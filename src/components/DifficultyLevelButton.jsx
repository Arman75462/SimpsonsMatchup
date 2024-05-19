import { useState } from "react";
import "../styles/componentsStyles/DifficultyLevelButton.css";

function DifficultyLevelButton({ difficultyLevel }) {
  return <button className="DifficultyLevelButton">{difficultyLevel}</button>;
}

export default DifficultyLevelButton;
