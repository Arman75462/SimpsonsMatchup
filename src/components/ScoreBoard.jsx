import { useState } from "react";
import "../styles/componentsStyles/ScoreBoard.css";

function ScoreBoard() {
  return (
    <div className="ScoreBoard">
      <p className="ScoreBoard__score">
        Score: <span className="ScoreBoard__score-value">0</span>
      </p>
      <p className="ScoreBoard__best-score">
        Best score: <span className="ScoreBoard__best-score-value">0</span>
      </p>
    </div>
  );
}

export default ScoreBoard;
