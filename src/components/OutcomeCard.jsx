import { useState } from "react";
import "../styles/componentsStyles/OutcomeCard.css";
import DefeatImage from "/src/assets/simpsons-images/DefeatImage.webp";
import VictoryImage from "/src/assets/simpsons-images/VictoryImage.webp";

function OutcomeCard({
  outcomeStatus,
  setOutcomeStatus,
  setIsMainMenuShowing,
}) {
  function handleRestartButtonClick() {
    setOutcomeStatus("");
    setIsMainMenuShowing(true);
  }

  function OutcomeCardStyling() {
    if (outcomeStatus === "Victory") {
      return {
        backgroundImage: `url(${VictoryImage})`,
        boxShadow: "0px 0px 1vw 0.3vw blue",
      };
    } else if (outcomeStatus === "Defeat") {
      return {
        backgroundImage: `url(${DefeatImage})`,
        boxShadow: "0px 0px 1vw 0.3vw red",
      };
    }
  }

  return (
    <div className="OutcomeCard__blur">
      <div className="OutcomeCard" style={OutcomeCardStyling()}>
        <p className="OutcomeCard__result">{outcomeStatus}</p>
        <button
          className="OutcomeCard__restart-button"
          onClick={handleRestartButtonClick}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default OutcomeCard;
