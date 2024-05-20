import { useState } from "react";
import "../styles/componentsStyles/OutcomeCard.css";

function OutcomeCard() {
  return (
    <div className="OutcomeCard__blur">
      <div className="OutcomeCard">
        <p className="OutcomeCard__result">Victory!</p>
        <button className="OutcomeCard__restart-button">Restart</button>
      </div>
    </div>
  );
}

export default OutcomeCard;
