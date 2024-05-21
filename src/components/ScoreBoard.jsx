import { useState } from "react";
import "../styles/componentsStyles/ScoreBoard.css";

function ScoreBoard({ currentScore, bestScore }) {
  return (
    <div className="ScoreBoard">
      <p className="ScoreBoard__score">
        Score: <span className="ScoreBoard__score-value">{currentScore}</span>
      </p>
      <p className="ScoreBoard__best-score">
        Best score:
        <span className="ScoreBoard__best-score-value">{bestScore}</span>
      </p>
    </div>
  );
}

export default ScoreBoard;
