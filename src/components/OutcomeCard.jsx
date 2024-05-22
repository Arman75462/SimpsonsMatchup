import { useState } from "react";
import "../styles/componentsStyles/OutcomeCard.css";
import DefeatImage from "/src/assets/simpsons-images/DefeatImage.webp";
import VictoryImage from "/src/assets/simpsons-images/VictoryImage.webp";
import logoClickSound from "/src/assets/audio/logoClickSound.mp3";
import { playSound } from "/src/utils.js";

function OutcomeCard({
  outcomeStatus,
  setOutcomeStatus,
  setIsMainMenuShowing,
  isAudioOn,
}) {
  function handleRestartButtonClick() {
    setOutcomeStatus("");
    setIsMainMenuShowing(true);

    if (isAudioOn) {
      playSound(logoClickSound);
    }
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

  function OutcomeCardResultStyling() {
    if (outcomeStatus === "Victory") {
      return {
        backgroundColor: "#57A0FF",
      };
    } else if (outcomeStatus === "Defeat") {
      return {
        backgroundColor: "#F23131",
      };
    }
  }

  return (
    <div className="OutcomeCard__blur">
      <div className="OutcomeCard" style={OutcomeCardStyling()}>
        <p className="OutcomeCard__result" style={OutcomeCardResultStyling()}>
          {outcomeStatus}
        </p>
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
